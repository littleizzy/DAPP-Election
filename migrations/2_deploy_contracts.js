var Election = artifacts.require("./Election.sol");
module.exports = function(deployer) {
  deployer.deploy(Election);
};

/*
 - artifacts: contract abstraction that is specific to truffle
    - returns Election artifact that represents our smart contract
    - truffle then can expose it, so we can interact with it

*/
