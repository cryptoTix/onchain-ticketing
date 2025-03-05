export const ERC165Upgradeable = {
  "abi": [
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
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
  "methodIdentifiers": {
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of the {IERC165} interface. Contracts that want to implement ERC-165 should inherit from this contract and override {supportsInterface} to check for the additional interface id that will be supported. For example: ```solidity function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId); } ```\",\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol\":\"ERC165Upgradeable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol\":{\"keccak256\":\"0xc8ed8d2056934b7675b695dec032f2920c2f5c6cf33a17ca85650940675323ab\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3c8ccc75d1cd792d192aa09e54dd49ea35fe85baa9fcd17486f29227d9f29b89\",\"dweb:/ipfs/QmbboSbFUEiM9tdEgBwuTRb7bykFoJXZ7dsSr1PSREJXMr\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]}},\"version\":1}",
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
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
          }
        },
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
        "node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol": "ERC165Upgradeable"
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
      "node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol": {
        "keccak256": "0xc8ed8d2056934b7675b695dec032f2920c2f5c6cf33a17ca85650940675323ab",
        "urls": [
          "bzz-raw://3c8ccc75d1cd792d192aa09e54dd49ea35fe85baa9fcd17486f29227d9f29b89",
          "dweb:/ipfs/QmbboSbFUEiM9tdEgBwuTRb7bykFoJXZ7dsSr1PSREJXMr"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8",
        "urls": [
          "bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621",
          "dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol",
    "id": 39249,
    "exportedSymbols": {
      "ERC165Upgradeable": [
        39248
      ],
      "IERC165": [
        42159
      ],
      "Initializable": [
        36741
      ]
    },
    "nodeType": "SourceUnit",
    "src": "114:1070:25",
    "nodes": [
      {
        "id": 39210,
        "nodeType": "PragmaDirective",
        "src": "114:24:25",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 39212,
        "nodeType": "ImportDirective",
        "src": "140:80:25",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 39249,
        "sourceUnit": 42160,
        "symbolAliases": [
          {
            "foreign": {
              "id": 39211,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 42159,
              "src": "148:7:25",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 39214,
        "nodeType": "ImportDirective",
        "src": "221:66:25",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 39249,
        "sourceUnit": 36742,
        "symbolAliases": [
          {
            "foreign": {
              "id": 39213,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 36741,
              "src": "229:13:25",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 39248,
        "nodeType": "ContractDefinition",
        "src": "769:414:25",
        "nodes": [
          {
            "id": 39225,
            "nodeType": "FunctionDefinition",
            "src": "837:58:25",
            "nodes": [],
            "body": {
              "id": 39224,
              "nodeType": "Block",
              "src": "888:7:25",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 39222,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 39221,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "871:16:25"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "871:16:25"
                },
                "nodeType": "ModifierInvocation",
                "src": "871:16:25"
              }
            ],
            "name": "__ERC165_init",
            "nameLocation": "846:13:25",
            "parameters": {
              "id": 39220,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "859:2:25"
            },
            "returnParameters": {
              "id": 39223,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "888:0:25"
            },
            "scope": 39248,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 39231,
            "nodeType": "FunctionDefinition",
            "src": "901:68:25",
            "nodes": [],
            "body": {
              "id": 39230,
              "nodeType": "Block",
              "src": "962:7:25",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 39228,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 39227,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "945:16:25"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "945:16:25"
                },
                "nodeType": "ModifierInvocation",
                "src": "945:16:25"
              }
            ],
            "name": "__ERC165_init_unchained",
            "nameLocation": "910:23:25",
            "parameters": {
              "id": 39226,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "933:2:25"
            },
            "returnParameters": {
              "id": 39229,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "962:0:25"
            },
            "scope": 39248,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 39247,
            "nodeType": "FunctionDefinition",
            "src": "1035:146:25",
            "nodes": [],
            "body": {
              "id": 39246,
              "nodeType": "Block",
              "src": "1117:64:25",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 39244,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 39239,
                      "name": "interfaceId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39234,
                      "src": "1134:11:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 39241,
                            "name": "IERC165",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42159,
                            "src": "1154:7:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC165_$42159_$",
                              "typeString": "type(contract IERC165)"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_contract$_IERC165_$42159_$",
                              "typeString": "type(contract IERC165)"
                            }
                          ],
                          "id": 39240,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "1149:4:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 39242,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1149:13:25",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_contract$_IERC165_$42159",
                          "typeString": "type(contract IERC165)"
                        }
                      },
                      "id": 39243,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "1163:11:25",
                      "memberName": "interfaceId",
                      "nodeType": "MemberAccess",
                      "src": "1149:25:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "src": "1134:40:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 39238,
                  "id": 39245,
                  "nodeType": "Return",
                  "src": "1127:47:25"
                }
              ]
            },
            "baseFunctions": [
              42158
            ],
            "documentation": {
              "id": 39232,
              "nodeType": "StructuredDocumentation",
              "src": "974:56:25",
              "text": " @dev See {IERC165-supportsInterface}."
            },
            "functionSelector": "01ffc9a7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "1044:17:25",
            "parameters": {
              "id": 39235,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39234,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "1069:11:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 39247,
                  "src": "1062:18:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 39233,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1062:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1061:20:25"
            },
            "returnParameters": {
              "id": 39238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39237,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 39247,
                  "src": "1111:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 39236,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1111:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1110:6:25"
            },
            "scope": 39248,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 39216,
              "name": "Initializable",
              "nameLocations": [
                "808:13:25"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 36741,
              "src": "808:13:25"
            },
            "id": 39217,
            "nodeType": "InheritanceSpecifier",
            "src": "808:13:25"
          },
          {
            "baseName": {
              "id": 39218,
              "name": "IERC165",
              "nameLocations": [
                "823:7:25"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 42159,
              "src": "823:7:25"
            },
            "id": 39219,
            "nodeType": "InheritanceSpecifier",
            "src": "823:7:25"
          }
        ],
        "canonicalName": "ERC165Upgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 39215,
          "nodeType": "StructuredDocumentation",
          "src": "289:479:25",
          "text": " @dev Implementation of the {IERC165} interface.\n Contracts that want to implement ERC-165 should inherit from this contract and override {supportsInterface} to check\n for the additional interface id that will be supported. For example:\n ```solidity\n function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n }\n ```"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          39248,
          42159,
          36741
        ],
        "name": "ERC165Upgradeable",
        "nameLocation": "787:17:25",
        "scope": 39249,
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
  "id": 25
} as const;