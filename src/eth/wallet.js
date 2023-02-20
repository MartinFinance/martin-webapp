import { Wallet } from 'ethers';
import provider from '@/eth/provider';
import contract from '@/eth/contract';

export default (privateKey) => {
  const wallet = new Wallet(privateKey);
  const walletWithProvider = wallet.connect(provider);
  const contractWithSigner = contract.connect(walletWithProvider);

  return {
    wallet,
    walletWithProvider,
    contractWithSigner,
  };
};
