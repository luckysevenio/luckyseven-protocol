import { expect } from './utils/chai-setup';
import { LuckySeven } from '@typechain/LuckySeven';
import { luckySevenPRNG, Parameters } from '../luckyseven.prng';

const hre = require('hardhat');
const { ethers, deployments } = hre;

type Fixture = {
  signer1;
  signer2;
  signer3;
  luckyseven: LuckySeven;
};

const setup = deployments.createFixture(async () => {
  const [signer1, signer2, signer3] = await ethers.getSigners();
  await deployments.fixture('main-suite');
  const luckyseven: LuckySeven = await ethers.getContract('LuckySeven');
  return {
    signer1,
    signer2,
    signer3,
    luckyseven,
  };
});

describe('LuckySeven', function () {
  let fixture: Fixture;

  before(async () => {
    fixture = await setup();
  });

  it('Should calculate the random number properly', async function () {
    const { luckyseven } = fixture;
    const parameters: Parameters = {
      b: 1,
      n: 5,
      mu: 20,
      p: 50,
      i: 0,
      j: 70,
    };
    const onchain = await luckyseven.getLuckySevenNumber(
      parameters.b,
      parameters.n,
      parameters.mu,
      parameters.p,
      parameters.i,
      parameters.j
    );
    const offchain = luckySevenPRNG(parameters);
    console.log(onchain.toString());
    console.log(offchain.toString());
    expect(onchain).to.be.equal(offchain);
  });
});
