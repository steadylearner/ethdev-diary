pragma solidity ^0.5.0;

// It will become a similar to todo app at start/ if I would edit it more.
contract Storage {
  uint public setCount = 0;
  uint data;

  function set(uint _x) public {
    setCount++;
    data = _x;
  }

  function get() public view returns (uint) {
    return data;
  }
}
