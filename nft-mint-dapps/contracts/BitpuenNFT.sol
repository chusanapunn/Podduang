// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BitpuenNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenURI;
    
    address payable public withdrawWallet;

    mapping(address=> uint256) public walletMints;

    constructor(address initialOwner) payable ERC721('BitpuenNFT','BPN'){
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
    }
    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner{
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenURI(string calldata baseTokenURI_) external onlyOwner{
        baseTokenURI = baseTokenURI_;
    }

    function tokenURI(uint256 tokenID_) public view override returns (string memory) {
        require(_exists(tokenID_),"Nonexistent Token");
        // return bytes(baseTokenURI).length > 0 ? string(abi.encodePacked(baseTokenURI,tokenID_.toString()));
        return string(abi.encodePacked(baseTokenURI, Strings.toString(tokenID_),".json"));
    }

    function withdraw() external onlyOwner {
        (bool success,) =withdrawWallet.call{value: address(this).balance}('');
        require(success,"withdraw failed");
    }

    function mint(uint256 quantity_) public payable{
        require(isPublicMintEnabled,"Minting still in private");
        require(msg.value == quantity_ *mintPrice, "Wrong mint value");
        require(totalSupply +quantity_<=maxSupply, "Sold out");
        require(walletMints[msg.sender]+quantity_<=maxPerWallet,"Token Exceed max wallet");

        for (uint256 i=0; i < quantity_; i++){ // MINT FUNCTION
            uint256 newTokenID=totalSupply+1;
            totalSupply++;
            _safeMint(msg.sender,newTokenID);
        }
    }
}