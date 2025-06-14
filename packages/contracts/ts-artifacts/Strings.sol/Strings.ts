export const Strings = {
  "abi": [
    {
      "type": "error",
      "name": "StringsInsufficientHexLength",
      "inputs": [
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "length",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122087941363764d03631ba440a40f5c905443119e6b6518bd72bf20759888ca8a0264736f6c634300081a0033",
    "sourceMap": "251:3680:52:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;251:3680:52;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122087941363764d03631ba440a40f5c905443119e6b6518bd72bf20759888ca8a0264736f6c634300081a0033",
    "sourceMap": "251:3680:52:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"}],\"name\":\"StringsInsufficientHexLength\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"String operations.\",\"errors\":{\"StringsInsufficientHexLength(uint256,uint256)\":[{\"details\":\"The `value` string doesn't fit in the specified `length`.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":\"Strings\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x725209b582291bb83058e3078624b53d15a133f7401c30295e7f3704181d2aed\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0564ddb19c6d870e27b789d8f985283d815267ad7224883c2d5243c8bacc7dc0\",\"dweb:/ipfs/QmeC953H4sj88ZRFdJNFdmpf7J9SksP1wK4jyMHLo66z49\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa00be322d7db5786750ce0ac7e2f5b633ac30a5ed5fa1ced1e74acfc19acecea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c84e822f87cbdc4082533b626667b6928715bb2b1e8e7eb96954cebb9e38c8d\",\"dweb:/ipfs/QmZmy9dgxLTerBAQDuuHqbL6EpgRxddqgv5KmwpXYVbKz1\"]},\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03\",\"dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ\"]}},\"version\":1}",
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
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "StringsInsufficientHexLength"
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
        "node_modules/@openzeppelin/contracts/utils/Strings.sol": "Strings"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/Panic.sol": {
        "keccak256": "0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a",
        "urls": [
          "bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a",
          "dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Strings.sol": {
        "keccak256": "0x725209b582291bb83058e3078624b53d15a133f7401c30295e7f3704181d2aed",
        "urls": [
          "bzz-raw://0564ddb19c6d870e27b789d8f985283d815267ad7224883c2d5243c8bacc7dc0",
          "dweb:/ipfs/QmeC953H4sj88ZRFdJNFdmpf7J9SksP1wK4jyMHLo66z49"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/Math.sol": {
        "keccak256": "0xa00be322d7db5786750ce0ac7e2f5b633ac30a5ed5fa1ced1e74acfc19acecea",
        "urls": [
          "bzz-raw://6c84e822f87cbdc4082533b626667b6928715bb2b1e8e7eb96954cebb9e38c8d",
          "dweb:/ipfs/QmZmy9dgxLTerBAQDuuHqbL6EpgRxddqgv5KmwpXYVbKz1"
        ],
        "license": "MIT"
      },
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
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/Strings.sol",
    "id": 46166,
    "exportedSymbols": {
      "Math": [
        48313
      ],
      "SignedMath": [
        50222
      ],
      "Strings": [
        46165
      ]
    },
    "nodeType": "SourceUnit",
    "src": "101:3831:52",
    "nodes": [
      {
        "id": 45847,
        "nodeType": "PragmaDirective",
        "src": "101:24:52",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 45849,
        "nodeType": "ImportDirective",
        "src": "127:37:52",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/Math.sol",
        "file": "./math/Math.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 46166,
        "sourceUnit": 48314,
        "symbolAliases": [
          {
            "foreign": {
              "id": 45848,
              "name": "Math",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 48313,
              "src": "135:4:52",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 45851,
        "nodeType": "ImportDirective",
        "src": "165:49:52",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol",
        "file": "./math/SignedMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 46166,
        "sourceUnit": 50223,
        "symbolAliases": [
          {
            "foreign": {
              "id": 45850,
              "name": "SignedMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 50222,
              "src": "173:10:52",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 46165,
        "nodeType": "ContractDefinition",
        "src": "251:3680:52",
        "nodes": [
          {
            "id": 45855,
            "nodeType": "VariableDeclaration",
            "src": "273:56:52",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "HEX_DIGITS",
            "nameLocation": "298:10:52",
            "scope": 46165,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes16",
              "typeString": "bytes16"
            },
            "typeName": {
              "id": 45853,
              "name": "bytes16",
              "nodeType": "ElementaryTypeName",
              "src": "273:7:52",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes16",
                "typeString": "bytes16"
              }
            },
            "value": {
              "hexValue": "30313233343536373839616263646566",
              "id": 45854,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "311:18:52",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_cb29997ed99ead0db59ce4d12b7d3723198c827273e5796737c926d78019c39f",
                "typeString": "literal_string \"0123456789abcdef\""
              },
              "value": "0123456789abcdef"
            },
            "visibility": "private"
          },
          {
            "id": 45858,
            "nodeType": "VariableDeclaration",
            "src": "335:42:52",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_LENGTH",
            "nameLocation": "358:14:52",
            "scope": 46165,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 45856,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "335:5:52",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "hexValue": "3230",
              "id": 45857,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "375:2:52",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_20_by_1",
                "typeString": "int_const 20"
              },
              "value": "20"
            },
            "visibility": "private"
          },
          {
            "id": 45865,
            "nodeType": "ErrorDefinition",
            "src": "470:66:52",
            "nodes": [],
            "documentation": {
              "id": 45859,
              "nodeType": "StructuredDocumentation",
              "src": "384:81:52",
              "text": " @dev The `value` string doesn't fit in the specified `length`."
            },
            "errorSelector": "e22e27eb",
            "name": "StringsInsufficientHexLength",
            "nameLocation": "476:28:52",
            "parameters": {
              "id": 45864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45861,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "513:5:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 45865,
                  "src": "505:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45860,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45863,
                  "mutability": "mutable",
                  "name": "length",
                  "nameLocation": "528:6:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 45865,
                  "src": "520:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45862,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "520:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "504:31:52"
            }
          },
          {
            "id": 45913,
            "nodeType": "FunctionDefinition",
            "src": "637:632:52",
            "nodes": [],
            "body": {
              "id": 45912,
              "nodeType": "Block",
              "src": "708:561:52",
              "nodes": [],
              "statements": [
                {
                  "id": 45911,
                  "nodeType": "UncheckedBlock",
                  "src": "718:545:52",
                  "statements": [
                    {
                      "assignments": [
                        45874
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 45874,
                          "mutability": "mutable",
                          "name": "length",
                          "nameLocation": "750:6:52",
                          "nodeType": "VariableDeclaration",
                          "scope": 45911,
                          "src": "742:14:52",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 45873,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "742:7:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 45881,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 45880,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 45877,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45868,
                              "src": "770:5:52",
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
                            "expression": {
                              "id": 45875,
                              "name": "Math",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48313,
                              "src": "759:4:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Math_$48313_$",
                                "typeString": "type(library Math)"
                              }
                            },
                            "id": 45876,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "764:5:52",
                            "memberName": "log10",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 48085,
                            "src": "759:10:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) pure returns (uint256)"
                            }
                          },
                          "id": 45878,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "759:17:52",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 45879,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "779:1:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "759:21:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "742:38:52"
                    },
                    {
                      "assignments": [
                        45883
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 45883,
                          "mutability": "mutable",
                          "name": "buffer",
                          "nameLocation": "808:6:52",
                          "nodeType": "VariableDeclaration",
                          "scope": 45911,
                          "src": "794:20:52",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                          },
                          "typeName": {
                            "id": 45882,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "794:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage_ptr",
                              "typeString": "string"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 45888,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 45886,
                            "name": "length",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 45874,
                            "src": "828:6:52",
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
                          "id": 45885,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "817:10:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (string memory)"
                          },
                          "typeName": {
                            "id": 45884,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "821:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage_ptr",
                              "typeString": "string"
                            }
                          }
                        },
                        "id": 45887,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "817:18:52",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "794:41:52"
                    },
                    {
                      "assignments": [
                        45890
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 45890,
                          "mutability": "mutable",
                          "name": "ptr",
                          "nameLocation": "857:3:52",
                          "nodeType": "VariableDeclaration",
                          "scope": 45911,
                          "src": "849:11:52",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 45889,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "849:7:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 45891,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "849:11:52"
                    },
                    {
                      "AST": {
                        "nativeSrc": "899:67:52",
                        "nodeType": "YulBlock",
                        "src": "899:67:52",
                        "statements": [
                          {
                            "nativeSrc": "917:35:52",
                            "nodeType": "YulAssignment",
                            "src": "917:35:52",
                            "value": {
                              "arguments": [
                                {
                                  "name": "buffer",
                                  "nativeSrc": "928:6:52",
                                  "nodeType": "YulIdentifier",
                                  "src": "928:6:52"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "940:2:52",
                                      "nodeType": "YulLiteral",
                                      "src": "940:2:52",
                                      "type": "",
                                      "value": "32"
                                    },
                                    {
                                      "name": "length",
                                      "nativeSrc": "944:6:52",
                                      "nodeType": "YulIdentifier",
                                      "src": "944:6:52"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "936:3:52",
                                    "nodeType": "YulIdentifier",
                                    "src": "936:3:52"
                                  },
                                  "nativeSrc": "936:15:52",
                                  "nodeType": "YulFunctionCall",
                                  "src": "936:15:52"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "924:3:52",
                                "nodeType": "YulIdentifier",
                                "src": "924:3:52"
                              },
                              "nativeSrc": "924:28:52",
                              "nodeType": "YulFunctionCall",
                              "src": "924:28:52"
                            },
                            "variableNames": [
                              {
                                "name": "ptr",
                                "nativeSrc": "917:3:52",
                                "nodeType": "YulIdentifier",
                                "src": "917:3:52"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 45883,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "928:6:52",
                          "valueSize": 1
                        },
                        {
                          "declaration": 45874,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "944:6:52",
                          "valueSize": 1
                        },
                        {
                          "declaration": 45890,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "917:3:52",
                          "valueSize": 1
                        }
                      ],
                      "flags": [
                        "memory-safe"
                      ],
                      "id": 45892,
                      "nodeType": "InlineAssembly",
                      "src": "874:92:52"
                    },
                    {
                      "body": {
                        "id": 45907,
                        "nodeType": "Block",
                        "src": "992:234:52",
                        "statements": [
                          {
                            "expression": {
                              "id": 45895,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "--",
                              "prefix": false,
                              "src": "1010:5:52",
                              "subExpression": {
                                "id": 45894,
                                "name": "ptr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 45890,
                                "src": "1010:3:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 45896,
                            "nodeType": "ExpressionStatement",
                            "src": "1010:5:52"
                          },
                          {
                            "AST": {
                              "nativeSrc": "1058:86:52",
                              "nodeType": "YulBlock",
                              "src": "1058:86:52",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "ptr",
                                        "nativeSrc": "1088:3:52",
                                        "nodeType": "YulIdentifier",
                                        "src": "1088:3:52"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "value",
                                                "nativeSrc": "1102:5:52",
                                                "nodeType": "YulIdentifier",
                                                "src": "1102:5:52"
                                              },
                                              {
                                                "kind": "number",
                                                "nativeSrc": "1109:2:52",
                                                "nodeType": "YulLiteral",
                                                "src": "1109:2:52",
                                                "type": "",
                                                "value": "10"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mod",
                                              "nativeSrc": "1098:3:52",
                                              "nodeType": "YulIdentifier",
                                              "src": "1098:3:52"
                                            },
                                            "nativeSrc": "1098:14:52",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1098:14:52"
                                          },
                                          {
                                            "name": "HEX_DIGITS",
                                            "nativeSrc": "1114:10:52",
                                            "nodeType": "YulIdentifier",
                                            "src": "1114:10:52"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "byte",
                                          "nativeSrc": "1093:4:52",
                                          "nodeType": "YulIdentifier",
                                          "src": "1093:4:52"
                                        },
                                        "nativeSrc": "1093:32:52",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1093:32:52"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore8",
                                      "nativeSrc": "1080:7:52",
                                      "nodeType": "YulIdentifier",
                                      "src": "1080:7:52"
                                    },
                                    "nativeSrc": "1080:46:52",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1080:46:52"
                                  },
                                  "nativeSrc": "1080:46:52",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "1080:46:52"
                                }
                              ]
                            },
                            "evmVersion": "paris",
                            "externalReferences": [
                              {
                                "declaration": 45855,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "1114:10:52",
                                "valueSize": 1
                              },
                              {
                                "declaration": 45890,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "1088:3:52",
                                "valueSize": 1
                              },
                              {
                                "declaration": 45868,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "1102:5:52",
                                "valueSize": 1
                              }
                            ],
                            "flags": [
                              "memory-safe"
                            ],
                            "id": 45897,
                            "nodeType": "InlineAssembly",
                            "src": "1033:111:52"
                          },
                          {
                            "expression": {
                              "id": 45900,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 45898,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 45868,
                                "src": "1161:5:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "hexValue": "3130",
                                "id": 45899,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1170:2:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10_by_1",
                                  "typeString": "int_const 10"
                                },
                                "value": "10"
                              },
                              "src": "1161:11:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 45901,
                            "nodeType": "ExpressionStatement",
                            "src": "1161:11:52"
                          },
                          {
                            "condition": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 45904,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 45902,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 45868,
                                "src": "1194:5:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 45903,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1203:1:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "1194:10:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 45906,
                            "nodeType": "IfStatement",
                            "src": "1190:21:52",
                            "trueBody": {
                              "id": 45905,
                              "nodeType": "Break",
                              "src": "1206:5:52"
                            }
                          }
                        ]
                      },
                      "condition": {
                        "hexValue": "74727565",
                        "id": 45893,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "986:4:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "id": 45908,
                      "nodeType": "WhileStatement",
                      "src": "979:247:52"
                    },
                    {
                      "expression": {
                        "id": 45909,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45883,
                        "src": "1246:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "functionReturnParameters": 45872,
                      "id": 45910,
                      "nodeType": "Return",
                      "src": "1239:13:52"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 45866,
              "nodeType": "StructuredDocumentation",
              "src": "542:90:52",
              "text": " @dev Converts a `uint256` to its ASCII `string` decimal representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "646:8:52",
            "parameters": {
              "id": 45869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45868,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "663:5:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 45913,
                  "src": "655:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "655:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "654:15:52"
            },
            "returnParameters": {
              "id": 45872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45871,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 45913,
                  "src": "693:13:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 45870,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "692:15:52"
            },
            "scope": 46165,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45939,
            "nodeType": "FunctionDefinition",
            "src": "1369:168:52",
            "nodes": [],
            "body": {
              "id": 45938,
              "nodeType": "Block",
              "src": "1445:92:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 45926,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 45924,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 45916,
                            "src": "1476:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 45925,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1484:1:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1476:9:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseExpression": {
                          "hexValue": "",
                          "id": 45928,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1494:2:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        },
                        "id": 45929,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "Conditional",
                        "src": "1476:20:52",
                        "trueExpression": {
                          "hexValue": "2d",
                          "id": 45927,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1488:3:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_d3b8281179950f98149eefdb158d0e1acb56f56e8e343aa9fefafa7e36959561",
                            "typeString": "literal_string \"-\""
                          },
                          "value": "-"
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 45933,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 45916,
                                "src": "1522:5:52",
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
                              "expression": {
                                "id": 45931,
                                "name": "SignedMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 50222,
                                "src": "1507:10:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_SignedMath_$50222_$",
                                  "typeString": "type(library SignedMath)"
                                }
                              },
                              "id": 45932,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1518:3:52",
                              "memberName": "abs",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 50221,
                              "src": "1507:14:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                "typeString": "function (int256) pure returns (uint256)"
                              }
                            },
                            "id": 45934,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1507:21:52",
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
                          "id": 45930,
                          "name": "toString",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45913,
                          "src": "1498:8:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (string memory)"
                          }
                        },
                        "id": 45935,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1498:31:52",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 45922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1462:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                          "typeString": "type(string storage pointer)"
                        },
                        "typeName": {
                          "id": 45921,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1462:6:52",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 45923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1469:6:52",
                      "memberName": "concat",
                      "nodeType": "MemberAccess",
                      "src": "1462:13:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_stringconcat_pure$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () pure returns (string memory)"
                      }
                    },
                    "id": 45936,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1462:68:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 45920,
                  "id": 45937,
                  "nodeType": "Return",
                  "src": "1455:75:52"
                }
              ]
            },
            "documentation": {
              "id": 45914,
              "nodeType": "StructuredDocumentation",
              "src": "1275:89:52",
              "text": " @dev Converts a `int256` to its ASCII `string` decimal representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toStringSigned",
            "nameLocation": "1378:14:52",
            "parameters": {
              "id": 45917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45916,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1400:5:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 45939,
                  "src": "1393:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45915,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1393:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1392:14:52"
            },
            "returnParameters": {
              "id": 45920,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45919,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 45939,
                  "src": "1430:13:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 45918,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1430:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1429:15:52"
            },
            "scope": 46165,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45959,
            "nodeType": "FunctionDefinition",
            "src": "1642:174:52",
            "nodes": [],
            "body": {
              "id": 45958,
              "nodeType": "Block",
              "src": "1716:100:52",
              "nodes": [],
              "statements": [
                {
                  "id": 45957,
                  "nodeType": "UncheckedBlock",
                  "src": "1726:84:52",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 45948,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 45942,
                            "src": "1769:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 45954,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 45951,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 45942,
                                  "src": "1788:5:52",
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
                                "expression": {
                                  "id": 45949,
                                  "name": "Math",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 48313,
                                  "src": "1776:4:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_Math_$48313_$",
                                    "typeString": "type(library Math)"
                                  }
                                },
                                "id": 45950,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1781:6:52",
                                "memberName": "log256",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 48256,
                                "src": "1776:11:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 45952,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1776:18:52",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 45953,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1797:1:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1776:22:52",
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
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 45947,
                          "name": "toHexString",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            45959,
                            46042,
                            46062
                          ],
                          "referencedDeclaration": 46042,
                          "src": "1757:11:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256,uint256) pure returns (string memory)"
                          }
                        },
                        "id": 45955,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1757:42:52",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "functionReturnParameters": 45946,
                      "id": 45956,
                      "nodeType": "Return",
                      "src": "1750:49:52"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 45940,
              "nodeType": "StructuredDocumentation",
              "src": "1543:94:52",
              "text": " @dev Converts a `uint256` to its ASCII `string` hexadecimal representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nameLocation": "1651:11:52",
            "parameters": {
              "id": 45943,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45942,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1671:5:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 45959,
                  "src": "1663:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45941,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1663:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1662:15:52"
            },
            "returnParameters": {
              "id": 45946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45945,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 45959,
                  "src": "1701:13:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 45944,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1701:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1700:15:52"
            },
            "scope": 46165,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46042,
            "nodeType": "FunctionDefinition",
            "src": "1939:525:52",
            "nodes": [],
            "body": {
              "id": 46041,
              "nodeType": "Block",
              "src": "2029:435:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    45970
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 45970,
                      "mutability": "mutable",
                      "name": "localValue",
                      "nameLocation": "2047:10:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 46041,
                      "src": "2039:18:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 45969,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2039:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 45972,
                  "initialValue": {
                    "id": 45971,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 45962,
                    "src": "2060:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2039:26:52"
                },
                {
                  "assignments": [
                    45974
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 45974,
                      "mutability": "mutable",
                      "name": "buffer",
                      "nameLocation": "2088:6:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 46041,
                      "src": "2075:19:52",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 45973,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2075:5:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 45983,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 45981,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 45979,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 45977,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2107:1:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 45978,
                            "name": "length",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 45964,
                            "src": "2111:6:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2107:10:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 45980,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2120:1:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "2107:14:52",
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
                      "id": 45976,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2097:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 45975,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2101:5:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 45982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2097:25:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2075:47:52"
                },
                {
                  "expression": {
                    "id": 45988,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 45984,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45974,
                        "src": "2132:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 45986,
                      "indexExpression": {
                        "hexValue": "30",
                        "id": 45985,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2139:1:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2132:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 45987,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2144:3:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                        "typeString": "literal_string \"0\""
                      },
                      "value": "0"
                    },
                    "src": "2132:15:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 45989,
                  "nodeType": "ExpressionStatement",
                  "src": "2132:15:52"
                },
                {
                  "expression": {
                    "id": 45994,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 45990,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45974,
                        "src": "2157:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 45992,
                      "indexExpression": {
                        "hexValue": "31",
                        "id": 45991,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2164:1:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2157:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "78",
                      "id": 45993,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2169:3:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_7521d1cadbcfa91eec65aa16715b94ffc1c9654ba57ea2ef1a2127bca1127a83",
                        "typeString": "literal_string \"x\""
                      },
                      "value": "x"
                    },
                    "src": "2157:15:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 45995,
                  "nodeType": "ExpressionStatement",
                  "src": "2157:15:52"
                },
                {
                  "body": {
                    "id": 46024,
                    "nodeType": "Block",
                    "src": "2227:95:52",
                    "statements": [
                      {
                        "expression": {
                          "id": 46018,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 46010,
                              "name": "buffer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45974,
                              "src": "2241:6:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 46012,
                            "indexExpression": {
                              "id": 46011,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45997,
                              "src": "2248:1:52",
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
                            "src": "2241:9:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "baseExpression": {
                              "id": 46013,
                              "name": "HEX_DIGITS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45855,
                              "src": "2253:10:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes16",
                                "typeString": "bytes16"
                              }
                            },
                            "id": 46017,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 46016,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 46014,
                                "name": "localValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 45970,
                                "src": "2264:10:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "hexValue": "307866",
                                "id": 46015,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2277:3:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_15_by_1",
                                  "typeString": "int_const 15"
                                },
                                "value": "0xf"
                              },
                              "src": "2264:16:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2253:28:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "src": "2241:40:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 46019,
                        "nodeType": "ExpressionStatement",
                        "src": "2241:40:52"
                      },
                      {
                        "expression": {
                          "id": 46022,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 46020,
                            "name": "localValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 45970,
                            "src": "2295:10:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": ">>=",
                          "rightHandSide": {
                            "hexValue": "34",
                            "id": 46021,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2310:1:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "2295:16:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 46023,
                        "nodeType": "ExpressionStatement",
                        "src": "2295:16:52"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 46006,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 46004,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45997,
                      "src": "2215:1:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 46005,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2219:1:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2215:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46025,
                  "initializationExpression": {
                    "assignments": [
                      45997
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 45997,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2195:1:52",
                        "nodeType": "VariableDeclaration",
                        "scope": 46025,
                        "src": "2187:9:52",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 45996,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2187:7:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 46003,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 46002,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 46000,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "32",
                          "id": 45998,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2199:1:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "id": 45999,
                          "name": "length",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 45964,
                          "src": "2203:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2199:10:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 46001,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2212:1:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2199:14:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2187:26:52"
                  },
                  "isSimpleCounterLoop": false,
                  "loopExpression": {
                    "expression": {
                      "id": 46008,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "--",
                      "prefix": true,
                      "src": "2222:3:52",
                      "subExpression": {
                        "id": 46007,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45997,
                        "src": "2224:1:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 46009,
                    "nodeType": "ExpressionStatement",
                    "src": "2222:3:52"
                  },
                  "nodeType": "ForStatement",
                  "src": "2182:140:52"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 46028,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 46026,
                      "name": "localValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45970,
                      "src": "2335:10:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 46027,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2349:1:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2335:15:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46035,
                  "nodeType": "IfStatement",
                  "src": "2331:96:52",
                  "trueBody": {
                    "id": 46034,
                    "nodeType": "Block",
                    "src": "2352:75:52",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 46030,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45962,
                              "src": "2402:5:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 46031,
                              "name": "length",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45964,
                              "src": "2409:6:52",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 46029,
                            "name": "StringsInsufficientHexLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 45865,
                            "src": "2373:28:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256,uint256) pure returns (error)"
                            }
                          },
                          "id": 46032,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2373:43:52",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 46033,
                        "nodeType": "RevertStatement",
                        "src": "2366:50:52"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 46038,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45974,
                        "src": "2450:6:52",
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
                      "id": 46037,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2443:6:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 46036,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2443:6:52",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 46039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2443:14:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 45968,
                  "id": 46040,
                  "nodeType": "Return",
                  "src": "2436:21:52"
                }
              ]
            },
            "documentation": {
              "id": 45960,
              "nodeType": "StructuredDocumentation",
              "src": "1822:112:52",
              "text": " @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nameLocation": "1948:11:52",
            "parameters": {
              "id": 45965,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45962,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1968:5:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 46042,
                  "src": "1960:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45961,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1960:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45964,
                  "mutability": "mutable",
                  "name": "length",
                  "nameLocation": "1983:6:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 46042,
                  "src": "1975:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45963,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1975:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1959:31:52"
            },
            "returnParameters": {
              "id": 45968,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45967,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46042,
                  "src": "2014:13:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 45966,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2014:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2013:15:52"
            },
            "scope": 46165,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46062,
            "nodeType": "FunctionDefinition",
            "src": "2623:148:52",
            "nodes": [],
            "body": {
              "id": 46061,
              "nodeType": "Block",
              "src": "2696:75:52",
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
                                "id": 46055,
                                "name": "addr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46045,
                                "src": "2741:4:52",
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
                              "id": 46054,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2733:7:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint160_$",
                                "typeString": "type(uint160)"
                              },
                              "typeName": {
                                "id": 46053,
                                "name": "uint160",
                                "nodeType": "ElementaryTypeName",
                                "src": "2733:7:52",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 46056,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2733:13:52",
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
                          "id": 46052,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2725:7:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 46051,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2725:7:52",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 46057,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2725:22:52",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 46058,
                        "name": "ADDRESS_LENGTH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 45858,
                        "src": "2749:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      ],
                      "id": 46050,
                      "name": "toHexString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        45959,
                        46042,
                        46062
                      ],
                      "referencedDeclaration": 46042,
                      "src": "2713:11:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (string memory)"
                      }
                    },
                    "id": 46059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2713:51:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 46049,
                  "id": 46060,
                  "nodeType": "Return",
                  "src": "2706:58:52"
                }
              ]
            },
            "documentation": {
              "id": 46043,
              "nodeType": "StructuredDocumentation",
              "src": "2470:148:52",
              "text": " @dev Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal\n representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nameLocation": "2632:11:52",
            "parameters": {
              "id": 46046,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46045,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "2652:4:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 46062,
                  "src": "2644:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46044,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2644:7:52",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2643:14:52"
            },
            "returnParameters": {
              "id": 46049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46048,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46062,
                  "src": "2681:13:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 46047,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2681:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2680:15:52"
            },
            "scope": 46165,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46127,
            "nodeType": "FunctionDefinition",
            "src": "2947:723:52",
            "nodes": [],
            "body": {
              "id": 46126,
              "nodeType": "Block",
              "src": "3028:642:52",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    46071
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46071,
                      "mutability": "mutable",
                      "name": "buffer",
                      "nameLocation": "3051:6:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 46126,
                      "src": "3038:19:52",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 46070,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "3038:5:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46078,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 46075,
                            "name": "addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46065,
                            "src": "3078:4:52",
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
                          "id": 46074,
                          "name": "toHexString",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            45959,
                            46042,
                            46062
                          ],
                          "referencedDeclaration": 46062,
                          "src": "3066:11:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure returns (string memory)"
                          }
                        },
                        "id": 46076,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3066:17:52",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 46073,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3060:5:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": {
                        "id": 46072,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "3060:5:52",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 46077,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3060:24:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3038:46:52"
                },
                {
                  "assignments": [
                    46080
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 46080,
                      "mutability": "mutable",
                      "name": "hashValue",
                      "nameLocation": "3177:9:52",
                      "nodeType": "VariableDeclaration",
                      "scope": 46126,
                      "src": "3169:17:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 46079,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3169:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 46081,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3169:17:52"
                },
                {
                  "AST": {
                    "nativeSrc": "3221:78:52",
                    "nodeType": "YulBlock",
                    "src": "3221:78:52",
                    "statements": [
                      {
                        "nativeSrc": "3235:54:52",
                        "nodeType": "YulAssignment",
                        "src": "3235:54:52",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3252:2:52",
                              "nodeType": "YulLiteral",
                              "src": "3252:2:52",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "buffer",
                                      "nativeSrc": "3270:6:52",
                                      "nodeType": "YulIdentifier",
                                      "src": "3270:6:52"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "3278:4:52",
                                      "nodeType": "YulLiteral",
                                      "src": "3278:4:52",
                                      "type": "",
                                      "value": "0x22"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "3266:3:52",
                                    "nodeType": "YulIdentifier",
                                    "src": "3266:3:52"
                                  },
                                  "nativeSrc": "3266:17:52",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3266:17:52"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3285:2:52",
                                  "nodeType": "YulLiteral",
                                  "src": "3285:2:52",
                                  "type": "",
                                  "value": "40"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "3256:9:52",
                                "nodeType": "YulIdentifier",
                                "src": "3256:9:52"
                              },
                              "nativeSrc": "3256:32:52",
                              "nodeType": "YulFunctionCall",
                              "src": "3256:32:52"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nativeSrc": "3248:3:52",
                            "nodeType": "YulIdentifier",
                            "src": "3248:3:52"
                          },
                          "nativeSrc": "3248:41:52",
                          "nodeType": "YulFunctionCall",
                          "src": "3248:41:52"
                        },
                        "variableNames": [
                          {
                            "name": "hashValue",
                            "nativeSrc": "3235:9:52",
                            "nodeType": "YulIdentifier",
                            "src": "3235:9:52"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 46071,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3270:6:52",
                      "valueSize": 1
                    },
                    {
                      "declaration": 46080,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3235:9:52",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 46082,
                  "nodeType": "InlineAssembly",
                  "src": "3196:103:52"
                },
                {
                  "body": {
                    "id": 46119,
                    "nodeType": "Block",
                    "src": "3342:291:52",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 46106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 46097,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 46095,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 46093,
                                "name": "hashValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46080,
                                "src": "3448:9:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "hexValue": "307866",
                                "id": 46094,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3460:3:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_15_by_1",
                                  "typeString": "int_const 15"
                                },
                                "value": "0xf"
                              },
                              "src": "3448:15:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "37",
                              "id": 46096,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3466:1:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_7_by_1",
                                "typeString": "int_const 7"
                              },
                              "value": "7"
                            },
                            "src": "3448:19:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "id": 46105,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 46100,
                                    "name": "buffer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 46071,
                                    "src": "3477:6:52",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 46102,
                                  "indexExpression": {
                                    "id": 46101,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 46084,
                                    "src": "3484:1:52",
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
                                  "src": "3477:9:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                ],
                                "id": 46099,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3471:5:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": {
                                  "id": 46098,
                                  "name": "uint8",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3471:5:52",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 46103,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3471:16:52",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "3936",
                              "id": 46104,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3490:2:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_96_by_1",
                                "typeString": "int_const 96"
                              },
                              "value": "96"
                            },
                            "src": "3471:21:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3448:44:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 46114,
                        "nodeType": "IfStatement",
                        "src": "3444:150:52",
                        "trueBody": {
                          "id": 46113,
                          "nodeType": "Block",
                          "src": "3494:100:52",
                          "statements": [
                            {
                              "expression": {
                                "id": 46111,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 46107,
                                    "name": "buffer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 46071,
                                    "src": "3562:6:52",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 46109,
                                  "indexExpression": {
                                    "id": 46108,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 46084,
                                    "src": "3569:1:52",
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
                                  "src": "3562:9:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "^=",
                                "rightHandSide": {
                                  "hexValue": "30783230",
                                  "id": 46110,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3575:4:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_32_by_1",
                                    "typeString": "int_const 32"
                                  },
                                  "value": "0x20"
                                },
                                "src": "3562:17:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 46112,
                              "nodeType": "ExpressionStatement",
                              "src": "3562:17:52"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 46117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 46115,
                            "name": "hashValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 46080,
                            "src": "3607:9:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": ">>=",
                          "rightHandSide": {
                            "hexValue": "34",
                            "id": 46116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3621:1:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "3607:15:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 46118,
                        "nodeType": "ExpressionStatement",
                        "src": "3607:15:52"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 46089,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 46087,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46084,
                      "src": "3330:1:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 46088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3334:1:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3330:5:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 46120,
                  "initializationExpression": {
                    "assignments": [
                      46084
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 46084,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3322:1:52",
                        "nodeType": "VariableDeclaration",
                        "scope": 46120,
                        "src": "3314:9:52",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 46083,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3314:7:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 46086,
                    "initialValue": {
                      "hexValue": "3431",
                      "id": 46085,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3326:2:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_41_by_1",
                        "typeString": "int_const 41"
                      },
                      "value": "41"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3314:14:52"
                  },
                  "isSimpleCounterLoop": false,
                  "loopExpression": {
                    "expression": {
                      "id": 46091,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "--",
                      "prefix": true,
                      "src": "3337:3:52",
                      "subExpression": {
                        "id": 46090,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46084,
                        "src": "3339:1:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 46092,
                    "nodeType": "ExpressionStatement",
                    "src": "3337:3:52"
                  },
                  "nodeType": "ForStatement",
                  "src": "3309:324:52"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 46123,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46071,
                        "src": "3656:6:52",
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
                      "id": 46122,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3649:6:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 46121,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3649:6:52",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 46124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3649:14:52",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 46069,
                  "id": 46125,
                  "nodeType": "Return",
                  "src": "3642:21:52"
                }
              ]
            },
            "documentation": {
              "id": 46063,
              "nodeType": "StructuredDocumentation",
              "src": "2777:165:52",
              "text": " @dev Converts an `address` with fixed length of 20 bytes to its checksummed ASCII `string` hexadecimal\n representation, according to EIP-55."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toChecksumHexString",
            "nameLocation": "2956:19:52",
            "parameters": {
              "id": 46066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46065,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "2984:4:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 46127,
                  "src": "2976:12:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 46064,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2976:7:52",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2975:14:52"
            },
            "returnParameters": {
              "id": 46069,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46068,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46127,
                  "src": "3013:13:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 46067,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3013:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3012:15:52"
            },
            "scope": 46165,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 46164,
            "nodeType": "FunctionDefinition",
            "src": "3747:182:52",
            "nodes": [],
            "body": {
              "id": 46163,
              "nodeType": "Block",
              "src": "3825:104:52",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 46161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 46147,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 46139,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46130,
                              "src": "3848:1:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 46138,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3842:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 46137,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "3842:5:52",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 46140,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3842:8:52",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 46141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3851:6:52",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "3842:15:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 46144,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 46132,
                              "src": "3867:1:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 46143,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3861:5:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 46142,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "3861:5:52",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 46145,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3861:8:52",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 46146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3870:6:52",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "3861:15:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3842:34:52",
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
                      "id": 46160,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 46151,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46130,
                                "src": "3896:1:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "id": 46150,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3890:5:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 46149,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3890:5:52",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 46152,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3890:8:52",
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
                          "id": 46148,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "3880:9:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 46153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3880:19:52",
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
                            "arguments": [
                              {
                                "id": 46157,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 46132,
                                "src": "3919:1:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "id": 46156,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3913:5:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 46155,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3913:5:52",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 46158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3913:8:52",
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
                          "id": 46154,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "3903:9:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 46159,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3903:19:52",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "3880:42:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3842:80:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 46136,
                  "id": 46162,
                  "nodeType": "Return",
                  "src": "3835:87:52"
                }
              ]
            },
            "documentation": {
              "id": 46128,
              "nodeType": "StructuredDocumentation",
              "src": "3676:66:52",
              "text": " @dev Returns true if the two strings are equal."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "equal",
            "nameLocation": "3756:5:52",
            "parameters": {
              "id": 46133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46130,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3776:1:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 46164,
                  "src": "3762:15:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 46129,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3762:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 46132,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3793:1:52",
                  "nodeType": "VariableDeclaration",
                  "scope": 46164,
                  "src": "3779:15:52",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 46131,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3779:6:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3761:34:52"
            },
            "returnParameters": {
              "id": 46136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46135,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46164,
                  "src": "3819:4:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 46134,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3819:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3818:6:52"
            },
            "scope": 46165,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Strings",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 45852,
          "nodeType": "StructuredDocumentation",
          "src": "216:34:52",
          "text": " @dev String operations."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          46165
        ],
        "name": "Strings",
        "nameLocation": "259:7:52",
        "scope": 46166,
        "usedErrors": [
          45865
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 52
} as const;