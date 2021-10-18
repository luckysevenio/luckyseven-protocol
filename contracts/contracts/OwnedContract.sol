//SPDX-License-Identifier: Unlicense
pragma solidity >=0.5.0 <0.7.0;

contract OwnedContract {
    address public owner;
    string public message = 'hey';

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, 'Not owner');
        _;
    }

    function setOwner(address newOwner_) public onlyOwner {
        owner = newOwner_;
    }

    function setMessage(string memory message_) public onlyOwner {
        message = message_;
    }
}
