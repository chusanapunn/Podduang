require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
// import('hardhat/config').HardhatUserConfig
/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "Prints the list of accounts", async(taaskArgs, hre) =>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
});
module.exports = {
  solidity: "0.8.20",
  networks: {
    localganache: {
      url: process.env.PROVIDER_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia:{
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apikey: process.env.ETHERSCAN_KEY,
  }
};
