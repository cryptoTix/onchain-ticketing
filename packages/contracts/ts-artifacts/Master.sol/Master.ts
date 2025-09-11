export const Master = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "addCancelPolicy",
      "inputs": [
        {
          "name": "cancelPolicyId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "cancelPolicy",
          "type": "tuple",
          "internalType": "struct MasterLib.CancelPolicyMetadata",
          "components": [
            {
              "name": "policyMetadata",
              "type": "tuple[]",
              "internalType": "struct MasterLib.TimePercentage[]",
              "components": [
                {
                  "name": "durationLeft",
                  "type": "uint128",
                  "internalType": "uint128"
                },
                {
                  "name": "percentageWad",
                  "type": "uint128",
                  "internalType": "uint128"
                }
              ]
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "cancel",
      "inputs": [
        {
          "name": "ticketId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "cancelPartialTicket",
      "inputs": [
        {
          "name": "ticketId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "seatIdsToCancel",
          "type": "uint128[]",
          "internalType": "uint128[]"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "changeDefaultCancelPolicy",
      "inputs": [
        {
          "name": "cancelPolicy",
          "type": "tuple",
          "internalType": "struct MasterLib.CancelPolicyMetadata",
          "components": [
            {
              "name": "policyMetadata",
              "type": "tuple[]",
              "internalType": "struct MasterLib.TimePercentage[]",
              "components": [
                {
                  "name": "durationLeft",
                  "type": "uint128",
                  "internalType": "uint128"
                },
                {
                  "name": "percentageWad",
                  "type": "uint128",
                  "internalType": "uint128"
                }
              ]
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
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
      "type": "function",
      "name": "getApproved",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getCancellationAmount",
      "inputs": [
        {
          "name": "ticketId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "asset",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getNonce",
      "inputs": [
        {
          "name": "user",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPurchaseDataSignatureHash",
      "inputs": [
        {
          "name": "ticketData",
          "type": "tuple",
          "internalType": "struct TicketLib.State",
          "components": [
            {
              "name": "asset",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "showTime",
              "type": "uint96",
              "internalType": "uint96"
            },
            {
              "name": "owner",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "showId",
              "type": "uint96",
              "internalType": "uint96"
            },
            {
              "name": "originTimestamp",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "seats",
              "type": "tuple[]",
              "internalType": "struct TicketLib.SeatData[]",
              "components": [
                {
                  "name": "seatId",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "price",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ]
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getUserVerificationSignatureHash",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "initialize",
      "inputs": [
        {
          "name": "_owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "verifier",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "ttl",
          "type": "uint96",
          "internalType": "uint96"
        },
        {
          "name": "defaultCancelPolicy",
          "type": "tuple",
          "internalType": "struct MasterLib.CancelPolicyMetadata",
          "components": [
            {
              "name": "policyMetadata",
              "type": "tuple[]",
              "internalType": "struct MasterLib.TimePercentage[]",
              "components": [
                {
                  "name": "durationLeft",
                  "type": "uint128",
                  "internalType": "uint128"
                },
                {
                  "name": "percentageWad",
                  "type": "uint128",
                  "internalType": "uint128"
                }
              ]
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isValidRedeemSignature",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "signature",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerOf",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "purchase",
      "inputs": [
        {
          "name": "ticketOwner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "purchaseData",
          "type": "tuple",
          "internalType": "struct PurchaseLib.PurchaseData",
          "components": [
            {
              "name": "ticketData",
              "type": "tuple",
              "internalType": "struct TicketLib.State",
              "components": [
                {
                  "name": "asset",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "showTime",
                  "type": "uint96",
                  "internalType": "uint96"
                },
                {
                  "name": "owner",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "showId",
                  "type": "uint96",
                  "internalType": "uint96"
                },
                {
                  "name": "originTimestamp",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "amount",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "seats",
                  "type": "tuple[]",
                  "internalType": "struct TicketLib.SeatData[]",
                  "components": [
                    {
                      "name": "seatId",
                      "type": "uint256",
                      "internalType": "uint256"
                    },
                    {
                      "name": "price",
                      "type": "uint256",
                      "internalType": "uint256"
                    }
                  ]
                }
              ]
            },
            {
              "name": "nonce",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "name": "signature",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [
        {
          "name": "ticketId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "redeem",
      "inputs": [
        {
          "name": "ticketIds",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "data",
          "type": "bytes",
          "internalType": "bytes"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setCancelPolicyIdForShowId",
      "inputs": [
        {
          "name": "showId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "policyId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenURI",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawAssets",
      "inputs": [
        {
          "name": "assets",
          "type": "address[]",
          "internalType": "address[]"
        },
        {
          "name": "benefactor",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "CancelledTicket",
      "inputs": [
        {
          "name": "ticketId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
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
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AlreadyUsedData",
      "inputs": []
    },
    {
      "type": "error",
      "name": "CancellerNotOwner",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ERC721IncorrectOwner",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InsufficientApproval",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidApprover",
      "inputs": [
        {
          "name": "approver",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidOperator",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidOwner",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidReceiver",
      "inputs": [
        {
          "name": "receiver",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidSender",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC721NonexistentToken",
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "InvalidAmount",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidInitialization",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidInput",
      "inputs": []
    },
    {
      "type": "error",
      "name": "InvalidPurchaseData",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotInitializing",
      "inputs": []
    },
    {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "error",
      "name": "Reentrancy",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ShowtimeNotPassed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ShowtimePassed",
      "inputs": []
    },
    {
      "type": "error",
      "name": "StalePurchaseData",
      "inputs": []
    },
    {
      "type": "error",
      "name": "UnsortedSeatsInput",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ZeroLength",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x6080806040523460d0577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460ff8160401c1660c1576002600160401b03196001600160401b03821601605c575b60405161334390816100d58239f35b6001600160401b0319166001600160401b039081177ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005581527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a15f80604d565b63f92ee8a960e01b5f5260045ffd5b5f80fdfe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a714611bb35750806306fdde0314611ad0578063081812fc14611a87578063095ea7b31461199b57806323b872dd146119845780632566fd46146118bc5780632d0335ab1461189957806336b7c9171461187b5780634038ef351461183b57806340e58ee5146117cf57806342842e0e146117a05780635b2ae331146111d55780636352211e146111a557806370a0823114611156578063715018a6146110ef578063848c4266146110bb57806384b0196e14610f715780638b660a2114610f2f5780638da5cb5b14610efb57806395d89b4114610ddf578063a22cb46514610d47578063a23cab2014610cf9578063b88d4fde14610c9d578063c55dea6114610761578063c87b56dd14610704578063e6828586146106a6578063e985e9c514610659578063eb46d109146103ae578063ebeec6ab146102b4578063f2fde38b146102875763f9afb26a14610173575f80fd5b34610284576020366003190112610284576004356001600160401b0381116102805736602382011215610280578060040135906101af82611d13565b916101bd6040519384611cf2565b8083526024602084019160051b8301019136831161027c57602401905b82821061026c5750505080511561025d57815b8151811015610259576102096102038284612648565b51612e29565b61021c6102168284612648565b516129b0565b805490428260a01c1161024a57600301546001929161024491906001600160a01b0316612d3e565b016101ed565b633f58360760e01b8552600485fd5b8280f35b63bf55749760e01b8252600482fd5b81358152602091820191016101da565b8480fd5b5080fd5b80fd5b5034610284576020366003190112610284576102b16102a4611c42565b6102ac61273d565b61269d565b80f35b5034610284576040366003190112610284576004356001600160401b0381116102805736602382011215610280578060040135906102f182611d13565b916102ff6040519384611cf2565b8083526024602084019160051b8301019136831161027c57602401905b8282106103965750505061032e611c58565b9061033761273d565b825b8151811015610392576001906103616001600160a01b0361035a8386612648565b511661306e565b809150610370575b5001610339565b61038c9085848060a01b036103858588612648565b5116612dd8565b5f610369565b8380f35b602080916103a384611c6e565b81520191019061031c565b50346102845760403660031901126102845760043590602435906001600160401b0382116102845736602383011215610284578160040135916103f083611d13565b926103fe6040519485611cf2565b8084526024602085019160051b8301019136831161065557602401905b82821061063d5750505061042e8361270e565b336001600160a01b039091160361062e5781511561061f5761044f836129b0565b90815460a01c421161061057809392939181829560048301965b87548082101561058d576001600160801b036104858885612648565b5116610491838b61265c565b5054146104a2575b50600101610469565b926104bf9060016104b6848c9a959a61265c565b50015490612675565b925f198101908111610579576104d5908961265c565b506104e0878a61265c565b91909161056557808203610551575b50508754801561053d575f190190610507828a61265c565b91909161052a576001925f846105239482815501558a5561268f565b9590610499565b634e487b7160e01b5f525f60045260245ffd5b634e487b7160e01b86526031600452602486fd5b600181819254845501549101555f806104ef565b634e487b7160e01b87526004879052602487fd5b634e487b7160e01b86526011600452602486fd5b50509186858794510361060157546105aa5750506102b1906128e2565b916105fb8360036102b195016105c1858254612682565b90556105eb6105d08583612a1b565b946105e58660018060a01b0385541692612682565b90612d3e565b546001600160a01b0316916129f5565b90612dd8565b63b4fa3fb360e01b8552600485fd5b6320ac807160e11b8152600490fd5b63bf55749760e01b8152600490fd5b6314208a7960e21b8152600490fd5b6020809161064a84611d2a565b81520191019061041b565b8380fd5b503461028457604036600319011261028457610673611c42565b61068461067e611c58565b91612376565b9060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346102845760403660031901126102845760043590602435906001600160401b0382116102845760206106fa846106e13660048701611f3b565b906106f46106ee826129f5565b916122cb565b90612c63565b6040519015158152f35b3461075d57602036600319011261075d5761072060043561270e565b505f604051610730602082611cf2565b52610759604051610742602082611cf2565b5f8152604051918291602083526020830190611c1e565b0390f35b5f80fd5b3461075d57608036600319011261075d5761077a611c42565b610782611c58565b90604435906001600160601b038216820361075d576064356001600160401b03811161075d576107b6903690600401611d3e565b5f805160206132ee8339815191525460ff8160401c1615926001600160401b03821680159081610c95575b6001149081610c8b575b159081610c82575b50610c735767ffffffffffffffff1982166001175f805160206132ee833981519152556108319184610c47575b50610829612f7c565b6102ac612f7c565b6040928351946108418587611cf2565b600c86526b50757263686173654461746160a01b60208701528451956108678688611cf2565b60058752640312e302e360dc1b6020880152610881612f7c565b610889612f7c565b8051906001600160401b038211610b305781906108b35f8051602061322e83398151915254611f81565b601f8111610bcd575b50602090601f8311600114610b4f575f92610b44575b50508160011b915f199060031b1c1916175f8051602061322e833981519152555b85516001600160401b038111610b305761091a5f8051602061326e83398151915254611f81565b601f8111610ac1575b506020601f8211600114610a405781906109d99697985f92610a35575b50508160011b915f199060031b1c1916175f8051602061326e833981519152555b5f7fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1008190557fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1015560a09190911b6001600160a01b0319166001600160a01b0391909116175f8051602061328e8339815191525561285a565b6109df57005b60207fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29168ff0000000000000000195f805160206132ee83398151915254165f805160206132ee833981519152555160018152a1005b015190508880610940565b601f198216975f8051602061326e8339815191525f52815f20985f5b818110610aa95750916109d997989991846001959410610a91575b505050811b015f8051602061326e83398151915255610961565b01515f1960f88460031b161c19169055888080610a77565b838301518b556001909a019960209384019301610a5c565b5f8051602061326e8339815191525f527f5f9ce34815f8e11431c7bb75a8e6886a91478f7ffc1dbb0a98dc240fddd76b75601f830160051c81019160208410610b26575b601f0160051c01905b818110610b1b5750610923565b5f8155600101610b0e565b9091508190610b05565b634e487b7160e01b5f52604160045260245ffd5b0151905088806108d2565b5f8051602061322e8339815191525f9081528281209350601f198516905b818110610bb55750908460019594939210610b9d575b505050811b015f8051602061322e833981519152556108f3565b01515f1960f88460031b161c19169055888080610b83565b92936020600181928786015181550195019301610b6d565b5f8051602061322e8339815191525f529091507f42ad5d3e1f2e6e70edcf6d991b8a3023d3fca8047a131592f9edb9fd9b89d57d601f840160051c81019160208510610c3d575b90601f859493920160051c01905b818110610c2f57506108bc565b5f8155849350600101610c22565b9091508190610c14565b68ffffffffffffffffff191668010000000000000001175f805160206132ee8339815191525586610820565b63f92ee8a960e01b5f5260045ffd5b905015876107f3565b303b1591506107eb565b8591506107e1565b3461075d57608036600319011261075d57610cb6611c42565b610cbe611c58565b90604435606435926001600160401b03841161075d57610ce5610cf7943690600401611f3b565b92610cf1838383612135565b33612b66565b005b3461075d57604036600319011261075d57610d1261273d565b6004355f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910760205260243560405f20555f80f35b3461075d57604036600319011261075d57610d60611c42565b6024359081151580920361075d576001600160a01b0316908115610dcc57610d8733612376565b825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b3461075d575f36600319011261075d576040515f7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930154610e1e81611f81565b8084529060018116908115610ed75750600114610e5a575b61075983610e4681850382611cf2565b604051918291602083526020830190611c1e565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793015f9081527ff4bad0a69248f59680a4f2b3000328cec71a413447c96781cfe5996daa8c456e939250905b808210610ebd57509091508101602001610e46610e36565b919260018160209254838588010152019101909291610ea5565b60ff191660208086019190915291151560051b84019091019150610e469050610e36565b3461075d575f36600319011261075d575f8051602061324e833981519152546040516001600160a01b039091168152602090f35b3461075d57602036600319011261075d576004356001600160401b03811161075d57610f69610f646020923690600401611e1c565b6123f3565b604051908152f35b3461075d575f36600319011261075d577fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d100541580611092575b1561105557610ff9610fba611fb9565b610fc2612088565b602061100760405192610fd58385611cf2565b5f84525f368137604051958695600f60f81b875260e08588015260e0870190611c1e565b908582036040870152611c1e565b4660608501523060808501525f60a085015283810360c08501528180845192838152019301915f5b82811061103e57505050500390f35b83518552869550938101939281019260010161102f565b60405162461bcd60e51b81526020600482015260156024820152741152540dcc4c8e88155b9a5b9a5d1a585b1a5e9959605a1b6044820152606490fd5b507fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1015415610faa565b3461075d57602036600319011261075d5760406110d96004356123ae565b82516001600160a01b0390921682526020820152f35b3461075d575f36600319011261075d5761110761273d565b5f8051602061324e83398151915280546001600160a01b031981169091555f906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b3461075d57602036600319011261075d5761116f611c42565b6001600160a01b038116156111925761118960209161233e565b54604051908152f35b6322718ad960e21b5f525f60045260245ffd5b3461075d57602036600319011261075d5760206111c36004356129f5565b6040516001600160a01b039091168152f35b3461075d57606036600319011261075d576111ee611c42565b506024356001600160401b03811161075d576040600319823603011261075d576040519061121b82611cbc565b80600401356001600160401b03811161075d5761123e9060043691840101611e1c565b825260246020830191013581526044356001600160401b03811161075d5761126a903690600401611f3b565b913068929eee149b4bd212685414611793573068929eee149b4bd212685561129281516123f3565b9160c0825101515115611784576112c06080835101515f8051602061328e8339815191525460a01c90612675565b421161177557518151604001516112df906001600160a01b0316612306565b54036117665760c081510151805115611752576020809101510151926001935b60c0835101518051861015611387578561131891612648565b5151835160c001515f1987018781116113735761133491612648565b515110156113645761135c60019160206113538860c088510151612648565b51015190612675565b9401936112ff565b630440fde760e21b5f5260045ffd5b634e487b7160e01b5f52601160045260245ffd5b5060a08351015103611743578151604001516113db91906113b0906001600160a01b0316612306565b6113ba815461268f565b90555f8051602061328e8339815191525484906001600160a01b0316612c63565b1561173457906113ea816129b0565b8251805160a08083015160038501556040830151608084015160028601556060840151821b6001600160a01b03199081166001600160a01b03928316176001870155602085015190921b909116911617825560049091019260c0909101905f5b825180518210156114bf578161145f91612648565b515190602061146f828651612648565b510151916040519061148082611cbc565b8152602081019283528654600160401b811015610b30578060016114a7920189558861265c565b91909161052a5751815591516001928301550161144a565b848360018060a01b0360408251015116916020916040516114e08482611cf2565b5f81528415611721576114f2836129f5565b6001600160a01b03811680151591908590889084611703575b6115148261233e565b805460010190555f8381525f805160206132ae8339815191528a526040812080546001600160a01b0319166001600160a01b0385161790557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9080a4506116f057843b611601575b5051805160a090910151604080516060928352309091523390911b602c526323b872dd60601b600c529293506001600160a01b0316835f6064601c82855af1908160015f511416156115e3575b50505f606052816040523868929eee149b4bd21268558152f35b3b153d1710156115f45783806115c9565b637939f4245f526004601cfd5b8361163a9160405180938192630a85bd0160e11b83523360048401525f6024840152876044840152608060648401526084830190611c1e565b03815f895af15f91816116b0575b5061167657505050611658612b37565b805191826116735783633250574960e11b5f5260045260245ffd5b01fd5b929391929091906001600160e01b03191663757a42ff60e11b0161169e57509082918461157c565b633250574960e11b5f5260045260245ffd5b9091508481813d83116116e9575b6116c88183611cf2565b8101031261075d57516001600160e01b03198116810361075d579086611648565b503d6116be565b6339e3563760e11b5f525f60045260245ffd5b61170c83612ebb565b6117158461233e565b80545f1901905561150b565b633250574960e11b5f525f60045260245ffd5b63295c322760e21b5f5260045ffd5b63162908e360e11b5f5260045ffd5b634e487b7160e01b5f52603260045260245ffd5b6396c9d05f60e01b5f5260045ffd5b63f1b2431160e01b5f5260045ffd5b63bf55749760e01b5f5260045ffd5b63ab143c065f526004601cfd5b3461075d57610cf76117b136611c82565b90604051926117c1602085611cf2565b5f8452610cf1838383612135565b3461075d57602036600319011261075d576004356117ec8161270e565b336001600160a01b039091160361182c57611806816128e2565b7fe115e3c2ed2f591ca658dee1fa064a06d8bb613db408bdcd32808bf1021121fd5f80a2005b6314208a7960e21b5f5260045ffd5b3461075d57602036600319011261075d576004356001600160401b03811161075d5761186e610cf7913690600401611d3e565b61187661273d565b61285a565b3461075d57602036600319011261075d576020610f696004356122cb565b3461075d57602036600319011261075d5760206111896118b7611c42565b612306565b3461075d57604036600319011261075d576004356024356001600160401b03811161075d576118ef903690600401611d3e565b906118f861273d565b5f5b825151811015610cf757600190825f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910860205261197e60405f206001600160801b03611948848851612648565b515116906001600160801b036020611961868a51612648565b510151166040519261197284611cbc565b83526020830152612785565b016118fa565b3461075d57610cf761199536611c82565b91612135565b3461075d57604036600319011261075d576119b4611c42565b6024356119c08161270e565b33151580611a74575b80611a51575b611a3e5781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f9081525f805160206132ce8339815191526020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b50611a5b81612376565b335f908152602091909152604090205460ff16156119cf565b506001600160a01b0381163314156119c9565b3461075d57602036600319011261075d5760206111c3600435611aa98161270e565b505f9081525f805160206132ce83398151915260205260409020546001600160a01b031690565b3461075d575f36600319011261075d576040515f7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930054611b0f81611f81565b8084529060018116908115610ed75750600114611b365761075983610e4681850382611cf2565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793005f9081527f37c58c799b6609234b945e882912ee9ad34948a1dfaa20a97485e1a7752bbf81939250905b808210611b9957509091508101602001610e46610e36565b919260018160209254838588010152019101909291611b81565b3461075d57602036600319011261075d576004359063ffffffff60e01b821680920361075d576020916380ac58cd60e01b8114908115611c0d575b8115611bfc575b5015158152f35b6301ffc9a760e01b14905083611bf5565b635b5e139f60e01b81149150611bee565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361075d57565b602435906001600160a01b038216820361075d57565b35906001600160a01b038216820361075d57565b606090600319011261075d576004356001600160a01b038116810361075d57906024356001600160a01b038116810361075d579060443590565b604081019081106001600160401b03821117610b3057604052565b60e081019081106001600160401b03821117610b3057604052565b90601f801991011681019081106001600160401b03821117610b3057604052565b6001600160401b038111610b305760051b60200190565b35906001600160801b038216820361075d57565b919060208382031261075d57604051602081018181106001600160401b03821117610b305760405280938035906001600160401b03821161075d570182601f8201121561075d57803590611d9182611d13565b93611d9f6040519586611cf2565b82855260208086019360061b8301019181831161075d57602001925b828410611dc9575050505052565b60408483031261075d5760206040918251611de381611cbc565b611dec87611d2a565b8152611df9838801611d2a565b83820152815201930192611dbb565b35906001600160601b038216820361075d57565b919060e08382031261075d57604051611e3481611cd7565b8093611e3f81611c6e565b8252611e4d60208201611e08565b6020830152611e5e60408201611c6e565b6040830152611e6f60608201611e08565b60608301526080810135608083015260a081013560a083015260c0810135906001600160401b03821161075d570182601f8201121561075d57803590611eb482611d13565b93611ec26040519586611cf2565b82855260208086019360061b8301019181831161075d57602001925b828410611eef575050505060c00152565b60408483031261075d5760206040918251611f0981611cbc565b863581528287013583820152815201930192611ede565b6001600160401b038111610b3057601f01601f191660200190565b81601f8201121561075d57803590611f5282611f20565b92611f606040519485611cf2565b8284526020838301011161075d57815f926020809301838601378301015290565b90600182811c92168015611faf575b6020831014611f9b57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691611f90565b604051905f825f8051602061322e8339815191525491611fd883611f81565b80835292600181169081156120695750600114611ffe575b611ffc92500383611cf2565b565b505f8051602061322e8339815191525f90815290917f42ad5d3e1f2e6e70edcf6d991b8a3023d3fca8047a131592f9edb9fd9b89d57d5b81831061204d575050906020611ffc92820101611ff0565b6020919350806001915483858901015201910190918492612035565b60209250611ffc94915060ff191682840152151560051b820101611ff0565b604051905f825f8051602061326e83398151915254916120a783611f81565b808352926001811690811561206957506001146120ca57611ffc92500383611cf2565b505f8051602061326e8339815191525f90815290917f5f9ce34815f8e11431c7bb75a8e6886a91478f7ffc1dbb0a98dc240fddd76b755b818310612119575050906020611ffc92820101611ff0565b6020919350806001915483858901015201910190918492612101565b9091906001600160a01b03831680156117215782612152816129f5565b9133151580612218575b506001600160a01b0383169561217690876121fa5761233e565b60018154019055815f525f805160206132ae83398151915260205260405f20816001600160601b0360a01b825416179055857fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a4506001600160a01b03168083036121e257505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b61220384612ebb565b61220c8561233e565b80545f1901905561233e565b90915080612265575b1561222e5783905f61215c565b836001600160a01b03831661224f57637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b506001600160a01b038216331480156122a9575b8061222157505f8481525f805160206132ce83398151915260205260409020546001600160a01b03163314612221565b506122b382612376565b335f908152602091909152604090205460ff16612279565b61230390604051602081019182525f8051602061328e8339815191526040820152604081526122fb606082611cf2565b5190206127d8565b90565b6001600160a01b03165f9081527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491026020526040902090565b6001600160a01b03165f9081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793036020526040902090565b6001600160a01b03165f9081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793056020526040902090565b6123b7906129b0565b90815491428360a01c106123e25760038101546123d391612a1b565b6001600160a01b039092169190565b506001600160a01b03909116905f90565b6040516123ff81611cbc565b606060c060405161240f81611cd7565b5f81525f60208201525f60408201525f838201525f60808201525f60a0820152015261245160208201925f8452808352604060018060a01b0391015116612306565b548252519160c08301918251519161248161246b84611d13565b936124796040519586611cf2565b808552611d13565b602084019290601f19013684375f5b8551805182101561250957906124a881600193612648565b51602081519101516040519060208201927f4d6d71adfc17b3de431a7ee2d19c022dab3eedf440a21d498caa93004c3779cd845260408301526060820152606081526124f5608082611cf2565b5190206125028288612648565b5201612490565b50509290935093909360018060a01b03825116916001600160601b036020820151169160018060a01b03604083015116916001600160601b0360608201511660a060808301519201519260405160208101809251909b905f5b81811061263257505050612583816123039b9c03601f198101835282611cf2565b519020936040519560208701977ff17dd68a00b2be2147d33ba0d20d668ed959f8f96c8c31e5bb3b514cc986f7da895260408801526060870152608086015260a085015260c084015260e083015261010082015261010081526125e861012082611cf2565b51902090516040519060208201927f5eeba348e87f74b3090f081535f241f64be8aab1e431e4dc62332dec5b81d104845260408301526060820152606081526122fb608082611cf2565b82518e5260209d8e019d90920191600101612562565b80518210156117525760209160051b010190565b8054821015611752575f5260205f209060011b01905f90565b9190820180921161137357565b9190820391821161137357565b5f1981146113735760010190565b6001600160a01b031680156126fb575f8051602061324e83398151915280546001600160a01b0319811683179091556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3565b631e4fbdf760e01b5f525f60045260245ffd5b612717816129f5565b906001600160a01b0382161561272b575090565b637e27328960e01b5f5260045260245ffd5b5f8051602061324e833981519152546001600160a01b0316330361275d57565b63118cdaa760e01b5f523360045260245ffd5b8054821015611752575f5260205f2001905f90565b8054600160401b811015610b30576127a291600182018155612770565b91909161052a57805160209091015160801b6fffffffffffffffffffffffffffffffff19166001600160801b0391909116179055565b6042906127e361311d565b6127eb613187565b6040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815261283c60c082611cf2565b519020906040519161190160f01b8352600283015260228201522090565b905f5b825180518210156128dc57906128d66001600160801b0361288083600195612648565b5151166001600160801b036020612898858951612648565b51015116604051916128a983611cbc565b825260208201527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649109612785565b0161285d565b50509050565b5f6128ec826129f5565b61293b6128f8846129b0565b93600385019261292b845492612926612911858a612a1b565b946105e58660018060a01b038c541692612682565b612e29565b85546001600160a01b0316612dd8565b818355556001810180546001600160a01b031681556004820180545f82559081612979575b505080546001600160a01b03191690555f600290910155565b6001600160ff1b0382168203611373575f5260205f209060011b8101905b81811015612960575f8082556001820155600201612997565b60405160208101917fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910183526040820152604081526129ef606082611cf2565b51902090565b5f9081525f805160206132ae83398151915260205260409020546001600160a01b031690565b600181015460a01c5f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910760205260405f205480155f14612b0757507fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649109905b5460a01c428111612a8c575050505f90565b612a97904290612682565b915f8254905b81811080612aea575b15612ab957612ab49061268f565b612a9d565b919293508114612adc575b612ad19061230393612770565b505460801c90612ee4565b8015611373575f1901612ac4565b506001600160801b03612afd8286612770565b5054168511612aa6565b5f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910860205260405f2090612a7a565b3d15612b61573d90612b4882611f20565b91612b566040519384611cf2565b82523d5f602084013e565b606090565b823b612b74575b5050505050565b604051630a85bd0160e11b81526001600160a01b039182166004820152918116602483015260448201939093526080606482015291169160209082908190612bc0906084830190611c1e565b03815f865af15f9181612c1e575b50612bfc5750612bdc612b37565b80519081612bf75782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b0161169e57505f80808080612b6d565b9091506020813d602011612c5b575b81612c3a60209383611cf2565b8101031261075d57516001600160e01b03198116810361075d57905f612bce565b3d9150612c2d565b9190823b612cb25790612c7591612fa7565b506004811015612c9e57159182612c8b57505090565b6001600160a01b03918216911614919050565b634e487b7160e01b5f52602160045260245ffd5b915f92612ce8612cf685946040519283916020830195630b135d3f60e11b87526024840152604060448401526064830190611c1e565b03601f198101835282611cf2565b51915afa612d02612b37565b81612d30575b81612d11575090565b905060208180518101031261075d5760200151630b135d3f60e11b1490565b905060208151101590612d08565b612dd5916001600160a01b0390911690612d8390612d7c837fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491046130dd565b9050612675565b815f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910660205260405f20557fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491046131cc565b50565b919060145260345263a9059cbb60601b5f5260205f6044601082855af1908160015f51141615612e0b575b50505f603452565b3b153d171015612e1c575f80612e03565b6390b8ec185f526004601cfd5b612e32816129f5565b6001600160a01b0381168015919083905f908415612e9d575b8282525f805160206132ae8339815191526020526040822080546001600160a01b03191690557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8280a45061272b5750565b612ea683612ebb565b612eaf8461233e565b82198154019055612e4b565b5f525f805160206132ce83398151915260205260405f206001600160601b0360a01b8154169055565b9190915f838202915f1985820991838084109303928084039314612f68578268056bc75e2d631000001115612f5657507f2fdf29ec6a12d6f7bf48d6861d4b553283e011b18b576460d489e3a9addec2d1939468056bc75e2d63100000910990828211900360ec1b910360141c170290565b634e487b71905260116020526024601cfd5b50505068056bc75e2d631000009192500490565b60ff5f805160206132ee8339815191525460401c1615612f9857565b631afcd79f60e31b5f5260045ffd5b8151919060418303612fd757612fd09250602082015190606060408401519301515f1a90612fe1565b9192909190565b50505f9160029190565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411613063579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15613058575f516001600160a01b0381161561304e57905f905f90565b505f906001905f90565b6040513d5f823e3d90fd5b5050505f9160039190565b805f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910660205260405f205480155f146130d557505f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910560205260405f20541515905f90565b600192909150565b9190805f526002830160205260405f20549283155f14613115576131109293506001915f520160205260405f2054151590565b905f90565b505060019190565b613125611fb9565b8051908115613135576020012090565b50507fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1005480156131625790565b507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47090565b61318f612088565b805190811561319f576020012090565b50507fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1015480156131625790565b5f82815260018201602052604090205461322757805490600160401b821015610b3057613200826001809401835582612770565b81549060031b9085821b915f19901b19161790558054925f520160205260405f2055600190565b50505f9056fea16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1029016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300a16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d103a850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910080bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930280bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079304f0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00a2646970667358221220a7f76d1495ee59c52d1386e5a219c11d756ba89daa2090f4e9005659164d517064736f6c634300081a0033",
    "sourceMap": "890:9192:66:-:0;;;;;;;8837:64:25;890:9192:66;;;;;;7896:76:25;;-1:-1:-1;;;;;;;;;;;890:9192:66;;7985:34:25;7981:146;;-1:-1:-1;890:9192:66;;;;;;;;;7981:146:25;-1:-1:-1;;;;;;890:9192:66;-1:-1:-1;;;;;890:9192:66;;;8837:64:25;890:9192:66;;;8087:29:25;;890:9192:66;;8087:29:25;7981:146;;;;7896:76;7938:23;;;-1:-1:-1;7938:23:25;;-1:-1:-1;7938:23:25;890:9192:66;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a714611bb35750806306fdde0314611ad0578063081812fc14611a87578063095ea7b31461199b57806323b872dd146119845780632566fd46146118bc5780632d0335ab1461189957806336b7c9171461187b5780634038ef351461183b57806340e58ee5146117cf57806342842e0e146117a05780635b2ae331146111d55780636352211e146111a557806370a0823114611156578063715018a6146110ef578063848c4266146110bb57806384b0196e14610f715780638b660a2114610f2f5780638da5cb5b14610efb57806395d89b4114610ddf578063a22cb46514610d47578063a23cab2014610cf9578063b88d4fde14610c9d578063c55dea6114610761578063c87b56dd14610704578063e6828586146106a6578063e985e9c514610659578063eb46d109146103ae578063ebeec6ab146102b4578063f2fde38b146102875763f9afb26a14610173575f80fd5b34610284576020366003190112610284576004356001600160401b0381116102805736602382011215610280578060040135906101af82611d13565b916101bd6040519384611cf2565b8083526024602084019160051b8301019136831161027c57602401905b82821061026c5750505080511561025d57815b8151811015610259576102096102038284612648565b51612e29565b61021c6102168284612648565b516129b0565b805490428260a01c1161024a57600301546001929161024491906001600160a01b0316612d3e565b016101ed565b633f58360760e01b8552600485fd5b8280f35b63bf55749760e01b8252600482fd5b81358152602091820191016101da565b8480fd5b5080fd5b80fd5b5034610284576020366003190112610284576102b16102a4611c42565b6102ac61273d565b61269d565b80f35b5034610284576040366003190112610284576004356001600160401b0381116102805736602382011215610280578060040135906102f182611d13565b916102ff6040519384611cf2565b8083526024602084019160051b8301019136831161027c57602401905b8282106103965750505061032e611c58565b9061033761273d565b825b8151811015610392576001906103616001600160a01b0361035a8386612648565b511661306e565b809150610370575b5001610339565b61038c9085848060a01b036103858588612648565b5116612dd8565b5f610369565b8380f35b602080916103a384611c6e565b81520191019061031c565b50346102845760403660031901126102845760043590602435906001600160401b0382116102845736602383011215610284578160040135916103f083611d13565b926103fe6040519485611cf2565b8084526024602085019160051b8301019136831161065557602401905b82821061063d5750505061042e8361270e565b336001600160a01b039091160361062e5781511561061f5761044f836129b0565b90815460a01c421161061057809392939181829560048301965b87548082101561058d576001600160801b036104858885612648565b5116610491838b61265c565b5054146104a2575b50600101610469565b926104bf9060016104b6848c9a959a61265c565b50015490612675565b925f198101908111610579576104d5908961265c565b506104e0878a61265c565b91909161056557808203610551575b50508754801561053d575f190190610507828a61265c565b91909161052a576001925f846105239482815501558a5561268f565b9590610499565b634e487b7160e01b5f525f60045260245ffd5b634e487b7160e01b86526031600452602486fd5b600181819254845501549101555f806104ef565b634e487b7160e01b87526004879052602487fd5b634e487b7160e01b86526011600452602486fd5b50509186858794510361060157546105aa5750506102b1906128e2565b916105fb8360036102b195016105c1858254612682565b90556105eb6105d08583612a1b565b946105e58660018060a01b0385541692612682565b90612d3e565b546001600160a01b0316916129f5565b90612dd8565b63b4fa3fb360e01b8552600485fd5b6320ac807160e11b8152600490fd5b63bf55749760e01b8152600490fd5b6314208a7960e21b8152600490fd5b6020809161064a84611d2a565b81520191019061041b565b8380fd5b503461028457604036600319011261028457610673611c42565b61068461067e611c58565b91612376565b9060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346102845760403660031901126102845760043590602435906001600160401b0382116102845760206106fa846106e13660048701611f3b565b906106f46106ee826129f5565b916122cb565b90612c63565b6040519015158152f35b3461075d57602036600319011261075d5761072060043561270e565b505f604051610730602082611cf2565b52610759604051610742602082611cf2565b5f8152604051918291602083526020830190611c1e565b0390f35b5f80fd5b3461075d57608036600319011261075d5761077a611c42565b610782611c58565b90604435906001600160601b038216820361075d576064356001600160401b03811161075d576107b6903690600401611d3e565b5f805160206132ee8339815191525460ff8160401c1615926001600160401b03821680159081610c95575b6001149081610c8b575b159081610c82575b50610c735767ffffffffffffffff1982166001175f805160206132ee833981519152556108319184610c47575b50610829612f7c565b6102ac612f7c565b6040928351946108418587611cf2565b600c86526b50757263686173654461746160a01b60208701528451956108678688611cf2565b60058752640312e302e360dc1b6020880152610881612f7c565b610889612f7c565b8051906001600160401b038211610b305781906108b35f8051602061322e83398151915254611f81565b601f8111610bcd575b50602090601f8311600114610b4f575f92610b44575b50508160011b915f199060031b1c1916175f8051602061322e833981519152555b85516001600160401b038111610b305761091a5f8051602061326e83398151915254611f81565b601f8111610ac1575b506020601f8211600114610a405781906109d99697985f92610a35575b50508160011b915f199060031b1c1916175f8051602061326e833981519152555b5f7fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1008190557fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1015560a09190911b6001600160a01b0319166001600160a01b0391909116175f8051602061328e8339815191525561285a565b6109df57005b60207fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29168ff0000000000000000195f805160206132ee83398151915254165f805160206132ee833981519152555160018152a1005b015190508880610940565b601f198216975f8051602061326e8339815191525f52815f20985f5b818110610aa95750916109d997989991846001959410610a91575b505050811b015f8051602061326e83398151915255610961565b01515f1960f88460031b161c19169055888080610a77565b838301518b556001909a019960209384019301610a5c565b5f8051602061326e8339815191525f527f5f9ce34815f8e11431c7bb75a8e6886a91478f7ffc1dbb0a98dc240fddd76b75601f830160051c81019160208410610b26575b601f0160051c01905b818110610b1b5750610923565b5f8155600101610b0e565b9091508190610b05565b634e487b7160e01b5f52604160045260245ffd5b0151905088806108d2565b5f8051602061322e8339815191525f9081528281209350601f198516905b818110610bb55750908460019594939210610b9d575b505050811b015f8051602061322e833981519152556108f3565b01515f1960f88460031b161c19169055888080610b83565b92936020600181928786015181550195019301610b6d565b5f8051602061322e8339815191525f529091507f42ad5d3e1f2e6e70edcf6d991b8a3023d3fca8047a131592f9edb9fd9b89d57d601f840160051c81019160208510610c3d575b90601f859493920160051c01905b818110610c2f57506108bc565b5f8155849350600101610c22565b9091508190610c14565b68ffffffffffffffffff191668010000000000000001175f805160206132ee8339815191525586610820565b63f92ee8a960e01b5f5260045ffd5b905015876107f3565b303b1591506107eb565b8591506107e1565b3461075d57608036600319011261075d57610cb6611c42565b610cbe611c58565b90604435606435926001600160401b03841161075d57610ce5610cf7943690600401611f3b565b92610cf1838383612135565b33612b66565b005b3461075d57604036600319011261075d57610d1261273d565b6004355f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910760205260243560405f20555f80f35b3461075d57604036600319011261075d57610d60611c42565b6024359081151580920361075d576001600160a01b0316908115610dcc57610d8733612376565b825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b3461075d575f36600319011261075d576040515f7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930154610e1e81611f81565b8084529060018116908115610ed75750600114610e5a575b61075983610e4681850382611cf2565b604051918291602083526020830190611c1e565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793015f9081527ff4bad0a69248f59680a4f2b3000328cec71a413447c96781cfe5996daa8c456e939250905b808210610ebd57509091508101602001610e46610e36565b919260018160209254838588010152019101909291610ea5565b60ff191660208086019190915291151560051b84019091019150610e469050610e36565b3461075d575f36600319011261075d575f8051602061324e833981519152546040516001600160a01b039091168152602090f35b3461075d57602036600319011261075d576004356001600160401b03811161075d57610f69610f646020923690600401611e1c565b6123f3565b604051908152f35b3461075d575f36600319011261075d577fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d100541580611092575b1561105557610ff9610fba611fb9565b610fc2612088565b602061100760405192610fd58385611cf2565b5f84525f368137604051958695600f60f81b875260e08588015260e0870190611c1e565b908582036040870152611c1e565b4660608501523060808501525f60a085015283810360c08501528180845192838152019301915f5b82811061103e57505050500390f35b83518552869550938101939281019260010161102f565b60405162461bcd60e51b81526020600482015260156024820152741152540dcc4c8e88155b9a5b9a5d1a585b1a5e9959605a1b6044820152606490fd5b507fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1015415610faa565b3461075d57602036600319011261075d5760406110d96004356123ae565b82516001600160a01b0390921682526020820152f35b3461075d575f36600319011261075d5761110761273d565b5f8051602061324e83398151915280546001600160a01b031981169091555f906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b3461075d57602036600319011261075d5761116f611c42565b6001600160a01b038116156111925761118960209161233e565b54604051908152f35b6322718ad960e21b5f525f60045260245ffd5b3461075d57602036600319011261075d5760206111c36004356129f5565b6040516001600160a01b039091168152f35b3461075d57606036600319011261075d576111ee611c42565b506024356001600160401b03811161075d576040600319823603011261075d576040519061121b82611cbc565b80600401356001600160401b03811161075d5761123e9060043691840101611e1c565b825260246020830191013581526044356001600160401b03811161075d5761126a903690600401611f3b565b913068929eee149b4bd212685414611793573068929eee149b4bd212685561129281516123f3565b9160c0825101515115611784576112c06080835101515f8051602061328e8339815191525460a01c90612675565b421161177557518151604001516112df906001600160a01b0316612306565b54036117665760c081510151805115611752576020809101510151926001935b60c0835101518051861015611387578561131891612648565b5151835160c001515f1987018781116113735761133491612648565b515110156113645761135c60019160206113538860c088510151612648565b51015190612675565b9401936112ff565b630440fde760e21b5f5260045ffd5b634e487b7160e01b5f52601160045260245ffd5b5060a08351015103611743578151604001516113db91906113b0906001600160a01b0316612306565b6113ba815461268f565b90555f8051602061328e8339815191525484906001600160a01b0316612c63565b1561173457906113ea816129b0565b8251805160a08083015160038501556040830151608084015160028601556060840151821b6001600160a01b03199081166001600160a01b03928316176001870155602085015190921b909116911617825560049091019260c0909101905f5b825180518210156114bf578161145f91612648565b515190602061146f828651612648565b510151916040519061148082611cbc565b8152602081019283528654600160401b811015610b30578060016114a7920189558861265c565b91909161052a5751815591516001928301550161144a565b848360018060a01b0360408251015116916020916040516114e08482611cf2565b5f81528415611721576114f2836129f5565b6001600160a01b03811680151591908590889084611703575b6115148261233e565b805460010190555f8381525f805160206132ae8339815191528a526040812080546001600160a01b0319166001600160a01b0385161790557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9080a4506116f057843b611601575b5051805160a090910151604080516060928352309091523390911b602c526323b872dd60601b600c529293506001600160a01b0316835f6064601c82855af1908160015f511416156115e3575b50505f606052816040523868929eee149b4bd21268558152f35b3b153d1710156115f45783806115c9565b637939f4245f526004601cfd5b8361163a9160405180938192630a85bd0160e11b83523360048401525f6024840152876044840152608060648401526084830190611c1e565b03815f895af15f91816116b0575b5061167657505050611658612b37565b805191826116735783633250574960e11b5f5260045260245ffd5b01fd5b929391929091906001600160e01b03191663757a42ff60e11b0161169e57509082918461157c565b633250574960e11b5f5260045260245ffd5b9091508481813d83116116e9575b6116c88183611cf2565b8101031261075d57516001600160e01b03198116810361075d579086611648565b503d6116be565b6339e3563760e11b5f525f60045260245ffd5b61170c83612ebb565b6117158461233e565b80545f1901905561150b565b633250574960e11b5f525f60045260245ffd5b63295c322760e21b5f5260045ffd5b63162908e360e11b5f5260045ffd5b634e487b7160e01b5f52603260045260245ffd5b6396c9d05f60e01b5f5260045ffd5b63f1b2431160e01b5f5260045ffd5b63bf55749760e01b5f5260045ffd5b63ab143c065f526004601cfd5b3461075d57610cf76117b136611c82565b90604051926117c1602085611cf2565b5f8452610cf1838383612135565b3461075d57602036600319011261075d576004356117ec8161270e565b336001600160a01b039091160361182c57611806816128e2565b7fe115e3c2ed2f591ca658dee1fa064a06d8bb613db408bdcd32808bf1021121fd5f80a2005b6314208a7960e21b5f5260045ffd5b3461075d57602036600319011261075d576004356001600160401b03811161075d5761186e610cf7913690600401611d3e565b61187661273d565b61285a565b3461075d57602036600319011261075d576020610f696004356122cb565b3461075d57602036600319011261075d5760206111896118b7611c42565b612306565b3461075d57604036600319011261075d576004356024356001600160401b03811161075d576118ef903690600401611d3e565b906118f861273d565b5f5b825151811015610cf757600190825f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910860205261197e60405f206001600160801b03611948848851612648565b515116906001600160801b036020611961868a51612648565b510151166040519261197284611cbc565b83526020830152612785565b016118fa565b3461075d57610cf761199536611c82565b91612135565b3461075d57604036600319011261075d576119b4611c42565b6024356119c08161270e565b33151580611a74575b80611a51575b611a3e5781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f9081525f805160206132ce8339815191526020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b50611a5b81612376565b335f908152602091909152604090205460ff16156119cf565b506001600160a01b0381163314156119c9565b3461075d57602036600319011261075d5760206111c3600435611aa98161270e565b505f9081525f805160206132ce83398151915260205260409020546001600160a01b031690565b3461075d575f36600319011261075d576040515f7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930054611b0f81611f81565b8084529060018116908115610ed75750600114611b365761075983610e4681850382611cf2565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793005f9081527f37c58c799b6609234b945e882912ee9ad34948a1dfaa20a97485e1a7752bbf81939250905b808210611b9957509091508101602001610e46610e36565b919260018160209254838588010152019101909291611b81565b3461075d57602036600319011261075d576004359063ffffffff60e01b821680920361075d576020916380ac58cd60e01b8114908115611c0d575b8115611bfc575b5015158152f35b6301ffc9a760e01b14905083611bf5565b635b5e139f60e01b81149150611bee565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361075d57565b602435906001600160a01b038216820361075d57565b35906001600160a01b038216820361075d57565b606090600319011261075d576004356001600160a01b038116810361075d57906024356001600160a01b038116810361075d579060443590565b604081019081106001600160401b03821117610b3057604052565b60e081019081106001600160401b03821117610b3057604052565b90601f801991011681019081106001600160401b03821117610b3057604052565b6001600160401b038111610b305760051b60200190565b35906001600160801b038216820361075d57565b919060208382031261075d57604051602081018181106001600160401b03821117610b305760405280938035906001600160401b03821161075d570182601f8201121561075d57803590611d9182611d13565b93611d9f6040519586611cf2565b82855260208086019360061b8301019181831161075d57602001925b828410611dc9575050505052565b60408483031261075d5760206040918251611de381611cbc565b611dec87611d2a565b8152611df9838801611d2a565b83820152815201930192611dbb565b35906001600160601b038216820361075d57565b919060e08382031261075d57604051611e3481611cd7565b8093611e3f81611c6e565b8252611e4d60208201611e08565b6020830152611e5e60408201611c6e565b6040830152611e6f60608201611e08565b60608301526080810135608083015260a081013560a083015260c0810135906001600160401b03821161075d570182601f8201121561075d57803590611eb482611d13565b93611ec26040519586611cf2565b82855260208086019360061b8301019181831161075d57602001925b828410611eef575050505060c00152565b60408483031261075d5760206040918251611f0981611cbc565b863581528287013583820152815201930192611ede565b6001600160401b038111610b3057601f01601f191660200190565b81601f8201121561075d57803590611f5282611f20565b92611f606040519485611cf2565b8284526020838301011161075d57815f926020809301838601378301015290565b90600182811c92168015611faf575b6020831014611f9b57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691611f90565b604051905f825f8051602061322e8339815191525491611fd883611f81565b80835292600181169081156120695750600114611ffe575b611ffc92500383611cf2565b565b505f8051602061322e8339815191525f90815290917f42ad5d3e1f2e6e70edcf6d991b8a3023d3fca8047a131592f9edb9fd9b89d57d5b81831061204d575050906020611ffc92820101611ff0565b6020919350806001915483858901015201910190918492612035565b60209250611ffc94915060ff191682840152151560051b820101611ff0565b604051905f825f8051602061326e83398151915254916120a783611f81565b808352926001811690811561206957506001146120ca57611ffc92500383611cf2565b505f8051602061326e8339815191525f90815290917f5f9ce34815f8e11431c7bb75a8e6886a91478f7ffc1dbb0a98dc240fddd76b755b818310612119575050906020611ffc92820101611ff0565b6020919350806001915483858901015201910190918492612101565b9091906001600160a01b03831680156117215782612152816129f5565b9133151580612218575b506001600160a01b0383169561217690876121fa5761233e565b60018154019055815f525f805160206132ae83398151915260205260405f20816001600160601b0360a01b825416179055857fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a4506001600160a01b03168083036121e257505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b61220384612ebb565b61220c8561233e565b80545f1901905561233e565b90915080612265575b1561222e5783905f61215c565b836001600160a01b03831661224f57637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b506001600160a01b038216331480156122a9575b8061222157505f8481525f805160206132ce83398151915260205260409020546001600160a01b03163314612221565b506122b382612376565b335f908152602091909152604090205460ff16612279565b61230390604051602081019182525f8051602061328e8339815191526040820152604081526122fb606082611cf2565b5190206127d8565b90565b6001600160a01b03165f9081527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491026020526040902090565b6001600160a01b03165f9081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793036020526040902090565b6001600160a01b03165f9081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793056020526040902090565b6123b7906129b0565b90815491428360a01c106123e25760038101546123d391612a1b565b6001600160a01b039092169190565b506001600160a01b03909116905f90565b6040516123ff81611cbc565b606060c060405161240f81611cd7565b5f81525f60208201525f60408201525f838201525f60808201525f60a0820152015261245160208201925f8452808352604060018060a01b0391015116612306565b548252519160c08301918251519161248161246b84611d13565b936124796040519586611cf2565b808552611d13565b602084019290601f19013684375f5b8551805182101561250957906124a881600193612648565b51602081519101516040519060208201927f4d6d71adfc17b3de431a7ee2d19c022dab3eedf440a21d498caa93004c3779cd845260408301526060820152606081526124f5608082611cf2565b5190206125028288612648565b5201612490565b50509290935093909360018060a01b03825116916001600160601b036020820151169160018060a01b03604083015116916001600160601b0360608201511660a060808301519201519260405160208101809251909b905f5b81811061263257505050612583816123039b9c03601f198101835282611cf2565b519020936040519560208701977ff17dd68a00b2be2147d33ba0d20d668ed959f8f96c8c31e5bb3b514cc986f7da895260408801526060870152608086015260a085015260c084015260e083015261010082015261010081526125e861012082611cf2565b51902090516040519060208201927f5eeba348e87f74b3090f081535f241f64be8aab1e431e4dc62332dec5b81d104845260408301526060820152606081526122fb608082611cf2565b82518e5260209d8e019d90920191600101612562565b80518210156117525760209160051b010190565b8054821015611752575f5260205f209060011b01905f90565b9190820180921161137357565b9190820391821161137357565b5f1981146113735760010190565b6001600160a01b031680156126fb575f8051602061324e83398151915280546001600160a01b0319811683179091556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3565b631e4fbdf760e01b5f525f60045260245ffd5b612717816129f5565b906001600160a01b0382161561272b575090565b637e27328960e01b5f5260045260245ffd5b5f8051602061324e833981519152546001600160a01b0316330361275d57565b63118cdaa760e01b5f523360045260245ffd5b8054821015611752575f5260205f2001905f90565b8054600160401b811015610b30576127a291600182018155612770565b91909161052a57805160209091015160801b6fffffffffffffffffffffffffffffffff19166001600160801b0391909116179055565b6042906127e361311d565b6127eb613187565b6040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815261283c60c082611cf2565b519020906040519161190160f01b8352600283015260228201522090565b905f5b825180518210156128dc57906128d66001600160801b0361288083600195612648565b5151166001600160801b036020612898858951612648565b51015116604051916128a983611cbc565b825260208201527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649109612785565b0161285d565b50509050565b5f6128ec826129f5565b61293b6128f8846129b0565b93600385019261292b845492612926612911858a612a1b565b946105e58660018060a01b038c541692612682565b612e29565b85546001600160a01b0316612dd8565b818355556001810180546001600160a01b031681556004820180545f82559081612979575b505080546001600160a01b03191690555f600290910155565b6001600160ff1b0382168203611373575f5260205f209060011b8101905b81811015612960575f8082556001820155600201612997565b60405160208101917fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910183526040820152604081526129ef606082611cf2565b51902090565b5f9081525f805160206132ae83398151915260205260409020546001600160a01b031690565b600181015460a01c5f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910760205260405f205480155f14612b0757507fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649109905b5460a01c428111612a8c575050505f90565b612a97904290612682565b915f8254905b81811080612aea575b15612ab957612ab49061268f565b612a9d565b919293508114612adc575b612ad19061230393612770565b505460801c90612ee4565b8015611373575f1901612ac4565b506001600160801b03612afd8286612770565b5054168511612aa6565b5f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910860205260405f2090612a7a565b3d15612b61573d90612b4882611f20565b91612b566040519384611cf2565b82523d5f602084013e565b606090565b823b612b74575b5050505050565b604051630a85bd0160e11b81526001600160a01b039182166004820152918116602483015260448201939093526080606482015291169160209082908190612bc0906084830190611c1e565b03815f865af15f9181612c1e575b50612bfc5750612bdc612b37565b80519081612bf75782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b0161169e57505f80808080612b6d565b9091506020813d602011612c5b575b81612c3a60209383611cf2565b8101031261075d57516001600160e01b03198116810361075d57905f612bce565b3d9150612c2d565b9190823b612cb25790612c7591612fa7565b506004811015612c9e57159182612c8b57505090565b6001600160a01b03918216911614919050565b634e487b7160e01b5f52602160045260245ffd5b915f92612ce8612cf685946040519283916020830195630b135d3f60e11b87526024840152604060448401526064830190611c1e565b03601f198101835282611cf2565b51915afa612d02612b37565b81612d30575b81612d11575090565b905060208180518101031261075d5760200151630b135d3f60e11b1490565b905060208151101590612d08565b612dd5916001600160a01b0390911690612d8390612d7c837fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491046130dd565b9050612675565b815f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910660205260405f20557fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad86491046131cc565b50565b919060145260345263a9059cbb60601b5f5260205f6044601082855af1908160015f51141615612e0b575b50505f603452565b3b153d171015612e1c575f80612e03565b6390b8ec185f526004601cfd5b612e32816129f5565b6001600160a01b0381168015919083905f908415612e9d575b8282525f805160206132ae8339815191526020526040822080546001600160a01b03191690557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8280a45061272b5750565b612ea683612ebb565b612eaf8461233e565b82198154019055612e4b565b5f525f805160206132ce83398151915260205260405f206001600160601b0360a01b8154169055565b9190915f838202915f1985820991838084109303928084039314612f68578268056bc75e2d631000001115612f5657507f2fdf29ec6a12d6f7bf48d6861d4b553283e011b18b576460d489e3a9addec2d1939468056bc75e2d63100000910990828211900360ec1b910360141c170290565b634e487b71905260116020526024601cfd5b50505068056bc75e2d631000009192500490565b60ff5f805160206132ee8339815191525460401c1615612f9857565b631afcd79f60e31b5f5260045ffd5b8151919060418303612fd757612fd09250602082015190606060408401519301515f1a90612fe1565b9192909190565b50505f9160029190565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411613063579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15613058575f516001600160a01b0381161561304e57905f905f90565b505f906001905f90565b6040513d5f823e3d90fd5b5050505f9160039190565b805f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910660205260405f205480155f146130d557505f527fa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910560205260405f20541515905f90565b600192909150565b9190805f526002830160205260405f20549283155f14613115576131109293506001915f520160205260405f2054151590565b905f90565b505060019190565b613125611fb9565b8051908115613135576020012090565b50507fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1005480156131625790565b507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47090565b61318f612088565b805190811561319f576020012090565b50507fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1015480156131625790565b5f82815260018201602052604090205461322757805490600160401b821015610b3057613200826001809401835582612770565b81549060031b9085821b915f19901b19161790558054925f520160205260405f2055600190565b50505f9056fea16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1029016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300a16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d103a850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad864910080bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930280bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079304f0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00a2646970667358221220a7f76d1495ee59c52d1386e5a219c11d756ba89daa2090f4e9005659164d517064736f6c634300081a0033",
    "sourceMap": "890:9192:66:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2915:21;2911:46;;2972:13;3009:3;890:9192;;2987:20;;;;;3034:12;;;;;:::i;:::-;890:9192;3034:12;:::i;:::-;3099:32;3118:12;;;;:::i;:::-;890:9192;3099:32;:::i;:::-;890:9192;;2464:15:70;;890:9192:66;;;2448:31:70;2444:63;;3243:18:66;;890:9192;;;3243:18;;;890:9192;-1:-1:-1;;;;;890:9192:66;3243:18;:::i;:::-;890:9192;2972:13;;2444:63:70;-1:-1:-1;;;2488:19:70;;890:9192:66;2488:19:70;;2987:20:66;;890:9192;;2911:46;-1:-1:-1;;;2945:12:66;;890:9192;3604:12:68;2945::66;890:9192;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;2357:1:24;890:9192:66;;:::i;:::-;2303:62:24;;:::i;:::-;2357:1;:::i;:::-;890:9192:66;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2303:62:24;;;:::i;:::-;3076:13:68;3110:3;890:9192:66;;3091:17:68;;;;;890:9192:66;;17916:50:60;-1:-1:-1;;;;;3193:9:68;890:9192:66;3193:9:68;;:::i;:::-;890:9192:66;;17916:50:60;:::i;:::-;3221:22:68;;;3217:132;;3110:3;;890:9192:66;3076:13:68;;3217:132;3315:18;890:9192:66;;;;;;;3292:9:68;;;;:::i;:::-;890:9192:66;;3315:18:68;:::i;:::-;3217:132;;;3091:17;;890:9192:66;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9998:22;;;;;;:::i;:::-;10024:10;-1:-1:-1;;;;;890:9192:66;;;9998:36;9994:68;;890:9192;;3610:27;3606:52;;3705:28;;;:::i;:::-;890:9192;;;;;2317:15:70;-1:-1:-1;2297:60:70;;3786:24:66;;;;3820:31;;3866:13;3885:16;890:9192;3885:16;;3861:381;3910:3;890:9192;;3881:27;;;;;;-1:-1:-1;;;;;3933:29:66;;;;:::i;:::-;890:9192;;3966:19;;;;:::i;:::-;890:9192;;3933:59;3929:303;;3910:3;;890:9192;;3866:13;;3929:303;4035:19;4012:48;4035:19;890:9192;4035:19;;;;;;;:::i;:::-;:25;;890:9192;4012:48;;:::i;:::-;890:9192;-1:-1:-1;;890:9192:66;;;;;;;4100:45;;;;:::i;:::-;4078:19;;;;;:::i;:::-;890:9192;;;;;;;;;;3929:303;890:9192;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;890:9192:66;4203:14;890:9192;;;;;;;;4203:14;:::i;:::-;3929:303;;;;890:9192;;;;;;;;;;;;;-1:-1:-1;;;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;890:9192:66;;;;;;;;;;-1:-1:-1;;;890:9192:66;;;;;;;;3881:27;;;;;;;;890:9192;4255:38;4251:65;;890:9192;4330:23;;4426:8;;;;;:::i;4326:486::-;4466:17;4766:18;4466:17;;4786:14;4466:17;;:40;890:9192;;;4466:40;:::i;:::-;890:9192;;4668:36;4545:60;;;;:::i;:::-;890:9192;4668:36;890:9192;;;;;;;;;4668:36;;:::i;:::-;;;:::i;:::-;890:9192;-1:-1:-1;;;;;890:9192:66;;4766:18;:::i;:::-;4786:14;;:::i;4251:65::-;-1:-1:-1;;;4302:14:66;;890:9192;4302:14;;2297:60:70;-1:-1:-1;;;2341:16:70;;890:9192:66;;2341:16:70;3606:52:66;-1:-1:-1;;;3646:12:66;;890:9192;;3646:12;9994:68;-1:-1:-1;;;10043:19:66;;890:9192;;10043:19;890:9192;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;:::i;:::-;5388:27:27;890:9192:66;;:::i;:::-;;5388:27:27;:::i;:::-;:37;890:9192:66;;;;;;-1:-1:-1;890:9192:66;;;;;;-1:-1:-1;890:9192:66;;;;;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;7383:131;890:9192;;;;;;;:::i;:::-;7433:17;7452:41;7433:17;;;:::i;:::-;7452:41;;:::i;:::-;7383:131;;:::i;:::-;890:9192;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;4060:22:27;890:9192:66;;4060:22:27;:::i;:::-;;890:9192:66;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;4144:75:27;890:9192:66;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;:::i;:::-;;;:::i;:::-;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;4301:16:25;890:9192:66;-1:-1:-1;;;;;890:9192:66;;4726:16:25;;:34;;;;890:9192:66;4805:1:25;4790:16;:50;;;;890:9192:66;4855:13:25;:30;;;;890:9192:66;4851:91:25;;;-1:-1:-1;;890:9192:66;;4805:1:25;890:9192:66;-1:-1:-1;;;;;;;;;;;890:9192:66;6961:1:25;;890:9192:66;4979:67:25;;890:9192:66;6893:76:25;;;:::i;:::-;;;:::i;6961:1::-;890:9192:66;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;;890:9192:66;;;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;;890:9192:66;;;;6893:76:25;;:::i;:::-;;;:::i;:::-;890:9192:66;;;-1:-1:-1;;;;;890:9192:66;;;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;4805:1:25;890:9192:66;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;-1:-1:-1;;;;;890:9192:66;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;:::i;:::-;;;;;;;;;;;;;;;;;;1218:12:68;890:9192:66;;;;;;;;;;;4805:1:25;890:9192:66;;;;;3790:10:29;890:9192:66;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;2806:64:29;890:9192:66;;;3902:16:29;890:9192:66;;;;;;-1:-1:-1;;;;;;890:9192:66;-1:-1:-1;;;;;890:9192:66;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;1218:12:68;:::i;:::-;5066:101:25;;890:9192:66;5066:101:25;890:9192:66;5142:14:25;890:9192:66;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;-1:-1:-1;;;;;;;;;;;890:9192:66;;4805:1:25;890:9192:66;;5142:14:25;890:9192:66;;;;;-1:-1:-1;890:9192:66;;;;;;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;;;;;;;;;;1218:12:68;890:9192:66;;;;;4805:1:25;890:9192:66;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;;;;;3790:10:29;890:9192:66;;;;;;;;;;;;;;;;;;;4805:1:25;890:9192:66;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4805:1:25;890:9192:66;;;;;;-1:-1:-1;890:9192:66;;;;;;;;;;;;;;;;;;;;-1:-1:-1;890:9192:66;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;;;-1:-1:-1;;;890:9192:66;;;;;;;;;;;;4805:1:25;890:9192:66;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;;;;4805:1:25;890:9192:66;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;-1:-1:-1;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4805:1:25;890:9192:66;;;;;;-1:-1:-1;890:9192:66;;;;4979:67:25;-1:-1:-1;;890:9192:66;;;-1:-1:-1;;;;;;;;;;;890:9192:66;4979:67:25;;;4851:91;4908:23;;;890:9192:66;4908:23:25;890:9192:66;;4908:23:25;4855:30;4872:13;;;4855:30;;;4790:50;4818:4;4810:25;:30;;-1:-1:-1;4790:50:25;;4726:34;;;-1:-1:-1;4726:34:25;;890:9192:66;;;;;;-1:-1:-1;;890:9192:66;;;;;;:::i;:::-;;;:::i;:::-;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;6557:4:27;890:9192:66;;;;;;:::i;:::-;6472:7:27;;;;;;:::i;:::-;966:10:28;6557:4:27;:::i;:::-;890:9192:66;;;;;;;-1:-1:-1;;890:9192:66;;;;2303:62:24;;:::i;:::-;890:9192:66;;;;2232:24:68;890:9192:66;;;;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;17468:22:27;;17464:91;;17564:27;966:10:28;17564:27:27;:::i;:::-;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;17627:41:27;890:9192:66;966:10:28;17627:41:27;;890:9192:66;17464:91:27;17513:31;;;;890:9192:66;17513:31:27;890:9192:66;;;;17513:31:27;890:9192:66;;;;;;-1:-1:-1;;890:9192:66;;;;;;;3889:9:27;890:9192:66;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;:::i;:::-;3889:9:27;890:9192:66;;;;;;;-1:-1:-1;890:9192:66;;;;;;;-1:-1:-1;890:9192:66;;-1:-1:-1;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;;;;;;;;;;;;;;;-1:-1:-1;890:9192:66;;-1:-1:-1;890:9192:66;;;;;;;;-1:-1:-1;;890:9192:66;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;2806:64:29;890:9192:66;5777:18:29;:43;;;890:9192:66;;;;;;;:::i;:::-;;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;5965:13:29;890:9192:66;;;;6000:4:29;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;890:9192:66;;;;;;;;;;;;;;;-1:-1:-1;;;890:9192:66;;;;;;;;;;;;-1:-1:-1;;;890:9192:66;;;;;;;5777:43:29;890:9192:66;5799:16:29;890:9192:66;5799:21:29;5777:43;;890:9192:66;;;;;;-1:-1:-1;;890:9192:66;;;;;;;;;:::i;:::-;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;2303:62:24;;:::i;:::-;-1:-1:-1;;;;;;;;;;;890:9192:66;;-1:-1:-1;;;;;;890:9192:66;;;;;;;-1:-1:-1;;;;;890:9192:66;3975:40:24;890:9192:66;;3975:40:24;890:9192:66;;;;;;;-1:-1:-1;;890:9192:66;;;;;;:::i;:::-;-1:-1:-1;;;;;890:9192:66;;3184:19:27;3180:87;;3283:18;890:9192:66;3283:18:27;;:::i;:::-;890:9192:66;;;;;;;3180:87:27;3226:30;;;890:9192:66;3226:30:27;890:9192:66;;;;;3226:30:27;890:9192:66;;;;;;-1:-1:-1;;890:9192:66;;;;;6500:17;890:9192;;6500:17;:::i;:::-;890:9192;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;:::i;:::-;1575:245:63;;;;;;;;;;2351:53:66;2380:23;;2351:53;:::i;:::-;3554:23:68;:29;:23;;:29;;890:9192:66;3554:41:68;3550:66;;3648:50;:39;:23;;:39;890:9192:66;-1:-1:-1;;;;;;;;;;;890:9192:66;;;3648:50:68;;:::i;:::-;3630:15;:68;3626:100;;890:9192:66;3780:23:68;;890:9192:66;3780:29:68;890:9192:66;3762:48:68;;-1:-1:-1;;;;;890:9192:66;3762:48:68;:::i;:::-;890:9192:66;3740:70:68;3736:100;;3554:29;3995:23;;:29;;890:9192:66;;;;;;;;;3995:32:68;:38;890:9192:66;4048:13:68;890:9192:66;4043:307:68;4105:3;3554:29;4067:23;;:29;;890:9192:66;;4063:40:68;;;;;4128:32;;;;:::i;:::-;;890:9192:66;4171:23:68;;3554:29;4171;;-1:-1:-1;;890:9192:66;;;;;;;4171:36:68;;;:::i;:::-;;890:9192:66;-1:-1:-1;4128:86:68;4124:152;;4289:50;890:9192:66;4301:23:68;890:9192:66;4301:32:68;:23;3554:29;4301:23;;:29;;:32;:::i;:::-;;:38;890:9192:66;4289:50:68;;:::i;:::-;4105:3;890:9192:66;4048:13:68;;;4124:152;4241:20;;;890:9192:66;4241:20:68;890:9192:66;;4241:20:68;890:9192:66;;;;;;;;;;;;4063:40:68;;890:9192:66;4375:23:68;;:30;890:9192:66;4363:42:68;4359:70;;4457:23;;890:9192:66;4457:29:68;890:9192:66;8819:80;;890:9192;4439:48:68;;-1:-1:-1;;;;;890:9192:66;4439:48:68;:::i;:::-;:50;890:9192:66;;4439:50:68;:::i;:::-;890:9192:66;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;-1:-1:-1;;;;;890:9192:66;8819:80;:::i;:::-;8818:81;8814:140;;2532:28;;;;:::i;:::-;2566:23;;890:9192;;;1537:17:70;;;890:9192:66;1523:11:70;;;890:9192:66;;1577:16:70;;890:9192:66;3648:39:68;1626:26:70;;890:9192:66;-1:-1:-1;1603:20:70;;890:9192:66;;1676:17:70;;890:9192:66;;;-1:-1:-1;;;;;;890:9192:66;;;-1:-1:-1;;;;;890:9192:66;;;;-1:-1:-1;1564:10:70;;890:9192:66;;1719:19:70;;890:9192:66;;;;;;;;;;;;;1816:10:70;;;;3554:29:68;1772:16:70;;;;-1:-1:-1;1797:3:70;1772:16;;890:9192:66;;1768:27:70;;;;;1841:19;;;;:::i;:::-;;890:9192:66;1869:16:70;890:9192:66;1869:19:70;:16;;;:19;:::i;:::-;;:25;890:9192:66;;;;;;;;:::i;:::-;;;;1832:63:70;;890:9192:66;;;;;-1:-1:-1;;;890:9192:66;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;1753:13:70;;1768:27;;;890:9192:66;;;;;;2610:23;;:29;890:9192;;;;;;;;;;;:::i;:::-;;;;11629:16:27;;11625:87;;10559:17;;;:::i;:::-;-1:-1:-1;;;;;890:9192:66;;10762:18:27;;;;890:9192:66;10762:18:27;;;;;10758:258;;1748:159:70;11090:15:27;;;:::i;:::-;890:9192:66;;;;;;-1:-1:-1;890:9192:66;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;;-1:-1:-1;;;;;;890:9192:66;-1:-1:-1;;;;;890:9192:66;;;;;11184:27:27;;-1:-1:-1;11184:27:27;11787:96;;;1165:14:45;;1161:742;;1748:159:70;-1:-1:-1;2710:23:66;890:9192;;;2768:30;;;890:9192;;9132:875:64;;890:9192:66;9132:875:64;;;1575:245:63;9132:875:64;;;966:10:28;9132:875:64;;;;;-1:-1:-1;;;9132:875:64;;2710:23:66;;-1:-1:-1;;;;;;890:9192:66;2710:23;-1:-1:-1;9132:875:64;;-1:-1:-1;890:9192:66;9132:875:64;;;;890:9192:66;;9132:875:64;;;;;;1748:159:70;9132:875:64;;890:9192:66;;9132:875:64;;890:9192:66;9132:875:64;1883:75:63;1575:245;1883:75;890:9192:66;;;9132:875:64;;;;;;;;;;;;;;;890:9192:66;9132:875:64;890:9192:66;9132:875:64;;1161:742:45;890:9192:66;;;;;;;;;;;;1203:67:45;;966:10:28;890:9192:66;1203:67:45;;890:9192:66;;;;;;;;;;;3648:39:68;890:9192:66;;;;;;;;;:::i;:::-;1203:67:45;;890:9192:66;1203:67:45;;;890:9192:66;;1203:67:45;;;1161:742;-1:-1:-1;1199:694:45;;1510:383;;;;;:::i;:::-;890:9192:66;;;1560:18:45;;;11668:33:27;;;;890:9192:66;1664:39:45;890:9192:66;;;;1664:39:45;1556:323;1750:111;;1199:694;890:9192:66;;;;;;;-1:-1:-1;;;;;;890:9192:66;-1:-1:-1;;;1317:51:45;1313:182;;1199:694;1161:742;;;;;;1313:182;11668:33:27;;;890:9192:66;1437:39:45;890:9192:66;;;;1437:39:45;1203:67;;;;;;;;;;;;;;;;;:::i;:::-;;;890:9192:66;;;;;-1:-1:-1;;;;;;890:9192:66;;;;;;1203:67:45;;;;;;;;;11787:96:27;11841:31;;;890:9192:66;11841:31:27;890:9192:66;;;;;11841:31:27;10758:258;10920:5;;;:::i;:::-;10969:17;;;:::i;:::-;890:9192:66;;-1:-1:-1;;890:9192:66;;;10758:258:27;;11625:87;11668:33;;;890:9192:66;11668:33:27;890:9192:66;;;;;11668:33:27;8814:140:66;8922:21;;;890:9192;8922:21;890:9192;;8922:21;4359:70:68;4414:15;;;890:9192:66;4414:15:68;890:9192:66;;4414:15:68;890:9192:66;;;;;;;;;;;;3736:100:68;3819:17;;;890:9192:66;3819:17:68;890:9192:66;;3819:17:68;3626:100;3707:19;;;890:9192:66;3707:19:68;890:9192:66;;3707:19:68;3550:66;3604:12;;;890:9192:66;3604:12:68;890:9192:66;;3604:12:68;1575:245:63;;890:9192:66;1575:245:63;890:9192:66;1575:245:63;;890:9192:66;;;;6557:4:27;890:9192:66;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;6472:7:27;;;;;:::i;890:9192:66:-;;;;;;-1:-1:-1;;890:9192:66;;;;;;9998:22;;;:::i;:::-;10024:10;-1:-1:-1;;;;;890:9192:66;;;9998:36;9994:68;;4911:8;;;:::i;:::-;4935:25;890:9192;4935:25;;890:9192;9994:68;10043:19;;;890:9192;10043:19;890:9192;;10043:19;890:9192;;;;;;-1:-1:-1;;890:9192:66;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;5893:12;890:9192;;;;;;:::i;:::-;2303:62:24;;:::i;:::-;5893:12:66;:::i;890:9192::-;;;;;;-1:-1:-1;;890:9192:66;;;;;;;;;:::i;:::-;;;;;;-1:-1:-1;;890:9192:66;;;;;4607:23:68;890:9192:66;;:::i;:::-;4607:23:68;:::i;890:9192:66:-;;;;;;-1:-1:-1;;890:9192:66;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;:::i;:::-;2303:62:24;;;:::i;:::-;890:9192:66;1862:3:68;1826:27;;890:9192:66;1822:38:68;;;;;890:9192:66;;;;;1881:14:68;890:9192:66;;1881:219:68;890:9192:66;;;-1:-1:-1;;;;;1979:30:68;:27;;;:30;:::i;:::-;;890:9192:66;;2024:27:68;-1:-1:-1;;;;;890:9192:66;2024:30:68;:27;;;:30;:::i;:::-;;:44;890:9192:66;;;;;;;;:::i;:::-;;;;1943:143:68;;890:9192:66;1881:219:68;:::i;:::-;890:9192:66;1807:13:68;;890:9192:66;;;;;;;;:::i;:::-;;;:::i;:::-;;;;;;-1:-1:-1;;890:9192:66;;;;;;:::i;:::-;;;16656:22:27;;;:::i;:::-;966:10:28;16806:18:27;;:35;;;890:9192:66;16806:69:27;;;890:9192:66;16802:142:27;;890:9192:66;;-1:-1:-1;;;;;890:9192:66;;;;;16996:28:27;890:9192:66;;16996:28:27;890:9192:66;;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;;-1:-1:-1;;;;;;890:9192:66;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;16802:142:27;16902:27;;;890:9192:66;16902:27:27;966:10:28;890:9192:66;;;;16902:27:27;16806:69;16846:29;5388:27;;;:::i;:::-;966:10:28;890:9192:66;;;;;;;;;;;;;;;16845:30:27;16806:69;;:35;-1:-1:-1;;;;;;890:9192:66;;966:10:28;16828:13:27;;16806:35;;890:9192:66;;;;;;-1:-1:-1;;890:9192:66;;;;;4917:21:27;890:9192:66;;4877:22:27;;;:::i;:::-;-1:-1:-1;;890:9192:66;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;-1:-1:-1;;;;;890:9192:66;;7372:184:27;890:9192:66;;;;;;-1:-1:-1;;890:9192:66;;;;;;;2043:64:27;890:9192:66;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2043:64:27;890:9192:66;;;;;;;-1:-1:-1;890:9192:66;;;;;;;-1:-1:-1;890:9192:66;;-1:-1:-1;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;2821:40:27;;;:104;;;;890:9192:66;2821:156:27;;;;890:9192:66;;;;;;;2821:156:27;-1:-1:-1;;;1134:40:30;;-1:-1:-1;2821:156:27;;;:104;-1:-1:-1;;;2877:48:27;;;-1:-1:-1;2821:104:27;;890:9192:66;;;;;;;;;;;;;;;;;-1:-1:-1;890:9192:66;;;;;;;;-1:-1:-1;;890:9192:66;;;;:::o;:::-;;;;-1:-1:-1;;;;;890:9192:66;;;;;;:::o;:::-;;;;-1:-1:-1;;;;;890:9192:66;;;;;;:::o;:::-;;;-1:-1:-1;;;;;890:9192:66;;;;;;:::o;:::-;;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;:::o;:::-;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;:::o;:::-;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;:::o;:::-;-1:-1:-1;;;;;890:9192:66;;;;;;;;;:::o;:::-;;;-1:-1:-1;;;;;890:9192:66;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;-1:-1:-1;;890:9192:66;;;;:::o;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;;;;;;-1:-1:-1;890:9192:66;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;890:9192:66;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:::o;:::-;-1:-1:-1;;;;;;;;;;;;;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;890:9192:66;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;;;;;;;;;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5494:578:27;;;;-1:-1:-1;;;;;890:9192:66;;5588:16:27;;5584:87;;10559:17;;;;:::i;:::-;966:10:28;;10636:18:27;;10632:86;;;5494:578;-1:-1:-1;;;;;;890:9192:66;;;11090:15:27;;890:9192:66;10758:258:27;;11090:15;:::i;:::-;11030:16;890:9192:66;;;;;;5602:1:27;890:9192:66;-1:-1:-1;;;;;;;;;;;890:9192:66;;;5602:1:27;890:9192:66;;-1:-1:-1;;;;;890:9192:66;;;;;;;;11184:27:27;;5602:1;11184:27;;-1:-1:-1;;;;;;890:9192:66;5961:21:27;;;5957:109;;5494:578;;;:::o;5957:109::-;6005:50;;;5602:1;6005:50;;890:9192:66;;;;;;5602:1:27;6005:50;10758:258;10920:5;;;:::i;:::-;10969:17;;;:::i;:::-;890:9192:66;;-1:-1:-1;;890:9192:66;;;11090:15:27;:::i;10632:86::-;8005:127;;-1:-1:-1;8005:127:27;;;10632:86;8682:39;8678:255;;10632:86;;;;;8678:255;890:9192:66;-1:-1:-1;;;;;890:9192:66;;;;8787:31:27;;;5602:1;8787:31;;890:9192:66;;5602:1:27;8787:31;8737:186;8864:44;;;5602:1;8864:44;966:10:28;8864:44:27;890:9192:66;;;;5602:1:27;8864:44;8005:127;-1:-1:-1;;;;;;890:9192:66;;966:10:28;8043:16:27;:52;;;;8005:127;8043:88;8005:127;8043:88;-1:-1:-1;;890:9192:66;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;-1:-1:-1;;;;;890:9192:66;966:10:28;8099:32:27;8005:127;;8043:52;8063:32;5388:27;;;:::i;:::-;966:10:28;5602:1:27;890:9192:66;;;;;;;;;;;;;;8043:52:27;;7067:193:66;7173:80;7067:193;890:9192;;7200:51;;;890:9192;;;-1:-1:-1;;;;;;;;;;;890:9192:66;1523:66;;890:9192;;7200:51;;;;;;:::i;:::-;890:9192;7190:62;;7173:80;:::i;:::-;7067:193;:::o;890:9192::-;-1:-1:-1;;;;;890:9192:66;;;;;4607:17:68;890:9192:66;;;;;;:::o;:::-;-1:-1:-1;;;;;890:9192:66;;;;;3283:11:27;890:9192:66;;;;;;:::o;:::-;-1:-1:-1;;;;;890:9192:66;;;;;17564:20:27;890:9192:66;;;;;;:::o;5202:385::-;5352:28;5202:385;5352:28;:::i;:::-;890:9192;;;5416:15;;890:9192;;;5394:37;5390:96;;5561:17;;;890:9192;5521:58;;;:::i;:::-;-1:-1:-1;;;;;890:9192:66;;;;;5202:385::o;5390:96::-;-1:-1:-1;;;;;;890:9192:66;;;;-1:-1:-1;;5447:28:66:o;6660:321::-;890:9192;;;;;:::i;:::-;;;;;;;;:::i;:::-;-1:-1:-1;890:9192:66;;-1:-1:-1;890:9192:66;;;;-1:-1:-1;890:9192:66;;;;-1:-1:-1;890:9192:66;;;;-1:-1:-1;890:9192:66;;;;-1:-1:-1;890:9192:66;;;;;;4607:23:68;890:9192:66;;;;-1:-1:-1;890:9192:66;;6827:36;;;890:9192;;;;;;6903:16;;890:9192;;4607:23:68;:::i;:::-;890:9192:66;;;533:23:69;888:11:70;890:9192:66;888:11:70;;;;;890:9192:66;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;-1:-1:-1;;890:9192:66;;;;-1:-1:-1;961:3:70;941:11;;890:9192:66;;937:22:70;;;;;1001:14;;;890:9192:66;1001:14:70;;:::i;:::-;;890:9192:66;;;739:14:70;;890:9192:66;;;682:72:70;890:9192:66;682:72:70;;890:9192:66;682:51:71;890:9192:66;;;682:51:71;;890:9192:66;;682:51:71;;890:9192:66;;682:72:70;;;890:9192:66;682:72:70;;:::i;:::-;890:9192:66;672:83:70;;980:36;;;;:::i;:::-;890:9192:66;;922:13:70;;937:22;;;;;;;;;;890:9192:66;;;;;;;;1170:14:70;-1:-1:-1;;;;;890:9192:66;1170:14:70;;890:9192:66;;;;;;;;;1202:11:70;;890:9192:66;;1231:12:70;-1:-1:-1;;;;;890:9192:66;1231:12:70;;890:9192:66;;;;1261:21:70;;890:9192:66;1300:12:70;;890:9192:66;;;;;1340:28:70;;;890:9192:66;;530:101:71;;;-1:-1:-1;530:101:71;;;;;;1340:28:70;;;;;6937:37:66;1340:28:70;;;890:9192:66;;1340:28:70;;;;;;:::i;:::-;890:9192:66;1330:39:70;;890:9192:66;;;1066:317:70;890:9192:66;1066:317:70;;890:9192:66;530:101:71;890:9192:66;;;530:101:71;;890:9192:66;;530:101:71;;;890:9192:66;530:101:71;;890:9192:66;;530:101:71;;;890:9192:66;530:101:71;;890:9192:66;;530:101:71;;890:9192:66;530:101:71;;;890:9192:66;530:101:71;1066:317:70;;;;;;:::i;:::-;890:9192:66;1043:350:70;;890:9192:66;;;;455:158:69;890:9192:66;455:158:69;;890:9192:66;797:92:71;890:9192:66;;;797:92:71;;890:9192:66;;797:92:71;;890:9192:66;;455:158:69;;;890:9192:66;455:158:69;;:::i;530:101:71:-;;;890:9192:66;;;530:101:71;;;;890:9192:66;;;;;530:101:71;;;890:9192:66;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;-1:-1:-1;890:9192:66;;-1:-1:-1;890:9192:66;;;;;;-1:-1:-1;890:9192:66;:::o;:::-;;;;;;;;;;:::o;:::-;;;;;;;;;;:::o;:::-;-1:-1:-1;;890:9192:66;;;;;;;:::o;3405:215:24:-;-1:-1:-1;;;;;890:9192:66;3489:22:24;;3485:91;;-1:-1:-1;;;;;;;;;;;890:9192:66;;-1:-1:-1;;;;;;890:9192:66;;;;;;;-1:-1:-1;;;;;890:9192:66;3975:40:24;-1:-1:-1;;3975:40:24;3405:215::o;3485:91::-;3534:31;;;3509:1;3534:31;3509:1;3534:31;890:9192:66;;3509:1:24;3534:31;17910:241:27;18008:17;;;:::i;:::-;890:9192:66;-1:-1:-1;;;;;890:9192:66;;18039:19:27;18035:88;;18132:12;17910:241;:::o;18035:88::-;8787:31;;;18056:1;18081:31;;890:9192:66;;18056:1:27;18081:31;2658:162:24;-1:-1:-1;;;;;;;;;;;890:9192:66;-1:-1:-1;;;;;890:9192:66;966:10:28;2717:23:24;2713:101;;2658:162::o;2713:101::-;2763:40;;;-1:-1:-1;2763:40:24;966:10:28;2763:40:24;890:9192:66;;-1:-1:-1;2763:40:24;890:9192:66;;;;;;;;-1:-1:-1;890:9192:66;;-1:-1:-1;890:9192:66;;;-1:-1:-1;890:9192:66;:::o;:::-;;;-1:-1:-1;;;890:9192:66;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;-1:-1:-1;;890:9192:66;-1:-1:-1;;;;;890:9192:66;;;;;;;:::o;4946:176:29:-;3445:249:54;4946:176:29;4243:17;;:::i;:::-;4262:20;;:::i;:::-;890:9192:66;;4221:92:29;;;;890:9192:66;2073:95:29;890:9192:66;;;2073:95:29;;890:9192:66;2073:95:29;;;890:9192:66;4284:13:29;2073:95;;;890:9192:66;4307:4:29;2073:95;;;890:9192:66;2073:95:29;4221:92;;;;;;:::i;:::-;890:9192:66;4211:103:29;;3445:249:54;890:9192:66;3445:249:54;;-1:-1:-1;;;3445:249:54;;;;;;;;;;;4946:176:29;:::o;1244:428:68:-;;1374:1;1417:3;1381:27;;890:9192:66;;1377:38:68;;;;;1534:30;1436:219;-1:-1:-1;;;;;1534:30:68;;890:9192:66;1534:30:68;;:::i;:::-;;890:9192:66;;-1:-1:-1;;;;;1579:44:68;:30;:27;;;:30;:::i;:::-;;:44;890:9192:66;;;;;;;;:::i;:::-;;;1579:44:68;1498:143;;890:9192:66;1436:24:68;:219;:::i;:::-;890:9192:66;1362:13:68;;1377:38;;;;;1244:428::o;8966:502:66:-;-1:-1:-1;9042:18:66;;;:::i;:::-;9417:14;9107:28;;;:::i;:::-;9210:17;;;;890:9192;9338:8;890:9192;;9170:58;9287:34;9170:58;;;;:::i;:::-;890:9192;9287:34;890:9192;;;;;;;;;9287:34;;:::i;:::-;9338:8;:::i;:::-;890:9192;;-1:-1:-1;;;;;890:9192:66;9417:14;:::i;:::-;890:9192;;;;2108:11:70;;;890:9192:66;;-1:-1:-1;;;;;890:9192:66;;;2136:10:70;;;890:9192:66;;-1:-1:-1;890:9192:66;;;;;;8966:502;-1:-1:-1;;890:9192:66;;-1:-1:-1;;;;;;890:9192:66;;;-1:-1:-1;2190:20:70;;;;890:9192:66;8966:502::o;890:9192::-;-1:-1:-1;;;;;407:4:71;;;;;;-1:-1:-1;890:9192:66;;-1:-1:-1;890:9192:66;407:4:71;2108:11:70;407:4:71;890:9192:66;;;;;;;;;;-1:-1:-1;890:9192:66;;;2108:11:70;890:9192:66;;;;;;;9629:254;890:9192;;9760:59;;;890:9192;248:66:71;890:9192:66;;;248:66:71;;890:9192:66;;9760:59;;;;;;:::i;:::-;890:9192;9750:70;;9629:254;:::o;7084:172:27:-;-1:-1:-1;890:9192:66;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;-1:-1:-1;;;;;890:9192:66;;7084:172:27:o;7741:826:66:-;7977:17;;;890:9192;;;;;2464:24:68;890:9192:66;;;;;;2514:13:68;;:67;:13;;;:67;2530:24;2514:67;;890:9192:66;;;8031:15;8009:37;;8005:538;;8552:8;;;890:9192;7741:826;:::o;8005:538::-;8081:37;8031:15;;8081:37;;:::i;:::-;8132:17;890:9192;;;8163:167;;8170:36;;;:92;;;8163:167;8170:92;;;8282:7;;;:::i;:::-;8163:167;;8170:92;;;;;8347:37;;8343:83;;8163:167;8466:28;;8446:86;8466:28;;:::i;:::-;890:9192;;;;8446:86;;:::i;8343:83::-;890:9192;;;;-1:-1:-1;;890:9192:66;8343:83;;8170:92;8221:28;-1:-1:-1;;;;;8221:28:66;;;;:::i;:::-;890:9192;;;8210:52;;8170:92;;2514:67:68;890:9192:66;;2557:14:68;890:9192:66;;;;;2514:67:68;;;890:9192:66;;;;;;;;;;:::i;:::-;;;;;;;;:::i;:::-;;;;-1:-1:-1;890:9192:66;;;;:::o;:::-;;;:::o;985:924:45:-;1165:14;;1161:742;;985:924;;;;;;:::o;1161:742::-;890:9192:66;;-1:-1:-1;;;1203:67:45;;-1:-1:-1;;;;;890:9192:66;;;1203:67:45;;;890:9192:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1203:67:45;;1182:1;1203:67;;;1182:1;;1203:67;;;1161:742;-1:-1:-1;1199:694:45;;1510:383;;;:::i;:::-;890:9192:66;;;1560:18:45;;;11668:33:27;;;;1182:1:45;1664:39;1203:67;890:9192:66;;1182:1:45;1664:39;1556:323;890:9192:66;1750:111:45;;1199:694;-1:-1:-1;;;;;;890:9192:66;-1:-1:-1;;;1317:51:45;1313:182;;1199:694;1161:742;;;;;;;1203:67;;;;890:9192:66;1203:67:45;;890:9192:66;1203:67:45;;;;;;890:9192:66;1203:67:45;;;:::i;:::-;;;890:9192:66;;;;;-1:-1:-1;;;;;;890:9192:66;;;;;;1203:67:45;;;;;;;-1:-1:-1;1203:67:45;;1041:429:55;;;1167:18;;;;1254:33;;;;:::i;:::-;890:9192:66;;;;;;;1308:33:55;:56;;;;1301:63;;;:::o;1308:56::-;-1:-1:-1;;;;;890:9192:66;;;;;1345:19:55;;1301:63;-1:-1:-1;1301:63:55:o;890:9192:66:-;;;;;;;;;;;;1163:301:55;890:9192:66;;;;2105:60:55;890:9192:66;;;;2105:60:55;;;;;;;;;;;;;;;890:9192:66;;;;;;;;;;;:::i;:::-;2105:60:55;890:9192:66;;2105:60:55;;;;;;:::i;:::-;2074:101;;;;;;:::i;:::-;2193:42;;;1163:301;2193:134;;;1395:58;;:::o;2193:134::-;890:9192:66;;2105:60:55;890:9192:66;;;2251:29:55;;890:9192:66;;;;2105:60:55;2251:29;890:9192:66;-1:-1:-1;;;2251:76:55;;1395:58::o;2193:42::-;890:9192:66;;2105:60:55;890:9192:66;;2216:19:55;;2193:42;;;2700:257:68;6023:23:61;;-1:-1:-1;;;;;890:9192:66;;;;2874:20:68;;17916:50:60;890:9192:66;2827:23:68;17916:50:60;:::i;:::-;2874:20:68;;;:::i;:::-;890:9192:66;-1:-1:-1;890:9192:66;3009:11:60;890:9192:66;;;-1:-1:-1;890:9192:66;;2827:23:68;6023::61;:::i;:::-;;2700:257:68:o;13125:887:64:-;;;13252:754;;;;;;;;;;;;;;;;;;;;;;;;;;;13125:887;13252:754;;;;;13125:887::o;13252:754::-;;;;;;;;;;;;;;;;;;;;13094:227:27;10559:17;;;:::i;:::-;-1:-1:-1;;;;;890:9192:66;;10762:18:27;;;890:9192:66;10762:18:27;;13185:1;;10762:18;;10758:258;;13094:227;890:9192:66;;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;;;-1:-1:-1;;;;;;890:9192:66;;;11184:27:27;890:9192:66;;11184:27:27;13219:96;;;13094:227;:::o;10758:258::-;10920:5;;;:::i;:::-;10969:17;;;:::i;:::-;890:9192:66;;;;;;;10758:258:27;;16378:719;890:9192:66;;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;;-1:-1:-1;;;;;890:9192:66;;;;;;;16378:719:27:o;4996:4226:57:-;;;;890:9192:66;;;;;;;5584:131:57;;;;;;;;;;;;;;5796:10;;5792:368;;6270:20;407:4:71;6270:20:57;;6266:143;;6695:300;890:9192:66;6695:300:57;;407:4:71;6695:300:57;;;;;;;;890:9192:66;;6695:300:57;;7259:375;;7700:21;890:9192:66;4996:4226:57;:::o;6266:143::-;1829:135:49;;;940:4;1829:135;;;;;5792:368:57;6126:19;;;407:4:71;6126:19:57;;;890:9192:66;6119:26:57;:::o;7084:141:25:-;890:9192:66;-1:-1:-1;;;;;;;;;;;890:9192:66;;;;7150:18:25;7146:73;;7084:141::o;7146:73::-;7191:17;;;-1:-1:-1;7191:17:25;;-1:-1:-1;7191:17:25;2129:778:53;890:9192:66;;;2129:778:53;2319:2;2299:22;;2319:2;;2751:25;2535:196;;;;;;;;;;;;;;;-1:-1:-1;2535:196:53;2751:25;;:::i;:::-;2744:32;;;;;:::o;2295:606::-;2807:83;;2823:1;2807:83;2827:35;2807:83;;:::o;5203:1551::-;;;6283:66;6270:79;;6266:164;;890:9192:66;;;;;;-1:-1:-1;890:9192:66;;;;;;;;;;;;;;;;;;;6541:24:53;;;;;;;;;-1:-1:-1;6541:24:53;-1:-1:-1;;;;;890:9192:66;;6579:20:53;6575:113;;6698:49;-1:-1:-1;6698:49:53;-1:-1:-1;5203:1551:53;:::o;6575:113::-;6615:62;-1:-1:-1;6615:62:53;6541:24;6615:62;-1:-1:-1;6615:62:53;:::o;6541:24::-;890:9192:66;;;-1:-1:-1;890:9192:66;;;;;6266:164:53;6365:54;;;6381:1;6365:54;6385:30;6365:54;;:::o;4540:305:60:-;890:9192:66;-1:-1:-1;890:9192:66;4677:11:60;890:9192:66;;;-1:-1:-1;890:9192:66;;4707:17:60;;4703:136;4707:17;;;6534:28:61;-1:-1:-1;890:9192:66;4360:14:61;890:9192:66;;;-1:-1:-1;890:9192:66;;4360:26:61;;4740:39:60;-1:-1:-1;4740:39:60;:::o;4703:136::-;4818:4;;4810:18;;-1:-1:-1;4810:18:60:o;4540:305::-;;;890:9192:66;-1:-1:-1;890:9192:66;4677:11:60;;;890:9192:66;;;-1:-1:-1;890:9192:66;;4707:17:60;;;4703:136;4707:17;;;6534:28:61;;;;4360:14;4264:129;-1:-1:-1;890:9192:66;4360:14:61;890:9192:66;;;-1:-1:-1;890:9192:66;;4360:26:61;;4264:129;;6534:28;4740:39:60;-1:-1:-1;4740:39:60;:::o;4703:136::-;4810:18;;4818:4;4810:18;;:::o;7058:687:29:-;890:9192:66;;:::i;:::-;;;;7230:22:29;;;;890:9192:66;;7275:22:29;7268:29;:::o;7226:513::-;-1:-1:-1;;2806:64:29;890:9192:66;7603:15:29;;;;7638:17;:::o;7599:130::-;7694:20;7701:13;7694:20;:::o;7966:723::-;890:9192:66;;:::i;:::-;;;;8147:25:29;;;;890:9192:66;;8195:25:29;8188:32;:::o;8143:540::-;-1:-1:-1;;8507:16:29;890:9192:66;8541:18:29;;;;8579:20;:::o;2241:406:61:-;-1:-1:-1;890:9192:66;;;4360:14:61;;;890:9192:66;;;;;;2325:21:61;;890:9192:66;;;-1:-1:-1;;;890:9192:66;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;2520:14:61;890:9192:66;;;;;;;2576:11:61;:::o;2320:321::-;2618:12;;890:9192:66;2618:12:61;:::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "addCancelPolicy(uint256,((uint128,uint128)[]))": "2566fd46",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "cancel(uint256)": "40e58ee5",
    "cancelPartialTicket(uint256,uint128[])": "eb46d109",
    "changeDefaultCancelPolicy(((uint128,uint128)[]))": "4038ef35",
    "eip712Domain()": "84b0196e",
    "getApproved(uint256)": "081812fc",
    "getCancellationAmount(uint256)": "848c4266",
    "getNonce(address)": "2d0335ab",
    "getPurchaseDataSignatureHash((address,uint96,address,uint96,uint256,uint256,(uint256,uint256)[]))": "8b660a21",
    "getUserVerificationSignatureHash(uint256)": "36b7c917",
    "initialize(address,address,uint96,((uint128,uint128)[]))": "c55dea61",
    "isApprovedForAll(address,address)": "e985e9c5",
    "isValidRedeemSignature(uint256,bytes)": "e6828586",
    "name()": "06fdde03",
    "owner()": "8da5cb5b",
    "ownerOf(uint256)": "6352211e",
    "purchase(address,((address,uint96,address,uint96,uint256,uint256,(uint256,uint256)[]),uint256),bytes)": "5b2ae331",
    "redeem(uint256[])": "f9afb26a",
    "renounceOwnership()": "715018a6",
    "safeTransferFrom(address,address,uint256)": "42842e0e",
    "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setCancelPolicyIdForShowId(uint256,uint256)": "a23cab20",
    "supportsInterface(bytes4)": "01ffc9a7",
    "symbol()": "95d89b41",
    "tokenURI(uint256)": "c87b56dd",
    "transferFrom(address,address,uint256)": "23b872dd",
    "transferOwnership(address)": "f2fde38b",
    "withdrawAssets(address[],address)": "ebeec6ab"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AlreadyUsedData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"CancellerNotOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721IncorrectOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721InsufficientApproval\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOperator\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"ERC721InvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC721InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC721InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ERC721NonexistentToken\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInitialization\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPurchaseData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotInitializing\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Reentrancy\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ShowtimeNotPassed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ShowtimePassed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"StalePurchaseData\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsortedSeatsInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ZeroLength\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"ticketId\",\"type\":\"uint256\"}],\"name\":\"CancelledTicket\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"EIP712DomainChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"version\",\"type\":\"uint64\"}],\"name\":\"Initialized\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"cancelPolicyId\",\"type\":\"uint256\"},{\"components\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"durationLeft\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"percentageWad\",\"type\":\"uint128\"}],\"internalType\":\"struct MasterLib.TimePercentage[]\",\"name\":\"policyMetadata\",\"type\":\"tuple[]\"}],\"internalType\":\"struct MasterLib.CancelPolicyMetadata\",\"name\":\"cancelPolicy\",\"type\":\"tuple\"}],\"name\":\"addCancelPolicy\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"ticketId\",\"type\":\"uint256\"}],\"name\":\"cancel\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"ticketId\",\"type\":\"uint256\"},{\"internalType\":\"uint128[]\",\"name\":\"seatIdsToCancel\",\"type\":\"uint128[]\"}],\"name\":\"cancelPartialTicket\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"durationLeft\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"percentageWad\",\"type\":\"uint128\"}],\"internalType\":\"struct MasterLib.TimePercentage[]\",\"name\":\"policyMetadata\",\"type\":\"tuple[]\"}],\"internalType\":\"struct MasterLib.CancelPolicyMetadata\",\"name\":\"cancelPolicy\",\"type\":\"tuple\"}],\"name\":\"changeDefaultCancelPolicy\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"eip712Domain\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"fields\",\"type\":\"bytes1\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"version\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"verifyingContract\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256[]\",\"name\":\"extensions\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"ticketId\",\"type\":\"uint256\"}],\"name\":\"getCancellationAmount\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getNonce\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"internalType\":\"uint96\",\"name\":\"showTime\",\"type\":\"uint96\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint96\",\"name\":\"showId\",\"type\":\"uint96\"},{\"internalType\":\"uint256\",\"name\":\"originTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"seatId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"internalType\":\"struct TicketLib.SeatData[]\",\"name\":\"seats\",\"type\":\"tuple[]\"}],\"internalType\":\"struct TicketLib.State\",\"name\":\"ticketData\",\"type\":\"tuple\"}],\"name\":\"getPurchaseDataSignatureHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getUserVerificationSignatureHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"verifier\",\"type\":\"address\"},{\"internalType\":\"uint96\",\"name\":\"ttl\",\"type\":\"uint96\"},{\"components\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"durationLeft\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"percentageWad\",\"type\":\"uint128\"}],\"internalType\":\"struct MasterLib.TimePercentage[]\",\"name\":\"policyMetadata\",\"type\":\"tuple[]\"}],\"internalType\":\"struct MasterLib.CancelPolicyMetadata\",\"name\":\"defaultCancelPolicy\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"}],\"name\":\"isValidRedeemSignature\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"ticketOwner\",\"type\":\"address\"},{\"components\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"internalType\":\"uint96\",\"name\":\"showTime\",\"type\":\"uint96\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint96\",\"name\":\"showId\",\"type\":\"uint96\"},{\"internalType\":\"uint256\",\"name\":\"originTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"seatId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"internalType\":\"struct TicketLib.SeatData[]\",\"name\":\"seats\",\"type\":\"tuple[]\"}],\"internalType\":\"struct TicketLib.State\",\"name\":\"ticketData\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"}],\"internalType\":\"struct PurchaseLib.PurchaseData\",\"name\":\"purchaseData\",\"type\":\"tuple\"},{\"internalType\":\"bytes\",\"name\":\"signature\",\"type\":\"bytes\"}],\"name\":\"purchase\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"ticketId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"ticketIds\",\"type\":\"uint256[]\"}],\"name\":\"redeem\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"showId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"policyId\",\"type\":\"uint256\"}],\"name\":\"setCancelPolicyIdForShowId\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"assets\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"benefactor\",\"type\":\"address\"}],\"name\":\"withdrawAssets\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ERC721IncorrectOwner(address,uint256,address)\":[{\"details\":\"Indicates an error related to the ownership over a particular token. Used in transfers.\",\"params\":{\"owner\":\"Address of the current owner of a token.\",\"sender\":\"Address whose tokens are being transferred.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InsufficientApproval(address,uint256)\":[{\"details\":\"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\",\"tokenId\":\"Identifier number of a token.\"}}],\"ERC721InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC721InvalidOperator(address)\":[{\"details\":\"Indicates a failure with the `operator` to be approved. Used in approvals.\",\"params\":{\"operator\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC721InvalidOwner(address)\":[{\"details\":\"Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.\",\"params\":{\"owner\":\"Address of the current owner of a token.\"}}],\"ERC721InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC721InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC721NonexistentToken(uint256)\":[{\"details\":\"Indicates a `tokenId` whose `owner` is the zero address.\",\"params\":{\"tokenId\":\"Identifier number of a token.\"}}],\"InvalidInitialization()\":[{\"details\":\"The contract is already initialized.\"}],\"NotInitializing()\":[{\"details\":\"The contract is not initializing.\"}],\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}],\"Reentrancy()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"EIP712DomainChanged()\":{\"details\":\"MAY be emitted to signal that the domain could have changed.\"},\"Initialized(uint64)\":{\"details\":\"Triggered when the contract has been initialized or reinitialized.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"cancelPartialTicket(uint256,uint128[])\":{\"details\":\"seatIdsToCancel must be in increasing sorted order.\",\"params\":{\"seatIdsToCancel\":\"seatIds to cancel.\",\"ticketId\":\"tokenId of the ticket.\"}},\"eip712Domain()\":{\"details\":\"See {IERC-5267}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"getCancellationAmount(uint256)\":{\"params\":{\"ticketId\":\"ticket Id to get cancellation \"},\"returns\":{\"amount\":\"amount of assets returned.\",\"asset\":\"address of asset to return. \"}},\"getNonce(address)\":{\"params\":{\"user\":\"address of the user\"}},\"getPurchaseDataSignatureHash((address,uint96,address,uint96,uint256,uint256,(uint256,uint256)[]))\":{\"params\":{\"ticketData\":\"ticket data to be signed.\"}},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"getCancellationAmount(uint256)\":{\"notice\":\"Fetched amount of tokens returned post cancellation.\"},\"getNonce(address)\":{\"notice\":\"Fetches nonce of the purchaseData\"},\"getPurchaseDataSignatureHash((address,uint96,address,uint96,uint256,uint256,(uint256,uint256)[]))\":{\"notice\":\"Fetches hash of the purchase data to be signed message.\"},\"getUserVerificationSignatureHash(uint256)\":{\"notice\":\"Fetches hash of the message to be signed by token owner.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Master.sol\":\"Master\"},\"evmVersion\":\"cancun\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol\":{\"keccak256\":\"0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6\",\"dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2\"]},\"node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol\":{\"keccak256\":\"0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609\",\"dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM\"]},\"node_modules/@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol\":{\"keccak256\":\"0x3a0d63838dff3fd8b77c8c44ecf37cc39b15f26fd5269da3b690879478fa3cf3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://502cec8d2ef132cce69840b1c2aef2209092554292a50d628b27477ef7a441ca\",\"dweb:/ipfs/QmaSxcHDndhVuWm4E6LcSMRkhFYsMXxrgLWMLCQnyG3qHr\"]},\"node_modules/@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol\":{\"keccak256\":\"0xfd473ea8f70e13eaa6475c7e348885b8a32925252e3bc237e07c0e3fde0f10f5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea9d17ae8f18568ab1aedf555ebc79906ba3eaaccfa78efbaed05bd3a9e1b6f2\",\"dweb:/ipfs/QmUQDGwCVE72tExiyA9EuwBeaiu9a8DQin3DZxuX76umg4\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol\":{\"keccak256\":\"0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9\",\"dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol\":{\"keccak256\":\"0x7a618cd9a1eea21201ec2ed8484080ca6225215e8883723bef34b9dcf22aa3b5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a73451277e35206f1f8b9f20b2cd41732081bd23523f5a2c64e1e67694c33\",\"dweb:/ipfs/QmdPVK7KACRpoavNUoixGsi8jBWeZUJfNYCzZbHGSGz5yu\"]},\"node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol\":{\"keccak256\":\"0xc8ed8d2056934b7675b695dec032f2920c2f5c6cf33a17ca85650940675323ab\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3c8ccc75d1cd792d192aa09e54dd49ea35fe85baa9fcd17486f29227d9f29b89\",\"dweb:/ipfs/QmbboSbFUEiM9tdEgBwuTRb7bykFoJXZ7dsSr1PSREJXMr\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol\":{\"keccak256\":\"0x4aaaf1c0737dd16e81f0d2b9833c549747a5ede6873bf1444bc72aa572d03e98\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://eada27d7668eebaea16c3b890aa1b38ffc53965292e26c96f7c44834623f4710\",\"dweb:/ipfs/QmVSWuLtxyCqNbLyY89ptxkvsk4CLLKDQYigEne5Qj8k1L\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba\",\"dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC5267.sol\":{\"keccak256\":\"0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a\",\"dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP\"]},\"node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b\",\"dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x68d6fdbeb467192c3627a46aa7bf5cbb73267363b740abc511f521a5a41a446e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7ce608c19d5e917c60f9c8aa3e5f0eb05b326280ac0a235e8bb9a848a3a64a91\",\"dweb:/ipfs/QmdLPsWQJj7JvRae8MM13GEo4PBXaEFmD4b4heqcyMJNPG\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0x61a23d601c2ab69dd726ac55058604cbda98e1d728ba31a51c379a3f9eeea715\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d8cbb06152d82ebdd5ba1d33454e5759492040f309a82637c7e99c948a04fa20\",\"dweb:/ipfs/QmQQuLr6WSfLu97pMEh6XLefk99TSj9k5Qu1zXGPepwGiK\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"keccak256\":\"0x35d120c427299af1525aaf07955314d9e36a62f14408eb93dec71a2e001f74d3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://743e38acf441eece428c008be399c40a3ca5b2d595d58faf656cbdbac1a45374\",\"dweb:/ipfs/QmcWDuWkndox3dxa5P7ZgpKy3iuQKkxBq1cR9hPV1ZzAfa\"]},\"node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Utils.sol\":{\"keccak256\":\"0x30afe9013aaeb3ba735284a9310792776f57a3b2db6fc1d99628f2c47287f5cf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1c675b740746031092efcedb2e18179f05fce8ba482de64e982715e4aa16bc90\",\"dweb:/ipfs/QmVdUD89qYudLc88k5AsuQ6VWyz9SE1c6UXrVK32Yqh1YS\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db\",\"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11\",\"dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34\",\"dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02\",\"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE\"]},\"node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol\":{\"keccak256\":\"0x40399695922383778f9f540a620bec475a2f8e0f08d41f0005682842e28a9855\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://746d295e403931aeb9d6065fd5a0871f43ab5459814a60623611e4b6641a09fd\",\"dweb:/ipfs/QmWrgT8YJrQ9FfD1o3YYArwo57e7MGdpFKuM74qJ4qE34E\"]},\"node_modules/@openzeppelin/contracts/utils/Arrays.sol\":{\"keccak256\":\"0xaf9586854de33dc9d3a7160cad8170fdfb4119d02a44bad90ba16d71d701cc92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c15a02762b0a51d66e36be135c27de656093fc09292fa743df8484b87d4486ea\",\"dweb:/ipfs/QmbEozFrt5XwC9nzDFuXvN1RF3hQVwKYNi8c2R4bFvYJ2X\"]},\"node_modules/@openzeppelin/contracts/utils/Comparators.sol\":{\"keccak256\":\"0x302eecd8cf323b4690e3494a7d960b3cbce077032ab8ef655b323cdd136cec58\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://49ba706f1bc476d68fe6c1fad75517acea4e9e275be0989b548e292eb3a3eacd\",\"dweb:/ipfs/QmeBpvcdGWzWMKTQESUCEhHgnEQYYATVwPxLMxa6vMT7jC\"]},\"node_modules/@openzeppelin/contracts/utils/Panic.sol\":{\"keccak256\":\"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a\",\"dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG\"]},\"node_modules/@openzeppelin/contracts/utils/SlotDerivation.sol\":{\"keccak256\":\"0x8447b57b63810fe2e367c09496a966f143ec0e825d71ddb9fce2506cff84b618\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://996cb48f793bf151555045b37138e36b3cdb31d6bc6552d3149285260be00cfb\",\"dweb:/ipfs/QmcLaTTMNVbkMx58xhkp6GeFt4V3GtSyupZuaKG3vYW2Zc\"]},\"node_modules/@openzeppelin/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b\",\"dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM\"]},\"node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x725209b582291bb83058e3078624b53d15a133f7401c30295e7f3704181d2aed\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0564ddb19c6d870e27b789d8f985283d815267ad7224883c2d5243c8bacc7dc0\",\"dweb:/ipfs/QmeC953H4sj88ZRFdJNFdmpf7J9SksP1wK4jyMHLo66z49\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0x69f54c02b7d81d505910ec198c11ed4c6a728418a868b906b4a0cf29946fda84\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8e25e4bdb7ae1f21d23bfee996e22736fc0ab44cfabedac82a757b1edc5623b9\",\"dweb:/ipfs/QmQdWQvB6JCP9ZMbzi8EvQ1PTETqkcTWrbcVurS7DKpa5n\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol\":{\"keccak256\":\"0x4515543bc4c78561f6bea83ecfdfc3dead55bd59858287d682045b11de1ae575\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://60601f91440125727244fffd2ba84da7caafecaae0fd887c7ccfec678e02b61e\",\"dweb:/ipfs/QmZnKPBtVDiQS9Dp8gZ4sa3ZeTrWVfqF7yuUd6Y8hwm1Rs\"]},\"node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol\":{\"keccak256\":\"0xbdc3bb48ccedb818cd75a6d74a16df55a822e9f6d3cc54c59f576f10aab67b5f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2284f25f2478f419d7781573b17a89d0e7c5589a865d55e2d6ed5163aee23aa8\",\"dweb:/ipfs/QmNsr2625APBQiNKpYnX5VcSnYgfUHR9Uzzp9pRXjoDqK7\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]},\"node_modules/@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa00be322d7db5786750ce0ac7e2f5b633ac30a5ed5fa1ced1e74acfc19acecea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c84e822f87cbdc4082533b626667b6928715bb2b1e8e7eb96954cebb9e38c8d\",\"dweb:/ipfs/QmZmy9dgxLTerBAQDuuHqbL6EpgRxddqgv5KmwpXYVbKz1\"]},\"node_modules/@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8\",\"dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy\"]},\"node_modules/@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03\",\"dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ\"]},\"node_modules/@openzeppelin/contracts/utils/structs/EnumerableMap.sol\":{\"keccak256\":\"0xafb7be6c8945a04bdd080fd6a3a3d0fa0329f1ad0d3bcd431dc1dcf2462d3da9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e5a595aaee5f9fcfa163293afd9518d069fa424bffbf65d53d961d0394ed1dc5\",\"dweb:/ipfs/Qmb8U9Z38K1nmKwP895JoUo8pupwexUnjzcgAC6STzpQo4\"]},\"node_modules/@openzeppelin/contracts/utils/structs/EnumerableSet.sol\":{\"keccak256\":\"0x9b161e97b8967d4bc0c08d25741889a30692cdda4b71910bf1b0e315f1962212\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://821500c39d095eaa25b06f46e65f1d0e97c4c96b39227f79077dee7d9e84051f\",\"dweb:/ipfs/QmSTeGorKzSWF6HAmxo32uCZiEuKNvreQdUiX1AaYtUMTz\"]},\"node_modules/solady/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98\",\"dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi\"]},\"node_modules/solady/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0x7d0de1ff3be5dc32635283280b000d4794015a1b61d7dae7f3ff7b0721b07210\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e307c9eece677565e7d584ee77c56134b5db38a70f557f9d2b1b308219276c0c\",\"dweb:/ipfs/QmTEtqaTFgRBFGpJyb5o4v2w8yrSpcNThov4bNpcLr2tTR\"]},\"src/Master.sol\":{\"keccak256\":\"0x1ba44f89ecb2c99b24df0905b5a5c6ac63584a67433a106dd9601f89d6617c60\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://a3d0cb1086c3612ee54ed3c863ec745d2d0a134271053a0d108ab54d4f071be9\",\"dweb:/ipfs/QmZudva91xWWujTMGpKJz5Da4TN9gDs5PgYbjwULkmxvRz\"]},\"src/entities/MasterLib.sol\":{\"keccak256\":\"0x837c509b89b4a1ec8c38c7bec32fefada40cdc1e96e4d4d62ae806efa8691d16\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://885e3e1c56e1ae980c42cf66b3fc8a5520c5a9872c179167c6eef7f058768b9f\",\"dweb:/ipfs/QmeqypkS8ujW8njcanzPc9QQWz5Uo3BGgTTj3cYig6DE1t\"]},\"src/entities/PurchaseLib.sol\":{\"keccak256\":\"0x0faf175977a5a4a1ca3cf6be67491d50faa16a70588fc91ec8de661eb81b288f\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://83a9356cf98d7b0a11385178e64bfb112b6b3ab21ff55239aba0b9083a3e2b1d\",\"dweb:/ipfs/QmZ4AypZZkB3P5eS4vFzEr8jep5rT5oYZZApGsKkSAQqAy\"]},\"src/entities/TicketLib.sol\":{\"keccak256\":\"0xa6ccfa22ffb3bb618fc6f5eff76305ee2b841bedb62a047b6a59fa7377bb1054\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://0e5abecb549920be4e17adfc716a4bb15f920b0d87c799b5a05af2696814798b\",\"dweb:/ipfs/QmZK4MqhwudXgFjDcgdb8sMjUKgscy6STh2wZov9kfytGm\"]},\"src/interface/Constants.sol\":{\"keccak256\":\"0x9d8af3fdec1edf3be3195790a120cc804291c35f9fa2913ff081014929bae4d0\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://12502fc73c76bfc0a4949825ce5a80b3ac3741e545fa4dd718ee4a93485744ea\",\"dweb:/ipfs/QmaFgjXeS8pZTue2DtLv7Ei1Z3rtBoA5znqSxaw1KSpo1E\"]},\"src/interface/Errors.sol\":{\"keccak256\":\"0x2e676a9069368eb6a529e68cfa4b8ded2a7fd0fc94582ad9dd57c00b969f3796\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://66d44d0664c9037c1a3e857e50671fe0d0c4e27c9175166909afca2b1a01a092\",\"dweb:/ipfs/QmXbdDk7p99hdoca9MqNz9SZs87AeNH3T9AqMywUGDEJGs\"]},\"src/interface/Events.sol\":{\"keccak256\":\"0x46e546c118f5fb38ab712acee69b912d95d96ef85c5190dc4092ec6506d9d0fb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8f8491285d19ed1dc49f8ddeb76dfb2d68f9db8f01eb2f30610d8e037419e9f\",\"dweb:/ipfs/QmfSGzfXUAAdPgrAbNcBRCmBMPKMkrqfkJYcATmEdGCc4u\"]}},\"version\":1}",
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
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "AlreadyUsedData"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "CancellerNotOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721IncorrectOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC721InsufficientApproval"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidApprover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidOperator"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidReceiver"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC721InvalidSender"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC721NonexistentToken"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidAmount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidInitialization"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPurchaseData"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NotInitializing"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableInvalidOwner"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "OwnableUnauthorizedAccount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Reentrancy"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ShowtimeNotPassed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ShowtimePassed"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "StalePurchaseData"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsortedSeatsInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "ZeroLength"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "approved",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "ticketId",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "CancelledTicket",
          "anonymous": false
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
          "inputs": [
            {
              "internalType": "address",
              "name": "previousOwner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "cancelPolicyId",
              "type": "uint256"
            },
            {
              "internalType": "struct MasterLib.CancelPolicyMetadata",
              "name": "cancelPolicy",
              "type": "tuple",
              "components": [
                {
                  "internalType": "struct MasterLib.TimePercentage[]",
                  "name": "policyMetadata",
                  "type": "tuple[]",
                  "components": [
                    {
                      "internalType": "uint128",
                      "name": "durationLeft",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "percentageWad",
                      "type": "uint128"
                    }
                  ]
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "addCancelPolicy"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "ticketId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "cancel"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "ticketId",
              "type": "uint256"
            },
            {
              "internalType": "uint128[]",
              "name": "seatIdsToCancel",
              "type": "uint128[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "cancelPartialTicket"
        },
        {
          "inputs": [
            {
              "internalType": "struct MasterLib.CancelPolicyMetadata",
              "name": "cancelPolicy",
              "type": "tuple",
              "components": [
                {
                  "internalType": "struct MasterLib.TimePercentage[]",
                  "name": "policyMetadata",
                  "type": "tuple[]",
                  "components": [
                    {
                      "internalType": "uint128",
                      "name": "durationLeft",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "percentageWad",
                      "type": "uint128"
                    }
                  ]
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "changeDefaultCancelPolicy"
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
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "ticketId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getCancellationAmount",
          "outputs": [
            {
              "internalType": "address",
              "name": "asset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getNonce",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct TicketLib.State",
              "name": "ticketData",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "asset",
                  "type": "address"
                },
                {
                  "internalType": "uint96",
                  "name": "showTime",
                  "type": "uint96"
                },
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "uint96",
                  "name": "showId",
                  "type": "uint96"
                },
                {
                  "internalType": "uint256",
                  "name": "originTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "struct TicketLib.SeatData[]",
                  "name": "seats",
                  "type": "tuple[]",
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "seatId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "price",
                      "type": "uint256"
                    }
                  ]
                }
              ]
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getPurchaseDataSignatureHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getUserVerificationSignatureHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "verifier",
              "type": "address"
            },
            {
              "internalType": "uint96",
              "name": "ttl",
              "type": "uint96"
            },
            {
              "internalType": "struct MasterLib.CancelPolicyMetadata",
              "name": "defaultCancelPolicy",
              "type": "tuple",
              "components": [
                {
                  "internalType": "struct MasterLib.TimePercentage[]",
                  "name": "policyMetadata",
                  "type": "tuple[]",
                  "components": [
                    {
                      "internalType": "uint128",
                      "name": "durationLeft",
                      "type": "uint128"
                    },
                    {
                      "internalType": "uint128",
                      "name": "percentageWad",
                      "type": "uint128"
                    }
                  ]
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "initialize"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "signature",
              "type": "bytes"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isValidRedeemSignature",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "ticketOwner",
              "type": "address"
            },
            {
              "internalType": "struct PurchaseLib.PurchaseData",
              "name": "purchaseData",
              "type": "tuple",
              "components": [
                {
                  "internalType": "struct TicketLib.State",
                  "name": "ticketData",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "address",
                      "name": "asset",
                      "type": "address"
                    },
                    {
                      "internalType": "uint96",
                      "name": "showTime",
                      "type": "uint96"
                    },
                    {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                    },
                    {
                      "internalType": "uint96",
                      "name": "showId",
                      "type": "uint96"
                    },
                    {
                      "internalType": "uint256",
                      "name": "originTimestamp",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    },
                    {
                      "internalType": "struct TicketLib.SeatData[]",
                      "name": "seats",
                      "type": "tuple[]",
                      "components": [
                        {
                          "internalType": "uint256",
                          "name": "seatId",
                          "type": "uint256"
                        },
                        {
                          "internalType": "uint256",
                          "name": "price",
                          "type": "uint256"
                        }
                      ]
                    }
                  ]
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                }
              ]
            },
            {
              "internalType": "bytes",
              "name": "signature",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "purchase",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "ticketId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256[]",
              "name": "ticketIds",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeem"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "showId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "policyId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setCancelPolicyIdForShowId"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "assets",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "benefactor",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "withdrawAssets"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "approve(address,uint256)": {
            "details": "See {IERC721-approve}."
          },
          "balanceOf(address)": {
            "details": "See {IERC721-balanceOf}."
          },
          "cancelPartialTicket(uint256,uint128[])": {
            "details": "seatIdsToCancel must be in increasing sorted order.",
            "params": {
              "seatIdsToCancel": "seatIds to cancel.",
              "ticketId": "tokenId of the ticket."
            }
          },
          "eip712Domain()": {
            "details": "See {IERC-5267}."
          },
          "getApproved(uint256)": {
            "details": "See {IERC721-getApproved}."
          },
          "getCancellationAmount(uint256)": {
            "params": {
              "ticketId": "ticket Id to get cancellation "
            },
            "returns": {
              "amount": "amount of assets returned.",
              "asset": "address of asset to return. "
            }
          },
          "getNonce(address)": {
            "params": {
              "user": "address of the user"
            }
          },
          "getPurchaseDataSignatureHash((address,uint96,address,uint96,uint256,uint256,(uint256,uint256)[]))": {
            "params": {
              "ticketData": "ticket data to be signed."
            }
          },
          "isApprovedForAll(address,address)": {
            "details": "See {IERC721-isApprovedForAll}."
          },
          "name()": {
            "details": "See {IERC721Metadata-name}."
          },
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "ownerOf(uint256)": {
            "details": "See {IERC721-ownerOf}."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
          },
          "safeTransferFrom(address,address,uint256)": {
            "details": "See {IERC721-safeTransferFrom}."
          },
          "safeTransferFrom(address,address,uint256,bytes)": {
            "details": "See {IERC721-safeTransferFrom}."
          },
          "setApprovalForAll(address,bool)": {
            "details": "See {IERC721-setApprovalForAll}."
          },
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
          },
          "symbol()": {
            "details": "See {IERC721Metadata-symbol}."
          },
          "tokenURI(uint256)": {
            "details": "See {IERC721Metadata-tokenURI}."
          },
          "transferFrom(address,address,uint256)": {
            "details": "See {IERC721-transferFrom}."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "getCancellationAmount(uint256)": {
            "notice": "Fetched amount of tokens returned post cancellation."
          },
          "getNonce(address)": {
            "notice": "Fetches nonce of the purchaseData"
          },
          "getPurchaseDataSignatureHash((address,uint96,address,uint96,uint256,uint256,(uint256,uint256)[]))": {
            "notice": "Fetches hash of the purchase data to be signed message."
          },
          "getUserVerificationSignatureHash(uint256)": {
            "notice": "Fetches hash of the message to be signed by token owner."
          }
        },
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
        "src/Master.sol": "Master"
      },
      "evmVersion": "cancun",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol": {
        "keccak256": "0xc163fcf9bb10138631a9ba5564df1fa25db9adff73bd9ee868a8ae1858fe093a",
        "urls": [
          "bzz-raw://9706d43a0124053d9880f6e31a59f31bc0a6a3dc1acd66ce0a16e1111658c5f6",
          "dweb:/ipfs/QmUFmfowzkRwGtDu36cXV9SPTBHJ3n7dG9xQiK5B28jTf2"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol": {
        "keccak256": "0x631188737069917d2f909d29ce62c4d48611d326686ba6683e26b72a23bfac0b",
        "urls": [
          "bzz-raw://7a61054ae84cd6c4d04c0c4450ba1d6de41e27e0a2c4f1bcdf58f796b401c609",
          "dweb:/ipfs/QmUvtdp7X1mRVyC3CsHrtPbgoqWaXHp3S1ZR24tpAQYJWM"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol": {
        "keccak256": "0x3a0d63838dff3fd8b77c8c44ecf37cc39b15f26fd5269da3b690879478fa3cf3",
        "urls": [
          "bzz-raw://502cec8d2ef132cce69840b1c2aef2209092554292a50d628b27477ef7a441ca",
          "dweb:/ipfs/QmaSxcHDndhVuWm4E6LcSMRkhFYsMXxrgLWMLCQnyG3qHr"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol": {
        "keccak256": "0xfd473ea8f70e13eaa6475c7e348885b8a32925252e3bc237e07c0e3fde0f10f5",
        "urls": [
          "bzz-raw://ea9d17ae8f18568ab1aedf555ebc79906ba3eaaccfa78efbaed05bd3a9e1b6f2",
          "dweb:/ipfs/QmUQDGwCVE72tExiyA9EuwBeaiu9a8DQin3DZxuX76umg4"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol": {
        "keccak256": "0xdbef5f0c787055227243a7318ef74c8a5a1108ca3a07f2b3a00ef67769e1e397",
        "urls": [
          "bzz-raw://08e39f23d5b4692f9a40803e53a8156b72b4c1f9902a88cd65ba964db103dab9",
          "dweb:/ipfs/QmPKn6EYDgpga7KtpkA8wV2yJCYGMtc9K4LkJfhKX2RVSV"
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
      "node_modules/@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol": {
        "keccak256": "0xc8ed8d2056934b7675b695dec032f2920c2f5c6cf33a17ca85650940675323ab",
        "urls": [
          "bzz-raw://3c8ccc75d1cd792d192aa09e54dd49ea35fe85baa9fcd17486f29227d9f29b89",
          "dweb:/ipfs/QmbboSbFUEiM9tdEgBwuTRb7bykFoJXZ7dsSr1PSREJXMr"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/interfaces/IERC1271.sol": {
        "keccak256": "0x4aaaf1c0737dd16e81f0d2b9833c549747a5ede6873bf1444bc72aa572d03e98",
        "urls": [
          "bzz-raw://eada27d7668eebaea16c3b890aa1b38ffc53965292e26c96f7c44834623f4710",
          "dweb:/ipfs/QmVSWuLtxyCqNbLyY89ptxkvsk4CLLKDQYigEne5Qj8k1L"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/interfaces/IERC20.sol": {
        "keccak256": "0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c",
        "urls": [
          "bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba",
          "dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1"
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
      "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol": {
        "keccak256": "0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b",
        "urls": [
          "bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b",
          "dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol": {
        "keccak256": "0x68d6fdbeb467192c3627a46aa7bf5cbb73267363b740abc511f521a5a41a446e",
        "urls": [
          "bzz-raw://7ce608c19d5e917c60f9c8aa3e5f0eb05b326280ac0a235e8bb9a848a3a64a91",
          "dweb:/ipfs/QmdLPsWQJj7JvRae8MM13GEo4PBXaEFmD4b4heqcyMJNPG"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol": {
        "keccak256": "0x61a23d601c2ab69dd726ac55058604cbda98e1d728ba31a51c379a3f9eeea715",
        "urls": [
          "bzz-raw://d8cbb06152d82ebdd5ba1d33454e5759492040f309a82637c7e99c948a04fa20",
          "dweb:/ipfs/QmQQuLr6WSfLu97pMEh6XLefk99TSj9k5Qu1zXGPepwGiK"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol": {
        "keccak256": "0x35d120c427299af1525aaf07955314d9e36a62f14408eb93dec71a2e001f74d3",
        "urls": [
          "bzz-raw://743e38acf441eece428c008be399c40a3ca5b2d595d58faf656cbdbac1a45374",
          "dweb:/ipfs/QmcWDuWkndox3dxa5P7ZgpKy3iuQKkxBq1cR9hPV1ZzAfa"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC1155/utils/ERC1155Utils.sol": {
        "keccak256": "0x30afe9013aaeb3ba735284a9310792776f57a3b2db6fc1d99628f2c47287f5cf",
        "urls": [
          "bzz-raw://1c675b740746031092efcedb2e18179f05fce8ba482de64e982715e4aa16bc90",
          "dweb:/ipfs/QmVdUD89qYudLc88k5AsuQ6VWyz9SE1c6UXrVK32Yqh1YS"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7",
        "urls": [
          "bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db",
          "dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol": {
        "keccak256": "0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261",
        "urls": [
          "bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11",
          "dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol": {
        "keccak256": "0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d",
        "urls": [
          "bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34",
          "dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
        "keccak256": "0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1",
        "urls": [
          "bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02",
          "dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol": {
        "keccak256": "0x40399695922383778f9f540a620bec475a2f8e0f08d41f0005682842e28a9855",
        "urls": [
          "bzz-raw://746d295e403931aeb9d6065fd5a0871f43ab5459814a60623611e4b6641a09fd",
          "dweb:/ipfs/QmWrgT8YJrQ9FfD1o3YYArwo57e7MGdpFKuM74qJ4qE34E"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Arrays.sol": {
        "keccak256": "0xaf9586854de33dc9d3a7160cad8170fdfb4119d02a44bad90ba16d71d701cc92",
        "urls": [
          "bzz-raw://c15a02762b0a51d66e36be135c27de656093fc09292fa743df8484b87d4486ea",
          "dweb:/ipfs/QmbEozFrt5XwC9nzDFuXvN1RF3hQVwKYNi8c2R4bFvYJ2X"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Comparators.sol": {
        "keccak256": "0x302eecd8cf323b4690e3494a7d960b3cbce077032ab8ef655b323cdd136cec58",
        "urls": [
          "bzz-raw://49ba706f1bc476d68fe6c1fad75517acea4e9e275be0989b548e292eb3a3eacd",
          "dweb:/ipfs/QmeBpvcdGWzWMKTQESUCEhHgnEQYYATVwPxLMxa6vMT7jC"
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
      "node_modules/@openzeppelin/contracts/utils/SlotDerivation.sol": {
        "keccak256": "0x8447b57b63810fe2e367c09496a966f143ec0e825d71ddb9fce2506cff84b618",
        "urls": [
          "bzz-raw://996cb48f793bf151555045b37138e36b3cdb31d6bc6552d3149285260be00cfb",
          "dweb:/ipfs/QmcLaTTMNVbkMx58xhkp6GeFt4V3GtSyupZuaKG3vYW2Zc"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/StorageSlot.sol": {
        "keccak256": "0xcf74f855663ce2ae00ed8352666b7935f6cddea2932fdf2c3ecd30a9b1cd0e97",
        "urls": [
          "bzz-raw://9f660b1f351b757dfe01438e59888f31f33ded3afcf5cb5b0d9bf9aa6f320a8b",
          "dweb:/ipfs/QmarDJ5hZEgBtCmmrVzEZWjub9769eD686jmzb2XpSU1cM"
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
      "node_modules/@openzeppelin/contracts/utils/cryptography/ECDSA.sol": {
        "keccak256": "0x69f54c02b7d81d505910ec198c11ed4c6a728418a868b906b4a0cf29946fda84",
        "urls": [
          "bzz-raw://8e25e4bdb7ae1f21d23bfee996e22736fc0ab44cfabedac82a757b1edc5623b9",
          "dweb:/ipfs/QmQdWQvB6JCP9ZMbzi8EvQ1PTETqkcTWrbcVurS7DKpa5n"
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
      "node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol": {
        "keccak256": "0xbdc3bb48ccedb818cd75a6d74a16df55a822e9f6d3cc54c59f576f10aab67b5f",
        "urls": [
          "bzz-raw://2284f25f2478f419d7781573b17a89d0e7c5589a865d55e2d6ed5163aee23aa8",
          "dweb:/ipfs/QmNsr2625APBQiNKpYnX5VcSnYgfUHR9Uzzp9pRXjoDqK7"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8",
        "urls": [
          "bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621",
          "dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL"
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
      },
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
      },
      "node_modules/solady/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8",
        "urls": [
          "bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98",
          "dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi"
        ],
        "license": "MIT"
      },
      "node_modules/solady/src/utils/SafeTransferLib.sol": {
        "keccak256": "0x7d0de1ff3be5dc32635283280b000d4794015a1b61d7dae7f3ff7b0721b07210",
        "urls": [
          "bzz-raw://e307c9eece677565e7d584ee77c56134b5db38a70f557f9d2b1b308219276c0c",
          "dweb:/ipfs/QmTEtqaTFgRBFGpJyb5o4v2w8yrSpcNThov4bNpcLr2tTR"
        ],
        "license": "MIT"
      },
      "src/Master.sol": {
        "keccak256": "0x1ba44f89ecb2c99b24df0905b5a5c6ac63584a67433a106dd9601f89d6617c60",
        "urls": [
          "bzz-raw://a3d0cb1086c3612ee54ed3c863ec745d2d0a134271053a0d108ab54d4f071be9",
          "dweb:/ipfs/QmZudva91xWWujTMGpKJz5Da4TN9gDs5PgYbjwULkmxvRz"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/MasterLib.sol": {
        "keccak256": "0x837c509b89b4a1ec8c38c7bec32fefada40cdc1e96e4d4d62ae806efa8691d16",
        "urls": [
          "bzz-raw://885e3e1c56e1ae980c42cf66b3fc8a5520c5a9872c179167c6eef7f058768b9f",
          "dweb:/ipfs/QmeqypkS8ujW8njcanzPc9QQWz5Uo3BGgTTj3cYig6DE1t"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/PurchaseLib.sol": {
        "keccak256": "0x0faf175977a5a4a1ca3cf6be67491d50faa16a70588fc91ec8de661eb81b288f",
        "urls": [
          "bzz-raw://83a9356cf98d7b0a11385178e64bfb112b6b3ab21ff55239aba0b9083a3e2b1d",
          "dweb:/ipfs/QmZ4AypZZkB3P5eS4vFzEr8jep5rT5oYZZApGsKkSAQqAy"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/TicketLib.sol": {
        "keccak256": "0xa6ccfa22ffb3bb618fc6f5eff76305ee2b841bedb62a047b6a59fa7377bb1054",
        "urls": [
          "bzz-raw://0e5abecb549920be4e17adfc716a4bb15f920b0d87c799b5a05af2696814798b",
          "dweb:/ipfs/QmZK4MqhwudXgFjDcgdb8sMjUKgscy6STh2wZov9kfytGm"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interface/Constants.sol": {
        "keccak256": "0x9d8af3fdec1edf3be3195790a120cc804291c35f9fa2913ff081014929bae4d0",
        "urls": [
          "bzz-raw://12502fc73c76bfc0a4949825ce5a80b3ac3741e545fa4dd718ee4a93485744ea",
          "dweb:/ipfs/QmaFgjXeS8pZTue2DtLv7Ei1Z3rtBoA5znqSxaw1KSpo1E"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interface/Errors.sol": {
        "keccak256": "0x2e676a9069368eb6a529e68cfa4b8ded2a7fd0fc94582ad9dd57c00b969f3796",
        "urls": [
          "bzz-raw://66d44d0664c9037c1a3e857e50671fe0d0c4e27c9175166909afca2b1a01a092",
          "dweb:/ipfs/QmXbdDk7p99hdoca9MqNz9SZs87AeNH3T9AqMywUGDEJGs"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interface/Events.sol": {
        "keccak256": "0x46e546c118f5fb38ab712acee69b912d95d96ef85c5190dc4092ec6506d9d0fb",
        "urls": [
          "bzz-raw://e8f8491285d19ed1dc49f8ddeb76dfb2d68f9db8f01eb2f30610d8e037419e9f",
          "dweb:/ipfs/QmfSGzfXUAAdPgrAbNcBRCmBMPKMkrqfkJYcATmEdGCc4u"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/Master.sol",
    "id": 56499,
    "exportedSymbols": {
      "AlreadyUsedData": [
        57294
      ],
      "Arrays": [
        45477
      ],
      "CancelledTicket": [
        57320
      ],
      "CancellerNotOwner": [
        57306
      ],
      "Constants": [
        57286
      ],
      "ContextUpgradeable": [
        42841
      ],
      "ECDSA": [
        46513
      ],
      "EIP712Upgradeable": [
        43185
      ],
      "ERC1155Upgradeable": [
        41715
      ],
      "ERC1155Utils": [
        43740
      ],
      "ERC165Upgradeable": [
        43225
      ],
      "ERC721Upgradeable": [
        42795
      ],
      "ERC721Utils": [
        44599
      ],
      "IERC1155": [
        43528
      ],
      "IERC1155Errors": [
        43405
      ],
      "IERC1155MetadataURI": [
        43586
      ],
      "IERC1271": [
        43239
      ],
      "IERC165": [
        46707
      ],
      "IERC20": [
        44333
      ],
      "IERC5267": [
        43268
      ],
      "IERC721": [
        44476
      ],
      "IERC721Errors": [
        43358
      ],
      "IERC721Metadata": [
        44522
      ],
      "Initializable": [
        40718
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
      "Master": [
        56498
      ],
      "MasterLib": [
        56938
      ],
      "Math": [
        48313
      ],
      "MessageHashUtils": [
        46587
      ],
      "NotAllowlistedAsset": [
        57302
      ],
      "OwnableUpgradeable": [
        40464
      ],
      "Panic": [
        45591
      ],
      "PurchaseLib": [
        56978
      ],
      "ReentrancyGuard": [
        54895
      ],
      "SafeCast": [
        50078
      ],
      "SafeTransferLib": [
        55229
      ],
      "ShowtimeNotPassed": [
        57310
      ],
      "ShowtimePassed": [
        57308
      ],
      "SignatureChecker": [
        46695
      ],
      "SignerNotOwner": [
        57304
      ],
      "StalePurchaseData": [
        57292
      ],
      "Strings": [
        46165
      ],
      "TicketLib": [
        57254
      ],
      "UnsortedSeatsInput": [
        57312
      ],
      "ZeroLength": [
        57298
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:10032:66",
    "nodes": [
      {
        "id": 55665,
        "nodeType": "PragmaDirective",
        "src": "51:24:66",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".25"
        ]
      },
      {
        "id": 55666,
        "nodeType": "ImportDirective",
        "src": "77:65:66",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol",
        "file": "@openzeppelin-upgradeable/access/OwnableUpgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 40465,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55667,
        "nodeType": "ImportDirective",
        "src": "143:72:66",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol",
        "file": "@openzeppelin-upgradeable/token/ERC1155/ERC1155Upgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 41716,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55668,
        "nodeType": "ImportDirective",
        "src": "216:70:66",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol",
        "file": "@openzeppelin-upgradeable/token/ERC721/ERC721Upgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 42796,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55669,
        "nodeType": "ImportDirective",
        "src": "287:76:66",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol",
        "file": "@openzeppelin-upgradeable/utils/cryptography/EIP712Upgradeable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 43186,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55670,
        "nodeType": "ImportDirective",
        "src": "364:73:66",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol",
        "file": "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 46696,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55671,
        "nodeType": "ImportDirective",
        "src": "438:55:66",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/IERC20.sol",
        "file": "@openzeppelin/contracts/interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 43244,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55672,
        "nodeType": "ImportDirective",
        "src": "494:53:66",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/math/Math.sol",
        "file": "@openzeppelin/contracts/utils/math/Math.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 48314,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55673,
        "nodeType": "ImportDirective",
        "src": "549:46:66",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/SafeTransferLib.sol",
        "file": "solady/src/utils/SafeTransferLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 55230,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55674,
        "nodeType": "ImportDirective",
        "src": "596:46:66",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/ReentrancyGuard.sol",
        "file": "solady/src/utils/ReentrancyGuard.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 54896,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55675,
        "nodeType": "ImportDirective",
        "src": "644:32:66",
        "nodes": [],
        "absolutePath": "src/interface/Errors.sol",
        "file": "./interface/Errors.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 57315,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55677,
        "nodeType": "ImportDirective",
        "src": "677:51:66",
        "nodes": [],
        "absolutePath": "src/entities/MasterLib.sol",
        "file": "./entities/MasterLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 56939,
        "symbolAliases": [
          {
            "foreign": {
              "id": 55676,
              "name": "MasterLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 56938,
              "src": "685:9:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 55680,
        "nodeType": "ImportDirective",
        "src": "729:66:66",
        "nodes": [],
        "absolutePath": "src/entities/PurchaseLib.sol",
        "file": "./entities/PurchaseLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 56979,
        "symbolAliases": [
          {
            "foreign": {
              "id": 55678,
              "name": "PurchaseLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 56978,
              "src": "737:11:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 55679,
              "name": "TicketLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 57254,
              "src": "750:9:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 55681,
        "nodeType": "ImportDirective",
        "src": "797:35:66",
        "nodes": [],
        "absolutePath": "src/interface/Constants.sol",
        "file": "./interface/Constants.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 57287,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 55683,
        "nodeType": "ImportDirective",
        "src": "833:55:66",
        "nodes": [],
        "absolutePath": "src/interface/Events.sol",
        "file": "./interface/Events.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 56499,
        "sourceUnit": 57321,
        "symbolAliases": [
          {
            "foreign": {
              "id": 55682,
              "name": "CancelledTicket",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 57320,
              "src": "841:15:66",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 56498,
        "nodeType": "ContractDefinition",
        "src": "890:9192:66",
        "nodes": [
          {
            "id": 55695,
            "nodeType": "UsingForDirective",
            "src": "989:36:66",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 55692,
              "name": "MasterLib",
              "nameLocations": [
                "995:9:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 56938,
              "src": "995:9:66"
            },
            "typeName": {
              "id": 55694,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 55693,
                "name": "MasterLib.State",
                "nameLocations": [
                  "1009:9:66",
                  "1019:5:66"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 56539,
                "src": "1009:15:66"
              },
              "referencedDeclaration": 56539,
              "src": "1009:15:66",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                "typeString": "struct MasterLib.State"
              }
            }
          },
          {
            "id": 55699,
            "nodeType": "UsingForDirective",
            "src": "1030:51:66",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 55696,
              "name": "MasterLib",
              "nameLocations": [
                "1036:9:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 56938,
              "src": "1036:9:66"
            },
            "typeName": {
              "id": 55698,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 55697,
                "name": "MasterLib.CancelPolicyMetadata",
                "nameLocations": [
                  "1050:9:66",
                  "1060:20:66"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 56544,
                "src": "1050:30:66"
              },
              "referencedDeclaration": 56544,
              "src": "1050:30:66",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                "typeString": "struct MasterLib.CancelPolicyMetadata"
              }
            }
          },
          {
            "id": 55703,
            "nodeType": "UsingForDirective",
            "src": "1086:36:66",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 55700,
              "name": "TicketLib",
              "nameLocations": [
                "1092:9:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 57254,
              "src": "1092:9:66"
            },
            "typeName": {
              "id": 55702,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 55701,
                "name": "TicketLib.State",
                "nameLocations": [
                  "1106:9:66",
                  "1116:5:66"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 57002,
                "src": "1106:15:66"
              },
              "referencedDeclaration": 57002,
              "src": "1106:15:66",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                "typeString": "struct TicketLib.State"
              }
            }
          },
          {
            "id": 55707,
            "nodeType": "UsingForDirective",
            "src": "1127:47:66",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 55704,
              "name": "PurchaseLib",
              "nameLocations": [
                "1133:11:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 56978,
              "src": "1133:11:66"
            },
            "typeName": {
              "id": 55706,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 55705,
                "name": "PurchaseLib.PurchaseData",
                "nameLocations": [
                  "1149:11:66",
                  "1161:12:66"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 56954,
                "src": "1149:24:66"
              },
              "referencedDeclaration": 56954,
              "src": "1149:24:66",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_PurchaseData_$56954_storage_ptr",
                "typeString": "struct PurchaseLib.PurchaseData"
              }
            }
          },
          {
            "id": 55710,
            "nodeType": "VariableDeclaration",
            "src": "1276:126:66",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MASTER_LIB_STORAGE_SLOT",
            "nameLocation": "1302:23:66",
            "scope": 56498,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 55708,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1276:7:66",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307861383530663963623139306433346563613936386165656538633935316234373635653632373434643763313338343761336164333932616438363439313030",
              "id": 55709,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1336:66:66",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_76131630337518788502901501502746484041859407509608347545736598695983404323072_by_1",
                "typeString": "int_const 7613...(69 digits omitted)...3072"
              },
              "value": "0xa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100"
            },
            "visibility": "internal"
          },
          {
            "id": 55713,
            "nodeType": "VariableDeclaration",
            "src": "1456:133:66",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "USER_VERIFICATION_MESSAGE_HASH",
            "nameLocation": "1482:30:66",
            "scope": 56498,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 55711,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1456:7:66",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "hexValue": "307861383530663963623139306433346563613936386165656538633935316234373635653632373434643763313338343761336164333932616438363439313030",
              "id": 55712,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1523:66:66",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_76131630337518788502901501502746484041859407509608347545736598695983404323072_by_1",
                "typeString": "int_const 7613...(69 digits omitted)...3072"
              },
              "value": "0xa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100"
            },
            "visibility": "internal"
          },
          {
            "id": 55718,
            "nodeType": "VariableDeclaration",
            "src": "1596:131:66",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAIL_TYPEHASH",
            "nameLocation": "1613:13:66",
            "scope": 56498,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 55714,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1596:7:66",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "4d61696c28506572736f6e2066726f6d2c506572736f6e20746f2c737472696e6720636f6e74656e747329506572736f6e28737472696e67206e616d652c616464726573732077616c6c657429",
                  "id": 55716,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1647:79:66",
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_a0cedeb2dc280ba39b857546d74f5549c3a1d7bdc2dd96bf881f76108e23dac2",
                    "typeString": "literal_string \"Mail(Person from,Person to,string contents)Person(string name,address wallet)\""
                  },
                  "value": "Mail(Person from,Person to,string contents)Person(string name,address wallet)"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_a0cedeb2dc280ba39b857546d74f5549c3a1d7bdc2dd96bf881f76108e23dac2",
                    "typeString": "literal_string \"Mail(Person from,Person to,string contents)Person(string name,address wallet)\""
                  }
                ],
                "id": 55715,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "1637:9:66",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 55717,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "nameLocations": [],
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1637:90:66",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 55725,
            "nodeType": "FunctionDefinition",
            "src": "1734:53:66",
            "nodes": [],
            "body": {
              "id": 55724,
              "nodeType": "Block",
              "src": "1748:39:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 55721,
                      "name": "_disableInitializers",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40686,
                      "src": "1758:20:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 55722,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1758:22:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55723,
                  "nodeType": "ExpressionStatement",
                  "src": "1758:22:66"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 55719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1745:2:66"
            },
            "returnParameters": {
              "id": 55720,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1748:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 55757,
            "nodeType": "FunctionDefinition",
            "src": "1793:329:66",
            "nodes": [],
            "body": {
              "id": 55756,
              "nodeType": "Block",
              "src": "1977:145:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 55740,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55727,
                        "src": "2002:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 55739,
                      "name": "__Ownable_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 40324,
                      "src": "1987:14:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 55741,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1987:22:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55742,
                  "nodeType": "ExpressionStatement",
                  "src": "1987:22:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "507572636861736544617461",
                        "id": 55744,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2033:14:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_128cca9b67492769472985cfb43b17b8de136edcbf4673a5db106d272f121a6a",
                          "typeString": "literal_string \"PurchaseData\""
                        },
                        "value": "PurchaseData"
                      },
                      {
                        "hexValue": "312e302e30",
                        "id": 55745,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2049:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c",
                          "typeString": "literal_string \"1.0.0\""
                        },
                        "value": "1.0.0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_128cca9b67492769472985cfb43b17b8de136edcbf4673a5db106d272f121a6a",
                          "typeString": "literal_string \"PurchaseData\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_06c015bd22b4c69690933c1058878ebdfef31f9aaae40bbe86d8a09fe1b2972c",
                          "typeString": "literal_string \"1.0.0\""
                        }
                      ],
                      "id": 55743,
                      "name": "__EIP712_init",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42898,
                      "src": "2019:13:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory,string memory)"
                      }
                    },
                    "id": 55746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2019:38:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55747,
                  "nodeType": "ExpressionStatement",
                  "src": "2019:38:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 55751,
                        "name": "verifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55729,
                        "src": "2080:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55752,
                        "name": "ttl",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55731,
                        "src": "2090:3:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint96",
                          "typeString": "uint96"
                        }
                      },
                      {
                        "id": 55753,
                        "name": "defaultCancelPolicy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55734,
                        "src": "2095:19:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_memory_ptr",
                          "typeString": "struct MasterLib.CancelPolicyMetadata memory"
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
                          "typeIdentifier": "t_uint96",
                          "typeString": "uint96"
                        },
                        {
                          "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_memory_ptr",
                          "typeString": "struct MasterLib.CancelPolicyMetadata memory"
                        }
                      ],
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 55748,
                          "name": "_self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56460,
                          "src": "2067:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                            "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                          }
                        },
                        "id": 55749,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2067:7:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                          "typeString": "struct MasterLib.State storage pointer"
                        }
                      },
                      "id": 55750,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2075:4:66",
                      "memberName": "init",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56580,
                      "src": "2067:12:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$56539_storage_ptr_$_t_address_$_t_uint96_$_t_struct$_CancelPolicyMetadata_$56544_memory_ptr_$returns$__$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                        "typeString": "function (struct MasterLib.State storage pointer,address,uint96,struct MasterLib.CancelPolicyMetadata memory)"
                      }
                    },
                    "id": 55754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2067:48:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55755,
                  "nodeType": "ExpressionStatement",
                  "src": "2067:48:66"
                }
              ]
            },
            "functionSelector": "c55dea61",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 55737,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 55736,
                  "name": "initializer",
                  "nameLocations": [
                    "1965:11:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40572,
                  "src": "1965:11:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "1965:11:66"
              }
            ],
            "name": "initialize",
            "nameLocation": "1802:10:66",
            "parameters": {
              "id": 55735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55727,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "1830:6:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 55757,
                  "src": "1822:14:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55726,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1822:7:66",
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
                  "id": 55729,
                  "mutability": "mutable",
                  "name": "verifier",
                  "nameLocation": "1854:8:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 55757,
                  "src": "1846:16:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1846:7:66",
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
                  "id": 55731,
                  "mutability": "mutable",
                  "name": "ttl",
                  "nameLocation": "1879:3:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 55757,
                  "src": "1872:10:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint96",
                    "typeString": "uint96"
                  },
                  "typeName": {
                    "id": 55730,
                    "name": "uint96",
                    "nodeType": "ElementaryTypeName",
                    "src": "1872:6:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint96",
                      "typeString": "uint96"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55734,
                  "mutability": "mutable",
                  "name": "defaultCancelPolicy",
                  "nameLocation": "1930:19:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 55757,
                  "src": "1892:57:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_memory_ptr",
                    "typeString": "struct MasterLib.CancelPolicyMetadata"
                  },
                  "typeName": {
                    "id": 55733,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 55732,
                      "name": "MasterLib.CancelPolicyMetadata",
                      "nameLocations": [
                        "1892:9:66",
                        "1902:20:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 56544,
                      "src": "1892:30:66"
                    },
                    "referencedDeclaration": 56544,
                    "src": "1892:30:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                      "typeString": "struct MasterLib.CancelPolicyMetadata"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1812:143:66"
            },
            "returnParameters": {
              "id": 55738,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1977:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 55825,
            "nodeType": "FunctionDefinition",
            "src": "2128:687:66",
            "nodes": [],
            "body": {
              "id": 55824,
              "nodeType": "Block",
              "src": "2314:501:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    55772
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 55772,
                      "mutability": "mutable",
                      "name": "purchaseDataHash",
                      "nameLocation": "2332:16:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 55824,
                      "src": "2324:24:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 55771,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2324:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 55777,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 55774,
                          "name": "purchaseData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55762,
                          "src": "2380:12:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                            "typeString": "struct PurchaseLib.PurchaseData memory"
                          }
                        },
                        "id": 55775,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2393:10:66",
                        "memberName": "ticketData",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 56951,
                        "src": "2380:23:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                          "typeString": "struct TicketLib.State memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                          "typeString": "struct TicketLib.State memory"
                        }
                      ],
                      "id": 55773,
                      "name": "getPurchaseDataSignatureHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56216,
                      "src": "2351:28:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_State_$57002_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (struct TicketLib.State memory) view returns (bytes32)"
                      }
                    },
                    "id": 55776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2351:53:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2324:80:66"
                },
                {
                  "expression": {
                    "id": 55783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 55778,
                      "name": "ticketId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55769,
                      "src": "2414:8:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 55781,
                          "name": "purchaseDataHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55772,
                          "src": "2433:16:66",
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
                          }
                        ],
                        "id": 55780,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2425:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 55779,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2425:7:66",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 55782,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2425:25:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2414:36:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 55784,
                  "nodeType": "ExpressionStatement",
                  "src": "2414:36:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 55786,
                        "name": "purchaseData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55762,
                        "src": "2480:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                          "typeString": "struct PurchaseLib.PurchaseData memory"
                        }
                      },
                      {
                        "id": 55787,
                        "name": "purchaseDataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55772,
                        "src": "2494:16:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 55788,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55764,
                        "src": "2512:9:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                          "typeString": "struct PurchaseLib.PurchaseData memory"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 55785,
                      "name": "_verifyPurchaseData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56394,
                      "src": "2460:19:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_PurchaseData_$56954_memory_ptr_$_t_bytes32_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (struct PurchaseLib.PurchaseData memory,bytes32,bytes memory)"
                      }
                    },
                    "id": 55789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2460:62:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55790,
                  "nodeType": "ExpressionStatement",
                  "src": "2460:62:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 55795,
                          "name": "purchaseData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55762,
                          "src": "2566:12:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                            "typeString": "struct PurchaseLib.PurchaseData memory"
                          }
                        },
                        "id": 55796,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2579:10:66",
                        "memberName": "ticketData",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 56951,
                        "src": "2566:23:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                          "typeString": "struct TicketLib.State memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                          "typeString": "struct TicketLib.State memory"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "id": 55792,
                            "name": "ticketId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55769,
                            "src": "2551:8:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 55791,
                          "name": "_ticketLibStatePtr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56481,
                          "src": "2532:18:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_State_$57002_storage_ptr_$",
                            "typeString": "function (uint256) pure returns (struct TicketLib.State storage pointer)"
                          }
                        },
                        "id": 55793,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2532:28:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                          "typeString": "struct TicketLib.State storage pointer"
                        }
                      },
                      "id": 55794,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2561:4:66",
                      "memberName": "init",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57186,
                      "src": "2532:33:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$57002_storage_ptr_$_t_struct$_State_$57002_memory_ptr_$returns$__$attached_to$_t_struct$_State_$57002_storage_ptr_$",
                        "typeString": "function (struct TicketLib.State storage pointer,struct TicketLib.State memory)"
                      }
                    },
                    "id": 55797,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2532:58:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55798,
                  "nodeType": "ExpressionStatement",
                  "src": "2532:58:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "id": 55800,
                            "name": "purchaseData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55762,
                            "src": "2610:12:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                              "typeString": "struct PurchaseLib.PurchaseData memory"
                            }
                          },
                          "id": 55801,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2623:10:66",
                          "memberName": "ticketData",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 56951,
                          "src": "2610:23:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                            "typeString": "struct TicketLib.State memory"
                          }
                        },
                        "id": 55802,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2634:5:66",
                        "memberName": "owner",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 56991,
                        "src": "2610:29:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 55803,
                        "name": "ticketId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55769,
                        "src": "2641:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "",
                        "id": 55804,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2651:2:66",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 55799,
                      "name": "_safeMint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        42457,
                        42487
                      ],
                      "referencedDeclaration": 42487,
                      "src": "2600:9:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory)"
                      }
                    },
                    "id": 55805,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2600:54:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55806,
                  "nodeType": "ExpressionStatement",
                  "src": "2600:54:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "id": 55810,
                            "name": "purchaseData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55762,
                            "src": "2710:12:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                              "typeString": "struct PurchaseLib.PurchaseData memory"
                            }
                          },
                          "id": 55811,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2723:10:66",
                          "memberName": "ticketData",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 56951,
                          "src": "2710:23:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                            "typeString": "struct TicketLib.State memory"
                          }
                        },
                        "id": 55812,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2734:5:66",
                        "memberName": "asset",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 56987,
                        "src": "2710:29:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 55813,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2741:3:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 55814,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2745:6:66",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2741:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 55817,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2761:4:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Master_$56498",
                              "typeString": "contract Master"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Master_$56498",
                              "typeString": "contract Master"
                            }
                          ],
                          "id": 55816,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2753:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 55815,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2753:7:66",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 55818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2753:13:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "expression": {
                            "id": 55819,
                            "name": "purchaseData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55762,
                            "src": "2768:12:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                              "typeString": "struct PurchaseLib.PurchaseData memory"
                            }
                          },
                          "id": 55820,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2781:10:66",
                          "memberName": "ticketData",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 56951,
                          "src": "2768:23:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                            "typeString": "struct TicketLib.State memory"
                          }
                        },
                        "id": 55821,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2792:6:66",
                        "memberName": "amount",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 56997,
                        "src": "2768:30:66",
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
                      "expression": {
                        "id": 55807,
                        "name": "SafeTransferLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55229,
                        "src": "2664:15:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_SafeTransferLib_$55229_$",
                          "typeString": "type(library SafeTransferLib)"
                        }
                      },
                      "id": 55809,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2680:16:66",
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 55034,
                      "src": "2664:32:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256)"
                      }
                    },
                    "id": 55822,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2664:144:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55823,
                  "nodeType": "ExpressionStatement",
                  "src": "2664:144:66"
                }
              ]
            },
            "functionSelector": "5b2ae331",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 55767,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 55766,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "2262:12:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54888,
                  "src": "2262:12:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "2262:12:66"
              }
            ],
            "name": "purchase",
            "nameLocation": "2137:8:66",
            "parameters": {
              "id": 55765,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55759,
                  "mutability": "mutable",
                  "name": "ticketOwner",
                  "nameLocation": "2154:11:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 55825,
                  "src": "2146:19:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55758,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2146:7:66",
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
                  "id": 55762,
                  "mutability": "mutable",
                  "name": "purchaseData",
                  "nameLocation": "2199:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 55825,
                  "src": "2167:44:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                    "typeString": "struct PurchaseLib.PurchaseData"
                  },
                  "typeName": {
                    "id": 55761,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 55760,
                      "name": "PurchaseLib.PurchaseData",
                      "nameLocations": [
                        "2167:11:66",
                        "2179:12:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 56954,
                      "src": "2167:24:66"
                    },
                    "referencedDeclaration": 56954,
                    "src": "2167:24:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PurchaseData_$56954_storage_ptr",
                      "typeString": "struct PurchaseLib.PurchaseData"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55764,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "2226:9:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 55825,
                  "src": "2213:22:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 55763,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2213:5:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2145:91:66"
            },
            "returnParameters": {
              "id": 55770,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55769,
                  "mutability": "mutable",
                  "name": "ticketId",
                  "nameLocation": "2300:8:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 55825,
                  "src": "2292:16:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55768,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2292:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2291:18:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 55884,
            "nodeType": "FunctionDefinition",
            "src": "2848:431:66",
            "nodes": [],
            "body": {
              "id": 55883,
              "nodeType": "Block",
              "src": "2901:378:66",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 55834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 55831,
                        "name": "ticketIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55828,
                        "src": "2915:9:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 55832,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2925:6:66",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2915:16:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 55833,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2935:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "2915:21:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 55838,
                  "nodeType": "IfStatement",
                  "src": "2911:46:66",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 55835,
                        "name": "ZeroLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57298,
                        "src": "2945:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                          "typeString": "function () pure returns (error)"
                        }
                      },
                      "id": 55836,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2945:12:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_error",
                        "typeString": "error"
                      }
                    },
                    "id": 55837,
                    "nodeType": "RevertStatement",
                    "src": "2938:19:66"
                  }
                },
                {
                  "body": {
                    "id": 55881,
                    "nodeType": "Block",
                    "src": "3014:259:66",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 55851,
                                "name": "ticketIds",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55828,
                                "src": "3034:9:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 55853,
                              "indexExpression": {
                                "id": 55852,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55840,
                                "src": "3044:1:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3034:12:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 55850,
                            "name": "_burn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42520,
                            "src": "3028:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 55854,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3028:19:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 55855,
                        "nodeType": "ExpressionStatement",
                        "src": "3028:19:66"
                      },
                      {
                        "assignments": [
                          55860
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 55860,
                            "mutability": "mutable",
                            "name": "ticketState",
                            "nameLocation": "3085:11:66",
                            "nodeType": "VariableDeclaration",
                            "scope": 55881,
                            "src": "3061:35:66",
                            "stateVariable": false,
                            "storageLocation": "storage",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                              "typeString": "struct TicketLib.State"
                            },
                            "typeName": {
                              "id": 55859,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 55858,
                                "name": "TicketLib.State",
                                "nameLocations": [
                                  "3061:9:66",
                                  "3071:5:66"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 57002,
                                "src": "3061:15:66"
                              },
                              "referencedDeclaration": 57002,
                              "src": "3061:15:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                "typeString": "struct TicketLib.State"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 55866,
                        "initialValue": {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 55862,
                                "name": "ticketIds",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55828,
                                "src": "3118:9:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 55864,
                              "indexExpression": {
                                "id": 55863,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55840,
                                "src": "3128:1:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3118:12:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 55861,
                            "name": "_ticketLibStatePtr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56481,
                            "src": "3099:18:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_State_$57002_storage_ptr_$",
                              "typeString": "function (uint256) pure returns (struct TicketLib.State storage pointer)"
                            }
                          },
                          "id": 55865,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3099:32:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                            "typeString": "struct TicketLib.State storage pointer"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3061:70:66"
                      },
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 55867,
                              "name": "ticketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55860,
                              "src": "3145:11:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                "typeString": "struct TicketLib.State storage pointer"
                              }
                            },
                            "id": 55869,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3157:20:66",
                            "memberName": "validateTicketRedeem",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 57253,
                            "src": "3145:32:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_State_$57002_storage_ptr_$returns$__$attached_to$_t_struct$_State_$57002_storage_ptr_$",
                              "typeString": "function (struct TicketLib.State storage pointer) view"
                            }
                          },
                          "id": 55870,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3145:34:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 55871,
                        "nodeType": "ExpressionStatement",
                        "src": "3145:34:66"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 55875,
                                "name": "ticketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55860,
                                "src": "3224:11:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                  "typeString": "struct TicketLib.State storage pointer"
                                }
                              },
                              "id": 55876,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3236:5:66",
                              "memberName": "asset",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 56987,
                              "src": "3224:17:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 55877,
                                "name": "ticketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55860,
                                "src": "3243:11:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                  "typeString": "struct TicketLib.State storage pointer"
                                }
                              },
                              "id": 55878,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3255:6:66",
                              "memberName": "amount",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 56997,
                              "src": "3243:18:66",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 55872,
                                "name": "_self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56460,
                                "src": "3193:5:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                                  "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                                }
                              },
                              "id": 55873,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3193:7:66",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                                "typeString": "struct MasterLib.State storage pointer"
                              }
                            },
                            "id": 55874,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3201:22:66",
                            "memberName": "addAssetsForWithdrawal",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 56754,
                            "src": "3193:30:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$56539_storage_ptr_$_t_address_$_t_uint256_$returns$__$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                              "typeString": "function (struct MasterLib.State storage pointer,address,uint256)"
                            }
                          },
                          "id": 55879,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3193:69:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 55880,
                        "nodeType": "ExpressionStatement",
                        "src": "3193:69:66"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 55846,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 55843,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55840,
                      "src": "2987:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 55844,
                        "name": "ticketIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55828,
                        "src": "2991:9:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 55845,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3001:6:66",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2991:16:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2987:20:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 55882,
                  "initializationExpression": {
                    "assignments": [
                      55840
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 55840,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2980:1:66",
                        "nodeType": "VariableDeclaration",
                        "scope": 55882,
                        "src": "2972:9:66",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 55839,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2972:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 55842,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 55841,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2984:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2972:13:66"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 55848,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3009:3:66",
                      "subExpression": {
                        "id": 55847,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55840,
                        "src": "3009:1:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 55849,
                    "nodeType": "ExpressionStatement",
                    "src": "3009:3:66"
                  },
                  "nodeType": "ForStatement",
                  "src": "2967:306:66"
                }
              ]
            },
            "functionSelector": "f9afb26a",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "2857:6:66",
            "parameters": {
              "id": 55829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55828,
                  "mutability": "mutable",
                  "name": "ticketIds",
                  "nameLocation": "2881:9:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 55884,
                  "src": "2864:26:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 55826,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2864:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 55827,
                    "nodeType": "ArrayTypeName",
                    "src": "2864:9:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2863:28:66"
            },
            "returnParameters": {
              "id": 55830,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2901:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 56039,
            "nodeType": "FunctionDefinition",
            "src": "3460:1358:66",
            "nodes": [],
            "body": {
              "id": 56038,
              "nodeType": "Block",
              "src": "3596:1222:66",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 55899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 55896,
                        "name": "seatIdsToCancel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55890,
                        "src": "3610:15:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint128_$dyn_memory_ptr",
                          "typeString": "uint128[] memory"
                        }
                      },
                      "id": 55897,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3626:6:66",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3610:22:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 55898,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3636:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3610:27:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 55903,
                  "nodeType": "IfStatement",
                  "src": "3606:52:66",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 55900,
                        "name": "ZeroLength",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57298,
                        "src": "3646:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                          "typeString": "function () pure returns (error)"
                        }
                      },
                      "id": 55901,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3646:12:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_error",
                        "typeString": "error"
                      }
                    },
                    "id": 55902,
                    "nodeType": "RevertStatement",
                    "src": "3639:19:66"
                  }
                },
                {
                  "assignments": [
                    55908
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 55908,
                      "mutability": "mutable",
                      "name": "ticketData",
                      "nameLocation": "3692:10:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56038,
                      "src": "3668:34:66",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                        "typeString": "struct TicketLib.State"
                      },
                      "typeName": {
                        "id": 55907,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 55906,
                          "name": "TicketLib.State",
                          "nameLocations": [
                            "3668:9:66",
                            "3678:5:66"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 57002,
                          "src": "3668:15:66"
                        },
                        "referencedDeclaration": 57002,
                        "src": "3668:15:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                          "typeString": "struct TicketLib.State"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 55912,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 55910,
                        "name": "ticketId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55887,
                        "src": "3724:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 55909,
                      "name": "_ticketLibStatePtr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56481,
                      "src": "3705:18:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_State_$57002_storage_ptr_$",
                        "typeString": "function (uint256) pure returns (struct TicketLib.State storage pointer)"
                      }
                    },
                    "id": 55911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3705:28:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                      "typeString": "struct TicketLib.State storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3668:65:66"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 55913,
                        "name": "ticketData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55908,
                        "src": "3743:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                          "typeString": "struct TicketLib.State storage pointer"
                        }
                      },
                      "id": 55915,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3754:20:66",
                      "memberName": "validateTicketCancel",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57237,
                      "src": "3743:31:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_State_$57002_storage_ptr_$returns$__$attached_to$_t_struct$_State_$57002_storage_ptr_$",
                        "typeString": "function (struct TicketLib.State storage pointer) view"
                      }
                    },
                    "id": 55916,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3743:33:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55917,
                  "nodeType": "ExpressionStatement",
                  "src": "3743:33:66"
                },
                {
                  "assignments": [
                    55919
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 55919,
                      "mutability": "mutable",
                      "name": "seatIdsIndex",
                      "nameLocation": "3794:12:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56038,
                      "src": "3786:20:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 55918,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3786:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 55921,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 55920,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3809:1:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3786:24:66"
                },
                {
                  "assignments": [
                    55923
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 55923,
                      "mutability": "mutable",
                      "name": "selectedTicketsCost",
                      "nameLocation": "3828:19:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56038,
                      "src": "3820:27:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 55922,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3820:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 55925,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 55924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3850:1:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3820:31:66"
                },
                {
                  "body": {
                    "id": 55982,
                    "nodeType": "Block",
                    "src": "3915:327:66",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 55946,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "id": 55938,
                              "name": "seatIdsToCancel",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55890,
                              "src": "3933:15:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint128_$dyn_memory_ptr",
                                "typeString": "uint128[] memory"
                              }
                            },
                            "id": 55940,
                            "indexExpression": {
                              "id": 55939,
                              "name": "seatIdsIndex",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55919,
                              "src": "3949:12:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3933:29:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "baseExpression": {
                                "expression": {
                                  "id": 55941,
                                  "name": "ticketData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 55908,
                                  "src": "3966:10:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                    "typeString": "struct TicketLib.State storage pointer"
                                  }
                                },
                                "id": 55942,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3977:5:66",
                                "memberName": "seats",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 57001,
                                "src": "3966:16:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_SeatData_$57007_storage_$dyn_storage",
                                  "typeString": "struct TicketLib.SeatData storage ref[] storage ref"
                                }
                              },
                              "id": 55944,
                              "indexExpression": {
                                "id": 55943,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55927,
                                "src": "3983:1:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3966:19:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_SeatData_$57007_storage",
                                "typeString": "struct TicketLib.SeatData storage ref"
                              }
                            },
                            "id": 55945,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3986:6:66",
                            "memberName": "seatId",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 57004,
                            "src": "3966:26:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3933:59:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 55981,
                        "nodeType": "IfStatement",
                        "src": "3929:303:66",
                        "trueBody": {
                          "id": 55980,
                          "nodeType": "Block",
                          "src": "3994:238:66",
                          "statements": [
                            {
                              "expression": {
                                "id": 55953,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 55947,
                                  "name": "selectedTicketsCost",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 55923,
                                  "src": "4012:19:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "expression": {
                                    "baseExpression": {
                                      "expression": {
                                        "id": 55948,
                                        "name": "ticketData",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 55908,
                                        "src": "4035:10:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                          "typeString": "struct TicketLib.State storage pointer"
                                        }
                                      },
                                      "id": 55949,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "4046:5:66",
                                      "memberName": "seats",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 57001,
                                      "src": "4035:16:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_SeatData_$57007_storage_$dyn_storage",
                                        "typeString": "struct TicketLib.SeatData storage ref[] storage ref"
                                      }
                                    },
                                    "id": 55951,
                                    "indexExpression": {
                                      "id": 55950,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 55927,
                                      "src": "4052:1:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "4035:19:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_SeatData_$57007_storage",
                                      "typeString": "struct TicketLib.SeatData storage ref"
                                    }
                                  },
                                  "id": 55952,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4055:5:66",
                                  "memberName": "price",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 57006,
                                  "src": "4035:25:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "4012:48:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 55954,
                              "nodeType": "ExpressionStatement",
                              "src": "4012:48:66"
                            },
                            {
                              "expression": {
                                "id": 55968,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 55955,
                                      "name": "ticketData",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 55908,
                                      "src": "4078:10:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                        "typeString": "struct TicketLib.State storage pointer"
                                      }
                                    },
                                    "id": 55958,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "4089:5:66",
                                    "memberName": "seats",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 57001,
                                    "src": "4078:16:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_SeatData_$57007_storage_$dyn_storage",
                                      "typeString": "struct TicketLib.SeatData storage ref[] storage ref"
                                    }
                                  },
                                  "id": 55959,
                                  "indexExpression": {
                                    "id": 55957,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 55927,
                                    "src": "4095:1:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "4078:19:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SeatData_$57007_storage",
                                    "typeString": "struct TicketLib.SeatData storage ref"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "baseExpression": {
                                    "expression": {
                                      "id": 55960,
                                      "name": "ticketData",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 55908,
                                      "src": "4100:10:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                        "typeString": "struct TicketLib.State storage pointer"
                                      }
                                    },
                                    "id": 55961,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "4111:5:66",
                                    "memberName": "seats",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 57001,
                                    "src": "4100:16:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_SeatData_$57007_storage_$dyn_storage",
                                      "typeString": "struct TicketLib.SeatData storage ref[] storage ref"
                                    }
                                  },
                                  "id": 55967,
                                  "indexExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 55966,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "expression": {
                                        "expression": {
                                          "id": 55962,
                                          "name": "ticketData",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 55908,
                                          "src": "4117:10:66",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                            "typeString": "struct TicketLib.State storage pointer"
                                          }
                                        },
                                        "id": 55963,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "4128:5:66",
                                        "memberName": "seats",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 57001,
                                        "src": "4117:16:66",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_struct$_SeatData_$57007_storage_$dyn_storage",
                                          "typeString": "struct TicketLib.SeatData storage ref[] storage ref"
                                        }
                                      },
                                      "id": 55964,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "4134:6:66",
                                      "memberName": "length",
                                      "nodeType": "MemberAccess",
                                      "src": "4117:23:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "hexValue": "31",
                                      "id": 55965,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "4143:1:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "4117:27:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "4100:45:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_SeatData_$57007_storage",
                                    "typeString": "struct TicketLib.SeatData storage ref"
                                  }
                                },
                                "src": "4078:67:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_SeatData_$57007_storage",
                                  "typeString": "struct TicketLib.SeatData storage ref"
                                }
                              },
                              "id": 55969,
                              "nodeType": "ExpressionStatement",
                              "src": "4078:67:66"
                            },
                            {
                              "expression": {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "expression": {
                                      "id": 55970,
                                      "name": "ticketData",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 55908,
                                      "src": "4163:10:66",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                        "typeString": "struct TicketLib.State storage pointer"
                                      }
                                    },
                                    "id": 55973,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "4174:5:66",
                                    "memberName": "seats",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 57001,
                                    "src": "4163:16:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_SeatData_$57007_storage_$dyn_storage",
                                      "typeString": "struct TicketLib.SeatData storage ref[] storage ref"
                                    }
                                  },
                                  "id": 55974,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4180:3:66",
                                  "memberName": "pop",
                                  "nodeType": "MemberAccess",
                                  "src": "4163:20:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_arraypop_nonpayable$_t_array$_t_struct$_SeatData_$57007_storage_$dyn_storage_ptr_$returns$__$attached_to$_t_array$_t_struct$_SeatData_$57007_storage_$dyn_storage_ptr_$",
                                    "typeString": "function (struct TicketLib.SeatData storage ref[] storage pointer)"
                                  }
                                },
                                "id": 55975,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4163:22:66",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 55976,
                              "nodeType": "ExpressionStatement",
                              "src": "4163:22:66"
                            },
                            {
                              "expression": {
                                "id": 55978,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "4203:14:66",
                                "subExpression": {
                                  "id": 55977,
                                  "name": "seatIdsIndex",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 55919,
                                  "src": "4203:12:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 55979,
                              "nodeType": "ExpressionStatement",
                              "src": "4203:14:66"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 55934,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 55930,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55927,
                      "src": "3881:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "expression": {
                          "id": 55931,
                          "name": "ticketData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55908,
                          "src": "3885:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                            "typeString": "struct TicketLib.State storage pointer"
                          }
                        },
                        "id": 55932,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3896:5:66",
                        "memberName": "seats",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 57001,
                        "src": "3885:16:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_SeatData_$57007_storage_$dyn_storage",
                          "typeString": "struct TicketLib.SeatData storage ref[] storage ref"
                        }
                      },
                      "id": 55933,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3902:6:66",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "3885:23:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3881:27:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 55983,
                  "initializationExpression": {
                    "assignments": [
                      55927
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 55927,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "3874:1:66",
                        "nodeType": "VariableDeclaration",
                        "scope": 55983,
                        "src": "3866:9:66",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 55926,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3866:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 55929,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 55928,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3878:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3866:13:66"
                  },
                  "isSimpleCounterLoop": true,
                  "loopExpression": {
                    "expression": {
                      "id": 55936,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3910:3:66",
                      "subExpression": {
                        "id": 55935,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55927,
                        "src": "3910:1:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 55937,
                    "nodeType": "ExpressionStatement",
                    "src": "3910:3:66"
                  },
                  "nodeType": "ForStatement",
                  "src": "3861:381:66"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 55987,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 55984,
                      "name": "seatIdsIndex",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55919,
                      "src": "4255:12:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 55985,
                        "name": "seatIdsToCancel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55890,
                        "src": "4271:15:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint128_$dyn_memory_ptr",
                          "typeString": "uint128[] memory"
                        }
                      },
                      "id": 55986,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4287:6:66",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "4271:22:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4255:38:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 55991,
                  "nodeType": "IfStatement",
                  "src": "4251:65:66",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 55988,
                        "name": "InvalidInput",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57290,
                        "src": "4302:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                          "typeString": "function () pure returns (error)"
                        }
                      },
                      "id": 55989,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4302:14:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_error",
                        "typeString": "error"
                      }
                    },
                    "id": 55990,
                    "nodeType": "RevertStatement",
                    "src": "4295:21:66"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 55996,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "expression": {
                          "id": 55992,
                          "name": "ticketData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 55908,
                          "src": "4330:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                            "typeString": "struct TicketLib.State storage pointer"
                          }
                        },
                        "id": 55993,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4341:5:66",
                        "memberName": "seats",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 57001,
                        "src": "4330:16:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_SeatData_$57007_storage_$dyn_storage",
                          "typeString": "struct TicketLib.SeatData storage ref[] storage ref"
                        }
                      },
                      "id": 55994,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4347:6:66",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "4330:23:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 55995,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4357:1:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4330:28:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 56036,
                    "nodeType": "Block",
                    "src": "4452:360:66",
                    "statements": [
                      {
                        "expression": {
                          "id": 56006,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 56002,
                              "name": "ticketData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55908,
                              "src": "4466:10:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                "typeString": "struct TicketLib.State storage pointer"
                              }
                            },
                            "id": 56004,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "4477:6:66",
                            "memberName": "amount",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 56997,
                            "src": "4466:17:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 56005,
                            "name": "selectedTicketsCost",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55923,
                            "src": "4487:19:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4466:40:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 56007,
                        "nodeType": "ExpressionStatement",
                        "src": "4466:40:66"
                      },
                      {
                        "assignments": [
                          56009
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 56009,
                            "mutability": "mutable",
                            "name": "assetsToReturn",
                            "nameLocation": "4528:14:66",
                            "nodeType": "VariableDeclaration",
                            "scope": 56036,
                            "src": "4520:22:66",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 56008,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "4520:7:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 56014,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 56011,
                              "name": "ticketData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55908,
                              "src": "4573:10:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                "typeString": "struct TicketLib.State storage pointer"
                              }
                            },
                            {
                              "id": 56012,
                              "name": "selectedTicketsCost",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55923,
                              "src": "4585:19:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                "typeString": "struct TicketLib.State storage pointer"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 56010,
                            "name": "_computePostCancellationAmt",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56356,
                            "src": "4545:27:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_State_$57002_storage_ptr_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (struct TicketLib.State storage pointer,uint256) view returns (uint256)"
                            }
                          },
                          "id": 56013,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4545:60:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4520:85:66"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 56018,
                                "name": "ticketData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55908,
                                "src": "4650:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                  "typeString": "struct TicketLib.State storage pointer"
                                }
                              },
                              "id": 56019,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4661:5:66",
                              "memberName": "asset",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 56987,
                              "src": "4650:16:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 56022,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 56020,
                                "name": "selectedTicketsCost",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55923,
                                "src": "4668:19:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 56021,
                                "name": "assetsToReturn",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56009,
                                "src": "4690:14:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "4668:36:66",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 56015,
                                "name": "_self",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56460,
                                "src": "4619:5:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                                  "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                                }
                              },
                              "id": 56016,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4619:7:66",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                                "typeString": "struct MasterLib.State storage pointer"
                              }
                            },
                            "id": 56017,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4627:22:66",
                            "memberName": "addAssetsForWithdrawal",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 56754,
                            "src": "4619:30:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$56539_storage_ptr_$_t_address_$_t_uint256_$returns$__$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                              "typeString": "function (struct MasterLib.State storage pointer,address,uint256)"
                            }
                          },
                          "id": 56023,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4619:86:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 56024,
                        "nodeType": "ExpressionStatement",
                        "src": "4619:86:66"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 56028,
                                "name": "ticketData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55908,
                                "src": "4748:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                  "typeString": "struct TicketLib.State storage pointer"
                                }
                              },
                              "id": 56029,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4759:5:66",
                              "memberName": "asset",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 56987,
                              "src": "4748:16:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 56031,
                                  "name": "ticketId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 55887,
                                  "src": "4775:8:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 56030,
                                "name": "_ownerOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 42173,
                                "src": "4766:8:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                  "typeString": "function (uint256) view returns (address)"
                                }
                              },
                              "id": 56032,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4766:18:66",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 56033,
                              "name": "assetsToReturn",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56009,
                              "src": "4786:14:66",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 56025,
                              "name": "SafeTransferLib",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55229,
                              "src": "4719:15:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_SafeTransferLib_$55229_$",
                                "typeString": "type(library SafeTransferLib)"
                              }
                            },
                            "id": 56027,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4735:12:66",
                            "memberName": "safeTransfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 55076,
                            "src": "4719:28:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 56034,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4719:82:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 56035,
                        "nodeType": "ExpressionStatement",
                        "src": "4719:82:66"
                      }
                    ]
                  },
                  "id": 56037,
                  "nodeType": "IfStatement",
                  "src": "4326:486:66",
                  "trueBody": {
                    "id": 56001,
                    "nodeType": "Block",
                    "src": "4360:86:66",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 55998,
                              "name": "ticketId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 55887,
                              "src": "4426:8:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 55997,
                            "name": "_cancel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56452,
                            "src": "4418:7:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 55999,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4418:17:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 56000,
                        "nodeType": "ExpressionStatement",
                        "src": "4418:17:66"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 55885,
              "nodeType": "StructuredDocumentation",
              "src": "3285:170:66",
              "text": " @dev seatIdsToCancel must be in increasing sorted order.\n @param ticketId tokenId of the ticket.\n @param seatIdsToCancel seatIds to cancel."
            },
            "functionSelector": "eb46d109",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 55893,
                    "name": "ticketId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 55887,
                    "src": "3582:8:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 55894,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 55892,
                  "name": "onlyTicketOwner",
                  "nameLocations": [
                    "3566:15:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 56497,
                  "src": "3566:15:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "3566:25:66"
              }
            ],
            "name": "cancelPartialTicket",
            "nameLocation": "3469:19:66",
            "parameters": {
              "id": 55891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55887,
                  "mutability": "mutable",
                  "name": "ticketId",
                  "nameLocation": "3497:8:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56039,
                  "src": "3489:16:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55886,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3489:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 55890,
                  "mutability": "mutable",
                  "name": "seatIdsToCancel",
                  "nameLocation": "3524:15:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56039,
                  "src": "3507:32:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint128_$dyn_memory_ptr",
                    "typeString": "uint128[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 55888,
                      "name": "uint128",
                      "nodeType": "ElementaryTypeName",
                      "src": "3507:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "id": 55889,
                    "nodeType": "ArrayTypeName",
                    "src": "3507:9:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint128_$dyn_storage_ptr",
                      "typeString": "uint128[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3488:52:66"
            },
            "returnParameters": {
              "id": 55895,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3596:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 56056,
            "nodeType": "FunctionDefinition",
            "src": "4824:143:66",
            "nodes": [],
            "body": {
              "id": 56055,
              "nodeType": "Block",
              "src": "4893:74:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56048,
                        "name": "ticketId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56041,
                        "src": "4911:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56047,
                      "name": "_cancel",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56452,
                      "src": "4903:7:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 56049,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4903:17:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56050,
                  "nodeType": "ExpressionStatement",
                  "src": "4903:17:66"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 56052,
                        "name": "ticketId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56041,
                        "src": "4951:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56051,
                      "name": "CancelledTicket",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 57320,
                      "src": "4935:15:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 56053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4935:25:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56054,
                  "nodeType": "EmitStatement",
                  "src": "4930:30:66"
                }
              ]
            },
            "functionSelector": "40e58ee5",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 56044,
                    "name": "ticketId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 56041,
                    "src": "4883:8:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 56045,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 56043,
                  "name": "onlyTicketOwner",
                  "nameLocations": [
                    "4867:15:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 56497,
                  "src": "4867:15:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "4867:25:66"
              }
            ],
            "name": "cancel",
            "nameLocation": "4833:6:66",
            "parameters": {
              "id": 56042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56041,
                  "mutability": "mutable",
                  "name": "ticketId",
                  "nameLocation": "4848:8:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56056,
                  "src": "4840:16:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56040,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4840:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4839:18:66"
            },
            "returnParameters": {
              "id": 56046,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4893:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 56097,
            "nodeType": "FunctionDefinition",
            "src": "5202:385:66",
            "nodes": [],
            "body": {
              "id": 56096,
              "nodeType": "Block",
              "src": "5305:282:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    56070
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56070,
                      "mutability": "mutable",
                      "name": "ticketData",
                      "nameLocation": "5339:10:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56096,
                      "src": "5315:34:66",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                        "typeString": "struct TicketLib.State"
                      },
                      "typeName": {
                        "id": 56069,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 56068,
                          "name": "TicketLib.State",
                          "nameLocations": [
                            "5315:9:66",
                            "5325:5:66"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 57002,
                          "src": "5315:15:66"
                        },
                        "referencedDeclaration": 57002,
                        "src": "5315:15:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                          "typeString": "struct TicketLib.State"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56074,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 56072,
                        "name": "ticketId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56059,
                        "src": "5371:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56071,
                      "name": "_ticketLibStatePtr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56481,
                      "src": "5352:18:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_State_$57002_storage_ptr_$",
                        "typeString": "function (uint256) pure returns (struct TicketLib.State storage pointer)"
                      }
                    },
                    "id": 56073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5352:28:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                      "typeString": "struct TicketLib.State storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5315:65:66"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 56079,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 56075,
                        "name": "ticketData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56070,
                        "src": "5394:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                          "typeString": "struct TicketLib.State storage pointer"
                        }
                      },
                      "id": 56076,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5405:8:66",
                      "memberName": "showTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56989,
                      "src": "5394:19:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint96",
                        "typeString": "uint96"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 56077,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "5416:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 56078,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5422:9:66",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "5416:15:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5394:37:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56086,
                  "nodeType": "IfStatement",
                  "src": "5390:96:66",
                  "trueBody": {
                    "id": 56085,
                    "nodeType": "Block",
                    "src": "5433:53:66",
                    "statements": [
                      {
                        "expression": {
                          "components": [
                            {
                              "expression": {
                                "id": 56080,
                                "name": "ticketData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56070,
                                "src": "5455:10:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                  "typeString": "struct TicketLib.State storage pointer"
                                }
                              },
                              "id": 56081,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5466:5:66",
                              "memberName": "asset",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 56987,
                              "src": "5455:16:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "hexValue": "30",
                              "id": 56082,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5473:1:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "id": 56083,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "5454:21:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_address_$_t_rational_0_by_1_$",
                            "typeString": "tuple(address,int_const 0)"
                          }
                        },
                        "functionReturnParameters": 56065,
                        "id": 56084,
                        "nodeType": "Return",
                        "src": "5447:28:66"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "expression": {
                          "id": 56087,
                          "name": "ticketData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56070,
                          "src": "5503:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                            "typeString": "struct TicketLib.State storage pointer"
                          }
                        },
                        "id": 56088,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5514:5:66",
                        "memberName": "asset",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 56987,
                        "src": "5503:16:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 56090,
                            "name": "ticketData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56070,
                            "src": "5549:10:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                              "typeString": "struct TicketLib.State storage pointer"
                            }
                          },
                          {
                            "expression": {
                              "id": 56091,
                              "name": "ticketData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56070,
                              "src": "5561:10:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                "typeString": "struct TicketLib.State storage pointer"
                              }
                            },
                            "id": 56092,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5572:6:66",
                            "memberName": "amount",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 56997,
                            "src": "5561:17:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                              "typeString": "struct TicketLib.State storage pointer"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 56089,
                          "name": "_computePostCancellationAmt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56356,
                          "src": "5521:27:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_State_$57002_storage_ptr_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (struct TicketLib.State storage pointer,uint256) view returns (uint256)"
                          }
                        },
                        "id": 56093,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5521:58:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 56094,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "5502:78:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_uint256_$",
                      "typeString": "tuple(address,uint256)"
                    }
                  },
                  "functionReturnParameters": 56065,
                  "id": 56095,
                  "nodeType": "Return",
                  "src": "5495:85:66"
                }
              ]
            },
            "documentation": {
              "id": 56057,
              "nodeType": "StructuredDocumentation",
              "src": "4973:224:66",
              "text": " Fetched amount of tokens returned post cancellation.\n @param ticketId ticket Id to get cancellation \n @return asset address of asset to return. \n @return amount amount of assets returned."
            },
            "functionSelector": "848c4266",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getCancellationAmount",
            "nameLocation": "5211:21:66",
            "parameters": {
              "id": 56060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56059,
                  "mutability": "mutable",
                  "name": "ticketId",
                  "nameLocation": "5241:8:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56097,
                  "src": "5233:16:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56058,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5233:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5232:18:66"
            },
            "returnParameters": {
              "id": 56065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56062,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "5282:5:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56097,
                  "src": "5274:13:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5274:7:66",
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
                  "id": 56064,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "5297:6:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56097,
                  "src": "5289:14:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56063,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5289:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5273:31:66"
            },
            "scope": 56498,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 56115,
            "nodeType": "FunctionDefinition",
            "src": "5593:147:66",
            "nodes": [],
            "body": {
              "id": 56114,
              "nodeType": "Block",
              "src": "5681:59:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56110,
                        "name": "assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56100,
                        "src": "5714:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        }
                      },
                      {
                        "id": 56111,
                        "name": "benefactor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56102,
                        "src": "5722:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                          "typeString": "address[] memory"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 56107,
                          "name": "_self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56460,
                          "src": "5691:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                            "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                          }
                        },
                        "id": 56108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5691:7:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                          "typeString": "struct MasterLib.State storage pointer"
                        }
                      },
                      "id": 56109,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5699:14:66",
                      "memberName": "withdrawAssets",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56804,
                      "src": "5691:22:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$56539_storage_ptr_$_t_array$_t_address_$dyn_memory_ptr_$_t_address_$returns$__$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                        "typeString": "function (struct MasterLib.State storage pointer,address[] memory,address)"
                      }
                    },
                    "id": 56112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5691:42:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56113,
                  "nodeType": "ExpressionStatement",
                  "src": "5691:42:66"
                }
              ]
            },
            "functionSelector": "ebeec6ab",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 56105,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 56104,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "5671:9:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40359,
                  "src": "5671:9:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "5671:9:66"
              }
            ],
            "name": "withdrawAssets",
            "nameLocation": "5602:14:66",
            "parameters": {
              "id": 56103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56100,
                  "mutability": "mutable",
                  "name": "assets",
                  "nameLocation": "5634:6:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56115,
                  "src": "5617:23:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 56098,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5617:7:66",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 56099,
                    "nodeType": "ArrayTypeName",
                    "src": "5617:9:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56102,
                  "mutability": "mutable",
                  "name": "benefactor",
                  "nameLocation": "5650:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56115,
                  "src": "5642:18:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5642:7:66",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5616:45:66"
            },
            "returnParameters": {
              "id": 56106,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5681:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 56130,
            "nodeType": "FunctionDefinition",
            "src": "5746:167:66",
            "nodes": [],
            "body": {
              "id": 56129,
              "nodeType": "Block",
              "src": "5852:61:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56126,
                        "name": "cancelPolicy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56118,
                        "src": "5893:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_memory_ptr",
                          "typeString": "struct MasterLib.CancelPolicyMetadata memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_memory_ptr",
                          "typeString": "struct MasterLib.CancelPolicyMetadata memory"
                        }
                      ],
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 56123,
                          "name": "_self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56460,
                          "src": "5862:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                            "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                          }
                        },
                        "id": 56124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5862:7:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                          "typeString": "struct MasterLib.State storage pointer"
                        }
                      },
                      "id": 56125,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5870:22:66",
                      "memberName": "setDefaultCancelPolicy",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56625,
                      "src": "5862:30:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$56539_storage_ptr_$_t_struct$_CancelPolicyMetadata_$56544_memory_ptr_$returns$__$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                        "typeString": "function (struct MasterLib.State storage pointer,struct MasterLib.CancelPolicyMetadata memory)"
                      }
                    },
                    "id": 56127,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5862:44:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56128,
                  "nodeType": "ExpressionStatement",
                  "src": "5862:44:66"
                }
              ]
            },
            "functionSelector": "4038ef35",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 56121,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 56120,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "5842:9:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40359,
                  "src": "5842:9:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "5842:9:66"
              }
            ],
            "name": "changeDefaultCancelPolicy",
            "nameLocation": "5755:25:66",
            "parameters": {
              "id": 56119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56118,
                  "mutability": "mutable",
                  "name": "cancelPolicy",
                  "nameLocation": "5819:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56130,
                  "src": "5781:50:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_memory_ptr",
                    "typeString": "struct MasterLib.CancelPolicyMetadata"
                  },
                  "typeName": {
                    "id": 56117,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 56116,
                      "name": "MasterLib.CancelPolicyMetadata",
                      "nameLocations": [
                        "5781:9:66",
                        "5791:20:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 56544,
                      "src": "5781:30:66"
                    },
                    "referencedDeclaration": 56544,
                    "src": "5781:30:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                      "typeString": "struct MasterLib.CancelPolicyMetadata"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5780:52:66"
            },
            "returnParameters": {
              "id": 56122,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5852:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 56148,
            "nodeType": "FunctionDefinition",
            "src": "5919:210:66",
            "nodes": [],
            "body": {
              "id": 56147,
              "nodeType": "Block",
              "src": "6059:70:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56143,
                        "name": "cancelPolicyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56132,
                        "src": "6093:14:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 56144,
                        "name": "cancelPolicy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56135,
                        "src": "6109:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_memory_ptr",
                          "typeString": "struct MasterLib.CancelPolicyMetadata memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_memory_ptr",
                          "typeString": "struct MasterLib.CancelPolicyMetadata memory"
                        }
                      ],
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 56140,
                          "name": "_self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56460,
                          "src": "6069:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                            "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                          }
                        },
                        "id": 56141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6069:7:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                          "typeString": "struct MasterLib.State storage pointer"
                        }
                      },
                      "id": 56142,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6077:15:66",
                      "memberName": "addCancelPolicy",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56672,
                      "src": "6069:23:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$56539_storage_ptr_$_t_uint256_$_t_struct$_CancelPolicyMetadata_$56544_memory_ptr_$returns$__$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                        "typeString": "function (struct MasterLib.State storage pointer,uint256,struct MasterLib.CancelPolicyMetadata memory)"
                      }
                    },
                    "id": 56145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6069:53:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56146,
                  "nodeType": "ExpressionStatement",
                  "src": "6069:53:66"
                }
              ]
            },
            "functionSelector": "2566fd46",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 56138,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 56137,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "6045:9:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40359,
                  "src": "6045:9:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "6045:9:66"
              }
            ],
            "name": "addCancelPolicy",
            "nameLocation": "5928:15:66",
            "parameters": {
              "id": 56136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56132,
                  "mutability": "mutable",
                  "name": "cancelPolicyId",
                  "nameLocation": "5952:14:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56148,
                  "src": "5944:22:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56131,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5944:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56135,
                  "mutability": "mutable",
                  "name": "cancelPolicy",
                  "nameLocation": "6006:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56148,
                  "src": "5968:50:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_memory_ptr",
                    "typeString": "struct MasterLib.CancelPolicyMetadata"
                  },
                  "typeName": {
                    "id": 56134,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 56133,
                      "name": "MasterLib.CancelPolicyMetadata",
                      "nameLocations": [
                        "5968:9:66",
                        "5978:20:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 56544,
                      "src": "5968:30:66"
                    },
                    "referencedDeclaration": 56544,
                    "src": "5968:30:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                      "typeString": "struct MasterLib.CancelPolicyMetadata"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5943:76:66"
            },
            "returnParameters": {
              "id": 56139,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6059:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 56165,
            "nodeType": "FunctionDefinition",
            "src": "6135:158:66",
            "nodes": [],
            "body": {
              "id": 56164,
              "nodeType": "Block",
              "src": "6224:69:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56160,
                        "name": "showId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56150,
                        "src": "6269:6:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 56161,
                        "name": "policyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56152,
                        "src": "6277:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 56157,
                          "name": "_self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56460,
                          "src": "6234:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                            "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                          }
                        },
                        "id": 56158,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6234:7:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                          "typeString": "struct MasterLib.State storage pointer"
                        }
                      },
                      "id": 56159,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6242:26:66",
                      "memberName": "setCancelPolicyIdForShowId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56691,
                      "src": "6234:34:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$56539_storage_ptr_$_t_uint256_$_t_uint256_$returns$__$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                        "typeString": "function (struct MasterLib.State storage pointer,uint256,uint256)"
                      }
                    },
                    "id": 56162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6234:52:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56163,
                  "nodeType": "ExpressionStatement",
                  "src": "6234:52:66"
                }
              ]
            },
            "functionSelector": "a23cab20",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 56155,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 56154,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "6214:9:66"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 40359,
                  "src": "6214:9:66"
                },
                "nodeType": "ModifierInvocation",
                "src": "6214:9:66"
              }
            ],
            "name": "setCancelPolicyIdForShowId",
            "nameLocation": "6144:26:66",
            "parameters": {
              "id": 56153,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56150,
                  "mutability": "mutable",
                  "name": "showId",
                  "nameLocation": "6179:6:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56165,
                  "src": "6171:14:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56149,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6171:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56152,
                  "mutability": "mutable",
                  "name": "policyId",
                  "nameLocation": "6195:8:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56165,
                  "src": "6187:16:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56151,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6187:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6170:34:66"
            },
            "returnParameters": {
              "id": 56156,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6224:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 56179,
            "nodeType": "FunctionDefinition",
            "src": "6410:114:66",
            "nodes": [],
            "body": {
              "id": 56178,
              "nodeType": "Block",
              "src": "6483:41:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56175,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56168,
                        "src": "6509:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56174,
                      "name": "_ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42173,
                      "src": "6500:8:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 56176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6500:17:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 56173,
                  "id": 56177,
                  "nodeType": "Return",
                  "src": "6493:24:66"
                }
              ]
            },
            "baseFunctions": [
              41909
            ],
            "documentation": {
              "id": 56166,
              "nodeType": "StructuredDocumentation",
              "src": "6359:46:66",
              "text": " @dev See {IERC721-ownerOf}."
            },
            "functionSelector": "6352211e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ownerOf",
            "nameLocation": "6419:7:66",
            "overrides": {
              "id": 56170,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6456:8:66"
            },
            "parameters": {
              "id": 56169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56168,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "6435:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56179,
                  "src": "6427:15:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56167,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6427:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6426:17:66"
            },
            "returnParameters": {
              "id": 56173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56172,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56179,
                  "src": "6474:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56171,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6474:7:66",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6473:9:66"
            },
            "scope": 56498,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 56216,
            "nodeType": "FunctionDefinition",
            "src": "6660:321:66",
            "nodes": [],
            "body": {
              "id": 56215,
              "nodeType": "Block",
              "src": "6763:218:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    56192
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56192,
                      "mutability": "mutable",
                      "name": "purchaseData",
                      "nameLocation": "6805:12:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56215,
                      "src": "6773:44:66",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                        "typeString": "struct PurchaseLib.PurchaseData"
                      },
                      "typeName": {
                        "id": 56191,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 56190,
                          "name": "PurchaseLib.PurchaseData",
                          "nameLocations": [
                            "6773:11:66",
                            "6785:12:66"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 56954,
                          "src": "6773:24:66"
                        },
                        "referencedDeclaration": 56954,
                        "src": "6773:24:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PurchaseData_$56954_storage_ptr",
                          "typeString": "struct PurchaseLib.PurchaseData"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56193,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6773:44:66"
                },
                {
                  "expression": {
                    "id": 56198,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 56194,
                        "name": "purchaseData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56192,
                        "src": "6827:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                          "typeString": "struct PurchaseLib.PurchaseData memory"
                        }
                      },
                      "id": 56196,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6840:10:66",
                      "memberName": "ticketData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56951,
                      "src": "6827:23:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                        "typeString": "struct TicketLib.State memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 56197,
                      "name": "ticketData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56183,
                      "src": "6853:10:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                        "typeString": "struct TicketLib.State memory"
                      }
                    },
                    "src": "6827:36:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                      "typeString": "struct TicketLib.State memory"
                    }
                  },
                  "id": 56199,
                  "nodeType": "ExpressionStatement",
                  "src": "6827:36:66"
                },
                {
                  "expression": {
                    "id": 56207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 56200,
                        "name": "purchaseData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56192,
                        "src": "6873:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                          "typeString": "struct PurchaseLib.PurchaseData memory"
                        }
                      },
                      "id": 56202,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6886:5:66",
                      "memberName": "nonce",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56953,
                      "src": "6873:18:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 56204,
                            "name": "ticketData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56183,
                            "src": "6903:10:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                              "typeString": "struct TicketLib.State memory"
                            }
                          },
                          "id": 56205,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6914:5:66",
                          "memberName": "owner",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 56991,
                          "src": "6903:16:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 56203,
                        "name": "getNonce",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56271,
                        "src": "6894:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 56206,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6894:26:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6873:47:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 56208,
                  "nodeType": "ExpressionStatement",
                  "src": "6873:47:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "id": 56210,
                            "name": "purchaseData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56192,
                            "src": "6954:12:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                              "typeString": "struct PurchaseLib.PurchaseData memory"
                            }
                          },
                          "id": 56211,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6967:4:66",
                          "memberName": "hash",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 56977,
                          "src": "6954:17:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_PurchaseData_$56954_memory_ptr_$returns$_t_bytes32_$attached_to$_t_struct$_PurchaseData_$56954_memory_ptr_$",
                            "typeString": "function (struct PurchaseLib.PurchaseData memory) view returns (bytes32)"
                          }
                        },
                        "id": 56212,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6954:19:66",
                        "tryCall": false,
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
                        }
                      ],
                      "id": 56209,
                      "name": "_hashTypedDataV4",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42987,
                      "src": "6937:16:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 56213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6937:37:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 56187,
                  "id": 56214,
                  "nodeType": "Return",
                  "src": "6930:44:66"
                }
              ]
            },
            "documentation": {
              "id": 56180,
              "nodeType": "StructuredDocumentation",
              "src": "6530:125:66",
              "text": " Fetches hash of the purchase data to be signed message.\n @param ticketData ticket data to be signed."
            },
            "functionSelector": "8b660a21",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getPurchaseDataSignatureHash",
            "nameLocation": "6669:28:66",
            "parameters": {
              "id": 56184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56183,
                  "mutability": "mutable",
                  "name": "ticketData",
                  "nameLocation": "6721:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56216,
                  "src": "6698:33:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_State_$57002_memory_ptr",
                    "typeString": "struct TicketLib.State"
                  },
                  "typeName": {
                    "id": 56182,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 56181,
                      "name": "TicketLib.State",
                      "nameLocations": [
                        "6698:9:66",
                        "6708:5:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 57002,
                      "src": "6698:15:66"
                    },
                    "referencedDeclaration": 57002,
                    "src": "6698:15:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                      "typeString": "struct TicketLib.State"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6697:35:66"
            },
            "returnParameters": {
              "id": 56187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56186,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56216,
                  "src": "6754:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 56185,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "6754:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6753:9:66"
            },
            "scope": 56498,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 56235,
            "nodeType": "FunctionDefinition",
            "src": "7067:193:66",
            "nodes": [],
            "body": {
              "id": 56234,
              "nodeType": "Block",
              "src": "7156:104:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 56228,
                                "name": "tokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56219,
                                "src": "7211:7:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 56229,
                                "name": "USER_VERIFICATION_MESSAGE_HASH",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 55713,
                                "src": "7220:30:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "id": 56226,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "7200:3:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 56227,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "7204:6:66",
                              "memberName": "encode",
                              "nodeType": "MemberAccess",
                              "src": "7200:10:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 56230,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7200:51:66",
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
                          "id": 56225,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "7190:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 56231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7190:62:66",
                        "tryCall": false,
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
                        }
                      ],
                      "id": 56224,
                      "name": "_hashTypedDataV4",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42987,
                      "src": "7173:16:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view returns (bytes32)"
                      }
                    },
                    "id": 56232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7173:80:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 56223,
                  "id": 56233,
                  "nodeType": "Return",
                  "src": "7166:87:66"
                }
              ]
            },
            "documentation": {
              "id": 56217,
              "nodeType": "StructuredDocumentation",
              "src": "6987:75:66",
              "text": " Fetches hash of the message to be signed by token owner."
            },
            "functionSelector": "36b7c917",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getUserVerificationSignatureHash",
            "nameLocation": "7076:32:66",
            "parameters": {
              "id": 56220,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56219,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "7117:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56235,
                  "src": "7109:15:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56218,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7109:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7108:17:66"
            },
            "returnParameters": {
              "id": 56223,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56222,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56235,
                  "src": "7147:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 56221,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "7147:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7146:9:66"
            },
            "scope": 56498,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 56256,
            "nodeType": "FunctionDefinition",
            "src": "7266:255:66",
            "nodes": [],
            "body": {
              "id": 56255,
              "nodeType": "Block",
              "src": "7366:155:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 56247,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56237,
                            "src": "7442:7:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 56246,
                          "name": "_ownerOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42173,
                          "src": "7433:8:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                            "typeString": "function (uint256) view returns (address)"
                          }
                        },
                        "id": 56248,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7433:17:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 56250,
                            "name": "tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56237,
                            "src": "7485:7:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 56249,
                          "name": "getUserVerificationSignatureHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56235,
                          "src": "7452:32:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bytes32_$",
                            "typeString": "function (uint256) view returns (bytes32)"
                          }
                        },
                        "id": 56251,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7452:41:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "id": 56252,
                        "name": "signature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56239,
                        "src": "7495:9:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
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
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 56244,
                        "name": "SignatureChecker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 46695,
                        "src": "7383:16:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_SignatureChecker_$46695_$",
                          "typeString": "type(library SignatureChecker)"
                        }
                      },
                      "id": 56245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7400:19:66",
                      "memberName": "isValidSignatureNow",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 46642,
                      "src": "7383:36:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                        "typeString": "function (address,bytes32,bytes memory) view returns (bool)"
                      }
                    },
                    "id": 56253,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7383:131:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 56243,
                  "id": 56254,
                  "nodeType": "Return",
                  "src": "7376:138:66"
                }
              ]
            },
            "functionSelector": "e6828586",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isValidRedeemSignature",
            "nameLocation": "7275:22:66",
            "parameters": {
              "id": 56240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56237,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "7306:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56256,
                  "src": "7298:15:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56236,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7298:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56239,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "7328:9:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56256,
                  "src": "7315:22:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 56238,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7315:5:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7297:41:66"
            },
            "returnParameters": {
              "id": 56243,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56242,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56256,
                  "src": "7360:4:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 56241,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "7360:4:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7359:6:66"
            },
            "scope": 56498,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 56271,
            "nodeType": "FunctionDefinition",
            "src": "7623:112:66",
            "nodes": [],
            "body": {
              "id": 56270,
              "nodeType": "Block",
              "src": "7685:50:66",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56267,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56259,
                        "src": "7723:4:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 56264,
                          "name": "_self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56460,
                          "src": "7702:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                            "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                          }
                        },
                        "id": 56265,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7702:7:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                          "typeString": "struct MasterLib.State storage pointer"
                        }
                      },
                      "id": 56266,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7710:12:66",
                      "memberName": "getUserNonce",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56937,
                      "src": "7702:20:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_State_$56539_storage_ptr_$_t_address_$returns$_t_uint256_$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                        "typeString": "function (struct MasterLib.State storage pointer,address) view returns (uint256)"
                      }
                    },
                    "id": 56268,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7702:26:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 56263,
                  "id": 56269,
                  "nodeType": "Return",
                  "src": "7695:33:66"
                }
              ]
            },
            "documentation": {
              "id": 56257,
              "nodeType": "StructuredDocumentation",
              "src": "7527:91:66",
              "text": " Fetches nonce of the purchaseData\n @param user address of the user"
            },
            "functionSelector": "2d0335ab",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getNonce",
            "nameLocation": "7632:8:66",
            "parameters": {
              "id": 56260,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56259,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "7649:4:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56271,
                  "src": "7641:12:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 56258,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7641:7:66",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7640:14:66"
            },
            "returnParameters": {
              "id": 56263,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56262,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56271,
                  "src": "7676:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56261,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7676:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7675:9:66"
            },
            "scope": 56498,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 56356,
            "nodeType": "FunctionDefinition",
            "src": "7741:826:66",
            "nodes": [],
            "body": {
              "id": 56355,
              "nodeType": "Block",
              "src": "7890:677:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    56285
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56285,
                      "mutability": "mutable",
                      "name": "policy",
                      "nameLocation": "7939:6:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56355,
                      "src": "7900:45:66",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                        "typeString": "struct MasterLib.CancelPolicyMetadata"
                      },
                      "typeName": {
                        "id": 56284,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 56283,
                          "name": "MasterLib.CancelPolicyMetadata",
                          "nameLocations": [
                            "7900:9:66",
                            "7910:20:66"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 56544,
                          "src": "7900:30:66"
                        },
                        "referencedDeclaration": 56544,
                        "src": "7900:30:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                          "typeString": "struct MasterLib.CancelPolicyMetadata"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56292,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 56289,
                          "name": "ticketData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56274,
                          "src": "7977:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                            "typeString": "struct TicketLib.State storage pointer"
                          }
                        },
                        "id": 56290,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7988:6:66",
                        "memberName": "showId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 56993,
                        "src": "7977:17:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint96",
                          "typeString": "uint96"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint96",
                          "typeString": "uint96"
                        }
                      ],
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 56286,
                          "name": "_self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56460,
                          "src": "7948:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                            "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                          }
                        },
                        "id": 56287,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7948:7:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                          "typeString": "struct MasterLib.State storage pointer"
                        }
                      },
                      "id": 56288,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7956:20:66",
                      "memberName": "fetchPolicyForShowId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56722,
                      "src": "7948:28:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_State_$56539_storage_ptr_$_t_uint256_$returns$_t_struct$_CancelPolicyMetadata_$56544_storage_ptr_$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                        "typeString": "function (struct MasterLib.State storage pointer,uint256) view returns (struct MasterLib.CancelPolicyMetadata storage pointer)"
                      }
                    },
                    "id": 56291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7948:47:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                      "typeString": "struct MasterLib.CancelPolicyMetadata storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7900:95:66"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 56297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 56293,
                        "name": "ticketData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56274,
                        "src": "8009:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                          "typeString": "struct TicketLib.State storage pointer"
                        }
                      },
                      "id": 56294,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8020:8:66",
                      "memberName": "showTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56989,
                      "src": "8009:19:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint96",
                        "typeString": "uint96"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "expression": {
                        "id": 56295,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "8031:5:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 56296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8037:9:66",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "8031:15:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8009:37:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56352,
                  "nodeType": "IfStatement",
                  "src": "8005:538:66",
                  "trueBody": {
                    "id": 56351,
                    "nodeType": "Block",
                    "src": "8048:495:66",
                    "statements": [
                      {
                        "assignments": [
                          56299
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 56299,
                            "mutability": "mutable",
                            "name": "leftTime",
                            "nameLocation": "8070:8:66",
                            "nodeType": "VariableDeclaration",
                            "scope": 56351,
                            "src": "8062:16:66",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 56298,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "8062:7:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 56305,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 56304,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 56300,
                              "name": "ticketData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56274,
                              "src": "8081:10:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                                "typeString": "struct TicketLib.State storage pointer"
                              }
                            },
                            "id": 56301,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8092:8:66",
                            "memberName": "showTime",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 56989,
                            "src": "8081:19:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint96",
                              "typeString": "uint96"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "expression": {
                              "id": 56302,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -4,
                              "src": "8103:5:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 56303,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8109:9:66",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "8103:15:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8081:37:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "8062:56:66"
                      },
                      {
                        "assignments": [
                          56307
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 56307,
                            "mutability": "mutable",
                            "name": "index",
                            "nameLocation": "8140:5:66",
                            "nodeType": "VariableDeclaration",
                            "scope": 56351,
                            "src": "8132:13:66",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 56306,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "8132:7:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 56309,
                        "initialValue": {
                          "hexValue": "30",
                          "id": 56308,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8148:1:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "8132:17:66"
                      },
                      {
                        "body": {
                          "id": 56327,
                          "nodeType": "Block",
                          "src": "8264:66:66",
                          "statements": [
                            {
                              "expression": {
                                "id": 56324,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "++",
                                "prefix": false,
                                "src": "8282:7:66",
                                "subExpression": {
                                  "id": 56323,
                                  "name": "index",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56307,
                                  "src": "8282:5:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 56325,
                              "nodeType": "ExpressionStatement",
                              "src": "8282:7:66"
                            },
                            {
                              "id": 56326,
                              "nodeType": "Continue",
                              "src": "8307:8:66"
                            }
                          ]
                        },
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 56322,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 56314,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 56310,
                              "name": "index",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56307,
                              "src": "8170:5:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "expression": {
                                "expression": {
                                  "id": 56311,
                                  "name": "policy",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56285,
                                  "src": "8178:6:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                                    "typeString": "struct MasterLib.CancelPolicyMetadata storage pointer"
                                  }
                                },
                                "id": 56312,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "8185:14:66",
                                "memberName": "policyMetadata",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 56543,
                                "src": "8178:21:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_TimePercentage_$56549_storage_$dyn_storage",
                                  "typeString": "struct MasterLib.TimePercentage storage ref[] storage ref"
                                }
                              },
                              "id": 56313,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8200:6:66",
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "src": "8178:28:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "8170:36:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 56321,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 56315,
                              "name": "leftTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56299,
                              "src": "8210:8:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "expression": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 56316,
                                    "name": "policy",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 56285,
                                    "src": "8221:6:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                                      "typeString": "struct MasterLib.CancelPolicyMetadata storage pointer"
                                    }
                                  },
                                  "id": 56317,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8228:14:66",
                                  "memberName": "policyMetadata",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 56543,
                                  "src": "8221:21:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_TimePercentage_$56549_storage_$dyn_storage",
                                    "typeString": "struct MasterLib.TimePercentage storage ref[] storage ref"
                                  }
                                },
                                "id": 56319,
                                "indexExpression": {
                                  "id": 56318,
                                  "name": "index",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56307,
                                  "src": "8243:5:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "8221:28:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TimePercentage_$56549_storage",
                                  "typeString": "struct MasterLib.TimePercentage storage ref"
                                }
                              },
                              "id": 56320,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8250:12:66",
                              "memberName": "durationLeft",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 56546,
                              "src": "8221:41:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            },
                            "src": "8210:52:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "8170:92:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 56328,
                        "nodeType": "WhileStatement",
                        "src": "8163:167:66"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 56333,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 56329,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56307,
                            "src": "8347:5:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "expression": {
                                "id": 56330,
                                "name": "policy",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 56285,
                                "src": "8356:6:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                                  "typeString": "struct MasterLib.CancelPolicyMetadata storage pointer"
                                }
                              },
                              "id": 56331,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8363:14:66",
                              "memberName": "policyMetadata",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 56543,
                              "src": "8356:21:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_TimePercentage_$56549_storage_$dyn_storage",
                                "typeString": "struct MasterLib.TimePercentage storage ref[] storage ref"
                              }
                            },
                            "id": 56332,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8378:6:66",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "8356:28:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8347:37:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 56338,
                        "nodeType": "IfStatement",
                        "src": "8343:83:66",
                        "trueBody": {
                          "id": 56337,
                          "nodeType": "Block",
                          "src": "8386:40:66",
                          "statements": [
                            {
                              "expression": {
                                "id": 56335,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "--",
                                "prefix": false,
                                "src": "8404:7:66",
                                "subExpression": {
                                  "id": 56334,
                                  "name": "index",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56307,
                                  "src": "8404:5:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 56336,
                              "nodeType": "ExpressionStatement",
                              "src": "8404:7:66"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 56341,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 56276,
                              "src": "8458:6:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "baseExpression": {
                                  "expression": {
                                    "id": 56342,
                                    "name": "policy",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 56285,
                                    "src": "8466:6:66",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_CancelPolicyMetadata_$56544_storage_ptr",
                                      "typeString": "struct MasterLib.CancelPolicyMetadata storage pointer"
                                    }
                                  },
                                  "id": 56343,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8473:14:66",
                                  "memberName": "policyMetadata",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 56543,
                                  "src": "8466:21:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_struct$_TimePercentage_$56549_storage_$dyn_storage",
                                    "typeString": "struct MasterLib.TimePercentage storage ref[] storage ref"
                                  }
                                },
                                "id": 56345,
                                "indexExpression": {
                                  "id": 56344,
                                  "name": "index",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 56307,
                                  "src": "8488:5:66",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "8466:28:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TimePercentage_$56549_storage",
                                  "typeString": "struct MasterLib.TimePercentage storage ref"
                                }
                              },
                              "id": 56346,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8495:13:66",
                              "memberName": "percentageWad",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 56548,
                              "src": "8466:42:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            },
                            {
                              "expression": {
                                "id": 56347,
                                "name": "Constants",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 57286,
                                "src": "8510:9:66",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Constants_$57286_$",
                                  "typeString": "type(library Constants)"
                                }
                              },
                              "id": 56348,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "8520:11:66",
                              "memberName": "HUNDRED_WAD",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 57270,
                              "src": "8510:21:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 56339,
                              "name": "Math",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 48313,
                              "src": "8446:4:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Math_$48313_$",
                                "typeString": "type(library Math)"
                              }
                            },
                            "id": 56340,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8451:6:66",
                            "memberName": "mulDiv",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 47143,
                            "src": "8446:11:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 56349,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8446:86:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 56280,
                        "id": 56350,
                        "nodeType": "Return",
                        "src": "8439:93:66"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "hexValue": "30",
                    "id": 56353,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "8559:1:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 56280,
                  "id": 56354,
                  "nodeType": "Return",
                  "src": "8552:8:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_computePostCancellationAmt",
            "nameLocation": "7750:27:66",
            "parameters": {
              "id": 56277,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56274,
                  "mutability": "mutable",
                  "name": "ticketData",
                  "nameLocation": "7802:10:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56356,
                  "src": "7778:34:66",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                    "typeString": "struct TicketLib.State"
                  },
                  "typeName": {
                    "id": 56273,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 56272,
                      "name": "TicketLib.State",
                      "nameLocations": [
                        "7778:9:66",
                        "7788:5:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 57002,
                      "src": "7778:15:66"
                    },
                    "referencedDeclaration": 57002,
                    "src": "7778:15:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                      "typeString": "struct TicketLib.State"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56276,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "7822:6:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56356,
                  "src": "7814:14:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56275,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7814:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7777:52:66"
            },
            "returnParameters": {
              "id": 56280,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56279,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 56356,
                  "src": "7877:7:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56278,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7877:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7876:9:66"
            },
            "scope": 56498,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 56394,
            "nodeType": "FunctionDefinition",
            "src": "8573:387:66",
            "nodes": [],
            "body": {
              "id": 56393,
              "nodeType": "Block",
              "src": "8707:253:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    56370
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56370,
                      "mutability": "mutable",
                      "name": "self",
                      "nameLocation": "8741:4:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56393,
                      "src": "8717:28:66",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                        "typeString": "struct MasterLib.State"
                      },
                      "typeName": {
                        "id": 56369,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 56368,
                          "name": "MasterLib.State",
                          "nameLocations": [
                            "8717:9:66",
                            "8727:5:66"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 56539,
                          "src": "8717:15:66"
                        },
                        "referencedDeclaration": 56539,
                        "src": "8717:15:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                          "typeString": "struct MasterLib.State"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56373,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 56371,
                      "name": "_self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56460,
                      "src": "8748:5:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                        "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                      }
                    },
                    "id": 56372,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8748:7:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                      "typeString": "struct MasterLib.State storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8717:38:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56377,
                        "name": "purchaseData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56359,
                        "src": "8791:12:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                          "typeString": "struct PurchaseLib.PurchaseData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                          "typeString": "struct PurchaseLib.PurchaseData memory"
                        }
                      ],
                      "expression": {
                        "id": 56374,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56370,
                        "src": "8765:4:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                          "typeString": "struct MasterLib.State storage pointer"
                        }
                      },
                      "id": 56376,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8770:20:66",
                      "memberName": "validatePurchaseData",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56921,
                      "src": "8765:25:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$56539_storage_ptr_$_t_struct$_PurchaseData_$56954_memory_ptr_$returns$__$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                        "typeString": "function (struct MasterLib.State storage pointer,struct PurchaseLib.PurchaseData memory)"
                      }
                    },
                    "id": 56378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8765:39:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56379,
                  "nodeType": "ExpressionStatement",
                  "src": "8765:39:66"
                },
                {
                  "condition": {
                    "id": 56387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "8818:81:66",
                    "subExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 56382,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56370,
                            "src": "8856:4:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                              "typeString": "struct MasterLib.State storage pointer"
                            }
                          },
                          "id": 56383,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8861:8:66",
                          "memberName": "verifier",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 56511,
                          "src": "8856:13:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 56384,
                          "name": "purchaseDataHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56361,
                          "src": "8871:16:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "id": 56385,
                          "name": "signature",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56363,
                          "src": "8889:9:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
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
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "id": 56380,
                          "name": "SignatureChecker",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46695,
                          "src": "8819:16:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_SignatureChecker_$46695_$",
                            "typeString": "type(library SignatureChecker)"
                          }
                        },
                        "id": 56381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8836:19:66",
                        "memberName": "isValidSignatureNow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 46642,
                        "src": "8819:36:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                          "typeString": "function (address,bytes32,bytes memory) view returns (bool)"
                        }
                      },
                      "id": 56386,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8819:80:66",
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
                  "id": 56392,
                  "nodeType": "IfStatement",
                  "src": "8814:140:66",
                  "trueBody": {
                    "id": 56391,
                    "nodeType": "Block",
                    "src": "8901:53:66",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 56388,
                            "name": "InvalidPurchaseData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57296,
                            "src": "8922:19:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                              "typeString": "function () pure returns (error)"
                            }
                          },
                          "id": 56389,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8922:21:66",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 56390,
                        "nodeType": "RevertStatement",
                        "src": "8915:28:66"
                      }
                    ]
                  }
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_verifyPurchaseData",
            "nameLocation": "8582:19:66",
            "parameters": {
              "id": 56364,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56359,
                  "mutability": "mutable",
                  "name": "purchaseData",
                  "nameLocation": "8634:12:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56394,
                  "src": "8602:44:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PurchaseData_$56954_memory_ptr",
                    "typeString": "struct PurchaseLib.PurchaseData"
                  },
                  "typeName": {
                    "id": 56358,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 56357,
                      "name": "PurchaseLib.PurchaseData",
                      "nameLocations": [
                        "8602:11:66",
                        "8614:12:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 56954,
                      "src": "8602:24:66"
                    },
                    "referencedDeclaration": 56954,
                    "src": "8602:24:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PurchaseData_$56954_storage_ptr",
                      "typeString": "struct PurchaseLib.PurchaseData"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56361,
                  "mutability": "mutable",
                  "name": "purchaseDataHash",
                  "nameLocation": "8656:16:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56394,
                  "src": "8648:24:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 56360,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "8648:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 56363,
                  "mutability": "mutable",
                  "name": "signature",
                  "nameLocation": "8687:9:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56394,
                  "src": "8674:22:66",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 56362,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8674:5:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8601:96:66"
            },
            "returnParameters": {
              "id": 56365,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8707:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 56452,
            "nodeType": "FunctionDefinition",
            "src": "8966:502:66",
            "nodes": [],
            "body": {
              "id": 56451,
              "nodeType": "Block",
              "src": "9010:458:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    56400
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56400,
                      "mutability": "mutable",
                      "name": "ticketOwner",
                      "nameLocation": "9028:11:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56451,
                      "src": "9020:19:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 56399,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9020:7:66",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56404,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 56402,
                        "name": "ticketId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56396,
                        "src": "9051:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56401,
                      "name": "_ownerOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42173,
                      "src": "9042:8:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                        "typeString": "function (uint256) view returns (address)"
                      }
                    },
                    "id": 56403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9042:18:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9020:40:66"
                },
                {
                  "assignments": [
                    56409
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56409,
                      "mutability": "mutable",
                      "name": "ticketData",
                      "nameLocation": "9094:10:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56451,
                      "src": "9070:34:66",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                        "typeString": "struct TicketLib.State"
                      },
                      "typeName": {
                        "id": 56408,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 56407,
                          "name": "TicketLib.State",
                          "nameLocations": [
                            "9070:9:66",
                            "9080:5:66"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 57002,
                          "src": "9070:15:66"
                        },
                        "referencedDeclaration": 57002,
                        "src": "9070:15:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                          "typeString": "struct TicketLib.State"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56413,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 56411,
                        "name": "ticketId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56396,
                        "src": "9126:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56410,
                      "name": "_ticketLibStatePtr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56481,
                      "src": "9107:18:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_State_$57002_storage_ptr_$",
                        "typeString": "function (uint256) pure returns (struct TicketLib.State storage pointer)"
                      }
                    },
                    "id": 56412,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9107:28:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                      "typeString": "struct TicketLib.State storage pointer"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9070:65:66"
                },
                {
                  "assignments": [
                    56415
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56415,
                      "mutability": "mutable",
                      "name": "assetsToReturn",
                      "nameLocation": "9153:14:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56451,
                      "src": "9145:22:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 56414,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9145:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56421,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 56417,
                        "name": "ticketData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56409,
                        "src": "9198:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                          "typeString": "struct TicketLib.State storage pointer"
                        }
                      },
                      {
                        "expression": {
                          "id": 56418,
                          "name": "ticketData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56409,
                          "src": "9210:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                            "typeString": "struct TicketLib.State storage pointer"
                          }
                        },
                        "id": 56419,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9221:6:66",
                        "memberName": "amount",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 56997,
                        "src": "9210:17:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                          "typeString": "struct TicketLib.State storage pointer"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56416,
                      "name": "_computePostCancellationAmt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56356,
                      "src": "9170:27:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_State_$57002_storage_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (struct TicketLib.State storage pointer,uint256) view returns (uint256)"
                      }
                    },
                    "id": 56420,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9170:58:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9145:83:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 56425,
                          "name": "ticketData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56409,
                          "src": "9269:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                            "typeString": "struct TicketLib.State storage pointer"
                          }
                        },
                        "id": 56426,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9280:5:66",
                        "memberName": "asset",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 56987,
                        "src": "9269:16:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 56430,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 56427,
                            "name": "ticketData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56409,
                            "src": "9287:10:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                              "typeString": "struct TicketLib.State storage pointer"
                            }
                          },
                          "id": 56428,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9298:6:66",
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 56997,
                          "src": "9287:17:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 56429,
                          "name": "assetsToReturn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56415,
                          "src": "9307:14:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "9287:34:66",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 56422,
                          "name": "_self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56460,
                          "src": "9238:5:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_struct$_State_$56539_storage_ptr_$",
                            "typeString": "function () pure returns (struct MasterLib.State storage pointer)"
                          }
                        },
                        "id": 56423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9238:7:66",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                          "typeString": "struct MasterLib.State storage pointer"
                        }
                      },
                      "id": 56424,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9246:22:66",
                      "memberName": "addAssetsForWithdrawal",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 56754,
                      "src": "9238:30:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$56539_storage_ptr_$_t_address_$_t_uint256_$returns$__$attached_to$_t_struct$_State_$56539_storage_ptr_$",
                        "typeString": "function (struct MasterLib.State storage pointer,address,uint256)"
                      }
                    },
                    "id": 56431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9238:84:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56432,
                  "nodeType": "ExpressionStatement",
                  "src": "9238:84:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 56434,
                        "name": "ticketId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56396,
                        "src": "9338:8:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56433,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42520,
                      "src": "9332:5:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 56435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9332:15:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56436,
                  "nodeType": "ExpressionStatement",
                  "src": "9332:15:66"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 56440,
                          "name": "ticketData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56409,
                          "src": "9386:10:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                            "typeString": "struct TicketLib.State storage pointer"
                          }
                        },
                        "id": 56441,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9397:5:66",
                        "memberName": "asset",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 56987,
                        "src": "9386:16:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56442,
                        "name": "ticketOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56400,
                        "src": "9404:11:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 56443,
                        "name": "assetsToReturn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56415,
                        "src": "9417:14:66",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 56437,
                        "name": "SafeTransferLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55229,
                        "src": "9357:15:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_SafeTransferLib_$55229_$",
                          "typeString": "type(library SafeTransferLib)"
                        }
                      },
                      "id": 56439,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9373:12:66",
                      "memberName": "safeTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 55076,
                      "src": "9357:28:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 56444,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9357:75:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56445,
                  "nodeType": "ExpressionStatement",
                  "src": "9357:75:66"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 56446,
                        "name": "ticketData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56409,
                        "src": "9442:10:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                          "typeString": "struct TicketLib.State storage pointer"
                        }
                      },
                      "id": 56448,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9453:6:66",
                      "memberName": "remove",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 57221,
                      "src": "9442:17:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_State_$57002_storage_ptr_$returns$__$attached_to$_t_struct$_State_$57002_storage_ptr_$",
                        "typeString": "function (struct TicketLib.State storage pointer)"
                      }
                    },
                    "id": 56449,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9442:19:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56450,
                  "nodeType": "ExpressionStatement",
                  "src": "9442:19:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_cancel",
            "nameLocation": "8975:7:66",
            "parameters": {
              "id": 56397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56396,
                  "mutability": "mutable",
                  "name": "ticketId",
                  "nameLocation": "8991:8:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56452,
                  "src": "8983:16:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56395,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8983:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8982:18:66"
            },
            "returnParameters": {
              "id": 56398,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9010:0:66"
            },
            "scope": 56498,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 56460,
            "nodeType": "FunctionDefinition",
            "src": "9474:149:66",
            "nodes": [],
            "body": {
              "id": 56459,
              "nodeType": "Block",
              "src": "9541:82:66",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nativeSrc": "9560:57:66",
                    "nodeType": "YulBlock",
                    "src": "9560:57:66",
                    "statements": [
                      {
                        "nativeSrc": "9574:33:66",
                        "nodeType": "YulAssignment",
                        "src": "9574:33:66",
                        "value": {
                          "name": "MASTER_LIB_STORAGE_SLOT",
                          "nativeSrc": "9584:23:66",
                          "nodeType": "YulIdentifier",
                          "src": "9584:23:66"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "9574:6:66",
                            "nodeType": "YulIdentifier",
                            "src": "9574:6:66"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 56456,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "9574:6:66",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 55710,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9584:23:66",
                      "valueSize": 1
                    }
                  ],
                  "id": 56458,
                  "nodeType": "InlineAssembly",
                  "src": "9551:66:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_self",
            "nameLocation": "9483:5:66",
            "parameters": {
              "id": 56453,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9488:2:66"
            },
            "returnParameters": {
              "id": 56457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56456,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "9538:1:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56460,
                  "src": "9514:25:66",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                    "typeString": "struct MasterLib.State"
                  },
                  "typeName": {
                    "id": 56455,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 56454,
                      "name": "MasterLib.State",
                      "nameLocations": [
                        "9514:9:66",
                        "9524:5:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 56539,
                      "src": "9514:15:66"
                    },
                    "referencedDeclaration": 56539,
                    "src": "9514:15:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_State_$56539_storage_ptr",
                      "typeString": "struct MasterLib.State"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9513:27:66"
            },
            "scope": 56498,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 56481,
            "nodeType": "FunctionDefinition",
            "src": "9629:254:66",
            "nodes": [],
            "body": {
              "id": 56480,
              "nodeType": "Block",
              "src": "9725:158:66",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    56469
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 56469,
                      "mutability": "mutable",
                      "name": "slot",
                      "nameLocation": "9743:4:66",
                      "nodeType": "VariableDeclaration",
                      "scope": 56480,
                      "src": "9735:12:66",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 56468,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "9735:7:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 56478,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 56473,
                              "name": "Constants",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 57286,
                              "src": "9777:9:66",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Constants_$57286_$",
                                "typeString": "type(library Constants)"
                              }
                            },
                            "id": 56474,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "9787:21:66",
                            "memberName": "TICKET_STORAGE_PREFIX",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 57259,
                            "src": "9777:31:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "id": 56475,
                            "name": "ticketId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56462,
                            "src": "9810:8:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 56471,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "9760:3:66",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 56472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "9764:12:66",
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "src": "9760:16:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 56476,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9760:59:66",
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
                      "id": 56470,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "9750:9:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 56477,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9750:70:66",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9735:85:66"
                },
                {
                  "AST": {
                    "nativeSrc": "9839:38:66",
                    "nodeType": "YulBlock",
                    "src": "9839:38:66",
                    "statements": [
                      {
                        "nativeSrc": "9853:14:66",
                        "nodeType": "YulAssignment",
                        "src": "9853:14:66",
                        "value": {
                          "name": "slot",
                          "nativeSrc": "9863:4:66",
                          "nodeType": "YulIdentifier",
                          "src": "9863:4:66"
                        },
                        "variableNames": [
                          {
                            "name": "$.slot",
                            "nativeSrc": "9853:6:66",
                            "nodeType": "YulIdentifier",
                            "src": "9853:6:66"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "cancun",
                  "externalReferences": [
                    {
                      "declaration": 56466,
                      "isOffset": false,
                      "isSlot": true,
                      "src": "9853:6:66",
                      "suffix": "slot",
                      "valueSize": 1
                    },
                    {
                      "declaration": 56469,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "9863:4:66",
                      "valueSize": 1
                    }
                  ],
                  "id": 56479,
                  "nodeType": "InlineAssembly",
                  "src": "9830:47:66"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ticketLibStatePtr",
            "nameLocation": "9638:18:66",
            "parameters": {
              "id": 56463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56462,
                  "mutability": "mutable",
                  "name": "ticketId",
                  "nameLocation": "9665:8:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56481,
                  "src": "9657:16:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56461,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9657:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9656:18:66"
            },
            "returnParameters": {
              "id": 56467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56466,
                  "mutability": "mutable",
                  "name": "$",
                  "nameLocation": "9722:1:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56481,
                  "src": "9698:25:66",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                    "typeString": "struct TicketLib.State"
                  },
                  "typeName": {
                    "id": 56465,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 56464,
                      "name": "TicketLib.State",
                      "nameLocations": [
                        "9698:9:66",
                        "9708:5:66"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 57002,
                      "src": "9698:15:66"
                    },
                    "referencedDeclaration": 57002,
                    "src": "9698:15:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_State_$57002_storage_ptr",
                      "typeString": "struct TicketLib.State"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9697:27:66"
            },
            "scope": 56498,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 56497,
            "nodeType": "ModifierDefinition",
            "src": "9942:138:66",
            "nodes": [],
            "body": {
              "id": 56496,
              "nodeType": "Block",
              "src": "9984:96:66",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 56490,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 56486,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 56483,
                          "src": "10012:7:66",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 56485,
                        "name": "_requireOwned",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42794,
                        "src": "9998:13:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                          "typeString": "function (uint256) view returns (address)"
                        }
                      },
                      "id": 56487,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9998:22:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "id": 56488,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "10024:3:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 56489,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "10028:6:66",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "10024:10:66",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9998:36:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 56494,
                  "nodeType": "IfStatement",
                  "src": "9994:68:66",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 56491,
                        "name": "CancellerNotOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57306,
                        "src": "10043:17:66",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$_t_error_$",
                          "typeString": "function () pure returns (error)"
                        }
                      },
                      "id": 56492,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10043:19:66",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_error",
                        "typeString": "error"
                      }
                    },
                    "id": 56493,
                    "nodeType": "RevertStatement",
                    "src": "10036:26:66"
                  }
                },
                {
                  "id": 56495,
                  "nodeType": "PlaceholderStatement",
                  "src": "10072:1:66"
                }
              ]
            },
            "name": "onlyTicketOwner",
            "nameLocation": "9951:15:66",
            "parameters": {
              "id": 56484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56483,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "9975:7:66",
                  "nodeType": "VariableDeclaration",
                  "scope": 56497,
                  "src": "9967:15:66",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 56482,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9967:7:66",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9966:17:66"
            },
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 55684,
              "name": "ERC721Upgradeable",
              "nameLocations": [
                "909:17:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 42795,
              "src": "909:17:66"
            },
            "id": 55685,
            "nodeType": "InheritanceSpecifier",
            "src": "909:17:66"
          },
          {
            "baseName": {
              "id": 55686,
              "name": "EIP712Upgradeable",
              "nameLocations": [
                "928:17:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 43185,
              "src": "928:17:66"
            },
            "id": 55687,
            "nodeType": "InheritanceSpecifier",
            "src": "928:17:66"
          },
          {
            "baseName": {
              "id": 55688,
              "name": "OwnableUpgradeable",
              "nameLocations": [
                "947:18:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 40464,
              "src": "947:18:66"
            },
            "id": 55689,
            "nodeType": "InheritanceSpecifier",
            "src": "947:18:66"
          },
          {
            "baseName": {
              "id": 55690,
              "name": "ReentrancyGuard",
              "nameLocations": [
                "967:15:66"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 54895,
              "src": "967:15:66"
            },
            "id": 55691,
            "nodeType": "InheritanceSpecifier",
            "src": "967:15:66"
          }
        ],
        "canonicalName": "Master",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          56498,
          54895,
          40464,
          43185,
          43268,
          42795,
          43358,
          44522,
          44476,
          43225,
          46707,
          42841,
          40718
        ],
        "name": "Master",
        "nameLocation": "899:6:66",
        "scope": 56499,
        "usedErrors": [
          40300,
          40305,
          40481,
          40484,
          43316,
          43321,
          43330,
          43335,
          43340,
          43347,
          43352,
          43357,
          54877,
          57290,
          57292,
          57294,
          57296,
          57298,
          57306,
          57308,
          57310,
          57312,
          57314
        ],
        "usedEvents": [
          40311,
          40489,
          43248,
          44375,
          44384,
          44393,
          57320
        ]
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 66
} as const;