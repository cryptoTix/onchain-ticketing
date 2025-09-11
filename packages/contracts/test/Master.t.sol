pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";
import "solady/src/utils/LibClone.sol";

import {Master} from "../src/Master.sol";
import {PurchaseLib} from "../src/entities/PurchaseLib.sol";
import {MasterLib} from "../src/entities/MasterLib.sol";
import {TicketLib} from "../src/entities/TicketLib.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";

import {ERC20Test} from "./TestERC20.sol";

contract MasterTest is Test {
    uint256 ticketId;

    function setUp() public {}

    // function test_Name_ShouldDoSomething_WhenSomethingHappens() public {

    // assertFalse(SignatureChecker.isValidSignatureNow(, purchaseDatahash, signature))
    // }
    // function test_Name_ShouldDoSomething_WhenSomethingHappens() public {
    //     vm.createSelectFork("http://127.0.0.1:8545");
    //     bytes32 addr = vm.load(0xB1fC11F03b084FfF8daE95fA08e8D69ad2547Ec1, bytes32(0xa850f9cb190d34eca968aeee8c951b4765e62744d7c13847a3ad392ad8649100));
    //     // assertEq(addr, bytes32(0));
    //      // Initialization values
    //     address owner = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8; // Set in .env or as an environment variable
    //     address verifier = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266; // Set in .env or as an environment variable
    //     uint96 ttl = 3600; // Time-to-live in seconds

    //     // Define the CancelPolicyMetadata structure
    //     MasterLib.CancelPolicyMetadata memory defaultCancelPolicy;
    //     defaultCancelPolicy.policyMetadata = new MasterLib.TimePercentage[](2);

    //     // Populate the TimePercentage array
    //     defaultCancelPolicy.policyMetadata[0] = MasterLib.TimePercentage({
    //         durationLeft: 3600,       // 1 hour
    //         percentageWad: 5e17      // 50% in Wad
    //     });
    //     defaultCancelPolicy.policyMetadata[1] = MasterLib.TimePercentage({
    //         durationLeft: 1800,       // 30 minutes
    //         percentageWad: 1e18      // 100% in Wad
    //     });

    //     // Master master = Master(LibClone.clone(address(new Master())));
    //     Master master = Master(0xB1fC11F03b084FfF8daE95fA08e8D69ad2547Ec1);
    //     // master.initialize(owner, verifier, ttl, defaultCancelPolicy);
    //     (
    //         bytes1 fields,
    //         string memory name,
    //         string memory version,
    //         uint256 chainId,
    //         address verifyingContract,
    //         bytes32 salt,
    //         uint256[] memory extensions
    //     ) = master.eip712Domain();
    //     // assertEq(address(1), master.owner());
    //     // assertEq(0, chainId);
    //     // assertEq(name, "--");
    //     ERC20Test asset = ERC20Test(0x7306a649B451AE08781108445425Bd4E8AcF1E00);

    //     TicketLib.SeatData[] memory seats = new TicketLib.SeatData[](1);
    //     seats[0].seatId = uint128(0);
    //     seats[0].price = uint128(5440000);
    //     // seats[1].seatId = uint128(1);
    //     // seats[1].price = uint128(1000000);
    //     PurchaseLib.PurchaseData memory purchaseData;
    //     purchaseData.timestamp = 1746978816;
    //     purchaseData.nonce = 0;
    //     purchaseData.ticketData = TicketLib.State({
    //         asset : address(0x7306a649B451AE08781108445425Bd4E8AcF1E00),
    //         showTime: uint96(1746978816),
    //         amount: uint256(5440000),
    //         showId: uint256(0),
    //         seats : seats
    //     });
    //     bytes32 dataHash = master.getPurchaseDataSignatureHash(purchaseData);
    //     // assertEq(dataHash, bytes32(0xb3bc121b87eb409175f5d5f1daa572660f6e073c3e4b94382498f9841da2125e));
    //     (uint8 v, bytes32 r, bytes32 s) = vm.sign(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80, 0x1cb2e41d3ff7ac9248fc670fd28065a7a6c8729bc3daaac40ad0e2ea02e7805e);
    //     bytes memory signature = abi.encodePacked(r, s ,v);
    //     assertEq(signature, "hex0xcf8c0eafaf9db9b9d20f00983d4a7298c24b2c7e5d69d53c7353eede9c89edc604ea20c7dbbc6e67cc184353754fc5e4918be347040cf197c5347e0d202a8cca1c");
    //     address user = vm.randomAddress();
    //     asset.mint(user, 1000000000);
    //     vm.startPrank(user);
    //     asset.approve(address(master), 40000000);
    //     ticketId = master.purchase(user, purchaseData, signature);
    //     assertEq(master.balanceOf(user), 1);
    //     // ticketId = master.purchase(user, purchaseData, signature);
    //     // assertEq(master.balanceOf(user), 1);
    // }
}
