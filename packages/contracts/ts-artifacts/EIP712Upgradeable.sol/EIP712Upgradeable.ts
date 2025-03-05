export const EIP712Upgradeable = {
  "abi": [
    {
      "type": "function",
      "name": "eip712Domain",
      "inputs": [],
      "outputs": [
        {
          "name": "fields",
          "type": "bytes1",
          "internalType": "bytes1"
        },
        {
          "name": "name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "version",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "chainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "verifyingContract",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "salt",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "extensions",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "EIP712DomainChanged",
      "inputs": [],
      "anonymous": false
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
    "eip712Domain()": "84b0196e"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"EIP712DomainChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"eip712Domain\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"fields\",\"type\":\"bytes1\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"version\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"verifyingContract\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256[]\",\"name\":\"extensions\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"https://eips.ethereum.org/EIPS/eip-712[EIP-712] is a standard for hashing and signing of typed structured data. The encoding scheme specified in the EIP requires a domain separator and a hash of the typed structured data, whose encoding is very generic and therefore its implementation in Solidity is not feasible, thus this contract does not implement the encoding itself. Protocols need to implement the type-specific encoding they need in order to produce the hash of their typed data using a combination of `abi.encode` and `keccak256`. This contract implements the EIP-712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA ({_hashTypedDataV4}). The implementation of the domain separator was designed to be as efficient as possible while still properly updating the chain id to protect against replay attacks on an eventual fork of the chain. NOTE: This contract implements the version of the encoding known as \\\"v4\\\", as implemented by the JSON RPC method https://docs.metamask.io/guide/signing-data.html[`eth_signTypedDataV4` in MetaMask]. NOTE: In the upgradeable version of this contract, the cached values will correspond to the address, and the domain separator of the implementation contract. This will cause the {_domainSeparatorV4} function to always rebuild the separator from the immutable values, which is cheaper than accessing a cached version in cold storage.\",\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"EIP712DomainChanged()\":{\"details\":\"MAY be emitted to signal that the domain could have changed.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{\"eip712Domain()\":{\"details\":\"See {IERC-5267}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol\":\"EIP712Upgradeable\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol\":{\"keccak256\":\"0x7a618cd9a1eea21201ec2ed8484080ca6225215e8883723bef34b9dcf22aa3b5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a73451277e35206f1f8b9f20b2cd41732081bd23523f5a2c64e1e67694c33\",\"dweb:/ipfs/QmdPVK7KACRpoavNUoixGsi8jBWeZUJfNYCzZbHGSGz5yu\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol\":{\"keccak256\":\"0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a\",\"dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP\"]},\"node_modules/@openzeppelin/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x725209b582291bb83058e3078624b53d15a133f7401c30295e7f3704181d2aed\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0564ddb19c6d870e27b789d8f985283d815267ad7224883c2d5243c8bacc7dc0\",\"dweb:/ipfs/QmeC953H4sj88ZRFdJNFdmpf7J9SksP1wK4jyMHLo66z49\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol\":{\"keccak256\":\"0x4515543bc4c78561f6bea83ecfdfc3dead55bd59858287d682045b11de1ae575\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://60601f91440125727244fffd2ba84da7caafecaae0fd887c7ccfec678e02b61e\",\"dweb:/ipfs/QmZnKPBtVDiQS9Dp8gZ4sa3ZeTrWVfqF7yuUd6Y8hwm1Rs\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa00be322d7db5786750ce0ac7e2f5b633ac30a5ed5fa1ced1e74acfc19acecea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c84e822f87cbdc4082533b626667b6928715bb2b1e8e7eb96954cebb9e38c8d\",\"dweb:/ipfs/QmZmy9dgxLTerBAQDuuHqbL6EpgRxddqgv5KmwpXYVbKz1\"]},\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03\",\"dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ\"]}},\"version\":1}",
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
          "inputs": [],
          "type": "event",
          "name": "EIP712DomainChanged",
          "anonymous": false
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "eip712Domain",
          "outputs": [
            {
              "internalType": "bytes1",
              "name": "fields",
              "type": "bytes1"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "version",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "verifyingContract",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "uint256[]",
              "name": "extensions",
              "type": "uint256[]"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "eip712Domain()": {
            "details": "See {IERC-5267}."
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
        "node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol": "EIP712Upgradeable"
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
      "node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol": {
        "keccak256": "0x7a618cd9a1eea21201ec2ed8484080ca6225215e8883723bef34b9dcf22aa3b5",
        "urls": [
          "bzz-raw://287a73451277e35206f1f8b9f20b2cd41732081bd23523f5a2c64e1e67694c33",
          "dweb:/ipfs/QmdPVK7KACRpoavNUoixGsi8jBWeZUJfNYCzZbHGSGz5yu"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol": {
        "keccak256": "0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92",
        "urls": [
          "bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a",
          "dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Panic.sol": {
        "keccak256": "0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a",
        "urls": [
          "bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a",
          "dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Strings.sol": {
        "keccak256": "0x725209b582291bb83058e3078624b53d15a133f7401c30295e7f3704181d2aed",
        "urls": [
          "bzz-raw://0564ddb19c6d870e27b789d8f985283d815267ad7224883c2d5243c8bacc7dc0",
          "dweb:/ipfs/QmeC953H4sj88ZRFdJNFdmpf7J9SksP1wK4jyMHLo66z49"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol": {
        "keccak256": "0x4515543bc4c78561f6bea83ecfdfc3dead55bd59858287d682045b11de1ae575",
        "urls": [
          "bzz-raw://60601f91440125727244fffd2ba84da7caafecaae0fd887c7ccfec678e02b61e",
          "dweb:/ipfs/QmZnKPBtVDiQS9Dp8gZ4sa3ZeTrWVfqF7yuUd6Y8hwm1Rs"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/Math.sol": {
        "keccak256": "0xa00be322d7db5786750ce0ac7e2f5b633ac30a5ed5fa1ced1e74acfc19acecea",
        "urls": [
          "bzz-raw://6c84e822f87cbdc4082533b626667b6928715bb2b1e8e7eb96954cebb9e38c8d",
          "dweb:/ipfs/QmZmy9dgxLTerBAQDuuHqbL6EpgRxddqgv5KmwpXYVbKz1"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol": {
        "keccak256": "0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54",
        "urls": [
          "bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8",
          "dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3",
        "urls": [
          "bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03",
          "dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol",
    "id": 39209,
    "exportedSymbols": {
      "EIP712Upgradeable": [
        39208
      ],
      "IERC5267": [
        39291
      ],
      "Initializable": [
        36741
      ],
      "MessageHashUtils": [
        42039
      ]
    },
    "nodeType": "SourceUnit",
    "src": "113:8579:24",
    "nodes": [
      {
        "id": 38866,
        "nodeType": "PragmaDirective",
        "src": "113:24:24",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 38868,
        "nodeType": "ImportDirective",
        "src": "139:97:24",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol",
        "file": "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 39209,
        "sourceUnit": 42040,
        "symbolAliases": [
          {
            "foreign": {
              "id": 38867,
              "name": "MessageHashUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 42039,
              "src": "147:16:24",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 38870,
        "nodeType": "ImportDirective",
        "src": "237:73:24",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol",
        "file": "@openzeppelin/contracts/interfaces/IERC5267.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 39209,
        "sourceUnit": 39292,
        "symbolAliases": [
          {
            "foreign": {
              "id": 38869,
              "name": "IERC5267",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 39291,
              "src": "245:8:24",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 38872,
        "nodeType": "ImportDirective",
        "src": "311:66:24",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 39209,
        "sourceUnit": 36742,
        "symbolAliases": [
          {
            "foreign": {
              "id": 38871,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 36741,
              "src": "319:13:24",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 39208,
        "nodeType": "ContractDefinition",
        "src": "1959:6732:24",
        "nodes": [
          {
            "id": 38882,
            "nodeType": "VariableDeclaration",
            "src": "2028:140:24",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TYPE_HASH",
            "nameLocation": "2053:9:24",
            "scope": 39208,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 38878,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2028:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                  "id": 38880,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "2083:84:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f",
                    "typeString": "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\""
                  },
                  "value": "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f",
                    "typeString": "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\""
                  }
                ],
                "id": 38879,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "2073:9:24",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 38881,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "2073:95:24",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "private"
          },
          {
            "id": 38894,
            "nodeType": "StructDefinition",
            "src": "2244:238:24",
            "nodes": [],
            "canonicalName": "EIP712Upgradeable.EIP712Storage",
            "documentation": {
              "id": 38883,
              "nodeType": "StructuredDocumentation",
              "src": "2175:64:24",
              "text": "@custom:storage-location erc7201:openzeppelin.storage.EIP712"
            },
            "members": [
              {
                "constant": false,
                "id": 38886,
                "mutability": "mutable",
                "name": "_hashedName",
                "nameLocation": "2332:11:24",
                "nodeType": "VariableDeclaration",
                "scope": 38894,
                "src": "2324:19:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 38885,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2324:7:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 38889,
                "mutability": "mutable",
                "name": "_hashedVersion",
                "nameLocation": "2413:14:24",
                "nodeType": "VariableDeclaration",
                "scope": 38894,
                "src": "2405:22:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 38888,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2405:7:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 38891,
                "mutability": "mutable",
                "name": "_name",
                "nameLocation": "2445:5:24",
                "nodeType": "VariableDeclaration",
                "scope": 38894,
                "src": "2438:12:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 38890,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2438:6:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 38893,
                "mutability": "mutable",
                "name": "_version",
                "nameLocation": "2467:8:24",
                "nodeType": "VariableDeclaration",
                "scope": 38894,
                "src": "2460:15:24",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 38892,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2460:6:24",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "EIP712Storage",
            "nameLocation": "2251:13:24",
            "scope": 39208,
            "visibility": "public"
          },
          {
            "id": 38897,
            "nodeType": "VariableDeclaration",
            "src": "2598:115:24",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EIP712StorageLocation",
            "nameLocation": "2623:21:24",
            "scope": 39208,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 38895,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2598:7:24",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307861313661343664393432363163373531376363386666383966363163306365393335393865336338343938303130313164656536343961366135353764313030",
              "id": 38896,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2647:66:24",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_73010143390315934406010559831118728393600729754696197287367516085911467577600_by_1",
                "typeString": "int_const 7301...(69 digits omitted)...7600"
              },
              "value": "0xa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d100"
            },
            "visibility": "private"
          },
          {
            "id": 38905,
            "nodeType": "FunctionDefinition",
            "src": "2720:156:24",
            "nodes": [],
            "body": {
              "id": 38904,
              "nodeType": "Block",
              "src": "2796:80:24",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2815:55:24",
                    "nodeType": "YulBlock",
                    "src": "2815:55:24",
                    "statements": [
                      {
                        "nativeSrc": "2829:31:24",
                        "nodeType": "YulAssignment",
                        "src": "2829:31:24",
                        "value": {
                          "name": "EIP712StorageLocation",
                          "nativeSrc": "2839:21:24",
                          "nodeType": "YulIdentifier",
                          "src": "2839:21:24"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "2829:6:24",
                            "nodeType": "YulIdentifier",
                            "src": "2829:6:24"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 38901,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2829:6:24",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 38897,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2839:21:24",
                      "valueSize": 1
                    }
                  ],
                  "id": 38903,
                  "nodeType": "InlineAssembly",
                  "src": "2806:64:24"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getEIP712Storage",
            "nameLocation": "2729:17:24",
            "parameters": {
              "id": 38898,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2746:2:24"
            },
            "returnParameters": {
              "id": 38902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38901,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "2793:1:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 38905,
                  "src": "2771:23:24",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                    "typeString": "struct EIP712Upgradeable.EIP712Storage"
                  },
                  "typeName": {
                    "id": 38900,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 38899,
                      "name": "EIP712Storage",
                      "nameLocations": [
                        "2771:13:24"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 38894,
                      "src": "2771:13:24"
                    },
                    "referencedDeclaration": 38894,
                    "src": "2771:13:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2770:25:24"
            },
            "scope": 39208,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 38921,
            "nodeType": "FunctionDefinition",
            "src": "3446:147:24",
            "nodes": [],
            "body": {
              "id": 38920,
              "nodeType": "Block",
              "src": "3538:55:24",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 38916,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38908,
                        "src": "3572:4:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 38917,
                        "name": "version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38910,
                        "src": "3578:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 38915,
                      "name": "__EIP712_init_unchained",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38961,
                      "src": "3548:23:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 38918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3548:38:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38919,
                  "nodeType": "ExpressionStatement",
                  "src": "3548:38:24"
                }
              ]
            },
            "documentation": {
              "id": 38906,
              "nodeType": "StructuredDocumentation",
              "src": "2882:559:24",
              "text": " @dev Initializes the domain separator and parameter caches.\n The meaning of `name` and `version` is specified in\n https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator[EIP-712]:\n - `name`: the user readable name of the signing domain, i.e. the name of the DApp or the protocol.\n - `version`: the current major version of the signing domain.\n NOTE: These parameters cannot be changed except through a xref:learn::upgrading-smart-contracts.adoc[smart\n contract upgrade]."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 38913,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 38912,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "3521:16:24"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "3521:16:24"
                },
                "nodeType": "ModifierInvocation",
                "src": "3521:16:24"
              }
            ],
            "name": "__EIP712_init",
            "nameLocation": "3455:13:24",
            "parameters": {
              "id": 38911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38908,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3483:4:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 38921,
                  "src": "3469:18:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 38907,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3469:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38910,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "3503:7:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 38921,
                  "src": "3489:21:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 38909,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3489:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3468:43:24"
            },
            "returnParameters": {
              "id": 38914,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3538:0:24"
            },
            "scope": 39208,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38961,
            "nodeType": "FunctionDefinition",
            "src": "3599:330:24",
            "nodes": [],
            "body": {
              "id": 38960,
              "nodeType": "Block",
              "src": "3701:228:24",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    38932
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 38932,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3733:1:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 38960,
                      "src": "3711:23:24",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 38931,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 38930,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "3711:13:24"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 38894,
                          "src": "3711:13:24"
                        },
                        "referencedDeclaration": 38894,
                        "src": "3711:13:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 38935,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 38933,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38905,
                      "src": "3737:17:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$38894_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 38934,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3737:19:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3711:45:24"
                },
                {
                  "expression": {
                    "id": 38940,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 38936,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38932,
                        "src": "3766:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 38938,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3768:5:24",
                      "memberName": "_name",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 38891,
                      "src": "3766:7:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 38939,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38923,
                      "src": "3776:4:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3766:14:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 38941,
                  "nodeType": "ExpressionStatement",
                  "src": "3766:14:24"
                },
                {
                  "expression": {
                    "id": 38946,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 38942,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38932,
                        "src": "3790:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 38944,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3792:8:24",
                      "memberName": "_version",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 38893,
                      "src": "3790:10:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 38945,
                      "name": "version",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38925,
                      "src": "3803:7:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3790:20:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 38947,
                  "nodeType": "ExpressionStatement",
                  "src": "3790:20:24"
                },
                {
                  "expression": {
                    "id": 38952,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 38948,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38932,
                        "src": "3875:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 38950,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3877:11:24",
                      "memberName": "_hashedName",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 38886,
                      "src": "3875:13:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 38951,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3891:1:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3875:17:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 38953,
                  "nodeType": "ExpressionStatement",
                  "src": "3875:17:24"
                },
                {
                  "expression": {
                    "id": 38958,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 38954,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38932,
                        "src": "3902:1:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 38956,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3904:14:24",
                      "memberName": "_hashedVersion",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 38889,
                      "src": "3902:16:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 38957,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3921:1:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3902:20:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 38959,
                  "nodeType": "ExpressionStatement",
                  "src": "3902:20:24"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 38928,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 38927,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "3684:16:24"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 36650,
                  "src": "3684:16:24"
                },
                "nodeType": "ModifierInvocation",
                "src": "3684:16:24"
              }
            ],
            "name": "__EIP712_init_unchained",
            "nameLocation": "3608:23:24",
            "parameters": {
              "id": 38926,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38923,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3646:4:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 38961,
                  "src": "3632:18:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 38922,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3632:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38925,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "3666:7:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 38961,
                  "src": "3652:21:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 38924,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3652:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3631:43:24"
            },
            "returnParameters": {
              "id": 38929,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3701:0:24"
            },
            "scope": 39208,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38971,
            "nodeType": "FunctionDefinition",
            "src": "4015:109:24",
            "nodes": [],
            "body": {
              "id": 38970,
              "nodeType": "Block",
              "src": "4077:47:24",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 38967,
                      "name": "_buildDomainSeparator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38994,
                      "src": "4094:21:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                        "typeString": "function () view returns (bytes32)"
                      }
                    },
                    "id": 38968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4094:23:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 38966,
                  "id": 38969,
                  "nodeType": "Return",
                  "src": "4087:30:24"
                }
              ]
            },
            "documentation": {
              "id": 38962,
              "nodeType": "StructuredDocumentation",
              "src": "3935:75:24",
              "text": " @dev Returns the domain separator for the current chain."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_domainSeparatorV4",
            "nameLocation": "4024:18:24",
            "parameters": {
              "id": 38963,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4042:2:24"
            },
            "returnParameters": {
              "id": 38966,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38965,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38971,
                  "src": "4068:7:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 38964,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4068:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4067:9:24"
            },
            "scope": 39208,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 38994,
            "nodeType": "FunctionDefinition",
            "src": "4130:191:24",
            "nodes": [],
            "body": {
              "id": 38993,
              "nodeType": "Block",
              "src": "4194:127:24",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 38979,
                            "name": "TYPE_HASH",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 38882,
                            "src": "4232:9:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 38980,
                              "name": "_EIP712NameHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 39155,
                              "src": "4243:15:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                "typeString": "function () view returns (bytes32)"
                              }
                            },
                            "id": 38981,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4243:17:24",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 38982,
                              "name": "_EIP712VersionHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 39207,
                              "src": "4262:18:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                "typeString": "function () view returns (bytes32)"
                              }
                            },
                            "id": 38983,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4262:20:24",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "expression": {
                              "id": 38984,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "4284:5:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 38985,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4290:7:24",
                            "memberName": "chainid",
                            "nodeType": "MemberAccess",
                            "src": "4284:13:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 38988,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4307:4:24",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_EIP712Upgradeable_$39208",
                                  "typeString": "contract EIP712Upgradeable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_EIP712Upgradeable_$39208",
                                  "typeString": "contract EIP712Upgradeable"
                                }
                              ],
                              "id": 38987,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4299:7:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 38986,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4299:7:24",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 38989,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4299:13:24",
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
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 38977,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "4221:3:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 38978,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4225:6:24",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "4221:10:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 38990,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4221:92:24",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 38976,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "4211:9:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 38991,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4211:103:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 38975,
                  "id": 38992,
                  "nodeType": "Return",
                  "src": "4204:110:24"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_buildDomainSeparator",
            "nameLocation": "4139:21:24",
            "parameters": {
              "id": 38972,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4160:2:24"
            },
            "returnParameters": {
              "id": 38975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38974,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 38994,
                  "src": "4185:7:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 38973,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4185:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4184:9:24"
            },
            "scope": 39208,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 39010,
            "nodeType": "FunctionDefinition",
            "src": "4946:176:24",
            "nodes": [],
            "body": {
              "id": 39009,
              "nodeType": "Block",
              "src": "5032:90:24",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 39004,
                          "name": "_domainSeparatorV4",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38971,
                          "src": "5082:18:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                            "typeString": "function () view returns (bytes32)"
                          }
                        },
                        "id": 39005,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5082:20:24",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 39006,
                        "name": "structHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38997,
                        "src": "5104:10:24",
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
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "id": 39002,
                        "name": "MessageHashUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42039,
                        "src": "5049:16:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_MessageHashUtils_$42039_$",
                          "typeString": "type(library MessageHashUtils)"
                        }
                      },
                      "id": 39003,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5066:15:24",
                      "memberName": "toTypedDataHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 42038,
                      "src": "5049:32:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes32) pure returns (bytes32)"
                      }
                    },
                    "id": 39007,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5049:66:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 39001,
                  "id": 39008,
                  "nodeType": "Return",
                  "src": "5042:73:24"
                }
              ]
            },
            "documentation": {
              "id": 38995,
              "nodeType": "StructuredDocumentation",
              "src": "4327:614:24",
              "text": " @dev Given an already https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct[hashed struct], this\n function returns the hash of the fully encoded EIP712 message for this domain.\n This hash can be used together with {ECDSA-recover} to obtain the signer of a message. For example:\n ```solidity\n bytes32 digest = _hashTypedDataV4(keccak256(abi.encode(\n     keccak256(\"Mail(address to,string contents)\"),\n     mailTo,\n     keccak256(bytes(mailContents))\n )));\n address signer = ECDSA.recover(digest, signature);\n ```"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_hashTypedDataV4",
            "nameLocation": "4955:16:24",
            "parameters": {
              "id": 38998,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 38997,
                  "mutability": "mutable",
                  "name": "structHash",
                  "nameLocation": "4980:10:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 39010,
                  "src": "4972:18:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 38996,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4972:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4971:20:24"
            },
            "returnParameters": {
              "id": 39001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39000,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 39010,
                  "src": "5023:7:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 38999,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5023:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5022:9:24"
            },
            "scope": 39208,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 39071,
            "nodeType": "FunctionDefinition",
            "src": "5173:903:24",
            "nodes": [],
            "body": {
              "id": 39070,
              "nodeType": "Block",
              "src": "5501:575:24",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    39031
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 39031,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "5533:1:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 39070,
                      "src": "5511:23:24",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 39030,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 39029,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "5511:13:24"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 38894,
                          "src": "5511:13:24"
                        },
                        "referencedDeclaration": 38894,
                        "src": "5511:13:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 39034,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 39032,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38905,
                      "src": "5537:17:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$38894_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 39033,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5537:19:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5511:45:24"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 39044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 39039,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 39036,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 39031,
                              "src": "5777:1:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                                "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                              }
                            },
                            "id": 39037,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5779:11:24",
                            "memberName": "_hashedName",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 38886,
                            "src": "5777:13:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 39038,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5794:1:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "5777:18:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 39043,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 39040,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 39031,
                              "src": "5799:1:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                                "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                              }
                            },
                            "id": 39041,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5801:14:24",
                            "memberName": "_hashedVersion",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 38889,
                            "src": "5799:16:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 39042,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5819:1:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "5799:21:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "5777:43:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4549503731323a20556e696e697469616c697a6564",
                        "id": 39045,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5822:23:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2e5045ff73280aa8e8acd8c82710f23812497f87f7f576e2220a2ddd0d45eade",
                          "typeString": "literal_string \"EIP712: Uninitialized\""
                        },
                        "value": "EIP712: Uninitialized"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2e5045ff73280aa8e8acd8c82710f23812497f87f7f576e2220a2ddd0d45eade",
                          "typeString": "literal_string \"EIP712: Uninitialized\""
                        }
                      ],
                      "id": 39035,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5769:7:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 39046,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5769:77:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 39047,
                  "nodeType": "ExpressionStatement",
                  "src": "5769:77:24"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "hexValue": "0f",
                        "id": 39048,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "hexString",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5878:7:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3d725c5ee53025f027da36bea8d3af3b6a3e9d2d1542d47c162631de48e66c1c",
                          "typeString": "literal_string hex\"0f\""
                        },
                        "value": "\u000f"
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 39049,
                          "name": "_EIP712Name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39087,
                          "src": "5908:11:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                            "typeString": "function () view returns (string memory)"
                          }
                        },
                        "id": 39050,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5908:13:24",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 39051,
                          "name": "_EIP712Version",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 39103,
                          "src": "5935:14:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                            "typeString": "function () view returns (string memory)"
                          }
                        },
                        "id": 39052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5935:16:24",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "expression": {
                          "id": 39053,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "5965:5:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 39054,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5971:7:24",
                        "memberName": "chainid",
                        "nodeType": "MemberAccess",
                        "src": "5965:13:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 39057,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "6000:4:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_EIP712Upgradeable_$39208",
                              "typeString": "contract EIP712Upgradeable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_EIP712Upgradeable_$39208",
                              "typeString": "contract EIP712Upgradeable"
                            }
                          ],
                          "id": 39056,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5992:7:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 39055,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5992:7:24",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 39058,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5992:13:24",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 39061,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6027:1:24",
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
                          "id": 39060,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6019:7:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 39059,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "6019:7:24",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 39062,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6019:10:24",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 39066,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6057:1:24",
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
                          "id": 39065,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6043:13:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (uint256[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 39063,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6047:7:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 39064,
                            "nodeType": "ArrayTypeName",
                            "src": "6047:9:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                              "typeString": "uint256[]"
                            }
                          }
                        },
                        "id": 39067,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6043:16:24",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      }
                    ],
                    "id": 39068,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5864:205:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_stringliteral_3d725c5ee53025f027da36bea8d3af3b6a3e9d2d1542d47c162631de48e66c1c_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$_t_address_$_t_bytes32_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(literal_string hex\"0f\",string memory,string memory,uint256,address,bytes32,uint256[] memory)"
                    }
                  },
                  "functionReturnParameters": 39028,
                  "id": 39069,
                  "nodeType": "Return",
                  "src": "5857:212:24"
                }
              ]
            },
            "baseFunctions": [
              39290
            ],
            "documentation": {
              "id": 39011,
              "nodeType": "StructuredDocumentation",
              "src": "5128:40:24",
              "text": " @dev See {IERC-5267}."
            },
            "functionSelector": "84b0196e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "eip712Domain",
            "nameLocation": "5182:12:24",
            "parameters": {
              "id": 39012,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5194:2:24"
            },
            "returnParameters": {
              "id": 39028,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39014,
                  "mutability": "mutable",
                  "name": "fields",
                  "nameLocation": "5278:6:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 39071,
                  "src": "5271:13:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes1",
                    "typeString": "bytes1"
                  },
                  "typeName": {
                    "id": 39013,
                    "name": "bytes1",
                    "nodeType": "ElementaryTypeName",
                    "src": "5271:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39016,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5312:4:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 39071,
                  "src": "5298:18:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 39015,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5298:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39018,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "5344:7:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 39071,
                  "src": "5330:21:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 39017,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5330:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39020,
                  "mutability": "mutable",
                  "name": "chainId",
                  "nameLocation": "5373:7:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 39071,
                  "src": "5365:15:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39019,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5365:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39022,
                  "mutability": "mutable",
                  "name": "verifyingContract",
                  "nameLocation": "5402:17:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 39071,
                  "src": "5394:25:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39021,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5394:7:24",
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
                  "id": 39024,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "5441:4:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 39071,
                  "src": "5433:12:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 39023,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5433:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39027,
                  "mutability": "mutable",
                  "name": "extensions",
                  "nameLocation": "5476:10:24",
                  "nodeType": "VariableDeclaration",
                  "scope": 39071,
                  "src": "5459:27:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 39025,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5459:7:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 39026,
                    "nodeType": "ArrayTypeName",
                    "src": "5459:9:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5257:239:24"
            },
            "scope": 39208,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 39087,
            "nodeType": "FunctionDefinition",
            "src": "6300:155:24",
            "nodes": [],
            "body": {
              "id": 39086,
              "nodeType": "Block",
              "src": "6369:86:24",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    39079
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 39079,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "6401:1:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 39086,
                      "src": "6379:23:24",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 39078,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 39077,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "6379:13:24"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 38894,
                          "src": "6379:13:24"
                        },
                        "referencedDeclaration": 38894,
                        "src": "6379:13:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 39082,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 39080,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38905,
                      "src": "6405:17:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$38894_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 39081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6405:19:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6379:45:24"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 39083,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39079,
                      "src": "6441:1:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                      }
                    },
                    "id": 39084,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "6443:5:24",
                    "memberName": "_name",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 38891,
                    "src": "6441:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 39076,
                  "id": 39085,
                  "nodeType": "Return",
                  "src": "6434:14:24"
                }
              ]
            },
            "documentation": {
              "id": 39072,
              "nodeType": "StructuredDocumentation",
              "src": "6082:213:24",
              "text": " @dev The name parameter for the EIP712 domain.\n NOTE: This function reads from storage by default, but can be redefined to return a constant value if gas costs\n are a concern."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712Name",
            "nameLocation": "6309:11:24",
            "parameters": {
              "id": 39073,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6320:2:24"
            },
            "returnParameters": {
              "id": 39076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39075,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 39087,
                  "src": "6354:13:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 39074,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6354:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6353:15:24"
            },
            "scope": 39208,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 39103,
            "nodeType": "FunctionDefinition",
            "src": "6682:161:24",
            "nodes": [],
            "body": {
              "id": 39102,
              "nodeType": "Block",
              "src": "6754:89:24",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    39095
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 39095,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "6786:1:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 39102,
                      "src": "6764:23:24",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 39094,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 39093,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "6764:13:24"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 38894,
                          "src": "6764:13:24"
                        },
                        "referencedDeclaration": 38894,
                        "src": "6764:13:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 39098,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 39096,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38905,
                      "src": "6790:17:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$38894_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 39097,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6790:19:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6764:45:24"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 39099,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39095,
                      "src": "6826:1:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                      }
                    },
                    "id": 39100,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "6828:8:24",
                    "memberName": "_version",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 38893,
                    "src": "6826:10:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 39092,
                  "id": 39101,
                  "nodeType": "Return",
                  "src": "6819:17:24"
                }
              ]
            },
            "documentation": {
              "id": 39088,
              "nodeType": "StructuredDocumentation",
              "src": "6461:216:24",
              "text": " @dev The version parameter for the EIP712 domain.\n NOTE: This function reads from storage by default, but can be redefined to return a constant value if gas costs\n are a concern."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712Version",
            "nameLocation": "6691:14:24",
            "parameters": {
              "id": 39089,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6705:2:24"
            },
            "returnParameters": {
              "id": 39092,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39091,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 39103,
                  "src": "6739:13:24",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 39090,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6739:6:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6738:15:24"
            },
            "scope": 39208,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 39155,
            "nodeType": "FunctionDefinition",
            "src": "7058:687:24",
            "nodes": [],
            "body": {
              "id": 39154,
              "nodeType": "Block",
              "src": "7117:628:24",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    39111
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 39111,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "7149:1:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 39154,
                      "src": "7127:23:24",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 39110,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 39109,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "7127:13:24"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 38894,
                          "src": "7127:13:24"
                        },
                        "referencedDeclaration": 38894,
                        "src": "7127:13:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 39114,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 39112,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38905,
                      "src": "7153:17:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$38894_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 39113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7153:19:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7127:45:24"
                },
                {
                  "assignments": [
                    39116
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 39116,
                      "mutability": "mutable",
                      "name": "name",
                      "nameLocation": "7196:4:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 39154,
                      "src": "7182:18:24",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 39115,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "7182:6:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 39119,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 39117,
                      "name": "_EIP712Name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39087,
                      "src": "7203:11:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view returns (string memory)"
                      }
                    },
                    "id": 39118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7203:13:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7182:34:24"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 39126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 39122,
                            "name": "name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39116,
                            "src": "7236:4:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 39121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7230:5:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 39120,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "7230:5:24",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 39123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7230:11:24",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 39124,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7242:6:24",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "7230:18:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 39125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7251:1:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7230:22:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 39152,
                    "nodeType": "Block",
                    "src": "7314:425:24",
                    "statements": [
                      {
                        "assignments": [
                          39136
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 39136,
                            "mutability": "mutable",
                            "name": "hashedName",
                            "nameLocation": "7559:10:24",
                            "nodeType": "VariableDeclaration",
                            "scope": 39152,
                            "src": "7551:18:24",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 39135,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "7551:7:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 39139,
                        "initialValue": {
                          "expression": {
                            "id": 39137,
                            "name": "$",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39111,
                            "src": "7572:1:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                              "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                            }
                          },
                          "id": 39138,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7574:11:24",
                          "memberName": "_hashedName",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 38886,
                          "src": "7572:13:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7551:34:24"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 39142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 39140,
                            "name": "hashedName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39136,
                            "src": "7603:10:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 39141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7617:1:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "7603:15:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 39150,
                          "nodeType": "Block",
                          "src": "7676:53:24",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "",
                                    "id": 39147,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "7711:2:24",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                      "typeString": "literal_string \"\""
                                    },
                                    "value": ""
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                      "typeString": "literal_string \"\""
                                    }
                                  ],
                                  "id": 39146,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -8,
                                  "src": "7701:9:24",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                  }
                                },
                                "id": 39148,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7701:13:24",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 39108,
                              "id": 39149,
                              "nodeType": "Return",
                              "src": "7694:20:24"
                            }
                          ]
                        },
                        "id": 39151,
                        "nodeType": "IfStatement",
                        "src": "7599:130:24",
                        "trueBody": {
                          "id": 39145,
                          "nodeType": "Block",
                          "src": "7620:50:24",
                          "statements": [
                            {
                              "expression": {
                                "id": 39143,
                                "name": "hashedName",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 39136,
                                "src": "7645:10:24",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 39108,
                              "id": 39144,
                              "nodeType": "Return",
                              "src": "7638:17:24"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 39153,
                  "nodeType": "IfStatement",
                  "src": "7226:513:24",
                  "trueBody": {
                    "id": 39134,
                    "nodeType": "Block",
                    "src": "7254:54:24",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 39130,
                                  "name": "name",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 39116,
                                  "src": "7291:4:24",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 39129,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7285:5:24",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 39128,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "7285:5:24",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 39131,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7285:11:24",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 39127,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "7275:9:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 39132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7275:22:24",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "functionReturnParameters": 39108,
                        "id": 39133,
                        "nodeType": "Return",
                        "src": "7268:29:24"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 39104,
              "nodeType": "StructuredDocumentation",
              "src": "6849:204:24",
              "text": " @dev The hash of the name parameter for the EIP712 domain.\n NOTE: In previous versions this function was virtual. In this version you should override `_EIP712Name` instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712NameHash",
            "nameLocation": "7067:15:24",
            "parameters": {
              "id": 39105,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7082:2:24"
            },
            "returnParameters": {
              "id": 39108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39107,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 39155,
                  "src": "7108:7:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 39106,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7108:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7107:9:24"
            },
            "scope": 39208,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 39207,
            "nodeType": "FunctionDefinition",
            "src": "7966:723:24",
            "nodes": [],
            "body": {
              "id": 39206,
              "nodeType": "Block",
              "src": "8028:661:24",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    39163
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 39163,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "8060:1:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 39206,
                      "src": "8038:23:24",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 39162,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 39161,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "8038:13:24"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 38894,
                          "src": "8038:13:24"
                        },
                        "referencedDeclaration": 38894,
                        "src": "8038:13:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 39166,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 39164,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 38905,
                      "src": "8064:17:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$38894_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 39165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8064:19:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8038:45:24"
                },
                {
                  "assignments": [
                    39168
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 39168,
                      "mutability": "mutable",
                      "name": "version",
                      "nameLocation": "8107:7:24",
                      "nodeType": "VariableDeclaration",
                      "scope": 39206,
                      "src": "8093:21:24",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 39167,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "8093:6:24",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 39171,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 39169,
                      "name": "_EIP712Version",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 39103,
                      "src": "8117:14:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view returns (string memory)"
                      }
                    },
                    "id": 39170,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8117:16:24",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8093:40:24"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 39178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 39174,
                            "name": "version",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39168,
                            "src": "8153:7:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 39173,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8147:5:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 39172,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "8147:5:24",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 39175,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8147:14:24",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 39176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8162:6:24",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "8147:21:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 39177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8171:1:24",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8147:25:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 39204,
                    "nodeType": "Block",
                    "src": "8237:446:24",
                    "statements": [
                      {
                        "assignments": [
                          39188
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 39188,
                            "mutability": "mutable",
                            "name": "hashedVersion",
                            "nameLocation": "8491:13:24",
                            "nodeType": "VariableDeclaration",
                            "scope": 39204,
                            "src": "8483:21:24",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 39187,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "8483:7:24",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 39191,
                        "initialValue": {
                          "expression": {
                            "id": 39189,
                            "name": "$",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39163,
                            "src": "8507:1:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_EIP712Storage_$38894_storage_ptr",
                              "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                            }
                          },
                          "id": 39190,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8509:14:24",
                          "memberName": "_hashedVersion",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 38889,
                          "src": "8507:16:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "8483:40:24"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 39194,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 39192,
                            "name": "hashedVersion",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 39188,
                            "src": "8541:13:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 39193,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8558:1:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "8541:18:24",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 39202,
                          "nodeType": "Block",
                          "src": "8620:53:24",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "",
                                    "id": 39199,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "8655:2:24",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                      "typeString": "literal_string \"\""
                                    },
                                    "value": ""
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                      "typeString": "literal_string \"\""
                                    }
                                  ],
                                  "id": 39198,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -8,
                                  "src": "8645:9:24",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                  }
                                },
                                "id": 39200,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8645:13:24",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 39160,
                              "id": 39201,
                              "nodeType": "Return",
                              "src": "8638:20:24"
                            }
                          ]
                        },
                        "id": 39203,
                        "nodeType": "IfStatement",
                        "src": "8537:136:24",
                        "trueBody": {
                          "id": 39197,
                          "nodeType": "Block",
                          "src": "8561:53:24",
                          "statements": [
                            {
                              "expression": {
                                "id": 39195,
                                "name": "hashedVersion",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 39188,
                                "src": "8586:13:24",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 39160,
                              "id": 39196,
                              "nodeType": "Return",
                              "src": "8579:20:24"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 39205,
                  "nodeType": "IfStatement",
                  "src": "8143:540:24",
                  "trueBody": {
                    "id": 39186,
                    "nodeType": "Block",
                    "src": "8174:57:24",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 39182,
                                  "name": "version",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 39168,
                                  "src": "8211:7:24",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 39181,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "8205:5:24",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 39180,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "8205:5:24",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 39183,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8205:14:24",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 39179,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "8195:9:24",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 39184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8195:25:24",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "functionReturnParameters": 39160,
                        "id": 39185,
                        "nodeType": "Return",
                        "src": "8188:32:24"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 39156,
              "nodeType": "StructuredDocumentation",
              "src": "7751:210:24",
              "text": " @dev The hash of the version parameter for the EIP712 domain.\n NOTE: In previous versions this function was virtual. In this version you should override `_EIP712Version` instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712VersionHash",
            "nameLocation": "7975:18:24",
            "parameters": {
              "id": 39157,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7993:2:24"
            },
            "returnParameters": {
              "id": 39160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39159,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 39207,
                  "src": "8019:7:24",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 39158,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8019:7:24",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8018:9:24"
            },
            "scope": 39208,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 38874,
              "name": "Initializable",
              "nameLocations": [
                "1998:13:24"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 36741,
              "src": "1998:13:24"
            },
            "id": 38875,
            "nodeType": "InheritanceSpecifier",
            "src": "1998:13:24"
          },
          {
            "baseName": {
              "id": 38876,
              "name": "IERC5267",
              "nameLocations": [
                "2013:8:24"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 39291,
              "src": "2013:8:24"
            },
            "id": 38877,
            "nodeType": "InheritanceSpecifier",
            "src": "2013:8:24"
          }
        ],
        "canonicalName": "EIP712Upgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 38873,
          "nodeType": "StructuredDocumentation",
          "src": "379:1579:24",
          "text": " @dev https://eips.ethereum.org/EIPS/eip-712[EIP-712] is a standard for hashing and signing of typed structured data.\n The encoding scheme specified in the EIP requires a domain separator and a hash of the typed structured data, whose\n encoding is very generic and therefore its implementation in Solidity is not feasible, thus this contract\n does not implement the encoding itself. Protocols need to implement the type-specific encoding they need in order to\n produce the hash of their typed data using a combination of `abi.encode` and `keccak256`.\n This contract implements the EIP-712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding\n scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA\n ({_hashTypedDataV4}).\n The implementation of the domain separator was designed to be as efficient as possible while still properly updating\n the chain id to protect against replay attacks on an eventual fork of the chain.\n NOTE: This contract implements the version of the encoding known as \"v4\", as implemented by the JSON RPC method\n https://docs.metamask.io/guide/signing-data.html[`eth_signTypedDataV4` in MetaMask].\n NOTE: In the upgradeable version of this contract, the cached values will correspond to the address, and the domain\n separator of the implementation contract. This will cause the {_domainSeparatorV4} function to always rebuild the\n separator from the immutable values, which is cheaper than accessing a cached version in cold storage."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          39208,
          39291,
          36741
        ],
        "name": "EIP712Upgradeable",
        "nameLocation": "1977:17:24",
        "scope": 39209,
        "usedErrors": [
          36504,
          36507
        ],
        "usedEvents": [
          36512,
          39271
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 24
} as const;