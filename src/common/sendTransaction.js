import config from '@/config';
import { provider } from "@/eth/ethereum";

import { BigNumber } from 'ethers';

console.log(BigNumber)
// console.log(provider)
const sendTransaction = async ({
  to,
  data,
  gas,
}) => {
  const gasPrice = await provider.getGasPrice();
  // const txCount = await provider.getTransactionCount(ethereum.selectedAddress, 'pending');

  const transactionParameters = {
    // nonce: txCount, // ignored by MetaMask
    gasPrice:  gasPrice.toHexString(), // customizable by user during MetaMask confirmation.
    gas: BigNumber.from(gas || 240000).toHexString(), // customizable by user during MetaMask confirmation.
    to, // Required except during contract publications.
    from: ethereum.selectedAddress, // must match user's active address.
    value: '0x00', // Only required to send ether to the recipient from the initiating external account.
    data, // Optional, but used for defining smart contract creation and interaction.
    chainId: config.chainId, // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
  };

  // txHash is a hex string
  // As with any RPC call, it may throw an error
  const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
  });
  return txHash;
}

export default sendTransaction;
