import { providers } from 'ethers';
import config from '@/config';

const provider = new providers.JsonRpcProvider(
  config.gethServer,
  config.chainId,
);

export default provider;
