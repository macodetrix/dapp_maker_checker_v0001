var MakerChecker = artifacts.require("./MakerChecker.sol");

module.exports = function(deployer) {
  deployer.deploy(MakerChecker);
}
