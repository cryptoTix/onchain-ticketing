export const SignatureChecker = {
  "abi": [],
  "bytecode": {
    "object": "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220eb74ff4919c21aa223c17db8d7ae5cb33a935ef48bd9473e2b7193bcb8760d5864736f6c634300081a0033",
    "sourceMap": "532:1805:55:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x5f80fdfea2646970667358221220eb74ff4919c21aa223c17db8d7ae5cb33a935ef48bd9473e2b7193bcb8760d5864736f6c634300081a0033",
    "sourceMap": "532:1805:55:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Signature verification helper that can be used instead of `ECDSA.recover` to seamlessly support both ECDSA signatures from externally owned accounts (EOAs) as well as ERC-1271 signatures from smart contract wallets like Argent and Safe Wallet (previously Gnosis Safe).\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol\":\"SignatureChecker\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x4aaaf1c0737dd16e81f0d2b9833c549747a5ede6873bf1444bc72aa572d03e98\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://eada27d7668eebaea16c3b890aa1b38ffc53965292e26c96f7c44834623f4710\",\"dweb:/ipfs/QmVSWuLtxyCqNbLyY89ptxkvsk4CLLKDQYigEne5Qj8k1L\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0x69f54c02b7d81d505910ec198c11ed4c6a728418a868b906b4a0cf29946fda84\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8e25e4bdb7ae1f21d23bfee996e22736fc0ab44cfabedac82a757b1edc5623b9\",\"dweb:/ipfs/QmQdWQvB6JCP9ZMbzi8EvQ1PTETqkcTWrbcVurS7DKpa5n\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0xbdc3bb48ccedb818cd75a6d74a16df55a822e9f6d3cc54c59f576f10aab67b5f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2284f25f2478f419d7781573b17a89d0e7c5589a865d55e2d6ed5163aee23aa8\",\"dweb:/ipfs/QmNsr2625APBQiNKpYnX5VcSnYgfUHR9Uzzp9pRXjoDqK7\"]}},\"version\":1}",
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
        "node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol": "SignatureChecker"
      },
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol": {
        "keccak256": "0x4aaaf1c0737dd16e81f0d2b9833c549747a5ede6873bf1444bc72aa572d03e98",
        "urls": [
          "bzz-raw://eada27d7668eebaea16c3b890aa1b38ffc53965292e26c96f7c44834623f4710",
          "dweb:/ipfs/QmVSWuLtxyCqNbLyY89ptxkvsk4CLLKDQYigEne5Qj8k1L"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol": {
        "keccak256": "0x69f54c02b7d81d505910ec198c11ed4c6a728418a868b906b4a0cf29946fda84",
        "urls": [
          "bzz-raw://8e25e4bdb7ae1f21d23bfee996e22736fc0ab44cfabedac82a757b1edc5623b9",
          "dweb:/ipfs/QmQdWQvB6JCP9ZMbzi8EvQ1PTETqkcTWrbcVurS7DKpa5n"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol": {
        "keccak256": "0xbdc3bb48ccedb818cd75a6d74a16df55a822e9f6d3cc54c59f576f10aab67b5f",
        "urls": [
          "bzz-raw://2284f25f2478f419d7781573b17a89d0e7c5589a865d55e2d6ed5163aee23aa8",
          "dweb:/ipfs/QmNsr2625APBQiNKpYnX5VcSnYgfUHR9Uzzp9pRXjoDqK7"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol",
    "id": 46696,
    "exportedSymbols": {
      "ECDSA": [
        46513
      ],
      "IERC1271": [
        43239
      ],
      "SignatureChecker": [
        46695
      ]
    },
    "nodeType": "SourceUnit",
    "src": "123:2215:55",
    "nodes": [
      {
        "id": 46589,
        "nodeType": "PragmaDirective",
        "src": "123:24:55",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 46591,
        "nodeType": "ImportDirective",
        "src": "149:34:55",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol",
        "file": "./ECDSA.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 46696,
        "sourceUnit": 46514,
        "symbolAliases": [
          {
            "foreign": {
              "id": 46590,
              "name": "ECDSA",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46513,
              "src": "157:5:55",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 46593,
        "nodeType": "ImportDirective",
        "src": "184:55:55",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol",
        "file": "../../interfaces/IERC1271.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 46696,
        "sourceUnit": 43240,
        "symbolAliases": [
          {
            "foreign": {
              "id": 46592,
              "name": "IERC1271",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43239,
              "src": "192:8:55",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 46695,
        "nodeType": "ContractDefinition",
        "src": "532:1805:55",
        "nodes": [
          {
            "id": 46642,
            "nodeType": "FunctionDefinition",
            "src": "1041:429:55",
            "nodes": [],
            "body": {
              "id": 46641,
              "nodeType": "Block",
              "src": "1153:317:55",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 46610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "expression": {
                          "id": 46606,
                          "name": "signer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46597,
                          "src": "1167:6:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 46607,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1174:4:55",
                        "memberName": "code",
                        "nodeType": "MemberAccess",
                        "src": "1167:11:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 46608,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1179:6:55",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1167:18:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 46609,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1189:1:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1167:23:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 46639,
                    "nodeType": "Block",
                    "src": "1381:83:55",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 46634,
                              "name": "signer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46597,
                              "src": "1429:6:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 46635,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46599,
                              "src": "1437:4:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 46636,
                              "name": "signature",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46601,
                              "src": "1443:9:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 46633,
                            "name": "isValidERC1271SignatureNow",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46694,
                            "src": "1402:26:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                              "typeString": "function (address,bytes32,bytes memory) view returns (bool)"
                            }
                          },
                          "id": 46637,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1402:51:55",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "functionReturnParameters": 46605,
                        "id": 46638,
                        "nodeType": "Return",
                        "src": "1395:58:55"
                      }
                    ]
                  },
                  "id": 46640,
                  "nodeType": "IfStatement",
                  "src": "1163:301:55",
                  "trueBody": {
                    "id": 46632,
                    "nodeType": "Block",
                    "src": "1192:183:55",
                    "statements": [
                      {
                        "assignments": [
                          46612,
                          46615,
                          null
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 46612,
                            "mutability": "mutable",
                            "name": "recovered",
                            "nameLocation": "1215:9:55",
                            "nodeType": "VariableDeclaration",
                            "scope": 46632,
                            "src": "1207:17:55",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 46611,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1207:7:55",
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
                            "id": 46615,
                            "mutability": "mutable",
                            "name": "err",
                            "nameLocation": "1245:3:55",
                            "nodeType": "VariableDeclaration",
                            "scope": 46632,
                            "src": "1226:22:55",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_RecoverError_$46173",
                              "typeString": "enum ECDSA.RecoverError"
                            },
                            "typeName": {
                              "id": 46614,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 46613,
                                "name": "ECDSA.RecoverError",
                                "nameLocations": [
                                  "1226:5:55",
                                  "1232:12:55"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 46173,
                                "src": "1226:18:55"
                              },
                              "referencedDeclaration": 46173,
                              "src": "1226:18:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$46173",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            "visibility": "internal"
                          },
                          null
                        ],
                        "id": 46621,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 46618,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46599,
                              "src": "1271:4:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 46619,
                              "name": "signature",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46601,
                              "src": "1277:9:55",
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
                            "expression": {
                              "id": 46616,
                              "name": "ECDSA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46513,
                              "src": "1254:5:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ECDSA_$46513_$",
                                "typeString": "type(library ECDSA)"
                              }
                            },
                            "id": 46617,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1260:10:55",
                            "memberName": "tryRecover",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 46239,
                            "src": "1254:16:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                              "typeString": "function (bytes32,bytes memory) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                            }
                          },
                          "id": 46620,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1254:33:55",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$46173_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1206:81:55"
                      },
                      {
                        "expression": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 46630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_enum$_RecoverError_$46173",
                              "typeString": "enum ECDSA.RecoverError"
                            },
                            "id": 46626,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 46622,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46615,
                              "src": "1308:3:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$46173",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "expression": {
                                "expression": {
                                  "id": 46623,
                                  "name": "ECDSA",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 46513,
                                  "src": "1315:5:55",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ECDSA_$46513_$",
                                    "typeString": "type(library ECDSA)"
                                  }
                                },
                                "id": 46624,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1321:12:55",
                                "memberName": "RecoverError",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 46173,
                                "src": "1315:18:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$46173_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 46625,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "1334:7:55",
                              "memberName": "NoError",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 46169,
                              "src": "1315:26:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$46173",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            "src": "1308:33:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 46629,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 46627,
                              "name": "recovered",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46612,
                              "src": "1345:9:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 46628,
                              "name": "signer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46597,
                              "src": "1358:6:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1345:19:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1308:56:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "functionReturnParameters": 46605,
                        "id": 46631,
                        "nodeType": "Return",
                        "src": "1301:63:55"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 46595,
              "nodeType": "StructuredDocumentation",
              "src": "563:473:55",
              "text": " @dev Checks if a signature is valid for a given signer and data hash. If the signer is a smart contract, the\n signature is validated against that smart contract using ERC-1271, otherwise it's validated using `ECDSA.recover`.\n NOTE: Unlike ECDSA signatures, contract signatures are revocable, and the outcome of this function can thus\n change through time. It could return true at block N and false at block N+1 (or the opposite)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidSignatureNow",
            "nameLocation": "1050:19:55",
            "parameters": {
              "id": 46602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46597,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "1078:6:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 46642,
                  "src": "1070:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46596,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1070:7:55",
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
                  "id": 46599,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "1094:4:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 46642,
                  "src": "1086:12:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46598,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46601,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "1113:9:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 46642,
                  "src": "1100:22:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 46600,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1100:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1069:54:55"
            },
            "returnParameters": {
              "id": 46605,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46604,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46642,
                  "src": "1147:4:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 46603,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1147:4:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1146:6:55"
            },
            "scope": 46695,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46694,
            "nodeType": "FunctionDefinition",
            "src": "1877:458:55",
            "nodes": [],
            "body": {
              "id": 46693,
              "nodeType": "Block",
              "src": "2026:309:55",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    46655,
                    46657
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46655,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "2042:7:55",
                      "nodeType": "VariableDeclaration",
                      "scope": 46693,
                      "src": "2037:12:55",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 46654,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2037:4:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 46657,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "2064:6:55",
                      "nodeType": "VariableDeclaration",
                      "scope": 46693,
                      "src": "2051:19:55",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 46656,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2051:5:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46669,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 46662,
                              "name": "IERC1271",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43239,
                              "src": "2120:8:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC1271_$43239_$",
                                "typeString": "type(contract IERC1271)"
                              }
                            },
                            "id": 46663,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2129:16:55",
                            "memberName": "isValidSignature",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 43238,
                            "src": "2120:25:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                              "typeString": "function IERC1271.isValidSignature(bytes32,bytes memory) view returns (bytes4)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 46664,
                                "name": "hash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46647,
                                "src": "2148:4:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 46665,
                                "name": "signature",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46649,
                                "src": "2154:9:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "id": 46666,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2147:17:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes_memory_ptr_$",
                              "typeString": "tuple(bytes32,bytes memory)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_function_declaration_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                              "typeString": "function IERC1271.isValidSignature(bytes32,bytes memory) view returns (bytes4)"
                            },
                            {
                              "typeIdentifier": "t_tuple$_t_bytes32_$_t_bytes_memory_ptr_$",
                              "typeString": "tuple(bytes32,bytes memory)"
                            }
                          ],
                          "expression": {
                            "id": 46660,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2105:3:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 46661,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2109:10:55",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "2105:14:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 46667,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2105:60:55",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 46658,
                        "name": "signer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46645,
                        "src": "2074:6:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 46659,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2081:10:55",
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "2074:17:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 46668,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2074:101:55",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2036:139:55"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 46690,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 46675,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 46670,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46655,
                            "src": "2193:7:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 46674,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 46671,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46657,
                                "src": "2216:6:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              "id": 46672,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2223:6:55",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "2216:13:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "hexValue": "3332",
                              "id": 46673,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2233:2:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_32_by_1",
                                "typeString": "int_const 32"
                              },
                              "value": "32"
                            },
                            "src": "2216:19:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "2193:42:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 46689,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 46678,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46657,
                                "src": "2262:6:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              {
                                "components": [
                                  {
                                    "id": 46680,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2271:7:55",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes32_$",
                                      "typeString": "type(bytes32)"
                                    },
                                    "typeName": {
                                      "id": 46679,
                                      "name": "bytes32",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2271:7:55",
                                      "typeDescriptions": {}
                                    }
                                  }
                                ],
                                "id": 46681,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "2270:9:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                },
                                {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                }
                              ],
                              "expression": {
                                "id": 46676,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "2251:3:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 46677,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "2255:6:55",
                              "memberName": "decode",
                              "nodeType": "MemberAccess",
                              "src": "2251:10:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 46682,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2251:29:55",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "expression": {
                                    "id": 46685,
                                    "name": "IERC1271",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 43239,
                                    "src": "2292:8:55",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IERC1271_$43239_$",
                                      "typeString": "type(contract IERC1271)"
                                    }
                                  },
                                  "id": 46686,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "2301:16:55",
                                  "memberName": "isValidSignature",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 43238,
                                  "src": "2292:25:55",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_declaration_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                                    "typeString": "function IERC1271.isValidSignature(bytes32,bytes memory) view returns (bytes4)"
                                  }
                                },
                                "id": 46687,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "2318:8:55",
                                "memberName": "selector",
                                "nodeType": "MemberAccess",
                                "src": "2292:34:55",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              ],
                              "id": 46684,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2284:7:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 46683,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "2284:7:55",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 46688,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2284:43:55",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "2251:76:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2193:134:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 46691,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2192:136:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 46653,
                  "id": 46692,
                  "nodeType": "Return",
                  "src": "2185:143:55"
                }
              ]
            },
            "documentation": {
              "id": 46643,
              "nodeType": "StructuredDocumentation",
              "src": "1476:396:55",
              "text": " @dev Checks if a signature is valid for a given signer and data hash. The signature is validated\n against the signer smart contract using ERC-1271.\n NOTE: Unlike ECDSA signatures, contract signatures are revocable, and the outcome of this function can thus\n change through time. It could return true at block N and false at block N+1 (or the opposite)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidERC1271SignatureNow",
            "nameLocation": "1886:26:55",
            "parameters": {
              "id": 46650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46645,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "1930:6:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 46694,
                  "src": "1922:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46644,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1922:7:55",
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
                  "id": 46647,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "1954:4:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 46694,
                  "src": "1946:12:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 46646,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1946:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46649,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "1981:9:55",
                  "nodeType": "VariableDeclaration",
                  "scope": 46694,
                  "src": "1968:22:55",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 46648,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1968:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1912:84:55"
            },
            "returnParameters": {
              "id": 46653,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46652,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46694,
                  "src": "2020:4:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 46651,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2020:4:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2019:6:55"
            },
            "scope": 46695,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SignatureChecker",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 46594,
          "nodeType": "StructuredDocumentation",
          "src": "241:290:55",
          "text": " @dev Signature verification helper that can be used instead of `ECDSA.recover` to seamlessly support both ECDSA\n signatures from externally owned accounts (EOAs) as well as ERC-1271 signatures from smart contract wallets like\n Argent and Safe Wallet (previously Gnosis Safe)."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          46695
        ],
        "name": "SignatureChecker",
        "nameLocation": "540:16:55",
        "scope": 46696,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 55
} as const;