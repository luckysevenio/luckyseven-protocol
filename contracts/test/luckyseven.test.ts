import { expect } from './utils/chai-setup';

const hre = require('hardhat');
const { ethers, deployments } = hre;

type Fixture = {
  signer1;
  signer2;
  signer3;
};

const setup = deployments.createFixture(async () => {
  const [signer1, signer2, signer3] = await ethers.getSigners();
  await deployments.fixture('main-suite');
  return {
    signer1,
    signer2,
    signer3,
  };
});

describe('GnosisSafe', function () {
  let fixture: Fixture;

  before(async () => {
    fixture = await setup();
  });

  it('Should create a Safe properly', async function () {
    const { signer1, signer2 } = fixture;

    const owners = [signer1.address, signer2.address];
    const threshold = 1;
    expect(true);
  });
});
