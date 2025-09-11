export const ECDSA = {
  "abi": [
    {
      "type": "error",
      "name": "ECDSAInvalidSignature",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ECDSAInvalidSignatureLength",
      "inputs": [
        {
          "name": "length",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ECDSAInvalidSignatureS",
      "inputs": [
        {
          "name": "s",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220afe5baaa70afb5d5897938428fd9afea3a468385e0423b4fd8c155d1dc78687864736f6c634300081a0033",
    "sourceMap": "344:7470:53:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x5f80fdfea2646970667358221220afe5baaa70afb5d5897938428fd9afea3a468385e0423b4fd8c155d1dc78687864736f6c634300081a0033",
    "sourceMap": "344:7470:53:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ECDSAInvalidSignature\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"}],\"name\":\"ECDSAInvalidSignatureLength\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"ECDSAInvalidSignatureS\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Elliptic Curve Digital Signature Algorithm (ECDSA) operations. These functions can be used to verify that a message was signed by the holder of the private keys of a given address.\",\"errors\":{\"ECDSAInvalidSignature()\":[{\"details\":\"The signature derives the `address(0)`.\"}],\"ECDSAInvalidSignatureLength(uint256)\":[{\"details\":\"The signature has an invalid length.\"}],\"ECDSAInvalidSignatureS(bytes32)\":[{\"details\":\"The signature has an S value that is in the upper half order.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":\"ECDSA\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0x69f54c02b7d81d505910ec198c11ed4c6a728418a868b906b4a0cf29946fda84\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8e25e4bdb7ae1f21d23bfee996e22736fc0ab44cfabedac82a757b1edc5623b9\",\"dweb:/ipfs/QmQdWQvB6JCP9ZMbzi8EvQ1PTETqkcTWrbcVurS7DKpa5n\"]}},\"version\":1}",
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
          "name": "ECDSAInvalidSignature"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ECDSAInvalidSignatureLength"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "type": "error",
          "name": "ECDSAInvalidSignatureS"
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
        "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol": "ECDSA"
      },
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol": {
        "keccak256": "0x69f54c02b7d81d505910ec198c11ed4c6a728418a868b906b4a0cf29946fda84",
        "urls": [
          "bzz-raw://8e25e4bdb7ae1f21d23bfee996e22736fc0ab44cfabedac82a757b1edc5623b9",
          "dweb:/ipfs/QmQdWQvB6JCP9ZMbzi8EvQ1PTETqkcTWrbcVurS7DKpa5n"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol",
    "id": 46514,
    "exportedSymbols": {
      "ECDSA": [
        46513
      ]
    },
    "nodeType": "SourceUnit",
    "src": "112:7703:53",
    "nodes": [
      {
        "id": 46167,
        "nodeType": "PragmaDirective",
        "src": "112:24:53",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 46513,
        "nodeType": "ContractDefinition",
        "src": "344:7470:53",
        "nodes": [
          {
            "id": 46173,
            "nodeType": "EnumDefinition",
            "src": "364:126:53",
            "nodes": [],
            "canonicalName": "ECDSA.RecoverError",
            "members": [
              {
                "id": 46169,
                "name": "NoError",
                "nameLocation": "392:7:53",
                "nodeType": "EnumValue",
                "src": "392:7:53"
              },
              {
                "id": 46170,
                "name": "InvalidSignature",
                "nameLocation": "409:16:53",
                "nodeType": "EnumValue",
                "src": "409:16:53"
              },
              {
                "id": 46171,
                "name": "InvalidSignatureLength",
                "nameLocation": "435:22:53",
                "nodeType": "EnumValue",
                "src": "435:22:53"
              },
              {
                "id": 46172,
                "name": "InvalidSignatureS",
                "nameLocation": "467:17:53",
                "nodeType": "EnumValue",
                "src": "467:17:53"
              }
            ],
            "name": "RecoverError",
            "nameLocation": "369:12:53"
          },
          {
            "id": 46176,
            "nodeType": "ErrorDefinition",
            "src": "564:30:53",
            "nodes": [],
            "documentation": {
              "id": 46174,
              "nodeType": "StructuredDocumentation",
              "src": "496:63:53",
              "text": " @dev The signature derives the `address(0)`."
            },
            "errorSelector": "f645eedf",
            "name": "ECDSAInvalidSignature",
            "nameLocation": "570:21:53",
            "parameters": {
              "id": 46175,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "591:2:53"
            }
          },
          {
            "id": 46181,
            "nodeType": "ErrorDefinition",
            "src": "665:50:53",
            "nodes": [],
            "documentation": {
              "id": 46177,
              "nodeType": "StructuredDocumentation",
              "src": "600:60:53",
              "text": " @dev The signature has an invalid length."
            },
            "errorSelector": "fce698f7",
            "name": "ECDSAInvalidSignatureLength",
            "nameLocation": "671:27:53",
            "parameters": {
              "id": 46180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46179,
                  "mutability": "mutable",
                  "name": "length",
                  "nameLocation": "707:6:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46181,
                  "src": "699:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 46178,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "698:16:53"
            }
          },
          {
            "id": 46186,
            "nodeType": "ErrorDefinition",
            "src": "811:40:53",
            "nodes": [],
            "documentation": {
              "id": 46182,
              "nodeType": "StructuredDocumentation",
              "src": "721:85:53",
              "text": " @dev The signature has an S value that is in the upper half order."
            },
            "errorSelector": "d78bce0c",
            "name": "ECDSAInvalidSignatureS",
            "nameLocation": "817:22:53",
            "parameters": {
              "id": 46185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46184,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "848:1:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46186,
                  "src": "840:9:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46183,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "840:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "839:11:53"
            }
          },
          {
            "id": 46239,
            "nodeType": "FunctionDefinition",
            "src": "2129:778:53",
            "nodes": [],
            "body": {
              "id": 46238,
              "nodeType": "Block",
              "src": "2285:622:53",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 46204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 46201,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46191,
                        "src": "2299:9:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 46202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2309:6:53",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2299:16:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "3635",
                      "id": 46203,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2319:2:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_65_by_1",
                        "typeString": "int_const 65"
                      },
                      "value": "65"
                    },
                    "src": "2299:22:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 46236,
                    "nodeType": "Block",
                    "src": "2793:108:53",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 46225,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2823:1:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 46224,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2815:7:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 46223,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2815:7:53",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 46226,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2815:10:53",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 46227,
                                "name": "RecoverError",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46173,
                                "src": "2827:12:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$46173_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 46228,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "2840:22:53",
                              "memberName": "InvalidSignatureLength",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 46171,
                              "src": "2827:35:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$46173",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 46231,
                                    "name": "signature",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 46191,
                                    "src": "2872:9:53",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 46232,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2882:6:53",
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "src": "2872:16:53",
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
                                "id": 46230,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2864:7:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 46229,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2864:7:53",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 46233,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2864:25:53",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "id": 46234,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2814:76:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 46200,
                        "id": 46235,
                        "nodeType": "Return",
                        "src": "2807:83:53"
                      }
                    ]
                  },
                  "id": 46237,
                  "nodeType": "IfStatement",
                  "src": "2295:606:53",
                  "trueBody": {
                    "id": 46222,
                    "nodeType": "Block",
                    "src": "2323:464:53",
                    "statements": [
                      {
                        "assignments": [
                          46206
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 46206,
                            "mutability": "mutable",
                            "name": "r",
                            "nameLocation": "2345:1:53",
                            "nodeType": "VariableDeclaration",
                            "scope": 46222,
                            "src": "2337:9:53",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 46205,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2337:7:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 46207,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2337:9:53"
                      },
                      {
                        "assignments": [
                          46209
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 46209,
                            "mutability": "mutable",
                            "name": "s",
                            "nameLocation": "2368:1:53",
                            "nodeType": "VariableDeclaration",
                            "scope": 46222,
                            "src": "2360:9:53",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 46208,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2360:7:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 46210,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2360:9:53"
                      },
                      {
                        "assignments": [
                          46212
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 46212,
                            "mutability": "mutable",
                            "name": "v",
                            "nameLocation": "2389:1:53",
                            "nodeType": "VariableDeclaration",
                            "scope": 46222,
                            "src": "2383:7:53",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "typeName": {
                              "id": 46211,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "2383:5:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 46213,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2383:7:53"
                      },
                      {
                        "AST": {
                          "nativeSrc": "2560:171:53",
                          "nodeType": "YulBlock",
                          "src": "2560:171:53",
                          "statements": [
                            {
                              "nativeSrc": "2578:32:53",
                              "nodeType": "YulAssignment",
                              "src": "2578:32:53",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "signature",
                                        "nativeSrc": "2593:9:53",
                                        "nodeType": "YulIdentifier",
                                        "src": "2593:9:53"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2604:4:53",
                                        "nodeType": "YulLiteral",
                                        "src": "2604:4:53",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "2589:3:53",
                                      "nodeType": "YulIdentifier",
                                      "src": "2589:3:53"
                                    },
                                    "nativeSrc": "2589:20:53",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2589:20:53"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nativeSrc": "2583:5:53",
                                  "nodeType": "YulIdentifier",
                                  "src": "2583:5:53"
                                },
                                "nativeSrc": "2583:27:53",
                                "nodeType": "YulFunctionCall",
                                "src": "2583:27:53"
                              },
                              "variableNames": [
                                {
                                  "name": "r",
                                  "nativeSrc": "2578:1:53",
                                  "nodeType": "YulIdentifier",
                                  "src": "2578:1:53"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "2627:32:53",
                              "nodeType": "YulAssignment",
                              "src": "2627:32:53",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "signature",
                                        "nativeSrc": "2642:9:53",
                                        "nodeType": "YulIdentifier",
                                        "src": "2642:9:53"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2653:4:53",
                                        "nodeType": "YulLiteral",
                                        "src": "2653:4:53",
                                        "type": "",
                                        "value": "0x40"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "2638:3:53",
                                      "nodeType": "YulIdentifier",
                                      "src": "2638:3:53"
                                    },
                                    "nativeSrc": "2638:20:53",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2638:20:53"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nativeSrc": "2632:5:53",
                                  "nodeType": "YulIdentifier",
                                  "src": "2632:5:53"
                                },
                                "nativeSrc": "2632:27:53",
                                "nodeType": "YulFunctionCall",
                                "src": "2632:27:53"
                              },
                              "variableNames": [
                                {
                                  "name": "s",
                                  "nativeSrc": "2627:1:53",
                                  "nodeType": "YulIdentifier",
                                  "src": "2627:1:53"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "2676:41:53",
                              "nodeType": "YulAssignment",
                              "src": "2676:41:53",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2686:1:53",
                                    "nodeType": "YulLiteral",
                                    "src": "2686:1:53",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "signature",
                                            "nativeSrc": "2699:9:53",
                                            "nodeType": "YulIdentifier",
                                            "src": "2699:9:53"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "2710:4:53",
                                            "nodeType": "YulLiteral",
                                            "src": "2710:4:53",
                                            "type": "",
                                            "value": "0x60"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "2695:3:53",
                                          "nodeType": "YulIdentifier",
                                          "src": "2695:3:53"
                                        },
                                        "nativeSrc": "2695:20:53",
                                        "nodeType": "YulFunctionCall",
                                        "src": "2695:20:53"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nativeSrc": "2689:5:53",
                                      "nodeType": "YulIdentifier",
                                      "src": "2689:5:53"
                                    },
                                    "nativeSrc": "2689:27:53",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2689:27:53"
                                  }
                                ],
                                "functionName": {
                                  "name": "byte",
                                  "nativeSrc": "2681:4:53",
                                  "nodeType": "YulIdentifier",
                                  "src": "2681:4:53"
                                },
                                "nativeSrc": "2681:36:53",
                                "nodeType": "YulFunctionCall",
                                "src": "2681:36:53"
                              },
                              "variableNames": [
                                {
                                  "name": "v",
                                  "nativeSrc": "2676:1:53",
                                  "nodeType": "YulIdentifier",
                                  "src": "2676:1:53"
                                }
                              ]
                            }
                          ]
                        },
                        "evmVersion": "cancun",
                        "externalReferences": [
                          {
                            "declaration": 46206,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2578:1:53",
                            "valueSize": 1
                          },
                          {
                            "declaration": 46209,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2627:1:53",
                            "valueSize": 1
                          },
                          {
                            "declaration": 46191,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2593:9:53",
                            "valueSize": 1
                          },
                          {
                            "declaration": 46191,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2642:9:53",
                            "valueSize": 1
                          },
                          {
                            "declaration": 46191,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2699:9:53",
                            "valueSize": 1
                          },
                          {
                            "declaration": 46212,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2676:1:53",
                            "valueSize": 1
                          }
                        ],
                        "flags": [
                          "memory-safe"
                        ],
                        "id": 46214,
                        "nodeType": "InlineAssembly",
                        "src": "2535:196:53"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 46216,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46189,
                              "src": "2762:4:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 46217,
                              "name": "v",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46212,
                              "src": "2768:1:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "id": 46218,
                              "name": "r",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46206,
                              "src": "2771:1:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 46219,
                              "name": "s",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46209,
                              "src": "2774:1:53",
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
                              },
                              {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 46215,
                            "name": "tryRecover",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              46239,
                              46319,
                              46427
                            ],
                            "referencedDeclaration": 46427,
                            "src": "2751:10:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                              "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                            }
                          },
                          "id": 46220,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2751:25:53",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 46200,
                        "id": 46221,
                        "nodeType": "Return",
                        "src": "2744:32:53"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 46187,
              "nodeType": "StructuredDocumentation",
              "src": "857:1267:53",
              "text": " @dev Returns the address that signed a hashed message (`hash`) with `signature` or an error. This will not\n return address(0) without also returning an error description. Errors are documented using an enum (error type)\n and a bytes32 providing additional information about the error.\n If no error is returned, then the address can be used for verification purposes.\n The `ecrecover` EVM precompile allows for malleable (non-unique) signatures:\n this function rejects them by requiring the `s` value to be in the lower\n half order, and the `v` value to be either 27 or 28.\n IMPORTANT: `hash` _must_ be the result of a hash operation for the\n verification to be secure: it is possible to craft signatures that\n recover to arbitrary addresses for non-hashed data. A safe way to ensure\n this is by receiving a hash of the original message (which may otherwise\n be too long), and then calling {MessageHashUtils-toEthSignedMessageHash} on it.\n Documentation for signature generation:\n - with https://web3js.readthedocs.io/en/v1.3.4/web3-eth-accounts.html#sign[Web3.js]\n - with https://docs.ethers.io/v5/api/signer/#Signer-signMessage[ethers]"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryRecover",
            "nameLocation": "2138:10:53",
            "parameters": {
              "id": 46192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46189,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "2166:4:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46239,
                  "src": "2158:12:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46188,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2158:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46191,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "2193:9:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46239,
                  "src": "2180:22:53",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 46190,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2180:5:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2148:60:53"
            },
            "returnParameters": {
              "id": 46200,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46194,
                  "mutability": "mutable",
                  "name": "recovered",
                  "nameLocation": "2240:9:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46239,
                  "src": "2232:17:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46193,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2232:7:53",
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
                  "id": 46197,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "2264:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46239,
                  "src": "2251:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$46173",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 46196,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 46195,
                      "name": "RecoverError",
                      "nameLocations": [
                        "2251:12:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 46173,
                      "src": "2251:12:53"
                    },
                    "referencedDeclaration": 46173,
                    "src": "2251:12:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$46173",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46199,
                  "mutability": "mutable",
                  "name": "errArg",
                  "nameLocation": "2277:6:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46239,
                  "src": "2269:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46198,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2269:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2231:53:53"
            },
            "scope": 46513,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46269,
            "nodeType": "FunctionDefinition",
            "src": "3714:255:53",
            "nodes": [],
            "body": {
              "id": 46268,
              "nodeType": "Block",
              "src": "3801:168:53",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    46250,
                    46253,
                    46255
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46250,
                      "mutability": "mutable",
                      "name": "recovered",
                      "nameLocation": "3820:9:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 46268,
                      "src": "3812:17:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 46249,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3812:7:53",
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
                      "id": 46253,
                      "mutability": "mutable",
                      "name": "error",
                      "nameLocation": "3844:5:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 46268,
                      "src": "3831:18:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$46173",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "typeName": {
                        "id": 46252,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 46251,
                          "name": "RecoverError",
                          "nameLocations": [
                            "3831:12:53"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 46173,
                          "src": "3831:12:53"
                        },
                        "referencedDeclaration": 46173,
                        "src": "3831:12:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 46255,
                      "mutability": "mutable",
                      "name": "errorArg",
                      "nameLocation": "3859:8:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 46268,
                      "src": "3851:16:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 46254,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3851:7:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46260,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 46257,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46242,
                        "src": "3882:4:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 46258,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46244,
                        "src": "3888:9:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 46256,
                      "name": "tryRecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        46239,
                        46319,
                        46427
                      ],
                      "referencedDeclaration": 46239,
                      "src": "3871:10:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes memory) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                      }
                    },
                    "id": 46259,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3871:27:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3811:87:53"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 46262,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46253,
                        "src": "3920:5:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "id": 46263,
                        "name": "errorArg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46255,
                        "src": "3927:8:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 46261,
                      "name": "_throwError",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46512,
                      "src": "3908:11:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_RecoverError_$46173_$_t_bytes32_$returns$__$",
                        "typeString": "function (enum ECDSA.RecoverError,bytes32) pure"
                      }
                    },
                    "id": 46264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3908:28:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 46265,
                  "nodeType": "ExpressionStatement",
                  "src": "3908:28:53"
                },
                {
                  "expression": {
                    "id": 46266,
                    "name": "recovered",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 46250,
                    "src": "3953:9:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 46248,
                  "id": 46267,
                  "nodeType": "Return",
                  "src": "3946:16:53"
                }
              ]
            },
            "documentation": {
              "id": 46240,
              "nodeType": "StructuredDocumentation",
              "src": "2913:796:53",
              "text": " @dev Returns the address that signed a hashed message (`hash`) with\n `signature`. This address can then be used for verification purposes.\n The `ecrecover` EVM precompile allows for malleable (non-unique) signatures:\n this function rejects them by requiring the `s` value to be in the lower\n half order, and the `v` value to be either 27 or 28.\n IMPORTANT: `hash` _must_ be the result of a hash operation for the\n verification to be secure: it is possible to craft signatures that\n recover to arbitrary addresses for non-hashed data. A safe way to ensure\n this is by receiving a hash of the original message (which may otherwise\n be too long), and then calling {MessageHashUtils-toEthSignedMessageHash} on it."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recover",
            "nameLocation": "3723:7:53",
            "parameters": {
              "id": 46245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46242,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "3739:4:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46269,
                  "src": "3731:12:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46241,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3731:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46244,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "3758:9:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46269,
                  "src": "3745:22:53",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 46243,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3745:5:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3730:38:53"
            },
            "returnParameters": {
              "id": 46248,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46247,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46269,
                  "src": "3792:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46246,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3792:7:53",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3791:9:53"
            },
            "scope": 46513,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46319,
            "nodeType": "FunctionDefinition",
            "src": "4185:505:53",
            "nodes": [],
            "body": {
              "id": 46318,
              "nodeType": "Block",
              "src": "4348:342:53",
              "nodes": [],
              "statements": [
                {
                  "id": 46317,
                  "nodeType": "UncheckedBlock",
                  "src": "4358:326:53",
                  "statements": [
                    {
                      "assignments": [
                        46287
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 46287,
                          "mutability": "mutable",
                          "name": "s",
                          "nameLocation": "4390:1:53",
                          "nodeType": "VariableDeclaration",
                          "scope": 46317,
                          "src": "4382:9:53",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "typeName": {
                            "id": 46286,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "4382:7:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 46294,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 46293,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 46288,
                          "name": "vs",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46276,
                          "src": "4394:2:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "307837666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666",
                              "id": 46291,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4407:66:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819967_by_1",
                                "typeString": "int_const 5789...(69 digits omitted)...9967"
                              },
                              "value": "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819967_by_1",
                                "typeString": "int_const 5789...(69 digits omitted)...9967"
                              }
                            ],
                            "id": 46290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4399:7:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes32_$",
                              "typeString": "type(bytes32)"
                            },
                            "typeName": {
                              "id": 46289,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "4399:7:53",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 46292,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4399:75:53",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "4394:80:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4382:92:53"
                    },
                    {
                      "assignments": [
                        46296
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 46296,
                          "mutability": "mutable",
                          "name": "v",
                          "nameLocation": "4591:1:53",
                          "nodeType": "VariableDeclaration",
                          "scope": 46317,
                          "src": "4585:7:53",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          },
                          "typeName": {
                            "id": 46295,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "4585:5:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 46309,
                      "initialValue": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 46307,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "components": [
                                {
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 46304,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "arguments": [
                                      {
                                        "id": 46301,
                                        "name": "vs",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 46276,
                                        "src": "4610:2:53",
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
                                      "id": 46300,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "4602:7:53",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                      },
                                      "typeName": {
                                        "id": 46299,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4602:7:53",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 46302,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "4602:11:53",
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
                                    "id": 46303,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4617:3:53",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "255"
                                  },
                                  "src": "4602:18:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 46305,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "4601:20:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "hexValue": "3237",
                              "id": 46306,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4624:2:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_27_by_1",
                                "typeString": "int_const 27"
                              },
                              "value": "27"
                            },
                            "src": "4601:25:53",
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
                          "id": 46298,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4595:5:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint8_$",
                            "typeString": "type(uint8)"
                          },
                          "typeName": {
                            "id": 46297,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "4595:5:53",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 46308,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4595:32:53",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4585:42:53"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 46311,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46272,
                            "src": "4659:4:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 46312,
                            "name": "v",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46296,
                            "src": "4665:1:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          {
                            "id": 46313,
                            "name": "r",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46274,
                            "src": "4668:1:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 46314,
                            "name": "s",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46287,
                            "src": "4671:1:53",
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
                            },
                            {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 46310,
                          "name": "tryRecover",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            46239,
                            46319,
                            46427
                          ],
                          "referencedDeclaration": 46427,
                          "src": "4648:10:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                            "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "id": 46315,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4648:25:53",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                          "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                        }
                      },
                      "functionReturnParameters": 46285,
                      "id": 46316,
                      "nodeType": "Return",
                      "src": "4641:32:53"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 46270,
              "nodeType": "StructuredDocumentation",
              "src": "3975:205:53",
              "text": " @dev Overload of {ECDSA-tryRecover} that receives the `r` and `vs` short-signature fields separately.\n See https://eips.ethereum.org/EIPS/eip-2098[ERC-2098 short signatures]"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryRecover",
            "nameLocation": "4194:10:53",
            "parameters": {
              "id": 46277,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46272,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "4222:4:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46319,
                  "src": "4214:12:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46271,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4214:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46274,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "4244:1:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46319,
                  "src": "4236:9:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46273,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4236:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46276,
                  "mutability": "mutable",
                  "name": "vs",
                  "nameLocation": "4263:2:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46319,
                  "src": "4255:10:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46275,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4255:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4204:67:53"
            },
            "returnParameters": {
              "id": 46285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46279,
                  "mutability": "mutable",
                  "name": "recovered",
                  "nameLocation": "4303:9:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46319,
                  "src": "4295:17:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46278,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4295:7:53",
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
                  "id": 46282,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "4327:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46319,
                  "src": "4314:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$46173",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 46281,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 46280,
                      "name": "RecoverError",
                      "nameLocations": [
                        "4314:12:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 46173,
                      "src": "4314:12:53"
                    },
                    "referencedDeclaration": 46173,
                    "src": "4314:12:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$46173",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46284,
                  "mutability": "mutable",
                  "name": "errArg",
                  "nameLocation": "4340:6:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46319,
                  "src": "4332:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46283,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4332:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4294:53:53"
            },
            "scope": 46513,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46352,
            "nodeType": "FunctionDefinition",
            "src": "4817:250:53",
            "nodes": [],
            "body": {
              "id": 46351,
              "nodeType": "Block",
              "src": "4903:164:53",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    46332,
                    46335,
                    46337
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46332,
                      "mutability": "mutable",
                      "name": "recovered",
                      "nameLocation": "4922:9:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 46351,
                      "src": "4914:17:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 46331,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4914:7:53",
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
                      "id": 46335,
                      "mutability": "mutable",
                      "name": "error",
                      "nameLocation": "4946:5:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 46351,
                      "src": "4933:18:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$46173",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "typeName": {
                        "id": 46334,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 46333,
                          "name": "RecoverError",
                          "nameLocations": [
                            "4933:12:53"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 46173,
                          "src": "4933:12:53"
                        },
                        "referencedDeclaration": 46173,
                        "src": "4933:12:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 46337,
                      "mutability": "mutable",
                      "name": "errorArg",
                      "nameLocation": "4961:8:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 46351,
                      "src": "4953:16:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 46336,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4953:7:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46343,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 46339,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46322,
                        "src": "4984:4:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 46340,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46324,
                        "src": "4990:1:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 46341,
                        "name": "vs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46326,
                        "src": "4993:2:53",
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
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 46338,
                      "name": "tryRecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        46239,
                        46319,
                        46427
                      ],
                      "referencedDeclaration": 46319,
                      "src": "4973:10:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                      }
                    },
                    "id": 46342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4973:23:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4913:83:53"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 46345,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46335,
                        "src": "5018:5:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "id": 46346,
                        "name": "errorArg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46337,
                        "src": "5025:8:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 46344,
                      "name": "_throwError",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46512,
                      "src": "5006:11:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_RecoverError_$46173_$_t_bytes32_$returns$__$",
                        "typeString": "function (enum ECDSA.RecoverError,bytes32) pure"
                      }
                    },
                    "id": 46347,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5006:28:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 46348,
                  "nodeType": "ExpressionStatement",
                  "src": "5006:28:53"
                },
                {
                  "expression": {
                    "id": 46349,
                    "name": "recovered",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 46332,
                    "src": "5051:9:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 46330,
                  "id": 46350,
                  "nodeType": "Return",
                  "src": "5044:16:53"
                }
              ]
            },
            "documentation": {
              "id": 46320,
              "nodeType": "StructuredDocumentation",
              "src": "4696:116:53",
              "text": " @dev Overload of {ECDSA-recover} that receives the `r and `vs` short-signature fields separately."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recover",
            "nameLocation": "4826:7:53",
            "parameters": {
              "id": 46327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46322,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "4842:4:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46352,
                  "src": "4834:12:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46321,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4834:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46324,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "4856:1:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46352,
                  "src": "4848:9:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46323,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4848:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46326,
                  "mutability": "mutable",
                  "name": "vs",
                  "nameLocation": "4867:2:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46352,
                  "src": "4859:10:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46325,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4859:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4833:37:53"
            },
            "returnParameters": {
              "id": 46330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46329,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46352,
                  "src": "4894:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46328,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4894:7:53",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4893:9:53"
            },
            "scope": 46513,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46427,
            "nodeType": "FunctionDefinition",
            "src": "5203:1551:53",
            "nodes": [],
            "body": {
              "id": 46426,
              "nodeType": "Block",
              "src": "5382:1372:53",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 46376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 46373,
                          "name": "s",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46361,
                          "src": "6278:1:53",
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
                        "id": 46372,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6270:7:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 46371,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6270:7:53",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 46374,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6270:10:53",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "307837464646464646464646464646464646464646464646464646464646464646463544353736453733353741343530314444464539324634363638314232304130",
                      "id": 46375,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6283:66:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_57896044618658097711785492504343953926418782139537452191302581570759080747168_by_1",
                        "typeString": "int_const 5789...(69 digits omitted)...7168"
                      },
                      "value": "0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0"
                    },
                    "src": "6270:79:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46387,
                  "nodeType": "IfStatement",
                  "src": "6266:164:53",
                  "trueBody": {
                    "id": 46386,
                    "nodeType": "Block",
                    "src": "6351:79:53",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 46379,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6381:1:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 46378,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6373:7:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 46377,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6373:7:53",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 46380,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6373:10:53",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 46381,
                                "name": "RecoverError",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46173,
                                "src": "6385:12:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$46173_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 46382,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "6398:17:53",
                              "memberName": "InvalidSignatureS",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 46172,
                              "src": "6385:30:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$46173",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            {
                              "id": 46383,
                              "name": "s",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46361,
                              "src": "6417:1:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "id": 46384,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6372:47:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 46370,
                        "id": 46385,
                        "nodeType": "Return",
                        "src": "6365:54:53"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    46389
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46389,
                      "mutability": "mutable",
                      "name": "signer",
                      "nameLocation": "6532:6:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 46426,
                      "src": "6524:14:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 46388,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6524:7:53",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46396,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 46391,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46355,
                        "src": "6551:4:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 46392,
                        "name": "v",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46357,
                        "src": "6557:1:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 46393,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46359,
                        "src": "6560:1:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 46394,
                        "name": "s",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46361,
                        "src": "6563:1:53",
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
                        },
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 46390,
                      "name": "ecrecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -6,
                      "src": "6541:9:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address)"
                      }
                    },
                    "id": 46395,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6541:24:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6524:41:53"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 46402,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 46397,
                      "name": "signer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46389,
                      "src": "6579:6:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 46400,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6597:1:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 46399,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6589:7:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 46398,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6589:7:53",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 46401,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6589:10:53",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6579:20:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46416,
                  "nodeType": "IfStatement",
                  "src": "6575:113:53",
                  "trueBody": {
                    "id": 46415,
                    "nodeType": "Block",
                    "src": "6601:87:53",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 46405,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6631:1:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 46404,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6623:7:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 46403,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6623:7:53",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 46406,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6623:10:53",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 46407,
                                "name": "RecoverError",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46173,
                                "src": "6635:12:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$46173_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 46408,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "6648:16:53",
                              "memberName": "InvalidSignature",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 46170,
                              "src": "6635:29:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$46173",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 46411,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6674:1:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 46410,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6666:7:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 46409,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6666:7:53",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 46412,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6666:10:53",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "id": 46413,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6622:55:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 46370,
                        "id": 46414,
                        "nodeType": "Return",
                        "src": "6615:62:53"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 46417,
                        "name": "signer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46389,
                        "src": "6706:6:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 46418,
                          "name": "RecoverError",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46173,
                          "src": "6714:12:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_RecoverError_$46173_$",
                            "typeString": "type(enum ECDSA.RecoverError)"
                          }
                        },
                        "id": 46419,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6727:7:53",
                        "memberName": "NoError",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 46169,
                        "src": "6714:20:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 46422,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6744:1:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 46421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6736:7:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 46420,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "6736:7:53",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 46423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6736:10:53",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "id": 46424,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "6705:42:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "functionReturnParameters": 46370,
                  "id": 46425,
                  "nodeType": "Return",
                  "src": "6698:49:53"
                }
              ]
            },
            "documentation": {
              "id": 46353,
              "nodeType": "StructuredDocumentation",
              "src": "5073:125:53",
              "text": " @dev Overload of {ECDSA-tryRecover} that receives the `v`,\n `r` and `s` signature fields separately."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryRecover",
            "nameLocation": "5212:10:53",
            "parameters": {
              "id": 46362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46355,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "5240:4:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46427,
                  "src": "5232:12:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46354,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5232:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46357,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "5260:1:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46427,
                  "src": "5254:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 46356,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "5254:5:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46359,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "5279:1:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46427,
                  "src": "5271:9:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46358,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5271:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46361,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "5298:1:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46427,
                  "src": "5290:9:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46360,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5290:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5222:83:53"
            },
            "returnParameters": {
              "id": 46370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46364,
                  "mutability": "mutable",
                  "name": "recovered",
                  "nameLocation": "5337:9:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46427,
                  "src": "5329:17:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46363,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5329:7:53",
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
                  "id": 46367,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "5361:3:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46427,
                  "src": "5348:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$46173",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 46366,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 46365,
                      "name": "RecoverError",
                      "nameLocations": [
                        "5348:12:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 46173,
                      "src": "5348:12:53"
                    },
                    "referencedDeclaration": 46173,
                    "src": "5348:12:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$46173",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46369,
                  "mutability": "mutable",
                  "name": "errArg",
                  "nameLocation": "5374:6:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46427,
                  "src": "5366:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46368,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5366:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5328:53:53"
            },
            "scope": 46513,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46463,
            "nodeType": "FunctionDefinition",
            "src": "6887:260:53",
            "nodes": [],
            "body": {
              "id": 46462,
              "nodeType": "Block",
              "src": "6981:166:53",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    46442,
                    46445,
                    46447
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46442,
                      "mutability": "mutable",
                      "name": "recovered",
                      "nameLocation": "7000:9:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 46462,
                      "src": "6992:17:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 46441,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6992:7:53",
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
                      "id": 46445,
                      "mutability": "mutable",
                      "name": "error",
                      "nameLocation": "7024:5:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 46462,
                      "src": "7011:18:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$46173",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "typeName": {
                        "id": 46444,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 46443,
                          "name": "RecoverError",
                          "nameLocations": [
                            "7011:12:53"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 46173,
                          "src": "7011:12:53"
                        },
                        "referencedDeclaration": 46173,
                        "src": "7011:12:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 46447,
                      "mutability": "mutable",
                      "name": "errorArg",
                      "nameLocation": "7039:8:53",
                      "nodeType": "VariableDeclaration",
                      "scope": 46462,
                      "src": "7031:16:53",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 46446,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "7031:7:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46454,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 46449,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46430,
                        "src": "7062:4:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 46450,
                        "name": "v",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46432,
                        "src": "7068:1:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 46451,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46434,
                        "src": "7071:1:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 46452,
                        "name": "s",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46436,
                        "src": "7074:1:53",
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
                        },
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 46448,
                      "name": "tryRecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        46239,
                        46319,
                        46427
                      ],
                      "referencedDeclaration": 46427,
                      "src": "7051:10:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                        "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                      }
                    },
                    "id": 46453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7051:25:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6991:85:53"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 46456,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46445,
                        "src": "7098:5:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "id": 46457,
                        "name": "errorArg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46447,
                        "src": "7105:8:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 46455,
                      "name": "_throwError",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46512,
                      "src": "7086:11:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_RecoverError_$46173_$_t_bytes32_$returns$__$",
                        "typeString": "function (enum ECDSA.RecoverError,bytes32) pure"
                      }
                    },
                    "id": 46458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7086:28:53",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 46459,
                  "nodeType": "ExpressionStatement",
                  "src": "7086:28:53"
                },
                {
                  "expression": {
                    "id": 46460,
                    "name": "recovered",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 46442,
                    "src": "7131:9:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 46440,
                  "id": 46461,
                  "nodeType": "Return",
                  "src": "7124:16:53"
                }
              ]
            },
            "documentation": {
              "id": 46428,
              "nodeType": "StructuredDocumentation",
              "src": "6760:122:53",
              "text": " @dev Overload of {ECDSA-recover} that receives the `v`,\n `r` and `s` signature fields separately."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recover",
            "nameLocation": "6896:7:53",
            "parameters": {
              "id": 46437,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46430,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "6912:4:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46463,
                  "src": "6904:12:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46429,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6904:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46432,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "6924:1:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46463,
                  "src": "6918:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 46431,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "6918:5:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46434,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "6935:1:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46463,
                  "src": "6927:9:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46433,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6927:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46436,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "6946:1:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46463,
                  "src": "6938:9:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46435,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6938:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6903:45:53"
            },
            "returnParameters": {
              "id": 46440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46439,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46463,
                  "src": "6972:7:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46438,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6972:7:53",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6971:9:53"
            },
            "scope": 46513,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46512,
            "nodeType": "FunctionDefinition",
            "src": "7280:532:53",
            "nodes": [],
            "body": {
              "id": 46511,
              "nodeType": "Block",
              "src": "7352:460:53",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_RecoverError_$46173",
                      "typeString": "enum ECDSA.RecoverError"
                    },
                    "id": 46475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 46472,
                      "name": "error",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46467,
                      "src": "7366:5:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$46173",
                        "typeString": "enum ECDSA.RecoverError"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "id": 46473,
                        "name": "RecoverError",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46173,
                        "src": "7375:12:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_RecoverError_$46173_$",
                          "typeString": "type(enum ECDSA.RecoverError)"
                        }
                      },
                      "id": 46474,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "7388:7:53",
                      "memberName": "NoError",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46169,
                      "src": "7375:20:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$46173",
                        "typeString": "enum ECDSA.RecoverError"
                      }
                    },
                    "src": "7366:29:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_enum$_RecoverError_$46173",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "id": 46481,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 46478,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46467,
                        "src": "7462:5:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "id": 46479,
                          "name": "RecoverError",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46173,
                          "src": "7471:12:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_RecoverError_$46173_$",
                            "typeString": "type(enum ECDSA.RecoverError)"
                          }
                        },
                        "id": 46480,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "7484:16:53",
                        "memberName": "InvalidSignature",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 46170,
                        "src": "7471:29:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "src": "7462:38:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_enum$_RecoverError_$46173",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        "id": 46489,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 46486,
                          "name": "error",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46467,
                          "src": "7567:5:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_RecoverError_$46173",
                            "typeString": "enum ECDSA.RecoverError"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 46487,
                            "name": "RecoverError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46173,
                            "src": "7576:12:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_RecoverError_$46173_$",
                              "typeString": "type(enum ECDSA.RecoverError)"
                            }
                          },
                          "id": 46488,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "7589:22:53",
                          "memberName": "InvalidSignatureLength",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 46171,
                          "src": "7576:35:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_RecoverError_$46173",
                            "typeString": "enum ECDSA.RecoverError"
                          }
                        },
                        "src": "7567:44:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_enum$_RecoverError_$46173",
                            "typeString": "enum ECDSA.RecoverError"
                          },
                          "id": 46501,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 46498,
                            "name": "error",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46467,
                            "src": "7701:5:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_RecoverError_$46173",
                              "typeString": "enum ECDSA.RecoverError"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 46499,
                              "name": "RecoverError",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46173,
                              "src": "7710:12:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_RecoverError_$46173_$",
                                "typeString": "type(enum ECDSA.RecoverError)"
                              }
                            },
                            "id": 46500,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7723:17:53",
                            "memberName": "InvalidSignatureS",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 46172,
                            "src": "7710:30:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_RecoverError_$46173",
                              "typeString": "enum ECDSA.RecoverError"
                            }
                          },
                          "src": "7701:39:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 46507,
                        "nodeType": "IfStatement",
                        "src": "7697:109:53",
                        "trueBody": {
                          "id": 46506,
                          "nodeType": "Block",
                          "src": "7742:64:53",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 46503,
                                    "name": "errorArg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 46469,
                                    "src": "7786:8:53",
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
                                  "id": 46502,
                                  "name": "ECDSAInvalidSignatureS",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 46186,
                                  "src": "7763:22:53",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_bytes32_$returns$_t_error_$",
                                    "typeString": "function (bytes32) pure returns (error)"
                                  }
                                },
                                "id": 46504,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7763:32:53",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_error",
                                  "typeString": "error"
                                }
                              },
                              "id": 46505,
                              "nodeType": "RevertStatement",
                              "src": "7756:39:53"
                            }
                          ]
                        }
                      },
                      "id": 46508,
                      "nodeType": "IfStatement",
                      "src": "7563:243:53",
                      "trueBody": {
                        "id": 46497,
                        "nodeType": "Block",
                        "src": "7613:78:53",
                        "statements": [
                          {
                            "errorCall": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 46493,
                                      "name": "errorArg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 46469,
                                      "src": "7670:8:53",
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
                                    "id": 46492,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "7662:7:53",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 46491,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "7662:7:53",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 46494,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7662:17:53",
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
                                "id": 46490,
                                "name": "ECDSAInvalidSignatureLength",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46181,
                                "src": "7634:27:53",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                                  "typeString": "function (uint256) pure returns (error)"
                                }
                              },
                              "id": 46495,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7634:46:53",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_error",
                                "typeString": "error"
                              }
                            },
                            "id": 46496,
                            "nodeType": "RevertStatement",
                            "src": "7627:53:53"
                          }
                        ]
                      }
                    },
                    "id": 46509,
                    "nodeType": "IfStatement",
                    "src": "7458:348:53",
                    "trueBody": {
                      "id": 46485,
                      "nodeType": "Block",
                      "src": "7502:55:53",
                      "statements": [
                        {
                          "errorCall": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 46482,
                              "name": "ECDSAInvalidSignature",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46176,
                              "src": "7523:21:53",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                                "typeString": "function () pure returns (error)"
                              }
                            },
                            "id": 46483,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7523:23:53",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_error",
                              "typeString": "error"
                            }
                          },
                          "id": 46484,
                          "nodeType": "RevertStatement",
                          "src": "7516:30:53"
                        }
                      ]
                    }
                  },
                  "id": 46510,
                  "nodeType": "IfStatement",
                  "src": "7362:444:53",
                  "trueBody": {
                    "id": 46477,
                    "nodeType": "Block",
                    "src": "7397:55:53",
                    "statements": [
                      {
                        "functionReturnParameters": 46471,
                        "id": 46476,
                        "nodeType": "Return",
                        "src": "7411:7:53"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 46464,
              "nodeType": "StructuredDocumentation",
              "src": "7153:122:53",
              "text": " @dev Optionally reverts with the corresponding custom error according to the `error` argument provided."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_throwError",
            "nameLocation": "7289:11:53",
            "parameters": {
              "id": 46470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46467,
                  "mutability": "mutable",
                  "name": "error",
                  "nameLocation": "7314:5:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46512,
                  "src": "7301:18:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$46173",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 46466,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 46465,
                      "name": "RecoverError",
                      "nameLocations": [
                        "7301:12:53"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 46173,
                      "src": "7301:12:53"
                    },
                    "referencedDeclaration": 46173,
                    "src": "7301:12:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$46173",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46469,
                  "mutability": "mutable",
                  "name": "errorArg",
                  "nameLocation": "7329:8:53",
                  "nodeType": "VariableDeclaration",
                  "scope": 46512,
                  "src": "7321:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46468,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7321:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7300:38:53"
            },
            "returnParameters": {
              "id": 46471,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7352:0:53"
            },
            "scope": 46513,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "ECDSA",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 46168,
          "nodeType": "StructuredDocumentation",
          "src": "138:205:53",
          "text": " @dev Elliptic Curve Digital Signature Algorithm (ECDSA) operations.\n These functions can be used to verify that a message was signed by the holder\n of the private keys of a given address."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          46513
        ],
        "name": "ECDSA",
        "nameLocation": "352:5:53",
        "scope": 46514,
        "usedErrors": [
          46176,
          46181,
          46186
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 53
} as const;