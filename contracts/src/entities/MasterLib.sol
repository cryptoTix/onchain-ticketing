// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";
import "solady/src/utils/SafeTransferLib.sol";

import "./PurchaseLib.sol";

import "../interface/Errors.sol";
library MasterLib {
    using EnumerableMap for EnumerableMap.AddressToUintMap;

    struct State {
        address verifier;
        uint96 ttl;
        address benefactor;
        uint256 nonce;
        mapping(address => bool) allowlistedAssets;
        EnumerableMap.AddressToUintMap withdrawableAssets;
        mapping(uint256 showId => uint256 policyId) showIdToPolicyIdMap;
        mapping(uint256 policyId => CancelPolicyMetadata policy) policyMap;
        CancelPolicyMetadata defaultCancelPolicy;
    }

    struct CancelPolicyMetadata {
        TimePercentage[] policyMetadata;
    }

    struct TimePercentage {
        uint128 durationLeft;
        uint128 percentageWad;
    }

    function init(State storage self, address _verifier, uint96 _ttl, CancelPolicyMetadata memory cancelPolicy)
        internal
    {
        self.verifier = _verifier;
        self.ttl = _ttl;
        setDefaultCancelPolicy(self, cancelPolicy);
    }

    function setDefaultCancelPolicy(State storage self, CancelPolicyMetadata memory cancelPolicy) internal {
        for (uint256 i = 0; i < cancelPolicy.policyMetadata.length; i++) {
            self.defaultCancelPolicy.policyMetadata.push(
                TimePercentage(
                    cancelPolicy.policyMetadata[i].durationLeft, cancelPolicy.policyMetadata[i].percentageWad
                )
            );
        }
    }

    function addCancelPolicy(State storage self, uint256 policyId, CancelPolicyMetadata memory cancelPolicy) internal {
        for (uint256 i = 0; i < cancelPolicy.policyMetadata.length; i++) {
            self.policyMap[policyId].policyMetadata.push(
                TimePercentage(
                    cancelPolicy.policyMetadata[i].durationLeft, cancelPolicy.policyMetadata[i].percentageWad
                )
            );
        }
    }

    function setCancelPolicyIdForShowId(State storage self, uint256 showId, uint256 policyId) internal {
        self.showIdToPolicyIdMap[showId] = policyId;
    }

    function fetchPolicyForShowId(State storage self, uint256 showId)
        internal
        view
        returns (CancelPolicyMetadata storage)
    {
        uint256 policyId = self.showIdToPolicyIdMap[showId];
        return (policyId == 0 ? self.defaultCancelPolicy : self.policyMap[policyId]);
    }

    function addAssetsForWithdrawal(State storage self, address asset, uint256 amount) internal {
        (, uint256 currentBal) = self.withdrawableAssets.tryGet(asset);
        currentBal += amount;
        self.withdrawableAssets.set(asset, currentBal);
    }

    function withdrawAssets(State storage self, address[] memory assets, address benefactor) internal {
        for (uint256 i = 0; i < assets.length; i++) {
            (, uint256 withdrawableTokens) = self.withdrawableAssets.tryGet(assets[i]);
            if (withdrawableTokens > 0) {
                SafeTransferLib.safeTransfer(assets[i], benefactor, withdrawableTokens);
            }
        }
    }


    function validatePurchaseData(State storage self, PurchaseLib.PurchaseData memory purchaseData) internal view {
        if (purchaseData.ticketData.seats.length == 0) revert ZeroLength();
        if (block.timestamp > purchaseData.timestamp + self.ttl) revert StalePurchaseData();
        if (purchaseData.nonce <= self.nonce) revert AlreadyUsedData();
        if (!self.allowlistedAssets[purchaseData.ticketData.asset]) revert NotAllowlistedAsset(); // check for first as all are same
        uint256 localSum = purchaseData.ticketData.seats[0].price;
        for (uint i = 1; i < purchaseData.ticketData.seats.length; i++) {
            if (purchaseData.ticketData.seats[i].seatId <= purchaseData.ticketData.seats[i-1].seatId) revert UnsortedSeatsInput();
            localSum += purchaseData.ticketData.seats[i].price;
        }
        if (localSum != purchaseData.ticketData.amount) revert InvalidAmount();
    }
}
