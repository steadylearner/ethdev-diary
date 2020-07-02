// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Ownable {
    address public owner = msg.sender;

    modifier onlyOwner()
    {
        require(
            msg.sender == owner,
            "Only the owner of the contract can use this."
        );
        _;
    }
}