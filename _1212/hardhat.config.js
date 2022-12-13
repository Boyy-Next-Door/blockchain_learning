require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async () => {
//   const accounts = await ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { GEORLI_RPC_URL, GEORLI_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;
module.exports = {
  defaultNetwork: "hardhat", // npx hardhat run ./scripts/deploy.js --network hardhat
  networks: {
    georli: {
      url: GEORLI_RPC_URL,
      // accounts: [`0x${GEORLI_PRIVATE_KEY}`],
      accounts: [
        "54a6bfb08bec14a540f87941bc81f49ffe1f844c07db3237e670da703c6f8c6b",
      ],
      chainId: 5, // georli testnet
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      // accounts: []
    },
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY, // npx hardhat verify --nextwork georli DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
  },
  gasReporter: {
    // enabled: true,
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: "COINMARKETCAP_API_KEY", // 取决于部署在哪个链上 需要找到对应的汇率API 这样在报告里可以将gas开销转换成指定货币的开销
  },
};
