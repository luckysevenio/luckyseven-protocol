//SPDX-License-Identifier: Unlicense
pragma solidity 0.7.0;

import './LuckySevenPRNG.sol';
import './StringUtils.sol';
import 'hardhat/console.sol';

contract LuckySeven {
    modifier checkP(uint256 p) {
        require(p <= 76, 'p too big');
        _;
    }

    function getLuckySevenNumber(
        uint256 b,
        uint256 n,
        uint256 mu,
        uint256 p,
        uint256 i,
        uint256 j
    ) external pure checkP(p) returns (uint256) {
        return LuckySevenPRNG.prng(b, n, mu, p, i, j);
    }

    function getLuckySevenNumberFromBlockHash(uint256 p)
        external
        view
        returns (uint256)
    {
        return uint256(blockhash(block.number - 1));
    }
}
