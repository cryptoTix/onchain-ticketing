// // SPDX-License-Identifier: SEE LICENSE IN LICENSE
// pragma solidity ^0.8.25;

// import {TicketLib} from "./entities/TicketLib.sol";
// import {ITicket} from "./interface/ITicket.sol";

// abstract contract Ticket is ITicket {
//     using TicketLib for TicketLib.State;

//     // keccak256(abi.encode(uint256(keccak256("ticket.storage")) - 1)) & ~bytes32(uint256(0xff));
//     bytes32 internal constant STORAGE_SLOT = 0xa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100;

//     function initializer() external {
//         _self().init(msg.sender);
//     }

//     function purchase(address user, address token, uint256 amount) external {
//         _self().purchase(user, token, amount);
//     }

//     function redeem() external {
//         _self().redeem();
//     }

//     function cancel() external {
//         _self().cancel();
//     }

//     function _self() internal pure returns (TicketLib.State storage $) {
//         assembly {
//             $.slot := STORAGE_SLOT
//         }
//     }
// }
