require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.24",
  networks: {
    fhevmTestnet: {
      url: "https://devnet.zama.ai",
      accounts: [] // we will add private key next
    }
  }
};

