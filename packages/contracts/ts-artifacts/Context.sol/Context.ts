export const Context = {
  "abi": [],
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Provides information about the current execution context, including the sender of the transaction and its data. While these are generally available via msg.sender and msg.data, they should not be accessed in such a direct manner, since when dealing with meta-transactions the account sending and paying for execution may not be the actual sender (as far as an application is concerned). This contract is only required for intermediate, library-like contracts.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/Context.sol\":\"Context\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]}},\"version\":1}",
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
        "node_modules/@openzeppelin/contracts/utils/Context.sol": "Context"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/Context.sol",
    "id": 45540,
    "exportedSymbols": {
      "Context": [
        45539
      ]
    },
    "nodeType": "SourceUnit",
    "src": "101:862:48",
    "nodes": [
      {
        "id": 45511,
        "nodeType": "PragmaDirective",
        "src": "101:24:48",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 45539,
        "nodeType": "ContractDefinition",
        "src": "624:338:48",
        "nodes": [
          {
            "id": 45521,
            "nodeType": "FunctionDefinition",
            "src": "656:96:48",
            "nodes": [],
            "body": {
              "id": 45520,
              "nodeType": "Block",
              "src": "718:34:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 45517,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "735:3:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 45518,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "739:6:48",
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "735:10:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 45516,
                  "id": 45519,
                  "nodeType": "Return",
                  "src": "728:17:48"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgSender",
            "nameLocation": "665:10:48",
            "parameters": {
              "id": 45513,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "675:2:48"
            },
            "returnParameters": {
              "id": 45516,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45515,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 45521,
                  "src": "709:7:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 45514,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:48",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "708:9:48"
            },
            "scope": 45539,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 45530,
            "nodeType": "FunctionDefinition",
            "src": "758:99:48",
            "nodes": [],
            "body": {
              "id": 45529,
              "nodeType": "Block",
              "src": "825:32:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 45526,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "842:3:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 45527,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "846:4:48",
                    "memberName": "data",
                    "nodeType": "MemberAccess",
                    "src": "842:8:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes calldata"
                    }
                  },
                  "functionReturnParameters": 45525,
                  "id": 45528,
                  "nodeType": "Return",
                  "src": "835:15:48"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgData",
            "nameLocation": "767:8:48",
            "parameters": {
              "id": 45522,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "775:2:48"
            },
            "returnParameters": {
              "id": 45525,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45524,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 45530,
                  "src": "809:14:48",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 45523,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "809:5:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "808:16:48"
            },
            "scope": 45539,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 45538,
            "nodeType": "FunctionDefinition",
            "src": "863:97:48",
            "nodes": [],
            "body": {
              "id": 45537,
              "nodeType": "Block",
              "src": "935:25:48",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "30",
                    "id": 45535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "952:1:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 45534,
                  "id": 45536,
                  "nodeType": "Return",
                  "src": "945:8:48"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_contextSuffixLength",
            "nameLocation": "872:20:48",
            "parameters": {
              "id": 45531,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "892:2:48"
            },
            "returnParameters": {
              "id": 45534,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45533,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 45538,
                  "src": "926:7:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45532,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "925:9:48"
            },
            "scope": 45539,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "Context",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 45512,
          "nodeType": "StructuredDocumentation",
          "src": "127:496:48",
          "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          45539
        ],
        "name": "Context",
        "nameLocation": "642:7:48",
        "scope": 45540,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 48
} as const;