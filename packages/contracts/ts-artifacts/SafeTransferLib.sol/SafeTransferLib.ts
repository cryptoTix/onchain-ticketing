export const SafeTransferLib = {
  "abi": [
    {
      "type": "error",
      "name": "ApproveFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ETHTransferFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Permit2AmountOverflow",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Permit2Failed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TransferFailed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "TransferFromFailed",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220ccac34f2027899164eab4efe03cf668edfe175857b8b0fa82ba3b06523ccbb2d64736f6c634300081a0033",
    "sourceMap": "579:25737:64:-:0;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x5f80fdfea2646970667358221220ccac34f2027899164eab4efe03cf668edfe175857b8b0fa82ba3b06523ccbb2d64736f6c634300081a0033",
    "sourceMap": "579:25737:64:-:0;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ApproveFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ETHTransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Permit2AmountOverflow\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Permit2Failed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFromFailed\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"Solady (https://github.com/vectorized/solady/blob/main/src/utils/SafeTransferLib.sol)Modified from Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)Permit2 operations from (https://github.com/Uniswap/permit2/blob/main/src/libraries/Permit2Lib.sol)\",\"details\":\"Note: - For ETH transfers, please use `forceSafeTransferETH` for DoS protection.\",\"errors\":{\"ApproveFailed()\":[{\"details\":\"The ERC20 `approve` has failed.\"}],\"ETHTransferFailed()\":[{\"details\":\"The ETH transfer has failed.\"}],\"Permit2AmountOverflow()\":[{\"details\":\"The Permit2 amount must be less than `2**160 - 1`.\"}],\"Permit2Failed()\":[{\"details\":\"The Permit2 operation has failed.\"}],\"TransferFailed()\":[{\"details\":\"The ERC20 `transfer` has failed.\"}],\"TransferFromFailed()\":[{\"details\":\"The ERC20 `transferFrom` has failed.\"}]},\"kind\":\"dev\",\"methods\":{},\"stateVariables\":{\"DAI_DOMAIN_SEPARATOR\":{\"details\":\"The unique EIP-712 domain domain separator for the DAI token contract.\"},\"GAS_STIPEND_NO_GRIEF\":{\"details\":\"Suggested gas stipend for contract receiving ETH to perform a few storage reads and writes, but low enough to prevent griefing.\"},\"GAS_STIPEND_NO_STORAGE_WRITES\":{\"details\":\"Suggested gas stipend for contract receiving ETH that disallows any storage writes.\"},\"PERMIT2\":{\"details\":\"The canonical Permit2 address. [Github](https://github.com/Uniswap/permit2) [Etherscan](https://etherscan.io/address/0x000000000022D473030F116dDEE9F6B43aC78BA3)\"},\"WETH9\":{\"details\":\"The address for the WETH9 contract on Ethereum mainnet.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Safe ETH and ERC20 transfer library that gracefully handles missing return values.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/solady/src/utils/SafeTransferLib.sol\":\"SafeTransferLib\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/solady/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0x7d0de1ff3be5dc32635283280b000d4794015a1b61d7dae7f3ff7b0721b07210\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e307c9eece677565e7d584ee77c56134b5db38a70f557f9d2b1b308219276c0c\",\"dweb:/ipfs/QmTEtqaTFgRBFGpJyb5o4v2w8yrSpcNThov4bNpcLr2tTR\"]}},\"version\":1}",
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
          "name": "ApproveFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ETHTransferFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Permit2AmountOverflow"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Permit2Failed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TransferFailed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "TransferFromFailed"
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
        "node_modules/solady/src/utils/SafeTransferLib.sol": "SafeTransferLib"
      },
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/solady/src/utils/SafeTransferLib.sol": {
        "keccak256": "0x7d0de1ff3be5dc32635283280b000d4794015a1b61d7dae7f3ff7b0721b07210",
        "urls": [
          "bzz-raw://e307c9eece677565e7d584ee77c56134b5db38a70f557f9d2b1b308219276c0c",
          "dweb:/ipfs/QmTEtqaTFgRBFGpJyb5o4v2w8yrSpcNThov4bNpcLr2tTR"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/solady/src/utils/SafeTransferLib.sol",
    "id": 55230,
    "exportedSymbols": {
      "SafeTransferLib": [
        55229
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:26285:64",
    "nodes": [
      {
        "id": 54897,
        "nodeType": "PragmaDirective",
        "src": "32:23:64",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".4"
        ]
      },
      {
        "id": 55229,
        "nodeType": "ContractDefinition",
        "src": "579:25737:64",
        "nodes": [
          {
            "id": 54901,
            "nodeType": "ErrorDefinition",
            "src": "934:26:64",
            "nodes": [],
            "documentation": {
              "id": 54899,
              "nodeType": "StructuredDocumentation",
              "src": "892:37:64",
              "text": "@dev The ETH transfer has failed."
            },
            "errorSelector": "b12d13eb",
            "name": "ETHTransferFailed",
            "nameLocation": "940:17:64",
            "parameters": {
              "id": 54900,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "957:2:64"
            }
          },
          {
            "id": 54904,
            "nodeType": "ErrorDefinition",
            "src": "1016:27:64",
            "nodes": [],
            "documentation": {
              "id": 54902,
              "nodeType": "StructuredDocumentation",
              "src": "966:45:64",
              "text": "@dev The ERC20 `transferFrom` has failed."
            },
            "errorSelector": "7939f424",
            "name": "TransferFromFailed",
            "nameLocation": "1022:18:64",
            "parameters": {
              "id": 54903,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1040:2:64"
            }
          },
          {
            "id": 54907,
            "nodeType": "ErrorDefinition",
            "src": "1095:23:64",
            "nodes": [],
            "documentation": {
              "id": 54905,
              "nodeType": "StructuredDocumentation",
              "src": "1049:41:64",
              "text": "@dev The ERC20 `transfer` has failed."
            },
            "errorSelector": "90b8ec18",
            "name": "TransferFailed",
            "nameLocation": "1101:14:64",
            "parameters": {
              "id": 54906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1115:2:64"
            }
          },
          {
            "id": 54910,
            "nodeType": "ErrorDefinition",
            "src": "1169:22:64",
            "nodes": [],
            "documentation": {
              "id": 54908,
              "nodeType": "StructuredDocumentation",
              "src": "1124:40:64",
              "text": "@dev The ERC20 `approve` has failed."
            },
            "errorSelector": "3e3f8f73",
            "name": "ApproveFailed",
            "nameLocation": "1175:13:64",
            "parameters": {
              "id": 54909,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1188:2:64"
            }
          },
          {
            "id": 54913,
            "nodeType": "ErrorDefinition",
            "src": "1244:22:64",
            "nodes": [],
            "documentation": {
              "id": 54911,
              "nodeType": "StructuredDocumentation",
              "src": "1197:42:64",
              "text": "@dev The Permit2 operation has failed."
            },
            "errorSelector": "6b836e6b",
            "name": "Permit2Failed",
            "nameLocation": "1250:13:64",
            "parameters": {
              "id": 54912,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1263:2:64"
            }
          },
          {
            "id": 54916,
            "nodeType": "ErrorDefinition",
            "src": "1336:30:64",
            "nodes": [],
            "documentation": {
              "id": 54914,
              "nodeType": "StructuredDocumentation",
              "src": "1272:59:64",
              "text": "@dev The Permit2 amount must be less than `2**160 - 1`."
            },
            "errorSelector": "8757f0fd",
            "name": "Permit2AmountOverflow",
            "nameLocation": "1342:21:64",
            "parameters": {
              "id": 54915,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1363:2:64"
            }
          },
          {
            "id": 54920,
            "nodeType": "VariableDeclaration",
            "src": "1752:62:64",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54917,
              "nodeType": "StructuredDocumentation",
              "src": "1655:92:64",
              "text": "@dev Suggested gas stipend for contract receiving ETH that disallows any storage writes."
            },
            "mutability": "constant",
            "name": "GAS_STIPEND_NO_STORAGE_WRITES",
            "nameLocation": "1778:29:64",
            "scope": 55229,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54918,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1752:7:64",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "32333030",
              "id": 54919,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1810:4:64",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2300_by_1",
                "typeString": "int_const 2300"
              },
              "value": "2300"
            },
            "visibility": "internal"
          },
          {
            "id": 54924,
            "nodeType": "VariableDeclaration",
            "src": "1970:55:64",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54921,
              "nodeType": "StructuredDocumentation",
              "src": "1821:144:64",
              "text": "@dev Suggested gas stipend for contract receiving ETH to perform a few\n storage reads and writes, but low enough to prevent griefing."
            },
            "mutability": "constant",
            "name": "GAS_STIPEND_NO_GRIEF",
            "nameLocation": "1996:20:64",
            "scope": 55229,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 54922,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1970:7:64",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "313030303030",
              "id": 54923,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2019:6:64",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000_by_1",
                "typeString": "int_const 100000"
              },
              "value": "100000"
            },
            "visibility": "internal"
          },
          {
            "id": 54928,
            "nodeType": "VariableDeclaration",
            "src": "2116:123:64",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54925,
              "nodeType": "StructuredDocumentation",
              "src": "2032:79:64",
              "text": "@dev The unique EIP-712 domain domain separator for the DAI token contract."
            },
            "mutability": "constant",
            "name": "DAI_DOMAIN_SEPARATOR",
            "nameLocation": "2142:20:64",
            "scope": 55229,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 54926,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2116:7:64",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307864626238636634326531656362303238626533663364626339323265316438373862393633663431316463333838636564353031363031633630663763366637",
              "id": 54927,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2173:66:64",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_99383044164297460920199564169379472118763403594000230800569066591923778078455_by_1",
                "typeString": "int_const 9938...(69 digits omitted)...8455"
              },
              "value": "0xdbb8cf42e1ecb028be3f3dbc922e1d878b963f411dc388ced501601c60f7c6f7"
            },
            "visibility": "internal"
          },
          {
            "id": 54932,
            "nodeType": "VariableDeclaration",
            "src": "2315:76:64",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54929,
              "nodeType": "StructuredDocumentation",
              "src": "2246:64:64",
              "text": "@dev The address for the WETH9 contract on Ethereum mainnet."
            },
            "mutability": "constant",
            "name": "WETH9",
            "nameLocation": "2341:5:64",
            "scope": 55229,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 54930,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2315:7:64",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307843303261614133396232323346453844304130653543344632376541443930383343373536436332",
              "id": 54931,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2349:42:64",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
            },
            "visibility": "internal"
          },
          {
            "id": 54936,
            "nodeType": "VariableDeclaration",
            "src": "2588:78:64",
            "nodes": [],
            "constant": true,
            "documentation": {
              "id": 54933,
              "nodeType": "StructuredDocumentation",
              "src": "2398:185:64",
              "text": "@dev The canonical Permit2 address.\n [Github](https://github.com/Uniswap/permit2)\n [Etherscan](https://etherscan.io/address/0x000000000022D473030F116dDEE9F6B43aC78BA3)"
            },
            "mutability": "constant",
            "name": "PERMIT2",
            "nameLocation": "2614:7:64",
            "scope": 55229,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 54934,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "2588:7:64",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": {
              "hexValue": "307830303030303030303030323244343733303330463131366444454539463642343361433738424133",
              "id": 54935,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2624:42:64",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "value": "0x000000000022D473030F116dDEE9F6B43aC78BA3"
            },
            "visibility": "internal"
          },
          {
            "id": 54946,
            "nodeType": "FunctionDefinition",
            "src": "3909:342:64",
            "nodes": [],
            "body": {
              "id": 54945,
              "nodeType": "Block",
              "src": "3971:280:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4033:212:64",
                    "nodeType": "YulBlock",
                    "src": "4033:212:64",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "4118:117:64",
                          "nodeType": "YulBlock",
                          "src": "4118:117:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4143:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "4143:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4149:10:64",
                                    "nodeType": "YulLiteral",
                                    "src": "4149:10:64",
                                    "type": "",
                                    "value": "0xb12d13eb"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "4136:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "4136:6:64"
                                },
                                "nativeSrc": "4136:24:64",
                                "nodeType": "YulFunctionCall",
                                "src": "4136:24:64"
                              },
                              "nativeSrc": "4136:24:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "4136:24:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4210:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "4210:4:64",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4216:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "4216:4:64",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "4203:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "4203:6:64"
                                },
                                "nativeSrc": "4203:18:64",
                                "nodeType": "YulFunctionCall",
                                "src": "4203:18:64"
                              },
                              "nativeSrc": "4203:18:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "4203:18:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "gas",
                                    "nativeSrc": "4062:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "4062:3:64"
                                  },
                                  "nativeSrc": "4062:5:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4062:5:64"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "4069:2:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "4069:2:64"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "4073:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "4073:6:64"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "4081:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "4081:8:64"
                                  },
                                  "nativeSrc": "4081:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4081:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4093:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "4093:4:64",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "4099:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "4099:8:64"
                                  },
                                  "nativeSrc": "4099:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4099:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4111:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "4111:4:64",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "4057:4:64",
                                "nodeType": "YulIdentifier",
                                "src": "4057:4:64"
                              },
                              "nativeSrc": "4057:59:64",
                              "nodeType": "YulFunctionCall",
                              "src": "4057:59:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "4050:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "4050:6:64"
                          },
                          "nativeSrc": "4050:67:64",
                          "nodeType": "YulFunctionCall",
                          "src": "4050:67:64"
                        },
                        "nativeSrc": "4047:188:64",
                        "nodeType": "YulIf",
                        "src": "4047:188:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 54941,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4073:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54939,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4069:2:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 54944,
                  "nodeType": "InlineAssembly",
                  "src": "4024:221:64"
                }
              ]
            },
            "documentation": {
              "id": 54937,
              "nodeType": "StructuredDocumentation",
              "src": "3859:45:64",
              "text": "@dev Sends `amount` (in wei) ETH to `to`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferETH",
            "nameLocation": "3918:15:64",
            "parameters": {
              "id": 54942,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54939,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3942:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54946,
                  "src": "3934:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54938,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3934:7:64",
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
                  "id": 54941,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "3954:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54946,
                  "src": "3946:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54940,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3946:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3933:28:64"
            },
            "returnParameters": {
              "id": 54943,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3971:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 54954,
            "nodeType": "FunctionDefinition",
            "src": "4321:406:64",
            "nodes": [],
            "body": {
              "id": 54953,
              "nodeType": "Block",
              "src": "4370:357:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4432:289:64",
                    "nodeType": "YulBlock",
                    "src": "4432:289:64",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "4594:117:64",
                          "nodeType": "YulBlock",
                          "src": "4594:117:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4619:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "4619:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4625:10:64",
                                    "nodeType": "YulLiteral",
                                    "src": "4625:10:64",
                                    "type": "",
                                    "value": "0xb12d13eb"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "4612:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "4612:6:64"
                                },
                                "nativeSrc": "4612:24:64",
                                "nodeType": "YulFunctionCall",
                                "src": "4612:24:64"
                              },
                              "nativeSrc": "4612:24:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "4612:24:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4686:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "4686:4:64",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "4692:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "4692:4:64",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "4679:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "4679:6:64"
                                },
                                "nativeSrc": "4679:18:64",
                                "nodeType": "YulFunctionCall",
                                "src": "4679:18:64"
                              },
                              "nativeSrc": "4679:18:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "4679:18:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "gas",
                                    "nativeSrc": "4531:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "4531:3:64"
                                  },
                                  "nativeSrc": "4531:5:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4531:5:64"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "4538:2:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "4538:2:64"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "selfbalance",
                                    "nativeSrc": "4542:11:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "4542:11:64"
                                  },
                                  "nativeSrc": "4542:13:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4542:13:64"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "4557:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "4557:8:64"
                                  },
                                  "nativeSrc": "4557:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4557:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4569:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "4569:4:64",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "4575:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "4575:8:64"
                                  },
                                  "nativeSrc": "4575:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4575:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4587:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "4587:4:64",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "4526:4:64",
                                "nodeType": "YulIdentifier",
                                "src": "4526:4:64"
                              },
                              "nativeSrc": "4526:66:64",
                              "nodeType": "YulFunctionCall",
                              "src": "4526:66:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "4519:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "4519:6:64"
                          },
                          "nativeSrc": "4519:74:64",
                          "nodeType": "YulFunctionCall",
                          "src": "4519:74:64"
                        },
                        "nativeSrc": "4516:195:64",
                        "nodeType": "YulIf",
                        "src": "4516:195:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 54949,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4538:2:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 54952,
                  "nodeType": "InlineAssembly",
                  "src": "4423:298:64"
                }
              ]
            },
            "documentation": {
              "id": 54947,
              "nodeType": "StructuredDocumentation",
              "src": "4257:59:64",
              "text": "@dev Sends all the ETH in the current contract to `to`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferAllETH",
            "nameLocation": "4330:18:64",
            "parameters": {
              "id": 54950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54949,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4357:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54954,
                  "src": "4349:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54948,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4349:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4348:12:64"
            },
            "returnParameters": {
              "id": 54951,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4370:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 54966,
            "nodeType": "FunctionDefinition",
            "src": "4810:731:64",
            "nodes": [],
            "body": {
              "id": 54965,
              "nodeType": "Block",
              "src": "4897:644:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "4959:576:64",
                    "nodeType": "YulBlock",
                    "src": "4959:576:64",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "5002:117:64",
                          "nodeType": "YulBlock",
                          "src": "5002:117:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5027:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5027:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5033:10:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5033:10:64",
                                    "type": "",
                                    "value": "0xb12d13eb"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "5020:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5020:6:64"
                                },
                                "nativeSrc": "5020:24:64",
                                "nodeType": "YulFunctionCall",
                                "src": "5020:24:64"
                              },
                              "nativeSrc": "5020:24:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "5020:24:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5094:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5094:4:64",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5100:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5100:4:64",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "5087:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5087:6:64"
                                },
                                "nativeSrc": "5087:18:64",
                                "nodeType": "YulFunctionCall",
                                "src": "5087:18:64"
                              },
                              "nativeSrc": "5087:18:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "5087:18:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "selfbalance",
                                "nativeSrc": "4979:11:64",
                                "nodeType": "YulIdentifier",
                                "src": "4979:11:64"
                              },
                              "nativeSrc": "4979:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "4979:13:64"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "4994:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "4994:6:64"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nativeSrc": "4976:2:64",
                            "nodeType": "YulIdentifier",
                            "src": "4976:2:64"
                          },
                          "nativeSrc": "4976:25:64",
                          "nodeType": "YulFunctionCall",
                          "src": "4976:25:64"
                        },
                        "nativeSrc": "4973:146:64",
                        "nodeType": "YulIf",
                        "src": "4973:146:64"
                      },
                      {
                        "body": {
                          "nativeSrc": "5208:317:64",
                          "nodeType": "YulBlock",
                          "src": "5208:317:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5233:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5233:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "to",
                                    "nativeSrc": "5239:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "5239:2:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "5226:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5226:6:64"
                                },
                                "nativeSrc": "5226:16:64",
                                "nodeType": "YulFunctionCall",
                                "src": "5226:16:64"
                              },
                              "nativeSrc": "5226:16:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "5226:16:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5306:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5306:4:64",
                                    "type": "",
                                    "value": "0x0b"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5312:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5312:4:64",
                                    "type": "",
                                    "value": "0x73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "5298:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5298:7:64"
                                },
                                "nativeSrc": "5298:19:64",
                                "nodeType": "YulFunctionCall",
                                "src": "5298:19:64"
                              },
                              "nativeSrc": "5298:19:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "5298:19:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5362:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5362:4:64",
                                    "type": "",
                                    "value": "0x20"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5368:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5368:4:64",
                                    "type": "",
                                    "value": "0xff"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "5354:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5354:7:64"
                                },
                                "nativeSrc": "5354:19:64",
                                "nodeType": "YulFunctionCall",
                                "src": "5354:19:64"
                              },
                              "nativeSrc": "5354:19:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "5354:19:64"
                            },
                            {
                              "body": {
                                "nativeSrc": "5454:34:64",
                                "nodeType": "YulBlock",
                                "src": "5454:34:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "5463:8:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "5463:8:64"
                                          },
                                          "nativeSrc": "5463:10:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "5463:10:64"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "5475:8:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "5475:8:64"
                                          },
                                          "nativeSrc": "5475:10:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "5475:10:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "5456:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "5456:6:64"
                                      },
                                      "nativeSrc": "5456:30:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "5456:30:64"
                                    },
                                    "nativeSrc": "5456:30:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "5456:30:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "amount",
                                        "nativeSrc": "5433:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "5433:6:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5441:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "5441:4:64",
                                        "type": "",
                                        "value": "0x0b"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "5447:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "5447:4:64",
                                        "type": "",
                                        "value": "0x16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "create",
                                      "nativeSrc": "5426:6:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "5426:6:64"
                                    },
                                    "nativeSrc": "5426:26:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5426:26:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "5419:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5419:6:64"
                                },
                                "nativeSrc": "5419:34:64",
                                "nodeType": "YulFunctionCall",
                                "src": "5419:34:64"
                              },
                              "nativeSrc": "5416:72:64",
                              "nodeType": "YulIf",
                              "src": "5416:72:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "gasStipend",
                                  "nativeSrc": "5147:10:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5147:10:64"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "5159:2:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5159:2:64"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "5163:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5163:6:64"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "5171:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "5171:8:64"
                                  },
                                  "nativeSrc": "5171:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5171:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5183:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "5183:4:64",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "5189:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "5189:8:64"
                                  },
                                  "nativeSrc": "5189:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5189:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5201:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "5201:4:64",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "5142:4:64",
                                "nodeType": "YulIdentifier",
                                "src": "5142:4:64"
                              },
                              "nativeSrc": "5142:64:64",
                              "nodeType": "YulFunctionCall",
                              "src": "5142:64:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "5135:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "5135:6:64"
                          },
                          "nativeSrc": "5135:72:64",
                          "nodeType": "YulFunctionCall",
                          "src": "5135:72:64"
                        },
                        "nativeSrc": "5132:393:64",
                        "nodeType": "YulIf",
                        "src": "5132:393:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 54959,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "4994:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54959,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5163:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54959,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5433:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54961,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5147:10:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54957,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5159:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54957,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5239:2:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 54964,
                  "nodeType": "InlineAssembly",
                  "src": "4950:585:64"
                }
              ]
            },
            "documentation": {
              "id": 54955,
              "nodeType": "StructuredDocumentation",
              "src": "4733:72:64",
              "text": "@dev Force sends `amount` (in wei) ETH to `to`, with a `gasStipend`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceSafeTransferETH",
            "nameLocation": "4819:20:64",
            "parameters": {
              "id": 54962,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54957,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4848:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54966,
                  "src": "4840:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54956,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4840:7:64",
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
                  "id": 54959,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "4860:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54966,
                  "src": "4852:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54958,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4852:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 54961,
                  "mutability": "mutable",
                  "name": "gasStipend",
                  "nameLocation": "4876:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54966,
                  "src": "4868:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54960,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4868:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4839:48:64"
            },
            "returnParameters": {
              "id": 54963,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4897:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 54976,
            "nodeType": "FunctionDefinition",
            "src": "5638:573:64",
            "nodes": [],
            "body": {
              "id": 54975,
              "nodeType": "Block",
              "src": "5712:499:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "5774:431:64",
                    "nodeType": "YulBlock",
                    "src": "5774:431:64",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "5871:324:64",
                          "nodeType": "YulBlock",
                          "src": "5871:324:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5896:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5896:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "to",
                                    "nativeSrc": "5902:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "5902:2:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "5889:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5889:6:64"
                                },
                                "nativeSrc": "5889:16:64",
                                "nodeType": "YulFunctionCall",
                                "src": "5889:16:64"
                              },
                              "nativeSrc": "5889:16:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "5889:16:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5969:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5969:4:64",
                                    "type": "",
                                    "value": "0x0b"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "5975:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "5975:4:64",
                                    "type": "",
                                    "value": "0x73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "5961:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5961:7:64"
                                },
                                "nativeSrc": "5961:19:64",
                                "nodeType": "YulFunctionCall",
                                "src": "5961:19:64"
                              },
                              "nativeSrc": "5961:19:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "5961:19:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6025:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6025:4:64",
                                    "type": "",
                                    "value": "0x20"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6031:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6031:4:64",
                                    "type": "",
                                    "value": "0xff"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "6017:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6017:7:64"
                                },
                                "nativeSrc": "6017:19:64",
                                "nodeType": "YulFunctionCall",
                                "src": "6017:19:64"
                              },
                              "nativeSrc": "6017:19:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "6017:19:64"
                            },
                            {
                              "body": {
                                "nativeSrc": "6124:34:64",
                                "nodeType": "YulBlock",
                                "src": "6124:34:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "6133:8:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "6133:8:64"
                                          },
                                          "nativeSrc": "6133:10:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "6133:10:64"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "6145:8:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "6145:8:64"
                                          },
                                          "nativeSrc": "6145:10:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "6145:10:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "6126:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "6126:6:64"
                                      },
                                      "nativeSrc": "6126:30:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "6126:30:64"
                                    },
                                    "nativeSrc": "6126:30:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6126:30:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "selfbalance",
                                          "nativeSrc": "6096:11:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "6096:11:64"
                                        },
                                        "nativeSrc": "6096:13:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "6096:13:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6111:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "6111:4:64",
                                        "type": "",
                                        "value": "0x0b"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6117:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "6117:4:64",
                                        "type": "",
                                        "value": "0x16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "create",
                                      "nativeSrc": "6089:6:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "6089:6:64"
                                    },
                                    "nativeSrc": "6089:33:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6089:33:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "6082:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6082:6:64"
                                },
                                "nativeSrc": "6082:41:64",
                                "nodeType": "YulFunctionCall",
                                "src": "6082:41:64"
                              },
                              "nativeSrc": "6079:79:64",
                              "nodeType": "YulIf",
                              "src": "6079:79:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "gasStipend",
                                  "nativeSrc": "5803:10:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5803:10:64"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "5815:2:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "5815:2:64"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "selfbalance",
                                    "nativeSrc": "5819:11:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "5819:11:64"
                                  },
                                  "nativeSrc": "5819:13:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5819:13:64"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "5834:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "5834:8:64"
                                  },
                                  "nativeSrc": "5834:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5834:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5846:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "5846:4:64",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "5852:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "5852:8:64"
                                  },
                                  "nativeSrc": "5852:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5852:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5864:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "5864:4:64",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "5798:4:64",
                                "nodeType": "YulIdentifier",
                                "src": "5798:4:64"
                              },
                              "nativeSrc": "5798:71:64",
                              "nodeType": "YulFunctionCall",
                              "src": "5798:71:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "5791:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "5791:6:64"
                          },
                          "nativeSrc": "5791:79:64",
                          "nodeType": "YulFunctionCall",
                          "src": "5791:79:64"
                        },
                        "nativeSrc": "5788:407:64",
                        "nodeType": "YulIf",
                        "src": "5788:407:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 54971,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5803:10:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54969,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5815:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54969,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5902:2:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 54974,
                  "nodeType": "InlineAssembly",
                  "src": "5765:440:64"
                }
              ]
            },
            "documentation": {
              "id": 54967,
              "nodeType": "StructuredDocumentation",
              "src": "5547:86:64",
              "text": "@dev Force sends all the ETH in the current contract to `to`, with a `gasStipend`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceSafeTransferAllETH",
            "nameLocation": "5647:23:64",
            "parameters": {
              "id": 54972,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54969,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "5679:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54976,
                  "src": "5671:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54968,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5671:7:64",
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
                  "id": 54971,
                  "mutability": "mutable",
                  "name": "gasStipend",
                  "nameLocation": "5691:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54976,
                  "src": "5683:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54970,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5683:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5670:32:64"
            },
            "returnParameters": {
              "id": 54973,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5712:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 54986,
            "nodeType": "FunctionDefinition",
            "src": "6302:721:64",
            "nodes": [],
            "body": {
              "id": 54985,
              "nodeType": "Block",
              "src": "6369:654:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "6431:586:64",
                    "nodeType": "YulBlock",
                    "src": "6431:586:64",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "6474:117:64",
                          "nodeType": "YulBlock",
                          "src": "6474:117:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6499:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6499:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6505:10:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6505:10:64",
                                    "type": "",
                                    "value": "0xb12d13eb"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "6492:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6492:6:64"
                                },
                                "nativeSrc": "6492:24:64",
                                "nodeType": "YulFunctionCall",
                                "src": "6492:24:64"
                              },
                              "nativeSrc": "6492:24:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "6492:24:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6566:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6566:4:64",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6572:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6572:4:64",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "6559:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6559:6:64"
                                },
                                "nativeSrc": "6559:18:64",
                                "nodeType": "YulFunctionCall",
                                "src": "6559:18:64"
                              },
                              "nativeSrc": "6559:18:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "6559:18:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "selfbalance",
                                "nativeSrc": "6451:11:64",
                                "nodeType": "YulIdentifier",
                                "src": "6451:11:64"
                              },
                              "nativeSrc": "6451:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "6451:13:64"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "6466:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "6466:6:64"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nativeSrc": "6448:2:64",
                            "nodeType": "YulIdentifier",
                            "src": "6448:2:64"
                          },
                          "nativeSrc": "6448:25:64",
                          "nodeType": "YulFunctionCall",
                          "src": "6448:25:64"
                        },
                        "nativeSrc": "6445:146:64",
                        "nodeType": "YulIf",
                        "src": "6445:146:64"
                      },
                      {
                        "body": {
                          "nativeSrc": "6690:317:64",
                          "nodeType": "YulBlock",
                          "src": "6690:317:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6715:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6715:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "to",
                                    "nativeSrc": "6721:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "6721:2:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "6708:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6708:6:64"
                                },
                                "nativeSrc": "6708:16:64",
                                "nodeType": "YulFunctionCall",
                                "src": "6708:16:64"
                              },
                              "nativeSrc": "6708:16:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "6708:16:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6788:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6788:4:64",
                                    "type": "",
                                    "value": "0x0b"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6794:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6794:4:64",
                                    "type": "",
                                    "value": "0x73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "6780:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6780:7:64"
                                },
                                "nativeSrc": "6780:19:64",
                                "nodeType": "YulFunctionCall",
                                "src": "6780:19:64"
                              },
                              "nativeSrc": "6780:19:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "6780:19:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6844:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6844:4:64",
                                    "type": "",
                                    "value": "0x20"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6850:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "6850:4:64",
                                    "type": "",
                                    "value": "0xff"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "6836:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6836:7:64"
                                },
                                "nativeSrc": "6836:19:64",
                                "nodeType": "YulFunctionCall",
                                "src": "6836:19:64"
                              },
                              "nativeSrc": "6836:19:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "6836:19:64"
                            },
                            {
                              "body": {
                                "nativeSrc": "6936:34:64",
                                "nodeType": "YulBlock",
                                "src": "6936:34:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "6945:8:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "6945:8:64"
                                          },
                                          "nativeSrc": "6945:10:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "6945:10:64"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "6957:8:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "6957:8:64"
                                          },
                                          "nativeSrc": "6957:10:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "6957:10:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "6938:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "6938:6:64"
                                      },
                                      "nativeSrc": "6938:30:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "6938:30:64"
                                    },
                                    "nativeSrc": "6938:30:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6938:30:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "amount",
                                        "nativeSrc": "6915:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "6915:6:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6923:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "6923:4:64",
                                        "type": "",
                                        "value": "0x0b"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "6929:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "6929:4:64",
                                        "type": "",
                                        "value": "0x16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "create",
                                      "nativeSrc": "6908:6:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "6908:6:64"
                                    },
                                    "nativeSrc": "6908:26:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "6908:26:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "6901:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6901:6:64"
                                },
                                "nativeSrc": "6901:34:64",
                                "nodeType": "YulFunctionCall",
                                "src": "6901:34:64"
                              },
                              "nativeSrc": "6898:72:64",
                              "nodeType": "YulIf",
                              "src": "6898:72:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "GAS_STIPEND_NO_GRIEF",
                                  "nativeSrc": "6619:20:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6619:20:64"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "6641:2:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6641:2:64"
                                },
                                {
                                  "name": "amount",
                                  "nativeSrc": "6645:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "6645:6:64"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "6653:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "6653:8:64"
                                  },
                                  "nativeSrc": "6653:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6653:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6665:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "6665:4:64",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "6671:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "6671:8:64"
                                  },
                                  "nativeSrc": "6671:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "6671:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6683:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "6683:4:64",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "6614:4:64",
                                "nodeType": "YulIdentifier",
                                "src": "6614:4:64"
                              },
                              "nativeSrc": "6614:74:64",
                              "nodeType": "YulFunctionCall",
                              "src": "6614:74:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "6607:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "6607:6:64"
                          },
                          "nativeSrc": "6607:82:64",
                          "nodeType": "YulFunctionCall",
                          "src": "6607:82:64"
                        },
                        "nativeSrc": "6604:403:64",
                        "nodeType": "YulIf",
                        "src": "6604:403:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 54924,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6619:20:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54981,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6466:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54981,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6645:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54981,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6915:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54979,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6641:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54979,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "6721:2:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 54984,
                  "nodeType": "InlineAssembly",
                  "src": "6422:595:64"
                }
              ]
            },
            "documentation": {
              "id": 54977,
              "nodeType": "StructuredDocumentation",
              "src": "6217:80:64",
              "text": "@dev Force sends `amount` (in wei) ETH to `to`, with `GAS_STIPEND_NO_GRIEF`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceSafeTransferETH",
            "nameLocation": "6311:20:64",
            "parameters": {
              "id": 54982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54979,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6340:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54986,
                  "src": "6332:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54978,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6332:7:64",
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
                  "id": 54981,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "6352:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54986,
                  "src": "6344:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54980,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6344:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6331:28:64"
            },
            "returnParameters": {
              "id": 54983,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6369:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 54994,
            "nodeType": "FunctionDefinition",
            "src": "7128:606:64",
            "nodes": [],
            "body": {
              "id": 54993,
              "nodeType": "Block",
              "src": "7182:552:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "7244:484:64",
                    "nodeType": "YulBlock",
                    "src": "7244:484:64",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "7394:324:64",
                          "nodeType": "YulBlock",
                          "src": "7394:324:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7419:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "7419:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "name": "to",
                                    "nativeSrc": "7425:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "7425:2:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "7412:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "7412:6:64"
                                },
                                "nativeSrc": "7412:16:64",
                                "nodeType": "YulFunctionCall",
                                "src": "7412:16:64"
                              },
                              "nativeSrc": "7412:16:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "7412:16:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7492:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "7492:4:64",
                                    "type": "",
                                    "value": "0x0b"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7498:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "7498:4:64",
                                    "type": "",
                                    "value": "0x73"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "7484:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "7484:7:64"
                                },
                                "nativeSrc": "7484:19:64",
                                "nodeType": "YulFunctionCall",
                                "src": "7484:19:64"
                              },
                              "nativeSrc": "7484:19:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "7484:19:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7548:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "7548:4:64",
                                    "type": "",
                                    "value": "0x20"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7554:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "7554:4:64",
                                    "type": "",
                                    "value": "0xff"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore8",
                                  "nativeSrc": "7540:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "7540:7:64"
                                },
                                "nativeSrc": "7540:19:64",
                                "nodeType": "YulFunctionCall",
                                "src": "7540:19:64"
                              },
                              "nativeSrc": "7540:19:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "7540:19:64"
                            },
                            {
                              "body": {
                                "nativeSrc": "7647:34:64",
                                "nodeType": "YulBlock",
                                "src": "7647:34:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "7656:8:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "7656:8:64"
                                          },
                                          "nativeSrc": "7656:10:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "7656:10:64"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "7668:8:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "7668:8:64"
                                          },
                                          "nativeSrc": "7668:10:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "7668:10:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "7649:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "7649:6:64"
                                      },
                                      "nativeSrc": "7649:30:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "7649:30:64"
                                    },
                                    "nativeSrc": "7649:30:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "7649:30:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "selfbalance",
                                          "nativeSrc": "7619:11:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "7619:11:64"
                                        },
                                        "nativeSrc": "7619:13:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "7619:13:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "7634:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "7634:4:64",
                                        "type": "",
                                        "value": "0x0b"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "7640:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "7640:4:64",
                                        "type": "",
                                        "value": "0x16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "create",
                                      "nativeSrc": "7612:6:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "7612:6:64"
                                    },
                                    "nativeSrc": "7612:33:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "7612:33:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "7605:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "7605:6:64"
                                },
                                "nativeSrc": "7605:41:64",
                                "nodeType": "YulFunctionCall",
                                "src": "7605:41:64"
                              },
                              "nativeSrc": "7602:79:64",
                              "nodeType": "YulIf",
                              "src": "7602:79:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "GAS_STIPEND_NO_GRIEF",
                                  "nativeSrc": "7316:20:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "7316:20:64"
                                },
                                {
                                  "name": "to",
                                  "nativeSrc": "7338:2:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "7338:2:64"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "selfbalance",
                                    "nativeSrc": "7342:11:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "7342:11:64"
                                  },
                                  "nativeSrc": "7342:13:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "7342:13:64"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "7357:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "7357:8:64"
                                  },
                                  "nativeSrc": "7357:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "7357:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "7369:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "7369:4:64",
                                  "type": "",
                                  "value": "0x00"
                                },
                                {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "codesize",
                                    "nativeSrc": "7375:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "7375:8:64"
                                  },
                                  "nativeSrc": "7375:10:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "7375:10:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "7387:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "7387:4:64",
                                  "type": "",
                                  "value": "0x00"
                                }
                              ],
                              "functionName": {
                                "name": "call",
                                "nativeSrc": "7311:4:64",
                                "nodeType": "YulIdentifier",
                                "src": "7311:4:64"
                              },
                              "nativeSrc": "7311:81:64",
                              "nodeType": "YulFunctionCall",
                              "src": "7311:81:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "7304:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "7304:6:64"
                          },
                          "nativeSrc": "7304:89:64",
                          "nodeType": "YulFunctionCall",
                          "src": "7304:89:64"
                        },
                        "nativeSrc": "7301:417:64",
                        "nodeType": "YulIf",
                        "src": "7301:417:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 54924,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7316:20:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54989,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7338:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54989,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "7425:2:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 54992,
                  "nodeType": "InlineAssembly",
                  "src": "7235:493:64"
                }
              ]
            },
            "documentation": {
              "id": 54987,
              "nodeType": "StructuredDocumentation",
              "src": "7029:94:64",
              "text": "@dev Force sends all the ETH in the current contract to `to`, with `GAS_STIPEND_NO_GRIEF`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forceSafeTransferAllETH",
            "nameLocation": "7137:23:64",
            "parameters": {
              "id": 54990,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54989,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "7169:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 54994,
                  "src": "7161:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54988,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7161:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7160:12:64"
            },
            "returnParameters": {
              "id": 54991,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7182:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55008,
            "nodeType": "FunctionDefinition",
            "src": "7811:295:64",
            "nodes": [],
            "body": {
              "id": 55007,
              "nodeType": "Block",
              "src": "7939:167:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "8001:99:64",
                    "nodeType": "YulBlock",
                    "src": "8001:99:64",
                    "statements": [
                      {
                        "nativeSrc": "8015:75:64",
                        "nodeType": "YulAssignment",
                        "src": "8015:75:64",
                        "value": {
                          "arguments": [
                            {
                              "name": "gasStipend",
                              "nativeSrc": "8031:10:64",
                              "nodeType": "YulIdentifier",
                              "src": "8031:10:64"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "8043:2:64",
                              "nodeType": "YulIdentifier",
                              "src": "8043:2:64"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "8047:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "8047:6:64"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "8055:8:64",
                                "nodeType": "YulIdentifier",
                                "src": "8055:8:64"
                              },
                              "nativeSrc": "8055:10:64",
                              "nodeType": "YulFunctionCall",
                              "src": "8055:10:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8067:4:64",
                              "nodeType": "YulLiteral",
                              "src": "8067:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "8073:8:64",
                                "nodeType": "YulIdentifier",
                                "src": "8073:8:64"
                              },
                              "nativeSrc": "8073:10:64",
                              "nodeType": "YulFunctionCall",
                              "src": "8073:10:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8085:4:64",
                              "nodeType": "YulLiteral",
                              "src": "8085:4:64",
                              "type": "",
                              "value": "0x00"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "8026:4:64",
                            "nodeType": "YulIdentifier",
                            "src": "8026:4:64"
                          },
                          "nativeSrc": "8026:64:64",
                          "nodeType": "YulFunctionCall",
                          "src": "8026:64:64"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nativeSrc": "8015:7:64",
                            "nodeType": "YulIdentifier",
                            "src": "8015:7:64"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 54999,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8047:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55001,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8031:10:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55004,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8015:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54997,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8043:2:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55006,
                  "nodeType": "InlineAssembly",
                  "src": "7992:108:64"
                }
              ]
            },
            "documentation": {
              "id": 54995,
              "nodeType": "StructuredDocumentation",
              "src": "7740:66:64",
              "text": "@dev Sends `amount` (in wei) ETH to `to`, with a `gasStipend`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "trySafeTransferETH",
            "nameLocation": "7820:18:64",
            "parameters": {
              "id": 55002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54997,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "7847:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55008,
                  "src": "7839:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 54996,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7839:7:64",
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
                  "id": 54999,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "7859:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55008,
                  "src": "7851:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54998,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7851:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55001,
                  "mutability": "mutable",
                  "name": "gasStipend",
                  "nameLocation": "7875:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55008,
                  "src": "7867:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55000,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7867:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7838:48:64"
            },
            "returnParameters": {
              "id": 55005,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55004,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "7926:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55008,
                  "src": "7921:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 55003,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7921:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7920:14:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55020,
            "nodeType": "FunctionDefinition",
            "src": "8197:289:64",
            "nodes": [],
            "body": {
              "id": 55019,
              "nodeType": "Block",
              "src": "8312:174:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "8374:106:64",
                    "nodeType": "YulBlock",
                    "src": "8374:106:64",
                    "statements": [
                      {
                        "nativeSrc": "8388:82:64",
                        "nodeType": "YulAssignment",
                        "src": "8388:82:64",
                        "value": {
                          "arguments": [
                            {
                              "name": "gasStipend",
                              "nativeSrc": "8404:10:64",
                              "nodeType": "YulIdentifier",
                              "src": "8404:10:64"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "8416:2:64",
                              "nodeType": "YulIdentifier",
                              "src": "8416:2:64"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "selfbalance",
                                "nativeSrc": "8420:11:64",
                                "nodeType": "YulIdentifier",
                                "src": "8420:11:64"
                              },
                              "nativeSrc": "8420:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "8420:13:64"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "8435:8:64",
                                "nodeType": "YulIdentifier",
                                "src": "8435:8:64"
                              },
                              "nativeSrc": "8435:10:64",
                              "nodeType": "YulFunctionCall",
                              "src": "8435:10:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8447:4:64",
                              "nodeType": "YulLiteral",
                              "src": "8447:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "codesize",
                                "nativeSrc": "8453:8:64",
                                "nodeType": "YulIdentifier",
                                "src": "8453:8:64"
                              },
                              "nativeSrc": "8453:10:64",
                              "nodeType": "YulFunctionCall",
                              "src": "8453:10:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8465:4:64",
                              "nodeType": "YulLiteral",
                              "src": "8465:4:64",
                              "type": "",
                              "value": "0x00"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "8399:4:64",
                            "nodeType": "YulIdentifier",
                            "src": "8399:4:64"
                          },
                          "nativeSrc": "8399:71:64",
                          "nodeType": "YulFunctionCall",
                          "src": "8399:71:64"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nativeSrc": "8388:7:64",
                            "nodeType": "YulIdentifier",
                            "src": "8388:7:64"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 55013,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8404:10:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55016,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8388:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55011,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "8416:2:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55018,
                  "nodeType": "InlineAssembly",
                  "src": "8365:115:64"
                }
              ]
            },
            "documentation": {
              "id": 55009,
              "nodeType": "StructuredDocumentation",
              "src": "8112:80:64",
              "text": "@dev Sends all the ETH in the current contract to `to`, with a `gasStipend`."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "trySafeTransferAllETH",
            "nameLocation": "8206:21:64",
            "parameters": {
              "id": 55014,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55011,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "8236:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55020,
                  "src": "8228:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55010,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8228:7:64",
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
                  "id": 55013,
                  "mutability": "mutable",
                  "name": "gasStipend",
                  "nameLocation": "8248:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55020,
                  "src": "8240:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55012,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8240:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8227:32:64"
            },
            "returnParameters": {
              "id": 55017,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55016,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "8299:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55020,
                  "src": "8294:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 55015,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8294:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8293:14:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55034,
            "nodeType": "FunctionDefinition",
            "src": "8987:1026:64",
            "nodes": [],
            "body": {
              "id": 55033,
              "nodeType": "Block",
              "src": "9079:934:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "9141:866:64",
                    "nodeType": "YulBlock",
                    "src": "9141:866:64",
                    "statements": [
                      {
                        "nativeSrc": "9155:20:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "9155:20:64",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9170:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9170:4:64",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "9164:5:64",
                            "nodeType": "YulIdentifier",
                            "src": "9164:5:64"
                          },
                          "nativeSrc": "9164:11:64",
                          "nodeType": "YulFunctionCall",
                          "src": "9164:11:64"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "9159:1:64",
                            "nodeType": "YulTypedName",
                            "src": "9159:1:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9229:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9229:4:64",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "9235:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "9235:6:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9222:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "9222:6:64"
                          },
                          "nativeSrc": "9222:20:64",
                          "nodeType": "YulFunctionCall",
                          "src": "9222:20:64"
                        },
                        "nativeSrc": "9222:20:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "9222:20:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9294:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9294:4:64",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "9300:2:64",
                              "nodeType": "YulIdentifier",
                              "src": "9300:2:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9287:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "9287:6:64"
                          },
                          "nativeSrc": "9287:16:64",
                          "nodeType": "YulFunctionCall",
                          "src": "9287:16:64"
                        },
                        "nativeSrc": "9287:16:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "9287:16:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9351:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9351:4:64",
                              "type": "",
                              "value": "0x2c"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "9361:2:64",
                                  "nodeType": "YulLiteral",
                                  "src": "9361:2:64",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "from",
                                  "nativeSrc": "9365:4:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "9365:4:64"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "9357:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "9357:3:64"
                              },
                              "nativeSrc": "9357:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "9357:13:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9344:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "9344:6:64"
                          },
                          "nativeSrc": "9344:27:64",
                          "nodeType": "YulFunctionCall",
                          "src": "9344:27:64"
                        },
                        "nativeSrc": "9344:27:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "9344:27:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9421:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9421:4:64",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9427:34:64",
                              "nodeType": "YulLiteral",
                              "src": "9427:34:64",
                              "type": "",
                              "value": "0x23b872dd000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9414:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "9414:6:64"
                          },
                          "nativeSrc": "9414:48:64",
                          "nodeType": "YulFunctionCall",
                          "src": "9414:48:64"
                        },
                        "nativeSrc": "9414:48:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "9414:48:64"
                      },
                      {
                        "nativeSrc": "9519:60:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "9519:60:64",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nativeSrc": "9539:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "9539:3:64"
                              },
                              "nativeSrc": "9539:5:64",
                              "nodeType": "YulFunctionCall",
                              "src": "9539:5:64"
                            },
                            {
                              "name": "token",
                              "nativeSrc": "9546:5:64",
                              "nodeType": "YulIdentifier",
                              "src": "9546:5:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9553:1:64",
                              "nodeType": "YulLiteral",
                              "src": "9553:1:64",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9556:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9556:4:64",
                              "type": "",
                              "value": "0x1c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9562:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9562:4:64",
                              "type": "",
                              "value": "0x64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9568:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9568:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9574:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9574:4:64",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "9534:4:64",
                            "nodeType": "YulIdentifier",
                            "src": "9534:4:64"
                          },
                          "nativeSrc": "9534:45:64",
                          "nodeType": "YulFunctionCall",
                          "src": "9534:45:64"
                        },
                        "variables": [
                          {
                            "name": "success",
                            "nativeSrc": "9523:7:64",
                            "nodeType": "YulTypedName",
                            "src": "9523:7:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "9636:235:64",
                          "nodeType": "YulBlock",
                          "src": "9636:235:64",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "9727:130:64",
                                "nodeType": "YulBlock",
                                "src": "9727:130:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "9756:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "9756:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "9762:10:64",
                                          "nodeType": "YulLiteral",
                                          "src": "9762:10:64",
                                          "type": "",
                                          "value": "0x7939f424"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "9749:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "9749:6:64"
                                      },
                                      "nativeSrc": "9749:24:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "9749:24:64"
                                    },
                                    "nativeSrc": "9749:24:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "9749:24:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "9828:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "9828:4:64",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "9834:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "9834:4:64",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "9821:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "9821:6:64"
                                      },
                                      "nativeSrc": "9821:18:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "9821:18:64"
                                    },
                                    "nativeSrc": "9821:18:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "9821:18:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "name": "token",
                                                    "nativeSrc": "9689:5:64",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9689:5:64"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "extcodesize",
                                                  "nativeSrc": "9677:11:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "9677:11:64"
                                                },
                                                "nativeSrc": "9677:18:64",
                                                "nodeType": "YulFunctionCall",
                                                "src": "9677:18:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "9670:6:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "9670:6:64"
                                            },
                                            "nativeSrc": "9670:26:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "9670:26:64"
                                          },
                                          {
                                            "arguments": [],
                                            "functionName": {
                                              "name": "returndatasize",
                                              "nativeSrc": "9698:14:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "9698:14:64"
                                            },
                                            "nativeSrc": "9698:16:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "9698:16:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "or",
                                          "nativeSrc": "9667:2:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "9667:2:64"
                                        },
                                        "nativeSrc": "9667:48:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "9667:48:64"
                                      },
                                      {
                                        "name": "success",
                                        "nativeSrc": "9717:7:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "9717:7:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "lt",
                                      "nativeSrc": "9664:2:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "9664:2:64"
                                    },
                                    "nativeSrc": "9664:61:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "9664:61:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "9657:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "9657:6:64"
                                },
                                "nativeSrc": "9657:69:64",
                                "nodeType": "YulFunctionCall",
                                "src": "9657:69:64"
                              },
                              "nativeSrc": "9654:203:64",
                              "nodeType": "YulIf",
                              "src": "9654:203:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "9615:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "9615:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "9609:5:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "9609:5:64"
                                      },
                                      "nativeSrc": "9609:11:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "9609:11:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "9622:1:64",
                                      "nodeType": "YulLiteral",
                                      "src": "9622:1:64",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nativeSrc": "9606:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "9606:2:64"
                                  },
                                  "nativeSrc": "9606:18:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9606:18:64"
                                },
                                {
                                  "name": "success",
                                  "nativeSrc": "9626:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "9626:7:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "9602:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "9602:3:64"
                              },
                              "nativeSrc": "9602:32:64",
                              "nodeType": "YulFunctionCall",
                              "src": "9602:32:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "9595:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "9595:6:64"
                          },
                          "nativeSrc": "9595:40:64",
                          "nodeType": "YulFunctionCall",
                          "src": "9595:40:64"
                        },
                        "nativeSrc": "9592:279:64",
                        "nodeType": "YulIf",
                        "src": "9592:279:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9891:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9891:4:64",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9897:1:64",
                              "nodeType": "YulLiteral",
                              "src": "9897:1:64",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9884:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "9884:6:64"
                          },
                          "nativeSrc": "9884:15:64",
                          "nodeType": "YulFunctionCall",
                          "src": "9884:15:64"
                        },
                        "nativeSrc": "9884:15:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "9884:15:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "9953:4:64",
                              "nodeType": "YulLiteral",
                              "src": "9953:4:64",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "m",
                              "nativeSrc": "9959:1:64",
                              "nodeType": "YulIdentifier",
                              "src": "9959:1:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9946:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "9946:6:64"
                          },
                          "nativeSrc": "9946:15:64",
                          "nodeType": "YulFunctionCall",
                          "src": "9946:15:64"
                        },
                        "nativeSrc": "9946:15:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "9946:15:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 55029,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9235:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55025,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9365:4:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55027,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9300:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55023,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9546:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55023,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9689:5:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55032,
                  "nodeType": "InlineAssembly",
                  "src": "9132:875:64"
                }
              ]
            },
            "documentation": {
              "id": 55021,
              "nodeType": "StructuredDocumentation",
              "src": "8775:207:64",
              "text": "@dev Sends `amount` of ERC20 `token` from `from` to `to`.\n Reverts upon failure.\n The `from` account must have at least `amount` approved for\n the current contract to manage."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "8996:16:64",
            "parameters": {
              "id": 55030,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55023,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "9021:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55034,
                  "src": "9013:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55022,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9013:7:64",
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
                  "id": 55025,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "9036:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55034,
                  "src": "9028:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55024,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9028:7:64",
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
                  "id": 55027,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "9050:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55034,
                  "src": "9042:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55026,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9042:7:64",
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
                  "id": 55029,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "9062:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55034,
                  "src": "9054:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55028,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9054:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9012:57:64"
            },
            "returnParameters": {
              "id": 55031,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9079:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55050,
            "nodeType": "FunctionDefinition",
            "src": "10193:937:64",
            "nodes": [],
            "body": {
              "id": 55049,
              "nodeType": "Block",
              "src": "10331:799:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "10393:731:64",
                    "nodeType": "YulBlock",
                    "src": "10393:731:64",
                    "statements": [
                      {
                        "nativeSrc": "10407:20:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "10407:20:64",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10422:4:64",
                              "nodeType": "YulLiteral",
                              "src": "10422:4:64",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "10416:5:64",
                            "nodeType": "YulIdentifier",
                            "src": "10416:5:64"
                          },
                          "nativeSrc": "10416:11:64",
                          "nodeType": "YulFunctionCall",
                          "src": "10416:11:64"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "10411:1:64",
                            "nodeType": "YulTypedName",
                            "src": "10411:1:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10481:4:64",
                              "nodeType": "YulLiteral",
                              "src": "10481:4:64",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "10487:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "10487:6:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10474:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "10474:6:64"
                          },
                          "nativeSrc": "10474:20:64",
                          "nodeType": "YulFunctionCall",
                          "src": "10474:20:64"
                        },
                        "nativeSrc": "10474:20:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "10474:20:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10546:4:64",
                              "nodeType": "YulLiteral",
                              "src": "10546:4:64",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "10552:2:64",
                              "nodeType": "YulIdentifier",
                              "src": "10552:2:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10539:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "10539:6:64"
                          },
                          "nativeSrc": "10539:16:64",
                          "nodeType": "YulFunctionCall",
                          "src": "10539:16:64"
                        },
                        "nativeSrc": "10539:16:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "10539:16:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10603:4:64",
                              "nodeType": "YulLiteral",
                              "src": "10603:4:64",
                              "type": "",
                              "value": "0x2c"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "10613:2:64",
                                  "nodeType": "YulLiteral",
                                  "src": "10613:2:64",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "from",
                                  "nativeSrc": "10617:4:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "10617:4:64"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "10609:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "10609:3:64"
                              },
                              "nativeSrc": "10609:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "10609:13:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10596:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "10596:6:64"
                          },
                          "nativeSrc": "10596:27:64",
                          "nodeType": "YulFunctionCall",
                          "src": "10596:27:64"
                        },
                        "nativeSrc": "10596:27:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "10596:27:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "10673:4:64",
                              "nodeType": "YulLiteral",
                              "src": "10673:4:64",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10679:34:64",
                              "nodeType": "YulLiteral",
                              "src": "10679:34:64",
                              "type": "",
                              "value": "0x23b872dd000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10666:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "10666:6:64"
                          },
                          "nativeSrc": "10666:48:64",
                          "nodeType": "YulFunctionCall",
                          "src": "10666:48:64"
                        },
                        "nativeSrc": "10666:48:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "10666:48:64"
                      },
                      {
                        "nativeSrc": "10771:56:64",
                        "nodeType": "YulAssignment",
                        "src": "10771:56:64",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nativeSrc": "10787:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "10787:3:64"
                              },
                              "nativeSrc": "10787:5:64",
                              "nodeType": "YulFunctionCall",
                              "src": "10787:5:64"
                            },
                            {
                              "name": "token",
                              "nativeSrc": "10794:5:64",
                              "nodeType": "YulIdentifier",
                              "src": "10794:5:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10801:1:64",
                              "nodeType": "YulLiteral",
                              "src": "10801:1:64",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10804:4:64",
                              "nodeType": "YulLiteral",
                              "src": "10804:4:64",
                              "type": "",
                              "value": "0x1c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10810:4:64",
                              "nodeType": "YulLiteral",
                              "src": "10810:4:64",
                              "type": "",
                              "value": "0x64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10816:4:64",
                              "nodeType": "YulLiteral",
                              "src": "10816:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10822:4:64",
                              "nodeType": "YulLiteral",
                              "src": "10822:4:64",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "10782:4:64",
                            "nodeType": "YulIdentifier",
                            "src": "10782:4:64"
                          },
                          "nativeSrc": "10782:45:64",
                          "nodeType": "YulFunctionCall",
                          "src": "10782:45:64"
                        },
                        "variableNames": [
                          {
                            "name": "success",
                            "nativeSrc": "10771:7:64",
                            "nodeType": "YulIdentifier",
                            "src": "10771:7:64"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "10884:104:64",
                          "nodeType": "YulBlock",
                          "src": "10884:104:64",
                          "statements": [
                            {
                              "nativeSrc": "10902:72:64",
                              "nodeType": "YulAssignment",
                              "src": "10902:72:64",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "token",
                                                "nativeSrc": "10938:5:64",
                                                "nodeType": "YulIdentifier",
                                                "src": "10938:5:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "extcodesize",
                                              "nativeSrc": "10926:11:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "10926:11:64"
                                            },
                                            "nativeSrc": "10926:18:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "10926:18:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "iszero",
                                          "nativeSrc": "10919:6:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "10919:6:64"
                                        },
                                        "nativeSrc": "10919:26:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "10919:26:64"
                                      },
                                      {
                                        "arguments": [],
                                        "functionName": {
                                          "name": "returndatasize",
                                          "nativeSrc": "10947:14:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "10947:14:64"
                                        },
                                        "nativeSrc": "10947:16:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "10947:16:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "or",
                                      "nativeSrc": "10916:2:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "10916:2:64"
                                    },
                                    "nativeSrc": "10916:48:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "10916:48:64"
                                  },
                                  {
                                    "name": "success",
                                    "nativeSrc": "10966:7:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "10966:7:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nativeSrc": "10913:2:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "10913:2:64"
                                },
                                "nativeSrc": "10913:61:64",
                                "nodeType": "YulFunctionCall",
                                "src": "10913:61:64"
                              },
                              "variableNames": [
                                {
                                  "name": "success",
                                  "nativeSrc": "10902:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "10902:7:64"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "10863:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "10863:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "10857:5:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "10857:5:64"
                                      },
                                      "nativeSrc": "10857:11:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "10857:11:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "10870:1:64",
                                      "nodeType": "YulLiteral",
                                      "src": "10870:1:64",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nativeSrc": "10854:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "10854:2:64"
                                  },
                                  "nativeSrc": "10854:18:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "10854:18:64"
                                },
                                {
                                  "name": "success",
                                  "nativeSrc": "10874:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "10874:7:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "10850:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "10850:3:64"
                              },
                              "nativeSrc": "10850:32:64",
                              "nodeType": "YulFunctionCall",
                              "src": "10850:32:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "10843:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "10843:6:64"
                          },
                          "nativeSrc": "10843:40:64",
                          "nodeType": "YulFunctionCall",
                          "src": "10843:40:64"
                        },
                        "nativeSrc": "10840:148:64",
                        "nodeType": "YulIf",
                        "src": "10840:148:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11008:4:64",
                              "nodeType": "YulLiteral",
                              "src": "11008:4:64",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11014:1:64",
                              "nodeType": "YulLiteral",
                              "src": "11014:1:64",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11001:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "11001:6:64"
                          },
                          "nativeSrc": "11001:15:64",
                          "nodeType": "YulFunctionCall",
                          "src": "11001:15:64"
                        },
                        "nativeSrc": "11001:15:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "11001:15:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11070:4:64",
                              "nodeType": "YulLiteral",
                              "src": "11070:4:64",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "m",
                              "nativeSrc": "11076:1:64",
                              "nodeType": "YulIdentifier",
                              "src": "11076:1:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11063:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "11063:6:64"
                          },
                          "nativeSrc": "11063:15:64",
                          "nodeType": "YulFunctionCall",
                          "src": "11063:15:64"
                        },
                        "nativeSrc": "11063:15:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "11063:15:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 55043,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10487:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55039,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10617:4:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55046,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10771:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55046,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10874:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55046,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10902:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55046,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10966:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55041,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10552:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55037,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10794:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55037,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "10938:5:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55048,
                  "nodeType": "InlineAssembly",
                  "src": "10384:740:64"
                }
              ]
            },
            "documentation": {
              "id": 55035,
              "nodeType": "StructuredDocumentation",
              "src": "10019:169:64",
              "text": "@dev Sends `amount` of ERC20 `token` from `from` to `to`.\n The `from` account must have at least `amount` approved for the current contract to manage."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "trySafeTransferFrom",
            "nameLocation": "10202:19:64",
            "parameters": {
              "id": 55044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55037,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "10230:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55050,
                  "src": "10222:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55036,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10222:7:64",
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
                  "id": 55039,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "10245:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55050,
                  "src": "10237:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55038,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10237:7:64",
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
                  "id": 55041,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "10259:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55050,
                  "src": "10251:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55040,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10251:7:64",
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
                  "id": 55043,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "10271:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55050,
                  "src": "10263:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55042,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10263:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10221:57:64"
            },
            "returnParameters": {
              "id": 55047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55046,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "10318:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55050,
                  "src": "10313:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 55045,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10313:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10312:14:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55064,
            "nodeType": "FunctionDefinition",
            "src": "11338:1671:64",
            "nodes": [],
            "body": {
              "id": 55063,
              "nodeType": "Block",
              "src": "11462:1547:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "11524:1479:64",
                    "nodeType": "YulBlock",
                    "src": "11524:1479:64",
                    "statements": [
                      {
                        "nativeSrc": "11538:20:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "11538:20:64",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11553:4:64",
                              "nodeType": "YulLiteral",
                              "src": "11553:4:64",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "11547:5:64",
                            "nodeType": "YulIdentifier",
                            "src": "11547:5:64"
                          },
                          "nativeSrc": "11547:11:64",
                          "nodeType": "YulFunctionCall",
                          "src": "11547:11:64"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "11542:1:64",
                            "nodeType": "YulTypedName",
                            "src": "11542:1:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11612:4:64",
                              "nodeType": "YulLiteral",
                              "src": "11612:4:64",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "11618:2:64",
                              "nodeType": "YulIdentifier",
                              "src": "11618:2:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11605:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "11605:6:64"
                          },
                          "nativeSrc": "11605:16:64",
                          "nodeType": "YulFunctionCall",
                          "src": "11605:16:64"
                        },
                        "nativeSrc": "11605:16:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "11605:16:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11669:4:64",
                              "nodeType": "YulLiteral",
                              "src": "11669:4:64",
                              "type": "",
                              "value": "0x2c"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "11679:2:64",
                                  "nodeType": "YulLiteral",
                                  "src": "11679:2:64",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "from",
                                  "nativeSrc": "11683:4:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "11683:4:64"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "11675:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "11675:3:64"
                              },
                              "nativeSrc": "11675:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "11675:13:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11662:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "11662:6:64"
                          },
                          "nativeSrc": "11662:27:64",
                          "nodeType": "YulFunctionCall",
                          "src": "11662:27:64"
                        },
                        "nativeSrc": "11662:27:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "11662:27:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "11739:4:64",
                              "nodeType": "YulLiteral",
                              "src": "11739:4:64",
                              "type": "",
                              "value": "0x0c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11745:34:64",
                              "nodeType": "YulLiteral",
                              "src": "11745:34:64",
                              "type": "",
                              "value": "0x70a08231000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11732:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "11732:6:64"
                          },
                          "nativeSrc": "11732:48:64",
                          "nodeType": "YulFunctionCall",
                          "src": "11732:48:64"
                        },
                        "nativeSrc": "11732:48:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "11732:48:64"
                      },
                      {
                        "body": {
                          "nativeSrc": "12147:118:64",
                          "nodeType": "YulBlock",
                          "src": "12147:118:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "12172:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "12172:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "12178:10:64",
                                    "nodeType": "YulLiteral",
                                    "src": "12178:10:64",
                                    "type": "",
                                    "value": "0x7939f424"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "12165:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "12165:6:64"
                                },
                                "nativeSrc": "12165:24:64",
                                "nodeType": "YulFunctionCall",
                                "src": "12165:24:64"
                              },
                              "nativeSrc": "12165:24:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "12165:24:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "12240:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "12240:4:64",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "12246:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "12246:4:64",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "12233:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "12233:6:64"
                                },
                                "nativeSrc": "12233:18:64",
                                "nodeType": "YulFunctionCall",
                                "src": "12233:18:64"
                              },
                              "nativeSrc": "12233:18:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "12233:18:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "11990:14:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "11990:14:64"
                                      },
                                      "nativeSrc": "11990:16:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "11990:16:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12008:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "12008:4:64",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nativeSrc": "11987:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "11987:2:64"
                                  },
                                  "nativeSrc": "11987:26:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "11987:26:64"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "12077:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "12077:3:64"
                                      },
                                      "nativeSrc": "12077:5:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "12077:5:64"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "12084:5:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "12084:5:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12091:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "12091:4:64",
                                      "type": "",
                                      "value": "0x1c"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12097:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "12097:4:64",
                                      "type": "",
                                      "value": "0x24"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12103:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "12103:4:64",
                                      "type": "",
                                      "value": "0x60"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12109:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "12109:4:64",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "staticcall",
                                    "nativeSrc": "12066:10:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "12066:10:64"
                                  },
                                  "nativeSrc": "12066:48:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "12066:48:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "11902:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "11902:3:64"
                              },
                              "nativeSrc": "11902:230:64",
                              "nodeType": "YulFunctionCall",
                              "src": "11902:230:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "11878:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "11878:6:64"
                          },
                          "nativeSrc": "11878:268:64",
                          "nodeType": "YulFunctionCall",
                          "src": "11878:268:64"
                        },
                        "nativeSrc": "11875:390:64",
                        "nodeType": "YulIf",
                        "src": "11875:390:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "12285:4:64",
                              "nodeType": "YulLiteral",
                              "src": "12285:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12291:10:64",
                              "nodeType": "YulLiteral",
                              "src": "12291:10:64",
                              "type": "",
                              "value": "0x23b872dd"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "12278:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "12278:6:64"
                          },
                          "nativeSrc": "12278:24:64",
                          "nodeType": "YulFunctionCall",
                          "src": "12278:24:64"
                        },
                        "nativeSrc": "12278:24:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "12278:24:64"
                      },
                      {
                        "nativeSrc": "12359:21:64",
                        "nodeType": "YulAssignment",
                        "src": "12359:21:64",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "12375:4:64",
                              "nodeType": "YulLiteral",
                              "src": "12375:4:64",
                              "type": "",
                              "value": "0x60"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "12369:5:64",
                            "nodeType": "YulIdentifier",
                            "src": "12369:5:64"
                          },
                          "nativeSrc": "12369:11:64",
                          "nodeType": "YulFunctionCall",
                          "src": "12369:11:64"
                        },
                        "variableNames": [
                          {
                            "name": "amount",
                            "nativeSrc": "12359:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "12359:6:64"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "12515:60:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "12515:60:64",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nativeSrc": "12535:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "12535:3:64"
                              },
                              "nativeSrc": "12535:5:64",
                              "nodeType": "YulFunctionCall",
                              "src": "12535:5:64"
                            },
                            {
                              "name": "token",
                              "nativeSrc": "12542:5:64",
                              "nodeType": "YulIdentifier",
                              "src": "12542:5:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12549:1:64",
                              "nodeType": "YulLiteral",
                              "src": "12549:1:64",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12552:4:64",
                              "nodeType": "YulLiteral",
                              "src": "12552:4:64",
                              "type": "",
                              "value": "0x1c"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12558:4:64",
                              "nodeType": "YulLiteral",
                              "src": "12558:4:64",
                              "type": "",
                              "value": "0x64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12564:4:64",
                              "nodeType": "YulLiteral",
                              "src": "12564:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12570:4:64",
                              "nodeType": "YulLiteral",
                              "src": "12570:4:64",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "12530:4:64",
                            "nodeType": "YulIdentifier",
                            "src": "12530:4:64"
                          },
                          "nativeSrc": "12530:45:64",
                          "nodeType": "YulFunctionCall",
                          "src": "12530:45:64"
                        },
                        "variables": [
                          {
                            "name": "success",
                            "nativeSrc": "12519:7:64",
                            "nodeType": "YulTypedName",
                            "src": "12519:7:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "12632:235:64",
                          "nodeType": "YulBlock",
                          "src": "12632:235:64",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "12723:130:64",
                                "nodeType": "YulBlock",
                                "src": "12723:130:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "12752:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "12752:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "12758:10:64",
                                          "nodeType": "YulLiteral",
                                          "src": "12758:10:64",
                                          "type": "",
                                          "value": "0x7939f424"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "12745:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "12745:6:64"
                                      },
                                      "nativeSrc": "12745:24:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "12745:24:64"
                                    },
                                    "nativeSrc": "12745:24:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "12745:24:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "12824:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "12824:4:64",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "12830:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "12830:4:64",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "12817:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "12817:6:64"
                                      },
                                      "nativeSrc": "12817:18:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "12817:18:64"
                                    },
                                    "nativeSrc": "12817:18:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "12817:18:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "name": "token",
                                                    "nativeSrc": "12685:5:64",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "12685:5:64"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "extcodesize",
                                                  "nativeSrc": "12673:11:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "12673:11:64"
                                                },
                                                "nativeSrc": "12673:18:64",
                                                "nodeType": "YulFunctionCall",
                                                "src": "12673:18:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "12666:6:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "12666:6:64"
                                            },
                                            "nativeSrc": "12666:26:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "12666:26:64"
                                          },
                                          {
                                            "arguments": [],
                                            "functionName": {
                                              "name": "returndatasize",
                                              "nativeSrc": "12694:14:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "12694:14:64"
                                            },
                                            "nativeSrc": "12694:16:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "12694:16:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "or",
                                          "nativeSrc": "12663:2:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "12663:2:64"
                                        },
                                        "nativeSrc": "12663:48:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "12663:48:64"
                                      },
                                      {
                                        "name": "success",
                                        "nativeSrc": "12713:7:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "12713:7:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "lt",
                                      "nativeSrc": "12660:2:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "12660:2:64"
                                    },
                                    "nativeSrc": "12660:61:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "12660:61:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "12653:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "12653:6:64"
                                },
                                "nativeSrc": "12653:69:64",
                                "nodeType": "YulFunctionCall",
                                "src": "12653:69:64"
                              },
                              "nativeSrc": "12650:203:64",
                              "nodeType": "YulIf",
                              "src": "12650:203:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "12611:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "12611:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "12605:5:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "12605:5:64"
                                      },
                                      "nativeSrc": "12605:11:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "12605:11:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "12618:1:64",
                                      "nodeType": "YulLiteral",
                                      "src": "12618:1:64",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nativeSrc": "12602:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "12602:2:64"
                                  },
                                  "nativeSrc": "12602:18:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "12602:18:64"
                                },
                                {
                                  "name": "success",
                                  "nativeSrc": "12622:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "12622:7:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "12598:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "12598:3:64"
                              },
                              "nativeSrc": "12598:32:64",
                              "nodeType": "YulFunctionCall",
                              "src": "12598:32:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "12591:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "12591:6:64"
                          },
                          "nativeSrc": "12591:40:64",
                          "nodeType": "YulFunctionCall",
                          "src": "12591:40:64"
                        },
                        "nativeSrc": "12588:279:64",
                        "nodeType": "YulIf",
                        "src": "12588:279:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "12887:4:64",
                              "nodeType": "YulLiteral",
                              "src": "12887:4:64",
                              "type": "",
                              "value": "0x60"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12893:1:64",
                              "nodeType": "YulLiteral",
                              "src": "12893:1:64",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "12880:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "12880:6:64"
                          },
                          "nativeSrc": "12880:15:64",
                          "nodeType": "YulFunctionCall",
                          "src": "12880:15:64"
                        },
                        "nativeSrc": "12880:15:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "12880:15:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "12949:4:64",
                              "nodeType": "YulLiteral",
                              "src": "12949:4:64",
                              "type": "",
                              "value": "0x40"
                            },
                            {
                              "name": "m",
                              "nativeSrc": "12955:1:64",
                              "nodeType": "YulIdentifier",
                              "src": "12955:1:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "12942:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "12942:6:64"
                          },
                          "nativeSrc": "12942:15:64",
                          "nodeType": "YulFunctionCall",
                          "src": "12942:15:64"
                        },
                        "nativeSrc": "12942:15:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "12942:15:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 55060,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12359:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55055,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11683:4:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55057,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11618:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55053,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12084:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55053,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12542:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55053,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "12685:5:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55062,
                  "nodeType": "InlineAssembly",
                  "src": "11515:1488:64"
                }
              ]
            },
            "documentation": {
              "id": 55051,
              "nodeType": "StructuredDocumentation",
              "src": "11136:197:64",
              "text": "@dev Sends all of ERC20 `token` from `from` to `to`.\n Reverts upon failure.\n The `from` account must have their entire balance approved for the current contract to manage."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferAllFrom",
            "nameLocation": "11347:19:64",
            "parameters": {
              "id": 55058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55053,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "11375:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55064,
                  "src": "11367:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55052,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11367:7:64",
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
                  "id": 55055,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "11390:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55064,
                  "src": "11382:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55054,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11382:7:64",
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
                  "id": 55057,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "11404:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55064,
                  "src": "11396:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55056,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11396:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11366:41:64"
            },
            "returnParameters": {
              "id": 55061,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55060,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "11450:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55064,
                  "src": "11442:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55059,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11442:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11441:16:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55076,
            "nodeType": "FunctionDefinition",
            "src": "13125:887:64",
            "nodes": [],
            "body": {
              "id": 55075,
              "nodeType": "Block",
              "src": "13199:813:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "13261:745:64",
                    "nodeType": "YulBlock",
                    "src": "13261:745:64",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13282:4:64",
                              "nodeType": "YulLiteral",
                              "src": "13282:4:64",
                              "type": "",
                              "value": "0x14"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "13288:2:64",
                              "nodeType": "YulIdentifier",
                              "src": "13288:2:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13275:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "13275:6:64"
                          },
                          "nativeSrc": "13275:16:64",
                          "nodeType": "YulFunctionCall",
                          "src": "13275:16:64"
                        },
                        "nativeSrc": "13275:16:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "13275:16:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13339:4:64",
                              "nodeType": "YulLiteral",
                              "src": "13339:4:64",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "13345:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "13345:6:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13332:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "13332:6:64"
                          },
                          "nativeSrc": "13332:20:64",
                          "nodeType": "YulFunctionCall",
                          "src": "13332:20:64"
                        },
                        "nativeSrc": "13332:20:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "13332:20:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13404:4:64",
                              "nodeType": "YulLiteral",
                              "src": "13404:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13410:34:64",
                              "nodeType": "YulLiteral",
                              "src": "13410:34:64",
                              "type": "",
                              "value": "0xa9059cbb000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13397:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "13397:6:64"
                          },
                          "nativeSrc": "13397:48:64",
                          "nodeType": "YulFunctionCall",
                          "src": "13397:48:64"
                        },
                        "nativeSrc": "13397:48:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "13397:48:64"
                      },
                      {
                        "nativeSrc": "13551:60:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "13551:60:64",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nativeSrc": "13571:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "13571:3:64"
                              },
                              "nativeSrc": "13571:5:64",
                              "nodeType": "YulFunctionCall",
                              "src": "13571:5:64"
                            },
                            {
                              "name": "token",
                              "nativeSrc": "13578:5:64",
                              "nodeType": "YulIdentifier",
                              "src": "13578:5:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13585:1:64",
                              "nodeType": "YulLiteral",
                              "src": "13585:1:64",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13588:4:64",
                              "nodeType": "YulLiteral",
                              "src": "13588:4:64",
                              "type": "",
                              "value": "0x10"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13594:4:64",
                              "nodeType": "YulLiteral",
                              "src": "13594:4:64",
                              "type": "",
                              "value": "0x44"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13600:4:64",
                              "nodeType": "YulLiteral",
                              "src": "13600:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13606:4:64",
                              "nodeType": "YulLiteral",
                              "src": "13606:4:64",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "13566:4:64",
                            "nodeType": "YulIdentifier",
                            "src": "13566:4:64"
                          },
                          "nativeSrc": "13566:45:64",
                          "nodeType": "YulFunctionCall",
                          "src": "13566:45:64"
                        },
                        "variables": [
                          {
                            "name": "success",
                            "nativeSrc": "13555:7:64",
                            "nodeType": "YulTypedName",
                            "src": "13555:7:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "13668:231:64",
                          "nodeType": "YulBlock",
                          "src": "13668:231:64",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "13759:126:64",
                                "nodeType": "YulBlock",
                                "src": "13759:126:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "13788:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "13788:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "13794:10:64",
                                          "nodeType": "YulLiteral",
                                          "src": "13794:10:64",
                                          "type": "",
                                          "value": "0x90b8ec18"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "13781:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "13781:6:64"
                                      },
                                      "nativeSrc": "13781:24:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "13781:24:64"
                                    },
                                    "nativeSrc": "13781:24:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "13781:24:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "13856:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "13856:4:64",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "13862:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "13862:4:64",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "13849:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "13849:6:64"
                                      },
                                      "nativeSrc": "13849:18:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "13849:18:64"
                                    },
                                    "nativeSrc": "13849:18:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "13849:18:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "name": "token",
                                                    "nativeSrc": "13721:5:64",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "13721:5:64"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "extcodesize",
                                                  "nativeSrc": "13709:11:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "13709:11:64"
                                                },
                                                "nativeSrc": "13709:18:64",
                                                "nodeType": "YulFunctionCall",
                                                "src": "13709:18:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "13702:6:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "13702:6:64"
                                            },
                                            "nativeSrc": "13702:26:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "13702:26:64"
                                          },
                                          {
                                            "arguments": [],
                                            "functionName": {
                                              "name": "returndatasize",
                                              "nativeSrc": "13730:14:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "13730:14:64"
                                            },
                                            "nativeSrc": "13730:16:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "13730:16:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "or",
                                          "nativeSrc": "13699:2:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "13699:2:64"
                                        },
                                        "nativeSrc": "13699:48:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "13699:48:64"
                                      },
                                      {
                                        "name": "success",
                                        "nativeSrc": "13749:7:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "13749:7:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "lt",
                                      "nativeSrc": "13696:2:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "13696:2:64"
                                    },
                                    "nativeSrc": "13696:61:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "13696:61:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "13689:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "13689:6:64"
                                },
                                "nativeSrc": "13689:69:64",
                                "nodeType": "YulFunctionCall",
                                "src": "13689:69:64"
                              },
                              "nativeSrc": "13686:199:64",
                              "nodeType": "YulIf",
                              "src": "13686:199:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "13647:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "13647:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "13641:5:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "13641:5:64"
                                      },
                                      "nativeSrc": "13641:11:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "13641:11:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "13654:1:64",
                                      "nodeType": "YulLiteral",
                                      "src": "13654:1:64",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nativeSrc": "13638:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "13638:2:64"
                                  },
                                  "nativeSrc": "13638:18:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "13638:18:64"
                                },
                                {
                                  "name": "success",
                                  "nativeSrc": "13658:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "13658:7:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "13634:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "13634:3:64"
                              },
                              "nativeSrc": "13634:32:64",
                              "nodeType": "YulFunctionCall",
                              "src": "13634:32:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "13627:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "13627:6:64"
                          },
                          "nativeSrc": "13627:40:64",
                          "nodeType": "YulFunctionCall",
                          "src": "13627:40:64"
                        },
                        "nativeSrc": "13624:275:64",
                        "nodeType": "YulIf",
                        "src": "13624:275:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "13919:4:64",
                              "nodeType": "YulLiteral",
                              "src": "13919:4:64",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13925:1:64",
                              "nodeType": "YulLiteral",
                              "src": "13925:1:64",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13912:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "13912:6:64"
                          },
                          "nativeSrc": "13912:15:64",
                          "nodeType": "YulFunctionCall",
                          "src": "13912:15:64"
                        },
                        "nativeSrc": "13912:15:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "13912:15:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 55071,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13345:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55069,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13288:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55067,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13578:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55067,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "13721:5:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55074,
                  "nodeType": "InlineAssembly",
                  "src": "13252:754:64"
                }
              ]
            },
            "documentation": {
              "id": 55065,
              "nodeType": "StructuredDocumentation",
              "src": "13015:105:64",
              "text": "@dev Sends `amount` of ERC20 `token` from the current contract to `to`.\n Reverts upon failure."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransfer",
            "nameLocation": "13134:12:64",
            "parameters": {
              "id": 55072,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55067,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "13155:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55076,
                  "src": "13147:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55066,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13147:7:64",
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
                  "id": 55069,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "13170:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55076,
                  "src": "13162:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55068,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13162:7:64",
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
                  "id": 55071,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "13182:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55076,
                  "src": "13174:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55070,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13174:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13146:43:64"
            },
            "returnParameters": {
              "id": 55073,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13199:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55088,
            "nodeType": "FunctionDefinition",
            "src": "14123:1560:64",
            "nodes": [],
            "body": {
              "id": 55087,
              "nodeType": "Block",
              "src": "14209:1474:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "14271:1406:64",
                    "nodeType": "YulBlock",
                    "src": "14271:1406:64",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14292:4:64",
                              "nodeType": "YulLiteral",
                              "src": "14292:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "14298:10:64",
                              "nodeType": "YulLiteral",
                              "src": "14298:10:64",
                              "type": "",
                              "value": "0x70a08231"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14285:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "14285:6:64"
                          },
                          "nativeSrc": "14285:24:64",
                          "nodeType": "YulFunctionCall",
                          "src": "14285:24:64"
                        },
                        "nativeSrc": "14285:24:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "14285:24:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14385:4:64",
                              "nodeType": "YulLiteral",
                              "src": "14385:4:64",
                              "type": "",
                              "value": "0x20"
                            },
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "address",
                                "nativeSrc": "14391:7:64",
                                "nodeType": "YulIdentifier",
                                "src": "14391:7:64"
                              },
                              "nativeSrc": "14391:9:64",
                              "nodeType": "YulFunctionCall",
                              "src": "14391:9:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14378:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "14378:6:64"
                          },
                          "nativeSrc": "14378:23:64",
                          "nodeType": "YulFunctionCall",
                          "src": "14378:23:64"
                        },
                        "nativeSrc": "14378:23:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "14378:23:64"
                      },
                      {
                        "body": {
                          "nativeSrc": "14789:114:64",
                          "nodeType": "YulBlock",
                          "src": "14789:114:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "14814:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "14814:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "14820:10:64",
                                    "nodeType": "YulLiteral",
                                    "src": "14820:10:64",
                                    "type": "",
                                    "value": "0x90b8ec18"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "14807:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "14807:6:64"
                                },
                                "nativeSrc": "14807:24:64",
                                "nodeType": "YulFunctionCall",
                                "src": "14807:24:64"
                              },
                              "nativeSrc": "14807:24:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "14807:24:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "14878:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "14878:4:64",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "14884:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "14884:4:64",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "14871:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "14871:6:64"
                                },
                                "nativeSrc": "14871:18:64",
                                "nodeType": "YulFunctionCall",
                                "src": "14871:18:64"
                              },
                              "nativeSrc": "14871:18:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "14871:18:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "14632:14:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "14632:14:64"
                                      },
                                      "nativeSrc": "14632:16:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "14632:16:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "14650:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "14650:4:64",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nativeSrc": "14629:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "14629:2:64"
                                  },
                                  "nativeSrc": "14629:26:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "14629:26:64"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "14719:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "14719:3:64"
                                      },
                                      "nativeSrc": "14719:5:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "14719:5:64"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "14726:5:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "14726:5:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "14733:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "14733:4:64",
                                      "type": "",
                                      "value": "0x1c"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "14739:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "14739:4:64",
                                      "type": "",
                                      "value": "0x24"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "14745:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "14745:4:64",
                                      "type": "",
                                      "value": "0x34"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "14751:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "14751:4:64",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "staticcall",
                                    "nativeSrc": "14708:10:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "14708:10:64"
                                  },
                                  "nativeSrc": "14708:48:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "14708:48:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "14544:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "14544:3:64"
                              },
                              "nativeSrc": "14544:230:64",
                              "nodeType": "YulFunctionCall",
                              "src": "14544:230:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "14520:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "14520:6:64"
                          },
                          "nativeSrc": "14520:268:64",
                          "nodeType": "YulFunctionCall",
                          "src": "14520:268:64"
                        },
                        "nativeSrc": "14517:386:64",
                        "nodeType": "YulIf",
                        "src": "14517:386:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14923:4:64",
                              "nodeType": "YulLiteral",
                              "src": "14923:4:64",
                              "type": "",
                              "value": "0x14"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "14929:2:64",
                              "nodeType": "YulIdentifier",
                              "src": "14929:2:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14916:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "14916:6:64"
                          },
                          "nativeSrc": "14916:16:64",
                          "nodeType": "YulFunctionCall",
                          "src": "14916:16:64"
                        },
                        "nativeSrc": "14916:16:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "14916:16:64"
                      },
                      {
                        "nativeSrc": "14973:21:64",
                        "nodeType": "YulAssignment",
                        "src": "14973:21:64",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "14989:4:64",
                              "nodeType": "YulLiteral",
                              "src": "14989:4:64",
                              "type": "",
                              "value": "0x34"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "14983:5:64",
                            "nodeType": "YulIdentifier",
                            "src": "14983:5:64"
                          },
                          "nativeSrc": "14983:11:64",
                          "nodeType": "YulFunctionCall",
                          "src": "14983:11:64"
                        },
                        "variableNames": [
                          {
                            "name": "amount",
                            "nativeSrc": "14973:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "14973:6:64"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15075:4:64",
                              "nodeType": "YulLiteral",
                              "src": "15075:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15081:34:64",
                              "nodeType": "YulLiteral",
                              "src": "15081:34:64",
                              "type": "",
                              "value": "0xa9059cbb000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15068:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "15068:6:64"
                          },
                          "nativeSrc": "15068:48:64",
                          "nodeType": "YulFunctionCall",
                          "src": "15068:48:64"
                        },
                        "nativeSrc": "15068:48:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "15068:48:64"
                      },
                      {
                        "nativeSrc": "15222:60:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "15222:60:64",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nativeSrc": "15242:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "15242:3:64"
                              },
                              "nativeSrc": "15242:5:64",
                              "nodeType": "YulFunctionCall",
                              "src": "15242:5:64"
                            },
                            {
                              "name": "token",
                              "nativeSrc": "15249:5:64",
                              "nodeType": "YulIdentifier",
                              "src": "15249:5:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15256:1:64",
                              "nodeType": "YulLiteral",
                              "src": "15256:1:64",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15259:4:64",
                              "nodeType": "YulLiteral",
                              "src": "15259:4:64",
                              "type": "",
                              "value": "0x10"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15265:4:64",
                              "nodeType": "YulLiteral",
                              "src": "15265:4:64",
                              "type": "",
                              "value": "0x44"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15271:4:64",
                              "nodeType": "YulLiteral",
                              "src": "15271:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15277:4:64",
                              "nodeType": "YulLiteral",
                              "src": "15277:4:64",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "15237:4:64",
                            "nodeType": "YulIdentifier",
                            "src": "15237:4:64"
                          },
                          "nativeSrc": "15237:45:64",
                          "nodeType": "YulFunctionCall",
                          "src": "15237:45:64"
                        },
                        "variables": [
                          {
                            "name": "success",
                            "nativeSrc": "15226:7:64",
                            "nodeType": "YulTypedName",
                            "src": "15226:7:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "15339:231:64",
                          "nodeType": "YulBlock",
                          "src": "15339:231:64",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "15430:126:64",
                                "nodeType": "YulBlock",
                                "src": "15430:126:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "15459:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "15459:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "15465:10:64",
                                          "nodeType": "YulLiteral",
                                          "src": "15465:10:64",
                                          "type": "",
                                          "value": "0x90b8ec18"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "15452:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "15452:6:64"
                                      },
                                      "nativeSrc": "15452:24:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "15452:24:64"
                                    },
                                    "nativeSrc": "15452:24:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "15452:24:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "15527:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "15527:4:64",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "15533:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "15533:4:64",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "15520:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "15520:6:64"
                                      },
                                      "nativeSrc": "15520:18:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "15520:18:64"
                                    },
                                    "nativeSrc": "15520:18:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "15520:18:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "name": "token",
                                                    "nativeSrc": "15392:5:64",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "15392:5:64"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "extcodesize",
                                                  "nativeSrc": "15380:11:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "15380:11:64"
                                                },
                                                "nativeSrc": "15380:18:64",
                                                "nodeType": "YulFunctionCall",
                                                "src": "15380:18:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "15373:6:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "15373:6:64"
                                            },
                                            "nativeSrc": "15373:26:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "15373:26:64"
                                          },
                                          {
                                            "arguments": [],
                                            "functionName": {
                                              "name": "returndatasize",
                                              "nativeSrc": "15401:14:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "15401:14:64"
                                            },
                                            "nativeSrc": "15401:16:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "15401:16:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "or",
                                          "nativeSrc": "15370:2:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "15370:2:64"
                                        },
                                        "nativeSrc": "15370:48:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "15370:48:64"
                                      },
                                      {
                                        "name": "success",
                                        "nativeSrc": "15420:7:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "15420:7:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "lt",
                                      "nativeSrc": "15367:2:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "15367:2:64"
                                    },
                                    "nativeSrc": "15367:61:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "15367:61:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "15360:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "15360:6:64"
                                },
                                "nativeSrc": "15360:69:64",
                                "nodeType": "YulFunctionCall",
                                "src": "15360:69:64"
                              },
                              "nativeSrc": "15357:199:64",
                              "nodeType": "YulIf",
                              "src": "15357:199:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "15318:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "15318:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "15312:5:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "15312:5:64"
                                      },
                                      "nativeSrc": "15312:11:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "15312:11:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "15325:1:64",
                                      "nodeType": "YulLiteral",
                                      "src": "15325:1:64",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nativeSrc": "15309:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "15309:2:64"
                                  },
                                  "nativeSrc": "15309:18:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "15309:18:64"
                                },
                                {
                                  "name": "success",
                                  "nativeSrc": "15329:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "15329:7:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "15305:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "15305:3:64"
                              },
                              "nativeSrc": "15305:32:64",
                              "nodeType": "YulFunctionCall",
                              "src": "15305:32:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "15298:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "15298:6:64"
                          },
                          "nativeSrc": "15298:40:64",
                          "nodeType": "YulFunctionCall",
                          "src": "15298:40:64"
                        },
                        "nativeSrc": "15295:275:64",
                        "nodeType": "YulIf",
                        "src": "15295:275:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15590:4:64",
                              "nodeType": "YulLiteral",
                              "src": "15590:4:64",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15596:1:64",
                              "nodeType": "YulLiteral",
                              "src": "15596:1:64",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15583:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "15583:6:64"
                          },
                          "nativeSrc": "15583:15:64",
                          "nodeType": "YulFunctionCall",
                          "src": "15583:15:64"
                        },
                        "nativeSrc": "15583:15:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "15583:15:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 55084,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14973:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55081,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14929:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55079,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "14726:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55079,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15249:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55079,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15392:5:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55086,
                  "nodeType": "InlineAssembly",
                  "src": "14262:1415:64"
                }
              ]
            },
            "documentation": {
              "id": 55077,
              "nodeType": "StructuredDocumentation",
              "src": "14018:100:64",
              "text": "@dev Sends all of ERC20 `token` from the current contract to `to`.\n Reverts upon failure."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferAll",
            "nameLocation": "14132:15:64",
            "parameters": {
              "id": 55082,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55079,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "14156:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55088,
                  "src": "14148:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55078,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14148:7:64",
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
                  "id": 55081,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "14171:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55088,
                  "src": "14163:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55080,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14163:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14147:27:64"
            },
            "returnParameters": {
              "id": 55085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55084,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "14201:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55088,
                  "src": "14193:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55083,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14193:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14192:16:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55100,
            "nodeType": "FunctionDefinition",
            "src": "15817:823:64",
            "nodes": [],
            "body": {
              "id": 55099,
              "nodeType": "Block",
              "src": "15890:750:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "15952:682:64",
                    "nodeType": "YulBlock",
                    "src": "15952:682:64",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "15973:4:64",
                              "nodeType": "YulLiteral",
                              "src": "15973:4:64",
                              "type": "",
                              "value": "0x14"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "15979:2:64",
                              "nodeType": "YulIdentifier",
                              "src": "15979:2:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15966:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "15966:6:64"
                          },
                          "nativeSrc": "15966:16:64",
                          "nodeType": "YulFunctionCall",
                          "src": "15966:16:64"
                        },
                        "nativeSrc": "15966:16:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "15966:16:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16030:4:64",
                              "nodeType": "YulLiteral",
                              "src": "16030:4:64",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "16036:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "16036:6:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16023:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "16023:6:64"
                          },
                          "nativeSrc": "16023:20:64",
                          "nodeType": "YulFunctionCall",
                          "src": "16023:20:64"
                        },
                        "nativeSrc": "16023:20:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "16023:20:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16095:4:64",
                              "nodeType": "YulLiteral",
                              "src": "16095:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16101:34:64",
                              "nodeType": "YulLiteral",
                              "src": "16101:34:64",
                              "type": "",
                              "value": "0x095ea7b3000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16088:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "16088:6:64"
                          },
                          "nativeSrc": "16088:48:64",
                          "nodeType": "YulFunctionCall",
                          "src": "16088:48:64"
                        },
                        "nativeSrc": "16088:48:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "16088:48:64"
                      },
                      {
                        "nativeSrc": "16180:60:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "16180:60:64",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nativeSrc": "16200:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "16200:3:64"
                              },
                              "nativeSrc": "16200:5:64",
                              "nodeType": "YulFunctionCall",
                              "src": "16200:5:64"
                            },
                            {
                              "name": "token",
                              "nativeSrc": "16207:5:64",
                              "nodeType": "YulIdentifier",
                              "src": "16207:5:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16214:1:64",
                              "nodeType": "YulLiteral",
                              "src": "16214:1:64",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16217:4:64",
                              "nodeType": "YulLiteral",
                              "src": "16217:4:64",
                              "type": "",
                              "value": "0x10"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16223:4:64",
                              "nodeType": "YulLiteral",
                              "src": "16223:4:64",
                              "type": "",
                              "value": "0x44"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16229:4:64",
                              "nodeType": "YulLiteral",
                              "src": "16229:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16235:4:64",
                              "nodeType": "YulLiteral",
                              "src": "16235:4:64",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "16195:4:64",
                            "nodeType": "YulIdentifier",
                            "src": "16195:4:64"
                          },
                          "nativeSrc": "16195:45:64",
                          "nodeType": "YulFunctionCall",
                          "src": "16195:45:64"
                        },
                        "variables": [
                          {
                            "name": "success",
                            "nativeSrc": "16184:7:64",
                            "nodeType": "YulTypedName",
                            "src": "16184:7:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "16297:230:64",
                          "nodeType": "YulBlock",
                          "src": "16297:230:64",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "16388:125:64",
                                "nodeType": "YulBlock",
                                "src": "16388:125:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "16417:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "16417:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "16423:10:64",
                                          "nodeType": "YulLiteral",
                                          "src": "16423:10:64",
                                          "type": "",
                                          "value": "0x3e3f8f73"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "16410:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "16410:6:64"
                                      },
                                      "nativeSrc": "16410:24:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "16410:24:64"
                                    },
                                    "nativeSrc": "16410:24:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "16410:24:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "16484:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "16484:4:64",
                                          "type": "",
                                          "value": "0x1c"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "16490:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "16490:4:64",
                                          "type": "",
                                          "value": "0x04"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nativeSrc": "16477:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "16477:6:64"
                                      },
                                      "nativeSrc": "16477:18:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "16477:18:64"
                                    },
                                    "nativeSrc": "16477:18:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "16477:18:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "name": "token",
                                                    "nativeSrc": "16350:5:64",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "16350:5:64"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "extcodesize",
                                                  "nativeSrc": "16338:11:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "16338:11:64"
                                                },
                                                "nativeSrc": "16338:18:64",
                                                "nodeType": "YulFunctionCall",
                                                "src": "16338:18:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "16331:6:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "16331:6:64"
                                            },
                                            "nativeSrc": "16331:26:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "16331:26:64"
                                          },
                                          {
                                            "arguments": [],
                                            "functionName": {
                                              "name": "returndatasize",
                                              "nativeSrc": "16359:14:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "16359:14:64"
                                            },
                                            "nativeSrc": "16359:16:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "16359:16:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "or",
                                          "nativeSrc": "16328:2:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "16328:2:64"
                                        },
                                        "nativeSrc": "16328:48:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "16328:48:64"
                                      },
                                      {
                                        "name": "success",
                                        "nativeSrc": "16378:7:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "16378:7:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "lt",
                                      "nativeSrc": "16325:2:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "16325:2:64"
                                    },
                                    "nativeSrc": "16325:61:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "16325:61:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "16318:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "16318:6:64"
                                },
                                "nativeSrc": "16318:69:64",
                                "nodeType": "YulFunctionCall",
                                "src": "16318:69:64"
                              },
                              "nativeSrc": "16315:198:64",
                              "nodeType": "YulIf",
                              "src": "16315:198:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "16276:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "16276:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "16270:5:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "16270:5:64"
                                      },
                                      "nativeSrc": "16270:11:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "16270:11:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "16283:1:64",
                                      "nodeType": "YulLiteral",
                                      "src": "16283:1:64",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nativeSrc": "16267:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "16267:2:64"
                                  },
                                  "nativeSrc": "16267:18:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "16267:18:64"
                                },
                                {
                                  "name": "success",
                                  "nativeSrc": "16287:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "16287:7:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "16263:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "16263:3:64"
                              },
                              "nativeSrc": "16263:32:64",
                              "nodeType": "YulFunctionCall",
                              "src": "16263:32:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "16256:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "16256:6:64"
                          },
                          "nativeSrc": "16256:40:64",
                          "nodeType": "YulFunctionCall",
                          "src": "16256:40:64"
                        },
                        "nativeSrc": "16253:274:64",
                        "nodeType": "YulIf",
                        "src": "16253:274:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "16547:4:64",
                              "nodeType": "YulLiteral",
                              "src": "16547:4:64",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16553:1:64",
                              "nodeType": "YulLiteral",
                              "src": "16553:1:64",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16540:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "16540:6:64"
                          },
                          "nativeSrc": "16540:15:64",
                          "nodeType": "YulFunctionCall",
                          "src": "16540:15:64"
                        },
                        "nativeSrc": "16540:15:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "16540:15:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 55095,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16036:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55093,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "15979:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55091,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16207:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55091,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "16350:5:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55098,
                  "nodeType": "InlineAssembly",
                  "src": "15943:691:64"
                }
              ]
            },
            "documentation": {
              "id": 55089,
              "nodeType": "StructuredDocumentation",
              "src": "15689:123:64",
              "text": "@dev Sets `amount` of ERC20 `token` for `to` to manage on behalf of the current contract.\n Reverts upon failure."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeApprove",
            "nameLocation": "15826:11:64",
            "parameters": {
              "id": 55096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55091,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "15846:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55100,
                  "src": "15838:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55090,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15838:7:64",
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
                  "id": 55093,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "15861:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55100,
                  "src": "15853:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55092,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15853:7:64",
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
                  "id": 55095,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "15873:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55100,
                  "src": "15865:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55094,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15865:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15837:43:64"
            },
            "returnParameters": {
              "id": 55097,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "15890:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55112,
            "nodeType": "FunctionDefinition",
            "src": "16951:1707:64",
            "nodes": [],
            "body": {
              "id": 55111,
              "nodeType": "Block",
              "src": "17033:1625:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "17095:1557:64",
                    "nodeType": "YulBlock",
                    "src": "17095:1557:64",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "17116:4:64",
                              "nodeType": "YulLiteral",
                              "src": "17116:4:64",
                              "type": "",
                              "value": "0x14"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "17122:2:64",
                              "nodeType": "YulIdentifier",
                              "src": "17122:2:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17109:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "17109:6:64"
                          },
                          "nativeSrc": "17109:16:64",
                          "nodeType": "YulFunctionCall",
                          "src": "17109:16:64"
                        },
                        "nativeSrc": "17109:16:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "17109:16:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "17173:4:64",
                              "nodeType": "YulLiteral",
                              "src": "17173:4:64",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "17179:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "17179:6:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17166:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "17166:6:64"
                          },
                          "nativeSrc": "17166:20:64",
                          "nodeType": "YulFunctionCall",
                          "src": "17166:20:64"
                        },
                        "nativeSrc": "17166:20:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "17166:20:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "17238:4:64",
                              "nodeType": "YulLiteral",
                              "src": "17238:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17244:34:64",
                              "nodeType": "YulLiteral",
                              "src": "17244:34:64",
                              "type": "",
                              "value": "0x095ea7b3000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17231:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "17231:6:64"
                          },
                          "nativeSrc": "17231:48:64",
                          "nodeType": "YulFunctionCall",
                          "src": "17231:48:64"
                        },
                        "nativeSrc": "17231:48:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "17231:48:64"
                      },
                      {
                        "nativeSrc": "17383:60:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "17383:60:64",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "gas",
                                "nativeSrc": "17403:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "17403:3:64"
                              },
                              "nativeSrc": "17403:5:64",
                              "nodeType": "YulFunctionCall",
                              "src": "17403:5:64"
                            },
                            {
                              "name": "token",
                              "nativeSrc": "17410:5:64",
                              "nodeType": "YulIdentifier",
                              "src": "17410:5:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17417:1:64",
                              "nodeType": "YulLiteral",
                              "src": "17417:1:64",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17420:4:64",
                              "nodeType": "YulLiteral",
                              "src": "17420:4:64",
                              "type": "",
                              "value": "0x10"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17426:4:64",
                              "nodeType": "YulLiteral",
                              "src": "17426:4:64",
                              "type": "",
                              "value": "0x44"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17432:4:64",
                              "nodeType": "YulLiteral",
                              "src": "17432:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17438:4:64",
                              "nodeType": "YulLiteral",
                              "src": "17438:4:64",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "call",
                            "nativeSrc": "17398:4:64",
                            "nodeType": "YulIdentifier",
                            "src": "17398:4:64"
                          },
                          "nativeSrc": "17398:45:64",
                          "nodeType": "YulFunctionCall",
                          "src": "17398:45:64"
                        },
                        "variables": [
                          {
                            "name": "success",
                            "nativeSrc": "17387:7:64",
                            "nodeType": "YulTypedName",
                            "src": "17387:7:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "17500:1045:64",
                          "nodeType": "YulBlock",
                          "src": "17500:1045:64",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "17591:940:64",
                                "nodeType": "YulBlock",
                                "src": "17591:940:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "17620:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "17620:4:64",
                                          "type": "",
                                          "value": "0x34"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "17626:1:64",
                                          "nodeType": "YulLiteral",
                                          "src": "17626:1:64",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "17613:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "17613:6:64"
                                      },
                                      "nativeSrc": "17613:15:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "17613:15:64"
                                    },
                                    "nativeSrc": "17613:15:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "17613:15:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "17685:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "17685:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "17691:34:64",
                                          "nodeType": "YulLiteral",
                                          "src": "17691:34:64",
                                          "type": "",
                                          "value": "0x095ea7b3000000000000000000000000"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "17678:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "17678:6:64"
                                      },
                                      "nativeSrc": "17678:48:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "17678:48:64"
                                    },
                                    "nativeSrc": "17678:48:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "17678:48:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [],
                                              "functionName": {
                                                "name": "gas",
                                                "nativeSrc": "17787:3:64",
                                                "nodeType": "YulIdentifier",
                                                "src": "17787:3:64"
                                              },
                                              "nativeSrc": "17787:5:64",
                                              "nodeType": "YulFunctionCall",
                                              "src": "17787:5:64"
                                            },
                                            {
                                              "name": "token",
                                              "nativeSrc": "17794:5:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "17794:5:64"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "17801:1:64",
                                              "nodeType": "YulLiteral",
                                              "src": "17801:1:64",
                                              "type": "",
                                              "value": "0"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "17804:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "17804:4:64",
                                              "type": "",
                                              "value": "0x10"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "17810:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "17810:4:64",
                                              "type": "",
                                              "value": "0x44"
                                            },
                                            {
                                              "arguments": [],
                                              "functionName": {
                                                "name": "codesize",
                                                "nativeSrc": "17816:8:64",
                                                "nodeType": "YulIdentifier",
                                                "src": "17816:8:64"
                                              },
                                              "nativeSrc": "17816:10:64",
                                              "nodeType": "YulFunctionCall",
                                              "src": "17816:10:64"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "17828:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "17828:4:64",
                                              "type": "",
                                              "value": "0x00"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "call",
                                            "nativeSrc": "17782:4:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "17782:4:64"
                                          },
                                          "nativeSrc": "17782:51:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "17782:51:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "pop",
                                        "nativeSrc": "17778:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "17778:3:64"
                                      },
                                      "nativeSrc": "17778:56:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "17778:56:64"
                                    },
                                    "nativeSrc": "17778:56:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "17778:56:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "17885:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "17885:4:64",
                                          "type": "",
                                          "value": "0x34"
                                        },
                                        {
                                          "name": "amount",
                                          "nativeSrc": "17891:6:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "17891:6:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "17878:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "17878:6:64"
                                      },
                                      "nativeSrc": "17878:20:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "17878:20:64"
                                    },
                                    "nativeSrc": "17878:20:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "17878:20:64"
                                  },
                                  {
                                    "nativeSrc": "18023:56:64",
                                    "nodeType": "YulAssignment",
                                    "src": "18023:56:64",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "gas",
                                            "nativeSrc": "18039:3:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "18039:3:64"
                                          },
                                          "nativeSrc": "18039:5:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "18039:5:64"
                                        },
                                        {
                                          "name": "token",
                                          "nativeSrc": "18046:5:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "18046:5:64"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "18053:1:64",
                                          "nodeType": "YulLiteral",
                                          "src": "18053:1:64",
                                          "type": "",
                                          "value": "0"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "18056:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "18056:4:64",
                                          "type": "",
                                          "value": "0x10"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "18062:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "18062:4:64",
                                          "type": "",
                                          "value": "0x44"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "18068:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "18068:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "18074:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "18074:4:64",
                                          "type": "",
                                          "value": "0x20"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "call",
                                        "nativeSrc": "18034:4:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "18034:4:64"
                                      },
                                      "nativeSrc": "18034:45:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "18034:45:64"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "success",
                                        "nativeSrc": "18023:7:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "18023:7:64"
                                      }
                                    ]
                                  },
                                  {
                                    "body": {
                                      "nativeSrc": "18144:369:64",
                                      "nodeType": "YulBlock",
                                      "src": "18144:369:64",
                                      "statements": [
                                        {
                                          "body": {
                                            "nativeSrc": "18342:149:64",
                                            "nodeType": "YulBlock",
                                            "src": "18342:149:64",
                                            "statements": [
                                              {
                                                "expression": {
                                                  "arguments": [
                                                    {
                                                      "kind": "number",
                                                      "nativeSrc": "18379:4:64",
                                                      "nodeType": "YulLiteral",
                                                      "src": "18379:4:64",
                                                      "type": "",
                                                      "value": "0x00"
                                                    },
                                                    {
                                                      "kind": "number",
                                                      "nativeSrc": "18385:10:64",
                                                      "nodeType": "YulLiteral",
                                                      "src": "18385:10:64",
                                                      "type": "",
                                                      "value": "0x3e3f8f73"
                                                    }
                                                  ],
                                                  "functionName": {
                                                    "name": "mstore",
                                                    "nativeSrc": "18372:6:64",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "18372:6:64"
                                                  },
                                                  "nativeSrc": "18372:24:64",
                                                  "nodeType": "YulFunctionCall",
                                                  "src": "18372:24:64"
                                                },
                                                "nativeSrc": "18372:24:64",
                                                "nodeType": "YulExpressionStatement",
                                                "src": "18372:24:64"
                                              },
                                              {
                                                "expression": {
                                                  "arguments": [
                                                    {
                                                      "kind": "number",
                                                      "nativeSrc": "18454:4:64",
                                                      "nodeType": "YulLiteral",
                                                      "src": "18454:4:64",
                                                      "type": "",
                                                      "value": "0x1c"
                                                    },
                                                    {
                                                      "kind": "number",
                                                      "nativeSrc": "18460:4:64",
                                                      "nodeType": "YulLiteral",
                                                      "src": "18460:4:64",
                                                      "type": "",
                                                      "value": "0x04"
                                                    }
                                                  ],
                                                  "functionName": {
                                                    "name": "revert",
                                                    "nativeSrc": "18447:6:64",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "18447:6:64"
                                                  },
                                                  "nativeSrc": "18447:18:64",
                                                  "nodeType": "YulFunctionCall",
                                                  "src": "18447:18:64"
                                                },
                                                "nativeSrc": "18447:18:64",
                                                "nodeType": "YulExpressionStatement",
                                                "src": "18447:18:64"
                                              }
                                            ]
                                          },
                                          "condition": {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "arguments": [
                                                      {
                                                        "arguments": [
                                                          {
                                                            "arguments": [
                                                              {
                                                                "name": "token",
                                                                "nativeSrc": "18304:5:64",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "18304:5:64"
                                                              }
                                                            ],
                                                            "functionName": {
                                                              "name": "extcodesize",
                                                              "nativeSrc": "18292:11:64",
                                                              "nodeType": "YulIdentifier",
                                                              "src": "18292:11:64"
                                                            },
                                                            "nativeSrc": "18292:18:64",
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "18292:18:64"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "iszero",
                                                          "nativeSrc": "18285:6:64",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "18285:6:64"
                                                        },
                                                        "nativeSrc": "18285:26:64",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "18285:26:64"
                                                      },
                                                      {
                                                        "arguments": [],
                                                        "functionName": {
                                                          "name": "returndatasize",
                                                          "nativeSrc": "18313:14:64",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "18313:14:64"
                                                        },
                                                        "nativeSrc": "18313:16:64",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "18313:16:64"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "or",
                                                      "nativeSrc": "18282:2:64",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "18282:2:64"
                                                    },
                                                    "nativeSrc": "18282:48:64",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "18282:48:64"
                                                  },
                                                  {
                                                    "name": "success",
                                                    "nativeSrc": "18332:7:64",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "18332:7:64"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "lt",
                                                  "nativeSrc": "18279:2:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "18279:2:64"
                                                },
                                                "nativeSrc": "18279:61:64",
                                                "nodeType": "YulFunctionCall",
                                                "src": "18279:61:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "18272:6:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "18272:6:64"
                                            },
                                            "nativeSrc": "18272:69:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "18272:69:64"
                                          },
                                          "nativeSrc": "18269:222:64",
                                          "nodeType": "YulIf",
                                          "src": "18269:222:64"
                                        }
                                      ]
                                    },
                                    "condition": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "arguments": [
                                                    {
                                                      "kind": "number",
                                                      "nativeSrc": "18123:4:64",
                                                      "nodeType": "YulLiteral",
                                                      "src": "18123:4:64",
                                                      "type": "",
                                                      "value": "0x00"
                                                    }
                                                  ],
                                                  "functionName": {
                                                    "name": "mload",
                                                    "nativeSrc": "18117:5:64",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "18117:5:64"
                                                  },
                                                  "nativeSrc": "18117:11:64",
                                                  "nodeType": "YulFunctionCall",
                                                  "src": "18117:11:64"
                                                },
                                                {
                                                  "kind": "number",
                                                  "nativeSrc": "18130:1:64",
                                                  "nodeType": "YulLiteral",
                                                  "src": "18130:1:64",
                                                  "type": "",
                                                  "value": "1"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "eq",
                                                "nativeSrc": "18114:2:64",
                                                "nodeType": "YulIdentifier",
                                                "src": "18114:2:64"
                                              },
                                              "nativeSrc": "18114:18:64",
                                              "nodeType": "YulFunctionCall",
                                              "src": "18114:18:64"
                                            },
                                            {
                                              "name": "success",
                                              "nativeSrc": "18134:7:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "18134:7:64"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "and",
                                            "nativeSrc": "18110:3:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "18110:3:64"
                                          },
                                          "nativeSrc": "18110:32:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "18110:32:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nativeSrc": "18103:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "18103:6:64"
                                      },
                                      "nativeSrc": "18103:40:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "18103:40:64"
                                    },
                                    "nativeSrc": "18100:413:64",
                                    "nodeType": "YulIf",
                                    "src": "18100:413:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "name": "token",
                                                    "nativeSrc": "17553:5:64",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "17553:5:64"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "extcodesize",
                                                  "nativeSrc": "17541:11:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "17541:11:64"
                                                },
                                                "nativeSrc": "17541:18:64",
                                                "nodeType": "YulFunctionCall",
                                                "src": "17541:18:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "17534:6:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "17534:6:64"
                                            },
                                            "nativeSrc": "17534:26:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "17534:26:64"
                                          },
                                          {
                                            "arguments": [],
                                            "functionName": {
                                              "name": "returndatasize",
                                              "nativeSrc": "17562:14:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "17562:14:64"
                                            },
                                            "nativeSrc": "17562:16:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "17562:16:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "or",
                                          "nativeSrc": "17531:2:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "17531:2:64"
                                        },
                                        "nativeSrc": "17531:48:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "17531:48:64"
                                      },
                                      {
                                        "name": "success",
                                        "nativeSrc": "17581:7:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "17581:7:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "lt",
                                      "nativeSrc": "17528:2:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "17528:2:64"
                                    },
                                    "nativeSrc": "17528:61:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "17528:61:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "17521:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "17521:6:64"
                                },
                                "nativeSrc": "17521:69:64",
                                "nodeType": "YulFunctionCall",
                                "src": "17521:69:64"
                              },
                              "nativeSrc": "17518:1013:64",
                              "nodeType": "YulIf",
                              "src": "17518:1013:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "17479:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "17479:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nativeSrc": "17473:5:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "17473:5:64"
                                      },
                                      "nativeSrc": "17473:11:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "17473:11:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "17486:1:64",
                                      "nodeType": "YulLiteral",
                                      "src": "17486:1:64",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nativeSrc": "17470:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "17470:2:64"
                                  },
                                  "nativeSrc": "17470:18:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "17470:18:64"
                                },
                                {
                                  "name": "success",
                                  "nativeSrc": "17490:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "17490:7:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "17466:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "17466:3:64"
                              },
                              "nativeSrc": "17466:32:64",
                              "nodeType": "YulFunctionCall",
                              "src": "17466:32:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "17459:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "17459:6:64"
                          },
                          "nativeSrc": "17459:40:64",
                          "nodeType": "YulFunctionCall",
                          "src": "17459:40:64"
                        },
                        "nativeSrc": "17456:1089:64",
                        "nodeType": "YulIf",
                        "src": "17456:1089:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "18565:4:64",
                              "nodeType": "YulLiteral",
                              "src": "18565:4:64",
                              "type": "",
                              "value": "0x34"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "18571:1:64",
                              "nodeType": "YulLiteral",
                              "src": "18571:1:64",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "18558:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "18558:6:64"
                          },
                          "nativeSrc": "18558:15:64",
                          "nodeType": "YulFunctionCall",
                          "src": "18558:15:64"
                        },
                        "nativeSrc": "18558:15:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "18558:15:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 55107,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17179:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55107,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17891:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55105,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17122:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55103,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17410:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55103,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17553:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55103,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "17794:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55103,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18046:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55103,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18304:5:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55110,
                  "nodeType": "InlineAssembly",
                  "src": "17086:1566:64"
                }
              ]
            },
            "documentation": {
              "id": 55101,
              "nodeType": "StructuredDocumentation",
              "src": "16646:300:64",
              "text": "@dev Sets `amount` of ERC20 `token` for `to` to manage on behalf of the current contract.\n If the initial attempt to approve fails, attempts to reset the approved amount to zero,\n then retries the approval again (some tokens, e.g. USDT, requires this).\n Reverts upon failure."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeApproveWithRetry",
            "nameLocation": "16960:20:64",
            "parameters": {
              "id": 55108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55103,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "16989:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55112,
                  "src": "16981:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16981:7:64",
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
                  "id": 55105,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "17004:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55112,
                  "src": "16996:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55104,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16996:7:64",
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
                  "id": 55107,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "17016:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55112,
                  "src": "17008:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55106,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17008:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16980:43:64"
            },
            "returnParameters": {
              "id": 55109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "17033:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55124,
            "nodeType": "FunctionDefinition",
            "src": "18785:739:64",
            "nodes": [],
            "body": {
              "id": 55123,
              "nodeType": "Block",
              "src": "18875:649:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "18937:581:64",
                    "nodeType": "YulBlock",
                    "src": "18937:581:64",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "18958:4:64",
                              "nodeType": "YulLiteral",
                              "src": "18958:4:64",
                              "type": "",
                              "value": "0x14"
                            },
                            {
                              "name": "account",
                              "nativeSrc": "18964:7:64",
                              "nodeType": "YulIdentifier",
                              "src": "18964:7:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "18951:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "18951:6:64"
                          },
                          "nativeSrc": "18951:21:64",
                          "nodeType": "YulFunctionCall",
                          "src": "18951:21:64"
                        },
                        "nativeSrc": "18951:21:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "18951:21:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "19025:4:64",
                              "nodeType": "YulLiteral",
                              "src": "19025:4:64",
                              "type": "",
                              "value": "0x00"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "19031:34:64",
                              "nodeType": "YulLiteral",
                              "src": "19031:34:64",
                              "type": "",
                              "value": "0x70a08231000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "19018:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "19018:6:64"
                          },
                          "nativeSrc": "19018:48:64",
                          "nodeType": "YulFunctionCall",
                          "src": "19018:48:64"
                        },
                        "nativeSrc": "19018:48:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "19018:48:64"
                      },
                      {
                        "nativeSrc": "19104:404:64",
                        "nodeType": "YulAssignment",
                        "src": "19104:404:64",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "19221:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "19221:4:64",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nativeSrc": "19215:5:64",
                                "nodeType": "YulIdentifier",
                                "src": "19215:5:64"
                              },
                              "nativeSrc": "19215:11:64",
                              "nodeType": "YulFunctionCall",
                              "src": "19215:11:64"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "19340:14:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "19340:14:64"
                                      },
                                      "nativeSrc": "19340:16:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "19340:16:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "19358:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "19358:4:64",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nativeSrc": "19337:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "19337:2:64"
                                  },
                                  "nativeSrc": "19337:26:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "19337:26:64"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "19431:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "19431:3:64"
                                      },
                                      "nativeSrc": "19431:5:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "19431:5:64"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "19438:5:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "19438:5:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "19445:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "19445:4:64",
                                      "type": "",
                                      "value": "0x10"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "19451:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "19451:4:64",
                                      "type": "",
                                      "value": "0x24"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "19457:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "19457:4:64",
                                      "type": "",
                                      "value": "0x20"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "19463:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "19463:4:64",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "staticcall",
                                    "nativeSrc": "19420:10:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "19420:10:64"
                                  },
                                  "nativeSrc": "19420:48:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "19420:48:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "19248:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "19248:3:64"
                              },
                              "nativeSrc": "19248:242:64",
                              "nodeType": "YulFunctionCall",
                              "src": "19248:242:64"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nativeSrc": "19130:3:64",
                            "nodeType": "YulIdentifier",
                            "src": "19130:3:64"
                          },
                          "nativeSrc": "19130:378:64",
                          "nodeType": "YulFunctionCall",
                          "src": "19130:378:64"
                        },
                        "variableNames": [
                          {
                            "name": "amount",
                            "nativeSrc": "19104:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "19104:6:64"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 55117,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "18964:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55120,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "19104:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55115,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "19438:5:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55122,
                  "nodeType": "InlineAssembly",
                  "src": "18928:590:64"
                }
              ]
            },
            "documentation": {
              "id": 55113,
              "nodeType": "StructuredDocumentation",
              "src": "18664:116:64",
              "text": "@dev Returns the amount of ERC20 `token` owned by `account`.\n Returns zero if the `token` does not exist."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "18794:9:64",
            "parameters": {
              "id": 55118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55115,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "18812:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55124,
                  "src": "18804:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55114,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "18804:7:64",
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
                  "id": 55117,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "18827:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55124,
                  "src": "18819:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55116,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "18819:7:64",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18803:32:64"
            },
            "returnParameters": {
              "id": 55121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55120,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "18867:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55124,
                  "src": "18859:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55119,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18859:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18858:16:64"
            },
            "scope": 55229,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55153,
            "nodeType": "FunctionDefinition",
            "src": "19814:229:64",
            "nodes": [],
            "body": {
              "id": 55152,
              "nodeType": "Block",
              "src": "19907:136:64",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 55142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "19921:45:64",
                    "subExpression": {
                      "arguments": [
                        {
                          "id": 55137,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55127,
                          "src": "19942:5:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 55138,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55129,
                          "src": "19949:4:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 55139,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55131,
                          "src": "19955:2:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 55140,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55133,
                          "src": "19959:6:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
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
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 55136,
                        "name": "trySafeTransferFrom",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55050,
                        "src": "19922:19:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,address,uint256) returns (bool)"
                        }
                      },
                      "id": 55141,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19922:44:64",
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
                  "id": 55151,
                  "nodeType": "IfStatement",
                  "src": "19917:120:64",
                  "trueBody": {
                    "id": 55150,
                    "nodeType": "Block",
                    "src": "19968:69:64",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 55144,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55127,
                              "src": "20002:5:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 55145,
                              "name": "from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55129,
                              "src": "20009:4:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 55146,
                              "name": "to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55131,
                              "src": "20015:2:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 55147,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55133,
                              "src": "20019:6:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 55143,
                            "name": "permit2TransferFrom",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55167,
                            "src": "19982:19:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,address,uint256)"
                            }
                          },
                          "id": 55148,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "19982:44:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 55149,
                        "nodeType": "ExpressionStatement",
                        "src": "19982:44:64"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 55125,
              "nodeType": "StructuredDocumentation",
              "src": "19530:279:64",
              "text": "@dev Sends `amount` of ERC20 `token` from `from` to `to`.\n If the initial attempt fails, try to use Permit2 to transfer the token.\n Reverts upon failure.\n The `from` account must have at least `amount` approved for the current contract to manage."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom2",
            "nameLocation": "19823:17:64",
            "parameters": {
              "id": 55134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55127,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "19849:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55153,
                  "src": "19841:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "19841:7:64",
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
                  "id": 55129,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "19864:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55153,
                  "src": "19856:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55128,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "19856:7:64",
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
                  "id": 55131,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "19878:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55153,
                  "src": "19870:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55130,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "19870:7:64",
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
                  "id": 55133,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "19890:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55153,
                  "src": "19882:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55132,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "19882:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19840:57:64"
            },
            "returnParameters": {
              "id": 55135,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "19907:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55167,
            "nodeType": "FunctionDefinition",
            "src": "20157:1125:64",
            "nodes": [],
            "body": {
              "id": 55166,
              "nodeType": "Block",
              "src": "20264:1018:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "20326:950:64",
                    "nodeType": "YulBlock",
                    "src": "20326:950:64",
                    "statements": [
                      {
                        "nativeSrc": "20340:20:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "20340:20:64",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "20355:4:64",
                              "nodeType": "YulLiteral",
                              "src": "20355:4:64",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "20349:5:64",
                            "nodeType": "YulIdentifier",
                            "src": "20349:5:64"
                          },
                          "nativeSrc": "20349:11:64",
                          "nodeType": "YulFunctionCall",
                          "src": "20349:11:64"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "20344:1:64",
                            "nodeType": "YulTypedName",
                            "src": "20344:1:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "20384:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "20384:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "20387:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "20387:4:64",
                                  "type": "",
                                  "value": "0x74"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "20380:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "20380:3:64"
                              },
                              "nativeSrc": "20380:12:64",
                              "nodeType": "YulFunctionCall",
                              "src": "20380:12:64"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "20398:2:64",
                                  "nodeType": "YulLiteral",
                                  "src": "20398:2:64",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "20406:2:64",
                                      "nodeType": "YulLiteral",
                                      "src": "20406:2:64",
                                      "type": "",
                                      "value": "96"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "20410:5:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "20410:5:64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nativeSrc": "20402:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "20402:3:64"
                                  },
                                  "nativeSrc": "20402:14:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "20402:14:64"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "20394:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "20394:3:64"
                              },
                              "nativeSrc": "20394:23:64",
                              "nodeType": "YulFunctionCall",
                              "src": "20394:23:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "20373:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "20373:6:64"
                          },
                          "nativeSrc": "20373:45:64",
                          "nodeType": "YulFunctionCall",
                          "src": "20373:45:64"
                        },
                        "nativeSrc": "20373:45:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "20373:45:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "20442:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "20442:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "20445:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "20445:4:64",
                                  "type": "",
                                  "value": "0x54"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "20438:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "20438:3:64"
                              },
                              "nativeSrc": "20438:12:64",
                              "nodeType": "YulFunctionCall",
                              "src": "20438:12:64"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "20452:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "20452:6:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "20431:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "20431:6:64"
                          },
                          "nativeSrc": "20431:28:64",
                          "nodeType": "YulFunctionCall",
                          "src": "20431:28:64"
                        },
                        "nativeSrc": "20431:28:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "20431:28:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "20483:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "20483:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "20486:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "20486:4:64",
                                  "type": "",
                                  "value": "0x34"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "20479:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "20479:3:64"
                              },
                              "nativeSrc": "20479:12:64",
                              "nodeType": "YulFunctionCall",
                              "src": "20479:12:64"
                            },
                            {
                              "name": "to",
                              "nativeSrc": "20493:2:64",
                              "nodeType": "YulIdentifier",
                              "src": "20493:2:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "20472:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "20472:6:64"
                          },
                          "nativeSrc": "20472:24:64",
                          "nodeType": "YulFunctionCall",
                          "src": "20472:24:64"
                        },
                        "nativeSrc": "20472:24:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "20472:24:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "20520:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "20520:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "20523:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "20523:4:64",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "20516:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "20516:3:64"
                              },
                              "nativeSrc": "20516:12:64",
                              "nodeType": "YulFunctionCall",
                              "src": "20516:12:64"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "20534:2:64",
                                  "nodeType": "YulLiteral",
                                  "src": "20534:2:64",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "name": "from",
                                  "nativeSrc": "20538:4:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "20538:4:64"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "20530:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "20530:3:64"
                              },
                              "nativeSrc": "20530:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "20530:13:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "20509:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "20509:6:64"
                          },
                          "nativeSrc": "20509:35:64",
                          "nodeType": "YulFunctionCall",
                          "src": "20509:35:64"
                        },
                        "nativeSrc": "20509:35:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "20509:35:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "20628:1:64",
                              "nodeType": "YulIdentifier",
                              "src": "20628:1:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "20631:34:64",
                              "nodeType": "YulLiteral",
                              "src": "20631:34:64",
                              "type": "",
                              "value": "0x36c78516000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "20621:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "20621:6:64"
                          },
                          "nativeSrc": "20621:45:64",
                          "nodeType": "YulFunctionCall",
                          "src": "20621:45:64"
                        },
                        "nativeSrc": "20621:45:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "20621:45:64"
                      },
                      {
                        "nativeSrc": "20679:16:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "20679:16:64",
                        "value": {
                          "name": "PERMIT2",
                          "nativeSrc": "20688:7:64",
                          "nodeType": "YulIdentifier",
                          "src": "20688:7:64"
                        },
                        "variables": [
                          {
                            "name": "p",
                            "nativeSrc": "20683:1:64",
                            "nodeType": "YulTypedName",
                            "src": "20683:1:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "20708:30:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "20708:30:64",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [],
                              "functionName": {
                                "name": "chainid",
                                "nativeSrc": "20725:7:64",
                                "nodeType": "YulIdentifier",
                                "src": "20725:7:64"
                              },
                              "nativeSrc": "20725:9:64",
                              "nodeType": "YulFunctionCall",
                              "src": "20725:9:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "20736:1:64",
                              "nodeType": "YulLiteral",
                              "src": "20736:1:64",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "20722:2:64",
                            "nodeType": "YulIdentifier",
                            "src": "20722:2:64"
                          },
                          "nativeSrc": "20722:16:64",
                          "nodeType": "YulFunctionCall",
                          "src": "20722:16:64"
                        },
                        "variables": [
                          {
                            "name": "exists",
                            "nativeSrc": "20712:6:64",
                            "nodeType": "YulTypedName",
                            "src": "20712:6:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "20769:44:64",
                          "nodeType": "YulBlock",
                          "src": "20769:44:64",
                          "statements": [
                            {
                              "nativeSrc": "20771:40:64",
                              "nodeType": "YulAssignment",
                              "src": "20771:40:64",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "p",
                                            "nativeSrc": "20807:1:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "20807:1:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "extcodesize",
                                          "nativeSrc": "20795:11:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "20795:11:64"
                                        },
                                        "nativeSrc": "20795:14:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "20795:14:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "iszero",
                                      "nativeSrc": "20788:6:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "20788:6:64"
                                    },
                                    "nativeSrc": "20788:22:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "20788:22:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "20781:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "20781:6:64"
                                },
                                "nativeSrc": "20781:30:64",
                                "nodeType": "YulFunctionCall",
                                "src": "20781:30:64"
                              },
                              "variableNames": [
                                {
                                  "name": "exists",
                                  "nativeSrc": "20771:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "20771:6:64"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "exists",
                              "nativeSrc": "20761:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "20761:6:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "20754:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "20754:6:64"
                          },
                          "nativeSrc": "20754:14:64",
                          "nodeType": "YulFunctionCall",
                          "src": "20754:14:64"
                        },
                        "nativeSrc": "20751:62:64",
                        "nodeType": "YulIf",
                        "src": "20751:62:64"
                      },
                      {
                        "body": {
                          "nativeSrc": "21064:202:64",
                          "nodeType": "YulBlock",
                          "src": "21064:202:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21089:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "21089:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21095:18:64",
                                    "nodeType": "YulLiteral",
                                    "src": "21095:18:64",
                                    "type": "",
                                    "value": "0x7939f4248757f0fd"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "21082:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "21082:6:64"
                                },
                                "nativeSrc": "21082:32:64",
                                "nodeType": "YulFunctionCall",
                                "src": "21082:32:64"
                              },
                              "nativeSrc": "21082:32:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "21082:32:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "21198:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "21198:4:64",
                                        "type": "",
                                        "value": "0x18"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "21208:1:64",
                                            "nodeType": "YulLiteral",
                                            "src": "21208:1:64",
                                            "type": "",
                                            "value": "2"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "arguments": [
                                                      {
                                                        "kind": "number",
                                                        "nativeSrc": "21229:3:64",
                                                        "nodeType": "YulLiteral",
                                                        "src": "21229:3:64",
                                                        "type": "",
                                                        "value": "160"
                                                      },
                                                      {
                                                        "name": "amount",
                                                        "nativeSrc": "21234:6:64",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "21234:6:64"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "shr",
                                                      "nativeSrc": "21225:3:64",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "21225:3:64"
                                                    },
                                                    "nativeSrc": "21225:16:64",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "21225:16:64"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "iszero",
                                                  "nativeSrc": "21218:6:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "21218:6:64"
                                                },
                                                "nativeSrc": "21218:24:64",
                                                "nodeType": "YulFunctionCall",
                                                "src": "21218:24:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "21211:6:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "21211:6:64"
                                            },
                                            "nativeSrc": "21211:32:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "21211:32:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "21204:3:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "21204:3:64"
                                        },
                                        "nativeSrc": "21204:40:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "21204:40:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "21194:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "21194:3:64"
                                    },
                                    "nativeSrc": "21194:51:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "21194:51:64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21247:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "21247:4:64",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "21187:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "21187:6:64"
                                },
                                "nativeSrc": "21187:65:64",
                                "nodeType": "YulFunctionCall",
                                "src": "21187:65:64"
                              },
                              "nativeSrc": "21187:65:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "21187:65:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "20883:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "20883:3:64"
                                      },
                                      "nativeSrc": "20883:5:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "20883:5:64"
                                    },
                                    {
                                      "name": "p",
                                      "nativeSrc": "20890:1:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "20890:1:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "20893:1:64",
                                      "nodeType": "YulLiteral",
                                      "src": "20893:1:64",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "20900:1:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "20900:1:64"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "20903:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "20903:4:64",
                                          "type": "",
                                          "value": "0x10"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "20896:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "20896:3:64"
                                      },
                                      "nativeSrc": "20896:12:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "20896:12:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "20910:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "20910:4:64",
                                      "type": "",
                                      "value": "0x84"
                                    },
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "codesize",
                                        "nativeSrc": "20916:8:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "20916:8:64"
                                      },
                                      "nativeSrc": "20916:10:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "20916:10:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "20928:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "20928:4:64",
                                      "type": "",
                                      "value": "0x00"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "call",
                                    "nativeSrc": "20878:4:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "20878:4:64"
                                  },
                                  "nativeSrc": "20878:55:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "20878:55:64"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "token",
                                              "nativeSrc": "20977:5:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "20977:5:64"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "extcodesize",
                                            "nativeSrc": "20965:11:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "20965:11:64"
                                          },
                                          "nativeSrc": "20965:18:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "20965:18:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "iszero",
                                        "nativeSrc": "20958:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "20958:6:64"
                                      },
                                      "nativeSrc": "20958:26:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "20958:26:64"
                                    },
                                    {
                                      "name": "exists",
                                      "nativeSrc": "20986:6:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "20986:6:64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nativeSrc": "20955:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "20955:2:64"
                                  },
                                  "nativeSrc": "20955:38:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "20955:38:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "20853:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "20853:3:64"
                              },
                              "nativeSrc": "20853:196:64",
                              "nodeType": "YulFunctionCall",
                              "src": "20853:196:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "20829:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "20829:6:64"
                          },
                          "nativeSrc": "20829:234:64",
                          "nodeType": "YulFunctionCall",
                          "src": "20829:234:64"
                        },
                        "nativeSrc": "20826:440:64",
                        "nodeType": "YulIf",
                        "src": "20826:440:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 54936,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20688:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55162,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20452:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55162,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21234:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55158,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20538:4:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55160,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20493:2:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55156,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20410:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55156,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "20977:5:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55165,
                  "nodeType": "InlineAssembly",
                  "src": "20317:959:64"
                }
              ]
            },
            "documentation": {
              "id": 55154,
              "nodeType": "StructuredDocumentation",
              "src": "20049:103:64",
              "text": "@dev Sends `amount` of ERC20 `token` from `from` to `to` via Permit2.\n Reverts upon failure."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "permit2TransferFrom",
            "nameLocation": "20166:19:64",
            "parameters": {
              "id": 55163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55156,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "20194:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55167,
                  "src": "20186:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55155,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20186:7:64",
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
                  "id": 55158,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "20209:4:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55167,
                  "src": "20201:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55157,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20201:7:64",
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
                  "id": 55160,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "20223:2:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55167,
                  "src": "20215:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55159,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "20215:7:64",
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
                  "id": 55162,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "20235:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55167,
                  "src": "20227:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55161,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20227:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20185:57:64"
            },
            "returnParameters": {
              "id": 55164,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20264:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55206,
            "nodeType": "FunctionDefinition",
            "src": "21503:2469:64",
            "nodes": [],
            "body": {
              "id": 55205,
              "nodeType": "Block",
              "src": "21711:2261:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    55188
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 55188,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "21726:7:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 55205,
                      "src": "21721:12:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 55187,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "21721:4:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 55189,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "21721:12:64"
                },
                {
                  "AST": {
                    "nativeSrc": "21795:2084:64",
                    "nodeType": "YulBlock",
                    "src": "21795:2084:64",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "21846:2023:64",
                          "nodeType": "YulBlock",
                          "src": "21846:2023:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21871:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "21871:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "21877:10:64",
                                    "nodeType": "YulLiteral",
                                    "src": "21877:10:64",
                                    "type": "",
                                    "value": "0x3644e515"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "21864:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "21864:6:64"
                                },
                                "nativeSrc": "21864:24:64",
                                "nodeType": "YulFunctionCall",
                                "src": "21864:24:64"
                              },
                              "nativeSrc": "21864:24:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "21864:24:64"
                            },
                            {
                              "body": {
                                "nativeSrc": "22434:9:64",
                                "nodeType": "YulBlock",
                                "src": "22434:9:64",
                                "statements": [
                                  {
                                    "nativeSrc": "22436:5:64",
                                    "nodeType": "YulBreak",
                                    "src": "22436:5:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "kind": "number",
                                                    "nativeSrc": "22066:4:64",
                                                    "nodeType": "YulLiteral",
                                                    "src": "22066:4:64",
                                                    "type": "",
                                                    "value": "0x00"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "mload",
                                                  "nativeSrc": "22060:5:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "22060:5:64"
                                                },
                                                "nativeSrc": "22060:11:64",
                                                "nodeType": "YulFunctionCall",
                                                "src": "22060:11:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "22053:6:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "22053:6:64"
                                            },
                                            "nativeSrc": "22053:19:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "22053:19:64"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [],
                                                "functionName": {
                                                  "name": "returndatasize",
                                                  "nativeSrc": "22077:14:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "22077:14:64"
                                                },
                                                "nativeSrc": "22077:16:64",
                                                "nodeType": "YulFunctionCall",
                                                "src": "22077:16:64"
                                              },
                                              {
                                                "kind": "number",
                                                "nativeSrc": "22095:4:64",
                                                "nodeType": "YulLiteral",
                                                "src": "22095:4:64",
                                                "type": "",
                                                "value": "0x20"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "eq",
                                              "nativeSrc": "22074:2:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "22074:2:64"
                                            },
                                            "nativeSrc": "22074:26:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "22074:26:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "lt",
                                          "nativeSrc": "22050:2:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "22050:2:64"
                                        },
                                        "nativeSrc": "22050:51:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "22050:51:64"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "22357:4:64",
                                            "nodeType": "YulLiteral",
                                            "src": "22357:4:64",
                                            "type": "",
                                            "value": "5000"
                                          },
                                          {
                                            "name": "token",
                                            "nativeSrc": "22363:5:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "22363:5:64"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "22370:4:64",
                                            "nodeType": "YulLiteral",
                                            "src": "22370:4:64",
                                            "type": "",
                                            "value": "0x1c"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "22376:4:64",
                                            "nodeType": "YulLiteral",
                                            "src": "22376:4:64",
                                            "type": "",
                                            "value": "0x04"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "22382:4:64",
                                            "nodeType": "YulLiteral",
                                            "src": "22382:4:64",
                                            "type": "",
                                            "value": "0x00"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "22388:4:64",
                                            "nodeType": "YulLiteral",
                                            "src": "22388:4:64",
                                            "type": "",
                                            "value": "0x20"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "staticcall",
                                          "nativeSrc": "22346:10:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "22346:10:64"
                                        },
                                        "nativeSrc": "22346:47:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "22346:47:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "21961:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "21961:3:64"
                                    },
                                    "nativeSrc": "21961:454:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "21961:454:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nativeSrc": "21933:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "21933:6:64"
                                },
                                "nativeSrc": "21933:500:64",
                                "nodeType": "YulFunctionCall",
                                "src": "21933:500:64"
                              },
                              "nativeSrc": "21930:513:64",
                              "nodeType": "YulIf",
                              "src": "21930:513:64"
                            },
                            {
                              "nativeSrc": "22532:20:64",
                              "nodeType": "YulVariableDeclaration",
                              "src": "22532:20:64",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "22547:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "22547:4:64",
                                    "type": "",
                                    "value": "0x40"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nativeSrc": "22541:5:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "22541:5:64"
                                },
                                "nativeSrc": "22541:11:64",
                                "nodeType": "YulFunctionCall",
                                "src": "22541:11:64"
                              },
                              "variables": [
                                {
                                  "name": "m",
                                  "nativeSrc": "22536:1:64",
                                  "nodeType": "YulTypedName",
                                  "src": "22536:1:64",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "22580:1:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "22580:1:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "22583:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "22583:4:64",
                                        "type": "",
                                        "value": "0x34"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "22576:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "22576:3:64"
                                    },
                                    "nativeSrc": "22576:12:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22576:12:64"
                                  },
                                  {
                                    "name": "spender",
                                    "nativeSrc": "22590:7:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "22590:7:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "22569:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "22569:6:64"
                                },
                                "nativeSrc": "22569:29:64",
                                "nodeType": "YulFunctionCall",
                                "src": "22569:29:64"
                              },
                              "nativeSrc": "22569:29:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "22569:29:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "22626:1:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "22626:1:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "22629:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "22629:4:64",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "22622:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "22622:3:64"
                                    },
                                    "nativeSrc": "22622:12:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22622:12:64"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "22640:2:64",
                                        "nodeType": "YulLiteral",
                                        "src": "22640:2:64",
                                        "type": "",
                                        "value": "96"
                                      },
                                      {
                                        "name": "owner",
                                        "nativeSrc": "22644:5:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "22644:5:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nativeSrc": "22636:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "22636:3:64"
                                    },
                                    "nativeSrc": "22636:14:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22636:14:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "22615:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "22615:6:64"
                                },
                                "nativeSrc": "22615:36:64",
                                "nodeType": "YulFunctionCall",
                                "src": "22615:36:64"
                              },
                              "nativeSrc": "22615:36:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "22615:36:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "22679:1:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "22679:1:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "22682:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "22682:4:64",
                                        "type": "",
                                        "value": "0x74"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "22675:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "22675:3:64"
                                    },
                                    "nativeSrc": "22675:12:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22675:12:64"
                                  },
                                  {
                                    "name": "deadline",
                                    "nativeSrc": "22689:8:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "22689:8:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "22668:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "22668:6:64"
                                },
                                "nativeSrc": "22668:30:64",
                                "nodeType": "YulFunctionCall",
                                "src": "22668:30:64"
                              },
                              "nativeSrc": "22668:30:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "22668:30:64"
                            },
                            {
                              "body": {
                                "nativeSrc": "22756:726:64",
                                "nodeType": "YulBlock",
                                "src": "22756:726:64",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "22785:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "22785:4:64",
                                          "type": "",
                                          "value": "0x14"
                                        },
                                        {
                                          "name": "owner",
                                          "nativeSrc": "22791:5:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "22791:5:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "22778:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "22778:6:64"
                                      },
                                      "nativeSrc": "22778:19:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "22778:19:64"
                                    },
                                    "nativeSrc": "22778:19:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "22778:19:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nativeSrc": "22825:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "22825:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "22831:34:64",
                                          "nodeType": "YulLiteral",
                                          "src": "22831:34:64",
                                          "type": "",
                                          "value": "0x7ecebe00000000000000000000000000"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "22818:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "22818:6:64"
                                      },
                                      "nativeSrc": "22818:48:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "22818:48:64"
                                    },
                                    "nativeSrc": "22818:48:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "22818:48:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "m",
                                              "nativeSrc": "22920:1:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "22920:1:64"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "22923:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "22923:4:64",
                                              "type": "",
                                              "value": "0x94"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "22916:3:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "22916:3:64"
                                          },
                                          "nativeSrc": "22916:12:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "22916:12:64"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [],
                                              "functionName": {
                                                "name": "gas",
                                                "nativeSrc": "22941:3:64",
                                                "nodeType": "YulIdentifier",
                                                "src": "22941:3:64"
                                              },
                                              "nativeSrc": "22941:5:64",
                                              "nodeType": "YulFunctionCall",
                                              "src": "22941:5:64"
                                            },
                                            {
                                              "name": "token",
                                              "nativeSrc": "22948:5:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "22948:5:64"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "22955:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "22955:4:64",
                                              "type": "",
                                              "value": "0x10"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "22961:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "22961:4:64",
                                              "type": "",
                                              "value": "0x24"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "m",
                                                  "nativeSrc": "22971:1:64",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "22971:1:64"
                                                },
                                                {
                                                  "kind": "number",
                                                  "nativeSrc": "22974:4:64",
                                                  "nodeType": "YulLiteral",
                                                  "src": "22974:4:64",
                                                  "type": "",
                                                  "value": "0x54"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nativeSrc": "22967:3:64",
                                                "nodeType": "YulIdentifier",
                                                "src": "22967:3:64"
                                              },
                                              "nativeSrc": "22967:12:64",
                                              "nodeType": "YulFunctionCall",
                                              "src": "22967:12:64"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "22981:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "22981:4:64",
                                              "type": "",
                                              "value": "0x20"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "staticcall",
                                            "nativeSrc": "22930:10:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "22930:10:64"
                                          },
                                          "nativeSrc": "22930:56:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "22930:56:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "22909:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "22909:6:64"
                                      },
                                      "nativeSrc": "22909:78:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "22909:78:64"
                                    },
                                    "nativeSrc": "22909:78:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "22909:78:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "23015:1:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "23015:1:64"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23018:34:64",
                                          "nodeType": "YulLiteral",
                                          "src": "23018:34:64",
                                          "type": "",
                                          "value": "0x8fcbaf0c000000000000000000000000"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "23008:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23008:6:64"
                                      },
                                      "nativeSrc": "23008:45:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23008:45:64"
                                    },
                                    "nativeSrc": "23008:45:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23008:45:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "m",
                                              "nativeSrc": "23235:1:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "23235:1:64"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23238:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "23238:4:64",
                                              "type": "",
                                              "value": "0xb4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "23231:3:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "23231:3:64"
                                          },
                                          "nativeSrc": "23231:12:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23231:12:64"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23249:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "23249:4:64",
                                              "type": "",
                                              "value": "0xff"
                                            },
                                            {
                                              "name": "v",
                                              "nativeSrc": "23255:1:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "23255:1:64"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "and",
                                            "nativeSrc": "23245:3:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "23245:3:64"
                                          },
                                          "nativeSrc": "23245:12:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23245:12:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "23224:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23224:6:64"
                                      },
                                      "nativeSrc": "23224:34:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23224:34:64"
                                    },
                                    "nativeSrc": "23224:34:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23224:34:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "m",
                                              "nativeSrc": "23290:1:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "23290:1:64"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23293:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "23293:4:64",
                                              "type": "",
                                              "value": "0xd4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "23286:3:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "23286:3:64"
                                          },
                                          "nativeSrc": "23286:12:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23286:12:64"
                                        },
                                        {
                                          "name": "r",
                                          "nativeSrc": "23300:1:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "23300:1:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "23279:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23279:6:64"
                                      },
                                      "nativeSrc": "23279:23:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23279:23:64"
                                    },
                                    "nativeSrc": "23279:23:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23279:23:64"
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "m",
                                              "nativeSrc": "23334:1:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "23334:1:64"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23337:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "23337:4:64",
                                              "type": "",
                                              "value": "0xf4"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "23330:3:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "23330:3:64"
                                          },
                                          "nativeSrc": "23330:12:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23330:12:64"
                                        },
                                        {
                                          "name": "s",
                                          "nativeSrc": "23344:1:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "23344:1:64"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mstore",
                                        "nativeSrc": "23323:6:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23323:6:64"
                                      },
                                      "nativeSrc": "23323:23:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23323:23:64"
                                    },
                                    "nativeSrc": "23323:23:64",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "23323:23:64"
                                  },
                                  {
                                    "nativeSrc": "23367:71:64",
                                    "nodeType": "YulAssignment",
                                    "src": "23367:71:64",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "gas",
                                            "nativeSrc": "23383:3:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "23383:3:64"
                                          },
                                          "nativeSrc": "23383:5:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23383:5:64"
                                        },
                                        {
                                          "name": "token",
                                          "nativeSrc": "23390:5:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "23390:5:64"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23397:1:64",
                                          "nodeType": "YulLiteral",
                                          "src": "23397:1:64",
                                          "type": "",
                                          "value": "0"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "m",
                                              "nativeSrc": "23404:1:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "23404:1:64"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "23407:4:64",
                                              "nodeType": "YulLiteral",
                                              "src": "23407:4:64",
                                              "type": "",
                                              "value": "0x10"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "23400:3:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "23400:3:64"
                                          },
                                          "nativeSrc": "23400:12:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23400:12:64"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23414:5:64",
                                          "nodeType": "YulLiteral",
                                          "src": "23414:5:64",
                                          "type": "",
                                          "value": "0x104"
                                        },
                                        {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "codesize",
                                            "nativeSrc": "23421:8:64",
                                            "nodeType": "YulIdentifier",
                                            "src": "23421:8:64"
                                          },
                                          "nativeSrc": "23421:10:64",
                                          "nodeType": "YulFunctionCall",
                                          "src": "23421:10:64"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "23433:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "23433:4:64",
                                          "type": "",
                                          "value": "0x00"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "call",
                                        "nativeSrc": "23378:4:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23378:4:64"
                                      },
                                      "nativeSrc": "23378:60:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "23378:60:64"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "success",
                                        "nativeSrc": "23367:7:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23367:7:64"
                                      }
                                    ]
                                  },
                                  {
                                    "nativeSrc": "23459:5:64",
                                    "nodeType": "YulBreak",
                                    "src": "23459:5:64"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "22727:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "22727:4:64",
                                        "type": "",
                                        "value": "0x00"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nativeSrc": "22721:5:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "22721:5:64"
                                    },
                                    "nativeSrc": "22721:11:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "22721:11:64"
                                  },
                                  {
                                    "name": "DAI_DOMAIN_SEPARATOR",
                                    "nativeSrc": "22734:20:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "22734:20:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "eq",
                                  "nativeSrc": "22718:2:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "22718:2:64"
                                },
                                "nativeSrc": "22718:37:64",
                                "nodeType": "YulFunctionCall",
                                "src": "22718:37:64"
                              },
                              "nativeSrc": "22715:767:64",
                              "nodeType": "YulIf",
                              "src": "22715:767:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "m",
                                    "nativeSrc": "23506:1:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "23506:1:64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "23509:34:64",
                                    "nodeType": "YulLiteral",
                                    "src": "23509:34:64",
                                    "type": "",
                                    "value": "0xd505accf000000000000000000000000"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "23499:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "23499:6:64"
                                },
                                "nativeSrc": "23499:45:64",
                                "nodeType": "YulFunctionCall",
                                "src": "23499:45:64"
                              },
                              "nativeSrc": "23499:45:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "23499:45:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "23598:1:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23598:1:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23601:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "23601:4:64",
                                        "type": "",
                                        "value": "0x54"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "23594:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "23594:3:64"
                                    },
                                    "nativeSrc": "23594:12:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23594:12:64"
                                  },
                                  {
                                    "name": "amount",
                                    "nativeSrc": "23608:6:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "23608:6:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "23587:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "23587:6:64"
                                },
                                "nativeSrc": "23587:28:64",
                                "nodeType": "YulFunctionCall",
                                "src": "23587:28:64"
                              },
                              "nativeSrc": "23587:28:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "23587:28:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "23643:1:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23643:1:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23646:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "23646:4:64",
                                        "type": "",
                                        "value": "0x94"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "23639:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "23639:3:64"
                                    },
                                    "nativeSrc": "23639:12:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23639:12:64"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23657:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "23657:4:64",
                                        "type": "",
                                        "value": "0xff"
                                      },
                                      {
                                        "name": "v",
                                        "nativeSrc": "23663:1:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23663:1:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "23653:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "23653:3:64"
                                    },
                                    "nativeSrc": "23653:12:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23653:12:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "23632:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "23632:6:64"
                                },
                                "nativeSrc": "23632:34:64",
                                "nodeType": "YulFunctionCall",
                                "src": "23632:34:64"
                              },
                              "nativeSrc": "23632:34:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "23632:34:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "23694:1:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23694:1:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23697:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "23697:4:64",
                                        "type": "",
                                        "value": "0xb4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "23690:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "23690:3:64"
                                    },
                                    "nativeSrc": "23690:12:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23690:12:64"
                                  },
                                  {
                                    "name": "r",
                                    "nativeSrc": "23704:1:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "23704:1:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "23683:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "23683:6:64"
                                },
                                "nativeSrc": "23683:23:64",
                                "nodeType": "YulFunctionCall",
                                "src": "23683:23:64"
                              },
                              "nativeSrc": "23683:23:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "23683:23:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "23734:1:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23734:1:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23737:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "23737:4:64",
                                        "type": "",
                                        "value": "0xd4"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "23730:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "23730:3:64"
                                    },
                                    "nativeSrc": "23730:12:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23730:12:64"
                                  },
                                  {
                                    "name": "s",
                                    "nativeSrc": "23744:1:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "23744:1:64"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "23723:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "23723:6:64"
                                },
                                "nativeSrc": "23723:23:64",
                                "nodeType": "YulFunctionCall",
                                "src": "23723:23:64"
                              },
                              "nativeSrc": "23723:23:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "23723:23:64"
                            },
                            {
                              "nativeSrc": "23763:70:64",
                              "nodeType": "YulAssignment",
                              "src": "23763:70:64",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "gas",
                                      "nativeSrc": "23779:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "23779:3:64"
                                    },
                                    "nativeSrc": "23779:5:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23779:5:64"
                                  },
                                  {
                                    "name": "token",
                                    "nativeSrc": "23786:5:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "23786:5:64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "23793:1:64",
                                    "nodeType": "YulLiteral",
                                    "src": "23793:1:64",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "m",
                                        "nativeSrc": "23800:1:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "23800:1:64"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "23803:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "23803:4:64",
                                        "type": "",
                                        "value": "0x10"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "23796:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "23796:3:64"
                                    },
                                    "nativeSrc": "23796:12:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23796:12:64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "23810:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "23810:4:64",
                                    "type": "",
                                    "value": "0xe4"
                                  },
                                  {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "codesize",
                                      "nativeSrc": "23816:8:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "23816:8:64"
                                    },
                                    "nativeSrc": "23816:10:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "23816:10:64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "23828:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "23828:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  }
                                ],
                                "functionName": {
                                  "name": "call",
                                  "nativeSrc": "23774:4:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "23774:4:64"
                                },
                                "nativeSrc": "23774:59:64",
                                "nodeType": "YulFunctionCall",
                                "src": "23774:59:64"
                              },
                              "variableNames": [
                                {
                                  "name": "success",
                                  "nativeSrc": "23763:7:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "23763:7:64"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "23850:5:64",
                              "nodeType": "YulBreak",
                              "src": "23850:5:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "21820:2:64",
                              "nodeType": "YulLiteral",
                              "src": "21820:2:64",
                              "type": "",
                              "value": "96"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "token",
                                  "nativeSrc": "21828:5:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "21828:5:64"
                                },
                                {
                                  "name": "WETH9",
                                  "nativeSrc": "21835:5:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "21835:5:64"
                                }
                              ],
                              "functionName": {
                                "name": "xor",
                                "nativeSrc": "21824:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "21824:3:64"
                              },
                              "nativeSrc": "21824:17:64",
                              "nodeType": "YulFunctionCall",
                              "src": "21824:17:64"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nativeSrc": "21816:3:64",
                            "nodeType": "YulIdentifier",
                            "src": "21816:3:64"
                          },
                          "nativeSrc": "21816:26:64",
                          "nodeType": "YulFunctionCall",
                          "src": "21816:26:64"
                        },
                        "nativeSrc": "21809:2060:64",
                        "nodeType": "YulForLoop",
                        "post": {
                          "nativeSrc": "21843:2:64",
                          "nodeType": "YulBlock",
                          "src": "21843:2:64",
                          "statements": []
                        },
                        "pre": {
                          "nativeSrc": "21813:2:64",
                          "nodeType": "YulBlock",
                          "src": "21813:2:64",
                          "statements": []
                        },
                        "src": "21809:2060:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 54928,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22734:20:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 54932,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21835:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55176,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23608:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55178,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22689:8:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55172,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22644:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55172,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22791:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55182,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23300:1:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55182,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23704:1:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55184,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23344:1:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55184,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23744:1:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55174,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22590:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55188,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23367:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55188,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23763:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55170,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "21828:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55170,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22363:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55170,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "22948:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55170,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23390:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55170,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23786:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55180,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23255:1:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55180,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "23663:1:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55190,
                  "nodeType": "InlineAssembly",
                  "src": "21786:2093:64"
                },
                {
                  "condition": {
                    "id": 55192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "23892:8:64",
                    "subExpression": {
                      "id": 55191,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55188,
                      "src": "23893:7:64",
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
                  "id": 55204,
                  "nodeType": "IfStatement",
                  "src": "23888:77:64",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "id": 55194,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55170,
                          "src": "23916:5:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 55195,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55172,
                          "src": "23923:5:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 55196,
                          "name": "spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55174,
                          "src": "23930:7:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 55197,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55176,
                          "src": "23939:6:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 55198,
                          "name": "deadline",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55178,
                          "src": "23947:8:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 55199,
                          "name": "v",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55180,
                          "src": "23957:1:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        {
                          "id": 55200,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55182,
                          "src": "23960:1:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 55201,
                          "name": "s",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55184,
                          "src": "23963:1:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
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
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 55193,
                        "name": "simplePermit2",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55228,
                        "src": "23902:13:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$__$",
                          "typeString": "function (address,address,address,uint256,uint256,uint8,bytes32,bytes32)"
                        }
                      },
                      "id": 55202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "23902:63:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 55203,
                    "nodeType": "ExpressionStatement",
                    "src": "23902:63:64"
                  }
                }
              ]
            },
            "documentation": {
              "id": 55168,
              "nodeType": "StructuredDocumentation",
              "src": "21288:210:64",
              "text": "@dev Permit a user to spend a given amount of\n another user's tokens via native EIP-2612 permit if possible, falling\n back to Permit2 if native permit fails or is not implemented on the token."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "permit2",
            "nameLocation": "21512:7:64",
            "parameters": {
              "id": 55185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55170,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "21537:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55206,
                  "src": "21529:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55169,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "21529:7:64",
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
                  "id": 55172,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "21560:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55206,
                  "src": "21552:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55171,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "21552:7:64",
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
                  "id": 55174,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "21583:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55206,
                  "src": "21575:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55173,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "21575:7:64",
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
                  "id": 55176,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "21608:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55206,
                  "src": "21600:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55175,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21600:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55178,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "21632:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55206,
                  "src": "21624:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21624:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55180,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "21656:1:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55206,
                  "src": "21650:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 55179,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "21650:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55182,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "21675:1:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55206,
                  "src": "21667:9:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 55181,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "21667:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55184,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "21694:1:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55206,
                  "src": "21686:9:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 55183,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "21686:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21519:182:64"
            },
            "returnParameters": {
              "id": 55186,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21711:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 55228,
            "nodeType": "FunctionDefinition",
            "src": "24030:2284:64",
            "nodes": [],
            "body": {
              "id": 55227,
              "nodeType": "Block",
              "src": "24244:2070:64",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "24306:2002:64",
                    "nodeType": "YulBlock",
                    "src": "24306:2002:64",
                    "statements": [
                      {
                        "nativeSrc": "24320:20:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "24320:20:64",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "24335:4:64",
                              "nodeType": "YulLiteral",
                              "src": "24335:4:64",
                              "type": "",
                              "value": "0x40"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "24329:5:64",
                            "nodeType": "YulIdentifier",
                            "src": "24329:5:64"
                          },
                          "nativeSrc": "24329:11:64",
                          "nodeType": "YulFunctionCall",
                          "src": "24329:11:64"
                        },
                        "variables": [
                          {
                            "name": "m",
                            "nativeSrc": "24324:1:64",
                            "nodeType": "YulTypedName",
                            "src": "24324:1:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "24360:1:64",
                              "nodeType": "YulIdentifier",
                              "src": "24360:1:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "24363:10:64",
                              "nodeType": "YulLiteral",
                              "src": "24363:10:64",
                              "type": "",
                              "value": "0x927da105"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "24353:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "24353:6:64"
                          },
                          "nativeSrc": "24353:21:64",
                          "nodeType": "YulFunctionCall",
                          "src": "24353:21:64"
                        },
                        "nativeSrc": "24353:21:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "24353:21:64"
                      },
                      {
                        "nativeSrc": "24428:318:64",
                        "nodeType": "YulBlock",
                        "src": "24428:318:64",
                        "statements": [
                          {
                            "nativeSrc": "24446:34:64",
                            "nodeType": "YulVariableDeclaration",
                            "src": "24446:34:64",
                            "value": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "24469:2:64",
                                  "nodeType": "YulLiteral",
                                  "src": "24469:2:64",
                                  "type": "",
                                  "value": "96"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24477:1:64",
                                      "nodeType": "YulLiteral",
                                      "src": "24477:1:64",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nativeSrc": "24473:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24473:3:64"
                                  },
                                  "nativeSrc": "24473:6:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24473:6:64"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nativeSrc": "24465:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "24465:3:64"
                              },
                              "nativeSrc": "24465:15:64",
                              "nodeType": "YulFunctionCall",
                              "src": "24465:15:64"
                            },
                            "variables": [
                              {
                                "name": "addressMask",
                                "nativeSrc": "24450:11:64",
                                "nodeType": "YulTypedName",
                                "src": "24450:11:64",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "m",
                                      "nativeSrc": "24508:1:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24508:1:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24511:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "24511:4:64",
                                      "type": "",
                                      "value": "0x20"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "24504:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24504:3:64"
                                  },
                                  "nativeSrc": "24504:12:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24504:12:64"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "addressMask",
                                      "nativeSrc": "24522:11:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24522:11:64"
                                    },
                                    {
                                      "name": "owner",
                                      "nativeSrc": "24535:5:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24535:5:64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nativeSrc": "24518:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24518:3:64"
                                  },
                                  "nativeSrc": "24518:23:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24518:23:64"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "24497:6:64",
                                "nodeType": "YulIdentifier",
                                "src": "24497:6:64"
                              },
                              "nativeSrc": "24497:45:64",
                              "nodeType": "YulFunctionCall",
                              "src": "24497:45:64"
                            },
                            "nativeSrc": "24497:45:64",
                            "nodeType": "YulExpressionStatement",
                            "src": "24497:45:64"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "m",
                                      "nativeSrc": "24570:1:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24570:1:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24573:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "24573:4:64",
                                      "type": "",
                                      "value": "0x40"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "24566:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24566:3:64"
                                  },
                                  "nativeSrc": "24566:12:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24566:12:64"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "addressMask",
                                      "nativeSrc": "24584:11:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24584:11:64"
                                    },
                                    {
                                      "name": "token",
                                      "nativeSrc": "24597:5:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24597:5:64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nativeSrc": "24580:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24580:3:64"
                                  },
                                  "nativeSrc": "24580:23:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24580:23:64"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "24559:6:64",
                                "nodeType": "YulIdentifier",
                                "src": "24559:6:64"
                              },
                              "nativeSrc": "24559:45:64",
                              "nodeType": "YulFunctionCall",
                              "src": "24559:45:64"
                            },
                            "nativeSrc": "24559:45:64",
                            "nodeType": "YulExpressionStatement",
                            "src": "24559:45:64"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "m",
                                      "nativeSrc": "24632:1:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24632:1:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24635:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "24635:4:64",
                                      "type": "",
                                      "value": "0x60"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "24628:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24628:3:64"
                                  },
                                  "nativeSrc": "24628:12:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24628:12:64"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "addressMask",
                                      "nativeSrc": "24646:11:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24646:11:64"
                                    },
                                    {
                                      "name": "spender",
                                      "nativeSrc": "24659:7:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24659:7:64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nativeSrc": "24642:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24642:3:64"
                                  },
                                  "nativeSrc": "24642:25:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24642:25:64"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "24621:6:64",
                                "nodeType": "YulIdentifier",
                                "src": "24621:6:64"
                              },
                              "nativeSrc": "24621:47:64",
                              "nodeType": "YulFunctionCall",
                              "src": "24621:47:64"
                            },
                            "nativeSrc": "24621:47:64",
                            "nodeType": "YulExpressionStatement",
                            "src": "24621:47:64"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "m",
                                      "nativeSrc": "24696:1:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24696:1:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24699:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "24699:4:64",
                                      "type": "",
                                      "value": "0xc0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "24692:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24692:3:64"
                                  },
                                  "nativeSrc": "24692:12:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24692:12:64"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "addressMask",
                                      "nativeSrc": "24710:11:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24710:11:64"
                                    },
                                    {
                                      "name": "spender",
                                      "nativeSrc": "24723:7:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24723:7:64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nativeSrc": "24706:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24706:3:64"
                                  },
                                  "nativeSrc": "24706:25:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24706:25:64"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nativeSrc": "24685:6:64",
                                "nodeType": "YulIdentifier",
                                "src": "24685:6:64"
                              },
                              "nativeSrc": "24685:47:64",
                              "nodeType": "YulFunctionCall",
                              "src": "24685:47:64"
                            },
                            "nativeSrc": "24685:47:64",
                            "nodeType": "YulExpressionStatement",
                            "src": "24685:47:64"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "24759:47:64",
                        "nodeType": "YulVariableDeclaration",
                        "src": "24759:47:64",
                        "value": {
                          "arguments": [
                            {
                              "name": "PERMIT2",
                              "nativeSrc": "24772:7:64",
                              "nodeType": "YulIdentifier",
                              "src": "24772:7:64"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24792:3:64",
                                      "nodeType": "YulLiteral",
                                      "src": "24792:3:64",
                                      "type": "",
                                      "value": "160"
                                    },
                                    {
                                      "name": "amount",
                                      "nativeSrc": "24797:6:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "24797:6:64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nativeSrc": "24788:3:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24788:3:64"
                                  },
                                  "nativeSrc": "24788:16:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24788:16:64"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "24781:6:64",
                                "nodeType": "YulIdentifier",
                                "src": "24781:6:64"
                              },
                              "nativeSrc": "24781:24:64",
                              "nodeType": "YulFunctionCall",
                              "src": "24781:24:64"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nativeSrc": "24768:3:64",
                            "nodeType": "YulIdentifier",
                            "src": "24768:3:64"
                          },
                          "nativeSrc": "24768:38:64",
                          "nodeType": "YulFunctionCall",
                          "src": "24768:38:64"
                        },
                        "variables": [
                          {
                            "name": "p",
                            "nativeSrc": "24763:1:64",
                            "nodeType": "YulTypedName",
                            "src": "24763:1:64",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "25125:174:64",
                          "nodeType": "YulBlock",
                          "src": "25125:174:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "25150:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "25150:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "25156:18:64",
                                    "nodeType": "YulLiteral",
                                    "src": "25156:18:64",
                                    "type": "",
                                    "value": "0x6b836e6b8757f0fd"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "25143:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "25143:6:64"
                                },
                                "nativeSrc": "25143:32:64",
                                "nodeType": "YulFunctionCall",
                                "src": "25143:32:64"
                              },
                              "nativeSrc": "25143:32:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "25143:32:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "25254:4:64",
                                        "nodeType": "YulLiteral",
                                        "src": "25254:4:64",
                                        "type": "",
                                        "value": "0x18"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "25264:1:64",
                                            "nodeType": "YulLiteral",
                                            "src": "25264:1:64",
                                            "type": "",
                                            "value": "2"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "p",
                                                "nativeSrc": "25274:1:64",
                                                "nodeType": "YulIdentifier",
                                                "src": "25274:1:64"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "iszero",
                                              "nativeSrc": "25267:6:64",
                                              "nodeType": "YulIdentifier",
                                              "src": "25267:6:64"
                                            },
                                            "nativeSrc": "25267:9:64",
                                            "nodeType": "YulFunctionCall",
                                            "src": "25267:9:64"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nativeSrc": "25260:3:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "25260:3:64"
                                        },
                                        "nativeSrc": "25260:17:64",
                                        "nodeType": "YulFunctionCall",
                                        "src": "25260:17:64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "25250:3:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "25250:3:64"
                                    },
                                    "nativeSrc": "25250:28:64",
                                    "nodeType": "YulFunctionCall",
                                    "src": "25250:28:64"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "25280:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "25280:4:64",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "25243:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "25243:6:64"
                                },
                                "nativeSrc": "25243:42:64",
                                "nodeType": "YulFunctionCall",
                                "src": "25243:42:64"
                              },
                              "nativeSrc": "25243:42:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "25243:42:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "returndatasize",
                                        "nativeSrc": "24934:14:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "24934:14:64"
                                      },
                                      "nativeSrc": "24934:16:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "24934:16:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "24952:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "24952:4:64",
                                      "type": "",
                                      "value": "0x5f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "gt",
                                    "nativeSrc": "24931:2:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "24931:2:64"
                                  },
                                  "nativeSrc": "24931:26:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "24931:26:64"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "25043:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "25043:3:64"
                                      },
                                      "nativeSrc": "25043:5:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "25043:5:64"
                                    },
                                    {
                                      "name": "p",
                                      "nativeSrc": "25050:1:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "25050:1:64"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "25057:1:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "25057:1:64"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "25060:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "25060:4:64",
                                          "type": "",
                                          "value": "0x1c"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "25053:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "25053:3:64"
                                      },
                                      "nativeSrc": "25053:12:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "25053:12:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "25067:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "25067:4:64",
                                      "type": "",
                                      "value": "0x64"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "25077:1:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "25077:1:64"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "25080:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "25080:4:64",
                                          "type": "",
                                          "value": "0x60"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "25073:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "25073:3:64"
                                      },
                                      "nativeSrc": "25073:12:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "25073:12:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "25087:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "25087:4:64",
                                      "type": "",
                                      "value": "0x60"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "staticcall",
                                    "nativeSrc": "25032:10:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "25032:10:64"
                                  },
                                  "nativeSrc": "25032:60:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "25032:60:64"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "24846:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "24846:3:64"
                              },
                              "nativeSrc": "24846:264:64",
                              "nodeType": "YulFunctionCall",
                              "src": "24846:264:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "24822:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "24822:6:64"
                          },
                          "nativeSrc": "24822:302:64",
                          "nodeType": "YulFunctionCall",
                          "src": "24822:302:64"
                        },
                        "nativeSrc": "24819:480:64",
                        "nodeType": "YulIf",
                        "src": "24819:480:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "m",
                              "nativeSrc": "25319:1:64",
                              "nodeType": "YulIdentifier",
                              "src": "25319:1:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "25322:10:64",
                              "nodeType": "YulLiteral",
                              "src": "25322:10:64",
                              "type": "",
                              "value": "0x2b67b570"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25312:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "25312:6:64"
                          },
                          "nativeSrc": "25312:21:64",
                          "nodeType": "YulFunctionCall",
                          "src": "25312:21:64"
                        },
                        "nativeSrc": "25312:21:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "25312:21:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25504:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "25504:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25507:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "25507:4:64",
                                  "type": "",
                                  "value": "0x60"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25500:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "25500:3:64"
                              },
                              "nativeSrc": "25500:12:64",
                              "nodeType": "YulFunctionCall",
                              "src": "25500:12:64"
                            },
                            {
                              "name": "amount",
                              "nativeSrc": "25514:6:64",
                              "nodeType": "YulIdentifier",
                              "src": "25514:6:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25493:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "25493:6:64"
                          },
                          "nativeSrc": "25493:28:64",
                          "nodeType": "YulFunctionCall",
                          "src": "25493:28:64"
                        },
                        "nativeSrc": "25493:28:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "25493:28:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25545:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "25545:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25548:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "25548:4:64",
                                  "type": "",
                                  "value": "0x80"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25541:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "25541:3:64"
                              },
                              "nativeSrc": "25541:12:64",
                              "nodeType": "YulFunctionCall",
                              "src": "25541:12:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "25555:14:64",
                              "nodeType": "YulLiteral",
                              "src": "25555:14:64",
                              "type": "",
                              "value": "0xffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25534:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "25534:6:64"
                          },
                          "nativeSrc": "25534:36:64",
                          "nodeType": "YulFunctionCall",
                          "src": "25534:36:64"
                        },
                        "nativeSrc": "25534:36:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "25534:36:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25738:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "25738:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25741:4:64",
                                  "nodeType": "YulLiteral",
                                  "src": "25741:4:64",
                                  "type": "",
                                  "value": "0xe0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25734:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "25734:3:64"
                              },
                              "nativeSrc": "25734:12:64",
                              "nodeType": "YulFunctionCall",
                              "src": "25734:12:64"
                            },
                            {
                              "name": "deadline",
                              "nativeSrc": "25748:8:64",
                              "nodeType": "YulIdentifier",
                              "src": "25748:8:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25727:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "25727:6:64"
                          },
                          "nativeSrc": "25727:30:64",
                          "nodeType": "YulFunctionCall",
                          "src": "25727:30:64"
                        },
                        "nativeSrc": "25727:30:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "25727:30:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25781:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "25781:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25784:5:64",
                                  "nodeType": "YulLiteral",
                                  "src": "25784:5:64",
                                  "type": "",
                                  "value": "0x100"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25777:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "25777:3:64"
                              },
                              "nativeSrc": "25777:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "25777:13:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "25792:5:64",
                              "nodeType": "YulLiteral",
                              "src": "25792:5:64",
                              "type": "",
                              "value": "0x100"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25770:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "25770:6:64"
                          },
                          "nativeSrc": "25770:28:64",
                          "nodeType": "YulFunctionCall",
                          "src": "25770:28:64"
                        },
                        "nativeSrc": "25770:28:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "25770:28:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25845:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "25845:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25848:5:64",
                                  "nodeType": "YulLiteral",
                                  "src": "25848:5:64",
                                  "type": "",
                                  "value": "0x120"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25841:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "25841:3:64"
                              },
                              "nativeSrc": "25841:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "25841:13:64"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "25856:4:64",
                              "nodeType": "YulLiteral",
                              "src": "25856:4:64",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25834:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "25834:6:64"
                          },
                          "nativeSrc": "25834:27:64",
                          "nodeType": "YulFunctionCall",
                          "src": "25834:27:64"
                        },
                        "nativeSrc": "25834:27:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "25834:27:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25908:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "25908:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25911:5:64",
                                  "nodeType": "YulLiteral",
                                  "src": "25911:5:64",
                                  "type": "",
                                  "value": "0x140"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25904:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "25904:3:64"
                              },
                              "nativeSrc": "25904:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "25904:13:64"
                            },
                            {
                              "name": "r",
                              "nativeSrc": "25919:1:64",
                              "nodeType": "YulIdentifier",
                              "src": "25919:1:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25897:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "25897:6:64"
                          },
                          "nativeSrc": "25897:24:64",
                          "nodeType": "YulFunctionCall",
                          "src": "25897:24:64"
                        },
                        "nativeSrc": "25897:24:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "25897:24:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25945:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "25945:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25948:5:64",
                                  "nodeType": "YulLiteral",
                                  "src": "25948:5:64",
                                  "type": "",
                                  "value": "0x160"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25941:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "25941:3:64"
                              },
                              "nativeSrc": "25941:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "25941:13:64"
                            },
                            {
                              "name": "s",
                              "nativeSrc": "25956:1:64",
                              "nodeType": "YulIdentifier",
                              "src": "25956:1:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25934:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "25934:6:64"
                          },
                          "nativeSrc": "25934:24:64",
                          "nodeType": "YulFunctionCall",
                          "src": "25934:24:64"
                        },
                        "nativeSrc": "25934:24:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "25934:24:64"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "m",
                                  "nativeSrc": "25982:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "25982:1:64"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "25985:5:64",
                                  "nodeType": "YulLiteral",
                                  "src": "25985:5:64",
                                  "type": "",
                                  "value": "0x180"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "25978:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "25978:3:64"
                              },
                              "nativeSrc": "25978:13:64",
                              "nodeType": "YulFunctionCall",
                              "src": "25978:13:64"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "25997:3:64",
                                  "nodeType": "YulLiteral",
                                  "src": "25997:3:64",
                                  "type": "",
                                  "value": "248"
                                },
                                {
                                  "name": "v",
                                  "nativeSrc": "26002:1:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "26002:1:64"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nativeSrc": "25993:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "25993:3:64"
                              },
                              "nativeSrc": "25993:11:64",
                              "nodeType": "YulFunctionCall",
                              "src": "25993:11:64"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "25971:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "25971:6:64"
                          },
                          "nativeSrc": "25971:34:64",
                          "nodeType": "YulFunctionCall",
                          "src": "25971:34:64"
                        },
                        "nativeSrc": "25971:34:64",
                        "nodeType": "YulExpressionStatement",
                        "src": "25971:34:64"
                      },
                      {
                        "body": {
                          "nativeSrc": "26185:113:64",
                          "nodeType": "YulBlock",
                          "src": "26185:113:64",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "26210:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "26210:4:64",
                                    "type": "",
                                    "value": "0x00"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "26216:10:64",
                                    "nodeType": "YulLiteral",
                                    "src": "26216:10:64",
                                    "type": "",
                                    "value": "0x6b836e6b"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "26203:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "26203:6:64"
                                },
                                "nativeSrc": "26203:24:64",
                                "nodeType": "YulFunctionCall",
                                "src": "26203:24:64"
                              },
                              "nativeSrc": "26203:24:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "26203:24:64"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "26273:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "26273:4:64",
                                    "type": "",
                                    "value": "0x1c"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "26279:4:64",
                                    "nodeType": "YulLiteral",
                                    "src": "26279:4:64",
                                    "type": "",
                                    "value": "0x04"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "26266:6:64",
                                  "nodeType": "YulIdentifier",
                                  "src": "26266:6:64"
                                },
                                "nativeSrc": "26266:18:64",
                                "nodeType": "YulFunctionCall",
                                "src": "26266:18:64"
                              },
                              "nativeSrc": "26266:18:64",
                              "nodeType": "YulExpressionStatement",
                              "src": "26266:18:64"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "token",
                                      "nativeSrc": "26118:5:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "26118:5:64"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extcodesize",
                                    "nativeSrc": "26106:11:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "26106:11:64"
                                  },
                                  "nativeSrc": "26106:18:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "26106:18:64"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "gas",
                                        "nativeSrc": "26131:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "26131:3:64"
                                      },
                                      "nativeSrc": "26131:5:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "26131:5:64"
                                    },
                                    {
                                      "name": "p",
                                      "nativeSrc": "26138:1:64",
                                      "nodeType": "YulIdentifier",
                                      "src": "26138:1:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "26141:1:64",
                                      "nodeType": "YulLiteral",
                                      "src": "26141:1:64",
                                      "type": "",
                                      "value": "0"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "m",
                                          "nativeSrc": "26148:1:64",
                                          "nodeType": "YulIdentifier",
                                          "src": "26148:1:64"
                                        },
                                        {
                                          "kind": "number",
                                          "nativeSrc": "26151:4:64",
                                          "nodeType": "YulLiteral",
                                          "src": "26151:4:64",
                                          "type": "",
                                          "value": "0x1c"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nativeSrc": "26144:3:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "26144:3:64"
                                      },
                                      "nativeSrc": "26144:12:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "26144:12:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "26158:5:64",
                                      "nodeType": "YulLiteral",
                                      "src": "26158:5:64",
                                      "type": "",
                                      "value": "0x184"
                                    },
                                    {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "codesize",
                                        "nativeSrc": "26165:8:64",
                                        "nodeType": "YulIdentifier",
                                        "src": "26165:8:64"
                                      },
                                      "nativeSrc": "26165:10:64",
                                      "nodeType": "YulFunctionCall",
                                      "src": "26165:10:64"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "26177:4:64",
                                      "nodeType": "YulLiteral",
                                      "src": "26177:4:64",
                                      "type": "",
                                      "value": "0x00"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "call",
                                    "nativeSrc": "26126:4:64",
                                    "nodeType": "YulIdentifier",
                                    "src": "26126:4:64"
                                  },
                                  "nativeSrc": "26126:56:64",
                                  "nodeType": "YulFunctionCall",
                                  "src": "26126:56:64"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nativeSrc": "26102:3:64",
                                "nodeType": "YulIdentifier",
                                "src": "26102:3:64"
                              },
                              "nativeSrc": "26102:81:64",
                              "nodeType": "YulFunctionCall",
                              "src": "26102:81:64"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "26021:6:64",
                            "nodeType": "YulIdentifier",
                            "src": "26021:6:64"
                          },
                          "nativeSrc": "26021:163:64",
                          "nodeType": "YulFunctionCall",
                          "src": "26021:163:64"
                        },
                        "nativeSrc": "26018:280:64",
                        "nodeType": "YulIf",
                        "src": "26018:280:64"
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 54936,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24772:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55215,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24797:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55215,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "25514:6:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55217,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "25748:8:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55211,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24535:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55221,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "25919:1:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55223,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "25956:1:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55213,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24659:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55213,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24723:7:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55209,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "24597:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55209,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "26118:5:64",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55219,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "26002:1:64",
                      "valueSize": 1
                    }
                  ],
                  "id": 55226,
                  "nodeType": "InlineAssembly",
                  "src": "24297:2011:64"
                }
              ]
            },
            "documentation": {
              "id": 55207,
              "nodeType": "StructuredDocumentation",
              "src": "23978:47:64",
              "text": "@dev Simple permit on the Permit2 contract."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "simplePermit2",
            "nameLocation": "24039:13:64",
            "parameters": {
              "id": 55224,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55209,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "24070:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55228,
                  "src": "24062:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55208,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24062:7:64",
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
                  "id": 55211,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "24093:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55228,
                  "src": "24085:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24085:7:64",
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
                  "id": 55213,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "24116:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55228,
                  "src": "24108:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55212,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24108:7:64",
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
                  "id": 55215,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "24141:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55228,
                  "src": "24133:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55214,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24133:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55217,
                  "mutability": "mutable",
                  "name": "deadline",
                  "nameLocation": "24165:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55228,
                  "src": "24157:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55216,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24157:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55219,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "24189:1:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55228,
                  "src": "24183:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 55218,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "24183:5:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55221,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "24208:1:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55228,
                  "src": "24200:9:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 55220,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "24200:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55223,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "24227:1:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 55228,
                  "src": "24219:9:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 55222,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "24219:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24052:182:64"
            },
            "returnParameters": {
              "id": 55225,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24244:0:64"
            },
            "scope": 55229,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "SafeTransferLib",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 54898,
          "nodeType": "StructuredDocumentation",
          "src": "57:522:64",
          "text": "@notice Safe ETH and ERC20 transfer library that gracefully handles missing return values.\n @author Solady (https://github.com/vectorized/solady/blob/main/src/utils/SafeTransferLib.sol)\n @author Modified from Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SafeTransferLib.sol)\n @author Permit2 operations from (https://github.com/Uniswap/permit2/blob/main/src/libraries/Permit2Lib.sol)\n @dev Note:\n - For ETH transfers, please use `forceSafeTransferETH` for DoS protection."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          55229
        ],
        "name": "SafeTransferLib",
        "nameLocation": "587:15:64",
        "scope": 55230,
        "usedErrors": [
          54901,
          54904,
          54907,
          54910,
          54913,
          54916
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 64
} as const;