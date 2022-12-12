require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { GEORLI_RPC_URL, GEORLI_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;
module.exports = {
  defaultNetwork: "georli", // npx hardhat run ./scripts/deploy.js --network hardhat
  networks: {
    georli: {
      url: GEORLI_RPC_URL,
      // accounts: [`0x${GEORLI_PRIVATE_KEY}`],
      accounts: [
        "54a6bfb08bec14a540f87941bc81f49ffe1f844c07db3237e670da703c6f8c6b",
      ],
      chainId: 5, // georli testnet
    },
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY, // npx hardhat verify --nextwork georli DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
  },
};
