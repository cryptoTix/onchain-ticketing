export const SignatureChecker = {
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f9bdaa17cdda2abf999f404d9a59671fda474c5c9971bdcca9888c23aea7890264736f6c634300081a0033",
    "sourceMap": "532:1805:47:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;532:1805:47;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f9bdaa17cdda2abf999f404d9a59671fda474c5c9971bdcca9888c23aea7890264736f6c634300081a0033",
    "sourceMap": "532:1805:47:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Signature verification helper that can be used instead of `ECDSA.recover` to seamlessly support both ECDSA signatures from externally owned accounts (EOAs) as well as ERC-1271 signatures from smart contract wallets like Argent and Safe Wallet (previously Gnosis Safe).\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol\":\"SignatureChecker\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x4aaaf1c0737dd16e81f0d2b9833c549747a5ede6873bf1444bc72aa572d03e98\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://eada27d7668eebaea16c3b890aa1b38ffc53965292e26c96f7c44834623f4710\",\"dweb:/ipfs/QmVSWuLtxyCqNbLyY89ptxkvsk4CLLKDQYigEne5Qj8k1L\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0x69f54c02b7d81d505910ec198c11ed4c6a728418a868b906b4a0cf29946fda84\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8e25e4bdb7ae1f21d23bfee996e22736fc0ab44cfabedac82a757b1edc5623b9\",\"dweb:/ipfs/QmQdWQvB6JCP9ZMbzi8EvQ1PTETqkcTWrbcVurS7DKpa5n\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0xbdc3bb48ccedb818cd75a6d74a16df55a822e9f6d3cc54c59f576f10aab67b5f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2284f25f2478f419d7781573b17a89d0e7c5589a865d55e2d6ed5163aee23aa8\",\"dweb:/ipfs/QmNsr2625APBQiNKpYnX5VcSnYgfUHR9Uzzp9pRXjoDqK7\"]}},\"version\":1}",
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
      "evmVersion": "paris",
      "libraries": {}
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
    "id": 42148,
    "exportedSymbols": {
      "ECDSA": [
        41965
      ],
      "IERC1271": [
        39262
      ],
      "SignatureChecker": [
        42147
      ]
    },
    "nodeType": "SourceUnit",
    "src": "123:2215:47",
    "nodes": [
      {
        "id": 42041,
        "nodeType": "PragmaDirective",
        "src": "123:24:47",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 42043,
        "nodeType": "ImportDirective",
        "src": "149:34:47",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol",
        "file": "./ECDSA.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42148,
        "sourceUnit": 41966,
        "symbolAliases": [
          {
            "foreign": {
              "id": 42042,
              "name": "ECDSA",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 41965,
              "src": "157:5:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 42045,
        "nodeType": "ImportDirective",
        "src": "184:55:47",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol",
        "file": "../../interfaces/IERC1271.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42148,
        "sourceUnit": 39263,
        "symbolAliases": [
          {
            "foreign": {
              "id": 42044,
              "name": "IERC1271",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 39262,
              "src": "192:8:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 42147,
        "nodeType": "ContractDefinition",
        "src": "532:1805:47",
        "nodes": [
          {
            "id": 42094,
            "nodeType": "FunctionDefinition",
            "src": "1041:429:47",
            "nodes": [],
            "body": {
              "id": 42093,
              "nodeType": "Block",
              "src": "1153:317:47",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 42062,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "expression": {
                          "id": 42058,
                          "name": "signer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42049,
                          "src": "1167:6:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 42059,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1174:4:47",
                        "memberName": "code",
                        "nodeType": "MemberAccess",
                        "src": "1167:11:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 42060,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1179:6:47",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "1167:18:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 42061,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1189:1:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1167:23:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 42091,
                    "nodeType": "Block",
                    "src": "1381:83:47",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 42086,
                              "name": "signer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42049,
                              "src": "1429:6:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 42087,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42051,
                              "src": "1437:4:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 42088,
                              "name": "signature",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42053,
                              "src": "1443:9:47",
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
                            "id": 42085,
                            "name": "isValidERC1271SignatureNow",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42146,
                            "src": "1402:26:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                              "typeString": "function (address,bytes32,bytes memory) view returns (bool)"
                            }
                          },
                          "id": 42089,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1402:51:47",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "functionReturnParameters": 42057,
                        "id": 42090,
                        "nodeType": "Return",
                        "src": "1395:58:47"
                      }
                    ]
                  },
                  "id": 42092,
                  "nodeType": "IfStatement",
                  "src": "1163:301:47",
                  "trueBody": {
                    "id": 42084,
                    "nodeType": "Block",
                    "src": "1192:183:47",
                    "statements": [
                      {
                        "assignments": [
                          42064,
                          42067,
                          null
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 42064,
                            "mutability": "mutable",
                            "name": "recovered",
                            "nameLocation": "1215:9:47",
                            "nodeType": "VariableDeclaration",
                            "scope": 42084,
                            "src": "1207:17:47",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 42063,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1207:7:47",
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
                            "id": 42067,
                            "mutability": "mutable",
                            "name": "err",
                            "nameLocation": "1245:3:47",
                            "nodeType": "VariableDeclaration",
                            "scope": 42084,
                            "src": "1226:22:47",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_RecoverError_$41625",
                              "typeString": "enum ECDSA.RecoverError"
                            },
                            "typeName": {
                              "id": 42066,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 42065,
                                "name": "ECDSA.RecoverError",
                                "nameLocations": [
                                  "1226:5:47",
                                  "1232:12:47"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 41625,
                                "src": "1226:18:47"
                              },
                              "referencedDeclaration": 41625,
                              "src": "1226:18:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$41625",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            "visibility": "internal"
                          },
                          null
                        ],
                        "id": 42073,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 42070,
                              "name": "hash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42051,
                              "src": "1271:4:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "id": 42071,
                              "name": "signature",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42053,
                              "src": "1277:9:47",
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
                              "id": 42068,
                              "name": "ECDSA",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41965,
                              "src": "1254:5:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ECDSA_$41965_$",
                                "typeString": "type(library ECDSA)"
                              }
                            },
                            "id": 42069,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1260:10:47",
                            "memberName": "tryRecover",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 41691,
                            "src": "1254:16:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                              "typeString": "function (bytes32,bytes memory) pure returns (address,enum ECDSA.RecoverError,bytes32)"
                            }
                          },
                          "id": 42072,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1254:33:47",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_enum$_RecoverError_$41625_$_t_bytes32_$",
                            "typeString": "tuple(address,enum ECDSA.RecoverError,bytes32)"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1206:81:47"
                      },
                      {
                        "expression": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 42082,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_enum$_RecoverError_$41625",
                              "typeString": "enum ECDSA.RecoverError"
                            },
                            "id": 42078,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 42074,
                              "name": "err",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42067,
                              "src": "1308:3:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$41625",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "expression": {
                                "expression": {
                                  "id": 42075,
                                  "name": "ECDSA",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 41965,
                                  "src": "1315:5:47",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_ECDSA_$41965_$",
                                    "typeString": "type(library ECDSA)"
                                  }
                                },
                                "id": 42076,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1321:12:47",
                                "memberName": "RecoverError",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 41625,
                                "src": "1315:18:47",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_RecoverError_$41625_$",
                                  "typeString": "type(enum ECDSA.RecoverError)"
                                }
                              },
                              "id": 42077,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "1334:7:47",
                              "memberName": "NoError",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 41621,
                              "src": "1315:26:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_RecoverError_$41625",
                                "typeString": "enum ECDSA.RecoverError"
                              }
                            },
                            "src": "1308:33:47",
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
                            "id": 42081,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 42079,
                              "name": "recovered",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42064,
                              "src": "1345:9:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 42080,
                              "name": "signer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 42049,
                              "src": "1358:6:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1345:19:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1308:56:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "functionReturnParameters": 42057,
                        "id": 42083,
                        "nodeType": "Return",
                        "src": "1301:63:47"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 42047,
              "nodeType": "StructuredDocumentation",
              "src": "563:473:47",
              "text": " @dev Checks if a signature is valid for a given signer and data hash. If the signer is a smart contract, the\n signature is validated against that smart contract using ERC-1271, otherwise it's validated using `ECDSA.recover`.\n NOTE: Unlike ECDSA signatures, contract signatures are revocable, and the outcome of this function can thus\n change through time. It could return true at block N and false at block N+1 (or the opposite)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidSignatureNow",
            "nameLocation": "1050:19:47",
            "parameters": {
              "id": 42054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42049,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "1078:6:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 42094,
                  "src": "1070:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42048,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1070:7:47",
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
                  "id": 42051,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "1094:4:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 42094,
                  "src": "1086:12:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 42050,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1086:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42053,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "1113:9:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 42094,
                  "src": "1100:22:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 42052,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1100:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1069:54:47"
            },
            "returnParameters": {
              "id": 42057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42056,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42094,
                  "src": "1147:4:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 42055,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1147:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1146:6:47"
            },
            "scope": 42147,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42146,
            "nodeType": "FunctionDefinition",
            "src": "1877:458:47",
            "nodes": [],
            "body": {
              "id": 42145,
              "nodeType": "Block",
              "src": "2026:309:47",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42107,
                    42109
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42107,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "2042:7:47",
                      "nodeType": "VariableDeclaration",
                      "scope": 42145,
                      "src": "2037:12:47",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 42106,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2037:4:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 42109,
                      "mutability": "mutable",
                      "name": "result",
                      "nameLocation": "2064:6:47",
                      "nodeType": "VariableDeclaration",
                      "scope": 42145,
                      "src": "2051:19:47",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 42108,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2051:5:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42121,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 42114,
                              "name": "IERC1271",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 39262,
                              "src": "2120:8:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC1271_$39262_$",
                                "typeString": "type(contract IERC1271)"
                              }
                            },
                            "id": 42115,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "2129:16:47",
                            "memberName": "isValidSignature",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 39261,
                            "src": "2120:25:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_declaration_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                              "typeString": "function IERC1271.isValidSignature(bytes32,bytes memory) view returns (bytes4)"
                            }
                          },
                          {
                            "components": [
                              {
                                "id": 42116,
                                "name": "hash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42099,
                                "src": "2148:4:47",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 42117,
                                "name": "signature",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42101,
                                "src": "2154:9:47",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "id": 42118,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2147:17:47",
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
                            "id": 42112,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "2105:3:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 42113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2109:10:47",
                          "memberName": "encodeCall",
                          "nodeType": "MemberAccess",
                          "src": "2105:14:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 42119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2105:60:47",
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
                        "id": 42110,
                        "name": "signer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42097,
                        "src": "2074:6:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 42111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2081:10:47",
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "2074:17:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 42120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2074:101:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2036:139:47"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 42142,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 42127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 42122,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42107,
                            "src": "2193:7:47",
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
                            "id": 42126,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 42123,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42109,
                                "src": "2216:6:47",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              "id": 42124,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2223:6:47",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "2216:13:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "hexValue": "3332",
                              "id": 42125,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2233:2:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_32_by_1",
                                "typeString": "int_const 32"
                              },
                              "value": "32"
                            },
                            "src": "2216:19:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "2193:42:47",
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
                          "id": 42141,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 42130,
                                "name": "result",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42109,
                                "src": "2262:6:47",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              },
                              {
                                "components": [
                                  {
                                    "id": 42132,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2271:7:47",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_bytes32_$",
                                      "typeString": "type(bytes32)"
                                    },
                                    "typeName": {
                                      "id": 42131,
                                      "name": "bytes32",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2271:7:47",
                                      "typeDescriptions": {}
                                    }
                                  }
                                ],
                                "id": 42133,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "2270:9:47",
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
                                "id": 42128,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "2251:3:47",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 42129,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "2255:6:47",
                              "memberName": "decode",
                              "nodeType": "MemberAccess",
                              "src": "2251:10:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                "typeString": "function () pure"
                              }
                            },
                            "id": 42134,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2251:29:47",
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
                                    "id": 42137,
                                    "name": "IERC1271",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 39262,
                                    "src": "2292:8:47",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IERC1271_$39262_$",
                                      "typeString": "type(contract IERC1271)"
                                    }
                                  },
                                  "id": 42138,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "2301:16:47",
                                  "memberName": "isValidSignature",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 39261,
                                  "src": "2292:25:47",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_declaration_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                                    "typeString": "function IERC1271.isValidSignature(bytes32,bytes memory) view returns (bytes4)"
                                  }
                                },
                                "id": 42139,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "2318:8:47",
                                "memberName": "selector",
                                "nodeType": "MemberAccess",
                                "src": "2292:34:47",
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
                              "id": 42136,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2284:7:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes32_$",
                                "typeString": "type(bytes32)"
                              },
                              "typeName": {
                                "id": 42135,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "2284:7:47",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 42140,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2284:43:47",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "src": "2251:76:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2193:134:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 42143,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2192:136:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 42105,
                  "id": 42144,
                  "nodeType": "Return",
                  "src": "2185:143:47"
                }
              ]
            },
            "documentation": {
              "id": 42095,
              "nodeType": "StructuredDocumentation",
              "src": "1476:396:47",
              "text": " @dev Checks if a signature is valid for a given signer and data hash. The signature is validated\n against the signer smart contract using ERC-1271.\n NOTE: Unlike ECDSA signatures, contract signatures are revocable, and the outcome of this function can thus\n change through time. It could return true at block N and false at block N+1 (or the opposite)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidERC1271SignatureNow",
            "nameLocation": "1886:26:47",
            "parameters": {
              "id": 42102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42097,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "1930:6:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 42146,
                  "src": "1922:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42096,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1922:7:47",
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
                  "id": 42099,
                  "mutability": "mutable",
                  "name": "hash",
                  "nameLocation": "1954:4:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 42146,
                  "src": "1946:12:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 42098,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1946:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42101,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "1981:9:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 42146,
                  "src": "1968:22:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 42100,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1968:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1912:84:47"
            },
            "returnParameters": {
              "id": 42105,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42104,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42146,
                  "src": "2020:4:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 42103,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2020:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2019:6:47"
            },
            "scope": 42147,
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
          "id": 42046,
          "nodeType": "StructuredDocumentation",
          "src": "241:290:47",
          "text": " @dev Signature verification helper that can be used instead of `ECDSA.recover` to seamlessly support both ECDSA\n signatures from externally owned accounts (EOAs) as well as ERC-1271 signatures from smart contract wallets like\n Argent and Safe Wallet (previously Gnosis Safe)."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          42147
        ],
        "name": "SignatureChecker",
        "nameLocation": "540:16:47",
        "scope": 42148,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 47
} as const;