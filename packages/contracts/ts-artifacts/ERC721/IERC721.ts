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
    "id": 44477,
    "exportedSymbols": {
      "IERC165": [
        46707
      ],
      "IERC721": [
        44476
      ]
    },
    "nodeType": "SourceUnit",
    "src": "108:4821:42",
    "nodes": [
      {
        "id": 44361,
        "nodeType": "PragmaDirective",
        "src": "108:24:42",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 44363,
        "nodeType": "ImportDirective",
        "src": "134:62:42",
        "nodes": [],
        "absolutePath": "node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol",
        "file": "../../utils/introspection/IERC165.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 44477,
        "sourceUnit": 46708,
        "symbolAliases": [
          {
            "foreign": {
              "id": 44362,
              "name": "IERC165",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 46707,
              "src": "142:7:42",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 44476,
        "nodeType": "ContractDefinition",
        "src": "267:4661:42",
        "nodes": [
          {
            "id": 44375,
            "nodeType": "EventDefinition",
            "src": "395:82:42",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 44367,
              "nodeType": "StructuredDocumentation",
              "src": "302:88:42",
              "text": " @dev Emitted when `tokenId` token is transferred from `from` to `to`."
            },
            "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "name": "Transfer",
            "nameLocation": "401:8:42",
            "parameters": {
              "id": 44374,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44369,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "426:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44375,
                  "src": "410:20:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44368,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "410:7:42",
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
                  "id": 44371,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "448:2:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44375,
                  "src": "432:18:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44370,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:7:42",
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
                  "id": 44373,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "468:7:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44375,
                  "src": "452:23:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44372,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "409:67:42"
            }
          },
          {
            "id": 44384,
            "nodeType": "EventDefinition",
            "src": "582:89:42",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 44376,
              "nodeType": "StructuredDocumentation",
              "src": "483:94:42",
              "text": " @dev Emitted when `owner` enables `approved` to manage the `tokenId` token."
            },
            "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "name": "Approval",
            "nameLocation": "588:8:42",
            "parameters": {
              "id": 44383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44378,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "613:5:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44384,
                  "src": "597:21:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44377,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "597:7:42",
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
                  "id": 44380,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "636:8:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44384,
                  "src": "620:24:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44379,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "620:7:42",
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
                  "id": 44382,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "662:7:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44384,
                  "src": "646:23:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44381,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "646:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "596:74:42"
            }
          },
          {
            "id": 44393,
            "nodeType": "EventDefinition",
            "src": "799:85:42",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 44385,
              "nodeType": "StructuredDocumentation",
              "src": "677:117:42",
              "text": " @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."
            },
            "eventSelector": "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
            "name": "ApprovalForAll",
            "nameLocation": "805:14:42",
            "parameters": {
              "id": 44392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44387,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "836:5:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44393,
                  "src": "820:21:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44386,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "820:7:42",
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
                  "id": 44389,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "859:8:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44393,
                  "src": "843:24:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44388,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "843:7:42",
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
                  "id": 44391,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "874:8:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44393,
                  "src": "869:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 44390,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "869:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "819:64:42"
            }
          },
          {
            "id": 44401,
            "nodeType": "FunctionDefinition",
            "src": "971:74:42",
            "nodes": [],
            "documentation": {
              "id": 44394,
              "nodeType": "StructuredDocumentation",
              "src": "890:76:42",
              "text": " @dev Returns the number of tokens in ``owner``'s account."
            },
            "functionSelector": "70a08231",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "980:9:42",
            "parameters": {
              "id": 44397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44396,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "998:5:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44401,
                  "src": "990:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44395,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "990:7:42",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "989:15:42"
            },
            "returnParameters": {
              "id": 44400,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44399,
                  "mutability": "mutable",
                  "name": "balance",
                  "nameLocation": "1036:7:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44401,
                  "src": "1028:15:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44398,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1028:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1027:17:42"
            },
            "scope": 44476,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44409,
            "nodeType": "FunctionDefinition",
            "src": "1187:72:42",
            "nodes": [],
            "documentation": {
              "id": 44402,
              "nodeType": "StructuredDocumentation",
              "src": "1051:131:42",
              "text": " @dev Returns the owner of the `tokenId` token.\n Requirements:\n - `tokenId` must exist."
            },
            "functionSelector": "6352211e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ownerOf",
            "nameLocation": "1196:7:42",
            "parameters": {
              "id": 44405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44404,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1212:7:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44409,
                  "src": "1204:15:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44403,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1203:17:42"
            },
            "returnParameters": {
              "id": 44408,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44407,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1252:5:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44409,
                  "src": "1244:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44406,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1244:7:42",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1243:15:42"
            },
            "scope": 44476,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44421,
            "nodeType": "FunctionDefinition",
            "src": "1835:99:42",
            "nodes": [],
            "documentation": {
              "id": 44410,
              "nodeType": "StructuredDocumentation",
              "src": "1265:565:42",
              "text": " @dev Safely transfers `tokenId` token from `from` to `to`.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must exist and be owned by `from`.\n - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon\n   a safe transfer.\n Emits a {Transfer} event."
            },
            "functionSelector": "b88d4fde",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "1844:16:42",
            "parameters": {
              "id": 44419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44412,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "1869:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44421,
                  "src": "1861:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44411,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1861:7:42",
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
                  "id": 44414,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "1883:2:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44421,
                  "src": "1875:10:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44413,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1875:7:42",
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
                  "id": 44416,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1895:7:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44421,
                  "src": "1887:15:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44415,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1887:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 44418,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1919:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44421,
                  "src": "1904:19:42",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 44417,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1904:5:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1860:64:42"
            },
            "returnParameters": {
              "id": 44420,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1933:0:42"
            },
            "scope": 44476,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44431,
            "nodeType": "FunctionDefinition",
            "src": "2651:78:42",
            "nodes": [],
            "documentation": {
              "id": 44422,
              "nodeType": "StructuredDocumentation",
              "src": "1940:706:42",
              "text": " @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n are aware of the ERC-721 protocol to prevent tokens from being forever locked.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must exist and be owned by `from`.\n - If the caller is not `from`, it must have been allowed to move this token by either {approve} or\n   {setApprovalForAll}.\n - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon\n   a safe transfer.\n Emits a {Transfer} event."
            },
            "functionSelector": "42842e0e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "safeTransferFrom",
            "nameLocation": "2660:16:42",
            "parameters": {
              "id": 44429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44424,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2685:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44431,
                  "src": "2677:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44423,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2677:7:42",
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
                  "id": 44426,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2699:2:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44431,
                  "src": "2691:10:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44425,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2691:7:42",
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
                  "id": 44428,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "2711:7:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44431,
                  "src": "2703:15:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44427,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2703:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2676:43:42"
            },
            "returnParameters": {
              "id": 44430,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2728:0:42"
            },
            "scope": 44476,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44441,
            "nodeType": "FunctionDefinition",
            "src": "3473:74:42",
            "nodes": [],
            "documentation": {
              "id": 44432,
              "nodeType": "StructuredDocumentation",
              "src": "2735:733:42",
              "text": " @dev Transfers `tokenId` token from `from` to `to`.\n WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC-721\n or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must\n understand this adds an external call which potentially creates a reentrancy vulnerability.\n Requirements:\n - `from` cannot be the zero address.\n - `to` cannot be the zero address.\n - `tokenId` token must be owned by `from`.\n - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "3482:12:42",
            "parameters": {
              "id": 44439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44434,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "3503:4:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44441,
                  "src": "3495:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44433,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3495:7:42",
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
                  "id": 44436,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3517:2:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44441,
                  "src": "3509:10:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44435,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3509:7:42",
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
                  "id": 44438,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3529:7:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44441,
                  "src": "3521:15:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3521:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3494:43:42"
            },
            "returnParameters": {
              "id": 44440,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3546:0:42"
            },
            "scope": 44476,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44449,
            "nodeType": "FunctionDefinition",
            "src": "4010:55:42",
            "nodes": [],
            "documentation": {
              "id": 44442,
              "nodeType": "StructuredDocumentation",
              "src": "3553:452:42",
              "text": " @dev Gives permission to `to` to transfer `tokenId` token to another account.\n The approval is cleared when the token is transferred.\n Only a single account can be approved at a time, so approving the zero address clears previous approvals.\n Requirements:\n - The caller must own the token or be an approved operator.\n - `tokenId` must exist.\n Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "4019:7:42",
            "parameters": {
              "id": 44447,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44444,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "4035:2:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44449,
                  "src": "4027:10:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44443,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4027:7:42",
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
                  "id": 44446,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "4047:7:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44449,
                  "src": "4039:15:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44445,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4039:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4026:29:42"
            },
            "returnParameters": {
              "id": 44448,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4064:0:42"
            },
            "scope": 44476,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44457,
            "nodeType": "FunctionDefinition",
            "src": "4391:69:42",
            "nodes": [],
            "documentation": {
              "id": 44450,
              "nodeType": "StructuredDocumentation",
              "src": "4071:315:42",
              "text": " @dev Approve or remove `operator` as an operator for the caller.\n Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\n Requirements:\n - The `operator` cannot be the address zero.\n Emits an {ApprovalForAll} event."
            },
            "functionSelector": "a22cb465",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setApprovalForAll",
            "nameLocation": "4400:17:42",
            "parameters": {
              "id": 44455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44452,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4426:8:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44457,
                  "src": "4418:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44451,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4418:7:42",
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
                  "id": 44454,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "4441:8:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44457,
                  "src": "4436:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 44453,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4436:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4417:33:42"
            },
            "returnParameters": {
              "id": 44456,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4459:0:42"
            },
            "scope": 44476,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44465,
            "nodeType": "FunctionDefinition",
            "src": "4610:79:42",
            "nodes": [],
            "documentation": {
              "id": 44458,
              "nodeType": "StructuredDocumentation",
              "src": "4466:139:42",
              "text": " @dev Returns the account approved for `tokenId` token.\n Requirements:\n - `tokenId` must exist."
            },
            "functionSelector": "081812fc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getApproved",
            "nameLocation": "4619:11:42",
            "parameters": {
              "id": 44461,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44460,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "4639:7:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44465,
                  "src": "4631:15:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44459,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4631:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4630:17:42"
            },
            "returnParameters": {
              "id": 44464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44463,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4679:8:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44465,
                  "src": "4671:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44462,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4671:7:42",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4670:18:42"
            },
            "scope": 44476,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 44475,
            "nodeType": "FunctionDefinition",
            "src": "4838:88:42",
            "nodes": [],
            "documentation": {
              "id": 44466,
              "nodeType": "StructuredDocumentation",
              "src": "4695:138:42",
              "text": " @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\n See {setApprovalForAll}"
            },
            "functionSelector": "e985e9c5",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isApprovedForAll",
            "nameLocation": "4847:16:42",
            "parameters": {
              "id": 44471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44468,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "4872:5:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44475,
                  "src": "4864:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44467,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4864:7:42",
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
                  "id": 44470,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "4887:8:42",
                  "nodeType": "VariableDeclaration",
                  "scope": 44475,
                  "src": "4879:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 44469,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4879:7:42",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4863:33:42"
            },
            "returnParameters": {
              "id": 44474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44473,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 44475,
                  "src": "4920:4:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 44472,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4920:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4919:6:42"
            },
            "scope": 44476,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 44365,
              "name": "IERC165",
              "nameLocations": [
                "288:7:42"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 46707,
              "src": "288:7:42"
            },
            "id": 44366,
            "nodeType": "InheritanceSpecifier",
            "src": "288:7:42"
          }
        ],
        "canonicalName": "IERC721",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 44364,
          "nodeType": "StructuredDocumentation",
          "src": "198:68:42",
          "text": " @dev Required interface of an ERC-721 compliant contract."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          44476,
          46707
        ],
        "name": "IERC721",
        "nameLocation": "277:7:42",
        "scope": 44477,
        "usedErrors": [],
        "usedEvents": [
          44375,
          44384,
          44393
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 42
} as const;