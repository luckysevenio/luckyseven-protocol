import { expect } from './utils/chai-setup';
import { LuckySeven } from '@typechain/LuckySeven';
import { luckySevenPRNG, Parameters } from '../luckyseven.prng';
import { BigNumber } from 'ethers';

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

  it('Should calculate the random number properly onchain and offchain', async function () {
    const { luckyseven } = fixture;
    const parameters: Parameters = {
      b: '1',
      n: '5',
      mu: '20',
      p: '20',
      i: '0',
      j: '70',
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
    expect(onchain).to.be.equal(offchain);
    await luckyseven.getLuckySevenNumberFromBlockHash(1);
  });

  it('Should calculate the random number properly onchain with the blockhash', async function () {
    const { luckyseven } = fixture;
    const parameters: Parameters = {
      b: '1',
      n: '5',
      mu: '20',
      p: '20',
      i: '0',
      j: '70',
    };
    const blockhash = await luckyseven.getLuckySevenNumberFromBlockHash(
      parameters.p
    );
    console.log(blockhash.toString());
    parameters.b = blockhash.toString().slice(0, 12);
    parameters.n = blockhash.toString().slice(12, 14);
    parameters.mu = blockhash.toString().slice(14, 24);
    parameters.p = blockhash.toString().slice(24, 30);
    parameters.i = blockhash.toString().slice(26, 30);
    const offchain = luckySevenPRNG(parameters);
  });
});
