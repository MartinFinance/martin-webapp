import { Contract } from 'ethers';
import ABI_DATA from './abi.json';
import config from '@/config';
import provider from '@/eth/provider';

const contract = new Contract(
  config.hydroExchangeAddress,
  ABI_DATA,
  provider,
);

export default contract;

