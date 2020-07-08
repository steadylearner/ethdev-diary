//SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

// There is a version relevant problem to use this.
// Should read truffle documenation and sol compiler etc.

// $yarn add @openzeppelin/contracts --dev
// https://docs.openzeppelin.com/learn/developing-smart-contracts
// yarn add solc@0.6.0 --dev
// import "@openzeppelin/contracts/access/Ownable.sol";

import "../contracts/Ownable.sol";

// It should allow only the owner of the contract can reset counter to 0.
contract Counter is Ownable {
  int private number;

  event numberChanged(int newNumber);

  function reset() public onlyOwner {
    number = 0;
    emit numberChanged(number);
  }

  function up() public {
    number++;
    emit numberChanged(number);
  }

  function down() public {
    number--;
    emit numberChanged(number);
  }

  function retrieve() public view returns (int) {
    return number;
  }
}

