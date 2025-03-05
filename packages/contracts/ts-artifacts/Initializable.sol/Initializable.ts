export const Initializable = {
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"}],\"devdoc\":{\"custom:oz-upgrades-unsafe-allow\":\"constructor constructor() {     _disableInitializers(); } ``` ====\",\"details\":\"This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed behind a proxy. Since proxied contracts do not make use of a constructor, it's common to move constructor logic to an external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer function so it can only be called once. The {initializer} modifier provided by this contract will have this effect. The initialization functions use a version number. Once a version number is used, it is consumed and cannot be reused. This mechanism prevents re-execution of each \\\"step\\\" but allows the creation of new initialization steps in case an upgrade adds a module that needs to be initialized. For example: [.hljs-theme-light.nopadding] ```solidity contract MyToken is ERC20Upgradeable {     function initialize() initializer public {         __ERC20_init(\\\"MyToken\\\", \\\"MTK\\\");     } } contract MyTokenV2 is MyToken, ERC20PermitUpgradeable {     function initializeV2() reinitializer(2) public {         __ERC20Permit_init(\\\"MyToken\\\");     } } ``` TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}. CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure that all initializers are idempotent. This is not verified automatically as constructors are by Solidity. [CAUTION] ==== Avoid leaving a contract uninitialized. An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation contract, which may impact the proxy. To prevent the implementation contract from being used, you should invoke the {_disableInitializers} function in the constructor to automatically lock it when it is deployed: [.hljs-theme-light.nopadding] ```\",\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":\"Initializable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]}},\"version\":1}",
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
        "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol": "Initializable"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
    "id": 36742,
    "exportedSymbols": {
      "Initializable": [
        36741
      ]
    },
    "nodeType": "SourceUnit",
    "src": "113:8797:20",
    "nodes": [
      {
        "id": 36489,
        "nodeType": "PragmaDirective",
        "src": "113:24:20",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 36741,
        "nodeType": "ContractDefinition",
        "src": "2349:6560:20",
        "nodes": [
          {
            "id": 36498,
            "nodeType": "StructDefinition",
            "src": "2685:290:20",
            "nodes": [],
            "canonicalName": "Initializable.InitializableStorage",
            "documentation": {
              "id": 36491,
              "nodeType": "StructuredDocumentation",
              "src": "2387:293:20",
              "text": " @dev Storage of the initializable contract.\n It's implemented on a custom ERC-7201 namespace to reduce the risk of storage collisions\n when using with upgradeable contracts.\n @custom:storage-location erc7201:openzeppelin.storage.Initializable"
            },
            "members": [
              {
                "constant": false,
                "id": 36494,
                "mutability": "mutable",
                "name": "_initialized",
                "nameLocation": "2820:12:20",
                "nodeType": "VariableDeclaration",
                "scope": 36498,
                "src": "2813:19:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                },
                "typeName": {
                  "id": 36493,
                  "name": "uint64",
                  "nodeType": "ElementaryTypeName",
                  "src": "2813:6:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 36497,
                "mutability": "mutable",
                "name": "_initializing",
                "nameLocation": "2955:13:20",
                "nodeType": "VariableDeclaration",
                "scope": 36498,
                "src": "2950:18:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 36496,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "2950:4:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "InitializableStorage",
            "nameLocation": "2692:20:20",
            "scope": 36741,
            "visibility": "public"
          },
          {
            "id": 36501,
            "nodeType": "VariableDeclaration",
            "src": "3098:115:20",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "INITIALIZABLE_STORAGE",
            "nameLocation": "3123:21:20",
            "scope": 36741,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 36499,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "3098:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307866306335376531363834306466303430663135303838646332663831666533393163333932336265633733653233613936363265666339633232396336613030",
              "id": 36500,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3147:66:20",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_108904022758810753673719992590105913556127789646572562039383141376366747609600_by_1",
                "typeString": "int_const 1089...(70 digits omitted)...9600"
              },
              "value": "0xf0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00"
            },
            "visibility": "private"
          },
          {
            "id": 36504,
            "nodeType": "ErrorDefinition",
            "src": "3285:30:20",
            "nodes": [],
            "documentation": {
              "id": 36502,
              "nodeType": "StructuredDocumentation",
              "src": "3220:60:20",
              "text": " @dev The contract is already initialized."
            },
            "errorSelector": "f92ee8a9",
            "name": "InvalidInitialization",
            "nameLocation": "3291:21:20",
            "parameters": {
              "id": 36503,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3312:2:20"
            }
          },
          {
            "id": 36507,
            "nodeType": "ErrorDefinition",
            "src": "3383:24:20",
            "nodes": [],
            "documentation": {
              "id": 36505,
              "nodeType": "StructuredDocumentation",
              "src": "3321:57:20",
              "text": " @dev The contract is not initializing."
            },
            "errorSelector": "d7e6bcf8",
            "name": "NotInitializing",
            "nameLocation": "3389:15:20",
            "parameters": {
              "id": 36506,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3404:2:20"
            }
          },
          {
            "id": 36512,
            "nodeType": "EventDefinition",
            "src": "3508:34:20",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 36508,
              "nodeType": "StructuredDocumentation",
              "src": "3413:90:20",
              "text": " @dev Triggered when the contract has been initialized or reinitialized."
            },
            "eventSelector": "c7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2",
            "name": "Initialized",
            "nameLocation": "3514:11:20",
            "parameters": {
              "id": 36511,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36510,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "3533:7:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 36512,
                  "src": "3526:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36509,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "3526:6:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3525:16:20"
            }
          },
          {
            "id": 36595,
            "nodeType": "ModifierDefinition",
            "src": "4069:1104:20",
            "nodes": [],
            "body": {
              "id": 36594,
              "nodeType": "Block",
              "src": "4092:1081:20",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    36517
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36517,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "4187:1:20",
                      "nodeType": "VariableDeclaration",
                      "scope": 36594,
                      "src": "4158:30:20",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage"
                      },
                      "typeName": {
                        "id": 36516,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 36515,
                          "name": "InitializableStorage",
                          "nameLocations": [
                            "4158:20:20"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36498,
                          "src": "4158:20:20"
                        },
                        "referencedDeclaration": 36498,
                        "src": "4158:20:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36520,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 36518,
                      "name": "_getInitializableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36740,
                      "src": "4191:24:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_InitializableStorage_$36498_storage_ptr_$",
                        "typeString": "function () pure returns (struct Initializable.InitializableStorage storage pointer)"
                      }
                    },
                    "id": 36519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4191:26:20",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                      "typeString": "struct Initializable.InitializableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4158:59:20"
                },
                {
                  "assignments": [
                    36522
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36522,
                      "mutability": "mutable",
                      "name": "isTopLevelCall",
                      "nameLocation": "4284:14:20",
                      "nodeType": "VariableDeclaration",
                      "scope": 36594,
                      "src": "4279:19:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 36521,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4279:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36526,
                  "initialValue": {
                    "id": 36525,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "4301:16:20",
                    "subExpression": {
                      "expression": {
                        "id": 36523,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36517,
                        "src": "4302:1:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 36524,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4304:13:20",
                      "memberName": "_initializing",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36497,
                      "src": "4302:15:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4279:38:20"
                },
                {
                  "assignments": [
                    36528
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36528,
                      "mutability": "mutable",
                      "name": "initialized",
                      "nameLocation": "4334:11:20",
                      "nodeType": "VariableDeclaration",
                      "scope": 36594,
                      "src": "4327:18:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "typeName": {
                        "id": 36527,
                        "name": "uint64",
                        "nodeType": "ElementaryTypeName",
                        "src": "4327:6:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36531,
                  "initialValue": {
                    "expression": {
                      "id": 36529,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36517,
                      "src": "4348:1:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage storage pointer"
                      }
                    },
                    "id": 36530,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4350:12:20",
                    "memberName": "_initialized",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 36494,
                    "src": "4348:14:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4327:35:20"
                },
                {
                  "assignments": [
                    36533
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36533,
                      "mutability": "mutable",
                      "name": "initialSetup",
                      "nameLocation": "4711:12:20",
                      "nodeType": "VariableDeclaration",
                      "scope": 36594,
                      "src": "4706:17:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 36532,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4706:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36539,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 36538,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 36536,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 36534,
                        "name": "initialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36528,
                        "src": "4726:11:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 36535,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4741:1:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4726:16:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 36537,
                      "name": "isTopLevelCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36522,
                      "src": "4746:14:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4726:34:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4706:54:20"
                },
                {
                  "assignments": [
                    36541
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36541,
                      "mutability": "mutable",
                      "name": "construction",
                      "nameLocation": "4775:12:20",
                      "nodeType": "VariableDeclaration",
                      "scope": 36594,
                      "src": "4770:17:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 36540,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4770:4:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36554,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 36553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 36544,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 36542,
                        "name": "initialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36528,
                        "src": "4790:11:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 36543,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4805:1:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "4790:16:20",
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
                      "id": 36552,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 36547,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4818:4:20",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Initializable_$36741",
                                  "typeString": "contract Initializable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Initializable_$36741",
                                  "typeString": "contract Initializable"
                                }
                              ],
                              "id": 36546,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4810:7:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 36545,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4810:7:20",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 36548,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4810:13:20",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 36549,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4824:4:20",
                          "memberName": "code",
                          "nodeType": "MemberAccess",
                          "src": "4810:18:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 36550,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4829:6:20",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "4810:25:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 36551,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4839:1:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "4810:30:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4790:50:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4770:70:20"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 36559,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 36556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "4855:13:20",
                      "subExpression": {
                        "id": 36555,
                        "name": "initialSetup",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36533,
                        "src": "4856:12:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "id": 36558,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "4872:13:20",
                      "subExpression": {
                        "id": 36557,
                        "name": "construction",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36541,
                        "src": "4873:12:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "4855:30:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36564,
                  "nodeType": "IfStatement",
                  "src": "4851:91:20",
                  "trueBody": {
                    "id": 36563,
                    "nodeType": "Block",
                    "src": "4887:55:20",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 36560,
                            "name": "InvalidInitialization",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36504,
                            "src": "4908:21:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                              "typeString": "function () pure returns (error)"
                            }
                          },
                          "id": 36561,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4908:23:20",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 36562,
                        "nodeType": "RevertStatement",
                        "src": "4901:30:20"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 36569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 36565,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36517,
                        "src": "4951:1:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 36567,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4953:12:20",
                      "memberName": "_initialized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36494,
                      "src": "4951:14:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "31",
                      "id": 36568,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4968:1:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "4951:18:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 36570,
                  "nodeType": "ExpressionStatement",
                  "src": "4951:18:20"
                },
                {
                  "condition": {
                    "id": 36571,
                    "name": "isTopLevelCall",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 36522,
                    "src": "4983:14:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36579,
                  "nodeType": "IfStatement",
                  "src": "4979:67:20",
                  "trueBody": {
                    "id": 36578,
                    "nodeType": "Block",
                    "src": "4999:47:20",
                    "statements": [
                      {
                        "expression": {
                          "id": 36576,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 36572,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 36517,
                              "src": "5013:1:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                                "typeString": "struct Initializable.InitializableStorage storage pointer"
                              }
                            },
                            "id": 36574,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "5015:13:20",
                            "memberName": "_initializing",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 36497,
                            "src": "5013:15:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 36575,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5031:4:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "5013:22:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 36577,
                        "nodeType": "ExpressionStatement",
                        "src": "5013:22:20"
                      }
                    ]
                  }
                },
                {
                  "id": 36580,
                  "nodeType": "PlaceholderStatement",
                  "src": "5055:1:20"
                },
                {
                  "condition": {
                    "id": 36581,
                    "name": "isTopLevelCall",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 36522,
                    "src": "5070:14:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36593,
                  "nodeType": "IfStatement",
                  "src": "5066:101:20",
                  "trueBody": {
                    "id": 36592,
                    "nodeType": "Block",
                    "src": "5086:81:20",
                    "statements": [
                      {
                        "expression": {
                          "id": 36586,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 36582,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 36517,
                              "src": "5100:1:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                                "typeString": "struct Initializable.InitializableStorage storage pointer"
                              }
                            },
                            "id": 36584,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "5102:13:20",
                            "memberName": "_initializing",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 36497,
                            "src": "5100:15:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "66616c7365",
                            "id": 36585,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5118:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "src": "5100:23:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 36587,
                        "nodeType": "ExpressionStatement",
                        "src": "5100:23:20"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "hexValue": "31",
                              "id": 36589,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5154:1:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              }
                            ],
                            "id": 36588,
                            "name": "Initialized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36512,
                            "src": "5142:11:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint64_$returns$__$",
                              "typeString": "function (uint64)"
                            }
                          },
                          "id": 36590,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5142:14:20",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 36591,
                        "nodeType": "EmitStatement",
                        "src": "5137:19:20"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 36513,
              "nodeType": "StructuredDocumentation",
              "src": "3548:516:20",
              "text": " @dev A modifier that defines a protected initializer function that can be invoked at most once. In its scope,\n `onlyInitializing` functions can be used to initialize parent contracts.\n Similar to `reinitializer(1)`, except that in the context of a constructor an `initializer` may be invoked any\n number of times. This behavior in the constructor can be useful during testing and is not expected to be used in\n production.\n Emits an {Initialized} event."
            },
            "name": "initializer",
            "nameLocation": "4078:11:20",
            "parameters": {
              "id": 36514,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4089:2:20"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 36642,
            "nodeType": "ModifierDefinition",
            "src": "6252:431:20",
            "nodes": [],
            "body": {
              "id": 36641,
              "nodeType": "Block",
              "src": "6291:392:20",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    36602
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36602,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "6386:1:20",
                      "nodeType": "VariableDeclaration",
                      "scope": 36641,
                      "src": "6357:30:20",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage"
                      },
                      "typeName": {
                        "id": 36601,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 36600,
                          "name": "InitializableStorage",
                          "nameLocations": [
                            "6357:20:20"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36498,
                          "src": "6357:20:20"
                        },
                        "referencedDeclaration": 36498,
                        "src": "6357:20:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36605,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 36603,
                      "name": "_getInitializableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36740,
                      "src": "6390:24:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_InitializableStorage_$36498_storage_ptr_$",
                        "typeString": "function () pure returns (struct Initializable.InitializableStorage storage pointer)"
                      }
                    },
                    "id": 36604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6390:26:20",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                      "typeString": "struct Initializable.InitializableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6357:59:20"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 36612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 36606,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36602,
                        "src": "6431:1:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 36607,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6433:13:20",
                      "memberName": "_initializing",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36497,
                      "src": "6431:15:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 36611,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 36608,
                          "name": "$",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36602,
                          "src": "6450:1:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                            "typeString": "struct Initializable.InitializableStorage storage pointer"
                          }
                        },
                        "id": 36609,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6452:12:20",
                        "memberName": "_initialized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 36494,
                        "src": "6450:14:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "id": 36610,
                        "name": "version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36598,
                        "src": "6468:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "src": "6450:25:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6431:44:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36617,
                  "nodeType": "IfStatement",
                  "src": "6427:105:20",
                  "trueBody": {
                    "id": 36616,
                    "nodeType": "Block",
                    "src": "6477:55:20",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 36613,
                            "name": "InvalidInitialization",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36504,
                            "src": "6498:21:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                              "typeString": "function () pure returns (error)"
                            }
                          },
                          "id": 36614,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6498:23:20",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 36615,
                        "nodeType": "RevertStatement",
                        "src": "6491:30:20"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 36622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 36618,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36602,
                        "src": "6541:1:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 36620,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6543:12:20",
                      "memberName": "_initialized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36494,
                      "src": "6541:14:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 36621,
                      "name": "version",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36598,
                      "src": "6558:7:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "6541:24:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 36623,
                  "nodeType": "ExpressionStatement",
                  "src": "6541:24:20"
                },
                {
                  "expression": {
                    "id": 36628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 36624,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36602,
                        "src": "6575:1:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 36626,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6577:13:20",
                      "memberName": "_initializing",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36497,
                      "src": "6575:15:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 36627,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6593:4:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "6575:22:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36629,
                  "nodeType": "ExpressionStatement",
                  "src": "6575:22:20"
                },
                {
                  "id": 36630,
                  "nodeType": "PlaceholderStatement",
                  "src": "6607:1:20"
                },
                {
                  "expression": {
                    "id": 36635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 36631,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36602,
                        "src": "6618:1:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 36633,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6620:13:20",
                      "memberName": "_initializing",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36497,
                      "src": "6618:15:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 36634,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6636:5:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "6618:23:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36636,
                  "nodeType": "ExpressionStatement",
                  "src": "6618:23:20"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 36638,
                        "name": "version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36598,
                        "src": "6668:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      ],
                      "id": 36637,
                      "name": "Initialized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36512,
                      "src": "6656:11:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint64_$returns$__$",
                        "typeString": "function (uint64)"
                      }
                    },
                    "id": 36639,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6656:20:20",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36640,
                  "nodeType": "EmitStatement",
                  "src": "6651:25:20"
                }
              ]
            },
            "documentation": {
              "id": 36596,
              "nodeType": "StructuredDocumentation",
              "src": "5179:1068:20",
              "text": " @dev A modifier that defines a protected reinitializer function that can be invoked at most once, and only if the\n contract hasn't been initialized to a greater version before. In its scope, `onlyInitializing` functions can be\n used to initialize parent contracts.\n A reinitializer may be used after the original initialization step. This is essential to configure modules that\n are added through upgrades and that require initialization.\n When `version` is 1, this modifier is similar to `initializer`, except that functions marked with `reinitializer`\n cannot be nested. If one is invoked in the context of another, execution will revert.\n Note that versions can jump in increments greater than 1; this implies that if multiple reinitializers coexist in\n a contract, executing them in the right order is up to the developer or operator.\n WARNING: Setting the version to 2**64 - 1 will prevent any future reinitialization.\n Emits an {Initialized} event."
            },
            "name": "reinitializer",
            "nameLocation": "6261:13:20",
            "parameters": {
              "id": 36599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36598,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "6282:7:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 36642,
                  "src": "6275:14:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36597,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "6275:6:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6274:16:20"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 36650,
            "nodeType": "ModifierDefinition",
            "src": "6893:76:20",
            "nodes": [],
            "body": {
              "id": 36649,
              "nodeType": "Block",
              "src": "6921:48:20",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 36645,
                      "name": "_checkInitializing",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36663,
                      "src": "6931:18:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 36646,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6931:20:20",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36647,
                  "nodeType": "ExpressionStatement",
                  "src": "6931:20:20"
                },
                {
                  "id": 36648,
                  "nodeType": "PlaceholderStatement",
                  "src": "6961:1:20"
                }
              ]
            },
            "documentation": {
              "id": 36643,
              "nodeType": "StructuredDocumentation",
              "src": "6689:199:20",
              "text": " @dev Modifier to protect an initialization function so that it can only be invoked by functions with the\n {initializer} and {reinitializer} modifiers, directly or indirectly."
            },
            "name": "onlyInitializing",
            "nameLocation": "6902:16:20",
            "parameters": {
              "id": 36644,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6918:2:20"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 36663,
            "nodeType": "FunctionDefinition",
            "src": "7084:141:20",
            "nodes": [],
            "body": {
              "id": 36662,
              "nodeType": "Block",
              "src": "7136:89:20",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 36656,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "7150:18:20",
                    "subExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 36654,
                        "name": "_isInitializing",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36731,
                        "src": "7151:15:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                          "typeString": "function () view returns (bool)"
                        }
                      },
                      "id": 36655,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7151:17:20",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36661,
                  "nodeType": "IfStatement",
                  "src": "7146:73:20",
                  "trueBody": {
                    "id": 36660,
                    "nodeType": "Block",
                    "src": "7170:49:20",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 36657,
                            "name": "NotInitializing",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36507,
                            "src": "7191:15:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                              "typeString": "function () pure returns (error)"
                            }
                          },
                          "id": 36658,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7191:17:20",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 36659,
                        "nodeType": "RevertStatement",
                        "src": "7184:24:20"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 36651,
              "nodeType": "StructuredDocumentation",
              "src": "6975:104:20",
              "text": " @dev Reverts if the contract is not in an initializing state. See {onlyInitializing}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkInitializing",
            "nameLocation": "7093:18:20",
            "parameters": {
              "id": 36652,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7111:2:20"
            },
            "returnParameters": {
              "id": 36653,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7136:0:20"
            },
            "scope": 36741,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 36709,
            "nodeType": "FunctionDefinition",
            "src": "7711:422:20",
            "nodes": [],
            "body": {
              "id": 36708,
              "nodeType": "Block",
              "src": "7760:373:20",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    36669
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36669,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "7855:1:20",
                      "nodeType": "VariableDeclaration",
                      "scope": 36708,
                      "src": "7826:30:20",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage"
                      },
                      "typeName": {
                        "id": 36668,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 36667,
                          "name": "InitializableStorage",
                          "nameLocations": [
                            "7826:20:20"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36498,
                          "src": "7826:20:20"
                        },
                        "referencedDeclaration": 36498,
                        "src": "7826:20:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36672,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 36670,
                      "name": "_getInitializableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36740,
                      "src": "7859:24:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_InitializableStorage_$36498_storage_ptr_$",
                        "typeString": "function () pure returns (struct Initializable.InitializableStorage storage pointer)"
                      }
                    },
                    "id": 36671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7859:26:20",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                      "typeString": "struct Initializable.InitializableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7826:59:20"
                },
                {
                  "condition": {
                    "expression": {
                      "id": 36673,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36669,
                      "src": "7900:1:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage storage pointer"
                      }
                    },
                    "id": 36674,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "7902:13:20",
                    "memberName": "_initializing",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 36497,
                    "src": "7900:15:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36679,
                  "nodeType": "IfStatement",
                  "src": "7896:76:20",
                  "trueBody": {
                    "id": 36678,
                    "nodeType": "Block",
                    "src": "7917:55:20",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 36675,
                            "name": "InvalidInitialization",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36504,
                            "src": "7938:21:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                              "typeString": "function () pure returns (error)"
                            }
                          },
                          "id": 36676,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7938:23:20",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 36677,
                        "nodeType": "RevertStatement",
                        "src": "7931:30:20"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    },
                    "id": 36687,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 36680,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36669,
                        "src": "7985:1:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                          "typeString": "struct Initializable.InitializableStorage storage pointer"
                        }
                      },
                      "id": 36681,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7987:12:20",
                      "memberName": "_initialized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36494,
                      "src": "7985:14:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 36684,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8008:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            },
                            "typeName": {
                              "id": 36683,
                              "name": "uint64",
                              "nodeType": "ElementaryTypeName",
                              "src": "8008:6:20",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            }
                          ],
                          "id": 36682,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "8003:4:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 36685,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8003:12:20",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint64",
                          "typeString": "type(uint64)"
                        }
                      },
                      "id": 36686,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "8016:3:20",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "8003:16:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "7985:34:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36707,
                  "nodeType": "IfStatement",
                  "src": "7981:146:20",
                  "trueBody": {
                    "id": 36706,
                    "nodeType": "Block",
                    "src": "8021:106:20",
                    "statements": [
                      {
                        "expression": {
                          "id": 36696,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 36688,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 36669,
                              "src": "8035:1:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                                "typeString": "struct Initializable.InitializableStorage storage pointer"
                              }
                            },
                            "id": 36690,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "8037:12:20",
                            "memberName": "_initialized",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 36494,
                            "src": "8035:14:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 36693,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "8057:6:20",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint64_$",
                                    "typeString": "type(uint64)"
                                  },
                                  "typeName": {
                                    "id": 36692,
                                    "name": "uint64",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "8057:6:20",
                                    "typeDescriptions": {}
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_type$_t_uint64_$",
                                    "typeString": "type(uint64)"
                                  }
                                ],
                                "id": 36691,
                                "name": "type",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -27,
                                "src": "8052:4:20",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                  "typeString": "function () pure"
                                }
                              },
                              "id": 36694,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8052:12:20",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_meta_type_t_uint64",
                                "typeString": "type(uint64)"
                              }
                            },
                            "id": 36695,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "8065:3:20",
                            "memberName": "max",
                            "nodeType": "MemberAccess",
                            "src": "8052:16:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "src": "8035:33:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "id": 36697,
                        "nodeType": "ExpressionStatement",
                        "src": "8035:33:20"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 36701,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "8104:6:20",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint64_$",
                                      "typeString": "type(uint64)"
                                    },
                                    "typeName": {
                                      "id": 36700,
                                      "name": "uint64",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "8104:6:20",
                                      "typeDescriptions": {}
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_type$_t_uint64_$",
                                      "typeString": "type(uint64)"
                                    }
                                  ],
                                  "id": 36699,
                                  "name": "type",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -27,
                                  "src": "8099:4:20",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                    "typeString": "function () pure"
                                  }
                                },
                                "id": 36702,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8099:12:20",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_meta_type_t_uint64",
                                  "typeString": "type(uint64)"
                                }
                              },
                              "id": 36703,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "8112:3:20",
                              "memberName": "max",
                              "nodeType": "MemberAccess",
                              "src": "8099:16:20",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            ],
                            "id": 36698,
                            "name": "Initialized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36512,
                            "src": "8087:11:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint64_$returns$__$",
                              "typeString": "function (uint64)"
                            }
                          },
                          "id": 36704,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8087:29:20",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 36705,
                        "nodeType": "EmitStatement",
                        "src": "8082:34:20"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 36664,
              "nodeType": "StructuredDocumentation",
              "src": "7231:475:20",
              "text": " @dev Locks the contract, preventing any future reinitialization. This cannot be part of an initializer call.\n Calling this in the constructor of a contract will prevent that contract from being initialized or reinitialized\n to any version. It is recommended to use this to lock implementation contracts that are designed to be called\n through proxies.\n Emits an {Initialized} event the first time it is successfully executed."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_disableInitializers",
            "nameLocation": "7720:20:20",
            "parameters": {
              "id": 36665,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7740:2:20"
            },
            "returnParameters": {
              "id": 36666,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7760:0:20"
            },
            "scope": 36741,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 36720,
            "nodeType": "FunctionDefinition",
            "src": "8243:128:20",
            "nodes": [],
            "body": {
              "id": 36719,
              "nodeType": "Block",
              "src": "8308:63:20",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 36715,
                        "name": "_getInitializableStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36740,
                        "src": "8325:24:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_InitializableStorage_$36498_storage_ptr_$",
                          "typeString": "function () pure returns (struct Initializable.InitializableStorage storage pointer)"
                        }
                      },
                      "id": 36716,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8325:26:20",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage storage pointer"
                      }
                    },
                    "id": 36717,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "8352:12:20",
                    "memberName": "_initialized",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 36494,
                    "src": "8325:39:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "functionReturnParameters": 36714,
                  "id": 36718,
                  "nodeType": "Return",
                  "src": "8318:46:20"
                }
              ]
            },
            "documentation": {
              "id": 36710,
              "nodeType": "StructuredDocumentation",
              "src": "8139:99:20",
              "text": " @dev Returns the highest version that has been initialized. See {reinitializer}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getInitializedVersion",
            "nameLocation": "8252:22:20",
            "parameters": {
              "id": 36711,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8274:2:20"
            },
            "returnParameters": {
              "id": 36714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36713,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 36720,
                  "src": "8300:6:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36712,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "8300:6:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8299:8:20"
            },
            "scope": 36741,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 36731,
            "nodeType": "FunctionDefinition",
            "src": "8487:120:20",
            "nodes": [],
            "body": {
              "id": 36730,
              "nodeType": "Block",
              "src": "8543:64:20",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 36726,
                        "name": "_getInitializableStorage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36740,
                        "src": "8560:24:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_InitializableStorage_$36498_storage_ptr_$",
                          "typeString": "function () pure returns (struct Initializable.InitializableStorage storage pointer)"
                        }
                      },
                      "id": 36727,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8560:26:20",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                        "typeString": "struct Initializable.InitializableStorage storage pointer"
                      }
                    },
                    "id": 36728,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "8587:13:20",
                    "memberName": "_initializing",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 36497,
                    "src": "8560:40:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 36725,
                  "id": 36729,
                  "nodeType": "Return",
                  "src": "8553:47:20"
                }
              ]
            },
            "documentation": {
              "id": 36721,
              "nodeType": "StructuredDocumentation",
              "src": "8377:105:20",
              "text": " @dev Returns `true` if the contract is currently initializing. See {onlyInitializing}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isInitializing",
            "nameLocation": "8496:15:20",
            "parameters": {
              "id": 36722,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8511:2:20"
            },
            "returnParameters": {
              "id": 36725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36724,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 36731,
                  "src": "8537:4:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 36723,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8537:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8536:6:20"
            },
            "scope": 36741,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 36740,
            "nodeType": "FunctionDefinition",
            "src": "8737:170:20",
            "nodes": [],
            "body": {
              "id": 36739,
              "nodeType": "Block",
              "src": "8827:80:20",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "8846:55:20",
                    "nodeType": "YulBlock",
                    "src": "8846:55:20",
                    "statements": [
                      {
                        "nativeSrc": "8860:31:20",
                        "nodeType": "YulAssignment",
                        "src": "8860:31:20",
                        "value": {
                          "name": "INITIALIZABLE_STORAGE",
                          "nativeSrc": "8870:21:20",
                          "nodeType": "YulIdentifier",
                          "src": "8870:21:20"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "8860:6:20",
                            "nodeType": "YulIdentifier",
                            "src": "8860:6:20"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 36736,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "8860:6:20",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 36501,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8870:21:20",
                      "valueSize": 1
                    }
                  ],
                  "id": 36738,
                  "nodeType": "InlineAssembly",
                  "src": "8837:64:20"
                }
              ]
            },
            "documentation": {
              "id": 36732,
              "nodeType": "StructuredDocumentation",
              "src": "8613:67:20",
              "text": " @dev Returns a pointer to the storage namespace."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getInitializableStorage",
            "nameLocation": "8746:24:20",
            "parameters": {
              "id": 36733,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8770:2:20"
            },
            "returnParameters": {
              "id": 36737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36736,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "8824:1:20",
                  "nodeType": "VariableDeclaration",
                  "scope": 36740,
                  "src": "8795:30:20",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                    "typeString": "struct Initializable.InitializableStorage"
                  },
                  "typeName": {
                    "id": 36735,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 36734,
                      "name": "InitializableStorage",
                      "nameLocations": [
                        "8795:20:20"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 36498,
                      "src": "8795:20:20"
                    },
                    "referencedDeclaration": 36498,
                    "src": "8795:20:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_InitializableStorage_$36498_storage_ptr",
                      "typeString": "struct Initializable.InitializableStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8794:32:20"
            },
            "scope": 36741,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "Initializable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 36490,
          "nodeType": "StructuredDocumentation",
          "src": "139:2209:20",
          "text": " @dev This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed\n behind a proxy. Since proxied contracts do not make use of a constructor, it's common to move constructor logic to an\n external initializer function, usually called `initialize`. It then becomes necessary to protect this initializer\n function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.\n The initialization functions use a version number. Once a version number is used, it is consumed and cannot be\n reused. This mechanism prevents re-execution of each \"step\" but allows the creation of new initialization steps in\n case an upgrade adds a module that needs to be initialized.\n For example:\n [.hljs-theme-light.nopadding]\n ```solidity\n contract MyToken is ERC20Upgradeable {\n     function initialize() initializer public {\n         __ERC20_init(\"MyToken\", \"MTK\");\n     }\n }\n contract MyTokenV2 is MyToken, ERC20PermitUpgradeable {\n     function initializeV2() reinitializer(2) public {\n         __ERC20Permit_init(\"MyToken\");\n     }\n }\n ```\n TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as\n possible by providing the encoded function call as the `_data` argument to {ERC1967Proxy-constructor}.\n CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure\n that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.\n [CAUTION]\n ====\n Avoid leaving a contract uninitialized.\n An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation\n contract, which may impact the proxy. To prevent the implementation contract from being used, you should invoke\n the {_disableInitializers} function in the constructor to automatically lock it when it is deployed:\n [.hljs-theme-light.nopadding]\n ```\n /// @custom:oz-upgrades-unsafe-allow constructor\n constructor() {\n     _disableInitializers();\n }\n ```\n ===="
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          36741
        ],
        "name": "Initializable",
        "nameLocation": "2367:13:20",
        "scope": 36742,
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
  "id": 20
} as const;