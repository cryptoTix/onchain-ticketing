export const IERC721 = {
  "abi": [
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
          "name": "balance",
          "type": "uint256",
          "internalType": "uint256"
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
          "name": "operator",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
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
          "name": "owner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
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
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "getApproved(uint256)": "081812fc",
    "isApprovedForAll(address,address)": "e985e9c5",
    "ownerOf(uint256)": "6352211e",
    "safeTransferFrom(address,address,uint256)": "42842e0e",
    "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
    "setApprovalForAll(address,bool)": "a22cb465",
    "supportsInterface(bytes4)": "01ffc9a7",
    "transferFrom(address,address,uint256)": "23b872dd"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.26+commit.8a97fa7a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Required interface of an ERC-721 compliant contract.\",\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"}},\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the number of tokens in ``owner``'s account.\"},\"getApproved(uint256)\":{\"details\":\"Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}\"},\"ownerOf(uint256)\":{\"details\":\"Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC-721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must have been allowed to move this token by either {approve} or   {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the address zero. Emits an {ApprovalForAll} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `tokenId` token from `from` to `to`. WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC-721 or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must understand this adds an external call which potentially creates a reentrancy vulnerability. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol\":\"IERC721\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"]},\"sources\":{\"node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11\",\"dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq\"]},\"node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]}},\"version\":1}",
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
              "name": "balance",
              "type": "uint256"
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
              "name": "operator",
              "type": "address"
            }
          ]
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
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
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
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "approve(address,uint256)": {
            "details": "Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event."
          },
          "balanceOf(address)": {
            "details": "Returns the number of tokens in ``owner``'s account."
          },
          "getApproved(uint256)": {
            "details": "Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist."
          },
          "isApprovedForAll(address,address)": {
            "details": "Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}"
          },
          "ownerOf(uint256)": {
            "details": "Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist."
          },
          "safeTransferFrom(address,address,uint256)": {
            "details": "Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC-721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must have been allowed to move this token by either {approve} or   {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event."
          },
          "safeTransferFrom(address,address,uint256,bytes)": {
            "details": "Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon   a safe transfer. Emits a {Transfer} event."
          },
          "setApprovalForAll(address,bool)": {
            "details": "Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the address zero. Emits an {ApprovalForAll} event."
          },
          "supportsInterface(bytes4)": {
            "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
          },
          "transferFrom(address,address,uint256)": {
            "details": "Transfers `tokenId` token from `from` to `to`. WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC-721 or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must understand this adds an external call which potentially creates a reentrancy vulnerability. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event."
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
        "node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol": "IERC721"
      },
      "evmVersion": "paris",
      "libraries": {}
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol": {
        "keccak256": "0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261",
        "urls": [
          "bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11",
          "dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol",
    "id": 39959,
    "exportedSymbols": {
      "IERC165": [
        42159
      ],
      "IERC721": [
        39958
      ]
    },
    "nodeType": "SourceUnit",
    "src": "108:4821:35",
    "nodes": [
      {
        "id": 39843,
        "nodeType": "PragmaDirective",
        "src": "108:24:35",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 39845,
        "nodeType": "ImportDirective",
        "src": "134:62:35",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "../../utils/introspection/IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 39959,
        "sourceUnit": 42160,
        "symbolAliases": [
          {
            "foreign": {
              "id": 39844,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 42159,
              "src": "142:7:35",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 39958,
        "nodeType": "ContractDefinition",
        "src": "267:4661:35",
        "nodes": [
          {
            "id": 39857,
            "nodeType": "EventDefinition",
            "src": "395:82:35",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 39849,
              "nodeType": "StructuredDocumentation",
              "src": "302:88:35",
              "text": " @dev Emitted when `tokenId` token is transferred from `from` to `to`."
            },
            "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "name": "Transfer",
            "nameLocation": "401:8:35",
            "parameters": {
              "id": 39856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39851,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "426:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39857,
                  "src": "410:20:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39850,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "410:7:35",
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
                  "id": 39853,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "448:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39857,
                  "src": "432:18:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39852,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:7:35",
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
                  "id": 39855,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "468:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39857,
                  "src": "452:23:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39854,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "409:67:35"
            }
          },
          {
            "id": 39866,
            "nodeType": "EventDefinition",
            "src": "582:89:35",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 39858,
              "nodeType": "StructuredDocumentation",
              "src": "483:94:35",
              "text": " @dev Emitted when `owner` enables `approved` to manage the `tokenId` token."
            },
            "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "name": "Approval",
            "nameLocation": "588:8:35",
            "parameters": {
              "id": 39865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39860,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "613:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39866,
                  "src": "597:21:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39859,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "597:7:35",
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
                  "id": 39862,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "636:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39866,
                  "src": "620:24:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39861,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "620:7:35",
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
                  "id": 39864,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "662:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39866,
                  "src": "646:23:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39863,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "646:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "596:74:35"
            }
          },
          {
            "id": 39875,
            "nodeType": "EventDefinition",
            "src": "799:85:35",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 39867,
              "nodeType": "StructuredDocumentation",
              "src": "677:117:35",
              "text": " @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."
            },
            "eventSelector": "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
            "name": "ApprovalForAll",
            "nameLocation": "805:14:35",
            "parameters": {
              "id": 39874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39869,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "836:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39875,
                  "src": "820:21:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39868,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "820:7:35",
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
                  "id": 39871,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "859:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39875,
                  "src": "843:24:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39870,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "843:7:35",
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
                  "id": 39873,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "874:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39875,
                  "src": "869:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 39872,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "869:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "819:64:35"
            }
          },
          {
            "id": 39883,
            "nodeType": "FunctionDefinition",
            "src": "971:74:35",
            "nodes": [],
            "documentation": {
              "id": 39876,
              "nodeType": "StructuredDocumentation",
              "src": "890:76:35",
              "text": " @dev Returns the number of tokens in ``owner``'s account."
            },
            "functionSelector": "70a08231",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "980:9:35",
            "parameters": {
              "id": 39879,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39878,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "998:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39883,
                  "src": "990:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39877,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "990:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "989:15:35"
            },
            "returnParameters": {
              "id": 39882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39881,
                  "mutability": "mutable",
                  "name": "balance",
                  "nameLocation": "1036:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39883,
                  "src": "1028:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39880,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1028:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1027:17:35"
            },
            "scope": 39958,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 39891,
            "nodeType": "FunctionDefinition",
            "src": "1187:72:35",
            "nodes": [],
            "documentation": {
              "id": 39884,
              "nodeType": "StructuredDocumentation",
              "src": "1051:131:35",
              "text": " @dev Returns the owner of the `tokenId` token.\n Requirements:\n - `tokenId` must exist."
            },
            "functionSelector": "6352211e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ownerOf",
            "nameLocation": "1196:7:35",
            "parameters": {
              "id": 39887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39886,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1212:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39891,
                  "src": "1204:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1203:17:35"
            },
            "returnParameters": {
              "id": 39890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39889,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1252:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39891,
                  "src": "1244:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39888,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1244:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1243:15:35"
            },
            "scope": 39958,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 39903,
            "nodeType": "FunctionDefinition",
            "src": "1835:99:35",
            "nodes": [],
            "documentation": {
              "id": 39892,
              "nodeType": "StructuredDocumentation",
              "src": "1265:565:35",
              "text": " @dev Safely transfers `tokenId` token from `from` to `to`.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must exist and be owned by `from`.\n - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon\n   a safe transfer.\n Emits a {Transfer} event."
            },
            "functionSelector": "b88d4fde",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "1844:16:35",
            "parameters": {
              "id": 39901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39894,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1869:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39903,
                  "src": "1861:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39893,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1861:7:35",
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
                  "id": 39896,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1883:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39903,
                  "src": "1875:10:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39895,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1875:7:35",
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
                  "id": 39898,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1895:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39903,
                  "src": "1887:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39897,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1887:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39900,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1919:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39903,
                  "src": "1904:19:35",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 39899,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1904:5:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1860:64:35"
            },
            "returnParameters": {
              "id": 39902,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1933:0:35"
            },
            "scope": 39958,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 39913,
            "nodeType": "FunctionDefinition",
            "src": "2651:78:35",
            "nodes": [],
            "documentation": {
              "id": 39904,
              "nodeType": "StructuredDocumentation",
              "src": "1940:706:35",
              "text": " @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n are aware of the ERC-721 protocol to prevent tokens from being forever locked.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must exist and be owned by `from`.\n - If the caller is not `from`, it must have been allowed to move this token by either {approve} or\n   {setApprovalForAll}.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon\n   a safe transfer.\n Emits a {Transfer} event."
            },
            "functionSelector": "42842e0e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "2660:16:35",
            "parameters": {
              "id": 39911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39906,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2685:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39913,
                  "src": "2677:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39905,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2677:7:35",
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
                  "id": 39908,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2699:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39913,
                  "src": "2691:10:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39907,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2691:7:35",
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
                  "id": 39910,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "2711:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39913,
                  "src": "2703:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39909,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2703:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2676:43:35"
            },
            "returnParameters": {
              "id": 39912,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2728:0:35"
            },
            "scope": 39958,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 39923,
            "nodeType": "FunctionDefinition",
            "src": "3473:74:35",
            "nodes": [],
            "documentation": {
              "id": 39914,
              "nodeType": "StructuredDocumentation",
              "src": "2735:733:35",
              "text": " @dev Transfers `tokenId` token from `from` to `to`.\n WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC-721\n or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must\n understand this adds an external call which potentially creates a reentrancy vulnerability.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must be owned by `from`.\n - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "3482:12:35",
            "parameters": {
              "id": 39921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39916,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "3503:4:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39923,
                  "src": "3495:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39915,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3495:7:35",
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
                  "id": 39918,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3517:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39923,
                  "src": "3509:10:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39917,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3509:7:35",
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
                  "id": 39920,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3529:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39923,
                  "src": "3521:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39919,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3521:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3494:43:35"
            },
            "returnParameters": {
              "id": 39922,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3546:0:35"
            },
            "scope": 39958,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 39931,
            "nodeType": "FunctionDefinition",
            "src": "4010:55:35",
            "nodes": [],
            "documentation": {
              "id": 39924,
              "nodeType": "StructuredDocumentation",
              "src": "3553:452:35",
              "text": " @dev Gives permission to `to` to transfer `tokenId` token to another account.\n The approval is cleared when the token is transferred.\n Only a single account can be approved at a time, so approving the zero address clears previous approvals.\n Requirements:\n - The caller must own the token or be an approved operator.\n - `tokenId` must exist.\n Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "4019:7:35",
            "parameters": {
              "id": 39929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39926,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4035:2:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39931,
                  "src": "4027:10:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39925,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4027:7:35",
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
                  "id": 39928,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "4047:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39931,
                  "src": "4039:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39927,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4039:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4026:29:35"
            },
            "returnParameters": {
              "id": 39930,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4064:0:35"
            },
            "scope": 39958,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 39939,
            "nodeType": "FunctionDefinition",
            "src": "4391:69:35",
            "nodes": [],
            "documentation": {
              "id": 39932,
              "nodeType": "StructuredDocumentation",
              "src": "4071:315:35",
              "text": " @dev Approve or remove `operator` as an operator for the caller.\n Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\n Requirements:\n - The `operator` cannot be the address zero.\n Emits an {ApprovalForAll} event."
            },
            "functionSelector": "a22cb465",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "4400:17:35",
            "parameters": {
              "id": 39937,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39934,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4426:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39939,
                  "src": "4418:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39933,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4418:7:35",
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
                  "id": 39936,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "4441:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39939,
                  "src": "4436:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 39935,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4436:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4417:33:35"
            },
            "returnParameters": {
              "id": 39938,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4459:0:35"
            },
            "scope": 39958,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 39947,
            "nodeType": "FunctionDefinition",
            "src": "4610:79:35",
            "nodes": [],
            "documentation": {
              "id": 39940,
              "nodeType": "StructuredDocumentation",
              "src": "4466:139:35",
              "text": " @dev Returns the account approved for `tokenId` token.\n Requirements:\n - `tokenId` must exist."
            },
            "functionSelector": "081812fc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getApproved",
            "nameLocation": "4619:11:35",
            "parameters": {
              "id": 39943,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39942,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "4639:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39947,
                  "src": "4631:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39941,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4631:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4630:17:35"
            },
            "returnParameters": {
              "id": 39946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39945,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4679:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39947,
                  "src": "4671:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39944,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4671:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4670:18:35"
            },
            "scope": 39958,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 39957,
            "nodeType": "FunctionDefinition",
            "src": "4838:88:35",
            "nodes": [],
            "documentation": {
              "id": 39948,
              "nodeType": "StructuredDocumentation",
              "src": "4695:138:35",
              "text": " @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\n See {setApprovalForAll}"
            },
            "functionSelector": "e985e9c5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "4847:16:35",
            "parameters": {
              "id": 39953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39950,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4872:5:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39957,
                  "src": "4864:13:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39949,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4864:7:35",
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
                  "id": 39952,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4887:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 39957,
                  "src": "4879:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39951,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4879:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4863:33:35"
            },
            "returnParameters": {
              "id": 39956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39955,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 39957,
                  "src": "4920:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 39954,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4920:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4919:6:35"
            },
            "scope": 39958,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 39847,
              "name": "IERC165",
              "nameLocations": [
                "288:7:35"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 42159,
              "src": "288:7:35"
            },
            "id": 39848,
            "nodeType": "InheritanceSpecifier",
            "src": "288:7:35"
          }
        ],
        "canonicalName": "IERC721",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 39846,
          "nodeType": "StructuredDocumentation",
          "src": "198:68:35",
          "text": " @dev Required interface of an ERC-721 compliant contract."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          39958,
          42159
        ],
        "name": "IERC721",
        "nameLocation": "277:7:35",
        "scope": 39959,
        "usedErrors": [],
        "usedEvents": [
          39857,
          39866,
          39875
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 35
} as const;