const Podduang = artifacts.require("Podduang");

module.exports = function(deployer) {
  deployer.deploy(Podduang,10000000);
};
