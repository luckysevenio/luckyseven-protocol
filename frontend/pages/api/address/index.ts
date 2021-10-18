// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ethers, Wallet } from 'ethers';
import Safe, { EthersAdapter } from '@gnosis.pm/safe-core-sdk';
import { EMPTY_DATA } from '@gnosis.pm/safe-core-sdk/dist/src/utils/constants';
import { rinkeby } from '../../../addresses';

const addresses = {
  rinkeby,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      const { network } = JSON.parse(body);
      // @ts-ignore
      const resp = addresses[network];
      if (!resp) {
        return res.end();
      }
      res.status(200);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
