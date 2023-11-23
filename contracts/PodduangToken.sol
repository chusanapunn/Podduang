// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract Podduang is ERC20{
    constructor(uint256 initialSupply) ERC20("podduang", "POD") {
        _mint(msg.sender, initialSupply);
    }
}
