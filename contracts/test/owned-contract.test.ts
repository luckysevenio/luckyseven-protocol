const hre = require('hardhat');

import { OwnedContract } from '../typechain';
import { expect } from './utils/chai-setup';
const { ethers } = require('hardhat');

describe('OwnedContract', function () {
  before(async () => {
    await hre.deployments.fixture();
  });

  it('Should change the owner properly', async function () {
    const [signer1, signer2] = await ethers.getSigners();
    const ownedContract: OwnedContract = await ethers.getContract(
      'OwnedContract'
    );
    const owner = await ownedContract.owner();
    expect(owner).to.equal(signer1.address);
    await ownedContract.setOwner(signer2.address);
    expect(await ownedContract.owner()).to.equal(signer2.address);
    // Try changing owner with old owner and revert
    expect(ownedContract.setOwner(signer2.address)).to.be.reverted;
    // Try changing owner with new owner
    await ownedContract.connect(signer2).setOwner(signer1.address);
    expect(await ownedContract.owner()).to.equal(signer1.address);
  });
});
