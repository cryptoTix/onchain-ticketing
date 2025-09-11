export const Events = {
  "abi": [],
  "bytecode": {
    "object": "0x",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "linkReferences": {}
  },
  "ast": {
    "absolutePath": "src/interface/Events.sol",
    "id": 57321,
    "exportedSymbols": {
      "CancelledTicket": [
        57320
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:74:73",
    "nodes": [
      {
        "id": 57316,
        "nodeType": "PragmaDirective",
        "src": "32:24:73",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".25"
        ]
      },
      {
        "id": 57320,
        "nodeType": "EventDefinition",
        "src": "58:48:73",
        "nodes": [],
        "anonymous": false,
        "eventSelector": "e115e3c2ed2f591ca658dee1fa064a06d8bb613db408bdcd32808bf1021121fd",
        "name": "CancelledTicket",
        "nameLocation": "64:15:73",
        "parameters": {
          "id": 57319,
          "nodeType": "ParameterList",
          "parameters": [
            {
              "constant": false,
              "id": 57318,
              "indexed": true,
              "mutability": "mutable",
              "name": "ticketId",
              "nameLocation": "96:8:73",
              "nodeType": "VariableDeclaration",
              "scope": 57320,
              "src": "80:24:73",
              "stateVariable": false,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 57317,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "80:7:73",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            }
          ],
          "src": "79:26:73"
        }
      }
    ],
    "license": "MIT"
  },
  "id": 73
} as const;