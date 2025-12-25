// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@fhevm/solidity/lib/FHE.sol";

contract FHECounter {
    euint32 private counter;

    constructor() {
        counter = FHE.asEuint32(0);
    }

    function increment(euint32 value) external {
        counter = FHE.add(counter, value);
    }

    function getCounter() external view returns (euint32) {
        return counter;
    }
}

