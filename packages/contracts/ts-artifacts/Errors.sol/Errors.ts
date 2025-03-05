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
    "id": 52154,
    "exportedSymbols": {
      "AlreadyUsedData": [
        52133
      ],
      "CancellerNotOwner": [
        52145
      ],
      "InvalidAmount": [
        52153
      ],
      "InvalidAsset": [
        52139
      ],
      "InvalidInput": [
        52129
      ],
      "InvalidPurchaseData": [
        52135
      ],
      "NotAllowlistedAsset": [
        52141
      ],
      "ShowtimeNotPassed": [
        52149
      ],
      "ShowtimePassed": [
        52147
      ],
      "SignerNotOwner": [
        52143
      ],
      "StalePurchaseData": [
        52131
      ],
      "UnsortedSeatsInput": [
        52151
      ],
      "ZeroLength": [
        52137
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:353:64",
    "nodes": [
      {
        "id": 52127,
        "nodeType": "PragmaDirective",
        "src": "51:24:64",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".25"
        ]
      },
      {
        "id": 52129,
        "nodeType": "ErrorDefinition",
        "src": "77:21:64",
        "nodes": [],
        "errorSelector": "b4fa3fb3",
        "name": "InvalidInput",
        "nameLocation": "83:12:64",
        "parameters": {
          "id": 52128,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "95:2:64"
        }
      },
      {
        "id": 52131,
        "nodeType": "ErrorDefinition",
        "src": "99:26:64",
        "nodes": [],
        "errorSelector": "f1b24311",
        "name": "StalePurchaseData",
        "nameLocation": "105:17:64",
        "parameters": {
          "id": 52130,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "122:2:64"
        }
      },
      {
        "id": 52133,
        "nodeType": "ErrorDefinition",
        "src": "126:24:64",
        "nodes": [],
        "errorSelector": "96c9d05f",
        "name": "AlreadyUsedData",
        "nameLocation": "132:15:64",
        "parameters": {
          "id": 52132,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "147:2:64"
        }
      },
      {
        "id": 52135,
        "nodeType": "ErrorDefinition",
        "src": "151:28:64",
        "nodes": [],
        "errorSelector": "a570c89c",
        "name": "InvalidPurchaseData",
        "nameLocation": "157:19:64",
        "parameters": {
          "id": 52134,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "176:2:64"
        }
      },
      {
        "id": 52137,
        "nodeType": "ErrorDefinition",
        "src": "180:19:64",
        "nodes": [],
        "errorSelector": "bf557497",
        "name": "ZeroLength",
        "nameLocation": "186:10:64",
        "parameters": {
          "id": 52136,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "196:2:64"
        }
      },
      {
        "id": 52139,
        "nodeType": "ErrorDefinition",
        "src": "200:21:64",
        "nodes": [],
        "errorSelector": "c891add2",
        "name": "InvalidAsset",
        "nameLocation": "206:12:64",
        "parameters": {
          "id": 52138,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "218:2:64"
        }
      },
      {
        "id": 52141,
        "nodeType": "ErrorDefinition",
        "src": "222:28:64",
        "nodes": [],
        "errorSelector": "45326c46",
        "name": "NotAllowlistedAsset",
        "nameLocation": "228:19:64",
        "parameters": {
          "id": 52140,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "247:2:64"
        }
      },
      {
        "id": 52143,
        "nodeType": "ErrorDefinition",
        "src": "251:23:64",
        "nodes": [],
        "errorSelector": "51c65eae",
        "name": "SignerNotOwner",
        "nameLocation": "257:14:64",
        "parameters": {
          "id": 52142,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "271:2:64"
        }
      },
      {
        "id": 52145,
        "nodeType": "ErrorDefinition",
        "src": "275:26:64",
        "nodes": [],
        "errorSelector": "508229e4",
        "name": "CancellerNotOwner",
        "nameLocation": "281:17:64",
        "parameters": {
          "id": 52144,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "298:2:64"
        }
      },
      {
        "id": 52147,
        "nodeType": "ErrorDefinition",
        "src": "302:23:64",
        "nodes": [],
        "errorSelector": "415900e2",
        "name": "ShowtimePassed",
        "nameLocation": "308:14:64",
        "parameters": {
          "id": 52146,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "322:2:64"
        }
      },
      {
        "id": 52149,
        "nodeType": "ErrorDefinition",
        "src": "326:26:64",
        "nodes": [],
        "errorSelector": "3f583607",
        "name": "ShowtimeNotPassed",
        "nameLocation": "332:17:64",
        "parameters": {
          "id": 52148,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "349:2:64"
        }
      },
      {
        "id": 52151,
        "nodeType": "ErrorDefinition",
        "src": "353:27:64",
        "nodes": [],
        "errorSelector": "1103f79c",
        "name": "UnsortedSeatsInput",
        "nameLocation": "359:18:64",
        "parameters": {
          "id": 52150,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "377:2:64"
        }
      },
      {
        "id": 52153,
        "nodeType": "ErrorDefinition",
        "src": "381:22:64",
        "nodes": [],
        "errorSelector": "2c5211c6",
        "name": "InvalidAmount",
        "nameLocation": "387:13:64",
        "parameters": {
          "id": 52152,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "400:2:64"
        }
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 64
} as const;