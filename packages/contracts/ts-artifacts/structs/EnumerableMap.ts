export const EnumerableMap = {
  "abi": [
    {
      "type": "error",
      "name": "EnumerableMapNonexistentKey",
      "inputs": [
        {
          "name": "key",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ]
    }
  ],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122052c9d98585bdc169b6b04b7fe1a69d6f316b043e84a3e54a21a56b1b8b59b1e564736f6c634300081a0033",
    "sourceMap": "1900:30656:33:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;1900:30656:33;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122052c9d98585bdc169b6b04b7fe1a69d6f316b043e84a3e54a21a56b1b8b59b1e564736f6c634300081a0033",
    "sourceMap": "1900:30656:33:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"name\":\"EnumerableMapNonexistentKey\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Library for managing an enumerable variant of Solidity's https://solidity.readthedocs.io/en/latest/types.html#mapping-types[`mapping`] type. Maps have the following properties: - Entries are added, removed, and checked for existence in constant time (O(1)). - Entries are enumerated in O(n). No guarantees are made on the ordering. ```solidity contract Example {     // Add the library methods     using EnumerableMap for EnumerableMap.UintToAddressMap;     // Declare a set state variable     EnumerableMap.UintToAddressMap private myMap; } ``` The following map types are supported: - `uint256 -> address` (`UintToAddressMap`) since v3.0.0 - `address -> uint256` (`AddressToUintMap`) since v4.6.0 - `bytes32 -> bytes32` (`Bytes32ToBytes32Map`) since v4.6.0 - `uint256 -> uint256` (`UintToUintMap`) since v4.7.0 - `bytes32 -> uint256` (`Bytes32ToUintMap`) since v4.7.0 - `uint256 -> bytes32` (`UintToBytes32Map`) since v5.1.0 - `address -> address` (`AddressToAddressMap`) since v5.1.0 - `address -> bytes32` (`AddressToBytes32Map`) since v5.1.0 - `bytes32 -> address` (`Bytes32ToAddressMap`) since v5.1.0 [WARNING] ==== Trying to delete such a structure from storage will likely result in data corruption, rendering the structure unusable. See https://github.com/ethereum/solidity/pull/11843[ethereum/solidity#11843] for more info. In order to clean an EnumerableMap, you can either remove all elements one by one or create a fresh instance using an array of EnumerableMap. ====\",\"errors\":{\"EnumerableMapNonexistentKey(bytes32)\":[{\"details\":\"Query for a nonexistent map key.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/utils/structs/EnumerableMap.sol\":\"EnumerableMap\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/utils/structs/EnumerableMap.sol\":{\"keccak256\":\"0xafb7be6c8945a04bdd080fd6a3a3d0fa0329f1ad0d3bcd431dc1dcf2462d3da9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e5a595aaee5f9fcfa163293afd9518d069fa424bffbf65d53d961d0394ed1dc5\",\"dweb:/ipfs/Qmb8U9Z38K1nmKwP895JoUo8pupwexUnjzcgAC6STzpQo4\"]},\"node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0x9b161e97b8967d4bc0c08d25741889a30692cdda4b71910bf1b0e315f1962212\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://821500c39d095eaa25b06f46e65f1d0e97c4c96b39227f79077dee7d9e84051f\",\"dweb:/ipfs/QmSTeGorKzSWF6HAmxo32uCZiEuKNvreQdUiX1AaYtUMTz\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.26+commit.8a97fa7a"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "key",
              "type": "bytes32"
            }
          ],
          "type": "error",
          "name": "EnumerableMapNonexistentKey"
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
        "node_modules/@openzeppelin/contracts/utils/structs/EnumerableMap.sol": "EnumerableMap"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/utils/structs/EnumerableMap.sol": {
        "keccak256": "0xafb7be6c8945a04bdd080fd6a3a3d0fa0329f1ad0d3bcd431dc1dcf2462d3da9",
        "urls": [
          "bzz-raw://e5a595aaee5f9fcfa163293afd9518d069fa424bffbf65d53d961d0394ed1dc5",
          "dweb:/ipfs/Qmb8U9Z38K1nmKwP895JoUo8pupwexUnjzcgAC6STzpQo4"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol": {
        "keccak256": "0x9b161e97b8967d4bc0c08d25741889a30692cdda4b71910bf1b0e315f1962212",
        "urls": [
          "bzz-raw://821500c39d095eaa25b06f46e65f1d0e97c4c96b39227f79077dee7d9e84051f",
          "dweb:/ipfs/QmSTeGorKzSWF6HAmxo32uCZiEuKNvreQdUiX1AaYtUMTz"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "id": 33
} as const;