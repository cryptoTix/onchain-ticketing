// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import {TicketLib} from "./TicketLib.sol";
import {Constants} from "../interfaces/Constants.sol";

library PurchaseLib {
    using TicketLib for TicketLib.State;

    struct PurchaseData {
        TicketLib.State ticketData;
        uint256 nonce;
    }

    function hash(PurchaseData memory purchaseData) internal view returns (bytes32) {
        return keccak256(
            abi.encode(
                Constants.PURCHASE_DATA_TYPEHASH,
                purchaseData.ticketData.hash(),
                purchaseData.nonce
            )
        );
    }
}
