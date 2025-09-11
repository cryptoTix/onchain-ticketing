export const SlotDerivation = {
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c3f51f0b17fd0cb70322accc7b2a7c6d505b8683bdc1a45b004ad3b773e1f2d864736f6c634300081a0033",
    "sourceMap": "1598:3723:50:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1598:3723:50;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c3f51f0b17fd0cb70322accc7b2a7c6d505b8683bdc1a45b004ad3b773e1f2d864736f6c634300081a0033",
    "sourceMap": "1598:3723:50:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Library for computing storage (and transient storage) locations from namespaces and deriving slots corresponding to standard patterns. The derivation method for array and mapping matches the storage layout used by the solidity language / compiler. See https://docs.soliditylang.org/en/v0.8.20/internals/layout_in_storage.html#mappings-and-dynamic-arrays[Solidity docs for mappings and dynamic arrays.]. Example usage: ```solidity contract Example {     // Add the library methods     using StorageSlot for bytes32;     using SlotDerivation for bytes32;     // Declare a namespace     string private constant _NAMESPACE = \\\"<namespace>\\\" // eg. OpenZeppelin.Slot     function setValueInNamespace(uint256 key, address newValue) internal {         _NAMESPACE.erc7201Slot().deriveMapping(key).getAddressSlot().value = newValue;     }     function getValueInNamespace(uint256 key) internal view returns (address) {         return _NAMESPACE.erc7201Slot().deriveMapping(key).getAddressSlot().value;     } } ``` TIP: Consider using this library along with {StorageSlot}. NOTE: This library provides a way to manipulate storage locations in a non-standard way. Tooling for checking upgrade safety will ignore the slots accessed through this library. _Available since v5.1._\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/SlotDerivation.sol\":\"SlotDerivation\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/SlotDerivation.sol\":{\"keccak256\":\"0x8447b57b63810fe2e367c09496a966f143ec0e825d71ddb9fce2506cff84b618\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://996cb48f793bf151555045b37138e36b3cdb31d6bc6552d3149285260be00cfb\",\"dweb:/ipfs/QmcLaTTMNVbkMx58xhkp6GeFt4V3GtSyupZuaKG3vYW2Zc\"]}},\"version\":1}",
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
        "node_modules/@openzeppelin/contracts/utils/SlotDerivation.sol": "SlotDerivation"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/SlotDerivation.sol": {
        "keccak256": "0x8447b57b63810fe2e367c09496a966f143ec0e825d71ddb9fce2506cff84b618",
        "urls": [
          "bzz-raw://996cb48f793bf151555045b37138e36b3cdb31d6bc6552d3149285260be00cfb",
          "dweb:/ipfs/QmcLaTTMNVbkMx58xhkp6GeFt4V3GtSyupZuaKG3vYW2Zc"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/SlotDerivation.sol",
    "id": 45722,
    "exportedSymbols": {
      "SlotDerivation": [
        45721
      ]
    },
    "nodeType": "SourceUnit",
    "src": "199:5123:50",
    "nodes": [
      {
        "id": 45593,
        "nodeType": "PragmaDirective",
        "src": "199:24:50",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 45721,
        "nodeType": "ContractDefinition",
        "src": "1598:3723:50",
        "nodes": [
          {
            "id": 45604,
            "nodeType": "FunctionDefinition",
            "src": "1706:277:50",
            "nodes": [],
            "body": {
              "id": 45603,
              "nodeType": "Block",
              "src": "1789:194:50",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1824:153:50",
                    "nodeType": "YulBlock",
                    "src": "1824:153:50",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1845:4:50",
                              "nodeType": "YulLiteral",
                              "src": "1845:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "namespace",
                                          "nativeSrc": "1869:9:50",
                                          "nodeType": "YulIdentifier",
                                          "src": "1869:9:50"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "1880:4:50",
                                          "nodeType": "YulLiteral",
                                          "src": "1880:4:50",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "1865:3:50",
                                        "nodeType": "YulIdentifier",
                                        "src": "1865:3:50"
                                      },
                                      "nativeSrc": "1865:20:50",
                                      "nodeType": "YulFunctionCall",
                                      "src": "1865:20:50"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "namespace",
                                          "nativeSrc": "1893:9:50",
                                          "nodeType": "YulIdentifier",
                                          "src": "1893:9:50"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "1887:5:50",
                                        "nodeType": "YulIdentifier",
                                        "src": "1887:5:50"
                                      },
                                      "nativeSrc": "1887:16:50",
                                      "nodeType": "YulFunctionCall",
                                      "src": "1887:16:50"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "keccak256",
                                    "nativeSrc": "1855:9:50",
                                    "nodeType": "YulIdentifier",
                                    "src": "1855:9:50"
                                  },
                                  "nativeSrc": "1855:49:50",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1855:49:50"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1906:1:50",
                                  "nodeType": "YulLiteral",
                                  "src": "1906:1:50",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "1851:3:50",
                                "nodeType": "YulIdentifier",
                                "src": "1851:3:50"
                              },
                              "nativeSrc": "1851:57:50",
                              "nodeType": "YulFunctionCall",
                              "src": "1851:57:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "1838:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "1838:6:50"
                          },
                          "nativeSrc": "1838:71:50",
                          "nodeType": "YulFunctionCall",
                          "src": "1838:71:50"
                        },
                        "nativeSrc": "1838:71:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "1838:71:50"
                      },
                      {
                        "nativeSrc": "1922:45:50",
                        "nodeType": "YulAssignment",
                        "src": "1922:45:50",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1944:4:50",
                                  "nodeType": "YulLiteral",
                                  "src": "1944:4:50",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1950:4:50",
                                  "nodeType": "YulLiteral",
                                  "src": "1950:4:50",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "1934:9:50",
                                "nodeType": "YulIdentifier",
                                "src": "1934:9:50"
                              },
                              "nativeSrc": "1934:21:50",
                              "nodeType": "YulFunctionCall",
                              "src": "1934:21:50"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1961:4:50",
                                  "nodeType": "YulLiteral",
                                  "src": "1961:4:50",
                                  "type": "",
                                  "value": "0xff"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nativeSrc": "1957:3:50",
                                "nodeType": "YulIdentifier",
                                "src": "1957:3:50"
                              },
                              "nativeSrc": "1957:9:50",
                              "nodeType": "YulFunctionCall",
                              "src": "1957:9:50"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "1930:3:50",
                            "nodeType": "YulIdentifier",
                            "src": "1930:3:50"
                          },
                          "nativeSrc": "1930:37:50",
                          "nodeType": "YulFunctionCall",
                          "src": "1930:37:50"
                        },
                        "variableNames": [
                          {
                            "name": "slot",
                            "nativeSrc": "1922:4:50",
                            "nodeType": "YulIdentifier",
                            "src": "1922:4:50"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45597,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1869:9:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45597,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1893:9:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45600,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1922:4:50",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45602,
                  "nodeType": "InlineAssembly",
                  "src": "1799:178:50"
                }
              ]
            },
            "documentation": {
              "id": 45595,
              "nodeType": "StructuredDocumentation",
              "src": "1627:74:50",
              "text": " @dev Derive an ERC-7201 slot from a string (namespace)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "erc7201Slot",
            "nameLocation": "1715:11:50",
            "parameters": {
              "id": 45598,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45597,
                  "mutability": "mutable",
                  "name": "namespace",
                  "nameLocation": "1741:9:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45604,
                  "src": "1727:23:50",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 45596,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1727:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1726:25:50"
            },
            "returnParameters": {
              "id": 45601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45600,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "1783:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45604,
                  "src": "1775:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45599,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1775:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1774:14:50"
            },
            "scope": 45721,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45626,
            "nodeType": "FunctionDefinition",
            "src": "2093:168:50",
            "nodes": [],
            "body": {
              "id": 45625,
              "nodeType": "Block",
              "src": "2175:86:50",
              "nodes": [],
              "statements": [
                {
                  "id": 45624,
                  "nodeType": "UncheckedBlock",
                  "src": "2185:70:50",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 45621,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 45618,
                                  "name": "slot",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 45607,
                                  "src": "2232:4:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 45617,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2224:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 45616,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2224:7:50",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 45619,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2224:13:50",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "id": 45620,
                              "name": "pos",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 45609,
                              "src": "2240:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2224:19:50",
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
                          "id": 45615,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2216:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 45614,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "2216:7:50",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 45622,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2216:28:50",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "functionReturnParameters": 45613,
                      "id": 45623,
                      "nodeType": "Return",
                      "src": "2209:35:50"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 45605,
              "nodeType": "StructuredDocumentation",
              "src": "1989:99:50",
              "text": " @dev Add an offset to a slot to get the n-th element of a structure or an array."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "offset",
            "nameLocation": "2102:6:50",
            "parameters": {
              "id": 45610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45607,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2117:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45626,
                  "src": "2109:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45606,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2109:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45609,
                  "mutability": "mutable",
                  "name": "pos",
                  "nameLocation": "2131:3:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45626,
                  "src": "2123:11:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45608,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2108:27:50"
            },
            "returnParameters": {
              "id": 45613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45612,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "2167:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45626,
                  "src": "2159:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45611,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2159:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2158:16:50"
            },
            "scope": 45721,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45636,
            "nodeType": "FunctionDefinition",
            "src": "2390:201:50",
            "nodes": [],
            "body": {
              "id": 45635,
              "nodeType": "Block",
              "src": "2464:127:50",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2499:86:50",
                    "nodeType": "YulBlock",
                    "src": "2499:86:50",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2520:4:50",
                              "nodeType": "YulLiteral",
                              "src": "2520:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "2526:4:50",
                              "nodeType": "YulIdentifier",
                              "src": "2526:4:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2513:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "2513:6:50"
                          },
                          "nativeSrc": "2513:18:50",
                          "nodeType": "YulFunctionCall",
                          "src": "2513:18:50"
                        },
                        "nativeSrc": "2513:18:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "2513:18:50"
                      },
                      {
                        "nativeSrc": "2544:31:50",
                        "nodeType": "YulAssignment",
                        "src": "2544:31:50",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2564:4:50",
                              "nodeType": "YulLiteral",
                              "src": "2564:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2570:4:50",
                              "nodeType": "YulLiteral",
                              "src": "2570:4:50",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "2554:9:50",
                            "nodeType": "YulIdentifier",
                            "src": "2554:9:50"
                          },
                          "nativeSrc": "2554:21:50",
                          "nodeType": "YulFunctionCall",
                          "src": "2554:21:50"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "2544:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "2544:6:50"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45632,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2544:6:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45629,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2526:4:50",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45634,
                  "nodeType": "InlineAssembly",
                  "src": "2474:111:50"
                }
              ]
            },
            "documentation": {
              "id": 45627,
              "nodeType": "StructuredDocumentation",
              "src": "2267:118:50",
              "text": " @dev Derive the location of the first element in an array from the slot where the length is stored."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveArray",
            "nameLocation": "2399:11:50",
            "parameters": {
              "id": 45630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45629,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2419:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45636,
                  "src": "2411:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45628,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2411:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2410:14:50"
            },
            "returnParameters": {
              "id": 45633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45632,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "2456:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45636,
                  "src": "2448:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45631,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2448:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2447:16:50"
            },
            "scope": 45721,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45648,
            "nodeType": "FunctionDefinition",
            "src": "2680:268:50",
            "nodes": [],
            "body": {
              "id": 45647,
              "nodeType": "Block",
              "src": "2769:179:50",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2804:138:50",
                    "nodeType": "YulBlock",
                    "src": "2804:138:50",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2825:4:50",
                              "nodeType": "YulLiteral",
                              "src": "2825:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "key",
                                  "nativeSrc": "2835:3:50",
                                  "nodeType": "YulIdentifier",
                                  "src": "2835:3:50"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "2844:2:50",
                                      "nodeType": "YulLiteral",
                                      "src": "2844:2:50",
                                      "type": "",
                                      "value": "96"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "2852:1:50",
                                          "nodeType": "YulLiteral",
                                          "src": "2852:1:50",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "not",
                                        "nativeSrc": "2848:3:50",
                                        "nodeType": "YulIdentifier",
                                        "src": "2848:3:50"
                                      },
                                      "nativeSrc": "2848:6:50",
                                      "nodeType": "YulFunctionCall",
                                      "src": "2848:6:50"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nativeSrc": "2840:3:50",
                                    "nodeType": "YulIdentifier",
                                    "src": "2840:3:50"
                                  },
                                  "nativeSrc": "2840:15:50",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2840:15:50"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "2831:3:50",
                                "nodeType": "YulIdentifier",
                                "src": "2831:3:50"
                              },
                              "nativeSrc": "2831:25:50",
                              "nodeType": "YulFunctionCall",
                              "src": "2831:25:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2818:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "2818:6:50"
                          },
                          "nativeSrc": "2818:39:50",
                          "nodeType": "YulFunctionCall",
                          "src": "2818:39:50"
                        },
                        "nativeSrc": "2818:39:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "2818:39:50"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2877:4:50",
                              "nodeType": "YulLiteral",
                              "src": "2877:4:50",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "2883:4:50",
                              "nodeType": "YulIdentifier",
                              "src": "2883:4:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2870:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "2870:6:50"
                          },
                          "nativeSrc": "2870:18:50",
                          "nodeType": "YulFunctionCall",
                          "src": "2870:18:50"
                        },
                        "nativeSrc": "2870:18:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "2870:18:50"
                      },
                      {
                        "nativeSrc": "2901:31:50",
                        "nodeType": "YulAssignment",
                        "src": "2901:31:50",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2921:4:50",
                              "nodeType": "YulLiteral",
                              "src": "2921:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2927:4:50",
                              "nodeType": "YulLiteral",
                              "src": "2927:4:50",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "2911:9:50",
                            "nodeType": "YulIdentifier",
                            "src": "2911:9:50"
                          },
                          "nativeSrc": "2911:21:50",
                          "nodeType": "YulFunctionCall",
                          "src": "2911:21:50"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "2901:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "2901:6:50"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45641,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2835:3:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45644,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2901:6:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45639,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2883:4:50",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45646,
                  "nodeType": "InlineAssembly",
                  "src": "2779:163:50"
                }
              ]
            },
            "documentation": {
              "id": 45637,
              "nodeType": "StructuredDocumentation",
              "src": "2597:78:50",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "2689:13:50",
            "parameters": {
              "id": 45642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45639,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2711:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45648,
                  "src": "2703:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45638,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2703:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45641,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2725:3:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45648,
                  "src": "2717:11:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 45640,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2717:7:50",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2702:27:50"
            },
            "returnParameters": {
              "id": 45645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45644,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "2761:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45648,
                  "src": "2753:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45643,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2753:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2752:16:50"
            },
            "scope": 45721,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45660,
            "nodeType": "FunctionDefinition",
            "src": "3037:259:50",
            "nodes": [],
            "body": {
              "id": 45659,
              "nodeType": "Block",
              "src": "3123:173:50",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3158:132:50",
                    "nodeType": "YulBlock",
                    "src": "3158:132:50",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3179:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3179:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "key",
                                      "nativeSrc": "3199:3:50",
                                      "nodeType": "YulIdentifier",
                                      "src": "3199:3:50"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nativeSrc": "3192:6:50",
                                    "nodeType": "YulIdentifier",
                                    "src": "3192:6:50"
                                  },
                                  "nativeSrc": "3192:11:50",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3192:11:50"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "3185:6:50",
                                "nodeType": "YulIdentifier",
                                "src": "3185:6:50"
                              },
                              "nativeSrc": "3185:19:50",
                              "nodeType": "YulFunctionCall",
                              "src": "3185:19:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3172:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "3172:6:50"
                          },
                          "nativeSrc": "3172:33:50",
                          "nodeType": "YulFunctionCall",
                          "src": "3172:33:50"
                        },
                        "nativeSrc": "3172:33:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "3172:33:50"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3225:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3225:4:50",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "3231:4:50",
                              "nodeType": "YulIdentifier",
                              "src": "3231:4:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3218:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "3218:6:50"
                          },
                          "nativeSrc": "3218:18:50",
                          "nodeType": "YulFunctionCall",
                          "src": "3218:18:50"
                        },
                        "nativeSrc": "3218:18:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "3218:18:50"
                      },
                      {
                        "nativeSrc": "3249:31:50",
                        "nodeType": "YulAssignment",
                        "src": "3249:31:50",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3269:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3269:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3275:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3275:4:50",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "3259:9:50",
                            "nodeType": "YulIdentifier",
                            "src": "3259:9:50"
                          },
                          "nativeSrc": "3259:21:50",
                          "nodeType": "YulFunctionCall",
                          "src": "3259:21:50"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "3249:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "3249:6:50"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45653,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3199:3:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45656,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3249:6:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45651,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3231:4:50",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45658,
                  "nodeType": "InlineAssembly",
                  "src": "3133:157:50"
                }
              ]
            },
            "documentation": {
              "id": 45649,
              "nodeType": "StructuredDocumentation",
              "src": "2954:78:50",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "3046:13:50",
            "parameters": {
              "id": 45654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45651,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3068:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45660,
                  "src": "3060:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45650,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3060:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45653,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3079:3:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45660,
                  "src": "3074:8:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 45652,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3074:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3059:24:50"
            },
            "returnParameters": {
              "id": 45657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45656,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "3115:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45660,
                  "src": "3107:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45655,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3107:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3106:16:50"
            },
            "scope": 45721,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45672,
            "nodeType": "FunctionDefinition",
            "src": "3385:246:50",
            "nodes": [],
            "body": {
              "id": 45671,
              "nodeType": "Block",
              "src": "3474:157:50",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3509:116:50",
                    "nodeType": "YulBlock",
                    "src": "3509:116:50",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3530:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3530:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "key",
                              "nativeSrc": "3536:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "3536:3:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3523:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "3523:6:50"
                          },
                          "nativeSrc": "3523:17:50",
                          "nodeType": "YulFunctionCall",
                          "src": "3523:17:50"
                        },
                        "nativeSrc": "3523:17:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "3523:17:50"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3560:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3560:4:50",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "3566:4:50",
                              "nodeType": "YulIdentifier",
                              "src": "3566:4:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3553:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "3553:6:50"
                          },
                          "nativeSrc": "3553:18:50",
                          "nodeType": "YulFunctionCall",
                          "src": "3553:18:50"
                        },
                        "nativeSrc": "3553:18:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "3553:18:50"
                      },
                      {
                        "nativeSrc": "3584:31:50",
                        "nodeType": "YulAssignment",
                        "src": "3584:31:50",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3604:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3604:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3610:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3610:4:50",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "3594:9:50",
                            "nodeType": "YulIdentifier",
                            "src": "3594:9:50"
                          },
                          "nativeSrc": "3594:21:50",
                          "nodeType": "YulFunctionCall",
                          "src": "3594:21:50"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "3584:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "3584:6:50"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45665,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3536:3:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45668,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3584:6:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45663,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3566:4:50",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45670,
                  "nodeType": "InlineAssembly",
                  "src": "3484:141:50"
                }
              ]
            },
            "documentation": {
              "id": 45661,
              "nodeType": "StructuredDocumentation",
              "src": "3302:78:50",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "3394:13:50",
            "parameters": {
              "id": 45666,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45663,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3416:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45672,
                  "src": "3408:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45662,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3408:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45665,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3430:3:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45672,
                  "src": "3422:11:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45664,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3422:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3407:27:50"
            },
            "returnParameters": {
              "id": 45669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45668,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "3466:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45672,
                  "src": "3458:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45667,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3458:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3457:16:50"
            },
            "scope": 45721,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45684,
            "nodeType": "FunctionDefinition",
            "src": "3720:246:50",
            "nodes": [],
            "body": {
              "id": 45683,
              "nodeType": "Block",
              "src": "3809:157:50",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3844:116:50",
                    "nodeType": "YulBlock",
                    "src": "3844:116:50",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3865:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3865:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "key",
                              "nativeSrc": "3871:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "3871:3:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3858:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "3858:6:50"
                          },
                          "nativeSrc": "3858:17:50",
                          "nodeType": "YulFunctionCall",
                          "src": "3858:17:50"
                        },
                        "nativeSrc": "3858:17:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "3858:17:50"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3895:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3895:4:50",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "3901:4:50",
                              "nodeType": "YulIdentifier",
                              "src": "3901:4:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3888:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "3888:6:50"
                          },
                          "nativeSrc": "3888:18:50",
                          "nodeType": "YulFunctionCall",
                          "src": "3888:18:50"
                        },
                        "nativeSrc": "3888:18:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "3888:18:50"
                      },
                      {
                        "nativeSrc": "3919:31:50",
                        "nodeType": "YulAssignment",
                        "src": "3919:31:50",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3939:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3939:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3945:4:50",
                              "nodeType": "YulLiteral",
                              "src": "3945:4:50",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "3929:9:50",
                            "nodeType": "YulIdentifier",
                            "src": "3929:9:50"
                          },
                          "nativeSrc": "3929:21:50",
                          "nodeType": "YulFunctionCall",
                          "src": "3929:21:50"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "3919:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "3919:6:50"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45677,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3871:3:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45680,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3919:6:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45675,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3901:4:50",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45682,
                  "nodeType": "InlineAssembly",
                  "src": "3819:141:50"
                }
              ]
            },
            "documentation": {
              "id": 45673,
              "nodeType": "StructuredDocumentation",
              "src": "3637:78:50",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "3729:13:50",
            "parameters": {
              "id": 45678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45675,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3751:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45684,
                  "src": "3743:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45674,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3743:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45677,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3765:3:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45684,
                  "src": "3757:11:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3757:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3742:27:50"
            },
            "returnParameters": {
              "id": 45681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45680,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "3801:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45684,
                  "src": "3793:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45679,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3793:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3792:16:50"
            },
            "scope": 45721,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45696,
            "nodeType": "FunctionDefinition",
            "src": "4055:245:50",
            "nodes": [],
            "body": {
              "id": 45695,
              "nodeType": "Block",
              "src": "4143:157:50",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4178:116:50",
                    "nodeType": "YulBlock",
                    "src": "4178:116:50",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4199:4:50",
                              "nodeType": "YulLiteral",
                              "src": "4199:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "key",
                              "nativeSrc": "4205:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "4205:3:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4192:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "4192:6:50"
                          },
                          "nativeSrc": "4192:17:50",
                          "nodeType": "YulFunctionCall",
                          "src": "4192:17:50"
                        },
                        "nativeSrc": "4192:17:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "4192:17:50"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4229:4:50",
                              "nodeType": "YulLiteral",
                              "src": "4229:4:50",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "4235:4:50",
                              "nodeType": "YulIdentifier",
                              "src": "4235:4:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4222:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "4222:6:50"
                          },
                          "nativeSrc": "4222:18:50",
                          "nodeType": "YulFunctionCall",
                          "src": "4222:18:50"
                        },
                        "nativeSrc": "4222:18:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "4222:18:50"
                      },
                      {
                        "nativeSrc": "4253:31:50",
                        "nodeType": "YulAssignment",
                        "src": "4253:31:50",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4273:4:50",
                              "nodeType": "YulLiteral",
                              "src": "4273:4:50",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4279:4:50",
                              "nodeType": "YulLiteral",
                              "src": "4279:4:50",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "4263:9:50",
                            "nodeType": "YulIdentifier",
                            "src": "4263:9:50"
                          },
                          "nativeSrc": "4263:21:50",
                          "nodeType": "YulFunctionCall",
                          "src": "4263:21:50"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "4253:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "4253:6:50"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45689,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4205:3:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45692,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4253:6:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45687,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4235:4:50",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45694,
                  "nodeType": "InlineAssembly",
                  "src": "4153:141:50"
                }
              ]
            },
            "documentation": {
              "id": 45685,
              "nodeType": "StructuredDocumentation",
              "src": "3972:78:50",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "4064:13:50",
            "parameters": {
              "id": 45690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45687,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "4086:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45696,
                  "src": "4078:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45686,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4078:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45689,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4099:3:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45696,
                  "src": "4092:10:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 45688,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4092:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4077:26:50"
            },
            "returnParameters": {
              "id": 45693,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45692,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4135:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45696,
                  "src": "4127:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45691,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4127:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4126:16:50"
            },
            "scope": 45721,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45708,
            "nodeType": "FunctionDefinition",
            "src": "4389:421:50",
            "nodes": [],
            "body": {
              "id": 45707,
              "nodeType": "Block",
              "src": "4484:326:50",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4519:285:50",
                    "nodeType": "YulBlock",
                    "src": "4519:285:50",
                    "statements": [
                      {
                        "nativeSrc": "4533:24:50",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4533:24:50",
                        "value": {
                          "arguments": [
                            {
                              "name": "key",
                              "nativeSrc": "4553:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "4553:3:50"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "4547:5:50",
                            "nodeType": "YulIdentifier",
                            "src": "4547:5:50"
                          },
                          "nativeSrc": "4547:10:50",
                          "nodeType": "YulFunctionCall",
                          "src": "4547:10:50"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nativeSrc": "4537:6:50",
                            "nodeType": "YulTypedName",
                            "src": "4537:6:50",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "4570:27:50",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4570:27:50",
                        "value": {
                          "arguments": [
                            {
                              "name": "key",
                              "nativeSrc": "4587:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "4587:3:50"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4592:4:50",
                              "nodeType": "YulLiteral",
                              "src": "4592:4:50",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "4583:3:50",
                            "nodeType": "YulIdentifier",
                            "src": "4583:3:50"
                          },
                          "nativeSrc": "4583:14:50",
                          "nodeType": "YulFunctionCall",
                          "src": "4583:14:50"
                        },
                        "variables": [
                          {
                            "name": "begin",
                            "nativeSrc": "4574:5:50",
                            "nodeType": "YulTypedName",
                            "src": "4574:5:50",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "4610:29:50",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4610:29:50",
                        "value": {
                          "arguments": [
                            {
                              "name": "begin",
                              "nativeSrc": "4625:5:50",
                              "nodeType": "YulIdentifier",
                              "src": "4625:5:50"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "4632:6:50",
                              "nodeType": "YulIdentifier",
                              "src": "4632:6:50"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "4621:3:50",
                            "nodeType": "YulIdentifier",
                            "src": "4621:3:50"
                          },
                          "nativeSrc": "4621:18:50",
                          "nodeType": "YulFunctionCall",
                          "src": "4621:18:50"
                        },
                        "variables": [
                          {
                            "name": "end",
                            "nativeSrc": "4614:3:50",
                            "nodeType": "YulTypedName",
                            "src": "4614:3:50",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "4652:23:50",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4652:23:50",
                        "value": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "4671:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "4671:3:50"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "4665:5:50",
                            "nodeType": "YulIdentifier",
                            "src": "4665:5:50"
                          },
                          "nativeSrc": "4665:10:50",
                          "nodeType": "YulFunctionCall",
                          "src": "4665:10:50"
                        },
                        "variables": [
                          {
                            "name": "cache",
                            "nativeSrc": "4656:5:50",
                            "nodeType": "YulTypedName",
                            "src": "4656:5:50",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "4695:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "4695:3:50"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "4700:4:50",
                              "nodeType": "YulIdentifier",
                              "src": "4700:4:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4688:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "4688:6:50"
                          },
                          "nativeSrc": "4688:17:50",
                          "nodeType": "YulFunctionCall",
                          "src": "4688:17:50"
                        },
                        "nativeSrc": "4688:17:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "4688:17:50"
                      },
                      {
                        "nativeSrc": "4718:45:50",
                        "nodeType": "YulAssignment",
                        "src": "4718:45:50",
                        "value": {
                          "arguments": [
                            {
                              "name": "begin",
                              "nativeSrc": "4738:5:50",
                              "nodeType": "YulIdentifier",
                              "src": "4738:5:50"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "4749:6:50",
                                  "nodeType": "YulIdentifier",
                                  "src": "4749:6:50"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4757:4:50",
                                  "nodeType": "YulLiteral",
                                  "src": "4757:4:50",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "4745:3:50",
                                "nodeType": "YulIdentifier",
                                "src": "4745:3:50"
                              },
                              "nativeSrc": "4745:17:50",
                              "nodeType": "YulFunctionCall",
                              "src": "4745:17:50"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "4728:9:50",
                            "nodeType": "YulIdentifier",
                            "src": "4728:9:50"
                          },
                          "nativeSrc": "4728:35:50",
                          "nodeType": "YulFunctionCall",
                          "src": "4728:35:50"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "4718:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "4718:6:50"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "4783:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "4783:3:50"
                            },
                            {
                              "name": "cache",
                              "nativeSrc": "4788:5:50",
                              "nodeType": "YulIdentifier",
                              "src": "4788:5:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4776:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "4776:6:50"
                          },
                          "nativeSrc": "4776:18:50",
                          "nodeType": "YulFunctionCall",
                          "src": "4776:18:50"
                        },
                        "nativeSrc": "4776:18:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "4776:18:50"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45701,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4553:3:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45701,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4587:3:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45704,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4718:6:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45699,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4700:4:50",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45706,
                  "nodeType": "InlineAssembly",
                  "src": "4494:310:50"
                }
              ]
            },
            "documentation": {
              "id": 45697,
              "nodeType": "StructuredDocumentation",
              "src": "4306:78:50",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "4398:13:50",
            "parameters": {
              "id": 45702,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45699,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "4420:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45708,
                  "src": "4412:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45698,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4412:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45701,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4440:3:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45708,
                  "src": "4426:17:50",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 45700,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4426:6:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4411:33:50"
            },
            "returnParameters": {
              "id": 45705,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45704,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4476:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45708,
                  "src": "4468:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45703,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4468:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4467:16:50"
            },
            "scope": 45721,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 45720,
            "nodeType": "FunctionDefinition",
            "src": "4899:420:50",
            "nodes": [],
            "body": {
              "id": 45719,
              "nodeType": "Block",
              "src": "4993:326:50",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "5028:285:50",
                    "nodeType": "YulBlock",
                    "src": "5028:285:50",
                    "statements": [
                      {
                        "nativeSrc": "5042:24:50",
                        "nodeType": "YulVariableDeclaration",
                        "src": "5042:24:50",
                        "value": {
                          "arguments": [
                            {
                              "name": "key",
                              "nativeSrc": "5062:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "5062:3:50"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "5056:5:50",
                            "nodeType": "YulIdentifier",
                            "src": "5056:5:50"
                          },
                          "nativeSrc": "5056:10:50",
                          "nodeType": "YulFunctionCall",
                          "src": "5056:10:50"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nativeSrc": "5046:6:50",
                            "nodeType": "YulTypedName",
                            "src": "5046:6:50",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "5079:27:50",
                        "nodeType": "YulVariableDeclaration",
                        "src": "5079:27:50",
                        "value": {
                          "arguments": [
                            {
                              "name": "key",
                              "nativeSrc": "5096:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "5096:3:50"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5101:4:50",
                              "nodeType": "YulLiteral",
                              "src": "5101:4:50",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5092:3:50",
                            "nodeType": "YulIdentifier",
                            "src": "5092:3:50"
                          },
                          "nativeSrc": "5092:14:50",
                          "nodeType": "YulFunctionCall",
                          "src": "5092:14:50"
                        },
                        "variables": [
                          {
                            "name": "begin",
                            "nativeSrc": "5083:5:50",
                            "nodeType": "YulTypedName",
                            "src": "5083:5:50",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "5119:29:50",
                        "nodeType": "YulVariableDeclaration",
                        "src": "5119:29:50",
                        "value": {
                          "arguments": [
                            {
                              "name": "begin",
                              "nativeSrc": "5134:5:50",
                              "nodeType": "YulIdentifier",
                              "src": "5134:5:50"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "5141:6:50",
                              "nodeType": "YulIdentifier",
                              "src": "5141:6:50"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5130:3:50",
                            "nodeType": "YulIdentifier",
                            "src": "5130:3:50"
                          },
                          "nativeSrc": "5130:18:50",
                          "nodeType": "YulFunctionCall",
                          "src": "5130:18:50"
                        },
                        "variables": [
                          {
                            "name": "end",
                            "nativeSrc": "5123:3:50",
                            "nodeType": "YulTypedName",
                            "src": "5123:3:50",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "5161:23:50",
                        "nodeType": "YulVariableDeclaration",
                        "src": "5161:23:50",
                        "value": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "5180:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "5180:3:50"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "5174:5:50",
                            "nodeType": "YulIdentifier",
                            "src": "5174:5:50"
                          },
                          "nativeSrc": "5174:10:50",
                          "nodeType": "YulFunctionCall",
                          "src": "5174:10:50"
                        },
                        "variables": [
                          {
                            "name": "cache",
                            "nativeSrc": "5165:5:50",
                            "nodeType": "YulTypedName",
                            "src": "5165:5:50",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "5204:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "5204:3:50"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "5209:4:50",
                              "nodeType": "YulIdentifier",
                              "src": "5209:4:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5197:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "5197:6:50"
                          },
                          "nativeSrc": "5197:17:50",
                          "nodeType": "YulFunctionCall",
                          "src": "5197:17:50"
                        },
                        "nativeSrc": "5197:17:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "5197:17:50"
                      },
                      {
                        "nativeSrc": "5227:45:50",
                        "nodeType": "YulAssignment",
                        "src": "5227:45:50",
                        "value": {
                          "arguments": [
                            {
                              "name": "begin",
                              "nativeSrc": "5247:5:50",
                              "nodeType": "YulIdentifier",
                              "src": "5247:5:50"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "5258:6:50",
                                  "nodeType": "YulIdentifier",
                                  "src": "5258:6:50"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5266:4:50",
                                  "nodeType": "YulLiteral",
                                  "src": "5266:4:50",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "5254:3:50",
                                "nodeType": "YulIdentifier",
                                "src": "5254:3:50"
                              },
                              "nativeSrc": "5254:17:50",
                              "nodeType": "YulFunctionCall",
                              "src": "5254:17:50"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "5237:9:50",
                            "nodeType": "YulIdentifier",
                            "src": "5237:9:50"
                          },
                          "nativeSrc": "5237:35:50",
                          "nodeType": "YulFunctionCall",
                          "src": "5237:35:50"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "5227:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "5227:6:50"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "5292:3:50",
                              "nodeType": "YulIdentifier",
                              "src": "5292:3:50"
                            },
                            {
                              "name": "cache",
                              "nativeSrc": "5297:5:50",
                              "nodeType": "YulIdentifier",
                              "src": "5297:5:50"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5285:6:50",
                            "nodeType": "YulIdentifier",
                            "src": "5285:6:50"
                          },
                          "nativeSrc": "5285:18:50",
                          "nodeType": "YulFunctionCall",
                          "src": "5285:18:50"
                        },
                        "nativeSrc": "5285:18:50",
                        "nodeType": "YulExpressionStatement",
                        "src": "5285:18:50"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 45713,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5062:3:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45713,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5096:3:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45716,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5227:6:50",
                      "valueSize": 1
                    },
                    {
                      "declaration": 45711,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5209:4:50",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45718,
                  "nodeType": "InlineAssembly",
                  "src": "5003:310:50"
                }
              ]
            },
            "documentation": {
              "id": 45709,
              "nodeType": "StructuredDocumentation",
              "src": "4816:78:50",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "4908:13:50",
            "parameters": {
              "id": 45714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45711,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "4930:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45720,
                  "src": "4922:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45710,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4922:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45713,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4949:3:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45720,
                  "src": "4936:16:50",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 45712,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4936:5:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4921:32:50"
            },
            "returnParameters": {
              "id": 45717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45716,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4985:6:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 45720,
                  "src": "4977:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 45715,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4977:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4976:16:50"
            },
            "scope": 45721,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SlotDerivation",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 45594,
          "nodeType": "StructuredDocumentation",
          "src": "225:1372:50",
          "text": " @dev Library for computing storage (and transient storage) locations from namespaces and deriving slots\n corresponding to standard patterns. The derivation method for array and mapping matches the storage layout used by\n the solidity language / compiler.\n See https://docs.soliditylang.org/en/v0.8.20/internals/layout_in_storage.html#mappings-and-dynamic-arrays[Solidity docs for mappings and dynamic arrays.].\n Example usage:\n ```solidity\n contract Example {\n     // Add the library methods\n     using StorageSlot for bytes32;\n     using SlotDerivation for bytes32;\n     // Declare a namespace\n     string private constant _NAMESPACE = \"<namespace>\" // eg. OpenZeppelin.Slot\n     function setValueInNamespace(uint256 key, address newValue) internal {\n         _NAMESPACE.erc7201Slot().deriveMapping(key).getAddressSlot().value = newValue;\n     }\n     function getValueInNamespace(uint256 key) internal view returns (address) {\n         return _NAMESPACE.erc7201Slot().deriveMapping(key).getAddressSlot().value;\n     }\n }\n ```\n TIP: Consider using this library along with {StorageSlot}.\n NOTE: This library provides a way to manipulate storage locations in a non-standard way. Tooling for checking\n upgrade safety will ignore the slots accessed through this library.\n _Available since v5.1._"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          45721
        ],
        "name": "SlotDerivation",
        "nameLocation": "1606:14:50",
        "scope": 45722,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 50
} as const;