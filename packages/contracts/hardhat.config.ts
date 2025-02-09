require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-foundry");
require('@typechain/hardhat')
require('@nomicfoundation/hardhat-ethers')

module.exports = {
  solidity: {
    version: "0.8.25",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    },
  },
  typechain: {
    outDir: "../../typechain-types", // Adjust based on your desired output directory
    target: "ethers-v5",
  },
  paths: {
    sources: "./src", // Adjust if your contracts are in a subdirectory like `src/`
    artifacts: "./artifacts",
  },
};
