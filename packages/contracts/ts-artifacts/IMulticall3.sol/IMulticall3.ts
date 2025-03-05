export const IMulticall3 = {
  "abi": [
    {
      "type": "function",
      "name": "aggregate",
      "inputs": [
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Call[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "returnData",
          "type": "bytes[]",
          "internalType": "bytes[]"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "aggregate3",
      "inputs": [
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Call3[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "allowFailure",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "returnData",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Result[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "returnData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "aggregate3Value",
      "inputs": [
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Call3Value[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "allowFailure",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "value",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "returnData",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Result[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "returnData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "blockAndAggregate",
      "inputs": [
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Call[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "blockHash",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "returnData",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Result[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "returnData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "getBasefee",
      "inputs": [],
      "outputs": [
        {
          "name": "basefee",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBlockHash",
      "inputs": [
        {
          "name": "blockNumber",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "blockHash",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBlockNumber",
      "inputs": [],
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getChainId",
      "inputs": [],
      "outputs": [
        {
          "name": "chainid",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getCurrentBlockCoinbase",
      "inputs": [],
      "outputs": [
        {
          "name": "coinbase",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getCurrentBlockDifficulty",
      "inputs": [],
      "outputs": [
        {
          "name": "difficulty",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getCurrentBlockGasLimit",
      "inputs": [],
      "outputs": [
        {
          "name": "gaslimit",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getCurrentBlockTimestamp",
      "inputs": [],
      "outputs": [
        {
          "name": "timestamp",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getEthBalance",
      "inputs": [
        {
          "name": "addr",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "balance",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getLastBlockHash",
      "inputs": [],
      "outputs": [
        {
          "name": "blockHash",
          "type": "bytes32",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tryAggregate",
      "inputs": [
        {
          "name": "requireSuccess",
          "type": "bool",
          "internalType": "bool"
        },
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Call[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "returnData",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Result[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "returnData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "tryBlockAndAggregate",
      "inputs": [
        {
          "name": "requireSuccess",
          "type": "bool",
          "internalType": "bool"
        },
        {
          "name": "calls",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Call[]",
          "components": [
            {
              "name": "target",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "callData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "blockNumber",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "blockHash",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "returnData",
          "type": "tuple[]",
          "internalType": "struct IMulticall3.Result[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "returnData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "payable"
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
    "aggregate((address,bytes)[])": "252dba42",
    "aggregate3((address,bool,bytes)[])": "82ad56cb",
    "aggregate3Value((address,bool,uint256,bytes)[])": "174dea71",
    "blockAndAggregate((address,bytes)[])": "c3077fa9",
    "getBasefee()": "3e64a696",
    "getBlockHash(uint256)": "ee82ac5e",
    "getBlockNumber()": "42cbb15c",
    "getChainId()": "3408e470",
    "getCurrentBlockCoinbase()": "a8b0574e",
    "getCurrentBlockDifficulty()": "72425d9d",
    "getCurrentBlockGasLimit()": "86d516e8",
    "getCurrentBlockTimestamp()": "0f28c97d",
    "getEthBalance(address)": "4d2301cc",
    "getLastBlockHash()": "27e86d6e",
    "tryAggregate(bool,(address,bytes)[])": "bce38bd7",
    "tryBlockAndAggregate(bool,(address,bytes)[])": "399542e9"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes[]\",\"name\":\"returnData\",\"type\":\"bytes[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"allowFailure\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call3Value[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"aggregate3Value\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"blockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBasefee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"basefee\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBlockNumber\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getChainId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"chainid\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockCoinbase\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"coinbase\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockDifficulty\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"difficulty\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockGasLimit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"gaslimit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCurrentBlockTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getEthBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastBlockHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryAggregate\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"requireSuccess\",\"type\":\"bool\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"callData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Call[]\",\"name\":\"calls\",\"type\":\"tuple[]\"}],\"name\":\"tryBlockAndAggregate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"blockHash\",\"type\":\"bytes32\"},{\"components\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"internalType\":\"struct IMulticall3.Result[]\",\"name\":\"returnData\",\"type\":\"tuple[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":\"IMulticall3\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}",
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
              "internalType": "struct IMulticall3.Call[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "aggregate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            },
            {
              "internalType": "bytes[]",
              "name": "returnData",
              "type": "bytes[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct IMulticall3.Call3[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "allowFailure",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "aggregate3",
          "outputs": [
            {
              "internalType": "struct IMulticall3.Result[]",
              "name": "returnData",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct IMulticall3.Call3Value[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "allowFailure",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "aggregate3Value",
          "outputs": [
            {
              "internalType": "struct IMulticall3.Result[]",
              "name": "returnData",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "struct IMulticall3.Call[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "blockAndAggregate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "blockHash",
              "type": "bytes32"
            },
            {
              "internalType": "struct IMulticall3.Result[]",
              "name": "returnData",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getBasefee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "basefee",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getBlockHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "blockHash",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getBlockNumber",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getChainId",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "chainid",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getCurrentBlockCoinbase",
          "outputs": [
            {
              "internalType": "address",
              "name": "coinbase",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getCurrentBlockDifficulty",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "difficulty",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getCurrentBlockGasLimit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "gaslimit",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getCurrentBlockTimestamp",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getEthBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getLastBlockHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "blockHash",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "requireSuccess",
              "type": "bool"
            },
            {
              "internalType": "struct IMulticall3.Call[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "tryAggregate",
          "outputs": [
            {
              "internalType": "struct IMulticall3.Result[]",
              "name": "returnData",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "requireSuccess",
              "type": "bool"
            },
            {
              "internalType": "struct IMulticall3.Call[]",
              "name": "calls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "target",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "tryBlockAndAggregate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "blockHash",
              "type": "bytes32"
            },
            {
              "internalType": "struct IMulticall3.Result[]",
              "name": "returnData",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "returnData",
                  "type": "bytes"
                }
              ]
            }
          ]
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
        "lib/forge-std/src/interfaces/IMulticall3.sol": "IMulticall3"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/interfaces/IMulticall3.sol": {
        "keccak256": "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
        "urls": [
          "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
          "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/interfaces/IMulticall3.sol",
    "id": 22035,
    "exportedSymbols": {
      "IMulticall3": [
        22034
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2153:15",
    "nodes": [
      {
        "id": 21873,
        "nodeType": "PragmaDirective",
        "src": "32:31:15",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".2",
          "<",
          "0.9",
          ".0"
        ]
      },
      {
        "id": 21874,
        "nodeType": "PragmaDirective",
        "src": "65:33:15",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 22034,
        "nodeType": "ContractDefinition",
        "src": "100:2084:15",
        "nodes": [
          {
            "id": 21879,
            "nodeType": "StructDefinition",
            "src": "128:67:15",
            "nodes": [],
            "canonicalName": "IMulticall3.Call",
            "members": [
              {
                "constant": false,
                "id": 21876,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "158:6:15",
                "nodeType": "VariableDeclaration",
                "scope": 21879,
                "src": "150:14:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 21875,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "150:7:15",
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
                "id": 21878,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "180:8:15",
                "nodeType": "VariableDeclaration",
                "scope": 21879,
                "src": "174:14:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 21877,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "174:5:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call",
            "nameLocation": "135:4:15",
            "scope": 22034,
            "visibility": "public"
          },
          {
            "id": 21886,
            "nodeType": "StructDefinition",
            "src": "201:95:15",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3",
            "members": [
              {
                "constant": false,
                "id": 21881,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "232:6:15",
                "nodeType": "VariableDeclaration",
                "scope": 21886,
                "src": "224:14:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 21880,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "224:7:15",
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
                "id": 21883,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "253:12:15",
                "nodeType": "VariableDeclaration",
                "scope": 21886,
                "src": "248:17:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 21882,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "248:4:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 21885,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "281:8:15",
                "nodeType": "VariableDeclaration",
                "scope": 21886,
                "src": "275:14:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 21884,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "275:5:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3",
            "nameLocation": "208:5:15",
            "scope": 22034,
            "visibility": "public"
          },
          {
            "id": 21895,
            "nodeType": "StructDefinition",
            "src": "302:123:15",
            "nodes": [],
            "canonicalName": "IMulticall3.Call3Value",
            "members": [
              {
                "constant": false,
                "id": 21888,
                "mutability": "mutable",
                "name": "target",
                "nameLocation": "338:6:15",
                "nodeType": "VariableDeclaration",
                "scope": 21895,
                "src": "330:14:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 21887,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "330:7:15",
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
                "id": 21890,
                "mutability": "mutable",
                "name": "allowFailure",
                "nameLocation": "359:12:15",
                "nodeType": "VariableDeclaration",
                "scope": 21895,
                "src": "354:17:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 21889,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "354:4:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 21892,
                "mutability": "mutable",
                "name": "value",
                "nameLocation": "389:5:15",
                "nodeType": "VariableDeclaration",
                "scope": 21895,
                "src": "381:13:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 21891,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "381:7:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 21894,
                "mutability": "mutable",
                "name": "callData",
                "nameLocation": "410:8:15",
                "nodeType": "VariableDeclaration",
                "scope": 21895,
                "src": "404:14:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 21893,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "404:5:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Call3Value",
            "nameLocation": "309:10:15",
            "scope": 22034,
            "visibility": "public"
          },
          {
            "id": 21900,
            "nodeType": "StructDefinition",
            "src": "431:69:15",
            "nodes": [],
            "canonicalName": "IMulticall3.Result",
            "members": [
              {
                "constant": false,
                "id": 21897,
                "mutability": "mutable",
                "name": "success",
                "nameLocation": "460:7:15",
                "nodeType": "VariableDeclaration",
                "scope": 21900,
                "src": "455:12:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 21896,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "455:4:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 21899,
                "mutability": "mutable",
                "name": "returnData",
                "nameLocation": "483:10:15",
                "nodeType": "VariableDeclaration",
                "scope": 21900,
                "src": "477:16:15",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 21898,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "477:5:15",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Result",
            "nameLocation": "438:6:15",
            "scope": 22034,
            "visibility": "public"
          },
          {
            "id": 21912,
            "nodeType": "FunctionDefinition",
            "src": "506:140:15",
            "nodes": [],
            "functionSelector": "252dba42",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate",
            "nameLocation": "515:9:15",
            "parameters": {
              "id": 21905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21904,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "541:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21912,
                  "src": "525:21:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$21879_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21902,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 21901,
                        "name": "Call",
                        "nameLocations": [
                          "525:4:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21879,
                        "src": "525:4:15"
                      },
                      "referencedDeclaration": 21879,
                      "src": "525:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$21879_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 21903,
                    "nodeType": "ArrayTypeName",
                    "src": "525:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$21879_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "524:23:15"
            },
            "returnParameters": {
              "id": 21911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21907,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "606:11:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21912,
                  "src": "598:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21906,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21910,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "634:10:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21912,
                  "src": "619:25:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21908,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "619:5:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 21909,
                    "nodeType": "ArrayTypeName",
                    "src": "619:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "597:48:15"
            },
            "scope": 22034,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21923,
            "nodeType": "FunctionDefinition",
            "src": "652:98:15",
            "nodes": [],
            "functionSelector": "82ad56cb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3",
            "nameLocation": "661:10:15",
            "parameters": {
              "id": 21917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21916,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "689:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21923,
                  "src": "672:22:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3_$21886_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21914,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 21913,
                        "name": "Call3",
                        "nameLocations": [
                          "672:5:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21886,
                        "src": "672:5:15"
                      },
                      "referencedDeclaration": 21886,
                      "src": "672:5:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3_$21886_storage_ptr",
                        "typeString": "struct IMulticall3.Call3"
                      }
                    },
                    "id": 21915,
                    "nodeType": "ArrayTypeName",
                    "src": "672:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3_$21886_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "671:24:15"
            },
            "returnParameters": {
              "id": 21922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21921,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "738:10:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21923,
                  "src": "722:26:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$21900_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21919,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 21918,
                        "name": "Result",
                        "nameLocations": [
                          "722:6:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21900,
                        "src": "722:6:15"
                      },
                      "referencedDeclaration": 21900,
                      "src": "722:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$21900_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 21920,
                    "nodeType": "ArrayTypeName",
                    "src": "722:8:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$21900_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "721:28:15"
            },
            "scope": 22034,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21934,
            "nodeType": "FunctionDefinition",
            "src": "756:108:15",
            "nodes": [],
            "functionSelector": "174dea71",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "aggregate3Value",
            "nameLocation": "765:15:15",
            "parameters": {
              "id": 21928,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21927,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "803:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21934,
                  "src": "781:27:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call3Value_$21895_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call3Value[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21925,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 21924,
                        "name": "Call3Value",
                        "nameLocations": [
                          "781:10:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21895,
                        "src": "781:10:15"
                      },
                      "referencedDeclaration": 21895,
                      "src": "781:10:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call3Value_$21895_storage_ptr",
                        "typeString": "struct IMulticall3.Call3Value"
                      }
                    },
                    "id": 21926,
                    "nodeType": "ArrayTypeName",
                    "src": "781:12:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call3Value_$21895_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call3Value[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "780:29:15"
            },
            "returnParameters": {
              "id": 21933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21932,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "852:10:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21934,
                  "src": "836:26:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$21900_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21930,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 21929,
                        "name": "Result",
                        "nameLocations": [
                          "836:6:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21900,
                        "src": "836:6:15"
                      },
                      "referencedDeclaration": 21900,
                      "src": "836:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$21900_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 21931,
                    "nodeType": "ArrayTypeName",
                    "src": "836:8:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$21900_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "835:28:15"
            },
            "scope": 22034,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21949,
            "nodeType": "FunctionDefinition",
            "src": "870:168:15",
            "nodes": [],
            "functionSelector": "c3077fa9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "blockAndAggregate",
            "nameLocation": "879:17:15",
            "parameters": {
              "id": 21939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21938,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "913:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21949,
                  "src": "897:21:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$21879_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21936,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 21935,
                        "name": "Call",
                        "nameLocations": [
                          "897:4:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21879,
                        "src": "897:4:15"
                      },
                      "referencedDeclaration": 21879,
                      "src": "897:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$21879_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 21937,
                    "nodeType": "ArrayTypeName",
                    "src": "897:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$21879_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "896:23:15"
            },
            "returnParameters": {
              "id": 21948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21941,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "978:11:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21949,
                  "src": "970:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21940,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "970:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21943,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "999:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21949,
                  "src": "991:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 21942,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "991:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21947,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1026:10:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21949,
                  "src": "1010:26:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$21900_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 21945,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 21944,
                        "name": "Result",
                        "nameLocations": [
                          "1010:6:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21900,
                        "src": "1010:6:15"
                      },
                      "referencedDeclaration": 21900,
                      "src": "1010:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$21900_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 21946,
                    "nodeType": "ArrayTypeName",
                    "src": "1010:8:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$21900_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "969:68:15"
            },
            "scope": 22034,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21954,
            "nodeType": "FunctionDefinition",
            "src": "1044:62:15",
            "nodes": [],
            "functionSelector": "3e64a696",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBasefee",
            "nameLocation": "1053:10:15",
            "parameters": {
              "id": 21950,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1063:2:15"
            },
            "returnParameters": {
              "id": 21953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21952,
                  "mutability": "mutable",
                  "name": "basefee",
                  "nameLocation": "1097:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21954,
                  "src": "1089:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21951,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1089:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1088:17:15"
            },
            "scope": 22034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21961,
            "nodeType": "FunctionDefinition",
            "src": "1112:85:15",
            "nodes": [],
            "functionSelector": "ee82ac5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockHash",
            "nameLocation": "1121:12:15",
            "parameters": {
              "id": 21957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21956,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1142:11:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21961,
                  "src": "1134:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21955,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1134:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1133:21:15"
            },
            "returnParameters": {
              "id": 21960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21959,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1186:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21961,
                  "src": "1178:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 21958,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1177:19:15"
            },
            "scope": 22034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21966,
            "nodeType": "FunctionDefinition",
            "src": "1203:70:15",
            "nodes": [],
            "functionSelector": "42cbb15c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getBlockNumber",
            "nameLocation": "1212:14:15",
            "parameters": {
              "id": 21962,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1226:2:15"
            },
            "returnParameters": {
              "id": 21965,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21964,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "1260:11:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21966,
                  "src": "1252:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21963,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1252:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1251:21:15"
            },
            "scope": 22034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21971,
            "nodeType": "FunctionDefinition",
            "src": "1279:62:15",
            "nodes": [],
            "functionSelector": "3408e470",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getChainId",
            "nameLocation": "1288:10:15",
            "parameters": {
              "id": 21967,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1298:2:15"
            },
            "returnParameters": {
              "id": 21970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21969,
                  "mutability": "mutable",
                  "name": "chainid",
                  "nameLocation": "1332:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21971,
                  "src": "1324:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21968,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1323:17:15"
            },
            "scope": 22034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21976,
            "nodeType": "FunctionDefinition",
            "src": "1347:76:15",
            "nodes": [],
            "functionSelector": "a8b0574e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockCoinbase",
            "nameLocation": "1356:23:15",
            "parameters": {
              "id": 21972,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1379:2:15"
            },
            "returnParameters": {
              "id": 21975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21974,
                  "mutability": "mutable",
                  "name": "coinbase",
                  "nameLocation": "1413:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21976,
                  "src": "1405:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21973,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1404:18:15"
            },
            "scope": 22034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21981,
            "nodeType": "FunctionDefinition",
            "src": "1429:80:15",
            "nodes": [],
            "functionSelector": "72425d9d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockDifficulty",
            "nameLocation": "1438:25:15",
            "parameters": {
              "id": 21977,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1463:2:15"
            },
            "returnParameters": {
              "id": 21980,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21979,
                  "mutability": "mutable",
                  "name": "difficulty",
                  "nameLocation": "1497:10:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21981,
                  "src": "1489:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21978,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1489:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1488:20:15"
            },
            "scope": 22034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21986,
            "nodeType": "FunctionDefinition",
            "src": "1515:76:15",
            "nodes": [],
            "functionSelector": "86d516e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockGasLimit",
            "nameLocation": "1524:23:15",
            "parameters": {
              "id": 21982,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1547:2:15"
            },
            "returnParameters": {
              "id": 21985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21984,
                  "mutability": "mutable",
                  "name": "gaslimit",
                  "nameLocation": "1581:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21986,
                  "src": "1573:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21983,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1573:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1572:18:15"
            },
            "scope": 22034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21991,
            "nodeType": "FunctionDefinition",
            "src": "1597:78:15",
            "nodes": [],
            "functionSelector": "0f28c97d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCurrentBlockTimestamp",
            "nameLocation": "1606:24:15",
            "parameters": {
              "id": 21987,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1630:2:15"
            },
            "returnParameters": {
              "id": 21990,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21989,
                  "mutability": "mutable",
                  "name": "timestamp",
                  "nameLocation": "1664:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21991,
                  "src": "1656:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21988,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1656:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1655:19:15"
            },
            "scope": 22034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 21998,
            "nodeType": "FunctionDefinition",
            "src": "1681:77:15",
            "nodes": [],
            "functionSelector": "4d2301cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getEthBalance",
            "nameLocation": "1690:13:15",
            "parameters": {
              "id": 21994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21993,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "1712:4:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21998,
                  "src": "1704:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21992,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1704:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1703:14:15"
            },
            "returnParameters": {
              "id": 21997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21996,
                  "mutability": "mutable",
                  "name": "balance",
                  "nameLocation": "1749:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 21998,
                  "src": "1741:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21995,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1741:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1740:17:15"
            },
            "scope": 22034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 22003,
            "nodeType": "FunctionDefinition",
            "src": "1764:70:15",
            "nodes": [],
            "functionSelector": "27e86d6e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLastBlockHash",
            "nameLocation": "1773:16:15",
            "parameters": {
              "id": 21999,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1789:2:15"
            },
            "returnParameters": {
              "id": 22002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22001,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "1823:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 22003,
                  "src": "1815:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 22000,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1815:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1814:19:15"
            },
            "scope": 22034,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 22016,
            "nodeType": "FunctionDefinition",
            "src": "1840:144:15",
            "nodes": [],
            "functionSelector": "bce38bd7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryAggregate",
            "nameLocation": "1849:12:15",
            "parameters": {
              "id": 22010,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22005,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "1867:14:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 22016,
                  "src": "1862:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 22004,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1862:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22009,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "1899:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 22016,
                  "src": "1883:21:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$21879_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22007,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 22006,
                        "name": "Call",
                        "nameLocations": [
                          "1883:4:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21879,
                        "src": "1883:4:15"
                      },
                      "referencedDeclaration": 21879,
                      "src": "1883:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$21879_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 22008,
                    "nodeType": "ArrayTypeName",
                    "src": "1883:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$21879_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1861:44:15"
            },
            "returnParameters": {
              "id": 22015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22014,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "1972:10:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 22016,
                  "src": "1956:26:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$21900_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22012,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 22011,
                        "name": "Result",
                        "nameLocations": [
                          "1956:6:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21900,
                        "src": "1956:6:15"
                      },
                      "referencedDeclaration": 21900,
                      "src": "1956:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$21900_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 22013,
                    "nodeType": "ArrayTypeName",
                    "src": "1956:8:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$21900_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1955:28:15"
            },
            "scope": 22034,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 22033,
            "nodeType": "FunctionDefinition",
            "src": "1990:192:15",
            "nodes": [],
            "functionSelector": "399542e9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tryBlockAndAggregate",
            "nameLocation": "1999:20:15",
            "parameters": {
              "id": 22023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22018,
                  "mutability": "mutable",
                  "name": "requireSuccess",
                  "nameLocation": "2025:14:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 22033,
                  "src": "2020:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 22017,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2020:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22022,
                  "mutability": "mutable",
                  "name": "calls",
                  "nameLocation": "2057:5:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 22033,
                  "src": "2041:21:15",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Call_$21879_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "struct IMulticall3.Call[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22020,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 22019,
                        "name": "Call",
                        "nameLocations": [
                          "2041:4:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21879,
                        "src": "2041:4:15"
                      },
                      "referencedDeclaration": 21879,
                      "src": "2041:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Call_$21879_storage_ptr",
                        "typeString": "struct IMulticall3.Call"
                      }
                    },
                    "id": 22021,
                    "nodeType": "ArrayTypeName",
                    "src": "2041:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Call_$21879_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Call[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2019:44:15"
            },
            "returnParameters": {
              "id": 22032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22025,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "2122:11:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 22033,
                  "src": "2114:19:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 22024,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2114:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22027,
                  "mutability": "mutable",
                  "name": "blockHash",
                  "nameLocation": "2143:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 22033,
                  "src": "2135:17:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 22026,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2135:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 22031,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "2170:10:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 22033,
                  "src": "2154:26:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Result_$21900_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct IMulticall3.Result[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22029,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 22028,
                        "name": "Result",
                        "nameLocations": [
                          "2154:6:15"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 21900,
                        "src": "2154:6:15"
                      },
                      "referencedDeclaration": 21900,
                      "src": "2154:6:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Result_$21900_storage_ptr",
                        "typeString": "struct IMulticall3.Result"
                      }
                    },
                    "id": 22030,
                    "nodeType": "ArrayTypeName",
                    "src": "2154:8:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Result_$21900_storage_$dyn_storage_ptr",
                      "typeString": "struct IMulticall3.Result[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:68:15"
            },
            "scope": 22034,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IMulticall3",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          22034
        ],
        "name": "IMulticall3",
        "nameLocation": "110:11:15",
        "scope": 22035,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 15
} as const;