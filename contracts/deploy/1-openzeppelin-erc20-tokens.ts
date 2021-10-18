import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { parseUnits } from '@ethersproject/units';
import { ERC20PresetMinterPauser } from '@typechain/ERC20PresetMinterPauser';

const deploy: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deployer, notDeployer } = await getNamedAccounts();
  const { deploy } = deployments;

  await deploy('DAI', {
    contract: 'ERC20PresetMinterPauser',
    from: deployer,
    args: ['DAI Token', 'DAI'],
    log: true,
  });

  await deploy('AAVE', {
    contract: 'ERC20PresetMinterPauser',
    from: deployer,
    args: ['AAVE Token', 'AAVE'],
    log: true,
  });

  const initialSupply = parseUnits('1000');
  const dai: ERC20PresetMinterPauser = await ethers.getContract('DAI');
  const aave: ERC20PresetMinterPauser = await ethers.getContract('AAVE');
  await dai.mint(deployer, initialSupply);
  await aave.mint(deployer, initialSupply);
  await dai.mint(notDeployer, initialSupply);
  await aave.mint(notDeployer, initialSupply);
};
deploy.tags = ['main-suite'];

export default deploy;
