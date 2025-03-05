export const StorageSlot = {
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203508a22de8e68940b2b71c9fc55d133155eb0e36e78be5114d70ac0288c3c2a764736f6c634300081a0033",
    "sourceMap": "1407:2774:43:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1407:2774:43;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203508a22de8e68940b2b71c9fc55d133155eb0e36e78be5114d70ac0288c3c2a764736f6c634300081a0033",
    "sourceMap": "1407:2774:43:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Library for reading and writing primitive types to specific storage slots. Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts. This library helps with reading and writing to such slots without the need for inline assembly. The functions in this library return Slot structs that contain a `value` member that can be used to read or write. Example usage to set ERC-1967 implementation slot: ```solidity contract ERC1967 {     // Define the slot. Alternatively, use the SlotDerivation library to derive the slot.     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;     function _getImplementation() internal view returns (address) {         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;     }     function _setImplementation(address newImplementation) internal {         require(newImplementation.code.length > 0);         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;     } } ``` TIP: Consider using this library along with {SlotDerivation}.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":\"StorageSlot\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b\",\"dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM\"]}},\"version\":1}",
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
        "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol": "StorageSlot"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol": {
        "keccak256": "0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97",
        "urls": [
          "bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b",
          "dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol",
    "id": 41298,
    "exportedSymbols": {
      "StorageSlot": [
        41297
      ]
    },
    "nodeType": "SourceUnit",
    "src": "193:3989:43",
    "nodes": [
      {
        "id": 41175,
        "nodeType": "PragmaDirective",
        "src": "193:24:43",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 41297,
        "nodeType": "ContractDefinition",
        "src": "1407:2774:43",
        "nodes": [
          {
            "id": 41179,
            "nodeType": "StructDefinition",
            "src": "1433:49:43",
            "nodes": [],
            "canonicalName": "StorageSlot.AddressSlot",
            "members": [
              {
                "constant": false,
                "id": 41178,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1470:5:43",
                "nodeType": "VariableDeclaration",
                "scope": 41179,
                "src": "1462:13:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 41177,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1462:7:43",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "AddressSlot",
            "nameLocation": "1440:11:43",
            "scope": 41297,
            "visibility": "public"
          },
          {
            "id": 41182,
            "nodeType": "StructDefinition",
            "src": "1488:46:43",
            "nodes": [],
            "canonicalName": "StorageSlot.BooleanSlot",
            "members": [
              {
                "constant": false,
                "id": 41181,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1522:5:43",
                "nodeType": "VariableDeclaration",
                "scope": 41182,
                "src": "1517:10:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 41180,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1517:4:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "BooleanSlot",
            "nameLocation": "1495:11:43",
            "scope": 41297,
            "visibility": "public"
          },
          {
            "id": 41185,
            "nodeType": "StructDefinition",
            "src": "1540:49:43",
            "nodes": [],
            "canonicalName": "StorageSlot.Bytes32Slot",
            "members": [
              {
                "constant": false,
                "id": 41184,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1577:5:43",
                "nodeType": "VariableDeclaration",
                "scope": 41185,
                "src": "1569:13:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 41183,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1569:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Bytes32Slot",
            "nameLocation": "1547:11:43",
            "scope": 41297,
            "visibility": "public"
          },
          {
            "id": 41188,
            "nodeType": "StructDefinition",
            "src": "1595:49:43",
            "nodes": [],
            "canonicalName": "StorageSlot.Uint256Slot",
            "members": [
              {
                "constant": false,
                "id": 41187,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1632:5:43",
                "nodeType": "VariableDeclaration",
                "scope": 41188,
                "src": "1624:13:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 41186,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1624:7:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Uint256Slot",
            "nameLocation": "1602:11:43",
            "scope": 41297,
            "visibility": "public"
          },
          {
            "id": 41191,
            "nodeType": "StructDefinition",
            "src": "1650:47:43",
            "nodes": [],
            "canonicalName": "StorageSlot.Int256Slot",
            "members": [
              {
                "constant": false,
                "id": 41190,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1685:5:43",
                "nodeType": "VariableDeclaration",
                "scope": 41191,
                "src": "1678:12:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 41189,
                  "name": "int256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1678:6:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Int256Slot",
            "nameLocation": "1657:10:43",
            "scope": 41297,
            "visibility": "public"
          },
          {
            "id": 41194,
            "nodeType": "StructDefinition",
            "src": "1703:47:43",
            "nodes": [],
            "canonicalName": "StorageSlot.StringSlot",
            "members": [
              {
                "constant": false,
                "id": 41193,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1738:5:43",
                "nodeType": "VariableDeclaration",
                "scope": 41194,
                "src": "1731:12:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 41192,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1731:6:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "StringSlot",
            "nameLocation": "1710:10:43",
            "scope": 41297,
            "visibility": "public"
          },
          {
            "id": 41197,
            "nodeType": "StructDefinition",
            "src": "1756:45:43",
            "nodes": [],
            "canonicalName": "StorageSlot.BytesSlot",
            "members": [
              {
                "constant": false,
                "id": 41196,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1789:5:43",
                "nodeType": "VariableDeclaration",
                "scope": 41197,
                "src": "1783:11:43",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 41195,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "1783:5:43",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "BytesSlot",
            "nameLocation": "1763:9:43",
            "scope": 41297,
            "visibility": "public"
          },
          {
            "id": 41208,
            "nodeType": "FunctionDefinition",
            "src": "1899:163:43",
            "nodes": [],
            "body": {
              "id": 41207,
              "nodeType": "Block",
              "src": "1983:79:43",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2018:38:43",
                    "nodeType": "YulBlock",
                    "src": "2018:38:43",
                    "statements": [
                      {
                        "nativeSrc": "2032:14:43",
                        "nodeType": "YulAssignment",
                        "src": "2032:14:43",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2042:4:43",
                          "nodeType": "YulIdentifier",
                          "src": "2042:4:43"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2032:6:43",
                            "nodeType": "YulIdentifier",
                            "src": "2032:6:43"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41204,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2032:6:43",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41200,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2042:4:43",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41206,
                  "nodeType": "InlineAssembly",
                  "src": "1993:63:43"
                }
              ]
            },
            "documentation": {
              "id": 41198,
              "nodeType": "StructuredDocumentation",
              "src": "1807:87:43",
              "text": " @dev Returns an `AddressSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAddressSlot",
            "nameLocation": "1908:14:43",
            "parameters": {
              "id": 41201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41200,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "1931:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41208,
                  "src": "1923:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41199,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1923:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1922:14:43"
            },
            "returnParameters": {
              "id": 41205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41204,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1980:1:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41208,
                  "src": "1960:21:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSlot_$41179_storage_ptr",
                    "typeString": "struct StorageSlot.AddressSlot"
                  },
                  "typeName": {
                    "id": 41203,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41202,
                      "name": "AddressSlot",
                      "nameLocations": [
                        "1960:11:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41179,
                      "src": "1960:11:43"
                    },
                    "referencedDeclaration": 41179,
                    "src": "1960:11:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSlot_$41179_storage_ptr",
                      "typeString": "struct StorageSlot.AddressSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1959:23:43"
            },
            "scope": 41297,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41219,
            "nodeType": "FunctionDefinition",
            "src": "2159:163:43",
            "nodes": [],
            "body": {
              "id": 41218,
              "nodeType": "Block",
              "src": "2243:79:43",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2278:38:43",
                    "nodeType": "YulBlock",
                    "src": "2278:38:43",
                    "statements": [
                      {
                        "nativeSrc": "2292:14:43",
                        "nodeType": "YulAssignment",
                        "src": "2292:14:43",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2302:4:43",
                          "nodeType": "YulIdentifier",
                          "src": "2302:4:43"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2292:6:43",
                            "nodeType": "YulIdentifier",
                            "src": "2292:6:43"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41215,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2292:6:43",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41211,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2302:4:43",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41217,
                  "nodeType": "InlineAssembly",
                  "src": "2253:63:43"
                }
              ]
            },
            "documentation": {
              "id": 41209,
              "nodeType": "StructuredDocumentation",
              "src": "2068:86:43",
              "text": " @dev Returns a `BooleanSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBooleanSlot",
            "nameLocation": "2168:14:43",
            "parameters": {
              "id": 41212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41211,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2191:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41219,
                  "src": "2183:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41210,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2183:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2182:14:43"
            },
            "returnParameters": {
              "id": 41216,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41215,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "2240:1:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41219,
                  "src": "2220:21:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_BooleanSlot_$41182_storage_ptr",
                    "typeString": "struct StorageSlot.BooleanSlot"
                  },
                  "typeName": {
                    "id": 41214,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41213,
                      "name": "BooleanSlot",
                      "nameLocations": [
                        "2220:11:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41182,
                      "src": "2220:11:43"
                    },
                    "referencedDeclaration": 41182,
                    "src": "2220:11:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BooleanSlot_$41182_storage_ptr",
                      "typeString": "struct StorageSlot.BooleanSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2219:23:43"
            },
            "scope": 41297,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41230,
            "nodeType": "FunctionDefinition",
            "src": "2419:163:43",
            "nodes": [],
            "body": {
              "id": 41229,
              "nodeType": "Block",
              "src": "2503:79:43",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2538:38:43",
                    "nodeType": "YulBlock",
                    "src": "2538:38:43",
                    "statements": [
                      {
                        "nativeSrc": "2552:14:43",
                        "nodeType": "YulAssignment",
                        "src": "2552:14:43",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2562:4:43",
                          "nodeType": "YulIdentifier",
                          "src": "2562:4:43"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2552:6:43",
                            "nodeType": "YulIdentifier",
                            "src": "2552:6:43"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41226,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2552:6:43",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41222,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2562:4:43",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41228,
                  "nodeType": "InlineAssembly",
                  "src": "2513:63:43"
                }
              ]
            },
            "documentation": {
              "id": 41220,
              "nodeType": "StructuredDocumentation",
              "src": "2328:86:43",
              "text": " @dev Returns a `Bytes32Slot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBytes32Slot",
            "nameLocation": "2428:14:43",
            "parameters": {
              "id": 41223,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41222,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2451:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41230,
                  "src": "2443:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41221,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2443:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2442:14:43"
            },
            "returnParameters": {
              "id": 41227,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41226,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "2500:1:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41230,
                  "src": "2480:21:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Slot_$41185_storage_ptr",
                    "typeString": "struct StorageSlot.Bytes32Slot"
                  },
                  "typeName": {
                    "id": 41225,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41224,
                      "name": "Bytes32Slot",
                      "nameLocations": [
                        "2480:11:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41185,
                      "src": "2480:11:43"
                    },
                    "referencedDeclaration": 41185,
                    "src": "2480:11:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Slot_$41185_storage_ptr",
                      "typeString": "struct StorageSlot.Bytes32Slot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2479:23:43"
            },
            "scope": 41297,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41241,
            "nodeType": "FunctionDefinition",
            "src": "2679:163:43",
            "nodes": [],
            "body": {
              "id": 41240,
              "nodeType": "Block",
              "src": "2763:79:43",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2798:38:43",
                    "nodeType": "YulBlock",
                    "src": "2798:38:43",
                    "statements": [
                      {
                        "nativeSrc": "2812:14:43",
                        "nodeType": "YulAssignment",
                        "src": "2812:14:43",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2822:4:43",
                          "nodeType": "YulIdentifier",
                          "src": "2822:4:43"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2812:6:43",
                            "nodeType": "YulIdentifier",
                            "src": "2812:6:43"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41237,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2812:6:43",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41233,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2822:4:43",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41239,
                  "nodeType": "InlineAssembly",
                  "src": "2773:63:43"
                }
              ]
            },
            "documentation": {
              "id": 41231,
              "nodeType": "StructuredDocumentation",
              "src": "2588:86:43",
              "text": " @dev Returns a `Uint256Slot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getUint256Slot",
            "nameLocation": "2688:14:43",
            "parameters": {
              "id": 41234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41233,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2711:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41241,
                  "src": "2703:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41232,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2703:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2702:14:43"
            },
            "returnParameters": {
              "id": 41238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41237,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "2760:1:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41241,
                  "src": "2740:21:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Uint256Slot_$41188_storage_ptr",
                    "typeString": "struct StorageSlot.Uint256Slot"
                  },
                  "typeName": {
                    "id": 41236,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41235,
                      "name": "Uint256Slot",
                      "nameLocations": [
                        "2740:11:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41188,
                      "src": "2740:11:43"
                    },
                    "referencedDeclaration": 41188,
                    "src": "2740:11:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Uint256Slot_$41188_storage_ptr",
                      "typeString": "struct StorageSlot.Uint256Slot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2739:23:43"
            },
            "scope": 41297,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41252,
            "nodeType": "FunctionDefinition",
            "src": "2938:161:43",
            "nodes": [],
            "body": {
              "id": 41251,
              "nodeType": "Block",
              "src": "3020:79:43",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3055:38:43",
                    "nodeType": "YulBlock",
                    "src": "3055:38:43",
                    "statements": [
                      {
                        "nativeSrc": "3069:14:43",
                        "nodeType": "YulAssignment",
                        "src": "3069:14:43",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "3079:4:43",
                          "nodeType": "YulIdentifier",
                          "src": "3079:4:43"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3069:6:43",
                            "nodeType": "YulIdentifier",
                            "src": "3069:6:43"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41248,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3069:6:43",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41244,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3079:4:43",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41250,
                  "nodeType": "InlineAssembly",
                  "src": "3030:63:43"
                }
              ]
            },
            "documentation": {
              "id": 41242,
              "nodeType": "StructuredDocumentation",
              "src": "2848:85:43",
              "text": " @dev Returns a `Int256Slot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getInt256Slot",
            "nameLocation": "2947:13:43",
            "parameters": {
              "id": 41245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41244,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2969:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41252,
                  "src": "2961:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41243,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2961:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2960:14:43"
            },
            "returnParameters": {
              "id": 41249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41248,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3017:1:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41252,
                  "src": "2998:20:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Int256Slot_$41191_storage_ptr",
                    "typeString": "struct StorageSlot.Int256Slot"
                  },
                  "typeName": {
                    "id": 41247,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41246,
                      "name": "Int256Slot",
                      "nameLocations": [
                        "2998:10:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41191,
                      "src": "2998:10:43"
                    },
                    "referencedDeclaration": 41191,
                    "src": "2998:10:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Int256Slot_$41191_storage_ptr",
                      "typeString": "struct StorageSlot.Int256Slot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2997:22:43"
            },
            "scope": 41297,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41263,
            "nodeType": "FunctionDefinition",
            "src": "3195:161:43",
            "nodes": [],
            "body": {
              "id": 41262,
              "nodeType": "Block",
              "src": "3277:79:43",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3312:38:43",
                    "nodeType": "YulBlock",
                    "src": "3312:38:43",
                    "statements": [
                      {
                        "nativeSrc": "3326:14:43",
                        "nodeType": "YulAssignment",
                        "src": "3326:14:43",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "3336:4:43",
                          "nodeType": "YulIdentifier",
                          "src": "3336:4:43"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3326:6:43",
                            "nodeType": "YulIdentifier",
                            "src": "3326:6:43"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41259,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3326:6:43",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41255,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3336:4:43",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41261,
                  "nodeType": "InlineAssembly",
                  "src": "3287:63:43"
                }
              ]
            },
            "documentation": {
              "id": 41253,
              "nodeType": "StructuredDocumentation",
              "src": "3105:85:43",
              "text": " @dev Returns a `StringSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getStringSlot",
            "nameLocation": "3204:13:43",
            "parameters": {
              "id": 41256,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41255,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3226:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41263,
                  "src": "3218:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41254,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3218:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3217:14:43"
            },
            "returnParameters": {
              "id": 41260,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41259,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3274:1:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41263,
                  "src": "3255:20:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StringSlot_$41194_storage_ptr",
                    "typeString": "struct StorageSlot.StringSlot"
                  },
                  "typeName": {
                    "id": 41258,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41257,
                      "name": "StringSlot",
                      "nameLocations": [
                        "3255:10:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41194,
                      "src": "3255:10:43"
                    },
                    "referencedDeclaration": 41194,
                    "src": "3255:10:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StringSlot_$41194_storage_ptr",
                      "typeString": "struct StorageSlot.StringSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3254:22:43"
            },
            "scope": 41297,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41274,
            "nodeType": "FunctionDefinition",
            "src": "3468:175:43",
            "nodes": [],
            "body": {
              "id": 41273,
              "nodeType": "Block",
              "src": "3558:85:43",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3593:44:43",
                    "nodeType": "YulBlock",
                    "src": "3593:44:43",
                    "statements": [
                      {
                        "nativeSrc": "3607:20:43",
                        "nodeType": "YulAssignment",
                        "src": "3607:20:43",
                        "value": {
                          "name": "store.slot",
                          "nativeSrc": "3617:10:43",
                          "nodeType": "YulIdentifier",
                          "src": "3617:10:43"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3607:6:43",
                            "nodeType": "YulIdentifier",
                            "src": "3607:6:43"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41270,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3607:6:43",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41266,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3617:10:43",
                      "suffix": "slot",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41272,
                  "nodeType": "InlineAssembly",
                  "src": "3568:69:43"
                }
              ]
            },
            "documentation": {
              "id": 41264,
              "nodeType": "StructuredDocumentation",
              "src": "3362:101:43",
              "text": " @dev Returns an `StringSlot` representation of the string storage pointer `store`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getStringSlot",
            "nameLocation": "3477:13:43",
            "parameters": {
              "id": 41267,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41266,
                  "mutability": "mutable",
                  "name": "store",
                  "nameLocation": "3506:5:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41274,
                  "src": "3491:20:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41265,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3491:6:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3490:22:43"
            },
            "returnParameters": {
              "id": 41271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41270,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3555:1:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41274,
                  "src": "3536:20:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StringSlot_$41194_storage_ptr",
                    "typeString": "struct StorageSlot.StringSlot"
                  },
                  "typeName": {
                    "id": 41269,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41268,
                      "name": "StringSlot",
                      "nameLocations": [
                        "3536:10:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41194,
                      "src": "3536:10:43"
                    },
                    "referencedDeclaration": 41194,
                    "src": "3536:10:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StringSlot_$41194_storage_ptr",
                      "typeString": "struct StorageSlot.StringSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3535:22:43"
            },
            "scope": 41297,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41285,
            "nodeType": "FunctionDefinition",
            "src": "3738:159:43",
            "nodes": [],
            "body": {
              "id": 41284,
              "nodeType": "Block",
              "src": "3818:79:43",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3853:38:43",
                    "nodeType": "YulBlock",
                    "src": "3853:38:43",
                    "statements": [
                      {
                        "nativeSrc": "3867:14:43",
                        "nodeType": "YulAssignment",
                        "src": "3867:14:43",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "3877:4:43",
                          "nodeType": "YulIdentifier",
                          "src": "3877:4:43"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3867:6:43",
                            "nodeType": "YulIdentifier",
                            "src": "3867:6:43"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41281,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3867:6:43",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41277,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3877:4:43",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41283,
                  "nodeType": "InlineAssembly",
                  "src": "3828:63:43"
                }
              ]
            },
            "documentation": {
              "id": 41275,
              "nodeType": "StructuredDocumentation",
              "src": "3649:84:43",
              "text": " @dev Returns a `BytesSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBytesSlot",
            "nameLocation": "3747:12:43",
            "parameters": {
              "id": 41278,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41277,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3768:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41285,
                  "src": "3760:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41276,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3760:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3759:14:43"
            },
            "returnParameters": {
              "id": 41282,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41281,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3815:1:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41285,
                  "src": "3797:19:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_BytesSlot_$41197_storage_ptr",
                    "typeString": "struct StorageSlot.BytesSlot"
                  },
                  "typeName": {
                    "id": 41280,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41279,
                      "name": "BytesSlot",
                      "nameLocations": [
                        "3797:9:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41197,
                      "src": "3797:9:43"
                    },
                    "referencedDeclaration": 41197,
                    "src": "3797:9:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BytesSlot_$41197_storage_ptr",
                      "typeString": "struct StorageSlot.BytesSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3796:21:43"
            },
            "scope": 41297,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41296,
            "nodeType": "FunctionDefinition",
            "src": "4007:172:43",
            "nodes": [],
            "body": {
              "id": 41295,
              "nodeType": "Block",
              "src": "4094:85:43",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4129:44:43",
                    "nodeType": "YulBlock",
                    "src": "4129:44:43",
                    "statements": [
                      {
                        "nativeSrc": "4143:20:43",
                        "nodeType": "YulAssignment",
                        "src": "4143:20:43",
                        "value": {
                          "name": "store.slot",
                          "nativeSrc": "4153:10:43",
                          "nodeType": "YulIdentifier",
                          "src": "4153:10:43"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "4143:6:43",
                            "nodeType": "YulIdentifier",
                            "src": "4143:6:43"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41292,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "4143:6:43",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41288,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "4153:10:43",
                      "suffix": "slot",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41294,
                  "nodeType": "InlineAssembly",
                  "src": "4104:69:43"
                }
              ]
            },
            "documentation": {
              "id": 41286,
              "nodeType": "StructuredDocumentation",
              "src": "3903:99:43",
              "text": " @dev Returns an `BytesSlot` representation of the bytes storage pointer `store`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBytesSlot",
            "nameLocation": "4016:12:43",
            "parameters": {
              "id": 41289,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41288,
                  "mutability": "mutable",
                  "name": "store",
                  "nameLocation": "4043:5:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41296,
                  "src": "4029:19:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41287,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4029:5:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4028:21:43"
            },
            "returnParameters": {
              "id": 41293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41292,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "4091:1:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 41296,
                  "src": "4073:19:43",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_BytesSlot_$41197_storage_ptr",
                    "typeString": "struct StorageSlot.BytesSlot"
                  },
                  "typeName": {
                    "id": 41291,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 41290,
                      "name": "BytesSlot",
                      "nameLocations": [
                        "4073:9:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 41197,
                      "src": "4073:9:43"
                    },
                    "referencedDeclaration": 41197,
                    "src": "4073:9:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BytesSlot_$41197_storage_ptr",
                      "typeString": "struct StorageSlot.BytesSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4072:21:43"
            },
            "scope": 41297,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "StorageSlot",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 41176,
          "nodeType": "StructuredDocumentation",
          "src": "219:1187:43",
          "text": " @dev Library for reading and writing primitive types to specific storage slots.\n Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\n This library helps with reading and writing to such slots without the need for inline assembly.\n The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\n Example usage to set ERC-1967 implementation slot:\n ```solidity\n contract ERC1967 {\n     // Define the slot. Alternatively, use the SlotDerivation library to derive the slot.\n     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\n     function _getImplementation() internal view returns (address) {\n         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\n     }\n     function _setImplementation(address newImplementation) internal {\n         require(newImplementation.code.length > 0);\n         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\n     }\n }\n ```\n TIP: Consider using this library along with {SlotDerivation}."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          41297
        ],
        "name": "StorageSlot",
        "nameLocation": "1415:11:43",
        "scope": 41298,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 43
} as const;