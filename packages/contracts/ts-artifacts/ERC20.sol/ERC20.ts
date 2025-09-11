export const ERC20 = {
  "abi": [
    {
      "type": "function",
      "name": "allowance",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "spender",
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
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "account",
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
      "name": "decimals",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
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
      "name": "totalSupply",
      "inputs": [],
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
      "name": "transfer",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
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
          "name": "value",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
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
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
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
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "ERC20InsufficientAllowance",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "allowance",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "needed",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InsufficientBalance",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "balance",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "needed",
          "type": "uint256",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidApprover",
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
      "name": "ERC20InvalidReceiver",
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
      "name": "ERC20InvalidSender",
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
      "name": "ERC20InvalidSpender",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        }
      ]
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
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "decimals()": "313ce567",
    "name()": "06fdde03",
    "symbol()": "95d89b41",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"needed\",\"type\":\"uint256\"}],\"name\":\"ERC20InsufficientBalance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"approver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidApprover\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"ERC20InvalidReceiver\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSender\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"ERC20InvalidSpender\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Implementation of the {IERC20} interface. This implementation is agnostic to the way tokens are created. This means that a supply mechanism has to be added in a derived contract using {_mint}. TIP: For a detailed writeup see our guide https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How to implement supply mechanisms]. The default value of {decimals} is 18. To change this, you should override this function so it returns a different value. We have followed general OpenZeppelin Contracts guidelines: functions revert instead returning `false` on failure. This behavior is nonetheless conventional and does not conflict with the expectations of ERC-20 applications.\",\"errors\":{\"ERC20InsufficientAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failure with the `spender`\\u2019s `allowance`. Used in transfers.\",\"params\":{\"allowance\":\"Amount of tokens a `spender` is allowed to operate with.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}],\"ERC20InsufficientBalance(address,uint256,uint256)\":[{\"details\":\"Indicates an error related to the current `balance` of a `sender`. Used in transfers.\",\"params\":{\"balance\":\"Current balance for the interacting account.\",\"needed\":\"Minimum amount required to perform a transfer.\",\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidApprover(address)\":[{\"details\":\"Indicates a failure with the `approver` of a token to be approved. Used in approvals.\",\"params\":{\"approver\":\"Address initiating an approval operation.\"}}],\"ERC20InvalidReceiver(address)\":[{\"details\":\"Indicates a failure with the token `receiver`. Used in transfers.\",\"params\":{\"receiver\":\"Address to which tokens are being transferred.\"}}],\"ERC20InvalidSender(address)\":[{\"details\":\"Indicates a failure with the token `sender`. Used in transfers.\",\"params\":{\"sender\":\"Address whose tokens are being transferred.\"}}],\"ERC20InvalidSpender(address)\":[{\"details\":\"Indicates a failure with the `spender` to be approved. Used in approvals.\",\"params\":{\"spender\":\"Address that may be allowed to operate on tokens without being their owner.\"}}]},\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"constructor\":{\"details\":\"Sets the values for {name} and {symbol}. All two of these values are immutable: they can only be set once during construction.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol\":\"ERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b\",\"dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xbf61ab2ae1d575a17ea58fbb99ca232baddcc4e0eeea180e84cbc74b0c348b31\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4e0968705bad99747a8e5288aa008678c2be2f471f919dce3925a3cc4f1dee09\",\"dweb:/ipfs/QmbAFnCQfo4tw6ssfQSjhA5LzwHWNNryXN8bX7ty8jiqqn\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db\",\"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x70f2f713b13b7ce4610bcd0ac9fec0f3cc43693b043abcb8dc40a42a726eb330\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c13d13304ac79a83ab1c30168967d19e2203342ebbd6a9bbce4db7550522dcbf\",\"dweb:/ipfs/QmeN5jKMN2vw5bhacr6tkg78afbTTZUeaacNHqjWt4Ew1r\"]},\"node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]}},\"version\":1}",
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
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "allowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC20InsufficientAllowance"
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
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "type": "error",
          "name": "ERC20InsufficientBalance"
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
          "name": "ERC20InvalidApprover"
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
          "name": "ERC20InvalidReceiver"
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
          "name": "ERC20InvalidSender"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "type": "error",
          "name": "ERC20InvalidSpender"
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
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
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
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
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
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
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
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve",
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
              "internalType": "address",
              "name": "account",
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
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
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
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
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transfer",
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
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "allowance(address,address)": {
            "details": "See {IERC20-allowance}."
          },
          "approve(address,uint256)": {
            "details": "See {IERC20-approve}. NOTE: If `value` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
          },
          "balanceOf(address)": {
            "details": "See {IERC20-balanceOf}."
          },
          "constructor": {
            "details": "Sets the values for {name} and {symbol}. All two of these values are immutable: they can only be set once during construction."
          },
          "decimals()": {
            "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
          },
          "name()": {
            "details": "Returns the name of the token."
          },
          "symbol()": {
            "details": "Returns the symbol of the token, usually a shorter version of the name."
          },
          "totalSupply()": {
            "details": "See {IERC20-totalSupply}."
          },
          "transfer(address,uint256)": {
            "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `value`."
          },
          "transferFrom(address,address,uint256)": {
            "details": "See {IERC20-transferFrom}. Skips emitting an {Approval} event indicating an allowance update. This is not required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve]. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `value`. - the caller must have allowance for ``from``'s tokens of at least `value`."
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
        "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol": "ERC20"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol": {
        "keccak256": "0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b",
        "urls": [
          "bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b",
          "dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0xbf61ab2ae1d575a17ea58fbb99ca232baddcc4e0eeea180e84cbc74b0c348b31",
        "urls": [
          "bzz-raw://4e0968705bad99747a8e5288aa008678c2be2f471f919dce3925a3cc4f1dee09",
          "dweb:/ipfs/QmbAFnCQfo4tw6ssfQSjhA5LzwHWNNryXN8bX7ty8jiqqn"
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
      "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0x70f2f713b13b7ce4610bcd0ac9fec0f3cc43693b043abcb8dc40a42a726eb330",
        "urls": [
          "bzz-raw://c13d13304ac79a83ab1c30168967d19e2203342ebbd6a9bbce4db7550522dcbf",
          "dweb:/ipfs/QmeN5jKMN2vw5bhacr6tkg78afbTTZUeaacNHqjWt4Ew1r"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol",
    "id": 44256,
    "exportedSymbols": {
      "Context": [
        45539
      ],
      "ERC20": [
        44255
      ],
      "IERC20": [
        44333
      ],
      "IERC20Errors": [
        43310
      ],
      "IERC20Metadata": [
        44359
      ]
    },
    "nodeType": "SourceUnit",
    "src": "105:10790:39",
    "nodes": [
      {
        "id": 43742,
        "nodeType": "PragmaDirective",
        "src": "105:24:39",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 43744,
        "nodeType": "ImportDirective",
        "src": "131:36:39",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol",
        "file": "./IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 44256,
        "sourceUnit": 44334,
        "symbolAliases": [
          {
            "foreign": {
              "id": 43743,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 44333,
              "src": "139:6:39",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 43746,
        "nodeType": "ImportDirective",
        "src": "168:63:39",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol",
        "file": "./extensions/IERC20Metadata.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 44256,
        "sourceUnit": 44360,
        "symbolAliases": [
          {
            "foreign": {
              "id": 43745,
              "name": "IERC20Metadata",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 44359,
              "src": "176:14:39",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 43748,
        "nodeType": "ImportDirective",
        "src": "232:48:39",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/Context.sol",
        "file": "../../utils/Context.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 44256,
        "sourceUnit": 45540,
        "symbolAliases": [
          {
            "foreign": {
              "id": 43747,
              "name": "Context",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 45539,
              "src": "240:7:39",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 43750,
        "nodeType": "ImportDirective",
        "src": "281:65:39",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
        "file": "../../interfaces/draft-IERC6093.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 44256,
        "sourceUnit": 43406,
        "symbolAliases": [
          {
            "foreign": {
              "id": 43749,
              "name": "IERC20Errors",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 43310,
              "src": "289:12:39",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 44255,
        "nodeType": "ContractDefinition",
        "src": "1106:9788:39",
        "nodes": [
          {
            "id": 43763,
            "nodeType": "VariableDeclaration",
            "src": "1185:53:39",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_balances",
            "nameLocation": "1229:9:39",
            "scope": 44255,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 43762,
              "keyName": "account",
              "keyNameLocation": "1201:7:39",
              "keyType": {
                "id": 43760,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1193:7:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1185:35:39",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 43761,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1212:7:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 43769,
            "nodeType": "VariableDeclaration",
            "src": "1245:83:39",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_allowances",
            "nameLocation": "1317:11:39",
            "scope": 44255,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 43768,
              "keyName": "account",
              "keyNameLocation": "1261:7:39",
              "keyType": {
                "id": 43764,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1253:7:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1245:63:39",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 43767,
                "keyName": "spender",
                "keyNameLocation": "1288:7:39",
                "keyType": {
                  "id": 43765,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1280:7:39",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "1272:35:39",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 43766,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1299:7:39",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 43771,
            "nodeType": "VariableDeclaration",
            "src": "1335:28:39",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_totalSupply",
            "nameLocation": "1351:12:39",
            "scope": 44255,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 43770,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1335:7:39",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "id": 43773,
            "nodeType": "VariableDeclaration",
            "src": "1370:20:39",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_name",
            "nameLocation": "1385:5:39",
            "scope": 44255,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 43772,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1370:6:39",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "id": 43775,
            "nodeType": "VariableDeclaration",
            "src": "1396:22:39",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_symbol",
            "nameLocation": "1411:7:39",
            "scope": 44255,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 43774,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1396:6:39",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "id": 43792,
            "nodeType": "FunctionDefinition",
            "src": "1601:113:39",
            "nodes": [],
            "body": {
              "id": 43791,
              "nodeType": "Block",
              "src": "1657:57:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 43785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 43783,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43773,
                      "src": "1667:5:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 43784,
                      "name": "name_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43778,
                      "src": "1675:5:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1667:13:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 43786,
                  "nodeType": "ExpressionStatement",
                  "src": "1667:13:39"
                },
                {
                  "expression": {
                    "id": 43789,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 43787,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43775,
                      "src": "1690:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 43788,
                      "name": "symbol_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43780,
                      "src": "1700:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1690:17:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 43790,
                  "nodeType": "ExpressionStatement",
                  "src": "1690:17:39"
                }
              ]
            },
            "documentation": {
              "id": 43776,
              "nodeType": "StructuredDocumentation",
              "src": "1425:171:39",
              "text": " @dev Sets the values for {name} and {symbol}.\n All two of these values are immutable: they can only be set once during\n construction."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 43781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43778,
                  "mutability": "mutable",
                  "name": "name_",
                  "nameLocation": "1627:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43792,
                  "src": "1613:19:39",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 43777,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1613:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43780,
                  "mutability": "mutable",
                  "name": "symbol_",
                  "nameLocation": "1648:7:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43792,
                  "src": "1634:21:39",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 43779,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1634:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1612:44:39"
            },
            "returnParameters": {
              "id": 43782,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1657:0:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 43801,
            "nodeType": "FunctionDefinition",
            "src": "1779:89:39",
            "nodes": [],
            "body": {
              "id": 43800,
              "nodeType": "Block",
              "src": "1839:29:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 43798,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 43773,
                    "src": "1856:5:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 43797,
                  "id": 43799,
                  "nodeType": "Return",
                  "src": "1849:12:39"
                }
              ]
            },
            "baseFunctions": [
              44346
            ],
            "documentation": {
              "id": 43793,
              "nodeType": "StructuredDocumentation",
              "src": "1720:54:39",
              "text": " @dev Returns the name of the token."
            },
            "functionSelector": "06fdde03",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nameLocation": "1788:4:39",
            "parameters": {
              "id": 43794,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1792:2:39"
            },
            "returnParameters": {
              "id": 43797,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43796,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43801,
                  "src": "1824:13:39",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 43795,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1824:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1823:15:39"
            },
            "scope": 44255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 43810,
            "nodeType": "FunctionDefinition",
            "src": "1981:93:39",
            "nodes": [],
            "body": {
              "id": 43809,
              "nodeType": "Block",
              "src": "2043:31:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 43807,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 43775,
                    "src": "2060:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 43806,
                  "id": 43808,
                  "nodeType": "Return",
                  "src": "2053:14:39"
                }
              ]
            },
            "baseFunctions": [
              44352
            ],
            "documentation": {
              "id": 43802,
              "nodeType": "StructuredDocumentation",
              "src": "1874:102:39",
              "text": " @dev Returns the symbol of the token, usually a shorter version of the\n name."
            },
            "functionSelector": "95d89b41",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nameLocation": "1990:6:39",
            "parameters": {
              "id": 43803,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1996:2:39"
            },
            "returnParameters": {
              "id": 43806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43805,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43810,
                  "src": "2028:13:39",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 43804,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2028:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2027:15:39"
            },
            "scope": 44255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 43819,
            "nodeType": "FunctionDefinition",
            "src": "2707:82:39",
            "nodes": [],
            "body": {
              "id": 43818,
              "nodeType": "Block",
              "src": "2763:26:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "hexValue": "3138",
                    "id": 43816,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2780:2:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_18_by_1",
                      "typeString": "int_const 18"
                    },
                    "value": "18"
                  },
                  "functionReturnParameters": 43815,
                  "id": 43817,
                  "nodeType": "Return",
                  "src": "2773:9:39"
                }
              ]
            },
            "baseFunctions": [
              44358
            ],
            "documentation": {
              "id": 43811,
              "nodeType": "StructuredDocumentation",
              "src": "2080:622:39",
              "text": " @dev Returns the number of decimals used to get its user representation.\n For example, if `decimals` equals `2`, a balance of `505` tokens should\n be displayed to a user as `5.05` (`505 / 10 ** 2`).\n Tokens usually opt for a value of 18, imitating the relationship between\n Ether and Wei. This is the default value returned by this function, unless\n it's overridden.\n NOTE: This information is only used for _display_ purposes: it in\n no way affects any of the arithmetic of the contract, including\n {IERC20-balanceOf} and {IERC20-transfer}."
            },
            "functionSelector": "313ce567",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nameLocation": "2716:8:39",
            "parameters": {
              "id": 43812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2724:2:39"
            },
            "returnParameters": {
              "id": 43815,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43814,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43819,
                  "src": "2756:5:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 43813,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2756:5:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2755:7:39"
            },
            "scope": 44255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 43828,
            "nodeType": "FunctionDefinition",
            "src": "2849:97:39",
            "nodes": [],
            "body": {
              "id": 43827,
              "nodeType": "Block",
              "src": "2910:36:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 43825,
                    "name": "_totalSupply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 43771,
                    "src": "2927:12:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 43824,
                  "id": 43826,
                  "nodeType": "Return",
                  "src": "2920:19:39"
                }
              ]
            },
            "baseFunctions": [
              44282
            ],
            "documentation": {
              "id": 43820,
              "nodeType": "StructuredDocumentation",
              "src": "2795:49:39",
              "text": " @dev See {IERC20-totalSupply}."
            },
            "functionSelector": "18160ddd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "2858:11:39",
            "parameters": {
              "id": 43821,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2869:2:39"
            },
            "returnParameters": {
              "id": 43824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43823,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43828,
                  "src": "2901:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43822,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2901:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2900:9:39"
            },
            "scope": 44255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 43841,
            "nodeType": "FunctionDefinition",
            "src": "3004:116:39",
            "nodes": [],
            "body": {
              "id": 43840,
              "nodeType": "Block",
              "src": "3078:42:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "id": 43836,
                      "name": "_balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43763,
                      "src": "3095:9:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 43838,
                    "indexExpression": {
                      "id": 43837,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43831,
                      "src": "3105:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3095:18:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 43835,
                  "id": 43839,
                  "nodeType": "Return",
                  "src": "3088:25:39"
                }
              ]
            },
            "baseFunctions": [
              44290
            ],
            "documentation": {
              "id": 43829,
              "nodeType": "StructuredDocumentation",
              "src": "2952:47:39",
              "text": " @dev See {IERC20-balanceOf}."
            },
            "functionSelector": "70a08231",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "3013:9:39",
            "parameters": {
              "id": 43832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43831,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3031:7:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43841,
                  "src": "3023:15:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43830,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3023:7:39",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3022:17:39"
            },
            "returnParameters": {
              "id": 43835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43834,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43841,
                  "src": "3069:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3069:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3068:9:39"
            },
            "scope": 44255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 43865,
            "nodeType": "FunctionDefinition",
            "src": "3315:178:39",
            "nodes": [],
            "body": {
              "id": 43864,
              "nodeType": "Block",
              "src": "3390:103:39",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    43852
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43852,
                      "mutability": "mutable",
                      "name": "owner",
                      "nameLocation": "3408:5:39",
                      "nodeType": "VariableDeclaration",
                      "scope": 43864,
                      "src": "3400:13:39",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 43851,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3400:7:39",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 43855,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 43853,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45521,
                      "src": "3416:10:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 43854,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3416:12:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3400:28:39"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43857,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43852,
                        "src": "3448:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 43858,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43844,
                        "src": "3455:2:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 43859,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43846,
                        "src": "3459:5:39",
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
                      "id": 43856,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43985,
                      "src": "3438:9:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 43860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3438:27:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 43861,
                  "nodeType": "ExpressionStatement",
                  "src": "3438:27:39"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 43862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3482:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 43850,
                  "id": 43863,
                  "nodeType": "Return",
                  "src": "3475:11:39"
                }
              ]
            },
            "baseFunctions": [
              44300
            ],
            "documentation": {
              "id": 43842,
              "nodeType": "StructuredDocumentation",
              "src": "3126:184:39",
              "text": " @dev See {IERC20-transfer}.\n Requirements:\n - `to` cannot be the zero address.\n - the caller must have a balance of at least `value`."
            },
            "functionSelector": "a9059cbb",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "3324:8:39",
            "parameters": {
              "id": 43847,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43844,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3341:2:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43865,
                  "src": "3333:10:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43843,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3333:7:39",
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
                  "id": 43846,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3353:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43865,
                  "src": "3345:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43845,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3345:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3332:27:39"
            },
            "returnParameters": {
              "id": 43850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43849,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43865,
                  "src": "3384:4:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 43848,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3384:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3383:6:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 43882,
            "nodeType": "FunctionDefinition",
            "src": "3551:140:39",
            "nodes": [],
            "body": {
              "id": 43881,
              "nodeType": "Block",
              "src": "3640:51:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "baseExpression": {
                        "id": 43875,
                        "name": "_allowances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43769,
                        "src": "3657:11:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 43877,
                      "indexExpression": {
                        "id": 43876,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43868,
                        "src": "3669:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3657:18:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 43879,
                    "indexExpression": {
                      "id": 43878,
                      "name": "spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43870,
                      "src": "3676:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3657:27:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 43874,
                  "id": 43880,
                  "nodeType": "Return",
                  "src": "3650:34:39"
                }
              ]
            },
            "baseFunctions": [
              44310
            ],
            "documentation": {
              "id": 43866,
              "nodeType": "StructuredDocumentation",
              "src": "3499:47:39",
              "text": " @dev See {IERC20-allowance}."
            },
            "functionSelector": "dd62ed3e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "3560:9:39",
            "parameters": {
              "id": 43871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43868,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3578:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43882,
                  "src": "3570:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43867,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3570:7:39",
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
                  "id": 43870,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "3593:7:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43882,
                  "src": "3585:15:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43869,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3585:7:39",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3569:32:39"
            },
            "returnParameters": {
              "id": 43874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43873,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43882,
                  "src": "3631:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3631:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3630:9:39"
            },
            "scope": 44255,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 43906,
            "nodeType": "FunctionDefinition",
            "src": "3998:186:39",
            "nodes": [],
            "body": {
              "id": 43905,
              "nodeType": "Block",
              "src": "4077:107:39",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    43893
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43893,
                      "mutability": "mutable",
                      "name": "owner",
                      "nameLocation": "4095:5:39",
                      "nodeType": "VariableDeclaration",
                      "scope": 43905,
                      "src": "4087:13:39",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 43892,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4087:7:39",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 43896,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 43894,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45521,
                      "src": "4103:10:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 43895,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4103:12:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4087:28:39"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43898,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43893,
                        "src": "4134:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 43899,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43885,
                        "src": "4141:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 43900,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43887,
                        "src": "4150:5:39",
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
                      "id": 43897,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        44146,
                        44206
                      ],
                      "referencedDeclaration": 44146,
                      "src": "4125:8:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 43901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4125:31:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 43902,
                  "nodeType": "ExpressionStatement",
                  "src": "4125:31:39"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 43903,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4173:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 43891,
                  "id": 43904,
                  "nodeType": "Return",
                  "src": "4166:11:39"
                }
              ]
            },
            "baseFunctions": [
              44320
            ],
            "documentation": {
              "id": 43883,
              "nodeType": "StructuredDocumentation",
              "src": "3697:296:39",
              "text": " @dev See {IERC20-approve}.\n NOTE: If `value` is the maximum `uint256`, the allowance is not updated on\n `transferFrom`. This is semantically equivalent to an infinite approval.\n Requirements:\n - `spender` cannot be the zero address."
            },
            "functionSelector": "095ea7b3",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "4007:7:39",
            "parameters": {
              "id": 43888,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43885,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "4023:7:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43906,
                  "src": "4015:15:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43884,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4015:7:39",
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
                  "id": 43887,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4040:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43906,
                  "src": "4032:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43886,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4032:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4014:32:39"
            },
            "returnParameters": {
              "id": 43891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43890,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43906,
                  "src": "4071:4:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 43889,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4071:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4070:6:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 43938,
            "nodeType": "FunctionDefinition",
            "src": "4776:244:39",
            "nodes": [],
            "body": {
              "id": 43937,
              "nodeType": "Block",
              "src": "4869:151:39",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    43919
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43919,
                      "mutability": "mutable",
                      "name": "spender",
                      "nameLocation": "4887:7:39",
                      "nodeType": "VariableDeclaration",
                      "scope": 43937,
                      "src": "4879:15:39",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 43918,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "4879:7:39",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 43922,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 43920,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45521,
                      "src": "4897:10:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 43921,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4897:12:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4879:30:39"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43924,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43909,
                        "src": "4935:4:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 43925,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43919,
                        "src": "4941:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 43926,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43913,
                        "src": "4950:5:39",
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
                      "id": 43923,
                      "name": "_spendAllowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44254,
                      "src": "4919:15:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 43927,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4919:37:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 43928,
                  "nodeType": "ExpressionStatement",
                  "src": "4919:37:39"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43930,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43909,
                        "src": "4976:4:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 43931,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43911,
                        "src": "4982:2:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 43932,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43913,
                        "src": "4986:5:39",
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
                      "id": 43929,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43985,
                      "src": "4966:9:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 43933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4966:26:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 43934,
                  "nodeType": "ExpressionStatement",
                  "src": "4966:26:39"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 43935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5009:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 43917,
                  "id": 43936,
                  "nodeType": "Return",
                  "src": "5002:11:39"
                }
              ]
            },
            "baseFunctions": [
              44332
            ],
            "documentation": {
              "id": 43907,
              "nodeType": "StructuredDocumentation",
              "src": "4190:581:39",
              "text": " @dev See {IERC20-transferFrom}.\n Skips emitting an {Approval} event indicating an allowance update. This is not\n required by the ERC. See {xref-ERC20-_approve-address-address-uint256-bool-}[_approve].\n NOTE: Does not update the allowance if the current allowance\n is the maximum `uint256`.\n Requirements:\n - `from` and `to` cannot be the zero address.\n - `from` must have a balance of at least `value`.\n - the caller must have allowance for ``from``'s tokens of at least\n `value`."
            },
            "functionSelector": "23b872dd",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "4785:12:39",
            "parameters": {
              "id": 43914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43909,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "4806:4:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43938,
                  "src": "4798:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43908,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4798:7:39",
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
                  "id": 43911,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4820:2:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43938,
                  "src": "4812:10:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43910,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4812:7:39",
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
                  "id": 43913,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4832:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43938,
                  "src": "4824:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43912,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4824:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4797:41:39"
            },
            "returnParameters": {
              "id": 43917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43916,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 43938,
                  "src": "4863:4:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 43915,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4863:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4862:6:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 43985,
            "nodeType": "FunctionDefinition",
            "src": "5393:300:39",
            "nodes": [],
            "body": {
              "id": 43984,
              "nodeType": "Block",
              "src": "5462:231:39",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 43953,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43948,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43941,
                      "src": "5476:4:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 43951,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5492:1:39",
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
                        "id": 43950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5484:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 43949,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5484:7:39",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 43952,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5484:10:39",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5476:18:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43962,
                  "nodeType": "IfStatement",
                  "src": "5472:86:39",
                  "trueBody": {
                    "id": 43961,
                    "nodeType": "Block",
                    "src": "5496:62:39",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 43957,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5544:1:39",
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
                                "id": 43956,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5536:7:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 43955,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5536:7:39",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 43958,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5536:10:39",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 43954,
                            "name": "ERC20InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43285,
                            "src": "5517:18:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 43959,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5517:30:39",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 43960,
                        "nodeType": "RevertStatement",
                        "src": "5510:37:39"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 43968,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43963,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43943,
                      "src": "5571:2:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 43966,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5585:1:39",
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
                        "id": 43965,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5577:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 43964,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "5577:7:39",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 43967,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5577:10:39",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5571:16:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 43977,
                  "nodeType": "IfStatement",
                  "src": "5567:86:39",
                  "trueBody": {
                    "id": 43976,
                    "nodeType": "Block",
                    "src": "5589:64:39",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 43972,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "5639:1:39",
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
                                "id": 43971,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5631:7:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 43970,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5631:7:39",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 43973,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5631:10:39",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 43969,
                            "name": "ERC20InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43290,
                            "src": "5610:20:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 43974,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5610:32:39",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 43975,
                        "nodeType": "RevertStatement",
                        "src": "5603:39:39"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 43979,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43941,
                        "src": "5670:4:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 43980,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43943,
                        "src": "5676:2:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 43981,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43945,
                        "src": "5680:5:39",
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
                      "id": 43978,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44062,
                      "src": "5662:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 43982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5662:24:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 43983,
                  "nodeType": "ExpressionStatement",
                  "src": "5662:24:39"
                }
              ]
            },
            "documentation": {
              "id": 43939,
              "nodeType": "StructuredDocumentation",
              "src": "5026:362:39",
              "text": " @dev Moves a `value` amount of tokens from `from` to `to`.\n This internal function is equivalent to {transfer}, and can be used to\n e.g. implement automatic token fees, slashing mechanisms, etc.\n Emits a {Transfer} event.\n NOTE: This function is not virtual, {_update} should be overridden instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_transfer",
            "nameLocation": "5402:9:39",
            "parameters": {
              "id": 43946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43941,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "5420:4:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43985,
                  "src": "5412:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43940,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5412:7:39",
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
                  "id": 43943,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "5434:2:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43985,
                  "src": "5426:10:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43942,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5426:7:39",
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
                  "id": 43945,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5446:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 43985,
                  "src": "5438:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43944,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5438:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5411:41:39"
            },
            "returnParameters": {
              "id": 43947,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5462:0:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44062,
            "nodeType": "FunctionDefinition",
            "src": "6008:1107:39",
            "nodes": [],
            "body": {
              "id": 44061,
              "nodeType": "Block",
              "src": "6083:1032:39",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 44000,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 43995,
                      "name": "from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43988,
                      "src": "6097:4:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 43998,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6113:1:39",
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
                        "id": 43997,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6105:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 43996,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6105:7:39",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 43999,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6105:10:39",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6097:18:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 44032,
                    "nodeType": "Block",
                    "src": "6271:362:39",
                    "statements": [
                      {
                        "assignments": [
                          44007
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 44007,
                            "mutability": "mutable",
                            "name": "fromBalance",
                            "nameLocation": "6293:11:39",
                            "nodeType": "VariableDeclaration",
                            "scope": 44032,
                            "src": "6285:19:39",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 44006,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6285:7:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 44011,
                        "initialValue": {
                          "baseExpression": {
                            "id": 44008,
                            "name": "_balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43763,
                            "src": "6307:9:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 44010,
                          "indexExpression": {
                            "id": 44009,
                            "name": "from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43988,
                            "src": "6317:4:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6307:15:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6285:37:39"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 44014,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 44012,
                            "name": "fromBalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44007,
                            "src": "6340:11:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 44013,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43992,
                            "src": "6354:5:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6340:19:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 44022,
                        "nodeType": "IfStatement",
                        "src": "6336:115:39",
                        "trueBody": {
                          "id": 44021,
                          "nodeType": "Block",
                          "src": "6361:90:39",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 44016,
                                    "name": "from",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 43988,
                                    "src": "6411:4:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 44017,
                                    "name": "fromBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 44007,
                                    "src": "6417:11:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 44018,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 43992,
                                    "src": "6430:5:39",
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
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 44015,
                                  "name": "ERC20InsufficientBalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43280,
                                  "src": "6386:24:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$_t_error_$",
                                    "typeString": "function (address,uint256,uint256) pure returns (error)"
                                  }
                                },
                                "id": 44019,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "6386:50:39",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_error",
                                  "typeString": "error"
                                }
                              },
                              "id": 44020,
                              "nodeType": "RevertStatement",
                              "src": "6379:57:39"
                            }
                          ]
                        }
                      },
                      {
                        "id": 44031,
                        "nodeType": "UncheckedBlock",
                        "src": "6464:159:39",
                        "statements": [
                          {
                            "expression": {
                              "id": 44029,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "baseExpression": {
                                  "id": 44023,
                                  "name": "_balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43763,
                                  "src": "6571:9:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 44025,
                                "indexExpression": {
                                  "id": 44024,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43988,
                                  "src": "6581:4:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "6571:15:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 44028,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 44026,
                                  "name": "fromBalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 44007,
                                  "src": "6589:11:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 44027,
                                  "name": "value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43992,
                                  "src": "6603:5:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "6589:19:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "6571:37:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 44030,
                            "nodeType": "ExpressionStatement",
                            "src": "6571:37:39"
                          }
                        ]
                      }
                    ]
                  },
                  "id": 44033,
                  "nodeType": "IfStatement",
                  "src": "6093:540:39",
                  "trueBody": {
                    "id": 44005,
                    "nodeType": "Block",
                    "src": "6117:148:39",
                    "statements": [
                      {
                        "expression": {
                          "id": 44003,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 44001,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43771,
                            "src": "6233:12:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 44002,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43992,
                            "src": "6249:5:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6233:21:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 44004,
                        "nodeType": "ExpressionStatement",
                        "src": "6233:21:39"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 44039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44034,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43990,
                      "src": "6647:2:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 44037,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6661:1:39",
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
                        "id": 44036,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6653:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 44035,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "6653:7:39",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44038,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6653:10:39",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6647:16:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 44053,
                    "nodeType": "Block",
                    "src": "6862:206:39",
                    "statements": [
                      {
                        "id": 44052,
                        "nodeType": "UncheckedBlock",
                        "src": "6876:182:39",
                        "statements": [
                          {
                            "expression": {
                              "id": 44050,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "baseExpression": {
                                  "id": 44046,
                                  "name": "_balances",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43763,
                                  "src": "7021:9:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 44048,
                                "indexExpression": {
                                  "id": 44047,
                                  "name": "to",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43990,
                                  "src": "7031:2:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "7021:13:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "+=",
                              "rightHandSide": {
                                "id": 44049,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 43992,
                                "src": "7038:5:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7021:22:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 44051,
                            "nodeType": "ExpressionStatement",
                            "src": "7021:22:39"
                          }
                        ]
                      }
                    ]
                  },
                  "id": 44054,
                  "nodeType": "IfStatement",
                  "src": "6643:425:39",
                  "trueBody": {
                    "id": 44045,
                    "nodeType": "Block",
                    "src": "6665:191:39",
                    "statements": [
                      {
                        "id": 44044,
                        "nodeType": "UncheckedBlock",
                        "src": "6679:167:39",
                        "statements": [
                          {
                            "expression": {
                              "id": 44042,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 44040,
                                "name": "_totalSupply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 43771,
                                "src": "6810:12:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "-=",
                              "rightHandSide": {
                                "id": 44041,
                                "name": "value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 43992,
                                "src": "6826:5:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "6810:21:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 44043,
                            "nodeType": "ExpressionStatement",
                            "src": "6810:21:39"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 44056,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43988,
                        "src": "7092:4:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 44057,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43990,
                        "src": "7098:2:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 44058,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43992,
                        "src": "7102:5:39",
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
                      "id": 44055,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44267,
                      "src": "7083:8:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 44059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7083:25:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 44060,
                  "nodeType": "EmitStatement",
                  "src": "7078:30:39"
                }
              ]
            },
            "documentation": {
              "id": 43986,
              "nodeType": "StructuredDocumentation",
              "src": "5699:304:39",
              "text": " @dev Transfers a `value` amount of tokens from `from` to `to`, or alternatively mints (or burns) if `from`\n (or `to`) is the zero address. All customizations to transfers, mints, and burns should be done by overriding\n this function.\n Emits a {Transfer} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_update",
            "nameLocation": "6017:7:39",
            "parameters": {
              "id": 43993,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43988,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "6033:4:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44062,
                  "src": "6025:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43987,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6025:7:39",
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
                  "id": 43990,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "6047:2:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44062,
                  "src": "6039:10:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43989,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6039:7:39",
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
                  "id": 43992,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "6059:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44062,
                  "src": "6051:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 43991,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6051:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6024:41:39"
            },
            "returnParameters": {
              "id": 43994,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6083:0:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 44095,
            "nodeType": "FunctionDefinition",
            "src": "7458:208:39",
            "nodes": [],
            "body": {
              "id": 44094,
              "nodeType": "Block",
              "src": "7514:152:39",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 44075,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44070,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44065,
                      "src": "7528:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 44073,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7547:1:39",
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
                        "id": 44072,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7539:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 44071,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "7539:7:39",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44074,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7539:10:39",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7528:21:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44084,
                  "nodeType": "IfStatement",
                  "src": "7524:91:39",
                  "trueBody": {
                    "id": 44083,
                    "nodeType": "Block",
                    "src": "7551:64:39",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 44079,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7601:1:39",
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
                                "id": 44078,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7593:7:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 44077,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "7593:7:39",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 44080,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7593:10:39",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 44076,
                            "name": "ERC20InvalidReceiver",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43290,
                            "src": "7572:20:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 44081,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7572:32:39",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44082,
                        "nodeType": "RevertStatement",
                        "src": "7565:39:39"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 44088,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7640:1:39",
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
                          "id": 44087,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "7632:7:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 44086,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "7632:7:39",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 44089,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7632:10:39",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 44090,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44065,
                        "src": "7644:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 44091,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44067,
                        "src": "7653:5:39",
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
                      "id": 44085,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44062,
                      "src": "7624:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 44092,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7624:35:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 44093,
                  "nodeType": "ExpressionStatement",
                  "src": "7624:35:39"
                }
              ]
            },
            "documentation": {
              "id": 44063,
              "nodeType": "StructuredDocumentation",
              "src": "7121:332:39",
              "text": " @dev Creates a `value` amount of tokens and assigns them to `account`, by transferring it from address(0).\n Relies on the `_update` mechanism\n Emits a {Transfer} event with `from` set to the zero address.\n NOTE: This function is not virtual, {_update} should be overridden instead."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mint",
            "nameLocation": "7467:5:39",
            "parameters": {
              "id": 44068,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44065,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "7481:7:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44095,
                  "src": "7473:15:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44064,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7473:7:39",
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
                  "id": 44067,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "7498:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44095,
                  "src": "7490:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44066,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7490:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7472:32:39"
            },
            "returnParameters": {
              "id": 44069,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7514:0:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44128,
            "nodeType": "FunctionDefinition",
            "src": "7984:206:39",
            "nodes": [],
            "body": {
              "id": 44127,
              "nodeType": "Block",
              "src": "8040:150:39",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 44108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44103,
                      "name": "account",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44098,
                      "src": "8054:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 44106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "8073:1:39",
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
                        "id": 44105,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8065:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 44104,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "8065:7:39",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8065:10:39",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "8054:21:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44117,
                  "nodeType": "IfStatement",
                  "src": "8050:89:39",
                  "trueBody": {
                    "id": 44116,
                    "nodeType": "Block",
                    "src": "8077:62:39",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 44112,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "8125:1:39",
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
                                "id": 44111,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "8117:7:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 44110,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "8117:7:39",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 44113,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8117:10:39",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 44109,
                            "name": "ERC20InvalidSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43285,
                            "src": "8098:18:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 44114,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8098:30:39",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44115,
                        "nodeType": "RevertStatement",
                        "src": "8091:37:39"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44119,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44098,
                        "src": "8156:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 44122,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8173:1:39",
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
                          "id": 44121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "8165:7:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 44120,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "8165:7:39",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 44123,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "8165:10:39",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 44124,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44100,
                        "src": "8177:5:39",
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
                      "id": 44118,
                      "name": "_update",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44062,
                      "src": "8148:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 44125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8148:35:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 44126,
                  "nodeType": "ExpressionStatement",
                  "src": "8148:35:39"
                }
              ]
            },
            "documentation": {
              "id": 44096,
              "nodeType": "StructuredDocumentation",
              "src": "7672:307:39",
              "text": " @dev Destroys a `value` amount of tokens from `account`, lowering the total supply.\n Relies on the `_update` mechanism.\n Emits a {Transfer} event with `to` set to the zero address.\n NOTE: This function is not virtual, {_update} should be overridden instead"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "7993:5:39",
            "parameters": {
              "id": 44101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44098,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "8007:7:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44128,
                  "src": "7999:15:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44097,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7999:7:39",
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
                  "id": 44100,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8024:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44128,
                  "src": "8016:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44099,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8016:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7998:32:39"
            },
            "returnParameters": {
              "id": 44102,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8040:0:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44146,
            "nodeType": "FunctionDefinition",
            "src": "8726:128:39",
            "nodes": [],
            "body": {
              "id": 44145,
              "nodeType": "Block",
              "src": "8800:54:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 44139,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44131,
                        "src": "8819:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 44140,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44133,
                        "src": "8826:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 44141,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44135,
                        "src": "8835:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 44142,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8842:4:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
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
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 44138,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        44146,
                        44206
                      ],
                      "referencedDeclaration": 44206,
                      "src": "8810:8:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bool_$returns$__$",
                        "typeString": "function (address,address,uint256,bool)"
                      }
                    },
                    "id": 44143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8810:37:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 44144,
                  "nodeType": "ExpressionStatement",
                  "src": "8810:37:39"
                }
              ]
            },
            "documentation": {
              "id": 44129,
              "nodeType": "StructuredDocumentation",
              "src": "8196:525:39",
              "text": " @dev Sets `value` as the allowance of `spender` over the `owner` s tokens.\n This internal function is equivalent to `approve`, and can be used to\n e.g. set automatic allowances for certain subsystems, etc.\n Emits an {Approval} event.\n Requirements:\n - `owner` cannot be the zero address.\n - `spender` cannot be the zero address.\n Overrides to this logic should be done to the variant with an additional `bool emitEvent` argument."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "8735:8:39",
            "parameters": {
              "id": 44136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44131,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "8752:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44146,
                  "src": "8744:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44130,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8744:7:39",
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
                  "id": 44133,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "8767:7:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44146,
                  "src": "8759:15:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44132,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8759:7:39",
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
                  "id": 44135,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "8784:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44146,
                  "src": "8776:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44134,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8776:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8743:47:39"
            },
            "returnParameters": {
              "id": 44137,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8800:0:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 44206,
            "nodeType": "FunctionDefinition",
            "src": "9701:432:39",
            "nodes": [],
            "body": {
              "id": 44205,
              "nodeType": "Block",
              "src": "9799:334:39",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 44163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44158,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44149,
                      "src": "9813:5:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 44161,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9830:1:39",
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
                        "id": 44160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9822:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 44159,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9822:7:39",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9822:10:39",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9813:19:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44172,
                  "nodeType": "IfStatement",
                  "src": "9809:89:39",
                  "trueBody": {
                    "id": 44171,
                    "nodeType": "Block",
                    "src": "9834:64:39",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 44167,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "9884:1:39",
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
                                "id": 44166,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9876:7:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 44165,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9876:7:39",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 44168,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9876:10:39",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 44164,
                            "name": "ERC20InvalidApprover",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43304,
                            "src": "9855:20:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 44169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9855:32:39",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44170,
                        "nodeType": "RevertStatement",
                        "src": "9848:39:39"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 44178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44173,
                      "name": "spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44151,
                      "src": "9911:7:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 44176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9930:1:39",
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
                        "id": 44175,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9922:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 44174,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "9922:7:39",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 44177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9922:10:39",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9911:21:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44187,
                  "nodeType": "IfStatement",
                  "src": "9907:90:39",
                  "trueBody": {
                    "id": 44186,
                    "nodeType": "Block",
                    "src": "9934:63:39",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "hexValue": "30",
                                  "id": 44182,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "9983:1:39",
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
                                "id": 44181,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "9975:7:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 44180,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "9975:7:39",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 44183,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9975:10:39",
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
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 44179,
                            "name": "ERC20InvalidSpender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 43309,
                            "src": "9955:19:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$_t_address_$returns$_t_error_$",
                              "typeString": "function (address) pure returns (error)"
                            }
                          },
                          "id": 44184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9955:31:39",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_error",
                            "typeString": "error"
                          }
                        },
                        "id": 44185,
                        "nodeType": "RevertStatement",
                        "src": "9948:38:39"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 44194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 44188,
                          "name": "_allowances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 43769,
                          "src": "10006:11:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 44191,
                        "indexExpression": {
                          "id": 44189,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 44149,
                          "src": "10018:5:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "10006:18:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 44192,
                      "indexExpression": {
                        "id": 44190,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44151,
                        "src": "10025:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "10006:27:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 44193,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44153,
                      "src": "10036:5:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10006:35:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 44195,
                  "nodeType": "ExpressionStatement",
                  "src": "10006:35:39"
                },
                {
                  "condition": {
                    "id": 44196,
                    "name": "emitEvent",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 44155,
                    "src": "10055:9:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44204,
                  "nodeType": "IfStatement",
                  "src": "10051:76:39",
                  "trueBody": {
                    "id": 44203,
                    "nodeType": "Block",
                    "src": "10066:61:39",
                    "statements": [
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "id": 44198,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44149,
                              "src": "10094:5:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 44199,
                              "name": "spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44151,
                              "src": "10101:7:39",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 44200,
                              "name": "value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 44153,
                              "src": "10110:5:39",
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
                            "id": 44197,
                            "name": "Approval",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44276,
                            "src": "10085:8:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 44201,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10085:31:39",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 44202,
                        "nodeType": "EmitStatement",
                        "src": "10080:36:39"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44147,
              "nodeType": "StructuredDocumentation",
              "src": "8860:836:39",
              "text": " @dev Variant of {_approve} with an optional flag to enable or disable the {Approval} event.\n By default (when calling {_approve}) the flag is set to true. On the other hand, approval changes made by\n `_spendAllowance` during the `transferFrom` operation set the flag to false. This saves gas by not emitting any\n `Approval` event during `transferFrom` operations.\n Anyone who wishes to continue emitting `Approval` events on the`transferFrom` operation can force the flag to\n true using the following override:\n ```solidity\n function _approve(address owner, address spender, uint256 value, bool) internal virtual override {\n     super._approve(owner, spender, value, true);\n }\n ```\n Requirements are the same as {_approve}."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_approve",
            "nameLocation": "9710:8:39",
            "parameters": {
              "id": 44156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44149,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "9727:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44206,
                  "src": "9719:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44148,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9719:7:39",
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
                  "id": 44151,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "9742:7:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44206,
                  "src": "9734:15:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44150,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9734:7:39",
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
                  "id": 44153,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "9759:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44206,
                  "src": "9751:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44152,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9751:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44155,
                  "mutability": "mutable",
                  "name": "emitEvent",
                  "nameLocation": "9771:9:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44206,
                  "src": "9766:14:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 44154,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9766:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9718:63:39"
            },
            "returnParameters": {
              "id": 44157,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9799:0:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 44254,
            "nodeType": "FunctionDefinition",
            "src": "10415:477:39",
            "nodes": [],
            "body": {
              "id": 44253,
              "nodeType": "Block",
              "src": "10504:388:39",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    44217
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 44217,
                      "mutability": "mutable",
                      "name": "currentAllowance",
                      "nameLocation": "10522:16:39",
                      "nodeType": "VariableDeclaration",
                      "scope": 44253,
                      "src": "10514:24:39",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 44216,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10514:7:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 44222,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 44219,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44209,
                        "src": "10551:5:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 44220,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44211,
                        "src": "10558:7:39",
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 44218,
                      "name": "allowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 43882,
                      "src": "10541:9:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view returns (uint256)"
                      }
                    },
                    "id": 44221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10541:25:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10514:52:39"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 44229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 44223,
                      "name": "currentAllowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44217,
                      "src": "10580:16:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 44226,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10605:7:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 44225,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10605:7:39",
                              "typeDescriptions": {}
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            }
                          ],
                          "id": 44224,
                          "name": "type",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -27,
                          "src": "10600:4:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                            "typeString": "function () pure"
                          }
                        },
                        "id": 44227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10600:13:39",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_meta_type_t_uint256",
                          "typeString": "type(uint256)"
                        }
                      },
                      "id": 44228,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "10614:3:39",
                      "memberName": "max",
                      "nodeType": "MemberAccess",
                      "src": "10600:17:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "10580:37:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 44252,
                  "nodeType": "IfStatement",
                  "src": "10576:310:39",
                  "trueBody": {
                    "id": 44251,
                    "nodeType": "Block",
                    "src": "10619:267:39",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 44232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 44230,
                            "name": "currentAllowance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44217,
                            "src": "10637:16:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "id": 44231,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 44213,
                            "src": "10656:5:39",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10637:24:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 44240,
                        "nodeType": "IfStatement",
                        "src": "10633:130:39",
                        "trueBody": {
                          "id": 44239,
                          "nodeType": "Block",
                          "src": "10663:100:39",
                          "statements": [
                            {
                              "errorCall": {
                                "arguments": [
                                  {
                                    "id": 44234,
                                    "name": "spender",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 44211,
                                    "src": "10715:7:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "id": 44235,
                                    "name": "currentAllowance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 44217,
                                    "src": "10724:16:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  {
                                    "id": 44236,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 44213,
                                    "src": "10742:5:39",
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
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 44233,
                                  "name": "ERC20InsufficientAllowance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 43299,
                                  "src": "10688:26:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$_t_error_$",
                                    "typeString": "function (address,uint256,uint256) pure returns (error)"
                                  }
                                },
                                "id": 44237,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10688:60:39",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_error",
                                  "typeString": "error"
                                }
                              },
                              "id": 44238,
                              "nodeType": "RevertStatement",
                              "src": "10681:67:39"
                            }
                          ]
                        }
                      },
                      {
                        "id": 44250,
                        "nodeType": "UncheckedBlock",
                        "src": "10776:100:39",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "id": 44242,
                                  "name": "owner",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 44209,
                                  "src": "10813:5:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 44243,
                                  "name": "spender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 44211,
                                  "src": "10820:7:39",
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
                                  "id": 44246,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 44244,
                                    "name": "currentAllowance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 44217,
                                    "src": "10829:16:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "-",
                                  "rightExpression": {
                                    "id": 44245,
                                    "name": "value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 44213,
                                    "src": "10848:5:39",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "10829:24:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "hexValue": "66616c7365",
                                  "id": 44247,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "bool",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "10855:5:39",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "value": "false"
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
                                  },
                                  {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                ],
                                "id": 44241,
                                "name": "_approve",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  44146,
                                  44206
                                ],
                                "referencedDeclaration": 44206,
                                "src": "10804:8:39",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bool_$returns$__$",
                                  "typeString": "function (address,address,uint256,bool)"
                                }
                              },
                              "id": 44248,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "10804:57:39",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 44249,
                            "nodeType": "ExpressionStatement",
                            "src": "10804:57:39"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 44207,
              "nodeType": "StructuredDocumentation",
              "src": "10139:271:39",
              "text": " @dev Updates `owner` s allowance for `spender` based on spent `value`.\n Does not update the allowance value in case of infinite allowance.\n Revert if not enough allowance is available.\n Does not emit an {Approval} event."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_spendAllowance",
            "nameLocation": "10424:15:39",
            "parameters": {
              "id": 44214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44209,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "10448:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44254,
                  "src": "10440:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44208,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10440:7:39",
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
                  "id": 44211,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "10463:7:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44254,
                  "src": "10455:15:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10455:7:39",
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
                  "id": 44213,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "10480:5:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 44254,
                  "src": "10472:13:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44212,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10472:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10439:47:39"
            },
            "returnParameters": {
              "id": 44215,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10504:0:39"
            },
            "scope": 44255,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 43752,
              "name": "Context",
              "nameLocations": [
                "1133:7:39"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 45539,
              "src": "1133:7:39"
            },
            "id": 43753,
            "nodeType": "InheritanceSpecifier",
            "src": "1133:7:39"
          },
          {
            "baseName": {
              "id": 43754,
              "name": "IERC20",
              "nameLocations": [
                "1142:6:39"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 44333,
              "src": "1142:6:39"
            },
            "id": 43755,
            "nodeType": "InheritanceSpecifier",
            "src": "1142:6:39"
          },
          {
            "baseName": {
              "id": 43756,
              "name": "IERC20Metadata",
              "nameLocations": [
                "1150:14:39"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 44359,
              "src": "1150:14:39"
            },
            "id": 43757,
            "nodeType": "InheritanceSpecifier",
            "src": "1150:14:39"
          },
          {
            "baseName": {
              "id": 43758,
              "name": "IERC20Errors",
              "nameLocations": [
                "1166:12:39"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 43310,
              "src": "1166:12:39"
            },
            "id": 43759,
            "nodeType": "InheritanceSpecifier",
            "src": "1166:12:39"
          }
        ],
        "canonicalName": "ERC20",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 43751,
          "nodeType": "StructuredDocumentation",
          "src": "348:757:39",
          "text": " @dev Implementation of the {IERC20} interface.\n This implementation is agnostic to the way tokens are created. This means\n that a supply mechanism has to be added in a derived contract using {_mint}.\n TIP: For a detailed writeup see our guide\n https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How\n to implement supply mechanisms].\n The default value of {decimals} is 18. To change this, you should override\n this function so it returns a different value.\n We have followed general OpenZeppelin Contracts guidelines: functions revert\n instead returning `false` on failure. This behavior is nonetheless\n conventional and does not conflict with the expectations of ERC-20\n applications."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          44255,
          43310,
          44359,
          44333,
          45539
        ],
        "name": "ERC20",
        "nameLocation": "1124:5:39",
        "scope": 44256,
        "usedErrors": [
          43280,
          43285,
          43290,
          43299,
          43304,
          43309
        ],
        "usedEvents": [
          44267,
          44276
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 39
} as const;