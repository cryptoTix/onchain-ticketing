// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

import "@openzeppelin-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin-upgradeable/utils/cryptography/EIP712Upgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

import "solady/src/utils/SafeTransferLib.sol";
import "solady/src/utils/ReentrancyGuard.sol";

import "./entities/MasterLib.sol";
import "./entities/PurchaseLib.sol";
import "./entities/TicketLib.sol";

import "./interface/Constants.sol";

contract Master is ERC721Upgradeable, EIP712Upgradeable, OwnableUpgradeable, ReentrancyGuard {
    using MasterLib for MasterLib.State;
    using MasterLib for MasterLib.CancelPolicyMetadata;
    using TicketLib for TicketLib.State;

    // keccak256(abi.encode(uint256(keccak256("master.state")) - 1)) & ~bytes32(uint256(0xff));
    bytes32 internal constant MASTER_LIB_STORAGE_SLOT =
        0xa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100;

    // keccak256(abi.encode("iam.the.owner"));
    bytes32 internal constant USER_VERIFICATION_MESSAGE_HASH =
        0xa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100;

    constructor() {
        _disableInitializers();
    }

    function initialize(
        address _owner,
        address verifier,
        uint96 ttl,
        MasterLib.CancelPolicyMetadata memory defaultCancelPolicy
    ) external initializer {
        __Ownable_init(_owner);
        __ERC721_init("", "");
        __EIP712_init("PurchaseData", "1.0.0");
        _self().init(verifier, ttl, defaultCancelPolicy);
    }

    function purchase(address ticketOwner, PurchaseLib.PurchaseData memory purchaseData, bytes memory signature)
        external
        nonReentrant
        returns (uint256 ticketId)
    {
        _verifyPurchaseData(purchaseData, signature);
        ticketId = uint256(keccak256(abi.encode(purchaseData.ticketData)));
        _ticketLibStatePtr(ticketId).init(purchaseData.ticketData);
        _safeMint(ticketOwner, ticketId, "");
        SafeTransferLib.safeTransferFrom(
            purchaseData.ticketData.asset, msg.sender, address(this), purchaseData.ticketData.amount
        );
    }

    function redeem(uint256[] memory ticketIds, bytes[] memory signatures) external nonReentrant {
        if (ticketIds.length == 0) revert ZeroLength();
        if (ticketIds.length != signatures.length) revert InvalidInput();
        for (uint256 i = 0; i < signatures.length; i++) {
            if (!isValidRedeemSignature(ticketIds[i], signatures[i])) revert SignerNotOwner();
        }
        for (uint256 i = 0; i < signatures.length; i++) {
            _burn(ticketIds[i]);
            TicketLib.State storage ticketState = _ticketLibStatePtr(ticketIds[i]);
            _self().addAssetsForWithdrawal(ticketState.asset, ticketState.amount);
        }
    }

    /**
     * @dev seatIdsToCancel must be in increasing sorted order.
     * @param ticketId tokenId of the ticket.
     * @param seatIdsToCancel seatIds to cancel.
     */
    function cancelPartialTicket(uint256 ticketId, uint128[] memory seatIdsToCancel)
        external
        onlyTicketOwner(ticketId)
    {
        if (seatIdsToCancel.length == 0) revert ZeroLength();
        TicketLib.State storage ticketData = _ticketLibStatePtr(ticketId);
        ticketData.validateTicketCancel();
        uint256 seatIdsIndex = 0;
        uint256 selectedTicketsCost = 0;
        for (uint256 i = 0; i < ticketData.seats.length; i++) {
            if (seatIdsToCancel[seatIdsIndex] == ticketData.seats[i].seatId) {
                selectedTicketsCost += ticketData.seats[i].price;
                ticketData.seats[i] = ticketData.seats[ticketData.seats.length - 1];
                ticketData.seats.pop();
                seatIdsIndex++;
            }
        }
        if (seatIdsIndex != seatIdsToCancel.length) revert InvalidInput();
        if (ticketData.seats.length == 0) {
            // when all seats are cancelled
            _cancel(ticketId);
        } else {
            ticketData.amount -= selectedTicketsCost;
            uint256 assetsToReturn = _computePostCancellationAmt(ticketData, selectedTicketsCost);
            _self().addAssetsForWithdrawal(ticketData.asset, selectedTicketsCost - assetsToReturn);
            SafeTransferLib.safeTransfer(ticketData.asset, _ownerOf(ticketId), assetsToReturn);
        }
    }

    function cancel(uint256 ticketId) external onlyTicketOwner(ticketId) {
        _cancel(ticketId);
    }

    function withdrawAssets(address[] memory assets, address benefactor) external onlyOwner {
        _self().withdrawAssets(assets, benefactor);
    }

    function changeDefaultCancelPolicy(MasterLib.CancelPolicyMetadata memory cancelPolicy) external onlyOwner {
        _self().setDefaultCancelPolicy(cancelPolicy);
    }

    function addCancelPolicy(uint256 cancelPolicyId, MasterLib.CancelPolicyMetadata memory cancelPolicy)
        external
        onlyOwner
    {
        _self().addCancelPolicy(cancelPolicyId, cancelPolicy);
    }

    function setCancelPolicyIdForShowId(uint256 showId, uint256 policyId) external onlyOwner {
        _self().setCancelPolicyIdForShowId(showId, policyId);
    }

    /* ================ VIEW FUNCTIONS ================ */

    /**
     * Fetches hash of the purchase data to be signed message.
     * @param purchaseData purchase data to be signed.
     */
    function getPurchaseDataSignatureHash(PurchaseLib.PurchaseData memory purchaseData) public view returns (bytes32) {
        return _hashTypedDataV4(keccak256(abi.encode(purchaseData)));
    }

    /**
     * Fetches hash of the message to be signed by token owner.
     */
    function getUserVerificationSignatureHash(uint256 tokenId) public view returns (bytes32) {
        return _hashTypedDataV4(keccak256(abi.encode(tokenId, USER_VERIFICATION_MESSAGE_HASH)));
    }

    function isValidRedeemSignature(uint256 tokenId, bytes memory signature) public view returns (bool) {
        return SignatureChecker.isValidSignatureNow(
            _ownerOf(tokenId), getUserVerificationSignatureHash(tokenId), signature
        );
    }

    function _computePostCancellationAmt(TicketLib.State storage ticketData, uint256 amount)
        internal
        view
        returns (uint256)
    {
        MasterLib.CancelPolicyMetadata storage policy = _self().fetchPolicyForShowId(ticketData.showId);
        uint256 leftTime = ticketData.showTime - block.timestamp;
        uint256 index = 0;
        while (index < policy.policyMetadata.length && policy.policyMetadata[index].durationLeft >= leftTime) {
            index++;
            continue;
        }
        if (index == policy.policyMetadata.length) {
            index--;
        }
        return Math.mulDiv(amount, policy.policyMetadata[index].percentageWad, Constants.HUNDRED_WAD);
    }

    function _verifyPurchaseData(PurchaseLib.PurchaseData memory purchaseData, bytes memory signature) internal view {
        MasterLib.State storage self = _self();
        self.validatePurchaseData(purchaseData);
        bytes32 purchaseDatahash = _hashTypedDataV4(keccak256(abi.encode(purchaseData)));
        if (!SignatureChecker.isValidSignatureNow(self.verifier, purchaseDatahash, signature)) {
            revert InvalidPurchaseData();
        }
    }

    function _cancel(uint256 ticketId) internal {
        address ticketOwner = _ownerOf(ticketId);
        TicketLib.State storage ticketData = _ticketLibStatePtr(ticketId);
        uint256 assetsToReturn = _computePostCancellationAmt(ticketData, ticketData.amount);
        _self().addAssetsForWithdrawal(ticketData.asset, ticketData.amount - assetsToReturn);
        _burn(ticketId);
        ticketData.remove();
        SafeTransferLib.safeTransfer(ticketData.asset, ticketOwner, assetsToReturn);
    }

    function _self() internal pure returns (MasterLib.State storage $) {
        assembly {
            $.slot := MASTER_LIB_STORAGE_SLOT
        }
    }

    function _ticketLibStatePtr(uint256 ticketId) internal pure returns (TicketLib.State storage $) {
        bytes32 slot = keccak256(abi.encodePacked(Constants.TICKET_STORAGE_PREFIX, ticketId));
        assembly {
            $.slot := slot
        }
    }

    /* ================ MODIFIER ================ */
    modifier onlyTicketOwner(uint256 tokenId) {
        if (_requireOwned(tokenId) != msg.sender) revert CancellerNotOwner();
        _;
    }
}
