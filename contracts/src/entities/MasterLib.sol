// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.25;

library MasterLib {
    struct State {
        address verifier;
        uint96 ttl;
        uint256 nonce;
        mapping(address => bool) allowlistedAssets;
    }

    function init(State storage self, address _verifier, uint96 _ttl) internal {
        self.verifier = _verifier;
        self.ttl = _ttl;
    }
}
