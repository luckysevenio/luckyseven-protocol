// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ethers, Wallet } from 'ethers';
import Safe, { EthersAdapter } from '@gnosis.pm/safe-core-sdk';
import { rinkeby } from '../../../../addresses';
import consola from 'consola';
import { COMPOUND_TOKENS } from '../../../../utils/constants';
import { CErc20__factory, CEther__factory } from '../../../../typechain';

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
      let tx;
      const { safeBalance, safeAddress, token } = JSON.parse(body);
      const safeSDK = await getSafeSdk(safeAddress);
      const provider = new ethers.providers.JsonRpcProvider();
      if (token === COMPOUND_TOKENS.ETH) {
        const cETH = await CEther__factory.connect(
          rinkeby.compound.cETH,
          provider
        );
        const { data } = await cETH.populateTransaction.mint();
        tx = {
          to: rinkeby.compound.cETH,
          value: safeBalance,
          data: data as string,
        };
      } else {
        switch (token) {
          case COMPOUND_TOKENS.DAI:
            const cToken = rinkeby.compound.cDAI;
            const cDAI = await CErc20__factory.connect(cToken, provider);
            const { data } = await cDAI.populateTransaction.mint(safeBalance);
            tx = {
              to: cToken,
              value: '0',
              data: data as string,
            };
            break;
          default:
            throw new Error('Token not implemented for supply');
        }
      }
      const safeTx = await safeSDK.createTransaction(tx);
      await safeSDK.signTransaction(safeTx);
      return res
        .status(200)
        .send({ tx, signatures: Object.fromEntries(safeTx.signatures) });
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
