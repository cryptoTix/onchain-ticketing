export const ContextUpgradeable = {
  "abi": [
    {
      "type": "event",
      "name": "Initialized",
      "inputs": [
        {
          "name": "version",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "InvalidInitialization",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotInitializing",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"}],\"devdoc\":{\"details\":\"Provides information about the current execution context, including the sender of the transaction and its data. While these are generally available via msg.sender and msg.data, they should not be accessed in such a direct manner, since when dealing with meta-transactions the account sending and paying for execution may not be the actual sender (as far as an application is concerned). This contract is only required for intermediate, library-like contracts.\",\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":\"ContextUpgradeable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]}},\"version\":1}",
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
          "name": "InvalidInitialization"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotInitializing"
        },
        {
          "inputs": [
            {
              "internalType": "uint64",
              "name": "version",
              "type": "uint64",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Initialized",
          "anonymous": false
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
        "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol": "ContextUpgradeable"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol": {
        "keccak256": "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
        "urls": [
          "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
          "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol": {
        "keccak256": "0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397",
        "urls": [
          "bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9",
          "dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol",
    "id": 42842,
    "exportedSymbols": {
      "ContextUpgradeable": [
        42841
      ],
      "Initializable": [
        40718
      ]
    },
    "nodeType": "SourceUnit",
    "src": "101:1093:28",
    "nodes": [
      {
        "id": 42797,
        "nodeType": "PragmaDirective",
        "src": "101:24:28",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 42799,
        "nodeType": "ImportDirective",
        "src": "126:63:28",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 42842,
        "sourceUnit": 40719,
        "symbolAliases": [
          {
            "foreign": {
              "id": 42798,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 40718,
              "src": "134:13:28",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 42841,
        "nodeType": "ContractDefinition",
        "src": "688:505:28",
        "nodes": [
          {
            "id": 42808,
            "nodeType": "FunctionDefinition",
            "src": "748:59:28",
            "nodes": [],
            "body": {
              "id": 42807,
              "nodeType": "Block",
              "src": "800:7:28",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 42805,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 42804,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "783:16:28"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40627,
                  "src": "783:16:28"
                },
                "nodeType": "ModifierInvocation",
                "src": "783:16:28"
              }
            ],
            "name": "__Context_init",
            "nameLocation": "757:14:28",
            "parameters": {
              "id": 42803,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "771:2:28"
            },
            "returnParameters": {
              "id": 42806,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "800:0:28"
            },
            "scope": 42841,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42814,
            "nodeType": "FunctionDefinition",
            "src": "813:69:28",
            "nodes": [],
            "body": {
              "id": 42813,
              "nodeType": "Block",
              "src": "875:7:28",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 42811,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 42810,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "858:16:28"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40627,
                  "src": "858:16:28"
                },
                "nodeType": "ModifierInvocation",
                "src": "858:16:28"
              }
            ],
            "name": "__Context_init_unchained",
            "nameLocation": "822:24:28",
            "parameters": {
              "id": 42809,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "846:2:28"
            },
            "returnParameters": {
              "id": 42812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "875:0:28"
            },
            "scope": 42841,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42823,
            "nodeType": "FunctionDefinition",
            "src": "887:96:28",
            "nodes": [],
            "body": {
              "id": 42822,
              "nodeType": "Block",
              "src": "949:34:28",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 42819,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "966:3:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 42820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "970:6:28",
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "966:10:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 42818,
                  "id": 42821,
                  "nodeType": "Return",
                  "src": "959:17:28"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgSender",
            "nameLocation": "896:10:28",
            "parameters": {
              "id": 42815,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "906:2:28"
            },
            "returnParameters": {
              "id": 42818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42817,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42823,
                  "src": "940:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42816,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "940:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "939:9:28"
            },
            "scope": 42841,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42832,
            "nodeType": "FunctionDefinition",
            "src": "989:99:28",
            "nodes": [],
            "body": {
              "id": 42831,
              "nodeType": "Block",
              "src": "1056:32:28",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 42828,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1073:3:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 42829,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1077:4:28",
                    "memberName": "data",
                    "nodeType": "MemberAccess",
                    "src": "1073:8:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes calldata"
                    }
                  },
                  "functionReturnParameters": 42827,
                  "id": 42830,
                  "nodeType": "Return",
                  "src": "1066:15:28"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgData",
            "nameLocation": "998:8:28",
            "parameters": {
              "id": 42824,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1006:2:28"
            },
            "returnParameters": {
              "id": 42827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42826,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42832,
                  "src": "1040:14:28",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 42825,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1040:5:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1039:16:28"
            },
            "scope": 42841,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 42840,
            "nodeType": "FunctionDefinition",
            "src": "1094:97:28",
            "nodes": [],
            "body": {
              "id": 42839,
              "nodeType": "Block",
              "src": "1166:25:28",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "30",
                    "id": 42837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1183:1:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 42836,
                  "id": 42838,
                  "nodeType": "Return",
                  "src": "1176:8:28"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_contextSuffixLength",
            "nameLocation": "1103:20:28",
            "parameters": {
              "id": 42833,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1123:2:28"
            },
            "returnParameters": {
              "id": 42836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42835,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42840,
                  "src": "1157:7:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42834,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1157:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1156:9:28"
            },
            "scope": 42841,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 42801,
              "name": "Initializable",
              "nameLocations": [
                "728:13:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 40718,
              "src": "728:13:28"
            },
            "id": 42802,
            "nodeType": "InheritanceSpecifier",
            "src": "728:13:28"
          }
        ],
        "canonicalName": "ContextUpgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 42800,
          "nodeType": "StructuredDocumentation",
          "src": "191:496:28",
          "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          42841,
          40718
        ],
        "name": "ContextUpgradeable",
        "nameLocation": "706:18:28",
        "scope": 42842,
        "usedErrors": [
          40481,
          40484
        ],
        "usedEvents": [
          40489
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 28
} as const;