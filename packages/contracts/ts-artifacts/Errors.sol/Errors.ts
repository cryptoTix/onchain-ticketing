export const Errors = {
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
    "absolutePath": "src/interface/Errors.sol",
    "id": 57315,
    "exportedSymbols": {
      "AlreadyUsedData": [
        57294
      ],
      "CancellerNotOwner": [
        57306
      ],
      "InvalidAmount": [
        57314
      ],
      "InvalidAsset": [
        57300
      ],
      "InvalidInput": [
        57290
      ],
      "InvalidPurchaseData": [
        57296
      ],
      "NotAllowlistedAsset": [
        57302
      ],
      "ShowtimeNotPassed": [
        57310
      ],
      "ShowtimePassed": [
        57308
      ],
      "SignerNotOwner": [
        57304
      ],
      "StalePurchaseData": [
        57292
      ],
      "UnsortedSeatsInput": [
        57312
      ],
      "ZeroLength": [
        57298
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:353:72",
    "nodes": [
      {
        "id": 57288,
        "nodeType": "PragmaDirective",
        "src": "51:24:72",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".25"
        ]
      },
      {
        "id": 57290,
        "nodeType": "ErrorDefinition",
        "src": "77:21:72",
        "nodes": [],
        "errorSelector": "b4fa3fb3",
        "name": "InvalidInput",
        "nameLocation": "83:12:72",
        "parameters": {
          "id": 57289,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "95:2:72"
        }
      },
      {
        "id": 57292,
        "nodeType": "ErrorDefinition",
        "src": "99:26:72",
        "nodes": [],
        "errorSelector": "f1b24311",
        "name": "StalePurchaseData",
        "nameLocation": "105:17:72",
        "parameters": {
          "id": 57291,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "122:2:72"
        }
      },
      {
        "id": 57294,
        "nodeType": "ErrorDefinition",
        "src": "126:24:72",
        "nodes": [],
        "errorSelector": "96c9d05f",
        "name": "AlreadyUsedData",
        "nameLocation": "132:15:72",
        "parameters": {
          "id": 57293,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "147:2:72"
        }
      },
      {
        "id": 57296,
        "nodeType": "ErrorDefinition",
        "src": "151:28:72",
        "nodes": [],
        "errorSelector": "a570c89c",
        "name": "InvalidPurchaseData",
        "nameLocation": "157:19:72",
        "parameters": {
          "id": 57295,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "176:2:72"
        }
      },
      {
        "id": 57298,
        "nodeType": "ErrorDefinition",
        "src": "180:19:72",
        "nodes": [],
        "errorSelector": "bf557497",
        "name": "ZeroLength",
        "nameLocation": "186:10:72",
        "parameters": {
          "id": 57297,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "196:2:72"
        }
      },
      {
        "id": 57300,
        "nodeType": "ErrorDefinition",
        "src": "200:21:72",
        "nodes": [],
        "errorSelector": "c891add2",
        "name": "InvalidAsset",
        "nameLocation": "206:12:72",
        "parameters": {
          "id": 57299,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "218:2:72"
        }
      },
      {
        "id": 57302,
        "nodeType": "ErrorDefinition",
        "src": "222:28:72",
        "nodes": [],
        "errorSelector": "45326c46",
        "name": "NotAllowlistedAsset",
        "nameLocation": "228:19:72",
        "parameters": {
          "id": 57301,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "247:2:72"
        }
      },
      {
        "id": 57304,
        "nodeType": "ErrorDefinition",
        "src": "251:23:72",
        "nodes": [],
        "errorSelector": "51c65eae",
        "name": "SignerNotOwner",
        "nameLocation": "257:14:72",
        "parameters": {
          "id": 57303,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "271:2:72"
        }
      },
      {
        "id": 57306,
        "nodeType": "ErrorDefinition",
        "src": "275:26:72",
        "nodes": [],
        "errorSelector": "508229e4",
        "name": "CancellerNotOwner",
        "nameLocation": "281:17:72",
        "parameters": {
          "id": 57305,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "298:2:72"
        }
      },
      {
        "id": 57308,
        "nodeType": "ErrorDefinition",
        "src": "302:23:72",
        "nodes": [],
        "errorSelector": "415900e2",
        "name": "ShowtimePassed",
        "nameLocation": "308:14:72",
        "parameters": {
          "id": 57307,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "322:2:72"
        }
      },
      {
        "id": 57310,
        "nodeType": "ErrorDefinition",
        "src": "326:26:72",
        "nodes": [],
        "errorSelector": "3f583607",
        "name": "ShowtimeNotPassed",
        "nameLocation": "332:17:72",
        "parameters": {
          "id": 57309,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "349:2:72"
        }
      },
      {
        "id": 57312,
        "nodeType": "ErrorDefinition",
        "src": "353:27:72",
        "nodes": [],
        "errorSelector": "1103f79c",
        "name": "UnsortedSeatsInput",
        "nameLocation": "359:18:72",
        "parameters": {
          "id": 57311,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "377:2:72"
        }
      },
      {
        "id": 57314,
        "nodeType": "ErrorDefinition",
        "src": "381:22:72",
        "nodes": [],
        "errorSelector": "2c5211c6",
        "name": "InvalidAmount",
        "nameLocation": "387:13:72",
        "parameters": {
          "id": 57313,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "400:2:72"
        }
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 72
} as const;