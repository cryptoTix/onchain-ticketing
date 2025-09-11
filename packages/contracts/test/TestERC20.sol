pragma solidity ^0.8.25;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Test is ERC20 {
    constructor() ERC20("temp", "temp") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function decimals() override public pure returns (uint8) {
        return 6;
    }
}
