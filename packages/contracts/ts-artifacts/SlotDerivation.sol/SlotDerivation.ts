export const SlotDerivation = {
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c3f51f0b17fd0cb70322accc7b2a7c6d505b8683bdc1a45b004ad3b773e1f2d864736f6c634300081a0033",
    "sourceMap": "1598:3723:42:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1598:3723:42;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c3f51f0b17fd0cb70322accc7b2a7c6d505b8683bdc1a45b004ad3b773e1f2d864736f6c634300081a0033",
    "sourceMap": "1598:3723:42:-:0;;;;;;;;",
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
    "id": 41174,
    "exportedSymbols": {
      "SlotDerivation": [
        41173
      ]
    },
    "nodeType": "SourceUnit",
    "src": "199:5123:42",
    "nodes": [
      {
        "id": 41045,
        "nodeType": "PragmaDirective",
        "src": "199:24:42",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 41173,
        "nodeType": "ContractDefinition",
        "src": "1598:3723:42",
        "nodes": [
          {
            "id": 41056,
            "nodeType": "FunctionDefinition",
            "src": "1706:277:42",
            "nodes": [],
            "body": {
              "id": 41055,
              "nodeType": "Block",
              "src": "1789:194:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1824:153:42",
                    "nodeType": "YulBlock",
                    "src": "1824:153:42",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1845:4:42",
                              "nodeType": "YulLiteral",
                              "src": "1845:4:42",
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
                                          "nativeSrc": "1869:9:42",
                                          "nodeType": "YulIdentifier",
                                          "src": "1869:9:42"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "1880:4:42",
                                          "nodeType": "YulLiteral",
                                          "src": "1880:4:42",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "1865:3:42",
                                        "nodeType": "YulIdentifier",
                                        "src": "1865:3:42"
                                      },
                                      "nativeSrc": "1865:20:42",
                                      "nodeType": "YulFunctionCall",
                                      "src": "1865:20:42"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "namespace",
                                          "nativeSrc": "1893:9:42",
                                          "nodeType": "YulIdentifier",
                                          "src": "1893:9:42"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "1887:5:42",
                                        "nodeType": "YulIdentifier",
                                        "src": "1887:5:42"
                                      },
                                      "nativeSrc": "1887:16:42",
                                      "nodeType": "YulFunctionCall",
                                      "src": "1887:16:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "keccak256",
                                    "nativeSrc": "1855:9:42",
                                    "nodeType": "YulIdentifier",
                                    "src": "1855:9:42"
                                  },
                                  "nativeSrc": "1855:49:42",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1855:49:42"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1906:1:42",
                                  "nodeType": "YulLiteral",
                                  "src": "1906:1:42",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "1851:3:42",
                                "nodeType": "YulIdentifier",
                                "src": "1851:3:42"
                              },
                              "nativeSrc": "1851:57:42",
                              "nodeType": "YulFunctionCall",
                              "src": "1851:57:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "1838:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "1838:6:42"
                          },
                          "nativeSrc": "1838:71:42",
                          "nodeType": "YulFunctionCall",
                          "src": "1838:71:42"
                        },
                        "nativeSrc": "1838:71:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "1838:71:42"
                      },
                      {
                        "nativeSrc": "1922:45:42",
                        "nodeType": "YulAssignment",
                        "src": "1922:45:42",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1944:4:42",
                                  "nodeType": "YulLiteral",
                                  "src": "1944:4:42",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1950:4:42",
                                  "nodeType": "YulLiteral",
                                  "src": "1950:4:42",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "keccak256",
                                "nativeSrc": "1934:9:42",
                                "nodeType": "YulIdentifier",
                                "src": "1934:9:42"
                              },
                              "nativeSrc": "1934:21:42",
                              "nodeType": "YulFunctionCall",
                              "src": "1934:21:42"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "1961:4:42",
                                  "nodeType": "YulLiteral",
                                  "src": "1961:4:42",
                                  "type": "",
                                  "value": "0xff"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nativeSrc": "1957:3:42",
                                "nodeType": "YulIdentifier",
                                "src": "1957:3:42"
                              },
                              "nativeSrc": "1957:9:42",
                              "nodeType": "YulFunctionCall",
                              "src": "1957:9:42"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "1930:3:42",
                            "nodeType": "YulIdentifier",
                            "src": "1930:3:42"
                          },
                          "nativeSrc": "1930:37:42",
                          "nodeType": "YulFunctionCall",
                          "src": "1930:37:42"
                        },
                        "variableNames": [
                          {
                            "name": "slot",
                            "nativeSrc": "1922:4:42",
                            "nodeType": "YulIdentifier",
                            "src": "1922:4:42"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41049,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1869:9:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41049,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1893:9:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41052,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1922:4:42",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41054,
                  "nodeType": "InlineAssembly",
                  "src": "1799:178:42"
                }
              ]
            },
            "documentation": {
              "id": 41047,
              "nodeType": "StructuredDocumentation",
              "src": "1627:74:42",
              "text": " @dev Derive an ERC-7201 slot from a string (namespace)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "erc7201Slot",
            "nameLocation": "1715:11:42",
            "parameters": {
              "id": 41050,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41049,
                  "mutability": "mutable",
                  "name": "namespace",
                  "nameLocation": "1741:9:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41056,
                  "src": "1727:23:42",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41048,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1727:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1726:25:42"
            },
            "returnParameters": {
              "id": 41053,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41052,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "1783:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41056,
                  "src": "1775:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41051,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1775:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1774:14:42"
            },
            "scope": 41173,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41078,
            "nodeType": "FunctionDefinition",
            "src": "2093:168:42",
            "nodes": [],
            "body": {
              "id": 41077,
              "nodeType": "Block",
              "src": "2175:86:42",
              "nodes": [],
              "statements": [
                {
                  "id": 41076,
                  "nodeType": "UncheckedBlock",
                  "src": "2185:70:42",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 41073,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 41070,
                                  "name": "slot",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 41059,
                                  "src": "2232:4:42",
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
                                "id": 41069,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2224:7:42",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 41068,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2224:7:42",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 41071,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2224:13:42",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "id": 41072,
                              "name": "pos",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 41061,
                              "src": "2240:3:42",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2224:19:42",
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
                          "id": 41067,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2216:7:42",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 41066,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "2216:7:42",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 41074,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2216:28:42",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "functionReturnParameters": 41065,
                      "id": 41075,
                      "nodeType": "Return",
                      "src": "2209:35:42"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 41057,
              "nodeType": "StructuredDocumentation",
              "src": "1989:99:42",
              "text": " @dev Add an offset to a slot to get the n-th element of a structure or an array."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "offset",
            "nameLocation": "2102:6:42",
            "parameters": {
              "id": 41062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41059,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2117:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41078,
                  "src": "2109:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41058,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2109:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41061,
                  "mutability": "mutable",
                  "name": "pos",
                  "nameLocation": "2131:3:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41078,
                  "src": "2123:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41060,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2123:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2108:27:42"
            },
            "returnParameters": {
              "id": 41065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41064,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "2167:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41078,
                  "src": "2159:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41063,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2159:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2158:16:42"
            },
            "scope": 41173,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41088,
            "nodeType": "FunctionDefinition",
            "src": "2390:201:42",
            "nodes": [],
            "body": {
              "id": 41087,
              "nodeType": "Block",
              "src": "2464:127:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2499:86:42",
                    "nodeType": "YulBlock",
                    "src": "2499:86:42",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2520:4:42",
                              "nodeType": "YulLiteral",
                              "src": "2520:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "2526:4:42",
                              "nodeType": "YulIdentifier",
                              "src": "2526:4:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2513:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "2513:6:42"
                          },
                          "nativeSrc": "2513:18:42",
                          "nodeType": "YulFunctionCall",
                          "src": "2513:18:42"
                        },
                        "nativeSrc": "2513:18:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "2513:18:42"
                      },
                      {
                        "nativeSrc": "2544:31:42",
                        "nodeType": "YulAssignment",
                        "src": "2544:31:42",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2564:4:42",
                              "nodeType": "YulLiteral",
                              "src": "2564:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2570:4:42",
                              "nodeType": "YulLiteral",
                              "src": "2570:4:42",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "2554:9:42",
                            "nodeType": "YulIdentifier",
                            "src": "2554:9:42"
                          },
                          "nativeSrc": "2554:21:42",
                          "nodeType": "YulFunctionCall",
                          "src": "2554:21:42"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "2544:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "2544:6:42"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41084,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2544:6:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41081,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2526:4:42",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41086,
                  "nodeType": "InlineAssembly",
                  "src": "2474:111:42"
                }
              ]
            },
            "documentation": {
              "id": 41079,
              "nodeType": "StructuredDocumentation",
              "src": "2267:118:42",
              "text": " @dev Derive the location of the first element in an array from the slot where the length is stored."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveArray",
            "nameLocation": "2399:11:42",
            "parameters": {
              "id": 41082,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41081,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2419:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41088,
                  "src": "2411:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41080,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2411:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2410:14:42"
            },
            "returnParameters": {
              "id": 41085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41084,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "2456:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41088,
                  "src": "2448:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41083,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2448:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2447:16:42"
            },
            "scope": 41173,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41100,
            "nodeType": "FunctionDefinition",
            "src": "2680:268:42",
            "nodes": [],
            "body": {
              "id": 41099,
              "nodeType": "Block",
              "src": "2769:179:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2804:138:42",
                    "nodeType": "YulBlock",
                    "src": "2804:138:42",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2825:4:42",
                              "nodeType": "YulLiteral",
                              "src": "2825:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "key",
                                  "nativeSrc": "2835:3:42",
                                  "nodeType": "YulIdentifier",
                                  "src": "2835:3:42"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "2844:2:42",
                                      "nodeType": "YulLiteral",
                                      "src": "2844:2:42",
                                      "type": "",
                                      "value": "96"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "2852:1:42",
                                          "nodeType": "YulLiteral",
                                          "src": "2852:1:42",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "not",
                                        "nativeSrc": "2848:3:42",
                                        "nodeType": "YulIdentifier",
                                        "src": "2848:3:42"
                                      },
                                      "nativeSrc": "2848:6:42",
                                      "nodeType": "YulFunctionCall",
                                      "src": "2848:6:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nativeSrc": "2840:3:42",
                                    "nodeType": "YulIdentifier",
                                    "src": "2840:3:42"
                                  },
                                  "nativeSrc": "2840:15:42",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2840:15:42"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "2831:3:42",
                                "nodeType": "YulIdentifier",
                                "src": "2831:3:42"
                              },
                              "nativeSrc": "2831:25:42",
                              "nodeType": "YulFunctionCall",
                              "src": "2831:25:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2818:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "2818:6:42"
                          },
                          "nativeSrc": "2818:39:42",
                          "nodeType": "YulFunctionCall",
                          "src": "2818:39:42"
                        },
                        "nativeSrc": "2818:39:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "2818:39:42"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2877:4:42",
                              "nodeType": "YulLiteral",
                              "src": "2877:4:42",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "2883:4:42",
                              "nodeType": "YulIdentifier",
                              "src": "2883:4:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "2870:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "2870:6:42"
                          },
                          "nativeSrc": "2870:18:42",
                          "nodeType": "YulFunctionCall",
                          "src": "2870:18:42"
                        },
                        "nativeSrc": "2870:18:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "2870:18:42"
                      },
                      {
                        "nativeSrc": "2901:31:42",
                        "nodeType": "YulAssignment",
                        "src": "2901:31:42",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "2921:4:42",
                              "nodeType": "YulLiteral",
                              "src": "2921:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2927:4:42",
                              "nodeType": "YulLiteral",
                              "src": "2927:4:42",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "2911:9:42",
                            "nodeType": "YulIdentifier",
                            "src": "2911:9:42"
                          },
                          "nativeSrc": "2911:21:42",
                          "nodeType": "YulFunctionCall",
                          "src": "2911:21:42"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "2901:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "2901:6:42"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41093,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2835:3:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41096,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2901:6:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41091,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2883:4:42",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41098,
                  "nodeType": "InlineAssembly",
                  "src": "2779:163:42"
                }
              ]
            },
            "documentation": {
              "id": 41089,
              "nodeType": "StructuredDocumentation",
              "src": "2597:78:42",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "2689:13:42",
            "parameters": {
              "id": 41094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41091,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "2711:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41100,
                  "src": "2703:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41090,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2703:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41093,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "2725:3:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41100,
                  "src": "2717:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41092,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2717:7:42",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2702:27:42"
            },
            "returnParameters": {
              "id": 41097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41096,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "2761:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41100,
                  "src": "2753:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41095,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2753:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2752:16:42"
            },
            "scope": 41173,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41112,
            "nodeType": "FunctionDefinition",
            "src": "3037:259:42",
            "nodes": [],
            "body": {
              "id": 41111,
              "nodeType": "Block",
              "src": "3123:173:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3158:132:42",
                    "nodeType": "YulBlock",
                    "src": "3158:132:42",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3179:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3179:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "key",
                                      "nativeSrc": "3199:3:42",
                                      "nodeType": "YulIdentifier",
                                      "src": "3199:3:42"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nativeSrc": "3192:6:42",
                                    "nodeType": "YulIdentifier",
                                    "src": "3192:6:42"
                                  },
                                  "nativeSrc": "3192:11:42",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3192:11:42"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "3185:6:42",
                                "nodeType": "YulIdentifier",
                                "src": "3185:6:42"
                              },
                              "nativeSrc": "3185:19:42",
                              "nodeType": "YulFunctionCall",
                              "src": "3185:19:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3172:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "3172:6:42"
                          },
                          "nativeSrc": "3172:33:42",
                          "nodeType": "YulFunctionCall",
                          "src": "3172:33:42"
                        },
                        "nativeSrc": "3172:33:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "3172:33:42"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3225:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3225:4:42",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "3231:4:42",
                              "nodeType": "YulIdentifier",
                              "src": "3231:4:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3218:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "3218:6:42"
                          },
                          "nativeSrc": "3218:18:42",
                          "nodeType": "YulFunctionCall",
                          "src": "3218:18:42"
                        },
                        "nativeSrc": "3218:18:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "3218:18:42"
                      },
                      {
                        "nativeSrc": "3249:31:42",
                        "nodeType": "YulAssignment",
                        "src": "3249:31:42",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3269:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3269:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3275:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3275:4:42",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "3259:9:42",
                            "nodeType": "YulIdentifier",
                            "src": "3259:9:42"
                          },
                          "nativeSrc": "3259:21:42",
                          "nodeType": "YulFunctionCall",
                          "src": "3259:21:42"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "3249:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "3249:6:42"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41105,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3199:3:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41108,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3249:6:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41103,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3231:4:42",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41110,
                  "nodeType": "InlineAssembly",
                  "src": "3133:157:42"
                }
              ]
            },
            "documentation": {
              "id": 41101,
              "nodeType": "StructuredDocumentation",
              "src": "2954:78:42",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "3046:13:42",
            "parameters": {
              "id": 41106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41103,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3068:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41112,
                  "src": "3060:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41102,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3060:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41105,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3079:3:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41112,
                  "src": "3074:8:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 41104,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3074:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3059:24:42"
            },
            "returnParameters": {
              "id": 41109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41108,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "3115:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41112,
                  "src": "3107:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41107,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3107:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3106:16:42"
            },
            "scope": 41173,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41124,
            "nodeType": "FunctionDefinition",
            "src": "3385:246:42",
            "nodes": [],
            "body": {
              "id": 41123,
              "nodeType": "Block",
              "src": "3474:157:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3509:116:42",
                    "nodeType": "YulBlock",
                    "src": "3509:116:42",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3530:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3530:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "key",
                              "nativeSrc": "3536:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "3536:3:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3523:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "3523:6:42"
                          },
                          "nativeSrc": "3523:17:42",
                          "nodeType": "YulFunctionCall",
                          "src": "3523:17:42"
                        },
                        "nativeSrc": "3523:17:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "3523:17:42"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3560:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3560:4:42",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "3566:4:42",
                              "nodeType": "YulIdentifier",
                              "src": "3566:4:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3553:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "3553:6:42"
                          },
                          "nativeSrc": "3553:18:42",
                          "nodeType": "YulFunctionCall",
                          "src": "3553:18:42"
                        },
                        "nativeSrc": "3553:18:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "3553:18:42"
                      },
                      {
                        "nativeSrc": "3584:31:42",
                        "nodeType": "YulAssignment",
                        "src": "3584:31:42",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3604:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3604:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3610:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3610:4:42",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "3594:9:42",
                            "nodeType": "YulIdentifier",
                            "src": "3594:9:42"
                          },
                          "nativeSrc": "3594:21:42",
                          "nodeType": "YulFunctionCall",
                          "src": "3594:21:42"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "3584:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "3584:6:42"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41117,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3536:3:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41120,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3584:6:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41115,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3566:4:42",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41122,
                  "nodeType": "InlineAssembly",
                  "src": "3484:141:42"
                }
              ]
            },
            "documentation": {
              "id": 41113,
              "nodeType": "StructuredDocumentation",
              "src": "3302:78:42",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "3394:13:42",
            "parameters": {
              "id": 41118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41115,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3416:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41124,
                  "src": "3408:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41114,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3408:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41117,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3430:3:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41124,
                  "src": "3422:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41116,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3422:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3407:27:42"
            },
            "returnParameters": {
              "id": 41121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41120,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "3466:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41124,
                  "src": "3458:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41119,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3458:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3457:16:42"
            },
            "scope": 41173,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41136,
            "nodeType": "FunctionDefinition",
            "src": "3720:246:42",
            "nodes": [],
            "body": {
              "id": 41135,
              "nodeType": "Block",
              "src": "3809:157:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "3844:116:42",
                    "nodeType": "YulBlock",
                    "src": "3844:116:42",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3865:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3865:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "key",
                              "nativeSrc": "3871:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "3871:3:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3858:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "3858:6:42"
                          },
                          "nativeSrc": "3858:17:42",
                          "nodeType": "YulFunctionCall",
                          "src": "3858:17:42"
                        },
                        "nativeSrc": "3858:17:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "3858:17:42"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3895:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3895:4:42",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "3901:4:42",
                              "nodeType": "YulIdentifier",
                              "src": "3901:4:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3888:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "3888:6:42"
                          },
                          "nativeSrc": "3888:18:42",
                          "nodeType": "YulFunctionCall",
                          "src": "3888:18:42"
                        },
                        "nativeSrc": "3888:18:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "3888:18:42"
                      },
                      {
                        "nativeSrc": "3919:31:42",
                        "nodeType": "YulAssignment",
                        "src": "3919:31:42",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "3939:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3939:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3945:4:42",
                              "nodeType": "YulLiteral",
                              "src": "3945:4:42",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "3929:9:42",
                            "nodeType": "YulIdentifier",
                            "src": "3929:9:42"
                          },
                          "nativeSrc": "3929:21:42",
                          "nodeType": "YulFunctionCall",
                          "src": "3929:21:42"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "3919:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "3919:6:42"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41129,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3871:3:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41132,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3919:6:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41127,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3901:4:42",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41134,
                  "nodeType": "InlineAssembly",
                  "src": "3819:141:42"
                }
              ]
            },
            "documentation": {
              "id": 41125,
              "nodeType": "StructuredDocumentation",
              "src": "3637:78:42",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "3729:13:42",
            "parameters": {
              "id": 41130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41127,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "3751:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41136,
                  "src": "3743:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41126,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3743:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41129,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "3765:3:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41136,
                  "src": "3757:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 41128,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3757:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3742:27:42"
            },
            "returnParameters": {
              "id": 41133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41132,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "3801:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41136,
                  "src": "3793:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41131,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3793:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3792:16:42"
            },
            "scope": 41173,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41148,
            "nodeType": "FunctionDefinition",
            "src": "4055:245:42",
            "nodes": [],
            "body": {
              "id": 41147,
              "nodeType": "Block",
              "src": "4143:157:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4178:116:42",
                    "nodeType": "YulBlock",
                    "src": "4178:116:42",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4199:4:42",
                              "nodeType": "YulLiteral",
                              "src": "4199:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "name": "key",
                              "nativeSrc": "4205:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "4205:3:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4192:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "4192:6:42"
                          },
                          "nativeSrc": "4192:17:42",
                          "nodeType": "YulFunctionCall",
                          "src": "4192:17:42"
                        },
                        "nativeSrc": "4192:17:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "4192:17:42"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4229:4:42",
                              "nodeType": "YulLiteral",
                              "src": "4229:4:42",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "4235:4:42",
                              "nodeType": "YulIdentifier",
                              "src": "4235:4:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4222:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "4222:6:42"
                          },
                          "nativeSrc": "4222:18:42",
                          "nodeType": "YulFunctionCall",
                          "src": "4222:18:42"
                        },
                        "nativeSrc": "4222:18:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "4222:18:42"
                      },
                      {
                        "nativeSrc": "4253:31:42",
                        "nodeType": "YulAssignment",
                        "src": "4253:31:42",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "4273:4:42",
                              "nodeType": "YulLiteral",
                              "src": "4273:4:42",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4279:4:42",
                              "nodeType": "YulLiteral",
                              "src": "4279:4:42",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "4263:9:42",
                            "nodeType": "YulIdentifier",
                            "src": "4263:9:42"
                          },
                          "nativeSrc": "4263:21:42",
                          "nodeType": "YulFunctionCall",
                          "src": "4263:21:42"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "4253:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "4253:6:42"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41141,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4205:3:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41144,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4253:6:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41139,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4235:4:42",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41146,
                  "nodeType": "InlineAssembly",
                  "src": "4153:141:42"
                }
              ]
            },
            "documentation": {
              "id": 41137,
              "nodeType": "StructuredDocumentation",
              "src": "3972:78:42",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "4064:13:42",
            "parameters": {
              "id": 41142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41139,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "4086:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41148,
                  "src": "4078:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41138,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4078:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41141,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4099:3:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41148,
                  "src": "4092:10:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 41140,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4092:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4077:26:42"
            },
            "returnParameters": {
              "id": 41145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41144,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4135:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41148,
                  "src": "4127:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41143,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4127:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4126:16:42"
            },
            "scope": 41173,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41160,
            "nodeType": "FunctionDefinition",
            "src": "4389:421:42",
            "nodes": [],
            "body": {
              "id": 41159,
              "nodeType": "Block",
              "src": "4484:326:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4519:285:42",
                    "nodeType": "YulBlock",
                    "src": "4519:285:42",
                    "statements": [
                      {
                        "nativeSrc": "4533:24:42",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4533:24:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "key",
                              "nativeSrc": "4553:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "4553:3:42"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "4547:5:42",
                            "nodeType": "YulIdentifier",
                            "src": "4547:5:42"
                          },
                          "nativeSrc": "4547:10:42",
                          "nodeType": "YulFunctionCall",
                          "src": "4547:10:42"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nativeSrc": "4537:6:42",
                            "nodeType": "YulTypedName",
                            "src": "4537:6:42",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "4570:27:42",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4570:27:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "key",
                              "nativeSrc": "4587:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "4587:3:42"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4592:4:42",
                              "nodeType": "YulLiteral",
                              "src": "4592:4:42",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "4583:3:42",
                            "nodeType": "YulIdentifier",
                            "src": "4583:3:42"
                          },
                          "nativeSrc": "4583:14:42",
                          "nodeType": "YulFunctionCall",
                          "src": "4583:14:42"
                        },
                        "variables": [
                          {
                            "name": "begin",
                            "nativeSrc": "4574:5:42",
                            "nodeType": "YulTypedName",
                            "src": "4574:5:42",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "4610:29:42",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4610:29:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "begin",
                              "nativeSrc": "4625:5:42",
                              "nodeType": "YulIdentifier",
                              "src": "4625:5:42"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "4632:6:42",
                              "nodeType": "YulIdentifier",
                              "src": "4632:6:42"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "4621:3:42",
                            "nodeType": "YulIdentifier",
                            "src": "4621:3:42"
                          },
                          "nativeSrc": "4621:18:42",
                          "nodeType": "YulFunctionCall",
                          "src": "4621:18:42"
                        },
                        "variables": [
                          {
                            "name": "end",
                            "nativeSrc": "4614:3:42",
                            "nodeType": "YulTypedName",
                            "src": "4614:3:42",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "4652:23:42",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4652:23:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "4671:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "4671:3:42"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "4665:5:42",
                            "nodeType": "YulIdentifier",
                            "src": "4665:5:42"
                          },
                          "nativeSrc": "4665:10:42",
                          "nodeType": "YulFunctionCall",
                          "src": "4665:10:42"
                        },
                        "variables": [
                          {
                            "name": "cache",
                            "nativeSrc": "4656:5:42",
                            "nodeType": "YulTypedName",
                            "src": "4656:5:42",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "4695:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "4695:3:42"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "4700:4:42",
                              "nodeType": "YulIdentifier",
                              "src": "4700:4:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4688:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "4688:6:42"
                          },
                          "nativeSrc": "4688:17:42",
                          "nodeType": "YulFunctionCall",
                          "src": "4688:17:42"
                        },
                        "nativeSrc": "4688:17:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "4688:17:42"
                      },
                      {
                        "nativeSrc": "4718:45:42",
                        "nodeType": "YulAssignment",
                        "src": "4718:45:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "begin",
                              "nativeSrc": "4738:5:42",
                              "nodeType": "YulIdentifier",
                              "src": "4738:5:42"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "4749:6:42",
                                  "nodeType": "YulIdentifier",
                                  "src": "4749:6:42"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4757:4:42",
                                  "nodeType": "YulLiteral",
                                  "src": "4757:4:42",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "4745:3:42",
                                "nodeType": "YulIdentifier",
                                "src": "4745:3:42"
                              },
                              "nativeSrc": "4745:17:42",
                              "nodeType": "YulFunctionCall",
                              "src": "4745:17:42"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "4728:9:42",
                            "nodeType": "YulIdentifier",
                            "src": "4728:9:42"
                          },
                          "nativeSrc": "4728:35:42",
                          "nodeType": "YulFunctionCall",
                          "src": "4728:35:42"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "4718:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "4718:6:42"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "4783:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "4783:3:42"
                            },
                            {
                              "name": "cache",
                              "nativeSrc": "4788:5:42",
                              "nodeType": "YulIdentifier",
                              "src": "4788:5:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4776:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "4776:6:42"
                          },
                          "nativeSrc": "4776:18:42",
                          "nodeType": "YulFunctionCall",
                          "src": "4776:18:42"
                        },
                        "nativeSrc": "4776:18:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "4776:18:42"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41153,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4553:3:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41153,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4587:3:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41156,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4718:6:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41151,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4700:4:42",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41158,
                  "nodeType": "InlineAssembly",
                  "src": "4494:310:42"
                }
              ]
            },
            "documentation": {
              "id": 41149,
              "nodeType": "StructuredDocumentation",
              "src": "4306:78:42",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "4398:13:42",
            "parameters": {
              "id": 41154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41151,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "4420:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41160,
                  "src": "4412:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41150,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4412:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41153,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4440:3:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41160,
                  "src": "4426:17:42",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 41152,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4426:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4411:33:42"
            },
            "returnParameters": {
              "id": 41157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41156,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4476:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41160,
                  "src": "4468:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41155,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4468:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4467:16:42"
            },
            "scope": 41173,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 41172,
            "nodeType": "FunctionDefinition",
            "src": "4899:420:42",
            "nodes": [],
            "body": {
              "id": 41171,
              "nodeType": "Block",
              "src": "4993:326:42",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "5028:285:42",
                    "nodeType": "YulBlock",
                    "src": "5028:285:42",
                    "statements": [
                      {
                        "nativeSrc": "5042:24:42",
                        "nodeType": "YulVariableDeclaration",
                        "src": "5042:24:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "key",
                              "nativeSrc": "5062:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "5062:3:42"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "5056:5:42",
                            "nodeType": "YulIdentifier",
                            "src": "5056:5:42"
                          },
                          "nativeSrc": "5056:10:42",
                          "nodeType": "YulFunctionCall",
                          "src": "5056:10:42"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nativeSrc": "5046:6:42",
                            "nodeType": "YulTypedName",
                            "src": "5046:6:42",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "5079:27:42",
                        "nodeType": "YulVariableDeclaration",
                        "src": "5079:27:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "key",
                              "nativeSrc": "5096:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "5096:3:42"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5101:4:42",
                              "nodeType": "YulLiteral",
                              "src": "5101:4:42",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5092:3:42",
                            "nodeType": "YulIdentifier",
                            "src": "5092:3:42"
                          },
                          "nativeSrc": "5092:14:42",
                          "nodeType": "YulFunctionCall",
                          "src": "5092:14:42"
                        },
                        "variables": [
                          {
                            "name": "begin",
                            "nativeSrc": "5083:5:42",
                            "nodeType": "YulTypedName",
                            "src": "5083:5:42",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "5119:29:42",
                        "nodeType": "YulVariableDeclaration",
                        "src": "5119:29:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "begin",
                              "nativeSrc": "5134:5:42",
                              "nodeType": "YulIdentifier",
                              "src": "5134:5:42"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "5141:6:42",
                              "nodeType": "YulIdentifier",
                              "src": "5141:6:42"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5130:3:42",
                            "nodeType": "YulIdentifier",
                            "src": "5130:3:42"
                          },
                          "nativeSrc": "5130:18:42",
                          "nodeType": "YulFunctionCall",
                          "src": "5130:18:42"
                        },
                        "variables": [
                          {
                            "name": "end",
                            "nativeSrc": "5123:3:42",
                            "nodeType": "YulTypedName",
                            "src": "5123:3:42",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "5161:23:42",
                        "nodeType": "YulVariableDeclaration",
                        "src": "5161:23:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "5180:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "5180:3:42"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "5174:5:42",
                            "nodeType": "YulIdentifier",
                            "src": "5174:5:42"
                          },
                          "nativeSrc": "5174:10:42",
                          "nodeType": "YulFunctionCall",
                          "src": "5174:10:42"
                        },
                        "variables": [
                          {
                            "name": "cache",
                            "nativeSrc": "5165:5:42",
                            "nodeType": "YulTypedName",
                            "src": "5165:5:42",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "5204:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "5204:3:42"
                            },
                            {
                              "name": "slot",
                              "nativeSrc": "5209:4:42",
                              "nodeType": "YulIdentifier",
                              "src": "5209:4:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5197:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "5197:6:42"
                          },
                          "nativeSrc": "5197:17:42",
                          "nodeType": "YulFunctionCall",
                          "src": "5197:17:42"
                        },
                        "nativeSrc": "5197:17:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "5197:17:42"
                      },
                      {
                        "nativeSrc": "5227:45:42",
                        "nodeType": "YulAssignment",
                        "src": "5227:45:42",
                        "value": {
                          "arguments": [
                            {
                              "name": "begin",
                              "nativeSrc": "5247:5:42",
                              "nodeType": "YulIdentifier",
                              "src": "5247:5:42"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "5258:6:42",
                                  "nodeType": "YulIdentifier",
                                  "src": "5258:6:42"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5266:4:42",
                                  "nodeType": "YulLiteral",
                                  "src": "5266:4:42",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "5254:3:42",
                                "nodeType": "YulIdentifier",
                                "src": "5254:3:42"
                              },
                              "nativeSrc": "5254:17:42",
                              "nodeType": "YulFunctionCall",
                              "src": "5254:17:42"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "5237:9:42",
                            "nodeType": "YulIdentifier",
                            "src": "5237:9:42"
                          },
                          "nativeSrc": "5237:35:42",
                          "nodeType": "YulFunctionCall",
                          "src": "5237:35:42"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "5227:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "5227:6:42"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "end",
                              "nativeSrc": "5292:3:42",
                              "nodeType": "YulIdentifier",
                              "src": "5292:3:42"
                            },
                            {
                              "name": "cache",
                              "nativeSrc": "5297:5:42",
                              "nodeType": "YulIdentifier",
                              "src": "5297:5:42"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5285:6:42",
                            "nodeType": "YulIdentifier",
                            "src": "5285:6:42"
                          },
                          "nativeSrc": "5285:18:42",
                          "nodeType": "YulFunctionCall",
                          "src": "5285:18:42"
                        },
                        "nativeSrc": "5285:18:42",
                        "nodeType": "YulExpressionStatement",
                        "src": "5285:18:42"
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 41165,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5062:3:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41165,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5096:3:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41168,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5227:6:42",
                      "valueSize": 1
                    },
                    {
                      "declaration": 41163,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5209:4:42",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 41170,
                  "nodeType": "InlineAssembly",
                  "src": "5003:310:42"
                }
              ]
            },
            "documentation": {
              "id": 41161,
              "nodeType": "StructuredDocumentation",
              "src": "4816:78:42",
              "text": " @dev Derive the location of a mapping element from the key."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deriveMapping",
            "nameLocation": "4908:13:42",
            "parameters": {
              "id": 41166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41163,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "4930:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41172,
                  "src": "4922:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41162,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4922:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41165,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "4949:3:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41172,
                  "src": "4936:16:42",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 41164,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4936:5:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4921:32:42"
            },
            "returnParameters": {
              "id": 41169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41168,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "4985:6:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 41172,
                  "src": "4977:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 41167,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4977:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4976:16:42"
            },
            "scope": 41173,
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
          "id": 41046,
          "nodeType": "StructuredDocumentation",
          "src": "225:1372:42",
          "text": " @dev Library for computing storage (and transient storage) locations from namespaces and deriving slots\n corresponding to standard patterns. The derivation method for array and mapping matches the storage layout used by\n the solidity language / compiler.\n See https://docs.soliditylang.org/en/v0.8.20/internals/layout_in_storage.html#mappings-and-dynamic-arrays[Solidity docs for mappings and dynamic arrays.].\n Example usage:\n ```solidity\n contract Example {\n     // Add the library methods\n     using StorageSlot for bytes32;\n     using SlotDerivation for bytes32;\n     // Declare a namespace\n     string private constant _NAMESPACE = \"<namespace>\" // eg. OpenZeppelin.Slot\n     function setValueInNamespace(uint256 key, address newValue) internal {\n         _NAMESPACE.erc7201Slot().deriveMapping(key).getAddressSlot().value = newValue;\n     }\n     function getValueInNamespace(uint256 key) internal view returns (address) {\n         return _NAMESPACE.erc7201Slot().deriveMapping(key).getAddressSlot().value;\n     }\n }\n ```\n TIP: Consider using this library along with {StorageSlot}.\n NOTE: This library provides a way to manipulate storage locations in a non-standard way. Tooling for checking\n upgrade safety will ignore the slots accessed through this library.\n _Available since v5.1._"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          41173
        ],
        "name": "SlotDerivation",
        "nameLocation": "1606:14:42",
        "scope": 41174,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 42
} as const;