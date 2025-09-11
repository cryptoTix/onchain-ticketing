export const ITicket = {
  "abi": [
    {
      "type": "function",
      "name": "cancel",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "redeem",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
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
    "cancel()": "ea8a1af0",
    "redeem()": "be040fb0"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"cancel\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"redeem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/interface/ITicket.sol\":\"ITicket\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"src/interface/ITicket.sol\":{\"keccak256\":\"0xba0c81ab62799a5d111f4a0c919f72c27b475a8bbb7f59b006863099fa1a75c9\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://77f1cec43b43ec8092bff199862a58af3b783de711a47bd0ae2a8ec5fa5a310a\",\"dweb:/ipfs/QmWGazxnWruVUW6fJc1Tkpatz2asojm9u7jbPd84zuqxFP\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.26+commit.8a97fa7a"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "cancel"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeem"
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
        "src/interface/ITicket.sol": "ITicket"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "src/interface/ITicket.sol": {
        "keccak256": "0xba0c81ab62799a5d111f4a0c919f72c27b475a8bbb7f59b006863099fa1a75c9",
        "urls": [
          "bzz-raw://77f1cec43b43ec8092bff199862a58af3b783de711a47bd0ae2a8ec5fa5a310a",
          "dweb:/ipfs/QmWGazxnWruVUW6fJc1Tkpatz2asojm9u7jbPd84zuqxFP"
        ],
        "license": "SEE LICENSE IN LICENSE"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/interface/ITicket.sol",
    "id": 56745,
    "exportedSymbols": {
      "ITicket": [
        56744
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:112:73",
    "nodes": [
      {
        "id": 56737,
        "nodeType": "PragmaDirective",
        "src": "51:24:73",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".25"
        ]
      },
      {
        "id": 56744,
        "nodeType": "ContractDefinition",
        "src": "77:85:73",
        "nodes": [
          {
            "id": 56740,
            "nodeType": "FunctionDefinition",
            "src": "101:27:73",
            "nodes": [],
            "functionSelector": "ea8a1af0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "cancel",
            "nameLocation": "110:6:73",
            "parameters": {
              "id": 56738,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "116:2:73"
            },
            "returnParameters": {
              "id": 56739,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "127:0:73"
            },
            "scope": 56744,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 56743,
            "nodeType": "FunctionDefinition",
            "src": "133:27:73",
            "nodes": [],
            "functionSelector": "be040fb0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "142:6:73",
            "parameters": {
              "id": 56741,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "148:2:73"
            },
            "returnParameters": {
              "id": 56742,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "159:0:73"
            },
            "scope": 56744,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "ITicket",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          56744
        ],
        "name": "ITicket",
        "nameLocation": "87:7:73",
        "scope": 56745,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 73
} as const;