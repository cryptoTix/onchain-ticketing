// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

library Constants {
    // // keccak256(abi.encode(uint256(keccak256("ticket.state")) - 1)) & ~bytes32(uint256(0xff));
    bytes32 public constant TICKET_STORAGE_PREFIX = 0xa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649101;

    uint256 public constant DEFAULT_POLICY_ID = 1;

    uint256 public constant ONE_WAD = 1e18;

    uint256 public constant HUNDRED_WAD = 100 * ONE_WAD;
}
