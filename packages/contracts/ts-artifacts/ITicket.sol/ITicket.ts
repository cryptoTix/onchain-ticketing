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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"cancel\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"redeem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/interface/ITicket.sol\":\"ITicket\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"src/interface/ITicket.sol\":{\"keccak256\":\"0xba0c81ab62799a5d111f4a0c919f72c27b475a8bbb7f59b006863099fa1a75c9\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://77f1cec43b43ec8092bff199862a58af3b783de711a47bd0ae2a8ec5fa5a310a\",\"dweb:/ipfs/QmWGazxnWruVUW6fJc1Tkpatz2asojm9u7jbPd84zuqxFP\"]}},\"version\":1}",
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
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
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
    "id": 57330,
    "exportedSymbols": {
      "ITicket": [
        57329
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:112:74",
    "nodes": [
      {
        "id": 57322,
        "nodeType": "PragmaDirective",
        "src": "51:24:74",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".25"
        ]
      },
      {
        "id": 57329,
        "nodeType": "ContractDefinition",
        "src": "77:85:74",
        "nodes": [
          {
            "id": 57325,
            "nodeType": "FunctionDefinition",
            "src": "101:27:74",
            "nodes": [],
            "functionSelector": "ea8a1af0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "cancel",
            "nameLocation": "110:6:74",
            "parameters": {
              "id": 57323,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "116:2:74"
            },
            "returnParameters": {
              "id": 57324,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "127:0:74"
            },
            "scope": 57329,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 57328,
            "nodeType": "FunctionDefinition",
            "src": "133:27:74",
            "nodes": [],
            "functionSelector": "be040fb0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "142:6:74",
            "parameters": {
              "id": 57326,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "148:2:74"
            },
            "returnParameters": {
              "id": 57327,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "159:0:74"
            },
            "scope": 57329,
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
          57329
        ],
        "name": "ITicket",
        "nameLocation": "87:7:74",
        "scope": 57330,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 74
} as const;