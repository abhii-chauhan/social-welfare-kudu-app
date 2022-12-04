require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/ZKECqgIP97ayS95zf8Ccre3GqvHYGeU6',
      accounts: ['cf25b5ec4017f26cf49ed79bc5251bb9a102f6e1e33b61ee4a9d017a2f75f0a5'],
    }
  },
};