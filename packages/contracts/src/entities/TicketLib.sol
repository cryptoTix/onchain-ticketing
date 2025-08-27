// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "../interface/Errors.sol";
import {PurchaseLib} from "./PurchaseLib.sol";
import {Constants} from "../interface/Constants.sol";

library TicketLib {

    struct State {
        address asset;
        uint96 showTime;
        address owner;
        uint96 showId;
        uint256 originTimestamp;
        uint256 amount;
        SeatData[] seats; // expect sorted seatIds
    }

    // add this in a format of row, col
    struct SeatData {
        uint256 seatId; 
        uint256 price;
    }

    function hash(SeatData memory seatData) internal view returns (bytes32) {
        return keccak256(abi.encode(Constants.SEATDATA_TYPEHASH, seatData.seatId, seatData.price));
    }

    function hash(State memory state) internal view returns (bytes32) {
        bytes32[] memory seatHashes = new bytes32[](state.seats.length);
        for (uint256 i = 0; i < state.seats.length; i++) {
            seatHashes[i] = hash(state.seats[i]);
        }
        return keccak256(
            abi.encode(
                Constants.TICKETDATA_TYPEHASH,
                state.asset,
                state.showTime,
                state.owner,
                state.showId,
                state.originTimestamp,
                state.amount,
                keccak256(abi.encodePacked(seatHashes))
            )
        );
    }

    function init(State storage self, State memory ticketData) internal {
        self.asset = ticketData.asset;
        self.amount = ticketData.amount;
        self.owner = ticketData.owner;
        self.originTimestamp = ticketData.originTimestamp;
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
        delete self.owner;
        delete self.originTimestamp;
    }

    function validateTicketCancel(State storage self) internal view {
        if (self.showTime < block.timestamp) revert ShowtimePassed();
    }

    function validateTicketRedeem(State storage self) internal view {
        if (self.showTime > block.timestamp) revert ShowtimeNotPassed();
    }
}
