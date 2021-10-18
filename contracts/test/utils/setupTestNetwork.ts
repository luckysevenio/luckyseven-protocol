import { Signer } from '@ethersproject/abstract-signer';
import { Wallet } from '@ethersproject/wallet';
import { waffle } from 'hardhat';

interface Account {
  signer: Signer;
  address: string;
}

function getHardhatAccounts(): Account[] {
  const wallets = waffle.provider.getWallets();
  const accounts: Account[] = [];
  for (let i = 0; i < 10; i++) {
    const wallet: Wallet = wallets[i];
    const account: Account = {
      signer: wallet as Signer,
      address: wallet.address,
    };
    accounts.push(account);
  }
  return accounts;
}

export async function getAccounts(): Promise<Account[]> {
  return getHardhatAccounts();
}
