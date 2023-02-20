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
// const USDTInterface= new ethers.utils.Interface(ERC20.abi);

// Doge token address: 0x629b490cFA58cB53A5646d49B2fFFf1576b5c8aa
// Oracle address: 0x963D5e7f285Cc84ed566C486c3c1bC911291be38
// MartinDeposit address: 0x70e26a9124Fb76Af2228E9e17D7a75E32EBc66a8

(async () => {
  const res = await provider.getGasPrice();
  console.log(res.toString())
  console.log(res.toHexString())
  // const txCount = await provider.getTransactionCount(ethereum.selectedAddress, 'pending');
  // console.log(txCount.toString())

  // const buyData = canvasAuctionInterface.encodeFunctionData('buy', [
  //   1
  // ]);

  // console.log(buyData)
})();

// NFTAuction: '0x0b464262603071A935a760ada21057d8266Ac7c4',
// NFTFactory: '0xbF85C6C600E8c8b59825B47dA1f0Fa365E0C5088',
// NFTSwap: '0xC782bc6d9807308855d7060c7f17EB360bA0A1eE',
// coinBid: '0x87Ac9DB11AfbDA826d58b25e8fc1505915E8C5eE',
// coinBidCreation: '0x03f09496c661Ac899C18EBeFBD77aAF4FaEaBffA',
// mining: '0x795D67F07C2470c7adEC38549E93FD2032b65c8e',
// canvasAuction: '

export {
  provider,
  dogeTokenContract,
  USDTContract,
  martinDepositContract,

  dogeTokenInterface,
  USDTInterface,
  martinDepositInterface,
};
