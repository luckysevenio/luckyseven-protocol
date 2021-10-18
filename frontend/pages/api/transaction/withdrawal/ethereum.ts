// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import Safe, { EthersAdapter } from '@gnosis.pm/safe-core-sdk';
import { EMPTY_DATA } from '@gnosis.pm/safe-core-sdk/dist/src/utils/constants';

const mnemonic =
  'myth like bonus scare over problem client lizard pioneer submit female collect';

// @ts-ignore
const getWallet = () => {
  const wallet = new ethers.Wallet.fromMnemonic(mnemonic);
  const provider = new ethers.providers.JsonRpcProvider(
    'https://rinkeby.infura.io/v3/cc239c2666f94a439daf0137acd7566f'
  );
  return wallet.connect(provider);
};

async function getSafeSdk(safeAddress: string): Promise<Safe> {
  const wallet = getWallet();
  // @ts-ignore
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signer: wallet,
  });
  return await Safe.create({
    ethAdapter: ethAdapterOwner1,
    safeAddress,
    contractNetworks: {
      [1337]: {
        multiSendAddress: '0x435383c2336a298454D68E02620Aeec5a0407335',
        safeMasterCopyAddress: '0xAD11966CA009A48268a287118A033a29e28d922a',
        safeProxyFactoryAddress: '0xD9800aB99cf7914F84468EBA9a54270CB1E6d205',
      },
    },
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      const { safeBalance, safeAddress, ownerAddress } = JSON.parse(body);
      const safeSDK = await getSafeSdk(safeAddress);
      const tx = {
        to: ownerAddress,
        value: safeBalance,
        data: EMPTY_DATA,
      };
      const safeTx = await safeSDK.createTransaction(tx);
      await safeSDK.signTransaction(safeTx);
      res
        .status(200)
        .send({ tx, signatures: Object.fromEntries(safeTx.signatures) });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
