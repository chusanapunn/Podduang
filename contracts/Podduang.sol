// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.1;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract Podduang is ERC721{

    constructor(string memory name, string memory symbol)
    ERC721(name,symbol){

    }
    // uint public unlockTime;
    // address payable public owner;

    // event Withdrawal(uint amount, uint when);

    // constructor(uint _unlockTime) payable {
    //     require(
    //         block.timestamp < _unlockTime,
    //         "Unlock time should be in the future"
    //     );

    //     unlockTime = _unlockTime;
    //     owner = payable(msg.sender);
    // }

    // function withdraw() public {
    //     // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
    //     // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

    //     require(block.timestamp >= unlockTime, "You can't withdraw yet");
    //     require(msg.sender == owner, "You aren't the owner");

    //     emit Withdrawal(address(this).balance, block.timestamp);

    //     owner.transfer(address(this).balance);
    // }
}
