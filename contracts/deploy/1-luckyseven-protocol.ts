import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const deploy: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const luckysevenLibrary = await deploy('LuckySevenPRNG', {
    from: deployer,
    log: true,
  });

  await deploy('LuckySeven', {
    from: deployer,
    log: true,
    libraries: {
      LuckySevenPRNG: luckysevenLibrary.address,
    },
  });
};
deploy.tags = ['main-suite'];

export default deploy;
