// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "../interface/Errors.sol";
import {PurchaseLib} from "./PurchaseLib.sol";

library TicketLib {
    struct State {
        address asset;
        uint96 showTime;
        uint256 amount;
        uint256 showId;
        SeatData[] seats; // expect sorted seatIds
    }

    struct SeatData {
        uint128 seatId;
        uint128 price;
    }

    function init(State storage self, State memory ticketData) internal {
        self.asset = ticketData.asset;
        self.amount = ticketData.amount;
        self.showId = ticketData.showId;
        self.showTime = ticketData.showTime;
        for (uint256 i = 0; i < ticketData.seats.length; i++) {
            self.seats.push(SeatData(ticketData.seats[i].seatId, ticketData.seats[i].price));
        }
        // emit valid purchase successful
    }

    function remove(State storage self) internal {
        delete self.asset;
        delete self.showTime;
        delete self.amount;
        delete self.showId;
        delete self.seats;
    }

    function validateTicketCancel(State storage self) internal view {
        if (self.showTime < block.timestamp) revert ShowtimePassed();
    }

    function validateTicketRedeem(State storage self) internal view {
        if (self.showTime > block.timestamp) revert ShowtimeNotPassed();
    }
}
