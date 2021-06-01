const AgrowChainStorage = artifacts.require("AgrowChainStorage");


module.exports = async function(deployer) {
 
    //Deploy AgrowChainStorage
    await deployer.deploy(AgrowChainStorage);
    const agrowChainStorage = await AgrowChainStorage.deployed()
  
};
