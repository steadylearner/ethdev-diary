var User = artifacts.require("User");

module.exports = function(deployer) {
  deployer.deploy(User);
};