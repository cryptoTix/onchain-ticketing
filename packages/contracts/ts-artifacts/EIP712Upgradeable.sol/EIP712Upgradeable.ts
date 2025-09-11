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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"EIP712DomainChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"eip712Domain\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"fields\",\"type\":\"bytes1\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"version\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"verifyingContract\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256[]\",\"name\":\"extensions\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"https://eips.ethereum.org/EIPS/eip-712[EIP-712] is a standard for hashing and signing of typed structured data. The encoding scheme specified in the EIP requires a domain separator and a hash of the typed structured data, whose encoding is very generic and therefore its implementation in Solidity is not feasible, thus this contract does not implement the encoding itself. Protocols need to implement the type-specific encoding they need in order to produce the hash of their typed data using a combination of `abi.encode` and `keccak256`. This contract implements the EIP-712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA ({_hashTypedDataV4}). The implementation of the domain separator was designed to be as efficient as possible while still properly updating the chain id to protect against replay attacks on an eventual fork of the chain. NOTE: This contract implements the version of the encoding known as \\\"v4\\\", as implemented by the JSON RPC method https://docs.metamask.io/guide/signing-data.html[`eth_signTypedDataV4` in MetaMask]. NOTE: In the upgradeable version of this contract, the cached values will correspond to the address, and the domain separator of the implementation contract. This will cause the {_domainSeparatorV4} function to always rebuild the separator from the immutable values, which is cheaper than accessing a cached version in cold storage.\",\"errors\":{\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}]},\"events\":{\"EIP712DomainChanged()\":{\"details\":\"MAY be emitted to signal that the domain could have changed.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"}},\"kind\":\"dev\",\"methods\":{\"eip712Domain()\":{\"details\":\"See {IERC-5267}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol\":\"EIP712Upgradeable\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol\":{\"keccak256\":\"0x7a618cd9a1eea21201ec2ed8484080ca6225215e8883723bef34b9dcf22aa3b5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a73451277e35206f1f8b9f20b2cd41732081bd23523f5a2c64e1e67694c33\",\"dweb:/ipfs/QmdPVK7KACRpoavNUoixGsi8jBWeZUJfNYCzZbHGSGz5yu\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol\":{\"keccak256\":\"0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a\",\"dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP\"]},\"node_modules/@openzeppelin/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x725209b582291bb83058e3078624b53d15a133f7401c30295e7f3704181d2aed\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0564ddb19c6d870e27b789d8f985283d815267ad7224883c2d5243c8bacc7dc0\",\"dweb:/ipfs/QmeC953H4sj88ZRFdJNFdmpf7J9SksP1wK4jyMHLo66z49\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol\":{\"keccak256\":\"0x4515543bc4c78561f6bea83ecfdfc3dead55bd59858287d682045b11de1ae575\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://60601f91440125727244fffd2ba84da7caafecaae0fd887c7ccfec678e02b61e\",\"dweb:/ipfs/QmZnKPBtVDiQS9Dp8gZ4sa3ZeTrWVfqF7yuUd6Y8hwm1Rs\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa00be322d7db5786750ce0ac7e2f5b633ac30a5ed5fa1ced1e74acfc19acecea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c84e822f87cbdc4082533b626667b6928715bb2b1e8e7eb96954cebb9e38c8d\",\"dweb:/ipfs/QmZmy9dgxLTerBAQDuuHqbL6EpgRxddqgv5KmwpXYVbKz1\"]},\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03\",\"dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ\"]}},\"version\":1}",
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
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
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
    "id": 43186,
    "exportedSymbols": {
      "EIP712Upgradeable": [
        43185
      ],
      "IERC5267": [
        43268
      ],
      "Initializable": [
        40718
      ],
      "MessageHashUtils": [
        46587
      ]
    },
    "nodeType": "SourceUnit",
    "src": "113:8579:29",
    "nodes": [
      {
        "id": 42843,
        "nodeType": "PragmaDirective",
        "src": "113:24:29",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 42845,
        "nodeType": "ImportDirective",
        "src": "139:97:29",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol",
        "file": "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 43186,
        "sourceUnit": 46588,
        "symbolAliases": [
          {
            "foreign": {
              "id": 42844,
              "name": "MessageHashUtils",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46587,
              "src": "147:16:29",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 42847,
        "nodeType": "ImportDirective",
        "src": "237:73:29",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol",
        "file": "@openzeppelin/contracts/interfaces/IERC5267.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 43186,
        "sourceUnit": 43269,
        "symbolAliases": [
          {
            "foreign": {
              "id": 42846,
              "name": "IERC5267",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43268,
              "src": "245:8:29",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 42849,
        "nodeType": "ImportDirective",
        "src": "311:66:29",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol",
        "file": "../../proxy/utils/Initializable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 43186,
        "sourceUnit": 40719,
        "symbolAliases": [
          {
            "foreign": {
              "id": 42848,
              "name": "Initializable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 40718,
              "src": "319:13:29",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 43185,
        "nodeType": "ContractDefinition",
        "src": "1959:6732:29",
        "nodes": [
          {
            "id": 42859,
            "nodeType": "VariableDeclaration",
            "src": "2028:140:29",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "TYPE_HASH",
            "nameLocation": "2053:9:29",
            "scope": 43185,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 42855,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2028:7:29",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                  "id": 42857,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "2083:84:29",
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
                "id": 42856,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "2073:9:29",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 42858,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "2073:95:29",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "private"
          },
          {
            "id": 42871,
            "nodeType": "StructDefinition",
            "src": "2244:238:29",
            "nodes": [],
            "canonicalName": "EIP712Upgradeable.EIP712Storage",
            "documentation": {
              "id": 42860,
              "nodeType": "StructuredDocumentation",
              "src": "2175:64:29",
              "text": "@custom:storage-location erc7201:openzeppelin.storage.EIP712"
            },
            "members": [
              {
                "constant": false,
                "id": 42863,
                "mutability": "mutable",
                "name": "_hashedName",
                "nameLocation": "2332:11:29",
                "nodeType": "VariableDeclaration",
                "scope": 42871,
                "src": "2324:19:29",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 42862,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2324:7:29",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 42866,
                "mutability": "mutable",
                "name": "_hashedVersion",
                "nameLocation": "2413:14:29",
                "nodeType": "VariableDeclaration",
                "scope": 42871,
                "src": "2405:22:29",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                },
                "typeName": {
                  "id": 42865,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "2405:7:29",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 42868,
                "mutability": "mutable",
                "name": "_name",
                "nameLocation": "2445:5:29",
                "nodeType": "VariableDeclaration",
                "scope": 42871,
                "src": "2438:12:29",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 42867,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2438:6:29",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 42870,
                "mutability": "mutable",
                "name": "_version",
                "nameLocation": "2467:8:29",
                "nodeType": "VariableDeclaration",
                "scope": 42871,
                "src": "2460:15:29",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 42869,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "2460:6:29",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "EIP712Storage",
            "nameLocation": "2251:13:29",
            "scope": 43185,
            "visibility": "public"
          },
          {
            "id": 42874,
            "nodeType": "VariableDeclaration",
            "src": "2598:115:29",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "EIP712StorageLocation",
            "nameLocation": "2623:21:29",
            "scope": 43185,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 42872,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "2598:7:29",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307861313661343664393432363163373531376363386666383966363163306365393335393865336338343938303130313164656536343961366135353764313030",
              "id": 42873,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "2647:66:29",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_73010143390315934406010559831118728393600729754696197287367516085911467577600_by_1",
                "typeString": "int_const 7301...(69 digits omitted)...7600"
              },
              "value": "0xa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d100"
            },
            "visibility": "private"
          },
          {
            "id": 42882,
            "nodeType": "FunctionDefinition",
            "src": "2720:156:29",
            "nodes": [],
            "body": {
              "id": 42881,
              "nodeType": "Block",
              "src": "2796:80:29",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "2815:55:29",
                    "nodeType": "YulBlock",
                    "src": "2815:55:29",
                    "statements": [
                      {
                        "nativeSrc": "2829:31:29",
                        "nodeType": "YulAssignment",
                        "src": "2829:31:29",
                        "value": {
                          "name": "EIP712StorageLocation",
                          "nativeSrc": "2839:21:29",
                          "nodeType": "YulIdentifier",
                          "src": "2839:21:29"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "2829:6:29",
                            "nodeType": "YulIdentifier",
                            "src": "2829:6:29"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 42878,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "2829:6:29",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 42874,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "2839:21:29",
                      "valueSize": 1
                    }
                  ],
                  "id": 42880,
                  "nodeType": "InlineAssembly",
                  "src": "2806:64:29"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getEIP712Storage",
            "nameLocation": "2729:17:29",
            "parameters": {
              "id": 42875,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2746:2:29"
            },
            "returnParameters": {
              "id": 42879,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42878,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "2793:1:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 42882,
                  "src": "2771:23:29",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                    "typeString": "struct EIP712Upgradeable.EIP712Storage"
                  },
                  "typeName": {
                    "id": 42877,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 42876,
                      "name": "EIP712Storage",
                      "nameLocations": [
                        "2771:13:29"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 42871,
                      "src": "2771:13:29"
                    },
                    "referencedDeclaration": 42871,
                    "src": "2771:13:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2770:25:29"
            },
            "scope": 43185,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 42898,
            "nodeType": "FunctionDefinition",
            "src": "3446:147:29",
            "nodes": [],
            "body": {
              "id": 42897,
              "nodeType": "Block",
              "src": "3538:55:29",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 42893,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42885,
                        "src": "3572:4:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 42894,
                        "name": "version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42887,
                        "src": "3578:7:29",
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
                      "id": 42892,
                      "name": "__EIP712_init_unchained",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42938,
                      "src": "3548:23:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 42895,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3548:38:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42896,
                  "nodeType": "ExpressionStatement",
                  "src": "3548:38:29"
                }
              ]
            },
            "documentation": {
              "id": 42883,
              "nodeType": "StructuredDocumentation",
              "src": "2882:559:29",
              "text": " @dev Initializes the domain separator and parameter caches.\n The meaning of `name` and `version` is specified in\n https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator[EIP-712]:\n - `name`: the user readable name of the signing domain, i.e. the name of the DApp or the protocol.\n - `version`: the current major version of the signing domain.\n NOTE: These parameters cannot be changed except through a xref:learn::upgrading-smart-contracts.adoc[smart\n contract upgrade]."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 42890,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 42889,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "3521:16:29"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40627,
                  "src": "3521:16:29"
                },
                "nodeType": "ModifierInvocation",
                "src": "3521:16:29"
              }
            ],
            "name": "__EIP712_init",
            "nameLocation": "3455:13:29",
            "parameters": {
              "id": 42888,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42885,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3483:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 42898,
                  "src": "3469:18:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 42884,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3469:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42887,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "3503:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 42898,
                  "src": "3489:21:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 42886,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3489:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3468:43:29"
            },
            "returnParameters": {
              "id": 42891,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3538:0:29"
            },
            "scope": 43185,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42938,
            "nodeType": "FunctionDefinition",
            "src": "3599:330:29",
            "nodes": [],
            "body": {
              "id": 42937,
              "nodeType": "Block",
              "src": "3701:228:29",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    42909
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42909,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "3733:1:29",
                      "nodeType": "VariableDeclaration",
                      "scope": 42937,
                      "src": "3711:23:29",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 42908,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 42907,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "3711:13:29"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 42871,
                          "src": "3711:13:29"
                        },
                        "referencedDeclaration": 42871,
                        "src": "3711:13:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 42912,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 42910,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42882,
                      "src": "3737:17:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$42871_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 42911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3737:19:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3711:45:29"
                },
                {
                  "expression": {
                    "id": 42917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 42913,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42909,
                        "src": "3766:1:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 42915,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3768:5:29",
                      "memberName": "_name",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 42868,
                      "src": "3766:7:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 42916,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42900,
                      "src": "3776:4:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3766:14:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 42918,
                  "nodeType": "ExpressionStatement",
                  "src": "3766:14:29"
                },
                {
                  "expression": {
                    "id": 42923,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 42919,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42909,
                        "src": "3790:1:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 42921,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3792:8:29",
                      "memberName": "_version",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 42870,
                      "src": "3790:10:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 42922,
                      "name": "version",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42902,
                      "src": "3803:7:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3790:20:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 42924,
                  "nodeType": "ExpressionStatement",
                  "src": "3790:20:29"
                },
                {
                  "expression": {
                    "id": 42929,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 42925,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42909,
                        "src": "3875:1:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 42927,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3877:11:29",
                      "memberName": "_hashedName",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 42863,
                      "src": "3875:13:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 42928,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3891:1:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3875:17:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 42930,
                  "nodeType": "ExpressionStatement",
                  "src": "3875:17:29"
                },
                {
                  "expression": {
                    "id": 42935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 42931,
                        "name": "$",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42909,
                        "src": "3902:1:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                        }
                      },
                      "id": 42933,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3904:14:29",
                      "memberName": "_hashedVersion",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 42866,
                      "src": "3902:16:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "30",
                      "id": 42934,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3921:1:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3902:20:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 42936,
                  "nodeType": "ExpressionStatement",
                  "src": "3902:20:29"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 42905,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 42904,
                  "name": "onlyInitializing",
                  "nameLocations": [
                    "3684:16:29"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40627,
                  "src": "3684:16:29"
                },
                "nodeType": "ModifierInvocation",
                "src": "3684:16:29"
              }
            ],
            "name": "__EIP712_init_unchained",
            "nameLocation": "3608:23:29",
            "parameters": {
              "id": 42903,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42900,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3646:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 42938,
                  "src": "3632:18:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 42899,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3632:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42902,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "3666:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 42938,
                  "src": "3652:21:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 42901,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3652:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3631:43:29"
            },
            "returnParameters": {
              "id": 42906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3701:0:29"
            },
            "scope": 43185,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42948,
            "nodeType": "FunctionDefinition",
            "src": "4015:109:29",
            "nodes": [],
            "body": {
              "id": 42947,
              "nodeType": "Block",
              "src": "4077:47:29",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 42944,
                      "name": "_buildDomainSeparator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42971,
                      "src": "4094:21:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                        "typeString": "function () view returns (bytes32)"
                      }
                    },
                    "id": 42945,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4094:23:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 42943,
                  "id": 42946,
                  "nodeType": "Return",
                  "src": "4087:30:29"
                }
              ]
            },
            "documentation": {
              "id": 42939,
              "nodeType": "StructuredDocumentation",
              "src": "3935:75:29",
              "text": " @dev Returns the domain separator for the current chain."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_domainSeparatorV4",
            "nameLocation": "4024:18:29",
            "parameters": {
              "id": 42940,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4042:2:29"
            },
            "returnParameters": {
              "id": 42943,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42942,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42948,
                  "src": "4068:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 42941,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4068:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4067:9:29"
            },
            "scope": 43185,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 42971,
            "nodeType": "FunctionDefinition",
            "src": "4130:191:29",
            "nodes": [],
            "body": {
              "id": 42970,
              "nodeType": "Block",
              "src": "4194:127:29",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 42956,
                            "name": "TYPE_HASH",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42859,
                            "src": "4232:9:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 42957,
                              "name": "_EIP712NameHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43132,
                              "src": "4243:15:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                "typeString": "function () view returns (bytes32)"
                              }
                            },
                            "id": 42958,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4243:17:29",
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
                              "id": 42959,
                              "name": "_EIP712VersionHash",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43184,
                              "src": "4262:18:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                "typeString": "function () view returns (bytes32)"
                              }
                            },
                            "id": 42960,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4262:20:29",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "expression": {
                              "id": 42961,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "4284:5:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 42962,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4290:7:29",
                            "memberName": "chainid",
                            "nodeType": "MemberAccess",
                            "src": "4284:13:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "arguments": [
                              {
                                "id": 42965,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "4307:4:29",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_EIP712Upgradeable_$43185",
                                  "typeString": "contract EIP712Upgradeable"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_EIP712Upgradeable_$43185",
                                  "typeString": "contract EIP712Upgradeable"
                                }
                              ],
                              "id": 42964,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "4299:7:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 42963,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "4299:7:29",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 42966,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4299:13:29",
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
                            "id": 42954,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "4221:3:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 42955,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4225:6:29",
                          "memberName": "encode",
                          "nodeType": "MemberAccess",
                          "src": "4221:10:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 42967,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4221:92:29",
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
                      "id": 42953,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "4211:9:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 42968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4211:103:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 42952,
                  "id": 42969,
                  "nodeType": "Return",
                  "src": "4204:110:29"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_buildDomainSeparator",
            "nameLocation": "4139:21:29",
            "parameters": {
              "id": 42949,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4160:2:29"
            },
            "returnParameters": {
              "id": 42952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42951,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42971,
                  "src": "4185:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 42950,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4185:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4184:9:29"
            },
            "scope": 43185,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 42987,
            "nodeType": "FunctionDefinition",
            "src": "4946:176:29",
            "nodes": [],
            "body": {
              "id": 42986,
              "nodeType": "Block",
              "src": "5032:90:29",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 42981,
                          "name": "_domainSeparatorV4",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42948,
                          "src": "5082:18:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                            "typeString": "function () view returns (bytes32)"
                          }
                        },
                        "id": 42982,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5082:20:29",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 42983,
                        "name": "structHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42974,
                        "src": "5104:10:29",
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
                        "id": 42979,
                        "name": "MessageHashUtils",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46587,
                        "src": "5049:16:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_MessageHashUtils_$46587_$",
                          "typeString": "type(library MessageHashUtils)"
                        }
                      },
                      "id": 42980,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5066:15:29",
                      "memberName": "toTypedDataHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46586,
                      "src": "5049:32:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32,bytes32) pure returns (bytes32)"
                      }
                    },
                    "id": 42984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5049:66:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 42978,
                  "id": 42985,
                  "nodeType": "Return",
                  "src": "5042:73:29"
                }
              ]
            },
            "documentation": {
              "id": 42972,
              "nodeType": "StructuredDocumentation",
              "src": "4327:614:29",
              "text": " @dev Given an already https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct[hashed struct], this\n function returns the hash of the fully encoded EIP712 message for this domain.\n This hash can be used together with {ECDSA-recover} to obtain the signer of a message. For example:\n ```solidity\n bytes32 digest = _hashTypedDataV4(keccak256(abi.encode(\n     keccak256(\"Mail(address to,string contents)\"),\n     mailTo,\n     keccak256(bytes(mailContents))\n )));\n address signer = ECDSA.recover(digest, signature);\n ```"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_hashTypedDataV4",
            "nameLocation": "4955:16:29",
            "parameters": {
              "id": 42975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42974,
                  "mutability": "mutable",
                  "name": "structHash",
                  "nameLocation": "4980:10:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 42987,
                  "src": "4972:18:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 42973,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4972:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4971:20:29"
            },
            "returnParameters": {
              "id": 42978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42977,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 42987,
                  "src": "5023:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 42976,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5023:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5022:9:29"
            },
            "scope": 43185,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 43048,
            "nodeType": "FunctionDefinition",
            "src": "5173:903:29",
            "nodes": [],
            "body": {
              "id": 43047,
              "nodeType": "Block",
              "src": "5501:575:29",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    43008
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43008,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "5533:1:29",
                      "nodeType": "VariableDeclaration",
                      "scope": 43047,
                      "src": "5511:23:29",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 43007,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 43006,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "5511:13:29"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 42871,
                          "src": "5511:13:29"
                        },
                        "referencedDeclaration": 42871,
                        "src": "5511:13:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 43011,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 43009,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42882,
                      "src": "5537:17:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$42871_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 43010,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5537:19:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5511:45:29"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 43021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 43016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 43013,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43008,
                              "src": "5777:1:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                                "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                              }
                            },
                            "id": 43014,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5779:11:29",
                            "memberName": "_hashedName",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 42863,
                            "src": "5777:13:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 43015,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5794:1:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "5777:18:29",
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
                          "id": 43020,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 43017,
                              "name": "$",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 43008,
                              "src": "5799:1:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                                "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                              }
                            },
                            "id": 43018,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5801:14:29",
                            "memberName": "_hashedVersion",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 42866,
                            "src": "5799:16:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 43019,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5819:1:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "5799:21:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "5777:43:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4549503731323a20556e696e697469616c697a6564",
                        "id": 43022,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5822:23:29",
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
                      "id": 43012,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5769:7:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 43023,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5769:77:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 43024,
                  "nodeType": "ExpressionStatement",
                  "src": "5769:77:29"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "hexValue": "0f",
                        "id": 43025,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "hexString",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5878:7:29",
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
                          "id": 43026,
                          "name": "_EIP712Name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 43064,
                          "src": "5908:11:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                            "typeString": "function () view returns (string memory)"
                          }
                        },
                        "id": 43027,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5908:13:29",
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
                          "id": 43028,
                          "name": "_EIP712Version",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 43080,
                          "src": "5935:14:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                            "typeString": "function () view returns (string memory)"
                          }
                        },
                        "id": 43029,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5935:16:29",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "expression": {
                          "id": 43030,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "5965:5:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 43031,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5971:7:29",
                        "memberName": "chainid",
                        "nodeType": "MemberAccess",
                        "src": "5965:13:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 43034,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "6000:4:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_EIP712Upgradeable_$43185",
                              "typeString": "contract EIP712Upgradeable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_EIP712Upgradeable_$43185",
                              "typeString": "contract EIP712Upgradeable"
                            }
                          ],
                          "id": 43033,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5992:7:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 43032,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5992:7:29",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 43035,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5992:13:29",
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
                            "id": 43038,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6027:1:29",
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
                          "id": 43037,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6019:7:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes32_$",
                            "typeString": "type(bytes32)"
                          },
                          "typeName": {
                            "id": 43036,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "6019:7:29",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 43039,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6019:10:29",
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
                            "id": 43043,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6057:1:29",
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
                          "id": 43042,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "6043:13:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                            "typeString": "function (uint256) pure returns (uint256[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 43040,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6047:7:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 43041,
                            "nodeType": "ArrayTypeName",
                            "src": "6047:9:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                              "typeString": "uint256[]"
                            }
                          }
                        },
                        "id": 43044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6043:16:29",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      }
                    ],
                    "id": 43045,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5864:205:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_stringliteral_3d725c5ee53025f027da36bea8d3af3b6a3e9d2d1542d47c162631de48e66c1c_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$_t_address_$_t_bytes32_$_t_array$_t_uint256_$dyn_memory_ptr_$",
                      "typeString": "tuple(literal_string hex\"0f\",string memory,string memory,uint256,address,bytes32,uint256[] memory)"
                    }
                  },
                  "functionReturnParameters": 43005,
                  "id": 43046,
                  "nodeType": "Return",
                  "src": "5857:212:29"
                }
              ]
            },
            "baseFunctions": [
              43267
            ],
            "documentation": {
              "id": 42988,
              "nodeType": "StructuredDocumentation",
              "src": "5128:40:29",
              "text": " @dev See {IERC-5267}."
            },
            "functionSelector": "84b0196e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "eip712Domain",
            "nameLocation": "5182:12:29",
            "parameters": {
              "id": 42989,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5194:2:29"
            },
            "returnParameters": {
              "id": 43005,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42991,
                  "mutability": "mutable",
                  "name": "fields",
                  "nameLocation": "5278:6:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 43048,
                  "src": "5271:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes1",
                    "typeString": "bytes1"
                  },
                  "typeName": {
                    "id": 42990,
                    "name": "bytes1",
                    "nodeType": "ElementaryTypeName",
                    "src": "5271:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes1",
                      "typeString": "bytes1"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42993,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5312:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 43048,
                  "src": "5298:18:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 42992,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5298:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42995,
                  "mutability": "mutable",
                  "name": "version",
                  "nameLocation": "5344:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 43048,
                  "src": "5330:21:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 42994,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5330:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42997,
                  "mutability": "mutable",
                  "name": "chainId",
                  "nameLocation": "5373:7:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 43048,
                  "src": "5365:15:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42996,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5365:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 42999,
                  "mutability": "mutable",
                  "name": "verifyingContract",
                  "nameLocation": "5402:17:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 43048,
                  "src": "5394:25:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42998,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5394:7:29",
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
                  "id": 43001,
                  "mutability": "mutable",
                  "name": "salt",
                  "nameLocation": "5441:4:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 43048,
                  "src": "5433:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 43000,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "5433:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43004,
                  "mutability": "mutable",
                  "name": "extensions",
                  "nameLocation": "5476:10:29",
                  "nodeType": "VariableDeclaration",
                  "scope": 43048,
                  "src": "5459:27:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 43002,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "5459:7:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 43003,
                    "nodeType": "ArrayTypeName",
                    "src": "5459:9:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5257:239:29"
            },
            "scope": 43185,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 43064,
            "nodeType": "FunctionDefinition",
            "src": "6300:155:29",
            "nodes": [],
            "body": {
              "id": 43063,
              "nodeType": "Block",
              "src": "6369:86:29",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    43056
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43056,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "6401:1:29",
                      "nodeType": "VariableDeclaration",
                      "scope": 43063,
                      "src": "6379:23:29",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 43055,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 43054,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "6379:13:29"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 42871,
                          "src": "6379:13:29"
                        },
                        "referencedDeclaration": 42871,
                        "src": "6379:13:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 43059,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 43057,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42882,
                      "src": "6405:17:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$42871_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 43058,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6405:19:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6379:45:29"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 43060,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43056,
                      "src": "6441:1:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                      }
                    },
                    "id": 43061,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "6443:5:29",
                    "memberName": "_name",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 42868,
                    "src": "6441:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 43053,
                  "id": 43062,
                  "nodeType": "Return",
                  "src": "6434:14:29"
                }
              ]
            },
            "documentation": {
              "id": 43049,
              "nodeType": "StructuredDocumentation",
              "src": "6082:213:29",
              "text": " @dev The name parameter for the EIP712 domain.\n NOTE: This function reads from storage by default, but can be redefined to return a constant value if gas costs\n are a concern."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712Name",
            "nameLocation": "6309:11:29",
            "parameters": {
              "id": 43050,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6320:2:29"
            },
            "returnParameters": {
              "id": 43053,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43052,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43064,
                  "src": "6354:13:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 43051,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6354:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6353:15:29"
            },
            "scope": 43185,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 43080,
            "nodeType": "FunctionDefinition",
            "src": "6682:161:29",
            "nodes": [],
            "body": {
              "id": 43079,
              "nodeType": "Block",
              "src": "6754:89:29",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    43072
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43072,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "6786:1:29",
                      "nodeType": "VariableDeclaration",
                      "scope": 43079,
                      "src": "6764:23:29",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 43071,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 43070,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "6764:13:29"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 42871,
                          "src": "6764:13:29"
                        },
                        "referencedDeclaration": 42871,
                        "src": "6764:13:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 43075,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 43073,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42882,
                      "src": "6790:17:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$42871_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 43074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6790:19:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6764:45:29"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 43076,
                      "name": "$",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43072,
                      "src": "6826:1:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                      }
                    },
                    "id": 43077,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "6828:8:29",
                    "memberName": "_version",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 42870,
                    "src": "6826:10:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 43069,
                  "id": 43078,
                  "nodeType": "Return",
                  "src": "6819:17:29"
                }
              ]
            },
            "documentation": {
              "id": 43065,
              "nodeType": "StructuredDocumentation",
              "src": "6461:216:29",
              "text": " @dev The version parameter for the EIP712 domain.\n NOTE: This function reads from storage by default, but can be redefined to return a constant value if gas costs\n are a concern."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712Version",
            "nameLocation": "6691:14:29",
            "parameters": {
              "id": 43066,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6705:2:29"
            },
            "returnParameters": {
              "id": 43069,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43068,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43080,
                  "src": "6739:13:29",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 43067,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6739:6:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6738:15:29"
            },
            "scope": 43185,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 43132,
            "nodeType": "FunctionDefinition",
            "src": "7058:687:29",
            "nodes": [],
            "body": {
              "id": 43131,
              "nodeType": "Block",
              "src": "7117:628:29",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    43088
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43088,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "7149:1:29",
                      "nodeType": "VariableDeclaration",
                      "scope": 43131,
                      "src": "7127:23:29",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 43087,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 43086,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "7127:13:29"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 42871,
                          "src": "7127:13:29"
                        },
                        "referencedDeclaration": 42871,
                        "src": "7127:13:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 43091,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 43089,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42882,
                      "src": "7153:17:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$42871_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 43090,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7153:19:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7127:45:29"
                },
                {
                  "assignments": [
                    43093
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43093,
                      "mutability": "mutable",
                      "name": "name",
                      "nameLocation": "7196:4:29",
                      "nodeType": "VariableDeclaration",
                      "scope": 43131,
                      "src": "7182:18:29",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 43092,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "7182:6:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 43096,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 43094,
                      "name": "_EIP712Name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43064,
                      "src": "7203:11:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view returns (string memory)"
                      }
                    },
                    "id": 43095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7203:13:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7182:34:29"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 43103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 43099,
                            "name": "name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43093,
                            "src": "7236:4:29",
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
                          "id": 43098,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7230:5:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 43097,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "7230:5:29",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 43100,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7230:11:29",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 43101,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7242:6:29",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "7230:18:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 43102,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7251:1:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "7230:22:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 43129,
                    "nodeType": "Block",
                    "src": "7314:425:29",
                    "statements": [
                      {
                        "assignments": [
                          43113
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 43113,
                            "mutability": "mutable",
                            "name": "hashedName",
                            "nameLocation": "7559:10:29",
                            "nodeType": "VariableDeclaration",
                            "scope": 43129,
                            "src": "7551:18:29",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 43112,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "7551:7:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 43116,
                        "initialValue": {
                          "expression": {
                            "id": 43114,
                            "name": "$",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43088,
                            "src": "7572:1:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                              "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                            }
                          },
                          "id": 43115,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7574:11:29",
                          "memberName": "_hashedName",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 42863,
                          "src": "7572:13:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "7551:34:29"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 43119,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 43117,
                            "name": "hashedName",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43113,
                            "src": "7603:10:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 43118,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7617:1:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "7603:15:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 43127,
                          "nodeType": "Block",
                          "src": "7676:53:29",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "",
                                    "id": 43124,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "7711:2:29",
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
                                  "id": 43123,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -8,
                                  "src": "7701:9:29",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                  }
                                },
                                "id": 43125,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7701:13:29",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 43085,
                              "id": 43126,
                              "nodeType": "Return",
                              "src": "7694:20:29"
                            }
                          ]
                        },
                        "id": 43128,
                        "nodeType": "IfStatement",
                        "src": "7599:130:29",
                        "trueBody": {
                          "id": 43122,
                          "nodeType": "Block",
                          "src": "7620:50:29",
                          "statements": [
                            {
                              "expression": {
                                "id": 43120,
                                "name": "hashedName",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 43113,
                                "src": "7645:10:29",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 43085,
                              "id": 43121,
                              "nodeType": "Return",
                              "src": "7638:17:29"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 43130,
                  "nodeType": "IfStatement",
                  "src": "7226:513:29",
                  "trueBody": {
                    "id": 43111,
                    "nodeType": "Block",
                    "src": "7254:54:29",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 43107,
                                  "name": "name",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43093,
                                  "src": "7291:4:29",
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
                                "id": 43106,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7285:5:29",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 43105,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "7285:5:29",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 43108,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7285:11:29",
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
                            "id": 43104,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "7275:9:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 43109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7275:22:29",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "functionReturnParameters": 43085,
                        "id": 43110,
                        "nodeType": "Return",
                        "src": "7268:29:29"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 43081,
              "nodeType": "StructuredDocumentation",
              "src": "6849:204:29",
              "text": " @dev The hash of the name parameter for the EIP712 domain.\n NOTE: In previous versions this function was virtual. In this version you should override `_EIP712Name` instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712NameHash",
            "nameLocation": "7067:15:29",
            "parameters": {
              "id": 43082,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7082:2:29"
            },
            "returnParameters": {
              "id": 43085,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43084,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43132,
                  "src": "7108:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 43083,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7108:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7107:9:29"
            },
            "scope": 43185,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 43184,
            "nodeType": "FunctionDefinition",
            "src": "7966:723:29",
            "nodes": [],
            "body": {
              "id": 43183,
              "nodeType": "Block",
              "src": "8028:661:29",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    43140
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43140,
                      "mutability": "mutable",
                      "name": "$",
                      "nameLocation": "8060:1:29",
                      "nodeType": "VariableDeclaration",
                      "scope": 43183,
                      "src": "8038:23:29",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                        "typeString": "struct EIP712Upgradeable.EIP712Storage"
                      },
                      "typeName": {
                        "id": 43139,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 43138,
                          "name": "EIP712Storage",
                          "nameLocations": [
                            "8038:13:29"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 42871,
                          "src": "8038:13:29"
                        },
                        "referencedDeclaration": 42871,
                        "src": "8038:13:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                          "typeString": "struct EIP712Upgradeable.EIP712Storage"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 43143,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 43141,
                      "name": "_getEIP712Storage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42882,
                      "src": "8064:17:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_EIP712Storage_$42871_storage_ptr_$",
                        "typeString": "function () pure returns (struct EIP712Upgradeable.EIP712Storage storage pointer)"
                      }
                    },
                    "id": 43142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8064:19:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                      "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8038:45:29"
                },
                {
                  "assignments": [
                    43145
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43145,
                      "mutability": "mutable",
                      "name": "version",
                      "nameLocation": "8107:7:29",
                      "nodeType": "VariableDeclaration",
                      "scope": 43183,
                      "src": "8093:21:29",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 43144,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "8093:6:29",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 43148,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 43146,
                      "name": "_EIP712Version",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43080,
                      "src": "8117:14:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_string_memory_ptr_$",
                        "typeString": "function () view returns (string memory)"
                      }
                    },
                    "id": 43147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8117:16:29",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8093:40:29"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 43155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 43151,
                            "name": "version",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43145,
                            "src": "8153:7:29",
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
                          "id": 43150,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8147:5:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                            "typeString": "type(bytes storage pointer)"
                          },
                          "typeName": {
                            "id": 43149,
                            "name": "bytes",
                            "nodeType": "ElementaryTypeName",
                            "src": "8147:5:29",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 43152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8147:14:29",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 43153,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8162:6:29",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "8147:21:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 43154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "8171:1:29",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "8147:25:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 43181,
                    "nodeType": "Block",
                    "src": "8237:446:29",
                    "statements": [
                      {
                        "assignments": [
                          43165
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 43165,
                            "mutability": "mutable",
                            "name": "hashedVersion",
                            "nameLocation": "8491:13:29",
                            "nodeType": "VariableDeclaration",
                            "scope": 43181,
                            "src": "8483:21:29",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 43164,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "8483:7:29",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 43168,
                        "initialValue": {
                          "expression": {
                            "id": 43166,
                            "name": "$",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43140,
                            "src": "8507:1:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_EIP712Storage_$42871_storage_ptr",
                              "typeString": "struct EIP712Upgradeable.EIP712Storage storage pointer"
                            }
                          },
                          "id": 43167,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8509:14:29",
                          "memberName": "_hashedVersion",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 42866,
                          "src": "8507:16:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "8483:40:29"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "id": 43171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 43169,
                            "name": "hashedVersion",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43165,
                            "src": "8541:13:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 43170,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8558:1:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "8541:18:29",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 43179,
                          "nodeType": "Block",
                          "src": "8620:53:29",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "hexValue": "",
                                    "id": 43176,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "8655:2:29",
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
                                  "id": 43175,
                                  "name": "keccak256",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -8,
                                  "src": "8645:9:29",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                  }
                                },
                                "id": 43177,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8645:13:29",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 43137,
                              "id": 43178,
                              "nodeType": "Return",
                              "src": "8638:20:29"
                            }
                          ]
                        },
                        "id": 43180,
                        "nodeType": "IfStatement",
                        "src": "8537:136:29",
                        "trueBody": {
                          "id": 43174,
                          "nodeType": "Block",
                          "src": "8561:53:29",
                          "statements": [
                            {
                              "expression": {
                                "id": 43172,
                                "name": "hashedVersion",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 43165,
                                "src": "8586:13:29",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "functionReturnParameters": 43137,
                              "id": 43173,
                              "nodeType": "Return",
                              "src": "8579:20:29"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 43182,
                  "nodeType": "IfStatement",
                  "src": "8143:540:29",
                  "trueBody": {
                    "id": 43163,
                    "nodeType": "Block",
                    "src": "8174:57:29",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 43159,
                                  "name": "version",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43145,
                                  "src": "8211:7:29",
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
                                "id": 43158,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "8205:5:29",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": {
                                  "id": 43157,
                                  "name": "bytes",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "8205:5:29",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 43160,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8205:14:29",
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
                            "id": 43156,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "8195:9:29",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 43161,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8195:25:29",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "functionReturnParameters": 43137,
                        "id": 43162,
                        "nodeType": "Return",
                        "src": "8188:32:29"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 43133,
              "nodeType": "StructuredDocumentation",
              "src": "7751:210:29",
              "text": " @dev The hash of the version parameter for the EIP712 domain.\n NOTE: In previous versions this function was virtual. In this version you should override `_EIP712Version` instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_EIP712VersionHash",
            "nameLocation": "7975:18:29",
            "parameters": {
              "id": 43134,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7993:2:29"
            },
            "returnParameters": {
              "id": 43137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43136,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43184,
                  "src": "8019:7:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 43135,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8019:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8018:9:29"
            },
            "scope": 43185,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 42851,
              "name": "Initializable",
              "nameLocations": [
                "1998:13:29"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 40718,
              "src": "1998:13:29"
            },
            "id": 42852,
            "nodeType": "InheritanceSpecifier",
            "src": "1998:13:29"
          },
          {
            "baseName": {
              "id": 42853,
              "name": "IERC5267",
              "nameLocations": [
                "2013:8:29"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 43268,
              "src": "2013:8:29"
            },
            "id": 42854,
            "nodeType": "InheritanceSpecifier",
            "src": "2013:8:29"
          }
        ],
        "canonicalName": "EIP712Upgradeable",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 42850,
          "nodeType": "StructuredDocumentation",
          "src": "379:1579:29",
          "text": " @dev https://eips.ethereum.org/EIPS/eip-712[EIP-712] is a standard for hashing and signing of typed structured data.\n The encoding scheme specified in the EIP requires a domain separator and a hash of the typed structured data, whose\n encoding is very generic and therefore its implementation in Solidity is not feasible, thus this contract\n does not implement the encoding itself. Protocols need to implement the type-specific encoding they need in order to\n produce the hash of their typed data using a combination of `abi.encode` and `keccak256`.\n This contract implements the EIP-712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding\n scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA\n ({_hashTypedDataV4}).\n The implementation of the domain separator was designed to be as efficient as possible while still properly updating\n the chain id to protect against replay attacks on an eventual fork of the chain.\n NOTE: This contract implements the version of the encoding known as \"v4\", as implemented by the JSON RPC method\n https://docs.metamask.io/guide/signing-data.html[`eth_signTypedDataV4` in MetaMask].\n NOTE: In the upgradeable version of this contract, the cached values will correspond to the address, and the domain\n separator of the implementation contract. This will cause the {_domainSeparatorV4} function to always rebuild the\n separator from the immutable values, which is cheaper than accessing a cached version in cold storage."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          43185,
          43268,
          40718
        ],
        "name": "EIP712Upgradeable",
        "nameLocation": "1977:17:29",
        "scope": 43186,
        "usedErrors": [
          40481,
          40484
        ],
        "usedEvents": [
          40489,
          43248
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 29
} as const;