// imports
const { ethers, run, network } = require("hardhat");
// async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");

  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();

  // where's the private key?
  // where's the rpc url?
  console.log(`Deployed contract to : ${simpleStorage.address}`);

  console.log(network.config);
  if (network.config === 5 && prcess.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }
}

async function verify(contractAddress, args) {
  console.log(`Verifying contract...`);
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    console.log(`Verifying with error: ${e.stack}`);
  }
}

// main

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
  });
