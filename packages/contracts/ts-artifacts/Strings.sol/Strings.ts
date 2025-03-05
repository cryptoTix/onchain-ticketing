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
    "sourceMap": "251:3680:44:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;251:3680:44;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122087941363764d03631ba440a40f5c905443119e6b6518bd72bf20759888ca8a0264736f6c634300081a0033",
    "sourceMap": "251:3680:44:-:0;;;;;;;;",
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
    "id": 41618,
    "exportedSymbols": {
      "Math": [
        43765
      ],
      "SignedMath": [
        45674
      ],
      "Strings": [
        41617
      ]
    },
    "nodeType": "SourceUnit",
    "src": "101:3831:44",
    "nodes": [
      {
        "id": 41299,
        "nodeType": "PragmaDirective",
        "src": "101:24:44",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 41301,
        "nodeType": "ImportDirective",
        "src": "127:37:44",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/Math.sol",
        "file": "./math/Math.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41618,
        "sourceUnit": 43766,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41300,
              "name": "Math",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43765,
              "src": "135:4:44",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41303,
        "nodeType": "ImportDirective",
        "src": "165:49:44",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol",
        "file": "./math/SignedMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 41618,
        "sourceUnit": 45675,
        "symbolAliases": [
          {
            "foreign": {
              "id": 41302,
              "name": "SignedMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 45674,
              "src": "173:10:44",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 41617,
        "nodeType": "ContractDefinition",
        "src": "251:3680:44",
        "nodes": [
          {
            "id": 41307,
            "nodeType": "VariableDeclaration",
            "src": "273:56:44",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "HEX_DIGITS",
            "nameLocation": "298:10:44",
            "scope": 41617,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes16",
              "typeString": "bytes16"
            },
            "typeName": {
              "id": 41305,
              "name": "bytes16",
              "nodeType": "ElementaryTypeName",
              "src": "273:7:44",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes16",
                "typeString": "bytes16"
              }
            },
            "value": {
              "hexValue": "30313233343536373839616263646566",
              "id": 41306,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "311:18:44",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_cb29997ed99ead0db59ce4d12b7d3723198c827273e5796737c926d78019c39f",
                "typeString": "literal_string \"0123456789abcdef\""
              },
              "value": "0123456789abcdef"
            },
            "visibility": "private"
          },
          {
            "id": 41310,
            "nodeType": "VariableDeclaration",
            "src": "335:42:44",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ADDRESS_LENGTH",
            "nameLocation": "358:14:44",
            "scope": 41617,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 41308,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "335:5:44",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "hexValue": "3230",
              "id": 41309,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "375:2:44",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_20_by_1",
                "typeString": "int_const 20"
              },
              "value": "20"
            },
            "visibility": "private"
          },
          {
            "id": 41317,
            "nodeType": "ErrorDefinition",
            "src": "470:66:44",
            "nodes": [],
            "documentation": {
              "id": 41311,
              "nodeType": "StructuredDocumentation",
              "src": "384:81:44",
              "text": " @dev The `value` string doesn't fit in the specified `length`."
            },
            "errorSelector": "e22e27eb",
            "name": "StringsInsufficientHexLength",
            "nameLocation": "476:28:44",
            "parameters": {
              "id": 41316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41313,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "513:5:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41317,
                  "src": "505:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41312,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41315,
                  "mutability": "mutable",
                  "name": "length",
                  "nameLocation": "528:6:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41317,
                  "src": "520:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41314,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "520:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "504:31:44"
            }
          },
          {
            "id": 41365,
            "nodeType": "FunctionDefinition",
            "src": "637:632:44",
            "nodes": [],
            "body": {
              "id": 41364,
              "nodeType": "Block",
              "src": "708:561:44",
              "nodes": [],
              "statements": [
                {
                  "id": 41363,
                  "nodeType": "UncheckedBlock",
                  "src": "718:545:44",
                  "statements": [
                    {
                      "assignments": [
                        41326
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 41326,
                          "mutability": "mutable",
                          "name": "length",
                          "nameLocation": "750:6:44",
                          "nodeType": "VariableDeclaration",
                          "scope": 41363,
                          "src": "742:14:44",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 41325,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "742:7:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 41333,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 41332,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 41329,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41320,
                              "src": "770:5:44",
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
                              "id": 41327,
                              "name": "Math",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43765,
                              "src": "759:4:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Math_$43765_$",
                                "typeString": "type(library Math)"
                              }
                            },
                            "id": 41328,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "764:5:44",
                            "memberName": "log10",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 43537,
                            "src": "759:10:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) pure returns (uint256)"
                            }
                          },
                          "id": 41330,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "759:17:44",
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
                          "id": 41331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "779:1:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "759:21:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "742:38:44"
                    },
                    {
                      "assignments": [
                        41335
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 41335,
                          "mutability": "mutable",
                          "name": "buffer",
                          "nameLocation": "808:6:44",
                          "nodeType": "VariableDeclaration",
                          "scope": 41363,
                          "src": "794:20:44",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string"
                          },
                          "typeName": {
                            "id": 41334,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "794:6:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage_ptr",
                              "typeString": "string"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 41340,
                      "initialValue": {
                        "arguments": [
                          {
                            "id": 41338,
                            "name": "length",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41326,
                            "src": "828:6:44",
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
                          "id": 41337,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "817:10:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (string memory)"
                          },
                          "typeName": {
                            "id": 41336,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "821:6:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_storage_ptr",
                              "typeString": "string"
                            }
                          }
                        },
                        "id": 41339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "817:18:44",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "794:41:44"
                    },
                    {
                      "assignments": [
                        41342
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 41342,
                          "mutability": "mutable",
                          "name": "ptr",
                          "nameLocation": "857:3:44",
                          "nodeType": "VariableDeclaration",
                          "scope": 41363,
                          "src": "849:11:44",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 41341,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "849:7:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 41343,
                      "nodeType": "VariableDeclarationStatement",
                      "src": "849:11:44"
                    },
                    {
                      "AST": {
                        "nativeSrc": "899:67:44",
                        "nodeType": "YulBlock",
                        "src": "899:67:44",
                        "statements": [
                          {
                            "nativeSrc": "917:35:44",
                            "nodeType": "YulAssignment",
                            "src": "917:35:44",
                            "value": {
                              "arguments": [
                                {
                                  "name": "buffer",
                                  "nativeSrc": "928:6:44",
                                  "nodeType": "YulIdentifier",
                                  "src": "928:6:44"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "940:2:44",
                                      "nodeType": "YulLiteral",
                                      "src": "940:2:44",
                                      "type": "",
                                      "value": "32"
                                    },
                                    {
                                      "name": "length",
                                      "nativeSrc": "944:6:44",
                                      "nodeType": "YulIdentifier",
                                      "src": "944:6:44"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "936:3:44",
                                    "nodeType": "YulIdentifier",
                                    "src": "936:3:44"
                                  },
                                  "nativeSrc": "936:15:44",
                                  "nodeType": "YulFunctionCall",
                                  "src": "936:15:44"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "924:3:44",
                                "nodeType": "YulIdentifier",
                                "src": "924:3:44"
                              },
                              "nativeSrc": "924:28:44",
                              "nodeType": "YulFunctionCall",
                              "src": "924:28:44"
                            },
                            "variableNames": [
                              {
                                "name": "ptr",
                                "nativeSrc": "917:3:44",
                                "nodeType": "YulIdentifier",
                                "src": "917:3:44"
                              }
                            ]
                          }
                        ]
                      },
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 41335,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "928:6:44",
                          "valueSize": 1
                        },
                        {
                          "declaration": 41326,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "944:6:44",
                          "valueSize": 1
                        },
                        {
                          "declaration": 41342,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "917:3:44",
                          "valueSize": 1
                        }
                      ],
                      "flags": [
                        "memory-safe"
                      ],
                      "id": 41344,
                      "nodeType": "InlineAssembly",
                      "src": "874:92:44"
                    },
                    {
                      "body": {
                        "id": 41359,
                        "nodeType": "Block",
                        "src": "992:234:44",
                        "statements": [
                          {
                            "expression": {
                              "id": 41347,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "--",
                              "prefix": false,
                              "src": "1010:5:44",
                              "subExpression": {
                                "id": 41346,
                                "name": "ptr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41342,
                                "src": "1010:3:44",
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
                            "id": 41348,
                            "nodeType": "ExpressionStatement",
                            "src": "1010:5:44"
                          },
                          {
                            "AST": {
                              "nativeSrc": "1058:86:44",
                              "nodeType": "YulBlock",
                              "src": "1058:86:44",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "ptr",
                                        "nativeSrc": "1088:3:44",
                                        "nodeType": "YulIdentifier",
                                        "src": "1088:3:44"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "value",
                                                "nativeSrc": "1102:5:44",
                                                "nodeType": "YulIdentifier",
                                                "src": "1102:5:44"
                                              },
                                              {
                                                "kind": "number",
                                                "nativeSrc": "1109:2:44",
                                                "nodeType": "YulLiteral",
                                                "src": "1109:2:44",
                                                "type": "",
                                                "value": "10"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mod",
                                              "nativeSrc": "1098:3:44",
                                              "nodeType": "YulIdentifier",
                                              "src": "1098:3:44"
                                            },
                                            "nativeSrc": "1098:14:44",
                                            "nodeType": "YulFunctionCall",
                                            "src": "1098:14:44"
                                          },
                                          {
                                            "name": "HEX_DIGITS",
                                            "nativeSrc": "1114:10:44",
                                            "nodeType": "YulIdentifier",
                                            "src": "1114:10:44"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "byte",
                                          "nativeSrc": "1093:4:44",
                                          "nodeType": "YulIdentifier",
                                          "src": "1093:4:44"
                                        },
                                        "nativeSrc": "1093:32:44",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1093:32:44"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mstore8",
                                      "nativeSrc": "1080:7:44",
                                      "nodeType": "YulIdentifier",
                                      "src": "1080:7:44"
                                    },
                                    "nativeSrc": "1080:46:44",
                                    "nodeType": "YulFunctionCall",
                                    "src": "1080:46:44"
                                  },
                                  "nativeSrc": "1080:46:44",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "1080:46:44"
                                }
                              ]
                            },
                            "evmVersion": "paris",
                            "externalReferences": [
                              {
                                "declaration": 41307,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "1114:10:44",
                                "valueSize": 1
                              },
                              {
                                "declaration": 41342,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "1088:3:44",
                                "valueSize": 1
                              },
                              {
                                "declaration": 41320,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "1102:5:44",
                                "valueSize": 1
                              }
                            ],
                            "flags": [
                              "memory-safe"
                            ],
                            "id": 41349,
                            "nodeType": "InlineAssembly",
                            "src": "1033:111:44"
                          },
                          {
                            "expression": {
                              "id": 41352,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 41350,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41320,
                                "src": "1161:5:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "/=",
                              "rightHandSide": {
                                "hexValue": "3130",
                                "id": 41351,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1170:2:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_10_by_1",
                                  "typeString": "int_const 10"
                                },
                                "value": "10"
                              },
                              "src": "1161:11:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 41353,
                            "nodeType": "ExpressionStatement",
                            "src": "1161:11:44"
                          },
                          {
                            "condition": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 41356,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 41354,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41320,
                                "src": "1194:5:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "hexValue": "30",
                                "id": 41355,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1203:1:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "1194:10:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 41358,
                            "nodeType": "IfStatement",
                            "src": "1190:21:44",
                            "trueBody": {
                              "id": 41357,
                              "nodeType": "Break",
                              "src": "1206:5:44"
                            }
                          }
                        ]
                      },
                      "condition": {
                        "hexValue": "74727565",
                        "id": 41345,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "986:4:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "id": 41360,
                      "nodeType": "WhileStatement",
                      "src": "979:247:44"
                    },
                    {
                      "expression": {
                        "id": 41361,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41335,
                        "src": "1246:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "functionReturnParameters": 41324,
                      "id": 41362,
                      "nodeType": "Return",
                      "src": "1239:13:44"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 41318,
              "nodeType": "StructuredDocumentation",
              "src": "542:90:44",
              "text": " @dev Converts a `uint256` to its ASCII `string` decimal representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "646:8:44",
            "parameters": {
              "id": 41321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41320,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "663:5:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41365,
                  "src": "655:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41319,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "655:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "654:15:44"
            },
            "returnParameters": {
              "id": 41324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41323,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41365,
                  "src": "693:13:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41322,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "692:15:44"
            },
            "scope": 41617,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41391,
            "nodeType": "FunctionDefinition",
            "src": "1369:168:44",
            "nodes": [],
            "body": {
              "id": 41390,
              "nodeType": "Block",
              "src": "1445:92:44",
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
                          "id": 41378,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 41376,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41368,
                            "src": "1476:5:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 41377,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1484:1:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1476:9:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseExpression": {
                          "hexValue": "",
                          "id": 41380,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1494:2:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        },
                        "id": 41381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "Conditional",
                        "src": "1476:20:44",
                        "trueExpression": {
                          "hexValue": "2d",
                          "id": 41379,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1488:3:44",
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
                                "id": 41385,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41368,
                                "src": "1522:5:44",
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
                                "id": 41383,
                                "name": "SignedMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 45674,
                                "src": "1507:10:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_SignedMath_$45674_$",
                                  "typeString": "type(library SignedMath)"
                                }
                              },
                              "id": 41384,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1518:3:44",
                              "memberName": "abs",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 45673,
                              "src": "1507:14:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_uint256_$",
                                "typeString": "function (int256) pure returns (uint256)"
                              }
                            },
                            "id": 41386,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1507:21:44",
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
                          "id": 41382,
                          "name": "toString",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41365,
                          "src": "1498:8:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (string memory)"
                          }
                        },
                        "id": 41387,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1498:31:44",
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
                        "id": 41374,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1462:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                          "typeString": "type(string storage pointer)"
                        },
                        "typeName": {
                          "id": 41373,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "1462:6:44",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 41375,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1469:6:44",
                      "memberName": "concat",
                      "nodeType": "MemberAccess",
                      "src": "1462:13:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_stringconcat_pure$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () pure returns (string memory)"
                      }
                    },
                    "id": 41388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1462:68:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 41372,
                  "id": 41389,
                  "nodeType": "Return",
                  "src": "1455:75:44"
                }
              ]
            },
            "documentation": {
              "id": 41366,
              "nodeType": "StructuredDocumentation",
              "src": "1275:89:44",
              "text": " @dev Converts a `int256` to its ASCII `string` decimal representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toStringSigned",
            "nameLocation": "1378:14:44",
            "parameters": {
              "id": 41369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41368,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1400:5:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41391,
                  "src": "1393:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 41367,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1393:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1392:14:44"
            },
            "returnParameters": {
              "id": 41372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41371,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41391,
                  "src": "1430:13:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41370,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1430:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1429:15:44"
            },
            "scope": 41617,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41411,
            "nodeType": "FunctionDefinition",
            "src": "1642:174:44",
            "nodes": [],
            "body": {
              "id": 41410,
              "nodeType": "Block",
              "src": "1716:100:44",
              "nodes": [],
              "statements": [
                {
                  "id": 41409,
                  "nodeType": "UncheckedBlock",
                  "src": "1726:84:44",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "id": 41400,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41394,
                            "src": "1769:5:44",
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
                            "id": 41406,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 41403,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 41394,
                                  "src": "1788:5:44",
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
                                  "id": 41401,
                                  "name": "Math",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43765,
                                  "src": "1776:4:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_Math_$43765_$",
                                    "typeString": "type(library Math)"
                                  }
                                },
                                "id": 41402,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1781:6:44",
                                "memberName": "log256",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 43708,
                                "src": "1776:11:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 41404,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1776:18:44",
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
                              "id": 41405,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1797:1:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1776:22:44",
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
                          "id": 41399,
                          "name": "toHexString",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            41411,
                            41494,
                            41514
                          ],
                          "referencedDeclaration": 41494,
                          "src": "1757:11:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256,uint256) pure returns (string memory)"
                          }
                        },
                        "id": 41407,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1757:42:44",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "functionReturnParameters": 41398,
                      "id": 41408,
                      "nodeType": "Return",
                      "src": "1750:49:44"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 41392,
              "nodeType": "StructuredDocumentation",
              "src": "1543:94:44",
              "text": " @dev Converts a `uint256` to its ASCII `string` hexadecimal representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nameLocation": "1651:11:44",
            "parameters": {
              "id": 41395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41394,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1671:5:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41411,
                  "src": "1663:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41393,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1663:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1662:15:44"
            },
            "returnParameters": {
              "id": 41398,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41397,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41411,
                  "src": "1701:13:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41396,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1701:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1700:15:44"
            },
            "scope": 41617,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41494,
            "nodeType": "FunctionDefinition",
            "src": "1939:525:44",
            "nodes": [],
            "body": {
              "id": 41493,
              "nodeType": "Block",
              "src": "2029:435:44",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41422
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41422,
                      "mutability": "mutable",
                      "name": "localValue",
                      "nameLocation": "2047:10:44",
                      "nodeType": "VariableDeclaration",
                      "scope": 41493,
                      "src": "2039:18:44",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 41421,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2039:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41424,
                  "initialValue": {
                    "id": 41423,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 41414,
                    "src": "2060:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2039:26:44"
                },
                {
                  "assignments": [
                    41426
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41426,
                      "mutability": "mutable",
                      "name": "buffer",
                      "nameLocation": "2088:6:44",
                      "nodeType": "VariableDeclaration",
                      "scope": 41493,
                      "src": "2075:19:44",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 41425,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2075:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41435,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 41433,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 41431,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "32",
                            "id": 41429,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2107:1:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 41430,
                            "name": "length",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41416,
                            "src": "2111:6:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2107:10:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 41432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2120:1:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "2107:14:44",
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
                      "id": 41428,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "2097:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (bytes memory)"
                      },
                      "typeName": {
                        "id": 41427,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "2101:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      }
                    },
                    "id": 41434,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2097:25:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2075:47:44"
                },
                {
                  "expression": {
                    "id": 41440,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 41436,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41426,
                        "src": "2132:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 41438,
                      "indexExpression": {
                        "hexValue": "30",
                        "id": 41437,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2139:1:44",
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
                      "src": "2132:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 41439,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2144:3:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                        "typeString": "literal_string \"0\""
                      },
                      "value": "0"
                    },
                    "src": "2132:15:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 41441,
                  "nodeType": "ExpressionStatement",
                  "src": "2132:15:44"
                },
                {
                  "expression": {
                    "id": 41446,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 41442,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41426,
                        "src": "2157:6:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 41444,
                      "indexExpression": {
                        "hexValue": "31",
                        "id": 41443,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2164:1:44",
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
                      "src": "2157:9:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "78",
                      "id": 41445,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2169:3:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_7521d1cadbcfa91eec65aa16715b94ffc1c9654ba57ea2ef1a2127bca1127a83",
                        "typeString": "literal_string \"x\""
                      },
                      "value": "x"
                    },
                    "src": "2157:15:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "id": 41447,
                  "nodeType": "ExpressionStatement",
                  "src": "2157:15:44"
                },
                {
                  "body": {
                    "id": 41476,
                    "nodeType": "Block",
                    "src": "2227:95:44",
                    "statements": [
                      {
                        "expression": {
                          "id": 41470,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 41462,
                              "name": "buffer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41426,
                              "src": "2241:6:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 41464,
                            "indexExpression": {
                              "id": 41463,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41449,
                              "src": "2248:1:44",
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
                            "src": "2241:9:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "baseExpression": {
                              "id": 41465,
                              "name": "HEX_DIGITS",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41307,
                              "src": "2253:10:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes16",
                                "typeString": "bytes16"
                              }
                            },
                            "id": 41469,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 41468,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 41466,
                                "name": "localValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41422,
                                "src": "2264:10:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "hexValue": "307866",
                                "id": 41467,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2277:3:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_15_by_1",
                                  "typeString": "int_const 15"
                                },
                                "value": "0xf"
                              },
                              "src": "2264:16:44",
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
                            "src": "2253:28:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes1",
                              "typeString": "bytes1"
                            }
                          },
                          "src": "2241:40:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes1",
                            "typeString": "bytes1"
                          }
                        },
                        "id": 41471,
                        "nodeType": "ExpressionStatement",
                        "src": "2241:40:44"
                      },
                      {
                        "expression": {
                          "id": 41474,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 41472,
                            "name": "localValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41422,
                            "src": "2295:10:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": ">>=",
                          "rightHandSide": {
                            "hexValue": "34",
                            "id": 41473,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2310:1:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "2295:16:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 41475,
                        "nodeType": "ExpressionStatement",
                        "src": "2295:16:44"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 41458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41456,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41449,
                      "src": "2215:1:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 41457,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2219:1:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2215:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41477,
                  "initializationExpression": {
                    "assignments": [
                      41449
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 41449,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2195:1:44",
                        "nodeType": "VariableDeclaration",
                        "scope": 41477,
                        "src": "2187:9:44",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 41448,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2187:7:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 41455,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 41454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 41452,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "32",
                          "id": 41450,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2199:1:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "id": 41451,
                          "name": "length",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 41416,
                          "src": "2203:6:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2199:10:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 41453,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2212:1:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2199:14:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2187:26:44"
                  },
                  "isSimpleCounterLoop": false,
                  "loopExpression": {
                    "expression": {
                      "id": 41460,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "--",
                      "prefix": true,
                      "src": "2222:3:44",
                      "subExpression": {
                        "id": 41459,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41449,
                        "src": "2224:1:44",
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
                    "id": 41461,
                    "nodeType": "ExpressionStatement",
                    "src": "2222:3:44"
                  },
                  "nodeType": "ForStatement",
                  "src": "2182:140:44"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 41480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41478,
                      "name": "localValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41422,
                      "src": "2335:10:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 41479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2349:1:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2335:15:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41487,
                  "nodeType": "IfStatement",
                  "src": "2331:96:44",
                  "trueBody": {
                    "id": 41486,
                    "nodeType": "Block",
                    "src": "2352:75:44",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "id": 41482,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41414,
                              "src": "2402:5:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 41483,
                              "name": "length",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41416,
                              "src": "2409:6:44",
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
                            "id": 41481,
                            "name": "StringsInsufficientHexLength",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41317,
                            "src": "2373:28:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_uint256_$_t_uint256_$returns$_t_error_$",
                              "typeString": "function (uint256,uint256) pure returns (error)"
                            }
                          },
                          "id": 41484,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2373:43:44",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 41485,
                        "nodeType": "RevertStatement",
                        "src": "2366:50:44"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41490,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41426,
                        "src": "2450:6:44",
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
                      "id": 41489,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2443:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 41488,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2443:6:44",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 41491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2443:14:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 41420,
                  "id": 41492,
                  "nodeType": "Return",
                  "src": "2436:21:44"
                }
              ]
            },
            "documentation": {
              "id": 41412,
              "nodeType": "StructuredDocumentation",
              "src": "1822:112:44",
              "text": " @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nameLocation": "1948:11:44",
            "parameters": {
              "id": 41417,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41414,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1968:5:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41494,
                  "src": "1960:13:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41413,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1960:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41416,
                  "mutability": "mutable",
                  "name": "length",
                  "nameLocation": "1983:6:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41494,
                  "src": "1975:14:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41415,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1975:7:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1959:31:44"
            },
            "returnParameters": {
              "id": 41420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41419,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41494,
                  "src": "2014:13:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41418,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2014:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2013:15:44"
            },
            "scope": 41617,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41514,
            "nodeType": "FunctionDefinition",
            "src": "2623:148:44",
            "nodes": [],
            "body": {
              "id": 41513,
              "nodeType": "Block",
              "src": "2696:75:44",
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
                                "id": 41507,
                                "name": "addr",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41497,
                                "src": "2741:4:44",
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
                              "id": 41506,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2733:7:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint160_$",
                                "typeString": "type(uint160)"
                              },
                              "typeName": {
                                "id": 41505,
                                "name": "uint160",
                                "nodeType": "ElementaryTypeName",
                                "src": "2733:7:44",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 41508,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2733:13:44",
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
                          "id": 41504,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2725:7:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 41503,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2725:7:44",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 41509,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2725:22:44",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 41510,
                        "name": "ADDRESS_LENGTH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41310,
                        "src": "2749:14:44",
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
                      "id": 41502,
                      "name": "toHexString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        41411,
                        41494,
                        41514
                      ],
                      "referencedDeclaration": 41494,
                      "src": "2713:11:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256,uint256) pure returns (string memory)"
                      }
                    },
                    "id": 41511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2713:51:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 41501,
                  "id": 41512,
                  "nodeType": "Return",
                  "src": "2706:58:44"
                }
              ]
            },
            "documentation": {
              "id": 41495,
              "nodeType": "StructuredDocumentation",
              "src": "2470:148:44",
              "text": " @dev Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal\n representation."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toHexString",
            "nameLocation": "2632:11:44",
            "parameters": {
              "id": 41498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41497,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "2652:4:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41514,
                  "src": "2644:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41496,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2644:7:44",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2643:14:44"
            },
            "returnParameters": {
              "id": 41501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41500,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41514,
                  "src": "2681:13:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41499,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2681:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2680:15:44"
            },
            "scope": 41617,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41579,
            "nodeType": "FunctionDefinition",
            "src": "2947:723:44",
            "nodes": [],
            "body": {
              "id": 41578,
              "nodeType": "Block",
              "src": "3028:642:44",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    41523
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41523,
                      "mutability": "mutable",
                      "name": "buffer",
                      "nameLocation": "3051:6:44",
                      "nodeType": "VariableDeclaration",
                      "scope": 41578,
                      "src": "3038:19:44",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 41522,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "3038:5:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41530,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 41527,
                            "name": "addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41517,
                            "src": "3078:4:44",
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
                          "id": 41526,
                          "name": "toHexString",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            41411,
                            41494,
                            41514
                          ],
                          "referencedDeclaration": 41514,
                          "src": "3066:11:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_address_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (address) pure returns (string memory)"
                          }
                        },
                        "id": 41528,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3066:17:44",
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
                      "id": 41525,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3060:5:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": {
                        "id": 41524,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "3060:5:44",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 41529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3060:24:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3038:46:44"
                },
                {
                  "assignments": [
                    41532
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 41532,
                      "mutability": "mutable",
                      "name": "hashValue",
                      "nameLocation": "3177:9:44",
                      "nodeType": "VariableDeclaration",
                      "scope": 41578,
                      "src": "3169:17:44",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 41531,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3169:7:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 41533,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3169:17:44"
                },
                {
                  "AST": {
                    "nativeSrc": "3221:78:44",
                    "nodeType": "YulBlock",
                    "src": "3221:78:44",
                    "statements": [
                      {
                        "nativeSrc": "3235:54:44",
                        "nodeType": "YulAssignment",
                        "src": "3235:54:44",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3252:2:44",
                              "nodeType": "YulLiteral",
                              "src": "3252:2:44",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "buffer",
                                      "nativeSrc": "3270:6:44",
                                      "nodeType": "YulIdentifier",
                                      "src": "3270:6:44"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "3278:4:44",
                                      "nodeType": "YulLiteral",
                                      "src": "3278:4:44",
                                      "type": "",
                                      "value": "0x22"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "3266:3:44",
                                    "nodeType": "YulIdentifier",
                                    "src": "3266:3:44"
                                  },
                                  "nativeSrc": "3266:17:44",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3266:17:44"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3285:2:44",
                                  "nodeType": "YulLiteral",
                                  "src": "3285:2:44",
                                  "type": "",
                                  "value": "40"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "3256:9:44",
                                "nodeType": "YulIdentifier",
                                "src": "3256:9:44"
                              },
                              "nativeSrc": "3256:32:44",
                              "nodeType": "YulFunctionCall",
                              "src": "3256:32:44"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nativeSrc": "3248:3:44",
                            "nodeType": "YulIdentifier",
                            "src": "3248:3:44"
                          },
                          "nativeSrc": "3248:41:44",
                          "nodeType": "YulFunctionCall",
                          "src": "3248:41:44"
                        },
                        "variableNames": [
                          {
                            "name": "hashValue",
                            "nativeSrc": "3235:9:44",
                            "nodeType": "YulIdentifier",
                            "src": "3235:9:44"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41523,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3270:6:44",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41532,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3235:9:44",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41534,
                  "nodeType": "InlineAssembly",
                  "src": "3196:103:44"
                },
                {
                  "body": {
                    "id": 41571,
                    "nodeType": "Block",
                    "src": "3342:291:44",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 41558,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 41549,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 41547,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 41545,
                                "name": "hashValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41532,
                                "src": "3448:9:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "hexValue": "307866",
                                "id": 41546,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3460:3:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_15_by_1",
                                  "typeString": "int_const 15"
                                },
                                "value": "0xf"
                              },
                              "src": "3448:15:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "37",
                              "id": 41548,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3466:1:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_7_by_1",
                                "typeString": "int_const 7"
                              },
                              "value": "7"
                            },
                            "src": "3448:19:44",
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
                            "id": 41557,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "baseExpression": {
                                    "id": 41552,
                                    "name": "buffer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41523,
                                    "src": "3477:6:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 41554,
                                  "indexExpression": {
                                    "id": 41553,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41536,
                                    "src": "3484:1:44",
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
                                  "src": "3477:9:44",
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
                                "id": 41551,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3471:5:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": {
                                  "id": 41550,
                                  "name": "uint8",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3471:5:44",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41555,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3471:16:44",
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
                              "id": 41556,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3490:2:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_96_by_1",
                                "typeString": "int_const 96"
                              },
                              "value": "96"
                            },
                            "src": "3471:21:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3448:44:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 41566,
                        "nodeType": "IfStatement",
                        "src": "3444:150:44",
                        "trueBody": {
                          "id": 41565,
                          "nodeType": "Block",
                          "src": "3494:100:44",
                          "statements": [
                            {
                              "expression": {
                                "id": 41563,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "id": 41559,
                                    "name": "buffer",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41523,
                                    "src": "3562:6:44",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_bytes_memory_ptr",
                                      "typeString": "bytes memory"
                                    }
                                  },
                                  "id": 41561,
                                  "indexExpression": {
                                    "id": 41560,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 41536,
                                    "src": "3569:1:44",
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
                                  "src": "3562:9:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes1",
                                    "typeString": "bytes1"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "^=",
                                "rightHandSide": {
                                  "hexValue": "30783230",
                                  "id": 41562,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3575:4:44",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_32_by_1",
                                    "typeString": "int_const 32"
                                  },
                                  "value": "0x20"
                                },
                                "src": "3562:17:44",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              "id": 41564,
                              "nodeType": "ExpressionStatement",
                              "src": "3562:17:44"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 41569,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 41567,
                            "name": "hashValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 41532,
                            "src": "3607:9:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": ">>=",
                          "rightHandSide": {
                            "hexValue": "34",
                            "id": 41568,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3621:1:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "3607:15:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 41570,
                        "nodeType": "ExpressionStatement",
                        "src": "3607:15:44"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 41541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 41539,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 41536,
                      "src": "3330:1:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 41540,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3334:1:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3330:5:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 41572,
                  "initializationExpression": {
                    "assignments": [
                      41536
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 41536,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3322:1:44",
                        "nodeType": "VariableDeclaration",
                        "scope": 41572,
                        "src": "3314:9:44",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 41535,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3314:7:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 41538,
                    "initialValue": {
                      "hexValue": "3431",
                      "id": 41537,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3326:2:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_41_by_1",
                        "typeString": "int_const 41"
                      },
                      "value": "41"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3314:14:44"
                  },
                  "isSimpleCounterLoop": false,
                  "loopExpression": {
                    "expression": {
                      "id": 41543,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "--",
                      "prefix": true,
                      "src": "3337:3:44",
                      "subExpression": {
                        "id": 41542,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41536,
                        "src": "3339:1:44",
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
                    "id": 41544,
                    "nodeType": "ExpressionStatement",
                    "src": "3337:3:44"
                  },
                  "nodeType": "ForStatement",
                  "src": "3309:324:44"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 41575,
                        "name": "buffer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 41523,
                        "src": "3656:6:44",
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
                      "id": 41574,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3649:6:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": {
                        "id": 41573,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3649:6:44",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 41576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3649:14:44",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 41521,
                  "id": 41577,
                  "nodeType": "Return",
                  "src": "3642:21:44"
                }
              ]
            },
            "documentation": {
              "id": 41515,
              "nodeType": "StructuredDocumentation",
              "src": "2777:165:44",
              "text": " @dev Converts an `address` with fixed length of 20 bytes to its checksummed ASCII `string` hexadecimal\n representation, according to EIP-55."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "toChecksumHexString",
            "nameLocation": "2956:19:44",
            "parameters": {
              "id": 41518,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41517,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "2984:4:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41579,
                  "src": "2976:12:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41516,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2976:7:44",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2975:14:44"
            },
            "returnParameters": {
              "id": 41521,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41520,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41579,
                  "src": "3013:13:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41519,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3013:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3012:15:44"
            },
            "scope": 41617,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41616,
            "nodeType": "FunctionDefinition",
            "src": "3747:182:44",
            "nodes": [],
            "body": {
              "id": 41615,
              "nodeType": "Block",
              "src": "3825:104:44",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 41613,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 41599,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "arguments": [
                            {
                              "id": 41591,
                              "name": "a",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41582,
                              "src": "3848:1:44",
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
                            "id": 41590,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3842:5:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 41589,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "3842:5:44",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 41592,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3842:8:44",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 41593,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3851:6:44",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "3842:15:44",
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
                              "id": 41596,
                              "name": "b",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41584,
                              "src": "3867:1:44",
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
                            "id": 41595,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3861:5:44",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 41594,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "3861:5:44",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 41597,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3861:8:44",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 41598,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3870:6:44",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "3861:15:44",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3842:34:44",
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
                      "id": 41612,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 41603,
                                "name": "a",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41582,
                                "src": "3896:1:44",
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
                              "id": 41602,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3890:5:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 41601,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3890:5:44",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 41604,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3890:8:44",
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
                          "id": 41600,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "3880:9:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 41605,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3880:19:44",
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
                                "id": 41609,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 41584,
                                "src": "3919:1:44",
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
                              "id": 41608,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3913:5:44",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                "typeString": "type(bytes storage pointer)"
                              },
                              "typeName": {
                                "id": 41607,
                                "name": "bytes",
                                "nodeType": "ElementaryTypeName",
                                "src": "3913:5:44",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 41610,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3913:8:44",
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
                          "id": 41606,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "3903:9:44",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 41611,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3903:19:44",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "src": "3880:42:44",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3842:80:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 41588,
                  "id": 41614,
                  "nodeType": "Return",
                  "src": "3835:87:44"
                }
              ]
            },
            "documentation": {
              "id": 41580,
              "nodeType": "StructuredDocumentation",
              "src": "3676:66:44",
              "text": " @dev Returns true if the two strings are equal."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "equal",
            "nameLocation": "3756:5:44",
            "parameters": {
              "id": 41585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41582,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3776:1:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41616,
                  "src": "3762:15:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41581,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3762:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41584,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3793:1:44",
                  "nodeType": "VariableDeclaration",
                  "scope": 41616,
                  "src": "3779:15:44",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41583,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3779:6:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3761:34:44"
            },
            "returnParameters": {
              "id": 41588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41587,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 41616,
                  "src": "3819:4:44",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 41586,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3819:4:44",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3818:6:44"
            },
            "scope": 41617,
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
          "id": 41304,
          "nodeType": "StructuredDocumentation",
          "src": "216:34:44",
          "text": " @dev String operations."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          41617
        ],
        "name": "Strings",
        "nameLocation": "259:7:44",
        "scope": 41618,
        "usedErrors": [
          41317
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 44
} as const;