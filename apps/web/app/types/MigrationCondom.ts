export const MigrationCondom = {
  "abi": [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_vaultSupervisor",
          "type": "address",
          "internalType": "contract IVaultSupervisor"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "allowlistRoute",
      "inputs": [
        {
          "name": "v1Vault",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "v2Vault",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "allowlistedRoutes",
      "inputs": [
        {
          "name": "v1Vaults",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "v2Vaults",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "isAllowlisted",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "cancelOwnershipHandover",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "completeOwnershipHandover",
      "inputs": [
        {
          "name": "pendingOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "denylistRoute",
      "inputs": [
        {
          "name": "v1Vault",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "v2Vault",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "migrateToV2Safely",
      "inputs": [
        {
          "name": "v1Vault",
          "type": "address",
          "internalType": "contract IVault"
        },
        {
          "name": "v2Vault",
          "type": "address",
          "internalType": "contract IVault2"
        },
        {
          "name": "oldShares",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "minNewShares",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "result",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownershipHandoverExpiresAt",
      "inputs": [
        {
          "name": "pendingOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "result",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "requestOwnershipHandover",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "rescueERC20",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "internalType": "address"
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
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "vaultSupervisor",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IVaultSupervisor"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "OwnershipHandoverCanceled",
      "inputs": [
        {
          "name": "pendingOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipHandoverRequested",
      "inputs": [
        {
          "name": "pendingOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "oldOwner",
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
      "name": "RouteAllowlisted",
      "inputs": [
        {
          "name": "v1Vault",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "v2Vault",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RouteDenylisted",
      "inputs": [
        {
          "name": "v1Vault",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "v2Vault",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "AlreadyInitialized",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NewOwnerIsZeroAddress",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NoHandoverRequest",
      "inputs": []
    },
    {
      "type": "error",
      "name": "OldSharesDeltaBalShouldBeZero",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Reentrancy",
      "inputs": []
    },
    {
      "type": "error",
      "name": "RouteNotAllowlisted",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Slippage",
      "inputs": []
    },
    {
      "type": "error",
      "name": "Unauthorized",
      "inputs": []
    }
  ],
  "bytecode": {
    "object": "0x608034609f57601f610de638819003918201601f19168301916001600160401b0383118484101760a457808492602094604052833981010312609f57516001600160a01b03811690819003609f5733638b78c6d819553360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3600080546001600160a01b031916919091179055604051610d2b90816100bb8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c9182630a2c13a114610b82575081632569296214610b37578163258809e314610a8d57816354d1f13d14610a47578163715018a6146109e65781637235200e146109b35781638da5cb5b1461095f578163b595adb714610367578163ccec3716146102d5578163f04e283e14610229578163f2fde38b1461019257508063fadb7dc9146100ea5763fee81cf4146100b457600080fd5b346100e65760206003193601126100e6576020916100d0610bdb565b9063389a75e1600c525281600c20549051908152f35b5080fd5b50346100e657806003193601126100e657610103610bdb565b61010b610bfe565b91610114610cbd565b73ffffffffffffffffffffffffffffffffffffffff809216918285526001602052818520931692836000526020526000207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690557ffaeaced9d52427c71ab728ec45fca1b81e54f5ad8886aa2a8f2c42234b2e677f8380a380f35b839060206003193601126100e6576101a8610bdb565b906101b1610cbd565b8160601b1561021e575073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a35580f35b637448fbae8352601cfd5b8360206003193601126102d25761023e610bdb565b610246610cbd565b63389a75e1600c528082526020600c2092835442116102c757508173ffffffffffffffffffffffffffffffffffffffff929355167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a35580f35b636f5e88188352601cfd5b80fd5b8390346100e65760206003193601126100e6576102f0610bdb565b6102f8610cbd565b6370a08231835230602052602060346024601c845afa601f3d11161561035b57826044601082602094336014526fa9059cbb00000000000000000000000082525af13d15600184511417161561035057508060345280f35b6390b8ec188252601cfd5b506390b8ec188252601cfd5b919050346109125760806003193601126109125781359073ffffffffffffffffffffffffffffffffffffffff928383168093036106df57602480359385851680950361095b57604435956064359168929eee149b4bd21268973089541461094f57308955818a5260209360018552878b20898c52855260ff888c20541615610927578a8851947f70a082310000000000000000000000000000000000000000000000000000000093848752308a88015287878a81895afa96871561091d57888b8b8f938f90889c6108e1575b5051809481938b835230908301525afa9384156108d657936108a3575b508d8b517f23b872dd000000000000000000000000000000000000000000000000000000008152338c820152308b8201528260448201528981606481858c5af18015610899578a848f8f979695946105029461087c575b5086855416905193849283927f095ea7b3000000000000000000000000000000000000000000000000000000009a8b855284016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b0381858d5af1801561087257610855575b508281541690813b156102d2578860448f8f908f958786925197889687957f8b1980250000000000000000000000000000000000000000000000000000000087528601528401525af1801561084857610833575b50908e9181835416803b1561082f57888f8f8f908f9594889560849487935198899788967ffc34666400000000000000000000000000000000000000000000000000000000885287015285015260448401528b60648401525af1801561082557928c928e95928c95610803575b509060449291815416955195869485938452830152808d830152895af180156107cc5790889392916107d6575b50868b8b51998a80928882528d30908301525afa9788156107cc578d9861079d575b50870396871161077257861061074a579084918851809481938252308a8301525afa92831561074057899361070b575b5050036106e3579083929186943b156106df5782517fa9059cbb00000000000000000000000000000000000000000000000000000000815233928101928352602083019190915292849184919082908490829060400103925af19081156106d657506106c2575b505038905580f35b6106cb90610c21565b6100e65781386106ba565b513d84823e3d90fd5b8480fd5b5090517f8ff38986000000000000000000000000000000000000000000000000000000008152fd5b9080929350813d8311610739575b6107238183610c64565b810103126107345751903880610653565b600080fd5b503d610719565b86513d8b823e3d90fd5b8688517f7dd37f70000000000000000000000000000000000000000000000000000000008152fd5b508a6011887f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b9097508681813d83116107c5575b6107b58183610c64565b8101031261073457519638610623565b503d6107ab565b8a513d8f823e3d90fd5b6107f590883d8a116107fc575b6107ed8183610c64565b810190610ca5565b5038610601565b503d6107e3565b90955081935061081591929450610c21565b6102d25788918b918d94386105d4565b8d513d85823e3d90fd5b8380fd5b919e909161084090610c21565b9d9038610567565b508f8d51903d90823e3d90fd5b61086b908b3d8d116107fc576107ed8183610c64565b5038610513565b8e513d84823e3d90fd5b61089290843d86116107fc576107ed8183610c64565b50386104a7565b8d513d84823e3d90fd5b9092508781813d83116108cf575b6108bb8183610c64565b810103126108cb57519138610450565b8d80fd5b503d6108b1565b8c51903d90823e3d90fd5b9b50505050905087813d8311610916575b6108fc8183610c64565b81010312610912578b888b8b8e9a519a38610433565b8280fd5b503d6108f2565b8b513d85823e3d90fd5b8688517f4c7fc9d4000000000000000000000000000000000000000000000000000000008152fd5b8563ab143c068b52601cfd5b8680fd5b5050346100e657816003193601126100e65760209073ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7487392754915191168152f35b5050346100e657816003193601126100e65773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b83806003193601126102d2576109fa610cbd565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a35580f35b83806003193601126102d25763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b5050346100e657806003193601126100e657610aa7610bdb565b610aaf610bfe565b91610ab8610cbd565b73ffffffffffffffffffffffffffffffffffffffff809216918285526001602052818520931692838552602052832060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f084a8e4c2306b1f2ef0fd0efdcbc6b46bd221573d051860a6cfed028dc11ba4f8380a380f35b83806003193601126102d25763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b8490843461091257806003193601126109125760ff90602093610ba3610bdb565b610bab610bfe565b73ffffffffffffffffffffffffffffffffffffffff91821683526001875283832091168252855220541615158152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361073457565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361073457565b67ffffffffffffffff8111610c3557604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610c3557604052565b90816020910312610734575180151581036107345790565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927543303610ce757565b6382b429006000526004601cfdfea264697066735822122061187047010d88f411ba1785c07f76955709a5597be784b0d501f15fe55f729064736f6c63430008190033",
    "sourceMap": "438:2941:91:-:0;;;;;;;;;;;;;-1:-1:-1;;438:2941:91;;;;-1:-1:-1;;;;;438:2941:91;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;438:2941:91;;;;;;;;724:10;5710:347:70;;;724:10:91;-1:-1:-1;5710:347:70;;;;-1:-1:-1;438:2941:91;;-1:-1:-1;;;;;;438:2941:91;;;;;;;;;;;;;;;;;-1:-1:-1;438:2941:91;;;;;;-1:-1:-1;438:2941:91;;;;;-1:-1:-1;438:2941:91",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060408181526004918236101561001657600080fd5b600092833560e01c9182630a2c13a114610b82575081632569296214610b37578163258809e314610a8d57816354d1f13d14610a47578163715018a6146109e65781637235200e146109b35781638da5cb5b1461095f578163b595adb714610367578163ccec3716146102d5578163f04e283e14610229578163f2fde38b1461019257508063fadb7dc9146100ea5763fee81cf4146100b457600080fd5b346100e65760206003193601126100e6576020916100d0610bdb565b9063389a75e1600c525281600c20549051908152f35b5080fd5b50346100e657806003193601126100e657610103610bdb565b61010b610bfe565b91610114610cbd565b73ffffffffffffffffffffffffffffffffffffffff809216918285526001602052818520931692836000526020526000207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541690557ffaeaced9d52427c71ab728ec45fca1b81e54f5ad8886aa2a8f2c42234b2e677f8380a380f35b839060206003193601126100e6576101a8610bdb565b906101b1610cbd565b8160601b1561021e575073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a35580f35b637448fbae8352601cfd5b8360206003193601126102d25761023e610bdb565b610246610cbd565b63389a75e1600c528082526020600c2092835442116102c757508173ffffffffffffffffffffffffffffffffffffffff929355167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a35580f35b636f5e88188352601cfd5b80fd5b8390346100e65760206003193601126100e6576102f0610bdb565b6102f8610cbd565b6370a08231835230602052602060346024601c845afa601f3d11161561035b57826044601082602094336014526fa9059cbb00000000000000000000000082525af13d15600184511417161561035057508060345280f35b6390b8ec188252601cfd5b506390b8ec188252601cfd5b919050346109125760806003193601126109125781359073ffffffffffffffffffffffffffffffffffffffff928383168093036106df57602480359385851680950361095b57604435956064359168929eee149b4bd21268973089541461094f57308955818a5260209360018552878b20898c52855260ff888c20541615610927578a8851947f70a082310000000000000000000000000000000000000000000000000000000093848752308a88015287878a81895afa96871561091d57888b8b8f938f90889c6108e1575b5051809481938b835230908301525afa9384156108d657936108a3575b508d8b517f23b872dd000000000000000000000000000000000000000000000000000000008152338c820152308b8201528260448201528981606481858c5af18015610899578a848f8f979695946105029461087c575b5086855416905193849283927f095ea7b3000000000000000000000000000000000000000000000000000000009a8b855284016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b0381858d5af1801561087257610855575b508281541690813b156102d2578860448f8f908f958786925197889687957f8b1980250000000000000000000000000000000000000000000000000000000087528601528401525af1801561084857610833575b50908e9181835416803b1561082f57888f8f8f908f9594889560849487935198899788967ffc34666400000000000000000000000000000000000000000000000000000000885287015285015260448401528b60648401525af1801561082557928c928e95928c95610803575b509060449291815416955195869485938452830152808d830152895af180156107cc5790889392916107d6575b50868b8b51998a80928882528d30908301525afa9788156107cc578d9861079d575b50870396871161077257861061074a579084918851809481938252308a8301525afa92831561074057899361070b575b5050036106e3579083929186943b156106df5782517fa9059cbb00000000000000000000000000000000000000000000000000000000815233928101928352602083019190915292849184919082908490829060400103925af19081156106d657506106c2575b505038905580f35b6106cb90610c21565b6100e65781386106ba565b513d84823e3d90fd5b8480fd5b5090517f8ff38986000000000000000000000000000000000000000000000000000000008152fd5b9080929350813d8311610739575b6107238183610c64565b810103126107345751903880610653565b600080fd5b503d610719565b86513d8b823e3d90fd5b8688517f7dd37f70000000000000000000000000000000000000000000000000000000008152fd5b508a6011887f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b9097508681813d83116107c5575b6107b58183610c64565b8101031261073457519638610623565b503d6107ab565b8a513d8f823e3d90fd5b6107f590883d8a116107fc575b6107ed8183610c64565b810190610ca5565b5038610601565b503d6107e3565b90955081935061081591929450610c21565b6102d25788918b918d94386105d4565b8d513d85823e3d90fd5b8380fd5b919e909161084090610c21565b9d9038610567565b508f8d51903d90823e3d90fd5b61086b908b3d8d116107fc576107ed8183610c64565b5038610513565b8e513d84823e3d90fd5b61089290843d86116107fc576107ed8183610c64565b50386104a7565b8d513d84823e3d90fd5b9092508781813d83116108cf575b6108bb8183610c64565b810103126108cb57519138610450565b8d80fd5b503d6108b1565b8c51903d90823e3d90fd5b9b50505050905087813d8311610916575b6108fc8183610c64565b81010312610912578b888b8b8e9a519a38610433565b8280fd5b503d6108f2565b8b513d85823e3d90fd5b8688517f4c7fc9d4000000000000000000000000000000000000000000000000000000008152fd5b8563ab143c068b52601cfd5b8680fd5b5050346100e657816003193601126100e65760209073ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7487392754915191168152f35b5050346100e657816003193601126100e65773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b83806003193601126102d2576109fa610cbd565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffff748739278181547f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a35580f35b83806003193601126102d25763389a75e1600c52338152806020600c2055337ffa7b8eab7da67f412cc9575ed43464468f9bfbae89d1675917346ca6d8fe3c928280a280f35b5050346100e657806003193601126100e657610aa7610bdb565b610aaf610bfe565b91610ab8610cbd565b73ffffffffffffffffffffffffffffffffffffffff809216918285526001602052818520931692838552602052832060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008254161790557f084a8e4c2306b1f2ef0fd0efdcbc6b46bd221573d051860a6cfed028dc11ba4f8380a380f35b83806003193601126102d25763389a75e1600c523381526202a30042016020600c2055337fdbf36a107da19e49527a7176a1babf963b4b0ff8cde35ee35d6cd8f1f9ac7e1d8280a280f35b8490843461091257806003193601126109125760ff90602093610ba3610bdb565b610bab610bfe565b73ffffffffffffffffffffffffffffffffffffffff91821683526001875283832091168252855220541615158152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361073457565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361073457565b67ffffffffffffffff8111610c3557604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610c3557604052565b90816020910312610734575180151581036107345790565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff74873927543303610ce757565b6382b429006000526004601cfdfea264697066735822122061187047010d88f411ba1785c07f76955709a5597be784b0d501f15fe55f729064736f6c63430008190033",
    "sourceMap": "438:2941:91:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;438:2941:91;;;;;;;;;:::i;:::-;11885:237:70;;;;;;;;;438:2941:91;;;;;;;;;;;;;;;;-1:-1:-1;;438:2941:91;;;;;;;:::i;:::-;;;:::i;:::-;12478:70:70;;;:::i;:::-;438:2941:91;;;;;;;;1069:17;438:2941;;;;;;;;;;;;;;;;;;;;;1127:33;;;;438:2941;;;;;;-1:-1:-1;;438:2941:91;;;;;;;:::i;:::-;12478:70:70;;;:::i;:::-;8479:183;;;;;;6813:405;;;;;;;;438:2941:91;6813:405:70;;;438:2941:91;;8479:183:70;;;;;;438:2941:91;;;-1:-1:-1;;438:2941:91;;;;;;;:::i;:::-;12478:70:70;;:::i;:::-;10506:526;;;;;;438:2941:91;10506:526:70;;;;;;;;;;;6813:405;10506:526;;;6813:405;;;;;;438:2941:91;6813:405:70;;;438:2941:91;;10506:526:70;;;;;;438:2941:91;;;;;;;;;;-1:-1:-1;;438:2941:91;;;;;;;:::i;:::-;12478:70:70;;:::i;:::-;14655:1467:77;;;;438:2941:91;14655:1467:77;438:2941:91;14655:1467:77;;;;;;;;;;;;;3104:10:91;14655:1467:77;;3104:10:91;438:2941;3104:10;;14655:1467:77;;;;;;;;;;;;;;;;;;;;;;438:2941:91;;14655:1467:77;;;;;;;;;;;;;438:2941:91;;;;;;;;-1:-1:-1;;438:2941:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1575:245:76;;;;;;;;;;;;438:2941:91;;;;;;;;;;;;;;;;;;;;;;1818:54;1814:113;;438:2941;;;;;1997:32;;;;1575:245:76;1997:32:91;;;438:2941;1997:32;;;;;;;;;;;;;;;;;;;;;;;438:2941;;;2062:32;;;;;;;1575:245:76;2062:32:91;;;438:2941;2062:32;;;;;;;;;;438:2941;;;;;;2157:58;;2178:10;2157:58;;;438:2941;1575:245:76;438:2941:91;;;;;;;;;2157:58;;438:2941;2157:58;;;;;;;;;;;;;;;;;2225:52;2157:58;;;438:2941;;;;;;;;;;;;;;2225:52;;;;;;438:2941;;;;;;;;;;;;;;;;;2225:52;;;;;;;;;;;;;438:2941;;;;;;2287:48;;;;;;438:2941;;;;;;;;;;;2287:48;;;;;438:2941;2287:48;;;;438:2941;;;;2287:48;;;;;;;;438:2941;;;;;;;;;2368:70;;;;;438:2941;;;;;;;;;;;;;;;2368:70;;;;;438:2941;2368:70;;;;438:2941;;;;;;;;;;;;;2368:70;;;;;;;;;;;;;;;;438:2941;;;;;;;;;;;2448:44;;;;;;;;;438:2941;;;;;;2448:44;;;;;;;;;;;;;;438:2941;;;;;;2626:32;;;;;;;1575:245:76;;2626:32:91;;;438:2941;2626:32;;;;;;;;;;;438:2941;;;;;;;;;2688:29;;2684:77;;438:2941;;;;;2791:32;;;;;;1575:245:76;2791:32:91;;;438:2941;2791:32;;;;;;;;;;;438:2941;2775:48;;;2771:117;;2943:44;;;;;;;;;;438:2941;;;2943:44;;2178:10;2943:44;;;438:2941;;;;;;;;;;;;;;;;;;;;;;;;2943:44;;;;;;;;;;;;438:2941;1883:75:76;;;;;438:2941:91;;2943:44;;;;:::i;:::-;438:2941;;2943:44;;;;;438:2941;;;;;;;;2943:44;438:2941;;;2771:117;438:2941;;;2846:31;;;;2791:32;;;;;;;;;;;;;;;;;:::i;:::-;;;438:2941;;;;;2791:32;;;;;438:2941;;;;2791:32;;;;;;438:2941;;;;;;;;;2684:77;438:2941;;;2740:10;;;;438:2941;;;;;;;;;;2626:32;;;;;;;;;;;;;;;;;:::i;:::-;;;438:2941;;;;;2626:32;;;;;;;;;;438:2941;;;;;;;;;2448:44;;;;;;;;;;;;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;2368:70;;;;;;;;;;;;;:::i;:::-;438:2941;;2368:70;;;;;;;;;;438:2941;;;;;;;;;2368:70;438:2941;;;2287:48;;;;;;;;:::i;:::-;;;;;;;438:2941;;;;;;;;;;;;2225:52;;;;;;;;;;;;;:::i;:::-;;;;;;438:2941;;;;;;;;;2157:58;;;;;;;;;;;;;:::i;:::-;;;;;;438:2941;;;;;;;;;2062:32;;;;;;;;;;;;;;;;;:::i;:::-;;;438:2941;;;;;2062:32;;;;438:2941;;;;2062:32;;;;;;438:2941;;;;;;;;;;1997:32;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;438:2941;;;;;;;;;;;1997:32;;;;438:2941;;;;1997:32;;;;;;438:2941;;;;;;;;;1814:113;438:2941;;;1895:21;;;;1575:245:76;;;;;;;438:2941:91;;;;;;;;;;;-1:-1:-1;;438:2941:91;;;;;;11523:61:70;438:2941:91;11523:61:70;;438:2941:91;;;;;;;;;;;;;;-1:-1:-1;;438:2941:91;;;;;;;;;;;;;;;;;;;-1:-1:-1;;438:2941:91;;;;;12478:70:70;;:::i;:::-;6813:405;;;;;;;;;;438:2941:91;;;;;-1:-1:-1;;438:2941:91;;;;;9831:339:70;;;;;;;;;;;;;;;;438:2941:91;;;;;;;;;-1:-1:-1;;438:2941:91;;;;;;;:::i;:::-;;;:::i;:::-;12478:70:70;;;:::i;:::-;438:2941:91;;;;;;;;917:4;438:2941;;;;;;;;;;;;;;;917:4;438:2941;;;;;;;936:34;;;;438:2941;;;;;-1:-1:-1;;438:2941:91;;;;;9239:383:70;;;;;;7972:9;9132:15;438:2941:91;9239:383:70;;;;;;;;;438:2941:91;;;;;;;;;;-1:-1:-1;;438:2941:91;;;;;;;;;;;:::i;:::-;;;:::i;:::-;;;;;;;542:101;438:2941;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;:::o;7292:355:70:-;7390:251;;;;;;7292:355::o;7390:251::-;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "allowlistRoute(address,address)": "258809e3",
    "allowlistedRoutes(address,address)": "0a2c13a1",
    "cancelOwnershipHandover()": "54d1f13d",
    "completeOwnershipHandover(address)": "f04e283e",
    "denylistRoute(address,address)": "fadb7dc9",
    "migrateToV2Safely(address,address,uint256,uint256)": "b595adb7",
    "owner()": "8da5cb5b",
    "ownershipHandoverExpiresAt(address)": "fee81cf4",
    "renounceOwnership()": "715018a6",
    "requestOwnershipHandover()": "25692962",
    "rescueERC20(address)": "ccec3716",
    "transferOwnership(address)": "f2fde38b",
    "vaultSupervisor()": "7235200e"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.25+commit.b61c2a91\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IVaultSupervisor\",\"name\":\"_vaultSupervisor\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"AlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NewOwnerIsZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NoHandoverRequest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OldSharesDeltaBalShouldBeZero\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Reentrancy\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RouteNotAllowlisted\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Slippage\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverCanceled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"OwnershipHandoverRequested\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"v1Vault\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"v2Vault\",\"type\":\"address\"}],\"name\":\"RouteAllowlisted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"v1Vault\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"v2Vault\",\"type\":\"address\"}],\"name\":\"RouteDenylisted\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"v1Vault\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"v2Vault\",\"type\":\"address\"}],\"name\":\"allowlistRoute\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"v1Vaults\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"v2Vaults\",\"type\":\"address\"}],\"name\":\"allowlistedRoutes\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"isAllowlisted\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"cancelOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"completeOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"v1Vault\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"v2Vault\",\"type\":\"address\"}],\"name\":\"denylistRoute\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IVault\",\"name\":\"v1Vault\",\"type\":\"address\"},{\"internalType\":\"contract IVault2\",\"name\":\"v2Vault\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"oldShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minNewShares\",\"type\":\"uint256\"}],\"name\":\"migrateToV2Safely\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"result\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"pendingOwner\",\"type\":\"address\"}],\"name\":\"ownershipHandoverExpiresAt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"result\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"requestOwnershipHandover\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"rescueERC20\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vaultSupervisor\",\"outputs\":[{\"internalType\":\"contract IVaultSupervisor\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"AlreadyInitialized()\":[{\"details\":\"Cannot double-initialize.\"}],\"NewOwnerIsZeroAddress()\":[{\"details\":\"The `newOwner` cannot be the zero address.\"}],\"NoHandoverRequest()\":[{\"details\":\"The `pendingOwner` does not have a valid handover request.\"}],\"Reentrancy()\":[{\"details\":\"Unauthorized reentrant call.\"}],\"Unauthorized()\":[{\"details\":\"The caller is not authorized to call the function.\"}]},\"events\":{\"OwnershipHandoverCanceled(address)\":{\"details\":\"The ownership handover to `pendingOwner` has been canceled.\"},\"OwnershipHandoverRequested(address)\":{\"details\":\"An ownership handover to `pendingOwner` has been requested.\"},\"OwnershipTransferred(address,address)\":{\"details\":\"The ownership is transferred from `oldOwner` to `newOwner`. This event is intentionally kept the same as OpenZeppelin's Ownable to be compatible with indexers and [EIP-173](https://eips.ethereum.org/EIPS/eip-173), despite it not being as lightweight as a single argument event.\"}},\"kind\":\"dev\",\"methods\":{\"cancelOwnershipHandover()\":{\"details\":\"Cancels the two-step ownership handover to the caller, if any.\"},\"completeOwnershipHandover(address)\":{\"details\":\"Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`.\"},\"migrateToV2Safely(address,address,uint256,uint256)\":{\"details\":\"user needs to hold the shares of the vault (using `gimmieShares`).user needs to approve oldShares amount of shares to this vault\",\"params\":{\"minNewShares\":\"min amount of shares minted from vault2\",\"oldShares\":\"amount of shares from vault1 to migrate\",\"v1Vault\":\"from vault address\",\"v2Vault\":\"to vault address\"}},\"owner()\":{\"details\":\"Returns the owner of the contract.\"},\"ownershipHandoverExpiresAt(address)\":{\"details\":\"Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`.\"},\"renounceOwnership()\":{\"details\":\"Allows the owner to renounce their ownership.\"},\"requestOwnershipHandover()\":{\"details\":\"Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default.\"},\"transferOwnership(address)\":{\"details\":\"Allows the owner to transfer the ownership to `newOwner`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"migrateToV2Safely(address,address,uint256,uint256)\":{\"notice\":\"migrates shares from v1 vaults to v2 vaults\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/MigrationCondom.sol\":\"MigrationCondom\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":20000},\"remappings\":[\":@openzeppelin-contracts/=node_modules/@openzeppelin/contracts/\",\":@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":forge-std/=lib/forge-std/src/\",\":solady/=node_modules/solady/\"],\"viaIR\":true},\"sources\":{\"node_modules/@openzeppelin/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba\",\"dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1\"]},\"node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol\":{\"keccak256\":\"0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205\",\"dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"node_modules/solady/src/auth/Ownable.sol\":{\"keccak256\":\"0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3\",\"dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs\"]},\"node_modules/solady/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xdb28f318ec45197a6c7cc2abebed67d7cb8b965838ef962e3844423256a9ddb8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://873cd46b77a2aeb781e7a0d131e7299151323ed884c330101a51d0727e218d98\",\"dweb:/ipfs/QmddadCjyedztvdSgLZEyKWoRes2SqtpviSjhEbSNrkUoi\"]},\"node_modules/solady/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xa2cde6f683e83848ef2939c2cc72a94627e64d2877079522ddee82d4c8c21666\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://768ae374ca043fcae00246186aa558357c5949b527a05cf5001cd40458ab5dd1\",\"dweb:/ipfs/QmfM3hgxUTrMS21a1Pm3TKHc7mB8rQkCq8DPHGbwGdXPpr\"]},\"src/MigrationCondom.sol\":{\"keccak256\":\"0x5a3ccee6f79d4b4bfa76376b3eb9e844ad139c733d31f832bc5489880bfbc2ad\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://ac93d911683dd40ebefd450fa1881d3b140faaab31181cbd0a9eed33f19e0086\",\"dweb:/ipfs/Qmdocvur4XbdMpqo4SnprW7hs2ReRvsqGHGJ1PCabzFyR6\"]},\"src/entities/VaultLib2.sol\":{\"keccak256\":\"0x1c5ce5512c8e43a65cada53af49396dd8d98c22888216db0c1a7f32553f4ca33\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://1257b5d240ed27d87108bfa567d628b738085038d4d24c05af04899f603cdc27\",\"dweb:/ipfs/QmNu8xxdKPE1LBq3tFUJq26QxrqnzoMRMLcR5LyXAYg3T3\"]},\"src/entities/Withdraw2.sol\":{\"keccak256\":\"0xea447e29d2c86a1c417f9aad2a0155679bc98cebc142a93dbf2ba606ba09d2c9\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://27298e3a2ce14e0e9a3c06ca71e00ee90abd92dbaf0fd9c5cd9e6fb5c15c41aa\",\"dweb:/ipfs/Qmee5qJCCeaj5JDwUcZN4nuAozJTc4sLi3n318ir3snyGz\"]},\"src/interfaces/ILimiter.sol\":{\"keccak256\":\"0xa3400fb4d7352aefa72255735441e3854d7b6ace1383c2d2f6512cdcad2778a7\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://140031091c5ff90af99663983cdb80ebf42c984baab017a5b09283c1d42fe2d4\",\"dweb:/ipfs/QmTMcdE4ENEH7QTtMzLZCi8dVHD8XMMZt5xASfMPS3pNxU\"]},\"src/interfaces/ISwapper.sol\":{\"keccak256\":\"0x83b09ea799b3d98fb09b23681e350722eb7dc8090fe7af054404222296ad9384\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://1693e1efd07fd1e55fc664dfffe5b0bdfd9d55a2dad189472370f5a28b0ea977\",\"dweb:/ipfs/QmQq12BP5h2Wie6zWFTrGjuKgDRFm84S2kfM5k5u4RaF4i\"]},\"src/interfaces/IVault.sol\":{\"keccak256\":\"0xa49288f62d8eeaafc1c1cbbb14132b6a8920c86ab2291230f43e5415806a0a77\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://f93708965d47a94cd46b8aaed5540ddb1e737cb0bf1eacac1fc94079e8df39f7\",\"dweb:/ipfs/QmSdMXwPW4pZ3eahdc3iHh2gar2HBEuyR8sa1BsbrJ1Mvt\"]},\"src/interfaces/IVault2.sol\":{\"keccak256\":\"0x91f45981a88e5fb93a94254c9fc9d6c017011ad85a42d5ecee1cf483e872934b\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://cfac5022d6e8a92af1af288c8a420c138aa62572ddab423b3ae5a00418a24ff1\",\"dweb:/ipfs/QmdPW3QdDgCnZBL451J9CKcJLg82opoZx2MRCu34oS2yy4\"]},\"src/interfaces/IVaultSupervisor.sol\":{\"keccak256\":\"0x89e02a171470594893e5588c47898a03fe12f1211de5143ced98cfe17ef66d4e\",\"license\":\"SEE LICENSE IN LICENSE\",\"urls\":[\"bzz-raw://96c92dc1cd11fb11641fc2b4bc1f0ed37ae26056ec2bd08d7b6ce1858f15eec8\",\"dweb:/ipfs/QmToE5dJAsezjnwA54G2ikHm2CVjk8FMFiKUozeRjTxV9B\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.25+commit.b61c2a91"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "contract IVaultSupervisor",
              "name": "_vaultSupervisor",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "AlreadyInitialized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NewOwnerIsZeroAddress"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NoHandoverRequest"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "OldSharesDeltaBalShouldBeZero"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Reentrancy"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "RouteNotAllowlisted"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Slippage"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipHandoverCanceled",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipHandoverRequested",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "oldOwner",
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
              "name": "v1Vault",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "v2Vault",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RouteAllowlisted",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "v1Vault",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "v2Vault",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "RouteDenylisted",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "v1Vault",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "v2Vault",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "allowlistRoute"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "v1Vaults",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "v2Vaults",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowlistedRoutes",
          "outputs": [
            {
              "internalType": "bool",
              "name": "isAllowlisted",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "function",
          "name": "cancelOwnershipHandover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "completeOwnershipHandover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "v1Vault",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "v2Vault",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "denylistRoute"
        },
        {
          "inputs": [
            {
              "internalType": "contract IVault",
              "name": "v1Vault",
              "type": "address"
            },
            {
              "internalType": "contract IVault2",
              "name": "v2Vault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "oldShares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minNewShares",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "migrateToV2Safely"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "result",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "pendingOwner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "ownershipHandoverExpiresAt",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "result",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "function",
          "name": "requestOwnershipHandover"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rescueERC20"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "transferOwnership"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "vaultSupervisor",
          "outputs": [
            {
              "internalType": "contract IVaultSupervisor",
              "name": "",
              "type": "address"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "cancelOwnershipHandover()": {
            "details": "Cancels the two-step ownership handover to the caller, if any."
          },
          "completeOwnershipHandover(address)": {
            "details": "Allows the owner to complete the two-step ownership handover to `pendingOwner`. Reverts if there is no existing ownership handover requested by `pendingOwner`."
          },
          "migrateToV2Safely(address,address,uint256,uint256)": {
            "details": "user needs to hold the shares of the vault (using `gimmieShares`).user needs to approve oldShares amount of shares to this vault",
            "params": {
              "minNewShares": "min amount of shares minted from vault2",
              "oldShares": "amount of shares from vault1 to migrate",
              "v1Vault": "from vault address",
              "v2Vault": "to vault address"
            }
          },
          "owner()": {
            "details": "Returns the owner of the contract."
          },
          "ownershipHandoverExpiresAt(address)": {
            "details": "Returns the expiry timestamp for the two-step ownership handover to `pendingOwner`."
          },
          "renounceOwnership()": {
            "details": "Allows the owner to renounce their ownership."
          },
          "requestOwnershipHandover()": {
            "details": "Request a two-step ownership handover to the caller. The request will automatically expire in 48 hours (172800 seconds) by default."
          },
          "transferOwnership(address)": {
            "details": "Allows the owner to transfer the ownership to `newOwner`."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "migrateToV2Safely(address,address,uint256,uint256)": {
            "notice": "migrates shares from v1 vaults to v2 vaults"
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@openzeppelin-contracts/=node_modules/@openzeppelin/contracts/",
        "@openzeppelin-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/",
        "@openzeppelin/=node_modules/@openzeppelin/",
        "forge-std/=lib/forge-std/src/",
        "solady/=node_modules/solady/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 20000
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/MigrationCondom.sol": "MigrationCondom"
      },
      "evmVersion": "paris",
      "libraries": {},
      "viaIR": true
    },
    "sources": {
      "node_modules/@openzeppelin/contracts/interfaces/IERC20.sol": {
        "keccak256": "0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c",
        "urls": [
          "bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba",
          "dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/interfaces/IERC4626.sol": {
        "keccak256": "0x207f64371bc0fcc5be86713aa5da109a870cc3a6da50e93b64ee881e369b593d",
        "urls": [
          "bzz-raw://548667cfa76683767c2c610b577f6c2f0675d0ce28f53c3f37b969c84a56b205",
          "dweb:/ipfs/QmUzA1CKC6bDdULuS44wGd7PWBNLiHb6bh7oHwJBDZSLAx"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
        "urls": [
          "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
          "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
        ],
        "license": "MIT"
      },
      "node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
        "urls": [
          "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
          "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
        ],
        "license": "MIT"
      },
      "node_modules/solady/src/auth/Ownable.sol": {
        "keccak256": "0xc208cdd9de02bbf4b5edad18b88e23a2be7ff56d2287d5649329dc7cda64b9a3",
        "urls": [
          "bzz-raw://e8fba079cc7230c617f7493a2e97873f88e59a53a5018fcb2e2b6ac42d8aa5a3",
          "dweb:/ipfs/QmTXg8GSt8hsK2cZhbPFrund1mrwVdkLQmEPoQaFy4fhjs"
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
        "keccak256": "0xa2cde6f683e83848ef2939c2cc72a94627e64d2877079522ddee82d4c8c21666",
        "urls": [
          "bzz-raw://768ae374ca043fcae00246186aa558357c5949b527a05cf5001cd40458ab5dd1",
          "dweb:/ipfs/QmfM3hgxUTrMS21a1Pm3TKHc7mB8rQkCq8DPHGbwGdXPpr"
        ],
        "license": "MIT"
      },
      "src/MigrationCondom.sol": {
        "keccak256": "0x5a3ccee6f79d4b4bfa76376b3eb9e844ad139c733d31f832bc5489880bfbc2ad",
        "urls": [
          "bzz-raw://ac93d911683dd40ebefd450fa1881d3b140faaab31181cbd0a9eed33f19e0086",
          "dweb:/ipfs/Qmdocvur4XbdMpqo4SnprW7hs2ReRvsqGHGJ1PCabzFyR6"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/VaultLib2.sol": {
        "keccak256": "0x1c5ce5512c8e43a65cada53af49396dd8d98c22888216db0c1a7f32553f4ca33",
        "urls": [
          "bzz-raw://1257b5d240ed27d87108bfa567d628b738085038d4d24c05af04899f603cdc27",
          "dweb:/ipfs/QmNu8xxdKPE1LBq3tFUJq26QxrqnzoMRMLcR5LyXAYg3T3"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/entities/Withdraw2.sol": {
        "keccak256": "0xea447e29d2c86a1c417f9aad2a0155679bc98cebc142a93dbf2ba606ba09d2c9",
        "urls": [
          "bzz-raw://27298e3a2ce14e0e9a3c06ca71e00ee90abd92dbaf0fd9c5cd9e6fb5c15c41aa",
          "dweb:/ipfs/Qmee5qJCCeaj5JDwUcZN4nuAozJTc4sLi3n318ir3snyGz"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/ILimiter.sol": {
        "keccak256": "0xa3400fb4d7352aefa72255735441e3854d7b6ace1383c2d2f6512cdcad2778a7",
        "urls": [
          "bzz-raw://140031091c5ff90af99663983cdb80ebf42c984baab017a5b09283c1d42fe2d4",
          "dweb:/ipfs/QmTMcdE4ENEH7QTtMzLZCi8dVHD8XMMZt5xASfMPS3pNxU"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/ISwapper.sol": {
        "keccak256": "0x83b09ea799b3d98fb09b23681e350722eb7dc8090fe7af054404222296ad9384",
        "urls": [
          "bzz-raw://1693e1efd07fd1e55fc664dfffe5b0bdfd9d55a2dad189472370f5a28b0ea977",
          "dweb:/ipfs/QmQq12BP5h2Wie6zWFTrGjuKgDRFm84S2kfM5k5u4RaF4i"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IVault.sol": {
        "keccak256": "0xa49288f62d8eeaafc1c1cbbb14132b6a8920c86ab2291230f43e5415806a0a77",
        "urls": [
          "bzz-raw://f93708965d47a94cd46b8aaed5540ddb1e737cb0bf1eacac1fc94079e8df39f7",
          "dweb:/ipfs/QmSdMXwPW4pZ3eahdc3iHh2gar2HBEuyR8sa1BsbrJ1Mvt"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IVault2.sol": {
        "keccak256": "0x91f45981a88e5fb93a94254c9fc9d6c017011ad85a42d5ecee1cf483e872934b",
        "urls": [
          "bzz-raw://cfac5022d6e8a92af1af288c8a420c138aa62572ddab423b3ae5a00418a24ff1",
          "dweb:/ipfs/QmdPW3QdDgCnZBL451J9CKcJLg82opoZx2MRCu34oS2yy4"
        ],
        "license": "SEE LICENSE IN LICENSE"
      },
      "src/interfaces/IVaultSupervisor.sol": {
        "keccak256": "0x89e02a171470594893e5588c47898a03fe12f1211de5143ced98cfe17ef66d4e",
        "urls": [
          "bzz-raw://96c92dc1cd11fb11641fc2b4bc1f0ed37ae26056ec2bd08d7b6ce1858f15eec8",
          "dweb:/ipfs/QmToE5dJAsezjnwA54G2ikHm2CVjk8FMFiKUozeRjTxV9B"
        ],
        "license": "SEE LICENSE IN LICENSE"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/MigrationCondom.sol",
    "id": 63382,
    "exportedSymbols": {
      "IVault": [
        68195
      ],
      "IVault2": [
        68355
      ],
      "IVaultSupervisor": [
        68572
      ],
      "MigrationCondom": [
        63381
      ],
      "Ownable": [
        54240
      ],
      "ReentrancyGuard": [
        58659
      ],
      "SafeTransferLib": [
        58993
      ]
    },
    "nodeType": "SourceUnit",
    "src": "51:3329:91",
    "nodes": [
      {
        "id": 63115,
        "nodeType": "PragmaDirective",
        "src": "51:24:91",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".21"
        ]
      },
      {
        "id": 63117,
        "nodeType": "ImportDirective",
        "src": "77:69:91",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/ReentrancyGuard.sol",
        "file": "solady/src/utils/ReentrancyGuard.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63382,
        "sourceUnit": 58660,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63116,
              "name": "ReentrancyGuard",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 58659,
              "src": "85:15:91",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63119,
        "nodeType": "ImportDirective",
        "src": "147:52:91",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/auth/Ownable.sol",
        "file": "solady/src/auth/Ownable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63382,
        "sourceUnit": 54241,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63118,
              "name": "Ownable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 54240,
              "src": "155:7:91",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63121,
        "nodeType": "ImportDirective",
        "src": "200:69:91",
        "nodes": [],
        "absolutePath": "node_modules/solady/src/utils/SafeTransferLib.sol",
        "file": "solady/src/utils/SafeTransferLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63382,
        "sourceUnit": 58994,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63120,
              "name": "SafeTransferLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 58993,
              "src": "208:15:91",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63123,
        "nodeType": "ImportDirective",
        "src": "271:47:91",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault.sol",
        "file": "./interfaces/IVault.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63382,
        "sourceUnit": 68196,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63122,
              "name": "IVault",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 68195,
              "src": "279:6:91",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63125,
        "nodeType": "ImportDirective",
        "src": "319:49:91",
        "nodes": [],
        "absolutePath": "src/interfaces/IVault2.sol",
        "file": "./interfaces/IVault2.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63382,
        "sourceUnit": 68356,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63124,
              "name": "IVault2",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 68355,
              "src": "327:7:91",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63127,
        "nodeType": "ImportDirective",
        "src": "369:67:91",
        "nodes": [],
        "absolutePath": "src/interfaces/IVaultSupervisor.sol",
        "file": "./interfaces/IVaultSupervisor.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 63382,
        "sourceUnit": 68573,
        "symbolAliases": [
          {
            "foreign": {
              "id": 63126,
              "name": "IVaultSupervisor",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 68572,
              "src": "377:16:91",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 63381,
        "nodeType": "ContractDefinition",
        "src": "438:2941:91",
        "nodes": [
          {
            "id": 63134,
            "nodeType": "VariableDeclaration",
            "src": "497:39:91",
            "nodes": [],
            "constant": false,
            "functionSelector": "7235200e",
            "mutability": "mutable",
            "name": "vaultSupervisor",
            "nameLocation": "521:15:91",
            "scope": 63381,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
              "typeString": "contract IVaultSupervisor"
            },
            "typeName": {
              "id": 63133,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 63132,
                "name": "IVaultSupervisor",
                "nameLocations": [
                  "497:16:91"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 68572,
                "src": "497:16:91"
              },
              "referencedDeclaration": 68572,
              "src": "497:16:91",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                "typeString": "contract IVaultSupervisor"
              }
            },
            "visibility": "public"
          },
          {
            "id": 63140,
            "nodeType": "VariableDeclaration",
            "src": "542:101:91",
            "nodes": [],
            "constant": false,
            "functionSelector": "0a2c13a1",
            "mutability": "mutable",
            "name": "allowlistedRoutes",
            "nameLocation": "626:17:91",
            "scope": 63381,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
              "typeString": "mapping(address => mapping(address => bool))"
            },
            "typeName": {
              "id": 63139,
              "keyName": "v1Vaults",
              "keyNameLocation": "558:8:91",
              "keyType": {
                "id": 63135,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "550:7:91",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "542:76:91",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 63138,
                "keyName": "v2Vaults",
                "keyNameLocation": "586:8:91",
                "keyType": {
                  "id": 63136,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "578:7:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "570:47:91",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueName": "isAllowlisted",
                "valueNameLocation": "603:13:91",
                "valueType": {
                  "id": 63137,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "598:4:91",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 63156,
            "nodeType": "FunctionDefinition",
            "src": "650:136:91",
            "nodes": [],
            "body": {
              "id": 63155,
              "nodeType": "Block",
              "src": "697:89:91",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 63147,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "724:3:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 63148,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "728:6:91",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "724:10:91",
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
                      "id": 63146,
                      "name": "_initializeOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54119,
                      "src": "707:16:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 63149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "707:28:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63150,
                  "nodeType": "ExpressionStatement",
                  "src": "707:28:91"
                },
                {
                  "expression": {
                    "id": 63153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 63151,
                      "name": "vaultSupervisor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63134,
                      "src": "745:15:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                        "typeString": "contract IVaultSupervisor"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 63152,
                      "name": "_vaultSupervisor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63143,
                      "src": "763:16:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                        "typeString": "contract IVaultSupervisor"
                      }
                    },
                    "src": "745:34:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                      "typeString": "contract IVaultSupervisor"
                    }
                  },
                  "id": 63154,
                  "nodeType": "ExpressionStatement",
                  "src": "745:34:91"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 63144,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63143,
                  "mutability": "mutable",
                  "name": "_vaultSupervisor",
                  "nameLocation": "679:16:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63156,
                  "src": "662:33:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                    "typeString": "contract IVaultSupervisor"
                  },
                  "typeName": {
                    "id": 63142,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63141,
                      "name": "IVaultSupervisor",
                      "nameLocations": [
                        "662:16:91"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 68572,
                      "src": "662:16:91"
                    },
                    "referencedDeclaration": 68572,
                    "src": "662:16:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                      "typeString": "contract IVaultSupervisor"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "661:35:91"
            },
            "returnParameters": {
              "id": 63145,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "697:0:91"
            },
            "scope": 63381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 63179,
            "nodeType": "FunctionDefinition",
            "src": "792:185:91",
            "nodes": [],
            "body": {
              "id": 63178,
              "nodeType": "Block",
              "src": "869:108:91",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 63171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 63165,
                          "name": "allowlistedRoutes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63140,
                          "src": "879:17:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 63168,
                        "indexExpression": {
                          "id": 63166,
                          "name": "v1Vault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63158,
                          "src": "897:7:91",
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
                        "src": "879:26:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 63169,
                      "indexExpression": {
                        "id": 63167,
                        "name": "v2Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63160,
                        "src": "906:7:91",
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
                      "src": "879:35:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 63170,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "917:4:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "879:42:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63172,
                  "nodeType": "ExpressionStatement",
                  "src": "879:42:91"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 63174,
                        "name": "v1Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63158,
                        "src": "953:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63175,
                        "name": "v2Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63160,
                        "src": "962:7:91",
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
                      "id": 63173,
                      "name": "RouteAllowlisted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63374,
                      "src": "936:16:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 63176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "936:34:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63177,
                  "nodeType": "EmitStatement",
                  "src": "931:39:91"
                }
              ]
            },
            "functionSelector": "258809e3",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 63163,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 63162,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "859:9:91"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54239,
                  "src": "859:9:91"
                },
                "nodeType": "ModifierInvocation",
                "src": "859:9:91"
              }
            ],
            "name": "allowlistRoute",
            "nameLocation": "801:14:91",
            "parameters": {
              "id": 63161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63158,
                  "mutability": "mutable",
                  "name": "v1Vault",
                  "nameLocation": "824:7:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63179,
                  "src": "816:15:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63157,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "816:7:91",
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
                  "id": 63160,
                  "mutability": "mutable",
                  "name": "v2Vault",
                  "nameLocation": "841:7:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63179,
                  "src": "833:15:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63159,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "833:7:91",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "815:34:91"
            },
            "returnParameters": {
              "id": 63164,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "869:0:91"
            },
            "scope": 63381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63202,
            "nodeType": "FunctionDefinition",
            "src": "983:184:91",
            "nodes": [],
            "body": {
              "id": 63201,
              "nodeType": "Block",
              "src": "1059:108:91",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 63194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 63188,
                          "name": "allowlistedRoutes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63140,
                          "src": "1069:17:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 63191,
                        "indexExpression": {
                          "id": 63189,
                          "name": "v1Vault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63181,
                          "src": "1087:7:91",
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
                        "src": "1069:26:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 63192,
                      "indexExpression": {
                        "id": 63190,
                        "name": "v2Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63183,
                        "src": "1096:7:91",
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
                      "src": "1069:35:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 63193,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1107:5:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1069:43:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63195,
                  "nodeType": "ExpressionStatement",
                  "src": "1069:43:91"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 63197,
                        "name": "v1Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63181,
                        "src": "1143:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63198,
                        "name": "v2Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63183,
                        "src": "1152:7:91",
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
                      "id": 63196,
                      "name": "RouteDenylisted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63380,
                      "src": "1127:15:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 63199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1127:33:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63200,
                  "nodeType": "EmitStatement",
                  "src": "1122:38:91"
                }
              ]
            },
            "functionSelector": "fadb7dc9",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 63186,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 63185,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "1049:9:91"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54239,
                  "src": "1049:9:91"
                },
                "nodeType": "ModifierInvocation",
                "src": "1049:9:91"
              }
            ],
            "name": "denylistRoute",
            "nameLocation": "992:13:91",
            "parameters": {
              "id": 63184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63181,
                  "mutability": "mutable",
                  "name": "v1Vault",
                  "nameLocation": "1014:7:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63202,
                  "src": "1006:15:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63180,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1006:7:91",
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
                  "id": 63183,
                  "mutability": "mutable",
                  "name": "v2Vault",
                  "nameLocation": "1031:7:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63202,
                  "src": "1023:15:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63182,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1023:7:91",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1005:34:91"
            },
            "returnParameters": {
              "id": 63187,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1059:0:91"
            },
            "scope": 63381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63346,
            "nodeType": "FunctionDefinition",
            "src": "1613:1381:91",
            "nodes": [],
            "body": {
              "id": 63345,
              "nodeType": "Block",
              "src": "1756:1238:91",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 63229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "1818:54:91",
                    "subExpression": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 63218,
                          "name": "allowlistedRoutes",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63140,
                          "src": "1819:17:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                            "typeString": "mapping(address => mapping(address => bool))"
                          }
                        },
                        "id": 63223,
                        "indexExpression": {
                          "arguments": [
                            {
                              "id": 63221,
                              "name": "v1Vault",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 63206,
                              "src": "1845:7:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IVault_$68195",
                                "typeString": "contract IVault"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IVault_$68195",
                                "typeString": "contract IVault"
                              }
                            ],
                            "id": 63220,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1837:7:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 63219,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1837:7:91",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 63222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1837:16:91",
                          "tryCall": false,
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
                        "src": "1819:35:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 63228,
                      "indexExpression": {
                        "arguments": [
                          {
                            "id": 63226,
                            "name": "v2Vault",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63209,
                            "src": "1863:7:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVault2_$68355",
                              "typeString": "contract IVault2"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IVault2_$68355",
                              "typeString": "contract IVault2"
                            }
                          ],
                          "id": 63225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1855:7:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 63224,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1855:7:91",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1855:16:91",
                        "tryCall": false,
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
                      "src": "1819:53:91",
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
                  "id": 63234,
                  "nodeType": "IfStatement",
                  "src": "1814:113:91",
                  "trueBody": {
                    "id": 63233,
                    "nodeType": "Block",
                    "src": "1874:53:91",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 63230,
                            "name": "RouteNotAllowlisted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63368,
                            "src": "1895:19:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 63231,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1895:21:91",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 63232,
                        "nodeType": "RevertStatement",
                        "src": "1888:28:91"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    63236
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63236,
                      "mutability": "mutable",
                      "name": "oldV1Balance",
                      "nameLocation": "1982:12:91",
                      "nodeType": "VariableDeclaration",
                      "scope": 63345,
                      "src": "1974:20:91",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 63235,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1974:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63244,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 63241,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2023:4:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MigrationCondom_$63381",
                              "typeString": "contract MigrationCondom"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MigrationCondom_$63381",
                              "typeString": "contract MigrationCondom"
                            }
                          ],
                          "id": 63240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2015:7:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 63239,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2015:7:91",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63242,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2015:13:91",
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
                      "expression": {
                        "id": 63237,
                        "name": "v1Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63206,
                        "src": "1997:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$68195",
                          "typeString": "contract IVault"
                        }
                      },
                      "id": 63238,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2005:9:91",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 50747,
                      "src": "1997:17:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 63243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1997:32:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1974:55:91"
                },
                {
                  "assignments": [
                    63246
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63246,
                      "mutability": "mutable",
                      "name": "oldV2Balance",
                      "nameLocation": "2047:12:91",
                      "nodeType": "VariableDeclaration",
                      "scope": 63345,
                      "src": "2039:20:91",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 63245,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2039:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63254,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 63251,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2088:4:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MigrationCondom_$63381",
                              "typeString": "contract MigrationCondom"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MigrationCondom_$63381",
                              "typeString": "contract MigrationCondom"
                            }
                          ],
                          "id": 63250,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2080:7:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 63249,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2080:7:91",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63252,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2080:13:91",
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
                      "expression": {
                        "id": 63247,
                        "name": "v2Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63209,
                        "src": "2062:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault2_$68355",
                          "typeString": "contract IVault2"
                        }
                      },
                      "id": 63248,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2070:9:91",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 68354,
                      "src": "2062:17:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 63253,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2062:32:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2039:55:91"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 63258,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2178:3:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 63259,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2182:6:91",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2178:10:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 63262,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2198:4:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MigrationCondom_$63381",
                              "typeString": "contract MigrationCondom"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MigrationCondom_$63381",
                              "typeString": "contract MigrationCondom"
                            }
                          ],
                          "id": 63261,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2190:7:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 63260,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2190:7:91",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63263,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2190:13:91",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63264,
                        "name": "oldShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63211,
                        "src": "2205:9:91",
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
                        "id": 63255,
                        "name": "v1Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63206,
                        "src": "2157:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$68195",
                          "typeString": "contract IVault"
                        }
                      },
                      "id": 63257,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2165:12:91",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 50789,
                      "src": "2157:20:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 63265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2157:58:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63266,
                  "nodeType": "ExpressionStatement",
                  "src": "2157:58:91"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 63272,
                            "name": "vaultSupervisor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63134,
                            "src": "2249:15:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                              "typeString": "contract IVaultSupervisor"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                              "typeString": "contract IVaultSupervisor"
                            }
                          ],
                          "id": 63271,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2241:7:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 63270,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2241:7:91",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63273,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2241:24:91",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63274,
                        "name": "oldShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63211,
                        "src": "2267:9:91",
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
                        "id": 63267,
                        "name": "v1Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63206,
                        "src": "2225:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$68195",
                          "typeString": "contract IVault"
                        }
                      },
                      "id": 63269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2233:7:91",
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 50777,
                      "src": "2225:15:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 63275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2225:52:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63276,
                  "nodeType": "ExpressionStatement",
                  "src": "2225:52:91"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63280,
                        "name": "v1Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63206,
                        "src": "2316:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$68195",
                          "typeString": "contract IVault"
                        }
                      },
                      {
                        "id": 63281,
                        "name": "oldShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63211,
                        "src": "2325:9:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IVault_$68195",
                          "typeString": "contract IVault"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 63277,
                        "name": "vaultSupervisor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63134,
                        "src": "2287:15:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                          "typeString": "contract IVaultSupervisor"
                        }
                      },
                      "id": 63279,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2303:12:91",
                      "memberName": "returnShares",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 68434,
                      "src": "2287:28:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_contract$_IVault_$68195_$_t_uint256_$returns$__$",
                        "typeString": "function (contract IVault,uint256) external"
                      }
                    },
                    "id": 63282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2287:48:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63283,
                  "nodeType": "ExpressionStatement",
                  "src": "2287:48:91"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63287,
                        "name": "v1Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63206,
                        "src": "2396:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$68195",
                          "typeString": "contract IVault"
                        }
                      },
                      {
                        "id": 63288,
                        "name": "v2Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63209,
                        "src": "2405:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault2_$68355",
                          "typeString": "contract IVault2"
                        }
                      },
                      {
                        "id": 63289,
                        "name": "oldShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63211,
                        "src": "2414:9:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63290,
                        "name": "minNewShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63213,
                        "src": "2425:12:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IVault_$68195",
                          "typeString": "contract IVault"
                        },
                        {
                          "typeIdentifier": "t_contract$_IVault2_$68355",
                          "typeString": "contract IVault2"
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
                      "expression": {
                        "id": 63284,
                        "name": "vaultSupervisor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63134,
                        "src": "2368:15:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                          "typeString": "contract IVaultSupervisor"
                        }
                      },
                      "id": 63286,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2384:11:91",
                      "memberName": "migrateToV2",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 68571,
                      "src": "2368:27:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_contract$_IVault_$68195_$_t_contract$_IVault2_$68355_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (contract IVault,contract IVault2,uint256,uint256) external"
                      }
                    },
                    "id": 63291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2368:70:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63292,
                  "nodeType": "ExpressionStatement",
                  "src": "2368:70:91"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 63298,
                            "name": "vaultSupervisor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63134,
                            "src": "2472:15:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                              "typeString": "contract IVaultSupervisor"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_IVaultSupervisor_$68572",
                              "typeString": "contract IVaultSupervisor"
                            }
                          ],
                          "id": 63297,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2464:7:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 63296,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2464:7:91",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 63299,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2464:24:91",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 63300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2490:1:91",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "expression": {
                        "id": 63293,
                        "name": "v1Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63206,
                        "src": "2448:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault_$68195",
                          "typeString": "contract IVault"
                        }
                      },
                      "id": 63295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2456:7:91",
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 50777,
                      "src": "2448:15:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 63301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2448:44:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63302,
                  "nodeType": "ExpressionStatement",
                  "src": "2448:44:91"
                },
                {
                  "assignments": [
                    63304
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63304,
                      "mutability": "mutable",
                      "name": "deltaV2Balance",
                      "nameLocation": "2609:14:91",
                      "nodeType": "VariableDeclaration",
                      "scope": 63345,
                      "src": "2601:22:91",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 63303,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2601:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 63314,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 63313,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 63309,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "2652:4:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MigrationCondom_$63381",
                                "typeString": "contract MigrationCondom"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_MigrationCondom_$63381",
                                "typeString": "contract MigrationCondom"
                              }
                            ],
                            "id": 63308,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2644:7:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 63307,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2644:7:91",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 63310,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2644:13:91",
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
                        "expression": {
                          "id": 63305,
                          "name": "v2Vault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63209,
                          "src": "2626:7:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IVault2_$68355",
                            "typeString": "contract IVault2"
                          }
                        },
                        "id": 63306,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2634:9:91",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 68354,
                        "src": "2626:17:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 63311,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2626:32:91",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 63312,
                      "name": "oldV2Balance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63246,
                      "src": "2661:12:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2626:47:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2601:72:91"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 63317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 63315,
                      "name": "deltaV2Balance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63304,
                      "src": "2688:14:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 63316,
                      "name": "minNewShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63213,
                      "src": "2705:12:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2688:29:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63322,
                  "nodeType": "IfStatement",
                  "src": "2684:77:91",
                  "trueBody": {
                    "id": 63321,
                    "nodeType": "Block",
                    "src": "2719:42:91",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 63318,
                            "name": "Slippage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63364,
                            "src": "2740:8:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 63319,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2740:10:91",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 63320,
                        "nodeType": "RevertStatement",
                        "src": "2733:17:91"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 63331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 63323,
                      "name": "oldV1Balance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63236,
                      "src": "2775:12:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 63328,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "2817:4:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MigrationCondom_$63381",
                                "typeString": "contract MigrationCondom"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_MigrationCondom_$63381",
                                "typeString": "contract MigrationCondom"
                              }
                            ],
                            "id": 63327,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2809:7:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 63326,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2809:7:91",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 63329,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2809:13:91",
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
                        "expression": {
                          "id": 63324,
                          "name": "v1Vault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63206,
                          "src": "2791:7:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IVault_$68195",
                            "typeString": "contract IVault"
                          }
                        },
                        "id": 63325,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2799:9:91",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 50747,
                        "src": "2791:17:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 63330,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2791:32:91",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2775:48:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 63336,
                  "nodeType": "IfStatement",
                  "src": "2771:117:91",
                  "trueBody": {
                    "id": 63335,
                    "nodeType": "Block",
                    "src": "2825:63:91",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 63332,
                            "name": "OldSharesDeltaBalShouldBeZero",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63366,
                            "src": "2846:29:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 63333,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2846:31:91",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 63334,
                        "nodeType": "RevertStatement",
                        "src": "2839:38:91"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 63340,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2960:3:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 63341,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2964:6:91",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2960:10:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 63342,
                        "name": "deltaV2Balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63304,
                        "src": "2972:14:91",
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
                        "id": 63337,
                        "name": "v2Vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63209,
                        "src": "2943:7:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IVault2_$68355",
                          "typeString": "contract IVault2"
                        }
                      },
                      "id": 63339,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2951:8:91",
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 68285,
                      "src": "2943:16:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256) external"
                      }
                    },
                    "id": 63343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2943:44:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 63344,
                  "nodeType": "ExpressionStatement",
                  "src": "2943:44:91"
                }
              ]
            },
            "documentation": {
              "id": 63203,
              "nodeType": "StructuredDocumentation",
              "src": "1173:435:91",
              "text": " @notice migrates shares from v1 vaults to v2 vaults\n @dev user needs to hold the shares of the vault (using `gimmieShares`).\n @dev user needs to approve oldShares amount of shares to this vault\n @param v1Vault from vault address\n @param v2Vault to vault address\n @param oldShares amount of shares from vault1 to migrate\n @param minNewShares min amount of shares minted from vault2"
            },
            "functionSelector": "b595adb7",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 63216,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 63215,
                  "name": "nonReentrant",
                  "nameLocations": [
                    "1739:12:91"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 58652,
                  "src": "1739:12:91"
                },
                "nodeType": "ModifierInvocation",
                "src": "1739:12:91"
              }
            ],
            "name": "migrateToV2Safely",
            "nameLocation": "1622:17:91",
            "parameters": {
              "id": 63214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63206,
                  "mutability": "mutable",
                  "name": "v1Vault",
                  "nameLocation": "1647:7:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63346,
                  "src": "1640:14:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault_$68195",
                    "typeString": "contract IVault"
                  },
                  "typeName": {
                    "id": 63205,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63204,
                      "name": "IVault",
                      "nameLocations": [
                        "1640:6:91"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 68195,
                      "src": "1640:6:91"
                    },
                    "referencedDeclaration": 68195,
                    "src": "1640:6:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault_$68195",
                      "typeString": "contract IVault"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63209,
                  "mutability": "mutable",
                  "name": "v2Vault",
                  "nameLocation": "1664:7:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63346,
                  "src": "1656:15:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IVault2_$68355",
                    "typeString": "contract IVault2"
                  },
                  "typeName": {
                    "id": 63208,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 63207,
                      "name": "IVault2",
                      "nameLocations": [
                        "1656:7:91"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 68355,
                      "src": "1656:7:91"
                    },
                    "referencedDeclaration": 68355,
                    "src": "1656:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IVault2_$68355",
                      "typeString": "contract IVault2"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63211,
                  "mutability": "mutable",
                  "name": "oldShares",
                  "nameLocation": "1681:9:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63346,
                  "src": "1673:17:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63210,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1673:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63213,
                  "mutability": "mutable",
                  "name": "minNewShares",
                  "nameLocation": "1700:12:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63346,
                  "src": "1692:20:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 63212,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1692:7:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1639:74:91"
            },
            "returnParameters": {
              "id": 63217,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1756:0:91"
            },
            "scope": 63381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63362,
            "nodeType": "FunctionDefinition",
            "src": "3000:122:91",
            "nodes": [],
            "body": {
              "id": 63361,
              "nodeType": "Block",
              "src": "3055:67:91",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 63356,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63348,
                        "src": "3097:5:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 63357,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "3104:3:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 63358,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3108:6:91",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3104:10:91",
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
                      "expression": {
                        "id": 63353,
                        "name": "SafeTransferLib",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58993,
                        "src": "3065:15:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_SafeTransferLib_$58993_$",
                          "typeString": "type(library SafeTransferLib)"
                        }
                      },
                      "id": 63355,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3081:15:91",
                      "memberName": "safeTransferAll",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 58852,
                      "src": "3065:31:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) returns (uint256)"
                      }
                    },
                    "id": 63359,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3065:50:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 63360,
                  "nodeType": "ExpressionStatement",
                  "src": "3065:50:91"
                }
              ]
            },
            "functionSelector": "ccec3716",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 63351,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 63350,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "3045:9:91"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54239,
                  "src": "3045:9:91"
                },
                "nodeType": "ModifierInvocation",
                "src": "3045:9:91"
              }
            ],
            "name": "rescueERC20",
            "nameLocation": "3009:11:91",
            "parameters": {
              "id": 63349,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63348,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "3029:5:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63362,
                  "src": "3021:13:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63347,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3021:7:91",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3020:15:91"
            },
            "returnParameters": {
              "id": 63352,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3055:0:91"
            },
            "scope": 63381,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 63364,
            "nodeType": "ErrorDefinition",
            "src": "3128:17:91",
            "nodes": [],
            "errorSelector": "7dd37f70",
            "name": "Slippage",
            "nameLocation": "3134:8:91",
            "parameters": {
              "id": 63363,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3142:2:91"
            }
          },
          {
            "id": 63366,
            "nodeType": "ErrorDefinition",
            "src": "3150:38:91",
            "nodes": [],
            "errorSelector": "8ff38986",
            "name": "OldSharesDeltaBalShouldBeZero",
            "nameLocation": "3156:29:91",
            "parameters": {
              "id": 63365,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3185:2:91"
            }
          },
          {
            "id": 63368,
            "nodeType": "ErrorDefinition",
            "src": "3193:28:91",
            "nodes": [],
            "errorSelector": "4c7fc9d4",
            "name": "RouteNotAllowlisted",
            "nameLocation": "3199:19:91",
            "parameters": {
              "id": 63367,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3218:2:91"
            }
          },
          {
            "id": 63374,
            "nodeType": "EventDefinition",
            "src": "3227:73:91",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "084a8e4c2306b1f2ef0fd0efdcbc6b46bd221573d051860a6cfed028dc11ba4f",
            "name": "RouteAllowlisted",
            "nameLocation": "3233:16:91",
            "parameters": {
              "id": 63373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63370,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "v1Vault",
                  "nameLocation": "3266:7:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63374,
                  "src": "3250:23:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63369,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3250:7:91",
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
                  "id": 63372,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "v2Vault",
                  "nameLocation": "3291:7:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63374,
                  "src": "3275:23:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63371,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3275:7:91",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3249:50:91"
            }
          },
          {
            "id": 63380,
            "nodeType": "EventDefinition",
            "src": "3305:72:91",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "faeaced9d52427c71ab728ec45fca1b81e54f5ad8886aa2a8f2c42234b2e677f",
            "name": "RouteDenylisted",
            "nameLocation": "3311:15:91",
            "parameters": {
              "id": 63379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 63376,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "v1Vault",
                  "nameLocation": "3343:7:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63380,
                  "src": "3327:23:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63375,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3327:7:91",
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
                  "id": 63378,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "v2Vault",
                  "nameLocation": "3368:7:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 63380,
                  "src": "3352:23:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63377,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3352:7:91",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3326:50:91"
            }
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 63128,
              "name": "ReentrancyGuard",
              "nameLocations": [
                "466:15:91"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 58659,
              "src": "466:15:91"
            },
            "id": 63129,
            "nodeType": "InheritanceSpecifier",
            "src": "466:15:91"
          },
          {
            "baseName": {
              "id": 63130,
              "name": "Ownable",
              "nameLocations": [
                "483:7:91"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 54240,
              "src": "483:7:91"
            },
            "id": 63131,
            "nodeType": "InheritanceSpecifier",
            "src": "483:7:91"
          }
        ],
        "canonicalName": "MigrationCondom",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          63381,
          54240,
          58659
        ],
        "name": "MigrationCondom",
        "nameLocation": "447:15:91",
        "scope": 63382,
        "usedErrors": [
          54052,
          54055,
          54058,
          54061,
          58641,
          63364,
          63366,
          63368
        ],
        "usedEvents": [
          54068,
          54073,
          54078,
          63374,
          63380
        ]
      }
    ],
    "license": "SEE LICENSE IN LICENSE"
  },
  "id": 91
} as const;