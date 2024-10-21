// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";

import "solady/src/utils/SafeTransferLib.sol";
import "solady/src/utils/ReentrancyGuard.sol";

import "./entities/MasterLib.sol";
import "./entities/PurchaseLib.sol";
import "./entities/TicketLib.sol";

import "./interface/Constants.sol";

contract Master is ERC1155Upgradeable, EIP712Upgradeable, OwnableUpgradeable, ReentrancyGuard {
    using MasterLib for MasterLib.State;
    using TicketLib for TicketLib.State;

    // keccak256(abi.encode(uint256(keccak256("master.state")) - 1)) & ~bytes32(uint256(0xff));
    bytes32 internal constant MASTER_LIB_STORAGE_SLOT =
        0xa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100;

    constructor() {
        _disableInitializers();
    }

    function initialize(address _owner, address verifier, uint96 ttl) external initializer {
        __Ownable_init(_owner);
        __ERC1155_init("");
        __EIP712_init("PurchaseData", "1.0.0");
        _self().init(verifier, ttl);
    }

    function purchase(address ticketOwner, PurchaseLib.PurchaseData memory purchaseData, bytes memory signature)
        external
        nonReentrant
        returns (uint256[] memory tokenIds)
    {
        _verifyPurchaseData(purchaseData, signature);
        tokenIds = new uint256[](purchaseData.ticketData.length);
        uint256[] memory values = new uint256[](purchaseData.ticketData.length);

        uint256 totalAmount = 0;
        for (uint256 i = 0; i < purchaseData.ticketData.length; i++) {
            tokenIds[i] = uint256(keccak256(abi.encode(purchaseData.ticketData[i])));
            ticketLibStatePtr(bytes32(tokenIds[i])).purchase(purchaseData.ticketData[i]);
            totalAmount += purchaseData.ticketData[i].amount;
        }
        _mintBatch(ticketOwner, tokenIds, values, "");
        SafeTransferLib.safeTransferFrom(purchaseData.ticketData[0].asset, msg.sender, address(this), totalAmount);
    }

    function _verifyPurchaseData(PurchaseLib.PurchaseData memory purchaseData, bytes memory signature) internal view {
        MasterLib.State storage self = _self();
        if (purchaseData.ticketData.length == 0) revert ZeroLength();
        if (block.timestamp > purchaseData.timestamp + self.ttl) revert StalePurchaseData();
        if (purchaseData.nonce <= self.nonce) revert AlreadyUsedData();
        if (!self.allowlistedAssets[purchaseData.ticketData[0].asset]) revert NotAllowlistedAsset(); // check for first as all are same
        for (uint256 i = 1; i < purchaseData.ticketData.length; i++) {
            if (
                purchaseData.ticketData[i].asset == address(0)
                    || purchaseData.ticketData[i].asset != purchaseData.ticketData[i - 1].asset
            ) {
                revert InvalidAsset();
            }
        }
        bytes32 purchaseDatahash = _hashTypedDataV4(keccak256(abi.encode(purchaseData)));
        if (!SignatureChecker.isValidSignatureNow(self.verifier, purchaseDatahash, signature)) {
            revert InvalidPurchaseData();
        }
    }

    function _self() internal pure returns (MasterLib.State storage $) {
        assembly {
            $.slot := MASTER_LIB_STORAGE_SLOT
        }
    }

    function ticketLibStatePtr(bytes32 ticketId) internal pure returns (TicketLib.State storage $) {
        bytes32 slot = keccak256(abi.encodePacked(Constants.TICKET_STORAGE_PREFIX, ticketId));
        assembly {
            $.slot := slot
        }
    }
}
