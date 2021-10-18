//SPDX-License-Identifier: Unlicense
pragma solidity 0.7.0;

import './LuckySevenPRNG.sol';

contract LuckySeven {
    function getLuckySevenNumber(
        uint256 b,
        uint256 n,
        uint256 mu,
        uint256 p,
        uint256 i,
        uint256 j
    ) external pure returns (uint256) {
        require(p <= 76, 'p too big');
        return LuckySevenPRNG.prng(b, n, mu, p, i, j);
    }
}
