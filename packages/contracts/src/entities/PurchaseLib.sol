// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {TicketLib} from "./TicketLib.sol";

library PurchaseLib {
    struct PurchaseData {
        TicketLib.State ticketData;
        uint256 timestamp;
        uint256 nonce;
    }
}
