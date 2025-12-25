const hre = require("hardhat");

async function main() {
  const FHECounter = await hre.ethers.getContractFactory("FHECounter");
  const counter = await FHECounter.deploy();

  await counter.deployed();

  console.log("FHECounter deployed to:", counter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

