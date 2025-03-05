export const OwnableUpgradeable = {
  "abi": [
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
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
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
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
    },
    {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ]
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
    "owner()": "8da5cb5b",
    "renounceOwnership()": "715018a6",
    "transferOwnership(address)": "f2fde38b"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions. The initial owner is set to the address provided by the deployer. This can later be changed with {transferOwnership}. This module is used through inheritance. It will make available the modifier `onlyOwner`, which can be applied to your functions to restrict their use to the owner.\",\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}]},\"events\":{\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol\":\"OwnableUpgradeable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6\",\"dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2\"]},\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]}},\"version\":1}",
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
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableInvalidOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableUnauthorizedAccount"
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
              "internalType": "address",
              "name": "previousOwner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
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
        "node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol": "OwnableUpgradeable"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol": {
        "keccak256": "0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a",
        "urls": [
          "bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6",
          "dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2"
        ],
        "license": "MIT"
      },
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
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol",
    "id": 36488,
    "exportedSymbols": {
      "ContextUpgradeable": [
        38864
      ],
      "Initializable": [
        36741
      ],
      "OwnableUpgradeable": [
        36487
      ]
    },
    "nodeType": "SourceUnit",
    "src": "102:3923:19",
    "nodes": [
      {
        "id": 36294,
        "nodeType": "PragmaDirective",
        "src": "102:24:19",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 36296,
        "nodeType": "ImportDirective",
        "src": "128:67:19",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol",
        "file": "../utils/ContextUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 36488,
        "sourceUnit": 38865,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36295,
              "name": "ContextUpgradeable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 38864,
              "src": "136:18:19",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 36298,
        "nodeType": "ImportDirective",
        "src": "196:63:19",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 36488,
        "sourceUnit": 36742,
        "symbolAliases": [
          {
            "foreign": {
              "id": 36297,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 36741,
              "src": "204:13:19",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 36487,
        "nodeType": "ContractDefinition",
        "src": "749:3275:19",
        "nodes": [
          {
            "id": 36307,
            "nodeType": "StructDefinition",
            "src": "899:53:19",
            "nodes": [],
            "canonicalName": "OwnableUpgradeable.OwnableStorage",
            "documentation": {
              "id": 36304,
              "nodeType": "StructuredDocumentation",
              "src": "829:65:19",
              "text": "@custom:storage-location erc7201:openzeppelin.storage.Ownable"
            },
            "members": [
              {
                "constant": false,
                "id": 36306,
                "mutability": "mutable",
                "name": "_owner",
                "nameLocation": "939:6:19",
                "nodeType": "VariableDeclaration",
                "scope": 36307,
                "src": "931:14:19",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 36305,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "931:7:19",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "OwnableStorage",
            "nameLocation": "906:14:19",
            "scope": 36487,
            "visibility": "public"
          },
          {
            "id": 36310,
            "nodeType": "VariableDeclaration",
            "src": "1069:116:19",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "OwnableStorageLocation",
            "nameLocation": "1094:22:19",
            "scope": 36487,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 36308,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1069:7:19",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307839303136643039643732643430666461653266643863656163366236323334633737303632313466643339633163643165363039613035323863313939333030",
              "id": 36309,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1119:66:19",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_65173360639460082030725920392146925864023520599682862633725751242436743107328_by_1",
                "typeString": "int_const 6517...(69 digits omitted)...7328"
              },
              "value": "0x9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300"
            },
            "visibility": "private"
          },
          {
            "id": 36318,
            "nodeType": "FunctionDefinition",
            "src": "1192:159:19",
            "nodes": [],
            "body": {
              "id": 36317,
              "nodeType": "Block",
              "src": "1270:81:19",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1289:56:19",
                    "nodeType": "YulBlock",
                    "src": "1289:56:19",
                    "statements": [
                      {
                        "nativeSrc": "1303:32:19",
                        "nodeType": "YulAssignment",
                        "src": "1303:32:19",
                        "value": {
                          "name": "OwnableStorageLocation",
                          "nativeSrc": "1313:22:19",
                          "nodeType": "YulIdentifier",
                          "src": "1313:22:19"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "1303:6:19",
                            "nodeType": "YulIdentifier",
                            "src": "1303:6:19"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 36314,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "1303:6:19",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 36310,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1313:22:19",
                      "valueSize": 1
                    }
                  ],
                  "id": 36316,
                  "nodeType": "InlineAssembly",
                  "src": "1280:65:19"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getOwnableStorage",
            "nameLocation": "1201:18:19",
            "parameters": {
              "id": 36311,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1219:2:19"
            },
            "returnParameters": {
              "id": 36315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36314,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "1267:1:19",
                  "nodeType": "VariableDeclaration",
                  "scope": 36318,
                  "src": "1244:24:19",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                    "typeString": "struct OwnableUpgradeable.OwnableStorage"
                  },
                  "typeName": {
                    "id": 36313,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 36312,
                      "name": "OwnableStorage",
                      "nameLocations": [
                        "1244:14:19"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 36307,
                      "src": "1244:14:19"
                    },
                    "referencedDeclaration": 36307,
                    "src": "1244:14:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                      "typeString": "struct OwnableUpgradeable.OwnableStorage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1243:26:19"
            },
            "scope": 36487,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 36323,
            "nodeType": "ErrorDefinition",
            "src": "1447:50:19",
            "nodes": [],
            "documentation": {
              "id": 36319,
              "nodeType": "StructuredDocumentation",
              "src": "1357:85:19",
              "text": " @dev The caller account is not authorized to perform an operation."
            },
            "errorSelector": "118cdaa7",
            "name": "OwnableUnauthorizedAccount",
            "nameLocation": "1453:26:19",
            "parameters": {
              "id": 36322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36321,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1488:7:19",
                  "nodeType": "VariableDeclaration",
                  "scope": 36323,
                  "src": "1480:15:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36320,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1480:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1479:17:19"
            }
          },
          {
            "id": 36328,
            "nodeType": "ErrorDefinition",
            "src": "1590:41:19",
            "nodes": [],
            "documentation": {
              "id": 36324,
              "nodeType": "StructuredDocumentation",
              "src": "1503:82:19",
              "text": " @dev The owner is not a valid owner account. (eg. `address(0)`)"
            },
            "errorSelector": "1e4fbdf7",
            "name": "OwnableInvalidOwner",
            "nameLocation": "1596:19:19",
            "parameters": {
              "id": 36327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36326,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1624:5:19",
                  "nodeType": "VariableDeclaration",
                  "scope": 36328,
                  "src": "1616:13:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36325,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1616:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1615:15:19"
            }
          },
          {
            "id": 36334,
            "nodeType": "EventDefinition",
            "src": "1637:84:19",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
            "name": "OwnershipTransferred",
            "nameLocation": "1643:20:19",
            "parameters": {
              "id": 36333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36330,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "previousOwner",
                  "nameLocation": "1680:13:19",
                  "nodeType": "VariableDeclaration",
                  "scope": 36334,
                  "src": "1664:29:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36329,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1664:7:19",
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
                  "id": 36332,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "1711:8:19",
                  "nodeType": "VariableDeclaration",
                  "scope": 36334,
                  "src": "1695:24:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36331,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1695:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1663:57:19"
            }
          },
          {
            "id": 36347,
            "nodeType": "FunctionDefinition",
            "src": "1847:127:19",
            "nodes": [],
            "body": {
              "id": 36346,
              "nodeType": "Block",
              "src": "1919:55:19",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 36343,
                        "name": "initialOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36337,
                        "src": "1954:12:19",
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
                      "id": 36342,
                      "name": "__Ownable_init_unchained",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36374,
                      "src": "1929:24:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 36344,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1929:38:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36345,
                  "nodeType": "ExpressionStatement",
                  "src": "1929:38:19"
                }
              ]
            },
            "documentation": {
              "id": 36335,
              "nodeType": "StructuredDocumentation",
              "src": "1727:115:19",
              "text": " @dev Initializes the contract setting the address provided by the deployer as the initial owner."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 36340,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 36339,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "1902:16:19"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "1902:16:19"
                },
                "nodeType": "ModifierInvocation",
                "src": "1902:16:19"
              }
            ],
            "name": "__Ownable_init",
            "nameLocation": "1856:14:19",
            "parameters": {
              "id": 36338,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36337,
                  "mutability": "mutable",
                  "name": "initialOwner",
                  "nameLocation": "1879:12:19",
                  "nodeType": "VariableDeclaration",
                  "scope": 36347,
                  "src": "1871:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36336,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1871:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1870:22:19"
            },
            "returnParameters": {
              "id": 36341,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1919:0:19"
            },
            "scope": 36487,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 36374,
            "nodeType": "FunctionDefinition",
            "src": "1980:235:19",
            "nodes": [],
            "body": {
              "id": 36373,
              "nodeType": "Block",
              "src": "2062:153:19",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 36359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 36354,
                      "name": "initialOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36349,
                      "src": "2076:12:19",
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
                          "id": 36357,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2100:1:19",
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
                        "id": 36356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2092:7:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 36355,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "2092:7:19",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 36358,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2092:10:19",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2076:26:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36368,
                  "nodeType": "IfStatement",
                  "src": "2072:95:19",
                  "trueBody": {
                    "id": 36367,
                    "nodeType": "Block",
                    "src": "2104:63:19",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 36363,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2153:1:19",
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
                                "id": 36362,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2145:7:19",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 36361,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2145:7:19",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 36364,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2145:10:19",
                              "tryCall": false,
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
                            "id": 36360,
                            "name": "OwnableInvalidOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36328,
                            "src": "2125:19:19",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 36365,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2125:31:19",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 36366,
                        "nodeType": "RevertStatement",
                        "src": "2118:38:19"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 36370,
                        "name": "initialOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36349,
                        "src": "2195:12:19",
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
                      "id": 36369,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36486,
                      "src": "2176:18:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 36371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2176:32:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36372,
                  "nodeType": "ExpressionStatement",
                  "src": "2176:32:19"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 36352,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 36351,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "2045:16:19"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "2045:16:19"
                },
                "nodeType": "ModifierInvocation",
                "src": "2045:16:19"
              }
            ],
            "name": "__Ownable_init_unchained",
            "nameLocation": "1989:24:19",
            "parameters": {
              "id": 36350,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36349,
                  "mutability": "mutable",
                  "name": "initialOwner",
                  "nameLocation": "2022:12:19",
                  "nodeType": "VariableDeclaration",
                  "scope": 36374,
                  "src": "2014:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36348,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2014:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2013:22:19"
            },
            "returnParameters": {
              "id": 36353,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2062:0:19"
            },
            "scope": 36487,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 36382,
            "nodeType": "ModifierDefinition",
            "src": "2303:62:19",
            "nodes": [],
            "body": {
              "id": 36381,
              "nodeType": "Block",
              "src": "2324:41:19",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 36377,
                      "name": "_checkOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36415,
                      "src": "2334:11:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$__$",
                        "typeString": "function () view"
                      }
                    },
                    "id": 36378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2334:13:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36379,
                  "nodeType": "ExpressionStatement",
                  "src": "2334:13:19"
                },
                {
                  "id": 36380,
                  "nodeType": "PlaceholderStatement",
                  "src": "2357:1:19"
                }
              ]
            },
            "documentation": {
              "id": 36375,
              "nodeType": "StructuredDocumentation",
              "src": "2221:77:19",
              "text": " @dev Throws if called by any account other than the owner."
            },
            "name": "onlyOwner",
            "nameLocation": "2312:9:19",
            "parameters": {
              "id": 36376,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2321:2:19"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 36398,
            "nodeType": "FunctionDefinition",
            "src": "2441:144:19",
            "nodes": [],
            "body": {
              "id": 36397,
              "nodeType": "Block",
              "src": "2496:89:19",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    36390
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36390,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "2529:1:19",
                      "nodeType": "VariableDeclaration",
                      "scope": 36397,
                      "src": "2506:24:19",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                        "typeString": "struct OwnableUpgradeable.OwnableStorage"
                      },
                      "typeName": {
                        "id": 36389,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 36388,
                          "name": "OwnableStorage",
                          "nameLocations": [
                            "2506:14:19"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36307,
                          "src": "2506:14:19"
                        },
                        "referencedDeclaration": 36307,
                        "src": "2506:14:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                          "typeString": "struct OwnableUpgradeable.OwnableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36393,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 36391,
                      "name": "_getOwnableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36318,
                      "src": "2533:18:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_OwnableStorage_$36307_storage_ptr_$",
                        "typeString": "function () pure returns (struct OwnableUpgradeable.OwnableStorage storage pointer)"
                      }
                    },
                    "id": 36392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2533:20:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                      "typeString": "struct OwnableUpgradeable.OwnableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2506:47:19"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 36394,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36390,
                      "src": "2570:1:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                        "typeString": "struct OwnableUpgradeable.OwnableStorage storage pointer"
                      }
                    },
                    "id": 36395,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2572:6:19",
                    "memberName": "_owner",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 36306,
                    "src": "2570:8:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 36387,
                  "id": 36396,
                  "nodeType": "Return",
                  "src": "2563:15:19"
                }
              ]
            },
            "documentation": {
              "id": 36383,
              "nodeType": "StructuredDocumentation",
              "src": "2371:65:19",
              "text": " @dev Returns the address of the current owner."
            },
            "functionSelector": "8da5cb5b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "owner",
            "nameLocation": "2450:5:19",
            "parameters": {
              "id": 36384,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2455:2:19"
            },
            "returnParameters": {
              "id": 36387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36386,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 36398,
                  "src": "2487:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36385,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2487:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2486:9:19"
            },
            "scope": 36487,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 36415,
            "nodeType": "FunctionDefinition",
            "src": "2658:162:19",
            "nodes": [],
            "body": {
              "id": 36414,
              "nodeType": "Block",
              "src": "2703:117:19",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 36406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 36402,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36398,
                        "src": "2717:5:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                          "typeString": "function () view returns (address)"
                        }
                      },
                      "id": 36403,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2717:7:19",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 36404,
                        "name": "_msgSender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38846,
                        "src": "2728:10:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                          "typeString": "function () view returns (address)"
                        }
                      },
                      "id": 36405,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2728:12:19",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2717:23:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36413,
                  "nodeType": "IfStatement",
                  "src": "2713:101:19",
                  "trueBody": {
                    "id": 36412,
                    "nodeType": "Block",
                    "src": "2742:72:19",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 36408,
                                "name": "_msgSender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 38846,
                                "src": "2790:10:19",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 36409,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2790:12:19",
                              "tryCall": false,
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
                            "id": 36407,
                            "name": "OwnableUnauthorizedAccount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36323,
                            "src": "2763:26:19",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 36410,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2763:40:19",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 36411,
                        "nodeType": "RevertStatement",
                        "src": "2756:47:19"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 36399,
              "nodeType": "StructuredDocumentation",
              "src": "2591:62:19",
              "text": " @dev Throws if the sender is not the owner."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkOwner",
            "nameLocation": "2667:11:19",
            "parameters": {
              "id": 36400,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2678:2:19"
            },
            "returnParameters": {
              "id": 36401,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2703:0:19"
            },
            "scope": 36487,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 36429,
            "nodeType": "FunctionDefinition",
            "src": "3155:101:19",
            "nodes": [],
            "body": {
              "id": 36428,
              "nodeType": "Block",
              "src": "3209:47:19",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 36424,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3246:1:19",
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
                          "id": 36423,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3238:7:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 36422,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "3238:7:19",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 36425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3238:10:19",
                        "tryCall": false,
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
                      "id": 36421,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36486,
                      "src": "3219:18:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 36426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3219:30:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36427,
                  "nodeType": "ExpressionStatement",
                  "src": "3219:30:19"
                }
              ]
            },
            "documentation": {
              "id": 36416,
              "nodeType": "StructuredDocumentation",
              "src": "2826:324:19",
              "text": " @dev Leaves the contract without owner. It will not be possible to call\n `onlyOwner` functions. Can only be called by the current owner.\n NOTE: Renouncing ownership will leave the contract without an owner,\n thereby disabling any functionality that is only available to the owner."
            },
            "functionSelector": "715018a6",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 36419,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 36418,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "3199:9:19"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36382,
                  "src": "3199:9:19"
                },
                "nodeType": "ModifierInvocation",
                "src": "3199:9:19"
              }
            ],
            "name": "renounceOwnership",
            "nameLocation": "3164:17:19",
            "parameters": {
              "id": 36417,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3181:2:19"
            },
            "returnParameters": {
              "id": 36420,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3209:0:19"
            },
            "scope": 36487,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 36457,
            "nodeType": "FunctionDefinition",
            "src": "3405:215:19",
            "nodes": [],
            "body": {
              "id": 36456,
              "nodeType": "Block",
              "src": "3475:145:19",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 36442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 36437,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36432,
                      "src": "3489:8:19",
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
                          "id": 36440,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3509:1:19",
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
                        "id": 36439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "3501:7:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 36438,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3501:7:19",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 36441,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3501:10:19",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3489:22:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 36451,
                  "nodeType": "IfStatement",
                  "src": "3485:91:19",
                  "trueBody": {
                    "id": 36450,
                    "nodeType": "Block",
                    "src": "3513:63:19",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 36446,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3562:1:19",
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
                                "id": 36445,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3554:7:19",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 36444,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3554:7:19",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 36447,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3554:10:19",
                              "tryCall": false,
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
                            "id": 36443,
                            "name": "OwnableInvalidOwner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36328,
                            "src": "3534:19:19",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 36448,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3534:31:19",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 36449,
                        "nodeType": "RevertStatement",
                        "src": "3527:38:19"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 36453,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36432,
                        "src": "3604:8:19",
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
                      "id": 36452,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36486,
                      "src": "3585:18:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 36454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3585:28:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36455,
                  "nodeType": "ExpressionStatement",
                  "src": "3585:28:19"
                }
              ]
            },
            "documentation": {
              "id": 36430,
              "nodeType": "StructuredDocumentation",
              "src": "3262:138:19",
              "text": " @dev Transfers ownership of the contract to a new account (`newOwner`).\n Can only be called by the current owner."
            },
            "functionSelector": "f2fde38b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 36435,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 36434,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "3465:9:19"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36382,
                  "src": "3465:9:19"
                },
                "nodeType": "ModifierInvocation",
                "src": "3465:9:19"
              }
            ],
            "name": "transferOwnership",
            "nameLocation": "3414:17:19",
            "parameters": {
              "id": 36433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36432,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "3440:8:19",
                  "nodeType": "VariableDeclaration",
                  "scope": 36457,
                  "src": "3432:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36431,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3432:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3431:18:19"
            },
            "returnParameters": {
              "id": 36436,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3475:0:19"
            },
            "scope": 36487,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 36486,
            "nodeType": "FunctionDefinition",
            "src": "3774:248:19",
            "nodes": [],
            "body": {
              "id": 36485,
              "nodeType": "Block",
              "src": "3837:185:19",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    36465
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36465,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3870:1:19",
                      "nodeType": "VariableDeclaration",
                      "scope": 36485,
                      "src": "3847:24:19",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                        "typeString": "struct OwnableUpgradeable.OwnableStorage"
                      },
                      "typeName": {
                        "id": 36464,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 36463,
                          "name": "OwnableStorage",
                          "nameLocations": [
                            "3847:14:19"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 36307,
                          "src": "3847:14:19"
                        },
                        "referencedDeclaration": 36307,
                        "src": "3847:14:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                          "typeString": "struct OwnableUpgradeable.OwnableStorage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36468,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 36466,
                      "name": "_getOwnableStorage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36318,
                      "src": "3874:18:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_OwnableStorage_$36307_storage_ptr_$",
                        "typeString": "function () pure returns (struct OwnableUpgradeable.OwnableStorage storage pointer)"
                      }
                    },
                    "id": 36467,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3874:20:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                      "typeString": "struct OwnableUpgradeable.OwnableStorage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3847:47:19"
                },
                {
                  "assignments": [
                    36470
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 36470,
                      "mutability": "mutable",
                      "name": "oldOwner",
                      "nameLocation": "3912:8:19",
                      "nodeType": "VariableDeclaration",
                      "scope": 36485,
                      "src": "3904:16:19",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 36469,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3904:7:19",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 36473,
                  "initialValue": {
                    "expression": {
                      "id": 36471,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36465,
                      "src": "3923:1:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                        "typeString": "struct OwnableUpgradeable.OwnableStorage storage pointer"
                      }
                    },
                    "id": 36472,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3925:6:19",
                    "memberName": "_owner",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 36306,
                    "src": "3923:8:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3904:27:19"
                },
                {
                  "expression": {
                    "id": 36478,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 36474,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36465,
                        "src": "3941:1:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_OwnableStorage_$36307_storage_ptr",
                          "typeString": "struct OwnableUpgradeable.OwnableStorage storage pointer"
                        }
                      },
                      "id": 36476,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3943:6:19",
                      "memberName": "_owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36306,
                      "src": "3941:8:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 36477,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36460,
                      "src": "3952:8:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3941:19:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 36479,
                  "nodeType": "ExpressionStatement",
                  "src": "3941:19:19"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 36481,
                        "name": "oldOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36470,
                        "src": "3996:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 36482,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36460,
                        "src": "4006:8:19",
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 36480,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 36334,
                      "src": "3975:20:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 36483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3975:40:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 36484,
                  "nodeType": "EmitStatement",
                  "src": "3970:45:19"
                }
              ]
            },
            "documentation": {
              "id": 36458,
              "nodeType": "StructuredDocumentation",
              "src": "3626:143:19",
              "text": " @dev Transfers ownership of the contract to a new account (`newOwner`).\n Internal function without access restriction."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_transferOwnership",
            "nameLocation": "3783:18:19",
            "parameters": {
              "id": 36461,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36460,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "3810:8:19",
                  "nodeType": "VariableDeclaration",
                  "scope": 36486,
                  "src": "3802:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36459,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3802:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3801:18:19"
            },
            "returnParameters": {
              "id": 36462,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3837:0:19"
            },
            "scope": 36487,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 36300,
              "name": "Initializable",
              "nameLocations": [
                "789:13:19"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 36741,
              "src": "789:13:19"
            },
            "id": 36301,
            "nodeType": "InheritanceSpecifier",
            "src": "789:13:19"
          },
          {
            "baseName": {
              "id": 36302,
              "name": "ContextUpgradeable",
              "nameLocations": [
                "804:18:19"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 38864,
              "src": "804:18:19"
            },
            "id": 36303,
            "nodeType": "InheritanceSpecifier",
            "src": "804:18:19"
          }
        ],
        "canonicalName": "OwnableUpgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 36299,
          "nodeType": "StructuredDocumentation",
          "src": "261:487:19",
          "text": " @dev Contract module which provides a basic access control mechanism, where\n there is an account (an owner) that can be granted exclusive access to\n specific functions.\n The initial owner is set to the address provided by the deployer. This can\n later be changed with {transferOwnership}.\n This module is used through inheritance. It will make available the modifier\n `onlyOwner`, which can be applied to your functions to restrict their use to\n the owner."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          36487,
          38864,
          36741
        ],
        "name": "OwnableUpgradeable",
        "nameLocation": "767:18:19",
        "scope": 36488,
        "usedErrors": [
          36323,
          36328,
          36504,
          36507
        ],
        "usedEvents": [
          36334,
          36512
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 19
} as const;