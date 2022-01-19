require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1vD2Lec3zH9xEs5AK8uk6o6YDSsQ0_Fv',
      accounts: ['e259decff43b787bc150276bafb5d448542f0df39081375e11bc3e640de0cecc'],
    },
  },
};