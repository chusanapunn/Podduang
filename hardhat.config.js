require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
  compilers: [
    {
      version: "0.8.1"
    },
    {
      version: "0.8.20"
    },
  ]
},
  networks: {
    localganache:{
      url: process.env.ALCHEMY_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  // etherscan: {
    // apiKey: process.env.API_KEY
  // }

};
