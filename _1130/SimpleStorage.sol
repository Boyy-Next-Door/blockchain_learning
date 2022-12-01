// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;// any version above 0.8.7 could run this

// any version between 0.8.7 and 0.9.0 could run this
// pragma solidity >=0.8.7 <0.9.0; 

contract SmipleStorage {
    // boolean, uint, int, address, bytes
    bool hasFavoriteNumber = true;
    // public: visible externally and internally (creates a getter function for storage/state variables)
    uint public favoriteNumber = 123;
    // private:  only visible in the current contract
    uint128 private favorateNumber1 = 123;
    // internal: only visible internally
    int internal favoriteNumber2 = 123;
    address myAddress = 0xDdAA82D507729e339A4B1cdB75D9608eEC99cF37;
    bytes32 favoriteBytes = "cat";   // string will automatically convert to bytes
    // bytes33 favoriteBytes_33_compile_fail = "cat";   // uint256 is the longgest uint  since 1 uint = 4 bytes  so bytes could be at maximum to bytes32
    
    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function storeWithViewCalled(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
        getFavorateNumber1();
    }

    // external: only visible externally (only for functions)
    // view and pure functions, when called alone, don't spend gas
    // they both can't modify any variables in the contract
    // difference is that "view functions" could read state variables in the contract
    // but "pure functions" could only read local variables 
    function  getFavorateNumber1() public view returns(uint128) {
        return favorateNumber1;
    }

    function getFavorateNumber2() public view returns(int) {
        return favoriteNumber2;
    }
    
    function getFavorateNumber2WithViewCalled() public view returns(int) {
        getFavorateNumber1();
        return favoriteNumber2;
    }

    struct Person {
        uint256 favoriteNumber;
        string name;
    }

    Person public person = Person({
        favoriteNumber: 99424,
        name: 'georgayang'
    });

    Person[] public people;
    mapping(string =>uint256) public nameToNumberMap;

    function addPerson(uint256 _favoriteNumber, string memory name) public {
        people.push(Person({
            favoriteNumber: _favoriteNumber,
            name:name
        }));
        nameToNumberMap[name] = _favoriteNumber;
    }

    // calldata, memory, storage
    // calldata & memory --- temperary exists during the function call
    // difference is that calldata couldn't be modifided in the function, but storage can.
    // only variables whoes type is array、struct and map need "calldata" or "memory" definition.
}
// 0xd9145CCE52D386f254917e481eB44e9943F39138
