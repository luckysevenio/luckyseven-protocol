import { CEther } from '@typechain/CEther';
import { rinkeby } from '../addresses';
import { parseEther } from '@ethersproject/units';
import { CErc20 } from '@typechain/CErc20';
import { ERC20 } from '@typechain/ERC20';

require('dotenv').config();
const Compound = require('@compound-finance/compound-js'); // in Node.js
const hre = require('hardhat');
const { ethers } = hre;
const { TESTNET_MNEMONIC: mnemonic, RINKEBY_URL: url } = process.env;

describe('Compound', function () {
  this.timeout('200000');
  let signer1, signer2, signer3;
  before(async () => {
    [signer1, signer2, signer3] = await ethers.getSigners();
  });

  it('Should supply ETH to compound properly', async function () {
    // @ts-ignore
    // const compound = new Compound(url, { mnemonic });
    const cETH: CEther = await ethers.getContractAt(
      'CEther',
      rinkeby.compound.cETH
    );
    const tx = await cETH.mint({ value: parseEther('1') });
    await tx.wait();
  });

  it('Should supply DAI to compound properly', async function () {
    // @ts-ignore
    // const compound = new Compound(url, { mnemonic });
    const cDAI: CErc20 = await ethers.getContractAt(
      'CErc20',
      rinkeby.compound.cDAI
    );
    const dai: ERC20 = await ethers.getContractAt('ERC20', rinkeby.erc20.DAI);
    const allowance = parseEther('1');
    let tx = await dai.approve(cDAI.address, allowance);
    await tx.wait();
    tx = await cDAI.mint(allowance);
    await tx.wait();
  });

  it('should request address data to SDK properly', async function () {
    // @ts-ignore
    const compound = new Compound(url, { mnemonic });
    console.log(signer1.address);
    const account = await Compound.api.({
      addresses: signer1.address,
      network: 'rinkeby',
    });
    console.log(account);
  });
});
