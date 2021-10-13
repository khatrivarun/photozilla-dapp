const hre = require('hardhat');

async function main() {
  const Image = await hre.ethers.getContractFactory('Image');
  const image = await Image.deploy();

  await image.deployed();

  console.log('Image deployed to:', image.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
