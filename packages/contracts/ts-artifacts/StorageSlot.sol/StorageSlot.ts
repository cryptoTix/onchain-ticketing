export const StorageSlot = {
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203508a22de8e68940b2b71c9fc55d133155eb0e36e78be5114d70ac0288c3c2a764736f6c634300081a0033",
    "sourceMap": "1407:2774:51:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1407:2774:51;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203508a22de8e68940b2b71c9fc55d133155eb0e36e78be5114d70ac0288c3c2a764736f6c634300081a0033",
    "sourceMap": "1407:2774:51:-:0;;;;;;;;",
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
    "id": 45846,
    "exportedSymbols": {
      "StorageSlot": [
        45845
      ]
    },
    "nodeType": "SourceUnit",
    "src": "193:3989:51",
    "nodes": [
      {
        "id": 45723,
        "nodeType": "PragmaDirective",
        "src": "193:24:51",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 45845,
        "nodeType": "ContractDefinition",
        "src": "1407:2774:51",
        "nodes": [
          {
            "id": 45727,
            "nodeType": "StructDefinition",
            "src": "1433:49:51",
            "nodes": [],
            "canonicalName": "StorageSlot.AddressSlot",
            "members": [
              {
                "constant": false,
                "id": 45726,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1470:5:51",
                "nodeType": "VariableDeclaration",
                "scope": 45727,
                "src": "1462:13:51",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 45725,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1462:7:51",
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
            "nameLocation": "1440:11:51",
            "scope": 45845,
            "visibility": "public"
          },
          {
            "id": 45730,
            "nodeType": "StructDefinition",
            "src": "1488:46:51",
            "nodes": [],
            "canonicalName": "StorageSlot.BooleanSlot",
            "members": [
              {
                "constant": false,
                "id": 45729,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1522:5:51",
                "nodeType": "VariableDeclaration",
                "scope": 45730,
                "src": "1517:10:51",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 45728,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1517:4:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "BooleanSlot",
            "nameLocation": "1495:11:51",
            "scope": 45845,
            "visibility": "public"
          },
          {
            "id": 45733,
            "nodeType": "StructDefinition",
            "src": "1540:49:51",
            "nodes": [],
            "canonicalName": "StorageSlot.Bytes32Slot",
            "members": [
              {
                "constant": false,
                "id": 45732,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1577:5:51",
                "nodeType": "VariableDeclaration",
                "scope": 45733,
                "src": "1569:13:51",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 45731,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1569:7:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Bytes32Slot",
            "nameLocation": "1547:11:51",
            "scope": 45845,
            "visibility": "public"
          },
          {
            "id": 45736,
            "nodeType": "StructDefinition",
            "src": "1595:49:51",
            "nodes": [],
            "canonicalName": "StorageSlot.Uint256Slot",
            "members": [
              {
                "constant": false,
                "id": 45735,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1632:5:51",
                "nodeType": "VariableDeclaration",
                "scope": 45736,
                "src": "1624:13:51",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 45734,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1624:7:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Uint256Slot",
            "nameLocation": "1602:11:51",
            "scope": 45845,
            "visibility": "public"
          },
          {
            "id": 45739,
            "nodeType": "StructDefinition",
            "src": "1650:47:51",
            "nodes": [],
            "canonicalName": "StorageSlot.Int256Slot",
            "members": [
              {
                "constant": false,
                "id": 45738,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1685:5:51",
                "nodeType": "VariableDeclaration",
                "scope": 45739,
                "src": "1678:12:51",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 45737,
                  "name": "int256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1678:6:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Int256Slot",
            "nameLocation": "1657:10:51",
            "scope": 45845,
            "visibility": "public"
          },
          {
            "id": 45742,
            "nodeType": "StructDefinition",
            "src": "1703:47:51",
            "nodes": [],
            "canonicalName": "StorageSlot.StringSlot",
            "members": [
              {
                "constant": false,
                "id": 45741,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1738:5:51",
                "nodeType": "VariableDeclaration",
                "scope": 45742,
                "src": "1731:12:51",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 45740,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "1731:6:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "StringSlot",
            "nameLocation": "1710:10:51",
            "scope": 45845,
            "visibility": "public"
          },
          {
            "id": 45745,
            "nodeType": "StructDefinition",
            "src": "1756:45:51",
            "nodes": [],
            "canonicalName": "StorageSlot.BytesSlot",
            "members": [
              {
                "constant": false,
                "id": 45744,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "1789:5:51",
                "nodeType": "VariableDeclaration",
                "scope": 45745,
                "src": "1783:11:51",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 45743,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "1783:5:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "BytesSlot",
            "nameLocation": "1763:9:51",
            "scope": 45845,
            "visibility": "public"
          },
          {
            "id": 45756,
            "nodeType": "FunctionDefinition",
            "src": "1899:163:51",
            "nodes": [],
            "body": {
              "id": 45755,
              "nodeType": "Block",
              "src": "1983:79:51",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2018:38:51",
                    "nodeType": "YulBlock",
                    "src": "2018:38:51",
                    "statements": [
                      {
                        "nativeSrc": "2032:14:51",
                        "nodeType": "YulAssignment",
                        "src": "2032:14:51",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2042:4:51",
                          "nodeType": "YulIdentifier",
                          "src": "2042:4:51"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2032:6:51",
                            "nodeType": "YulIdentifier",
                            "src": "2032:6:51"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45752,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2032:6:51",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45748,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2042:4:51",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45754,
                  "nodeType": "InlineAssembly",
                  "src": "1993:63:51"
                }
              ]
            },
            "documentation": {
              "id": 45746,
              "nodeType": "StructuredDocumentation",
              "src": "1807:87:51",
              "text": " @dev Returns an `AddressSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAddressSlot",
            "nameLocation": "1908:14:51",
            "parameters": {
              "id": 45749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45748,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "1931:4:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45756,
                  "src": "1923:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45747,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1923:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1922:14:51"
            },
            "returnParameters": {
              "id": 45753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45752,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1980:1:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45756,
                  "src": "1960:21:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_AddressSlot_$45727_storage_ptr",
                    "typeString": "struct StorageSlot.AddressSlot"
                  },
                  "typeName": {
                    "id": 45751,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 45750,
                      "name": "AddressSlot",
                      "nameLocations": [
                        "1960:11:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 45727,
                      "src": "1960:11:51"
                    },
                    "referencedDeclaration": 45727,
                    "src": "1960:11:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_AddressSlot_$45727_storage_ptr",
                      "typeString": "struct StorageSlot.AddressSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1959:23:51"
            },
            "scope": 45845,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45767,
            "nodeType": "FunctionDefinition",
            "src": "2159:163:51",
            "nodes": [],
            "body": {
              "id": 45766,
              "nodeType": "Block",
              "src": "2243:79:51",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2278:38:51",
                    "nodeType": "YulBlock",
                    "src": "2278:38:51",
                    "statements": [
                      {
                        "nativeSrc": "2292:14:51",
                        "nodeType": "YulAssignment",
                        "src": "2292:14:51",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2302:4:51",
                          "nodeType": "YulIdentifier",
                          "src": "2302:4:51"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2292:6:51",
                            "nodeType": "YulIdentifier",
                            "src": "2292:6:51"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45763,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2292:6:51",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45759,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2302:4:51",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45765,
                  "nodeType": "InlineAssembly",
                  "src": "2253:63:51"
                }
              ]
            },
            "documentation": {
              "id": 45757,
              "nodeType": "StructuredDocumentation",
              "src": "2068:86:51",
              "text": " @dev Returns a `BooleanSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBooleanSlot",
            "nameLocation": "2168:14:51",
            "parameters": {
              "id": 45760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45759,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2191:4:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45767,
                  "src": "2183:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45758,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2183:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2182:14:51"
            },
            "returnParameters": {
              "id": 45764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45763,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "2240:1:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45767,
                  "src": "2220:21:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_BooleanSlot_$45730_storage_ptr",
                    "typeString": "struct StorageSlot.BooleanSlot"
                  },
                  "typeName": {
                    "id": 45762,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 45761,
                      "name": "BooleanSlot",
                      "nameLocations": [
                        "2220:11:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 45730,
                      "src": "2220:11:51"
                    },
                    "referencedDeclaration": 45730,
                    "src": "2220:11:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BooleanSlot_$45730_storage_ptr",
                      "typeString": "struct StorageSlot.BooleanSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2219:23:51"
            },
            "scope": 45845,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45778,
            "nodeType": "FunctionDefinition",
            "src": "2419:163:51",
            "nodes": [],
            "body": {
              "id": 45777,
              "nodeType": "Block",
              "src": "2503:79:51",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2538:38:51",
                    "nodeType": "YulBlock",
                    "src": "2538:38:51",
                    "statements": [
                      {
                        "nativeSrc": "2552:14:51",
                        "nodeType": "YulAssignment",
                        "src": "2552:14:51",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2562:4:51",
                          "nodeType": "YulIdentifier",
                          "src": "2562:4:51"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2552:6:51",
                            "nodeType": "YulIdentifier",
                            "src": "2552:6:51"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45774,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2552:6:51",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45770,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2562:4:51",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45776,
                  "nodeType": "InlineAssembly",
                  "src": "2513:63:51"
                }
              ]
            },
            "documentation": {
              "id": 45768,
              "nodeType": "StructuredDocumentation",
              "src": "2328:86:51",
              "text": " @dev Returns a `Bytes32Slot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBytes32Slot",
            "nameLocation": "2428:14:51",
            "parameters": {
              "id": 45771,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45770,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2451:4:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45778,
                  "src": "2443:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45769,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2443:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2442:14:51"
            },
            "returnParameters": {
              "id": 45775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45774,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "2500:1:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45778,
                  "src": "2480:21:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Bytes32Slot_$45733_storage_ptr",
                    "typeString": "struct StorageSlot.Bytes32Slot"
                  },
                  "typeName": {
                    "id": 45773,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 45772,
                      "name": "Bytes32Slot",
                      "nameLocations": [
                        "2480:11:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 45733,
                      "src": "2480:11:51"
                    },
                    "referencedDeclaration": 45733,
                    "src": "2480:11:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Bytes32Slot_$45733_storage_ptr",
                      "typeString": "struct StorageSlot.Bytes32Slot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2479:23:51"
            },
            "scope": 45845,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45789,
            "nodeType": "FunctionDefinition",
            "src": "2679:163:51",
            "nodes": [],
            "body": {
              "id": 45788,
              "nodeType": "Block",
              "src": "2763:79:51",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2798:38:51",
                    "nodeType": "YulBlock",
                    "src": "2798:38:51",
                    "statements": [
                      {
                        "nativeSrc": "2812:14:51",
                        "nodeType": "YulAssignment",
                        "src": "2812:14:51",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "2822:4:51",
                          "nodeType": "YulIdentifier",
                          "src": "2822:4:51"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "2812:6:51",
                            "nodeType": "YulIdentifier",
                            "src": "2812:6:51"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45785,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2812:6:51",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45781,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2822:4:51",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45787,
                  "nodeType": "InlineAssembly",
                  "src": "2773:63:51"
                }
              ]
            },
            "documentation": {
              "id": 45779,
              "nodeType": "StructuredDocumentation",
              "src": "2588:86:51",
              "text": " @dev Returns a `Uint256Slot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getUint256Slot",
            "nameLocation": "2688:14:51",
            "parameters": {
              "id": 45782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45781,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2711:4:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45789,
                  "src": "2703:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45780,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2703:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2702:14:51"
            },
            "returnParameters": {
              "id": 45786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45785,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "2760:1:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45789,
                  "src": "2740:21:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Uint256Slot_$45736_storage_ptr",
                    "typeString": "struct StorageSlot.Uint256Slot"
                  },
                  "typeName": {
                    "id": 45784,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 45783,
                      "name": "Uint256Slot",
                      "nameLocations": [
                        "2740:11:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 45736,
                      "src": "2740:11:51"
                    },
                    "referencedDeclaration": 45736,
                    "src": "2740:11:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Uint256Slot_$45736_storage_ptr",
                      "typeString": "struct StorageSlot.Uint256Slot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2739:23:51"
            },
            "scope": 45845,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45800,
            "nodeType": "FunctionDefinition",
            "src": "2938:161:51",
            "nodes": [],
            "body": {
              "id": 45799,
              "nodeType": "Block",
              "src": "3020:79:51",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3055:38:51",
                    "nodeType": "YulBlock",
                    "src": "3055:38:51",
                    "statements": [
                      {
                        "nativeSrc": "3069:14:51",
                        "nodeType": "YulAssignment",
                        "src": "3069:14:51",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "3079:4:51",
                          "nodeType": "YulIdentifier",
                          "src": "3079:4:51"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3069:6:51",
                            "nodeType": "YulIdentifier",
                            "src": "3069:6:51"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45796,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3069:6:51",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45792,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3079:4:51",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45798,
                  "nodeType": "InlineAssembly",
                  "src": "3030:63:51"
                }
              ]
            },
            "documentation": {
              "id": 45790,
              "nodeType": "StructuredDocumentation",
              "src": "2848:85:51",
              "text": " @dev Returns a `Int256Slot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getInt256Slot",
            "nameLocation": "2947:13:51",
            "parameters": {
              "id": 45793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45792,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2969:4:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45800,
                  "src": "2961:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45791,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2961:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2960:14:51"
            },
            "returnParameters": {
              "id": 45797,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45796,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3017:1:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45800,
                  "src": "2998:20:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Int256Slot_$45739_storage_ptr",
                    "typeString": "struct StorageSlot.Int256Slot"
                  },
                  "typeName": {
                    "id": 45795,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 45794,
                      "name": "Int256Slot",
                      "nameLocations": [
                        "2998:10:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 45739,
                      "src": "2998:10:51"
                    },
                    "referencedDeclaration": 45739,
                    "src": "2998:10:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Int256Slot_$45739_storage_ptr",
                      "typeString": "struct StorageSlot.Int256Slot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2997:22:51"
            },
            "scope": 45845,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45811,
            "nodeType": "FunctionDefinition",
            "src": "3195:161:51",
            "nodes": [],
            "body": {
              "id": 45810,
              "nodeType": "Block",
              "src": "3277:79:51",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3312:38:51",
                    "nodeType": "YulBlock",
                    "src": "3312:38:51",
                    "statements": [
                      {
                        "nativeSrc": "3326:14:51",
                        "nodeType": "YulAssignment",
                        "src": "3326:14:51",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "3336:4:51",
                          "nodeType": "YulIdentifier",
                          "src": "3336:4:51"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3326:6:51",
                            "nodeType": "YulIdentifier",
                            "src": "3326:6:51"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45807,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3326:6:51",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45803,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3336:4:51",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45809,
                  "nodeType": "InlineAssembly",
                  "src": "3287:63:51"
                }
              ]
            },
            "documentation": {
              "id": 45801,
              "nodeType": "StructuredDocumentation",
              "src": "3105:85:51",
              "text": " @dev Returns a `StringSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getStringSlot",
            "nameLocation": "3204:13:51",
            "parameters": {
              "id": 45804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45803,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3226:4:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45811,
                  "src": "3218:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45802,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3218:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3217:14:51"
            },
            "returnParameters": {
              "id": 45808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45807,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3274:1:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45811,
                  "src": "3255:20:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StringSlot_$45742_storage_ptr",
                    "typeString": "struct StorageSlot.StringSlot"
                  },
                  "typeName": {
                    "id": 45806,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 45805,
                      "name": "StringSlot",
                      "nameLocations": [
                        "3255:10:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 45742,
                      "src": "3255:10:51"
                    },
                    "referencedDeclaration": 45742,
                    "src": "3255:10:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StringSlot_$45742_storage_ptr",
                      "typeString": "struct StorageSlot.StringSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3254:22:51"
            },
            "scope": 45845,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45822,
            "nodeType": "FunctionDefinition",
            "src": "3468:175:51",
            "nodes": [],
            "body": {
              "id": 45821,
              "nodeType": "Block",
              "src": "3558:85:51",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3593:44:51",
                    "nodeType": "YulBlock",
                    "src": "3593:44:51",
                    "statements": [
                      {
                        "nativeSrc": "3607:20:51",
                        "nodeType": "YulAssignment",
                        "src": "3607:20:51",
                        "value": {
                          "name": "store.slot",
                          "nativeSrc": "3617:10:51",
                          "nodeType": "YulIdentifier",
                          "src": "3617:10:51"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3607:6:51",
                            "nodeType": "YulIdentifier",
                            "src": "3607:6:51"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45818,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3607:6:51",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45814,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3617:10:51",
                      "suffix": "slot",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45820,
                  "nodeType": "InlineAssembly",
                  "src": "3568:69:51"
                }
              ]
            },
            "documentation": {
              "id": 45812,
              "nodeType": "StructuredDocumentation",
              "src": "3362:101:51",
              "text": " @dev Returns an `StringSlot` representation of the string storage pointer `store`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getStringSlot",
            "nameLocation": "3477:13:51",
            "parameters": {
              "id": 45815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45814,
                  "mutability": "mutable",
                  "name": "store",
                  "nameLocation": "3506:5:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45822,
                  "src": "3491:20:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 45813,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3491:6:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3490:22:51"
            },
            "returnParameters": {
              "id": 45819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45818,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3555:1:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45822,
                  "src": "3536:20:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_StringSlot_$45742_storage_ptr",
                    "typeString": "struct StorageSlot.StringSlot"
                  },
                  "typeName": {
                    "id": 45817,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 45816,
                      "name": "StringSlot",
                      "nameLocations": [
                        "3536:10:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 45742,
                      "src": "3536:10:51"
                    },
                    "referencedDeclaration": 45742,
                    "src": "3536:10:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StringSlot_$45742_storage_ptr",
                      "typeString": "struct StorageSlot.StringSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3535:22:51"
            },
            "scope": 45845,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45833,
            "nodeType": "FunctionDefinition",
            "src": "3738:159:51",
            "nodes": [],
            "body": {
              "id": 45832,
              "nodeType": "Block",
              "src": "3818:79:51",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3853:38:51",
                    "nodeType": "YulBlock",
                    "src": "3853:38:51",
                    "statements": [
                      {
                        "nativeSrc": "3867:14:51",
                        "nodeType": "YulAssignment",
                        "src": "3867:14:51",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "3877:4:51",
                          "nodeType": "YulIdentifier",
                          "src": "3877:4:51"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "3867:6:51",
                            "nodeType": "YulIdentifier",
                            "src": "3867:6:51"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45829,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "3867:6:51",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45825,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3877:4:51",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45831,
                  "nodeType": "InlineAssembly",
                  "src": "3828:63:51"
                }
              ]
            },
            "documentation": {
              "id": 45823,
              "nodeType": "StructuredDocumentation",
              "src": "3649:84:51",
              "text": " @dev Returns a `BytesSlot` with member `value` located at `slot`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBytesSlot",
            "nameLocation": "3747:12:51",
            "parameters": {
              "id": 45826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45825,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3768:4:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45833,
                  "src": "3760:12:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45824,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3760:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3759:14:51"
            },
            "returnParameters": {
              "id": 45830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45829,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "3815:1:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45833,
                  "src": "3797:19:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_BytesSlot_$45745_storage_ptr",
                    "typeString": "struct StorageSlot.BytesSlot"
                  },
                  "typeName": {
                    "id": 45828,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 45827,
                      "name": "BytesSlot",
                      "nameLocations": [
                        "3797:9:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 45745,
                      "src": "3797:9:51"
                    },
                    "referencedDeclaration": 45745,
                    "src": "3797:9:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BytesSlot_$45745_storage_ptr",
                      "typeString": "struct StorageSlot.BytesSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3796:21:51"
            },
            "scope": 45845,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45844,
            "nodeType": "FunctionDefinition",
            "src": "4007:172:51",
            "nodes": [],
            "body": {
              "id": 45843,
              "nodeType": "Block",
              "src": "4094:85:51",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4129:44:51",
                    "nodeType": "YulBlock",
                    "src": "4129:44:51",
                    "statements": [
                      {
                        "nativeSrc": "4143:20:51",
                        "nodeType": "YulAssignment",
                        "src": "4143:20:51",
                        "value": {
                          "name": "store.slot",
                          "nativeSrc": "4153:10:51",
                          "nodeType": "YulIdentifier",
                          "src": "4153:10:51"
                        },
                        "variableNames": [
                          {
                            "name": "r.slot",
                            "nativeSrc": "4143:6:51",
                            "nodeType": "YulIdentifier",
                            "src": "4143:6:51"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45840,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "4143:6:51",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45836,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "4153:10:51",
                      "suffix": "slot",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45842,
                  "nodeType": "InlineAssembly",
                  "src": "4104:69:51"
                }
              ]
            },
            "documentation": {
              "id": 45834,
              "nodeType": "StructuredDocumentation",
              "src": "3903:99:51",
              "text": " @dev Returns an `BytesSlot` representation of the bytes storage pointer `store`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getBytesSlot",
            "nameLocation": "4016:12:51",
            "parameters": {
              "id": 45837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45836,
                  "mutability": "mutable",
                  "name": "store",
                  "nameLocation": "4043:5:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45844,
                  "src": "4029:19:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 45835,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4029:5:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4028:21:51"
            },
            "returnParameters": {
              "id": 45841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45840,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "4091:1:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 45844,
                  "src": "4073:19:51",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_BytesSlot_$45745_storage_ptr",
                    "typeString": "struct StorageSlot.BytesSlot"
                  },
                  "typeName": {
                    "id": 45839,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 45838,
                      "name": "BytesSlot",
                      "nameLocations": [
                        "4073:9:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 45745,
                      "src": "4073:9:51"
                    },
                    "referencedDeclaration": 45745,
                    "src": "4073:9:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_BytesSlot_$45745_storage_ptr",
                      "typeString": "struct StorageSlot.BytesSlot"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4072:21:51"
            },
            "scope": 45845,
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
          "id": 45724,
          "nodeType": "StructuredDocumentation",
          "src": "219:1187:51",
          "text": " @dev Library for reading and writing primitive types to specific storage slots.\n Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\n This library helps with reading and writing to such slots without the need for inline assembly.\n The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\n Example usage to set ERC-1967 implementation slot:\n ```solidity\n contract ERC1967 {\n     // Define the slot. Alternatively, use the SlotDerivation library to derive the slot.\n     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\n     function _getImplementation() internal view returns (address) {\n         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\n     }\n     function _setImplementation(address newImplementation) internal {\n         require(newImplementation.code.length > 0);\n         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\n     }\n }\n ```\n TIP: Consider using this library along with {SlotDerivation}."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          45845
        ],
        "name": "StorageSlot",
        "nameLocation": "1415:11:51",
        "scope": 45846,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 51
} as const;