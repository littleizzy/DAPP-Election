var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

/*
- Number the files under migrations folder, so truffle knows the order to run them in
*/
