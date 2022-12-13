// SPDX-License-Identifier:MIT
pragma solidity 0.8.8;

contract SimpleStorage {
  address private owner;

  constructor() {
    owner = msg.sender;
  }

  struct Person {
    string name;
    uint256 favorateNumber;
    bool exist;
  }

  mapping(string => Person) personList;
  int256 mapSize = 0;

  function retrieve(string memory name) public view returns (uint256) {
    return personList[name].favorateNumber;
  }

  function addPerson(string memory name, uint256 number) public {
    if (personList[name].exist == false) {
      personList[name] = Person(name, number, true);
      mapSize += 1;
    } else {
      personList[name].favorateNumber = number;
    }
  }

  function count() public view returns (int256) {
    return mapSize;
  }
}
