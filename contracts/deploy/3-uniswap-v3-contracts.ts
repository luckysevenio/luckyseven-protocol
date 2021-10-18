import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const deploy: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  await deploy('UniswapV3Factory', {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: true,
  });
};
deploy.tags = ['main-suite'];

export default deploy;
