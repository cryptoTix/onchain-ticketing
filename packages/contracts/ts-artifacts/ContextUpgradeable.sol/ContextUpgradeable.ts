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
    "id": 38865,
    "exportedSymbols": {
      "ContextUpgradeable": [
        38864
      ],
      "Initializable": [
        36741
      ]
    },
    "nodeType": "SourceUnit",
    "src": "101:1093:23",
    "nodes": [
      {
        "id": 38820,
        "nodeType": "PragmaDirective",
        "src": "101:24:23",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 38822,
        "nodeType": "ImportDirective",
        "src": "126:63:23",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 38865,
        "sourceUnit": 36742,
        "symbolAliases": [
          {
            "foreign": {
              "id": 38821,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 36741,
              "src": "134:13:23",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 38864,
        "nodeType": "ContractDefinition",
        "src": "688:505:23",
        "nodes": [
          {
            "id": 38831,
            "nodeType": "FunctionDefinition",
            "src": "748:59:23",
            "nodes": [],
            "body": {
              "id": 38830,
              "nodeType": "Block",
              "src": "800:7:23",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 38828,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 38827,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "783:16:23"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "783:16:23"
                },
                "nodeType": "ModifierInvocation",
                "src": "783:16:23"
              }
            ],
            "name": "__Context_init",
            "nameLocation": "757:14:23",
            "parameters": {
              "id": 38826,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "771:2:23"
            },
            "returnParameters": {
              "id": 38829,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "800:0:23"
            },
            "scope": 38864,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38837,
            "nodeType": "FunctionDefinition",
            "src": "813:69:23",
            "nodes": [],
            "body": {
              "id": 38836,
              "nodeType": "Block",
              "src": "875:7:23",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 38834,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 38833,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "858:16:23"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "858:16:23"
                },
                "nodeType": "ModifierInvocation",
                "src": "858:16:23"
              }
            ],
            "name": "__Context_init_unchained",
            "nameLocation": "822:24:23",
            "parameters": {
              "id": 38832,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "846:2:23"
            },
            "returnParameters": {
              "id": 38835,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "875:0:23"
            },
            "scope": 38864,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38846,
            "nodeType": "FunctionDefinition",
            "src": "887:96:23",
            "nodes": [],
            "body": {
              "id": 38845,
              "nodeType": "Block",
              "src": "949:34:23",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 38842,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "966:3:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 38843,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "970:6:23",
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "966:10:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 38841,
                  "id": 38844,
                  "nodeType": "Return",
                  "src": "959:17:23"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgSender",
            "nameLocation": "896:10:23",
            "parameters": {
              "id": 38838,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "906:2:23"
            },
            "returnParameters": {
              "id": 38841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38840,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38846,
                  "src": "940:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38839,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "940:7:23",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "939:9:23"
            },
            "scope": 38864,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38855,
            "nodeType": "FunctionDefinition",
            "src": "989:99:23",
            "nodes": [],
            "body": {
              "id": 38854,
              "nodeType": "Block",
              "src": "1056:32:23",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 38851,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1073:3:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 38852,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "1077:4:23",
                    "memberName": "data",
                    "nodeType": "MemberAccess",
                    "src": "1073:8:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes calldata"
                    }
                  },
                  "functionReturnParameters": 38850,
                  "id": 38853,
                  "nodeType": "Return",
                  "src": "1066:15:23"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgData",
            "nameLocation": "998:8:23",
            "parameters": {
              "id": 38847,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1006:2:23"
            },
            "returnParameters": {
              "id": 38850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38849,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38855,
                  "src": "1040:14:23",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 38848,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1040:5:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1039:16:23"
            },
            "scope": 38864,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 38863,
            "nodeType": "FunctionDefinition",
            "src": "1094:97:23",
            "nodes": [],
            "body": {
              "id": 38862,
              "nodeType": "Block",
              "src": "1166:25:23",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "30",
                    "id": 38860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1183:1:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 38859,
                  "id": 38861,
                  "nodeType": "Return",
                  "src": "1176:8:23"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_contextSuffixLength",
            "nameLocation": "1103:20:23",
            "parameters": {
              "id": 38856,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1123:2:23"
            },
            "returnParameters": {
              "id": 38859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38858,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38863,
                  "src": "1157:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1157:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1156:9:23"
            },
            "scope": 38864,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 38824,
              "name": "Initializable",
              "nameLocations": [
                "728:13:23"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 36741,
              "src": "728:13:23"
            },
            "id": 38825,
            "nodeType": "InheritanceSpecifier",
            "src": "728:13:23"
          }
        ],
        "canonicalName": "ContextUpgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 38823,
          "nodeType": "StructuredDocumentation",
          "src": "191:496:23",
          "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          38864,
          36741
        ],
        "name": "ContextUpgradeable",
        "nameLocation": "706:18:23",
        "scope": 38865,
        "usedErrors": [
          36504,
          36507
        ],
        "usedEvents": [
          36512
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 23
} as const;