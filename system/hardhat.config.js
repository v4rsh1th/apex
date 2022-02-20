require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/DV364kGMFiYZsr2Z0uJO6ddbaqit9TA4",
      accounts: ["749275829bca8f9c18a7d4aeb69acfca3f9e661d4c50288ec9676ee03b0078cf"],
    },
  },
};