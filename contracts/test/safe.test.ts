import { expect } from './utils/chai-setup';
import Safe, {
  ContractNetworksConfig,
  EthersAdapter,
} from '@gnosis.pm/safe-core-sdk';
import { MultiSend } from '@typechain/MultiSend';
import { GnosisSafe } from '@typechain/GnosisSafe';
import { GnosisSafeProxyFactory } from '@typechain/GnosisSafeProxyFactory';
import { getSafeWithOwners } from './utils/setupContracts';
import { OwnedContract } from '@typechain/OwnedContract';
import { waitSafeTxReceipt } from './utils/transactions';

const hre = require('hardhat');
const { ethers, deployments } = hre;

type Fixture = {
  multiSend: MultiSend;
  gnosisSafe: GnosisSafe;
  safeProxyFactory: GnosisSafeProxyFactory;
  signer1;
  signer2;
  signer3;
  ethAdapter: EthersAdapter;
  contractNetworks: ContractNetworksConfig;
};

const setup = deployments.createFixture(async () => {
  const [signer1, signer2, signer3] = await ethers.getSigners();
  await deployments.fixture('main-suite');
  const gnosisSafe: GnosisSafe = await ethers.getContract('GnosisSafe');
  const multiSend: MultiSend = await ethers.getContract('MultiSend');
  const safeProxyFactory: GnosisSafeProxyFactory = await ethers.getContract(
    'GnosisSafeProxyFactory'
  );
  const ethAdapter = new EthersAdapter({
    ethers,
    signer: signer1,
  });
  return {
    multiSend,
    gnosisSafe,
    safeProxyFactory,
    signer1,
    signer2,
    signer3,
    ethAdapter,
    contractNetworks: {
      [hre.network.config.chainId]: {
        multiSendAddress: multiSend.address,
        safeMasterCopyAddress: gnosisSafe.address,
        safeProxyFactoryAddress: safeProxyFactory.address,
      },
    },
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

    const safe = await getSafeWithOwners(owners, threshold);
    expect(safe.address).to.be.properAddress;
  });

  it('Should change the OwnedContract state from the safe', async function () {
    const { signer1, signer2, ethAdapter, contractNetworks } = fixture;
    const ownedContract: OwnedContract = await ethers.getContract(
      'OwnedContract'
    );
    let owner = await ownedContract.owner();
    expect(owner).to.be.equal(signer1.address);
    const owners = [signer1.address, signer2.address];
    const threshold = 1;

    const safe = await getSafeWithOwners(owners, threshold);
    await ownedContract.setOwner(safe.address);
    owner = await ownedContract.owner();
    expect(owner).to.be.equal(safe.address);
    expect(ownedContract.setOwner(safe.address)).to.be.revertedWith(
      'Not owner'
    );

    const safeSDK1 = await Safe.create({
      safeAddress: safe.address,
      ethAdapter,
      contractNetworks,
    });

    // set message by using the Safe execution
    let message = await ownedContract.message();
    expect(message).to.be.equal('hey');
    const newMessage = "ho, let's go";
    const { data } = await ownedContract.populateTransaction.setMessage(
      newMessage
    );
    const tx = await safeSDK1.createTransaction({
      to: ownedContract.address,
      value: '0',
      data,
    });
    const txResponse = await safeSDK1.executeTransaction(tx);
    await waitSafeTxReceipt(txResponse);
    message = await ownedContract.message();
    expect(message).to.be.equal(newMessage);
  });

  it('Should execute a tx with threshold >1', async () => {
    const { signer1, signer2, signer3, ethAdapter, contractNetworks } = fixture;
    const ownedContract: OwnedContract = await ethers.getContract(
      'OwnedContract'
    );
    const owners = [signer1.address, signer2.address, signer3.address];
    const threshold = 2;
    const safe = await getSafeWithOwners(owners, threshold);
    const safeSDK = await Safe.create({
      ethAdapter,
      safeAddress: safe.address,
      contractNetworks,
    });
    await ownedContract.setOwner(safe.address);
    const newMessage = 'hello world';
    const { data } = await ownedContract.populateTransaction.setMessage(
      newMessage
    );
    const tx = await safeSDK.createTransaction({
      to: ownedContract.address,
      value: '0',
      data,
    });
    // @ts-ignore
    await expect(safeSDK.executeTransaction(tx)).to.be.rejectedWith(
      'There is 1 signature missing'
    );
    const ethAdapter2 = new EthersAdapter({
      ethers,
      signer: signer2,
    });
    const ethAdapter3 = new EthersAdapter({
      ethers,
      signer: signer3,
    });
    const safeSDK2 = await safeSDK.connect({ ethAdapter: ethAdapter2 });
    const safeSDK3 = await safeSDK.connect({ ethAdapter: ethAdapter3 });
    const txHash = await safeSDK2.getTransactionHash(tx);
    let txResponse = await safeSDK2.approveTransactionHash(txHash);
    await waitSafeTxReceipt(txResponse);
    txResponse = await safeSDK.approveTransactionHash(txHash);
    await waitSafeTxReceipt(txResponse);
    const txResponse2 = await safeSDK3.executeTransaction(tx);
    const message = await ownedContract.message();
    await waitSafeTxReceipt(txResponse2);
    expect(message).to.be.equal(newMessage);
  });
});
