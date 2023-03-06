import { ethers } from 'ethers';
import config from '@/config';

import ERC20 from '@/eth/abi/ERC20.json';
import martinDepositAbi from '@/eth/abi/MartinDeposit.json';

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
// https://kovan.infura.io/v3/492234a5fc4a458191731b8d68be70ec
// const provider = new ethers.providers.Web3Provider(window.ethereum);
const provider = new ethers.providers.JsonRpcProvider(config.gethServer);

const martinDepositContract = new ethers.Contract(
  config.MartinDepositAddress, martinDepositAbi.abi, provider,
);
const dogeTokenContract = new ethers.Contract(config.DogeTokenAddress, ERC20.abi, provider);
const USDTContract = new ethers.Contract(config.USDTAddress, ERC20.abi, provider);

const martinDepositInterface = new ethers.utils.Interface(martinDepositAbi.abi);
const dogeTokenInterface = new ethers.utils.Interface(ERC20.abi);
const USDTInterface = new ethers.utils.Interface(ERC20.abi);
// (async () => {
//   const res = await provider.getGasPrice();
//   console.log(res.toString())
//   console.log(res.toHexString())
//   // const txCount = await provider.getTransactionCount(ethereum.selectedAddress, 'pending');
//   // console.log(txCount.toString())

//   // const buyData = canvasAuctionInterface.encodeFunctionData('buy', [
//   //   1
//   // ]);

//   // console.log(buyData)
// })();

export {
  provider,
  dogeTokenContract,
  USDTContract,
  martinDepositContract,

  dogeTokenInterface,
  USDTInterface,
  martinDepositInterface,
};
