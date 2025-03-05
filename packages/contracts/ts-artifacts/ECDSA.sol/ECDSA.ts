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
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122055cab156de3e9c35033e96f5b4ba7e0dcffec5ad13170884686d3c2ed2b4703964736f6c634300081a0033",
    "sourceMap": "344:7470:45:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;344:7470:45;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122055cab156de3e9c35033e96f5b4ba7e0dcffec5ad13170884686d3c2ed2b4703964736f6c634300081a0033",
    "sourceMap": "344:7470:45:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ECDSAInvalidSignature\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"}],\"name\":\"ECDSAInvalidSignatureLength\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"ECDSAInvalidSignatureS\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Elliptic Curve Digital Signature Algorithm (ECDSA) operations. These functions can be used to verify that a message was signed by the holder of the private keys of a given address.\",\"errors\":{\"ECDSAInvalidSignature()\":[{\"details\":\"The signature derives the `address(0)`.\"}],\"ECDSAInvalidSignatureLength(uint256)\":[{\"details\":\"The signature has an invalid length.\"}],\"ECDSAInvalidSignatureS(bytes32)\":[{\"details\":\"The signature has an S value that is in the upper half order.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":\"ECDSA\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0x69f54c02b7d81d505910ec198c11ed4c6a728418a868b906b4a0cf29946fda84\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8e25e4bdb7ae1f21d23bfee996e22736fc0ab44cfabedac82a757b1edc5623b9\",\"dweb:/ipfs/QmQdWQvB6JCP9ZMbzi8EvQ1PTETqkcTWrbcVurS7DKpa5n\"]}},\"version\":1}",
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
      "evmVersion": "paris",
      "libraries": {}
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
    "id": 41966,
    "exportedSymbols": {
      "ECDSA": [
        41965
      ]
    },
    "nodeType": "SourceUnit",
    "src": "112:7703:45",
    "nodes": [
      {
        "id": 41619,
        "nodeType": "PragmaDirective",
        "src": "112:24:45",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 41965,
        "nodeType": "ContractDefinition",
        "src": "344:7470:45",
        "nodes": [
          {
            "id": 41625,
            "nodeType": "EnumDefinition",
            "src": "364:126:45",
            "nodes": [],
            "canonicalName": "ECDSA.RecoverError",
            "members": [
              {
                "id": 41621,
                "name": "NoError",
                "nameLocation": "392:7:45",
                "nodeType": "EnumValue",
                "src": "392:7:45"
              },
              {
                "id": 41622,
                "name": "InvalidSignature",
                "nameLocation": "409:16:45",
                "nodeType": "EnumValue",
                "src": "409:16:45"
              },
              {
                "id": 41623,
                "name": "InvalidSignatureLength",
                "nameLocation": "435:22:45",
                "nodeType": "EnumValue",
                "src": "435:22:45"
              },
              {
                "id": 41624,
                "name": "InvalidSignatureS",
                "nameLocation": "467:17:45",
                "nodeType": "EnumValue",
                "src": "467:17:45"
              }
            ],
            "name": "RecoverError",
            "nameLocation": "369:12:45"
          },
          {
            "id": 41628,
            "nodeType": "ErrorDefinition",
            "src": "564:30:45",
            "nodes": [],
            "documentation": {
              "id": 41626,
              "nodeType": "StructuredDocumentation",
              "src": "496:63:45",
              "text": " @dev The signature derives the `address(0)`."
            },
            "errorSelector": "f645eedf",
            "name": "ECDSAInvalidSignature",
            "nameLocation": "570:21:45",
            "parameters": {
              "id": 41627,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "591:2:45"
            }
          },
          {
            "id": 41633,
            "nodeType": "ErrorDefinition",
            "src": "665:50:45",
            "nodes": [],
            "documentation": {
              "id": 41629,
              "nodeType": "StructuredDocumentation",
              "src": "600:60:45",
              "text": " @dev The signature has an invalid length."
            },
            "errorSelector": "fce698f7",
            "name": "ECDSAInvalidSignatureLength",
            "nameLocation": "671:27:45",
            "parameters": {
              "id": 41632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41631,
                  "mutability": "mutable",
                  "name": "length",
                  "nameLocation": "707:6:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41633,
                  "src": "699:14:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41630,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "698:16:45"
            }
          },
          {
            "id": 41638,
            "nodeType": "ErrorDefinition",
            "src": "811:40:45",
            "nodes": [],
            "documentation": {
              "id": 41634,
              "nodeType": "StructuredDocumentation",
              "src": "721:85:45",
              "text": " @dev The signature has an S value that is in the upper half order."
            },
            "errorSelector": "d78bce0c",
            "name": "ECDSAInvalidSignatureS",
            "nameLocation": "817:22:45",
            "parameters": {
              "id": 41637,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41636,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "848:1:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41638,
                  "src": "840:9:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41635,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "840:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "839:11:45"
            }
          },
          {
            "id": 41691,
            "nodeType": "FunctionDefinition",
            "src": "2129:778:45",
            "nodes": [],
            "body": {
              "id": 41690,
              "nodeType": "Block",
              "src": "2285:622:45",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 41656,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 41653,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41643,
                        "src": "2299:9:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 41654,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2309:6:45",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2299:16:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "3635",
                      "id": 41655,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2319:2:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_65_by_1",
                        "typeString": "int_const 65"
                      },
                      "value": "65"
                    },
                    "src": "2299:22:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 41688,
                    "nodeType": "Block",
                    "src": "2793:108:45",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41677,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2823:1:45",
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
                                "id": 41676,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2815:7:45",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41675,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2815:7:45",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41678,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2815:10:45",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 41679,
                                "name": "RecoverError",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41625,
                                "src": "2827:12:45",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$41625_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 41680,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "2840:22:45",
                              "memberName": "InvalidSignatureLength",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 41623,
                              "src": "2827:35:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$41625",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 41683,
                                    "name": "signature",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41643,
                                    "src": "2872:9:45",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 41684,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2882:6:45",
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "src": "2872:16:45",
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
                                "id": 41682,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2864:7:45",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 41681,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2864:7:45",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41685,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2864:25:45",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "id": 41686,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2814:76:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 41652,
                        "id": 41687,
                        "nodeType": "Return",
                        "src": "2807:83:45"
                      }
                    ]
                  },
                  "id": 41689,
                  "nodeType": "IfStatement",
                  "src": "2295:606:45",
                  "trueBody": {
                    "id": 41674,
                    "nodeType": "Block",
                    "src": "2323:464:45",
                    "statements": [
                      {
                        "assignments": [
                          41658
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 41658,
                            "mutability": "mutable",
                            "name": "r",
                            "nameLocation": "2345:1:45",
                            "nodeType": "VariableDeclaration",
                            "scope": 41674,
                            "src": "2337:9:45",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 41657,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2337:7:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 41659,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2337:9:45"
                      },
                      {
                        "assignments": [
                          41661
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 41661,
                            "mutability": "mutable",
                            "name": "s",
                            "nameLocation": "2368:1:45",
                            "nodeType": "VariableDeclaration",
                            "scope": 41674,
                            "src": "2360:9:45",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 41660,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2360:7:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 41662,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2360:9:45"
                      },
                      {
                        "assignments": [
                          41664
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 41664,
                            "mutability": "mutable",
                            "name": "v",
                            "nameLocation": "2389:1:45",
                            "nodeType": "VariableDeclaration",
                            "scope": 41674,
                            "src": "2383:7:45",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "typeName": {
                              "id": 41663,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "2383:5:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 41665,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2383:7:45"
                      },
                      {
                        "AST": {
                          "nativeSrc": "2560:171:45",
                          "nodeType": "YulBlock",
                          "src": "2560:171:45",
                          "statements": [
                            {
                              "nativeSrc": "2578:32:45",
                              "nodeType": "YulAssignment",
                              "src": "2578:32:45",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "signature",
                                        "nativeSrc": "2593:9:45",
                                        "nodeType": "YulIdentifier",
                                        "src": "2593:9:45"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2604:4:45",
                                        "nodeType": "YulLiteral",
                                        "src": "2604:4:45",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "2589:3:45",
                                      "nodeType": "YulIdentifier",
                                      "src": "2589:3:45"
                                    },
                                    "nativeSrc": "2589:20:45",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2589:20:45"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nativeSrc": "2583:5:45",
                                  "nodeType": "YulIdentifier",
                                  "src": "2583:5:45"
                                },
                                "nativeSrc": "2583:27:45",
                                "nodeType": "YulFunctionCall",
                                "src": "2583:27:45"
                              },
                              "variableNames": [
                                {
                                  "name": "r",
                                  "nativeSrc": "2578:1:45",
                                  "nodeType": "YulIdentifier",
                                  "src": "2578:1:45"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "2627:32:45",
                              "nodeType": "YulAssignment",
                              "src": "2627:32:45",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "signature",
                                        "nativeSrc": "2642:9:45",
                                        "nodeType": "YulIdentifier",
                                        "src": "2642:9:45"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "2653:4:45",
                                        "nodeType": "YulLiteral",
                                        "src": "2653:4:45",
                                        "type": "",
                                        "value": "0x40"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "2638:3:45",
                                      "nodeType": "YulIdentifier",
                                      "src": "2638:3:45"
                                    },
                                    "nativeSrc": "2638:20:45",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2638:20:45"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nativeSrc": "2632:5:45",
                                  "nodeType": "YulIdentifier",
                                  "src": "2632:5:45"
                                },
                                "nativeSrc": "2632:27:45",
                                "nodeType": "YulFunctionCall",
                                "src": "2632:27:45"
                              },
                              "variableNames": [
                                {
                                  "name": "s",
                                  "nativeSrc": "2627:1:45",
                                  "nodeType": "YulIdentifier",
                                  "src": "2627:1:45"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "2676:41:45",
                              "nodeType": "YulAssignment",
                              "src": "2676:41:45",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2686:1:45",
                                    "nodeType": "YulLiteral",
                                    "src": "2686:1:45",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "signature",
                                            "nativeSrc": "2699:9:45",
                                            "nodeType": "YulIdentifier",
                                            "src": "2699:9:45"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "2710:4:45",
                                            "nodeType": "YulLiteral",
                                            "src": "2710:4:45",
                                            "type": "",
                                            "value": "0x60"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "2695:3:45",
                                          "nodeType": "YulIdentifier",
                                          "src": "2695:3:45"
                                        },
                                        "nativeSrc": "2695:20:45",
                                        "nodeType": "YulFunctionCall",
                                        "src": "2695:20:45"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nativeSrc": "2689:5:45",
                                      "nodeType": "YulIdentifier",
                                      "src": "2689:5:45"
                                    },
                                    "nativeSrc": "2689:27:45",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2689:27:45"
                                  }
                                ],
                                "functionName": {
                                  "name": "byte",
                                  "nativeSrc": "2681:4:45",
                                  "nodeType": "YulIdentifier",
                                  "src": "2681:4:45"
                                },
                                "nativeSrc": "2681:36:45",
                                "nodeType": "YulFunctionCall",
                                "src": "2681:36:45"
                              },
                              "variableNames": [
                                {
                                  "name": "v",
                                  "nativeSrc": "2676:1:45",
                                  "nodeType": "YulIdentifier",
                                  "src": "2676:1:45"
                                }
                              ]
                            }
                          ]
                        },
                        "evmVersion": "paris",
                        "externalReferences": [
                          {
                            "declaration": 41658,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2578:1:45",
                            "valueSize": 1
                          },
                          {
                            "declaration": 41661,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2627:1:45",
                            "valueSize": 1
                          },
                          {
                            "declaration": 41643,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2593:9:45",
                            "valueSize": 1
                          },
                          {
                            "declaration": 41643,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2642:9:45",
                            "valueSize": 1
                          },
                          {
                            "declaration": 41643,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2699:9:45",
                            "valueSize": 1
                          },
                          {
                            "declaration": 41664,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "2676:1:45",
                            "valueSize": 1
                          }
                        ],
                        "flags": [
                          "memory-safe"
                        ],
                        "id": 41666,
                        "nodeType": "InlineAssembly",
                        "src": "2535:196:45"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 41668,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41641,
                              "src": "2762:4:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 41669,
                              "name": "v",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41664,
                              "src": "2768:1:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "id": 41670,
                              "name": "r",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41658,
                              "src": "2771:1:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 41671,
                              "name": "s",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41661,
                              "src": "2774:1:45",
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
                            "id": 41667,
                            "name": "tryRecover",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              41691,
                              41771,
                              41879
                            ],
                            "referencedDeclaration": 41879,
                            "src": "2751:10:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                              "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                            }
                          },
                          "id": 41672,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2751:25:45",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 41652,
                        "id": 41673,
                        "nodeType": "Return",
                        "src": "2744:32:45"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 41639,
              "nodeType": "StructuredDocumentation",
              "src": "857:1267:45",
              "text": " @dev Returns the address that signed a hashed message (`hash`) with `signature` or an error. This will not\n return address(0) without also returning an error description. Errors are documented using an enum (error type)\n and a bytes32 providing additional information about the error.\n If no error is returned, then the address can be used for verification purposes.\n The `ecrecover` EVM precompile allows for malleable (non-unique) signatures:\n this function rejects them by requiring the `s` value to be in the lower\n half order, and the `v` value to be either 27 or 28.\n IMPORTANT: `hash` _must_ be the result of a hash operation for the\n verification to be secure: it is possible to craft signatures that\n recover to arbitrary addresses for non-hashed data. A safe way to ensure\n this is by receiving a hash of the original message (which may otherwise\n be too long), and then calling {MessageHashUtils-toEthSignedMessageHash} on it.\n Documentation for signature generation:\n - with https://web3js.readthedocs.io/en/v1.3.4/web3-eth-accounts.html#sign[Web3.js]\n - with https://docs.ethers.io/v5/api/signer/#Signer-signMessage[ethers]"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryRecover",
            "nameLocation": "2138:10:45",
            "parameters": {
              "id": 41644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41641,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "2166:4:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41691,
                  "src": "2158:12:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41640,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2158:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41643,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "2193:9:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41691,
                  "src": "2180:22:45",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41642,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2180:5:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2148:60:45"
            },
            "returnParameters": {
              "id": 41652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41646,
                  "mutability": "mutable",
                  "name": "recovered",
                  "nameLocation": "2240:9:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41691,
                  "src": "2232:17:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41645,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2232:7:45",
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
                  "id": 41649,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "2264:3:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41691,
                  "src": "2251:16:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$41625",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 41648,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41647,
                      "name": "RecoverError",
                      "nameLocations": [
                        "2251:12:45"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41625,
                      "src": "2251:12:45"
                    },
                    "referencedDeclaration": 41625,
                    "src": "2251:12:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$41625",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41651,
                  "mutability": "mutable",
                  "name": "errArg",
                  "nameLocation": "2277:6:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41691,
                  "src": "2269:14:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41650,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2269:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2231:53:45"
            },
            "scope": 41965,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41721,
            "nodeType": "FunctionDefinition",
            "src": "3714:255:45",
            "nodes": [],
            "body": {
              "id": 41720,
              "nodeType": "Block",
              "src": "3801:168:45",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41702,
                    41705,
                    41707
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41702,
                      "mutability": "mutable",
                      "name": "recovered",
                      "nameLocation": "3820:9:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 41720,
                      "src": "3812:17:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 41701,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3812:7:45",
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
                      "id": 41705,
                      "mutability": "mutable",
                      "name": "error",
                      "nameLocation": "3844:5:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 41720,
                      "src": "3831:18:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$41625",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "typeName": {
                        "id": 41704,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 41703,
                          "name": "RecoverError",
                          "nameLocations": [
                            "3831:12:45"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41625,
                          "src": "3831:12:45"
                        },
                        "referencedDeclaration": 41625,
                        "src": "3831:12:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 41707,
                      "mutability": "mutable",
                      "name": "errorArg",
                      "nameLocation": "3859:8:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 41720,
                      "src": "3851:16:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 41706,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "3851:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41712,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 41709,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41694,
                        "src": "3882:4:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 41710,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41696,
                        "src": "3888:9:45",
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
                      "id": 41708,
                      "name": "tryRecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        41691,
                        41771,
                        41879
                      ],
                      "referencedDeclaration": 41691,
                      "src": "3871:10:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes memory) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                      }
                    },
                    "id": 41711,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3871:27:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3811:87:45"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41714,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41705,
                        "src": "3920:5:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "id": 41715,
                        "name": "errorArg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41707,
                        "src": "3927:8:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 41713,
                      "name": "_throwError",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41964,
                      "src": "3908:11:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_RecoverError_$41625_$_t_bytes32_$returns$__$",
                        "typeString": "function (enum ECDSA.RecoverError,bytes32) pure"
                      }
                    },
                    "id": 41716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3908:28:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41717,
                  "nodeType": "ExpressionStatement",
                  "src": "3908:28:45"
                },
                {
                  "expression": {
                    "id": 41718,
                    "name": "recovered",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 41702,
                    "src": "3953:9:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 41700,
                  "id": 41719,
                  "nodeType": "Return",
                  "src": "3946:16:45"
                }
              ]
            },
            "documentation": {
              "id": 41692,
              "nodeType": "StructuredDocumentation",
              "src": "2913:796:45",
              "text": " @dev Returns the address that signed a hashed message (`hash`) with\n `signature`. This address can then be used for verification purposes.\n The `ecrecover` EVM precompile allows for malleable (non-unique) signatures:\n this function rejects them by requiring the `s` value to be in the lower\n half order, and the `v` value to be either 27 or 28.\n IMPORTANT: `hash` _must_ be the result of a hash operation for the\n verification to be secure: it is possible to craft signatures that\n recover to arbitrary addresses for non-hashed data. A safe way to ensure\n this is by receiving a hash of the original message (which may otherwise\n be too long), and then calling {MessageHashUtils-toEthSignedMessageHash} on it."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recover",
            "nameLocation": "3723:7:45",
            "parameters": {
              "id": 41697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41694,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "3739:4:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41721,
                  "src": "3731:12:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41693,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3731:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41696,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "3758:9:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41721,
                  "src": "3745:22:45",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41695,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "3745:5:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3730:38:45"
            },
            "returnParameters": {
              "id": 41700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41699,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41721,
                  "src": "3792:7:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41698,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3792:7:45",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3791:9:45"
            },
            "scope": 41965,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41771,
            "nodeType": "FunctionDefinition",
            "src": "4185:505:45",
            "nodes": [],
            "body": {
              "id": 41770,
              "nodeType": "Block",
              "src": "4348:342:45",
              "nodes": [],
              "statements": [
                {
                  "id": 41769,
                  "nodeType": "UncheckedBlock",
                  "src": "4358:326:45",
                  "statements": [
                    {
                      "assignments": [
                        41739
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 41739,
                          "mutability": "mutable",
                          "name": "s",
                          "nameLocation": "4390:1:45",
                          "nodeType": "VariableDeclaration",
                          "scope": 41769,
                          "src": "4382:9:45",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "typeName": {
                            "id": 41738,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "4382:7:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 41746,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "id": 41745,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 41740,
                          "name": "vs",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41728,
                          "src": "4394:2:45",
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
                              "id": 41743,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4407:66:45",
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
                            "id": 41742,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4399:7:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes32_$",
                              "typeString": "type(bytes32)"
                            },
                            "typeName": {
                              "id": 41741,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "4399:7:45",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 41744,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4399:75:45",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "src": "4394:80:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4382:92:45"
                    },
                    {
                      "assignments": [
                        41748
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 41748,
                          "mutability": "mutable",
                          "name": "v",
                          "nameLocation": "4591:1:45",
                          "nodeType": "VariableDeclaration",
                          "scope": 41769,
                          "src": "4585:7:45",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          },
                          "typeName": {
                            "id": 41747,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "4585:5:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 41761,
                      "initialValue": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 41759,
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
                                  "id": 41756,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "arguments": [
                                      {
                                        "id": 41753,
                                        "name": "vs",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 41728,
                                        "src": "4610:2:45",
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
                                      "id": 41752,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "4602:7:45",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                      },
                                      "typeName": {
                                        "id": 41751,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4602:7:45",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 41754,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "4602:11:45",
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
                                    "id": 41755,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "4617:3:45",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "255"
                                  },
                                  "src": "4602:18:45",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 41757,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "4601:20:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "hexValue": "3237",
                              "id": 41758,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4624:2:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_27_by_1",
                                "typeString": "int_const 27"
                              },
                              "value": "27"
                            },
                            "src": "4601:25:45",
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
                          "id": 41750,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4595:5:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint8_$",
                            "typeString": "type(uint8)"
                          },
                          "typeName": {
                            "id": 41749,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "4595:5:45",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 41760,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4595:32:45",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "4585:42:45"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 41763,
                            "name": "hash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41724,
                            "src": "4659:4:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 41764,
                            "name": "v",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41748,
                            "src": "4665:1:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          {
                            "id": 41765,
                            "name": "r",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41726,
                            "src": "4668:1:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 41766,
                            "name": "s",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41739,
                            "src": "4671:1:45",
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
                          "id": 41762,
                          "name": "tryRecover",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            41691,
                            41771,
                            41879
                          ],
                          "referencedDeclaration": 41879,
                          "src": "4648:10:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                            "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "id": 41767,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4648:25:45",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                          "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                        }
                      },
                      "functionReturnParameters": 41737,
                      "id": 41768,
                      "nodeType": "Return",
                      "src": "4641:32:45"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 41722,
              "nodeType": "StructuredDocumentation",
              "src": "3975:205:45",
              "text": " @dev Overload of {ECDSA-tryRecover} that receives the `r` and `vs` short-signature fields separately.\n See https://eips.ethereum.org/EIPS/eip-2098[ERC-2098 short signatures]"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryRecover",
            "nameLocation": "4194:10:45",
            "parameters": {
              "id": 41729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41724,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "4222:4:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41771,
                  "src": "4214:12:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41723,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4214:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41726,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "4244:1:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41771,
                  "src": "4236:9:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41725,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4236:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41728,
                  "mutability": "mutable",
                  "name": "vs",
                  "nameLocation": "4263:2:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41771,
                  "src": "4255:10:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41727,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4255:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4204:67:45"
            },
            "returnParameters": {
              "id": 41737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41731,
                  "mutability": "mutable",
                  "name": "recovered",
                  "nameLocation": "4303:9:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41771,
                  "src": "4295:17:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41730,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4295:7:45",
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
                  "id": 41734,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "4327:3:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41771,
                  "src": "4314:16:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$41625",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 41733,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41732,
                      "name": "RecoverError",
                      "nameLocations": [
                        "4314:12:45"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41625,
                      "src": "4314:12:45"
                    },
                    "referencedDeclaration": 41625,
                    "src": "4314:12:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$41625",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41736,
                  "mutability": "mutable",
                  "name": "errArg",
                  "nameLocation": "4340:6:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41771,
                  "src": "4332:14:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41735,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4332:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4294:53:45"
            },
            "scope": 41965,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41804,
            "nodeType": "FunctionDefinition",
            "src": "4817:250:45",
            "nodes": [],
            "body": {
              "id": 41803,
              "nodeType": "Block",
              "src": "4903:164:45",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41784,
                    41787,
                    41789
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41784,
                      "mutability": "mutable",
                      "name": "recovered",
                      "nameLocation": "4922:9:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 41803,
                      "src": "4914:17:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 41783,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4914:7:45",
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
                      "id": 41787,
                      "mutability": "mutable",
                      "name": "error",
                      "nameLocation": "4946:5:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 41803,
                      "src": "4933:18:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$41625",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "typeName": {
                        "id": 41786,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 41785,
                          "name": "RecoverError",
                          "nameLocations": [
                            "4933:12:45"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41625,
                          "src": "4933:12:45"
                        },
                        "referencedDeclaration": 41625,
                        "src": "4933:12:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 41789,
                      "mutability": "mutable",
                      "name": "errorArg",
                      "nameLocation": "4961:8:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 41803,
                      "src": "4953:16:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 41788,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4953:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41795,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 41791,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41774,
                        "src": "4984:4:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 41792,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41776,
                        "src": "4990:1:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 41793,
                        "name": "vs",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41778,
                        "src": "4993:2:45",
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
                      "id": 41790,
                      "name": "tryRecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        41691,
                        41771,
                        41879
                      ],
                      "referencedDeclaration": 41771,
                      "src": "4973:10:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                      }
                    },
                    "id": 41794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4973:23:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4913:83:45"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41797,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41787,
                        "src": "5018:5:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "id": 41798,
                        "name": "errorArg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41789,
                        "src": "5025:8:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 41796,
                      "name": "_throwError",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41964,
                      "src": "5006:11:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_RecoverError_$41625_$_t_bytes32_$returns$__$",
                        "typeString": "function (enum ECDSA.RecoverError,bytes32) pure"
                      }
                    },
                    "id": 41799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5006:28:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41800,
                  "nodeType": "ExpressionStatement",
                  "src": "5006:28:45"
                },
                {
                  "expression": {
                    "id": 41801,
                    "name": "recovered",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 41784,
                    "src": "5051:9:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 41782,
                  "id": 41802,
                  "nodeType": "Return",
                  "src": "5044:16:45"
                }
              ]
            },
            "documentation": {
              "id": 41772,
              "nodeType": "StructuredDocumentation",
              "src": "4696:116:45",
              "text": " @dev Overload of {ECDSA-recover} that receives the `r and `vs` short-signature fields separately."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recover",
            "nameLocation": "4826:7:45",
            "parameters": {
              "id": 41779,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41774,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "4842:4:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41804,
                  "src": "4834:12:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41773,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4834:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41776,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "4856:1:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41804,
                  "src": "4848:9:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41775,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4848:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41778,
                  "mutability": "mutable",
                  "name": "vs",
                  "nameLocation": "4867:2:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41804,
                  "src": "4859:10:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41777,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4859:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4833:37:45"
            },
            "returnParameters": {
              "id": 41782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41781,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41804,
                  "src": "4894:7:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41780,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4894:7:45",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4893:9:45"
            },
            "scope": 41965,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41879,
            "nodeType": "FunctionDefinition",
            "src": "5203:1551:45",
            "nodes": [],
            "body": {
              "id": 41878,
              "nodeType": "Block",
              "src": "5382:1372:45",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 41828,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 41825,
                          "name": "s",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41813,
                          "src": "6278:1:45",
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
                        "id": 41824,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6270:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 41823,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6270:7:45",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41826,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6270:10:45",
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
                      "id": 41827,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6283:66:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_57896044618658097711785492504343953926418782139537452191302581570759080747168_by_1",
                        "typeString": "int_const 5789...(69 digits omitted)...7168"
                      },
                      "value": "0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0"
                    },
                    "src": "6270:79:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41839,
                  "nodeType": "IfStatement",
                  "src": "6266:164:45",
                  "trueBody": {
                    "id": 41838,
                    "nodeType": "Block",
                    "src": "6351:79:45",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41831,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6381:1:45",
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
                                "id": 41830,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6373:7:45",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41829,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6373:7:45",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41832,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6373:10:45",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 41833,
                                "name": "RecoverError",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41625,
                                "src": "6385:12:45",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$41625_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 41834,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "6398:17:45",
                              "memberName": "InvalidSignatureS",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 41624,
                              "src": "6385:30:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$41625",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            {
                              "id": 41835,
                              "name": "s",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41813,
                              "src": "6417:1:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "id": 41836,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6372:47:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 41822,
                        "id": 41837,
                        "nodeType": "Return",
                        "src": "6365:54:45"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    41841
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41841,
                      "mutability": "mutable",
                      "name": "signer",
                      "nameLocation": "6532:6:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 41878,
                      "src": "6524:14:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 41840,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6524:7:45",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41848,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 41843,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41807,
                        "src": "6551:4:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 41844,
                        "name": "v",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41809,
                        "src": "6557:1:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 41845,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41811,
                        "src": "6560:1:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 41846,
                        "name": "s",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41813,
                        "src": "6563:1:45",
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
                      "id": 41842,
                      "name": "ecrecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -6,
                      "src": "6541:9:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address)"
                      }
                    },
                    "id": 41847,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6541:24:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6524:41:45"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 41854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41849,
                      "name": "signer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41841,
                      "src": "6579:6:45",
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
                          "id": 41852,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6597:1:45",
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
                        "id": 41851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6589:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 41850,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6589:7:45",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41853,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6589:10:45",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6579:20:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41868,
                  "nodeType": "IfStatement",
                  "src": "6575:113:45",
                  "trueBody": {
                    "id": 41867,
                    "nodeType": "Block",
                    "src": "6601:87:45",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41857,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6631:1:45",
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
                                "id": 41856,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6623:7:45",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 41855,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6623:7:45",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41858,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6623:10:45",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 41859,
                                "name": "RecoverError",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41625,
                                "src": "6635:12:45",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$41625_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 41860,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "6648:16:45",
                              "memberName": "InvalidSignature",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 41622,
                              "src": "6635:29:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$41625",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 41863,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6674:1:45",
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
                                "id": 41862,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "6666:7:45",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": {
                                  "id": 41861,
                                  "name": "bytes32",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "6666:7:45",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41864,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6666:10:45",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "id": 41865,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6622:55:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "functionReturnParameters": 41822,
                        "id": 41866,
                        "nodeType": "Return",
                        "src": "6615:62:45"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 41869,
                        "name": "signer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41841,
                        "src": "6706:6:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 41870,
                          "name": "RecoverError",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41625,
                          "src": "6714:12:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_RecoverError_$41625_$",
                            "typeString": "type(enum ECDSA.RecoverError)"
                          }
                        },
                        "id": 41871,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "6727:7:45",
                        "memberName": "NoError",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 41621,
                        "src": "6714:20:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 41874,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6744:1:45",
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
                          "id": 41873,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6736:7:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 41872,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "6736:7:45",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 41875,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6736:10:45",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "id": 41876,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "6705:42:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "functionReturnParameters": 41822,
                  "id": 41877,
                  "nodeType": "Return",
                  "src": "6698:49:45"
                }
              ]
            },
            "documentation": {
              "id": 41805,
              "nodeType": "StructuredDocumentation",
              "src": "5073:125:45",
              "text": " @dev Overload of {ECDSA-tryRecover} that receives the `v`,\n `r` and `s` signature fields separately."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tryRecover",
            "nameLocation": "5212:10:45",
            "parameters": {
              "id": 41814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41807,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "5240:4:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41879,
                  "src": "5232:12:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41806,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5232:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41809,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "5260:1:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41879,
                  "src": "5254:7:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 41808,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "5254:5:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41811,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "5279:1:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41879,
                  "src": "5271:9:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41810,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5271:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41813,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "5298:1:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41879,
                  "src": "5290:9:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41812,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5290:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5222:83:45"
            },
            "returnParameters": {
              "id": 41822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41816,
                  "mutability": "mutable",
                  "name": "recovered",
                  "nameLocation": "5337:9:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41879,
                  "src": "5329:17:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41815,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5329:7:45",
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
                  "id": 41819,
                  "mutability": "mutable",
                  "name": "err",
                  "nameLocation": "5361:3:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41879,
                  "src": "5348:16:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$41625",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 41818,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41817,
                      "name": "RecoverError",
                      "nameLocations": [
                        "5348:12:45"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41625,
                      "src": "5348:12:45"
                    },
                    "referencedDeclaration": 41625,
                    "src": "5348:12:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$41625",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41821,
                  "mutability": "mutable",
                  "name": "errArg",
                  "nameLocation": "5374:6:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41879,
                  "src": "5366:14:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41820,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5366:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5328:53:45"
            },
            "scope": 41965,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41915,
            "nodeType": "FunctionDefinition",
            "src": "6887:260:45",
            "nodes": [],
            "body": {
              "id": 41914,
              "nodeType": "Block",
              "src": "6981:166:45",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41894,
                    41897,
                    41899
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41894,
                      "mutability": "mutable",
                      "name": "recovered",
                      "nameLocation": "7000:9:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 41914,
                      "src": "6992:17:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 41893,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "6992:7:45",
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
                      "id": 41897,
                      "mutability": "mutable",
                      "name": "error",
                      "nameLocation": "7024:5:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 41914,
                      "src": "7011:18:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$41625",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "typeName": {
                        "id": 41896,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 41895,
                          "name": "RecoverError",
                          "nameLocations": [
                            "7011:12:45"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 41625,
                          "src": "7011:12:45"
                        },
                        "referencedDeclaration": 41625,
                        "src": "7011:12:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 41899,
                      "mutability": "mutable",
                      "name": "errorArg",
                      "nameLocation": "7039:8:45",
                      "nodeType": "VariableDeclaration",
                      "scope": 41914,
                      "src": "7031:16:45",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 41898,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "7031:7:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41906,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 41901,
                        "name": "hash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41882,
                        "src": "7062:4:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 41902,
                        "name": "v",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41884,
                        "src": "7068:1:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      {
                        "id": 41903,
                        "name": "r",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41886,
                        "src": "7071:1:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 41904,
                        "name": "s",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41888,
                        "src": "7074:1:45",
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
                      "id": 41900,
                      "name": "tryRecover",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        41691,
                        41771,
                        41879
                      ],
                      "referencedDeclaration": 41879,
                      "src": "7051:10:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                        "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                      }
                    },
                    "id": 41905,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7051:25:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                      "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6991:85:45"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41908,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41897,
                        "src": "7098:5:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      {
                        "id": 41909,
                        "name": "errorArg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41899,
                        "src": "7105:8:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 41907,
                      "name": "_throwError",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41964,
                      "src": "7086:11:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_RecoverError_$41625_$_t_bytes32_$returns$__$",
                        "typeString": "function (enum ECDSA.RecoverError,bytes32) pure"
                      }
                    },
                    "id": 41910,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7086:28:45",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41911,
                  "nodeType": "ExpressionStatement",
                  "src": "7086:28:45"
                },
                {
                  "expression": {
                    "id": 41912,
                    "name": "recovered",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 41894,
                    "src": "7131:9:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 41892,
                  "id": 41913,
                  "nodeType": "Return",
                  "src": "7124:16:45"
                }
              ]
            },
            "documentation": {
              "id": 41880,
              "nodeType": "StructuredDocumentation",
              "src": "6760:122:45",
              "text": " @dev Overload of {ECDSA-recover} that receives the `v`,\n `r` and `s` signature fields separately."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "recover",
            "nameLocation": "6896:7:45",
            "parameters": {
              "id": 41889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41882,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "6912:4:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41915,
                  "src": "6904:12:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41881,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6904:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41884,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "6924:1:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41915,
                  "src": "6918:7:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 41883,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "6918:5:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41886,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "6935:1:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41915,
                  "src": "6927:9:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41885,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6927:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41888,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "6946:1:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41915,
                  "src": "6938:9:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41887,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6938:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6903:45:45"
            },
            "returnParameters": {
              "id": 41892,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41891,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41915,
                  "src": "6972:7:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41890,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6972:7:45",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6971:9:45"
            },
            "scope": 41965,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41964,
            "nodeType": "FunctionDefinition",
            "src": "7280:532:45",
            "nodes": [],
            "body": {
              "id": 41963,
              "nodeType": "Block",
              "src": "7352:460:45",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_RecoverError_$41625",
                      "typeString": "enum ECDSA.RecoverError"
                    },
                    "id": 41927,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41924,
                      "name": "error",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41919,
                      "src": "7366:5:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$41625",
                        "typeString": "enum ECDSA.RecoverError"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "id": 41925,
                        "name": "RecoverError",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41625,
                        "src": "7375:12:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_RecoverError_$41625_$",
                          "typeString": "type(enum ECDSA.RecoverError)"
                        }
                      },
                      "id": 41926,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "7388:7:45",
                      "memberName": "NoError",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 41621,
                      "src": "7375:20:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_RecoverError_$41625",
                        "typeString": "enum ECDSA.RecoverError"
                      }
                    },
                    "src": "7366:29:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_enum$_RecoverError_$41625",
                        "typeString": "enum ECDSA.RecoverError"
                      },
                      "id": 41933,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 41930,
                        "name": "error",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41919,
                        "src": "7462:5:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "id": 41931,
                          "name": "RecoverError",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41625,
                          "src": "7471:12:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_RecoverError_$41625_$",
                            "typeString": "type(enum ECDSA.RecoverError)"
                          }
                        },
                        "id": 41932,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "7484:16:45",
                        "memberName": "InvalidSignature",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 41622,
                        "src": "7471:29:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        }
                      },
                      "src": "7462:38:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_enum$_RecoverError_$41625",
                          "typeString": "enum ECDSA.RecoverError"
                        },
                        "id": 41941,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 41938,
                          "name": "error",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41919,
                          "src": "7567:5:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_RecoverError_$41625",
                            "typeString": "enum ECDSA.RecoverError"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 41939,
                            "name": "RecoverError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41625,
                            "src": "7576:12:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_RecoverError_$41625_$",
                              "typeString": "type(enum ECDSA.RecoverError)"
                            }
                          },
                          "id": 41940,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "7589:22:45",
                          "memberName": "InvalidSignatureLength",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 41623,
                          "src": "7576:35:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_RecoverError_$41625",
                            "typeString": "enum ECDSA.RecoverError"
                          }
                        },
                        "src": "7567:44:45",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_enum$_RecoverError_$41625",
                            "typeString": "enum ECDSA.RecoverError"
                          },
                          "id": 41953,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 41950,
                            "name": "error",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41919,
                            "src": "7701:5:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_RecoverError_$41625",
                              "typeString": "enum ECDSA.RecoverError"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 41951,
                              "name": "RecoverError",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41625,
                              "src": "7710:12:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_RecoverError_$41625_$",
                                "typeString": "type(enum ECDSA.RecoverError)"
                              }
                            },
                            "id": 41952,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "7723:17:45",
                            "memberName": "InvalidSignatureS",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 41624,
                            "src": "7710:30:45",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_RecoverError_$41625",
                              "typeString": "enum ECDSA.RecoverError"
                            }
                          },
                          "src": "7701:39:45",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 41959,
                        "nodeType": "IfStatement",
                        "src": "7697:109:45",
                        "trueBody": {
                          "id": 41958,
                          "nodeType": "Block",
                          "src": "7742:64:45",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 41955,
                                    "name": "errorArg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41921,
                                    "src": "7786:8:45",
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
                                  "id": 41954,
                                  "name": "ECDSAInvalidSignatureS",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 41638,
                                  "src": "7763:22:45",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_bytes32_$returns$_t_error_$",
                                    "typeString": "function (bytes32) pure returns (error)"
                                  }
                                },
                                "id": 41956,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7763:32:45",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_error",
                                  "typeString": "error"
                                }
                              },
                              "id": 41957,
                              "nodeType": "RevertStatement",
                              "src": "7756:39:45"
                            }
                          ]
                        }
                      },
                      "id": 41960,
                      "nodeType": "IfStatement",
                      "src": "7563:243:45",
                      "trueBody": {
                        "id": 41949,
                        "nodeType": "Block",
                        "src": "7613:78:45",
                        "statements": [
                          {
                            "errorCall": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 41945,
                                      "name": "errorArg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 41921,
                                      "src": "7670:8:45",
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
                                    "id": 41944,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "7662:7:45",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 41943,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "7662:7:45",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 41946,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7662:17:45",
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
                                "id": 41942,
                                "name": "ECDSAInvalidSignatureLength",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41633,
                                "src": "7634:27:45",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_error_pure$_t_uint256_$returns$_t_error_$",
                                  "typeString": "function (uint256) pure returns (error)"
                                }
                              },
                              "id": 41947,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7634:46:45",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_error",
                                "typeString": "error"
                              }
                            },
                            "id": 41948,
                            "nodeType": "RevertStatement",
                            "src": "7627:53:45"
                          }
                        ]
                      }
                    },
                    "id": 41961,
                    "nodeType": "IfStatement",
                    "src": "7458:348:45",
                    "trueBody": {
                      "id": 41937,
                      "nodeType": "Block",
                      "src": "7502:55:45",
                      "statements": [
                        {
                          "errorCall": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 41934,
                              "name": "ECDSAInvalidSignature",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41628,
                              "src": "7523:21:45",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                                "typeString": "function () pure returns (error)"
                              }
                            },
                            "id": 41935,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7523:23:45",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_error",
                              "typeString": "error"
                            }
                          },
                          "id": 41936,
                          "nodeType": "RevertStatement",
                          "src": "7516:30:45"
                        }
                      ]
                    }
                  },
                  "id": 41962,
                  "nodeType": "IfStatement",
                  "src": "7362:444:45",
                  "trueBody": {
                    "id": 41929,
                    "nodeType": "Block",
                    "src": "7397:55:45",
                    "statements": [
                      {
                        "functionReturnParameters": 41923,
                        "id": 41928,
                        "nodeType": "Return",
                        "src": "7411:7:45"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 41916,
              "nodeType": "StructuredDocumentation",
              "src": "7153:122:45",
              "text": " @dev Optionally reverts with the corresponding custom error according to the `error` argument provided."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_throwError",
            "nameLocation": "7289:11:45",
            "parameters": {
              "id": 41922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41919,
                  "mutability": "mutable",
                  "name": "error",
                  "nameLocation": "7314:5:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41964,
                  "src": "7301:18:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_RecoverError_$41625",
                    "typeString": "enum ECDSA.RecoverError"
                  },
                  "typeName": {
                    "id": 41918,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41917,
                      "name": "RecoverError",
                      "nameLocations": [
                        "7301:12:45"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41625,
                      "src": "7301:12:45"
                    },
                    "referencedDeclaration": 41625,
                    "src": "7301:12:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_RecoverError_$41625",
                      "typeString": "enum ECDSA.RecoverError"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41921,
                  "mutability": "mutable",
                  "name": "errorArg",
                  "nameLocation": "7329:8:45",
                  "nodeType": "VariableDeclaration",
                  "scope": 41964,
                  "src": "7321:16:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41920,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7321:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7300:38:45"
            },
            "returnParameters": {
              "id": 41923,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7352:0:45"
            },
            "scope": 41965,
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
          "id": 41620,
          "nodeType": "StructuredDocumentation",
          "src": "138:205:45",
          "text": " @dev Elliptic Curve Digital Signature Algorithm (ECDSA) operations.\n These functions can be used to verify that a message was signed by the holder\n of the private keys of a given address."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          41965
        ],
        "name": "ECDSA",
        "nameLocation": "352:5:45",
        "scope": 41966,
        "usedErrors": [
          41628,
          41633,
          41638
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 45
} as const;