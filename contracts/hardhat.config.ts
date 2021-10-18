require('dotenv').config();

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import '@typechain/hardhat';
import 'hardhat-deploy';
import './tasks';

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [{ version: '0.5.17' }, { version: '0.7.6' }],
  },
  defaultNetwork: process.env.DEFAULT_NETWORK,
  networks: {
    localhost: {
      chainId: 1337,
      accounts: {
        mnemonic:
          'myth like bonus scare over problem client lizard pioneer submit female collect',
      },
      url: 'http://localhost:8545',
    },
    hardhat: {
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
      allowUnlimitedContractSize: true,
      saveDeployments: true,
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: {
        mnemonic: process.env.TESTNET_MNEMONIC,
      },
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  typechain: {
    alwaysGenerateOverloads: false,
  },
  namedAccounts: {
    deployer: 0,
    notDeployer: 1,
  },
  paths: {
    deploy: 'deploy',
    deployments: 'deployments',
    imports: 'imports',
  },
};
