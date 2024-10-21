// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "../interface/Errors.sol";
import {PurchaseLib} from "./PurchaseLib.sol";

library TicketLib {
    struct State {
        address asset;
        uint256 amount;
        uint256 showId;
        uint256 seatId;
    }

    function purchase(State storage self, State memory ticketData) internal {
        self.asset = ticketData.asset;
        self.amount = ticketData.amount;
        self.showId = ticketData.showId;
        self.seatId = ticketData.seatId;
    }
}
