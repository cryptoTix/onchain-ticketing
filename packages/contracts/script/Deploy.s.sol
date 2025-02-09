// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "forge-std/Script.sol";
import "../src/Master.sol";
import "../src/entities/MasterLib.sol";
import "solady/src/utils/LibClone.sol";
contract DeployMaster is Script {
    function run() external {
        // Initialization values
        address owner = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8; // Set in .env or as an environment variable
        address verifier = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266; // Set in .env or as an environment variable
        uint96 ttl = 3600; // Time-to-live in seconds

        // Define the CancelPolicyMetadata structure
        MasterLib.CancelPolicyMetadata memory defaultCancelPolicy;
        defaultCancelPolicy.policyMetadata = new MasterLib.TimePercentage[](2);

        // Populate the TimePercentage array
        defaultCancelPolicy.policyMetadata[0] = MasterLib.TimePercentage({
            durationLeft: 3600,       // 1 hour
            percentageWad: 5e17      // 50% in Wad
        });
        defaultCancelPolicy.policyMetadata[1] = MasterLib.TimePercentage({
            durationLeft: 1800,       // 30 minutes
            percentageWad: 1e18      // 100% in Wad
        });

        // Deploy the contract
        vm.startBroadcast(); // Begin broadcasting transactions
        Master master = Master(LibClone.clone(address(new Master())));
        master.initialize(owner, verifier, ttl, defaultCancelPolicy);
        vm.stopBroadcast(); // Stop broadcasting

        // Log the deployed contract address
        console.log("Master contract deployed at:", address(master));
    }
}
