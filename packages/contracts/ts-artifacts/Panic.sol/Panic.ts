export const Panic = {
  "abi": [],
  "bytecode": {
    "object": "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea26469706673582212209f0c15ac6add9fb1984230995938de86dd10af01a229488f953c54612fba758864736f6c634300081a0033",
    "sourceMap": "657:1315:49:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x5f80fdfea26469706673582212209f0c15ac6add9fb1984230995938de86dd10af01a229488f953c54612fba758864736f6c634300081a0033",
    "sourceMap": "657:1315:49:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Helper library for emitting standardized panic codes. ```solidity contract Example {      using Panic for uint256;      // Use any of the declared internal constants      function foo() { Panic.GENERIC.panic(); }      // Alternatively      function foo() { Panic.panic(Panic.GENERIC); } } ``` Follows the list from https://github.com/ethereum/solidity/blob/v0.8.24/libsolutil/ErrorCodes.h[libsolutil]. _Available since v5.1._\",\"kind\":\"dev\",\"methods\":{},\"stateVariables\":{\"ARRAY_OUT_OF_BOUNDS\":{\"details\":\"array out of bounds access\"},\"ASSERT\":{\"details\":\"used by the assert() builtin\"},\"DIVISION_BY_ZERO\":{\"details\":\"division or modulo by zero\"},\"EMPTY_ARRAY_POP\":{\"details\":\"empty array pop\"},\"ENUM_CONVERSION_ERROR\":{\"details\":\"enum conversion error\"},\"GENERIC\":{\"details\":\"generic / unspecified error\"},\"INVALID_INTERNAL_FUNCTION\":{\"details\":\"calling invalid internal function\"},\"RESOURCE_ERROR\":{\"details\":\"resource error (too large allocation or too large array)\"},\"STORAGE_ENCODING_ERROR\":{\"details\":\"invalid encoding in storage\"},\"UNDER_OVERFLOW\":{\"details\":\"arithmetic underflow or overflow\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/Panic.sol\":\"Panic\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]}},\"version\":1}",
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
        "node_modules/@openzeppelin/contracts/utils/Panic.sol": "Panic"
      },
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/Panic.sol": {
        "keccak256": "0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a",
        "urls": [
          "bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a",
          "dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/utils/Panic.sol",
    "id": 45592,
    "exportedSymbols": {
      "Panic": [
        45591
      ]
    },
    "nodeType": "SourceUnit",
    "src": "99:1874:49",
    "nodes": [
      {
        "id": 45541,
        "nodeType": "PragmaDirective",
        "src": "99:24:49",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 45591,
        "nodeType": "ContractDefinition",
        "src": "657:1315:49",
        "nodes": [
          {
            "id": 45546,
            "nodeType": "VariableDeclaration",
            "src": "718:40:49",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 45543,
              "nodeType": "StructuredDocumentation",
              "src": "677:36:49",
              "text": "@dev generic / unspecified error"
            },
            "mutability": "constant",
            "name": "GENERIC",
            "nameLocation": "744:7:49",
            "scope": 45591,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45544,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "718:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783030",
              "id": 45545,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "754:4:49",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0x00"
            },
            "visibility": "internal"
          },
          {
            "id": 45550,
            "nodeType": "VariableDeclaration",
            "src": "806:39:49",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 45547,
              "nodeType": "StructuredDocumentation",
              "src": "764:37:49",
              "text": "@dev used by the assert() builtin"
            },
            "mutability": "constant",
            "name": "ASSERT",
            "nameLocation": "832:6:49",
            "scope": 45591,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45548,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "806:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783031",
              "id": 45549,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "841:4:49",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "0x01"
            },
            "visibility": "internal"
          },
          {
            "id": 45554,
            "nodeType": "VariableDeclaration",
            "src": "897:47:49",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 45551,
              "nodeType": "StructuredDocumentation",
              "src": "851:41:49",
              "text": "@dev arithmetic underflow or overflow"
            },
            "mutability": "constant",
            "name": "UNDER_OVERFLOW",
            "nameLocation": "923:14:49",
            "scope": 45591,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45552,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "897:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783131",
              "id": 45553,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "940:4:49",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_17_by_1",
                "typeString": "int_const 17"
              },
              "value": "0x11"
            },
            "visibility": "internal"
          },
          {
            "id": 45558,
            "nodeType": "VariableDeclaration",
            "src": "990:49:49",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 45555,
              "nodeType": "StructuredDocumentation",
              "src": "950:35:49",
              "text": "@dev division or modulo by zero"
            },
            "mutability": "constant",
            "name": "DIVISION_BY_ZERO",
            "nameLocation": "1016:16:49",
            "scope": 45591,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45556,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "990:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783132",
              "id": 45557,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1035:4:49",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "0x12"
            },
            "visibility": "internal"
          },
          {
            "id": 45562,
            "nodeType": "VariableDeclaration",
            "src": "1080:54:49",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 45559,
              "nodeType": "StructuredDocumentation",
              "src": "1045:30:49",
              "text": "@dev enum conversion error"
            },
            "mutability": "constant",
            "name": "ENUM_CONVERSION_ERROR",
            "nameLocation": "1106:21:49",
            "scope": 45591,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45560,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1080:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783231",
              "id": 45561,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1130:4:49",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_33_by_1",
                "typeString": "int_const 33"
              },
              "value": "0x21"
            },
            "visibility": "internal"
          },
          {
            "id": 45566,
            "nodeType": "VariableDeclaration",
            "src": "1181:55:49",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 45563,
              "nodeType": "StructuredDocumentation",
              "src": "1140:36:49",
              "text": "@dev invalid encoding in storage"
            },
            "mutability": "constant",
            "name": "STORAGE_ENCODING_ERROR",
            "nameLocation": "1207:22:49",
            "scope": 45591,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45564,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1181:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783232",
              "id": 45565,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1232:4:49",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_34_by_1",
                "typeString": "int_const 34"
              },
              "value": "0x22"
            },
            "visibility": "internal"
          },
          {
            "id": 45570,
            "nodeType": "VariableDeclaration",
            "src": "1271:48:49",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 45567,
              "nodeType": "StructuredDocumentation",
              "src": "1242:24:49",
              "text": "@dev empty array pop"
            },
            "mutability": "constant",
            "name": "EMPTY_ARRAY_POP",
            "nameLocation": "1297:15:49",
            "scope": 45591,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45568,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1271:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783331",
              "id": 45569,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1315:4:49",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_49_by_1",
                "typeString": "int_const 49"
              },
              "value": "0x31"
            },
            "visibility": "internal"
          },
          {
            "id": 45574,
            "nodeType": "VariableDeclaration",
            "src": "1365:52:49",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 45571,
              "nodeType": "StructuredDocumentation",
              "src": "1325:35:49",
              "text": "@dev array out of bounds access"
            },
            "mutability": "constant",
            "name": "ARRAY_OUT_OF_BOUNDS",
            "nameLocation": "1391:19:49",
            "scope": 45591,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45572,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1365:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783332",
              "id": 45573,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1413:4:49",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_50_by_1",
                "typeString": "int_const 50"
              },
              "value": "0x32"
            },
            "visibility": "internal"
          },
          {
            "id": 45578,
            "nodeType": "VariableDeclaration",
            "src": "1493:47:49",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 45575,
              "nodeType": "StructuredDocumentation",
              "src": "1423:65:49",
              "text": "@dev resource error (too large allocation or too large array)"
            },
            "mutability": "constant",
            "name": "RESOURCE_ERROR",
            "nameLocation": "1519:14:49",
            "scope": 45591,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45576,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1493:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783431",
              "id": 45577,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1536:4:49",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_65_by_1",
                "typeString": "int_const 65"
              },
              "value": "0x41"
            },
            "visibility": "internal"
          },
          {
            "id": 45582,
            "nodeType": "VariableDeclaration",
            "src": "1593:58:49",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 45579,
              "nodeType": "StructuredDocumentation",
              "src": "1546:42:49",
              "text": "@dev calling invalid internal function"
            },
            "mutability": "constant",
            "name": "INVALID_INTERNAL_FUNCTION",
            "nameLocation": "1619:25:49",
            "scope": 45591,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45580,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1593:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30783531",
              "id": 45581,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1647:4:49",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_81_by_1",
                "typeString": "int_const 81"
              },
              "value": "0x51"
            },
            "visibility": "internal"
          },
          {
            "id": 45590,
            "nodeType": "FunctionDefinition",
            "src": "1776:194:49",
            "nodes": [],
            "body": {
              "id": 45589,
              "nodeType": "Block",
              "src": "1819:151:49",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "1854:110:49",
                    "nodeType": "YulBlock",
                    "src": "1854:110:49",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1875:4:49",
                              "nodeType": "YulLiteral",
                              "src": "1875:4:49",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1881:10:49",
                              "nodeType": "YulLiteral",
                              "src": "1881:10:49",
                              "type": "",
                              "value": "0x4e487b71"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "1868:6:49",
                            "nodeType": "YulIdentifier",
                            "src": "1868:6:49"
                          },
                          "nativeSrc": "1868:24:49",
                          "nodeType": "YulFunctionCall",
                          "src": "1868:24:49"
                        },
                        "nativeSrc": "1868:24:49",
                        "nodeType": "YulExpressionStatement",
                        "src": "1868:24:49"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1912:4:49",
                              "nodeType": "YulLiteral",
                              "src": "1912:4:49",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "name": "code",
                              "nativeSrc": "1918:4:49",
                              "nodeType": "YulIdentifier",
                              "src": "1918:4:49"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "1905:6:49",
                            "nodeType": "YulIdentifier",
                            "src": "1905:6:49"
                          },
                          "nativeSrc": "1905:18:49",
                          "nodeType": "YulFunctionCall",
                          "src": "1905:18:49"
                        },
                        "nativeSrc": "1905:18:49",
                        "nodeType": "YulExpressionStatement",
                        "src": "1905:18:49"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1943:4:49",
                              "nodeType": "YulLiteral",
                              "src": "1943:4:49",
                              "type": "",
                              "value": "0x1c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1949:4:49",
                              "nodeType": "YulLiteral",
                              "src": "1949:4:49",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "1936:6:49",
                            "nodeType": "YulIdentifier",
                            "src": "1936:6:49"
                          },
                          "nativeSrc": "1936:18:49",
                          "nodeType": "YulFunctionCall",
                          "src": "1936:18:49"
                        },
                        "nativeSrc": "1936:18:49",
                        "nodeType": "YulExpressionStatement",
                        "src": "1936:18:49"
                      }
                    ]
                  },
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 45585,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1918:4:49",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 45588,
                  "nodeType": "InlineAssembly",
                  "src": "1829:135:49"
                }
              ]
            },
            "documentation": {
              "id": 45583,
              "nodeType": "StructuredDocumentation",
              "src": "1658:113:49",
              "text": "@dev Reverts with a panic code. Recommended to use with\n the internal constants with predefined codes."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "panic",
            "nameLocation": "1785:5:49",
            "parameters": {
              "id": 45586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 45585,
                  "mutability": "mutable",
                  "name": "code",
                  "nameLocation": "1799:4:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 45590,
                  "src": "1791:12:49",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 45584,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1791:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1790:14:49"
            },
            "returnParameters": {
              "id": 45587,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1819:0:49"
            },
            "scope": 45591,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Panic",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 45542,
          "nodeType": "StructuredDocumentation",
          "src": "125:489:49",
          "text": " @dev Helper library for emitting standardized panic codes.\n ```solidity\n contract Example {\n      using Panic for uint256;\n      // Use any of the declared internal constants\n      function foo() { Panic.GENERIC.panic(); }\n      // Alternatively\n      function foo() { Panic.panic(Panic.GENERIC); }\n }\n ```\n Follows the list from https://github.com/ethereum/solidity/blob/v0.8.24/libsolutil/ErrorCodes.h[libsolutil].\n _Available since v5.1._"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          45591
        ],
        "name": "Panic",
        "nameLocation": "665:5:49",
        "scope": 45592,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 49
} as const;