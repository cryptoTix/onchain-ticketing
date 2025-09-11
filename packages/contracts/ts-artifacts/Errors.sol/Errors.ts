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
    "id": 56736,
    "exportedSymbols": {
      "AlreadyUsedData": [
        56715
      ],
      "CancellerNotOwner": [
        56727
      ],
      "InvalidAmount": [
        56735
      ],
      "InvalidAsset": [
        56721
      ],
      "InvalidInput": [
        56711
      ],
      "InvalidPurchaseData": [
        56717
      ],
      "NotAllowlistedAsset": [
        56723
      ],
      "ShowtimeNotPassed": [
        56731
      ],
      "ShowtimePassed": [
        56729
      ],
      "SignerNotOwner": [
        56725
      ],
      "StalePurchaseData": [
        56713
      ],
      "UnsortedSeatsInput": [
        56733
      ],
      "ZeroLength": [
        56719
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:353:72",
    "nodes": [
      {
        "id": 56709,
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
        "id": 56711,
        "nodeType": "ErrorDefinition",
        "src": "77:21:72",
        "nodes": [],
        "errorSelector": "b4fa3fb3",
        "name": "InvalidInput",
        "nameLocation": "83:12:72",
        "parameters": {
          "id": 56710,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "95:2:72"
        }
      },
      {
        "id": 56713,
        "nodeType": "ErrorDefinition",
        "src": "99:26:72",
        "nodes": [],
        "errorSelector": "f1b24311",
        "name": "StalePurchaseData",
        "nameLocation": "105:17:72",
        "parameters": {
          "id": 56712,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "122:2:72"
        }
      },
      {
        "id": 56715,
        "nodeType": "ErrorDefinition",
        "src": "126:24:72",
        "nodes": [],
        "errorSelector": "96c9d05f",
        "name": "AlreadyUsedData",
        "nameLocation": "132:15:72",
        "parameters": {
          "id": 56714,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "147:2:72"
        }
      },
      {
        "id": 56717,
        "nodeType": "ErrorDefinition",
        "src": "151:28:72",
        "nodes": [],
        "errorSelector": "a570c89c",
        "name": "InvalidPurchaseData",
        "nameLocation": "157:19:72",
        "parameters": {
          "id": 56716,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "176:2:72"
        }
      },
      {
        "id": 56719,
        "nodeType": "ErrorDefinition",
        "src": "180:19:72",
        "nodes": [],
        "errorSelector": "bf557497",
        "name": "ZeroLength",
        "nameLocation": "186:10:72",
        "parameters": {
          "id": 56718,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "196:2:72"
        }
      },
      {
        "id": 56721,
        "nodeType": "ErrorDefinition",
        "src": "200:21:72",
        "nodes": [],
        "errorSelector": "c891add2",
        "name": "InvalidAsset",
        "nameLocation": "206:12:72",
        "parameters": {
          "id": 56720,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "218:2:72"
        }
      },
      {
        "id": 56723,
        "nodeType": "ErrorDefinition",
        "src": "222:28:72",
        "nodes": [],
        "errorSelector": "45326c46",
        "name": "NotAllowlistedAsset",
        "nameLocation": "228:19:72",
        "parameters": {
          "id": 56722,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "247:2:72"
        }
      },
      {
        "id": 56725,
        "nodeType": "ErrorDefinition",
        "src": "251:23:72",
        "nodes": [],
        "errorSelector": "51c65eae",
        "name": "SignerNotOwner",
        "nameLocation": "257:14:72",
        "parameters": {
          "id": 56724,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "271:2:72"
        }
      },
      {
        "id": 56727,
        "nodeType": "ErrorDefinition",
        "src": "275:26:72",
        "nodes": [],
        "errorSelector": "508229e4",
        "name": "CancellerNotOwner",
        "nameLocation": "281:17:72",
        "parameters": {
          "id": 56726,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "298:2:72"
        }
      },
      {
        "id": 56729,
        "nodeType": "ErrorDefinition",
        "src": "302:23:72",
        "nodes": [],
        "errorSelector": "415900e2",
        "name": "ShowtimePassed",
        "nameLocation": "308:14:72",
        "parameters": {
          "id": 56728,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "322:2:72"
        }
      },
      {
        "id": 56731,
        "nodeType": "ErrorDefinition",
        "src": "326:26:72",
        "nodes": [],
        "errorSelector": "3f583607",
        "name": "ShowtimeNotPassed",
        "nameLocation": "332:17:72",
        "parameters": {
          "id": 56730,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "349:2:72"
        }
      },
      {
        "id": 56733,
        "nodeType": "ErrorDefinition",
        "src": "353:27:72",
        "nodes": [],
        "errorSelector": "1103f79c",
        "name": "UnsortedSeatsInput",
        "nameLocation": "359:18:72",
        "parameters": {
          "id": 56732,
          "nodeType": "ParameterList",
          "parameters": [],
          "src": "377:2:72"
        }
      },
      {
        "id": 56735,
        "nodeType": "ErrorDefinition",
        "src": "381:22:72",
        "nodes": [],
        "errorSelector": "2c5211c6",
        "name": "InvalidAmount",
        "nameLocation": "387:13:72",
        "parameters": {
          "id": 56734,
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