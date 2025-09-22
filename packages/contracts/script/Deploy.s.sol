// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "forge-std/Script.sol";
import "../src/Master.sol";
import "../src/entities/MasterLib.sol";
import "solady/src/utils/LibClone.sol";
import {ERC20Test} from "../test/TestERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "../src/interfaces/Constants.sol";

contract DeployMaster is Script {
    address verifier = 0xE4d839Da6E218Da4Be99aDcDe57f9b3049A55964; // Set in .env or as an environment variable
    function run() external {
        // Initialization values
        address owner = 0x0223f8A8260C4f8e84ab10ABAAf799371ADF1d6B; // Set in .env or as an environment variable
        uint96 ttl = 15 * 60; // Time-to-live in seconds

        // Define the CancelPolicyMetadata structure
        MasterLib.CancelPolicyMetadata memory defaultCancelPolicy;
        defaultCancelPolicy.policyMetadata = new MasterLib.TimePercentage[](3);

        // Populate the TimePercentage array
        defaultCancelPolicy.policyMetadata[0] = MasterLib.TimePercentage({
            durationLeft: 4 * 60 * 60, // 4 hours
            percentageWad: uint128(20 * Constants.ONE_WAD) // 20% in Wad
        });
        defaultCancelPolicy.policyMetadata[1] = MasterLib.TimePercentage({
            durationLeft: 2 * 24 * 60 * 60, // 2 days
            percentageWad: uint128(50 * Constants.ONE_WAD) // 50% in Wad
        });
        defaultCancelPolicy.policyMetadata[2] = MasterLib.TimePercentage({
            durationLeft: 4 * 24 * 60 * 60, // 4 days
            percentageWad: uint128(80 * Constants.ONE_WAD) // 80% in Wad
        });

        // Deploy the contract
        vm.startBroadcast(); // Begin broadcasting transactions
        Master master = Master(LibClone.clone(address(new Master())));
        master.initialize(owner, verifier, ttl, defaultCancelPolicy);

        ERC20Test usdc = new ERC20Test();
        usdc.mint(msg.sender, 100000000000000000000);
        ERC20Test usdt = new ERC20Test();
        usdt.mint(msg.sender, 100000000000000000000);
        vm.stopBroadcast(); // Stop broadcasting
        // Log the deployed contract address
        console.log("Master contract deployed at:", address(master));
        console.log("Deployed usdc at:", address(usdc));
        console.log("Deployed usdt token at:", address(usdt));
    }

    function check() external {
        vm.startBroadcast(msg.sender);
        Master master = Master(0xDe17fF229E6a9EA25F0C255735258aA07E12739c);
        // master.initialize(owner, verifier, ttl, defaultCancelPolicy);
        // (
        //     bytes1 fields,
        //     string memory name,
        //     string memory version,
        //     uint256 chainId,
        //     address verifyingContract,
        //     bytes32 salt,
        //     uint256[] memory extensions
        // ) = master.eip712Domain();
        // assertEq(address(1), master.owner());
        // assertEq(0, chainId);
        // assertEq(name, "--");
        ERC20Test asset = ERC20Test(0x41a78AA83bb0274b2CC60c31534E8500AD571eaA);

        TicketLib.SeatData[] memory seats = new TicketLib.SeatData[](1);
        seats[0].seatId = uint128(6110403);
        seats[0].price = uint128(5000000);
        // seats[1].seatId = uint128(1);
        // seats[1].price = uint128(1000000);
        PurchaseLib.PurchaseData memory purchaseData;
        purchaseData.nonce = master.getNonce(0x51bF0f742fe35da5844CD92956931b4c43a1C433);
        purchaseData.ticketData = TicketLib.State({
            asset: address(0x41a78AA83bb0274b2CC60c31534E8500AD571eaA),
            showTime: uint96(1758433500),
            amount: uint256(5000000),
            showId: uint96(202),
            seats: seats,
            owner: 0x51bF0f742fe35da5844CD92956931b4c43a1C433,
            originTimestamp : 1758411695
        });
        bytes32 dataHash = master.getPurchaseDataSignatureHash(purchaseData.ticketData);
        dataHash = 0x595e362cd8a17f3528c60b3716a979ef34cfa27d31fada27e13d0b8fdcd7701b;
        require(purchaseData.nonce == master.getNonce(msg.sender), "Unequal nonce");
        // require(dataHash == bytes32(0xfc15c017157e21b1bae953c29d08e203992065b14681808dae5ea4fd091c3465), "unequal hash");
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(
            0x90b76989dfe209eb12f3026e488c6ff3ddfb343dcecda291b2fdd369bb060399,
            dataHash            
        );
        // console.logBytes32(master.getPurchaseDataSignatureHash(purchaseData));
        bytes memory signature = abi.encodePacked(r, s, v);
        // console.logBytes("0xd7dac72d5ab1cd9a124311c99cf77e1bf4f685b244c53d240c281de695663e2619c54e4e9424f8212506e2f9e23543563aa9043f5373de94ff8dcbf920e3b6b41c");
        // require(SignatureChecker.isValidSignatureNow(msg.sender, ), "invaldid sign");
        // require(ecrecover(dataHash, v, r, s) == msg.sender, "Failed recovery");
        // ;
        console.logBytes(signature);

        // ecrecover();
        // (address recovered, ECDSA.RecoverError err,) = ECDSA.tryRecover(dataHash, signature);
        // require(recovered == 0xE4d839Da6E218Da4Be99aDcDe57f9b3049A55964, "Uneqal address");
        // require(err == ECDSA.RecoverError.NoError, "Not equal status");
        // require (SignatureChecker.isValidSignatureNow(msg.sender, dataHash, signature), "Invaid sign");
        // require(signature == hex"", "Invalid signs");
        // 0x97438d27aef9f26fdadb618fe14fdd3020fa0d3b2f8f8c2be2cb4981d83c52f6, 
        // signature = "0xa4b8be48653f5f92f89fd2462577f0e505195ea2bc186e05a989338068be53b80cdb36ccaa6d4236afcd23a6969ff0cd5c3bb40656fd9512a58d544e15f96e081c";
        // require(keccak256(signature) == keccak256("0x5ba68780b07051ebc6f9a125cdd185983faa81784ab6ee22e8322f5c0f18716a19cdc32df42ef4712b68ae612ce99f08b6477f7add61e1454a721fc6bc030b7e1c"), "unequal sign");
        // address user = vm.randomAddress();
        // asset.mint(user, 1000000000);
        // vm.startBroadcast(msg.sender);
        // asset.approve(address(master), purchaseData.ticketData.amount);
        abi.decode("0x00000000000000000000000051bf0f742fe35da5844cd92956931b4c43a1c433000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041a78aa83bb0274b2cc60c31534e8500ad571eaa0000000000000000000000000000000000000000000000000000000068d1414800000000000000000000000051bf0f742fe35da5844cd92956931b4c43a1c43300000000000000000000000000000000000000003239000000000000000000000000000000000000000000000000000000000000000000000000000068cfc41d00000000000000000000000000000000000000000000000000000000004c4b4000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000001383535373334343000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004c4b400000000000000000000000000000000000000000000000000000000000000041a73b423fff75cf52f190e54ad6e8f74724efe5628ce457b815ab486d62fe0e0f2627154c4aea6221054646c4807d7dcaf8f65b62720489519becb5cfafba5e171b00000000000000000000000000000000000000000000000000000000000000", (address, PurchaseLib.PurchaseData, bytes));
        // address(master).call("0x5b2ae33100000000000000000000000051bf0f742fe35da5844cd92956931b4c43a1c433000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041a78aa83bb0274b2cc60c31534e8500ad571eaa0000000000000000000000000000000000000000000000000000000068d1414800000000000000000000000051bf0f742fe35da5844cd92956931b4c43a1c43300000000000000000000000000000000000000003239000000000000000000000000000000000000000000000000000000000000000000000000000068cfc41d00000000000000000000000000000000000000000000000000000000004c4b4000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000001383535373334343000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004c4b400000000000000000000000000000000000000000000000000000000000000041a73b423fff75cf52f190e54ad6e8f74724efe5628ce457b815ab486d62fe0e0f2627154c4aea6221054646c4807d7dcaf8f65b62720489519becb5cfafba5e171b00000000000000000000000000000000000000000000000000000000000000");
        // (SignatureChecker.isValidSignatureNow(verifier, dataHash, signature));
        // assertEq(master.balanceOf(user), 1);
    }
    function check2() external {
        Master mster = Master(0x49131cccE712f95c88eDC494e593439CA66B726b);
        uint256 nftId = 30482825714384717971476741949781467631403121089631890935593969504339601790946;
        require(mster.ownerOf(nftId) == msg.sender, "Not expected Owner");
        vm.broadcast(msg.sender);
        bytes32 res = vm.load(address(mster), keccak256(abi.encodePacked(Constants.TICKET_STORAGE_PREFIX, nftId)));
        require(uint160(uint256(res)) == uint160(0x54943ECbF9A92086C91500Ed8ca4A6AB018D8e30), "Failed slot");
        mster.cancel(nftId);
    }
    //*/
}
