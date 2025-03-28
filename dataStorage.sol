// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SetAndGet {
    string dataStorage;

    function setDataStorage(string memory _dataStorage) public {
        dataStorage = _dataStorage;
    }

    function getDataStorage() public view returns (string memory) {
        return dataStorage;
    }
}