
import ABI from '@/common/abi.js';
import config from '@/config';
import * as fm from '@/common/formatter';
// import { ethers } from 'ethers';
// const provider = new ethers.getDefaultProvider();


/**
 * 授权
 * @param {*} contract 授权币种合约地址
 * @param {*} spender 交易合约
 * @param {*} amount 数量
 * @param {*} address 用户钱包
 * @param {*} privateKey 私钥
 */
export async function approve({
  contract,
  amount,
  // address,
  // privateKey,
  gasLimit,
}) {
  const tx = {
    // gasPrice: fm.toHex(fm.toBig(config.defaultGasPrice).times(1e9)),
    // gasLimit: fm.toHex(config.defaultGasLimit),
    to: contract,
    value: '0x0',
    gasLimit,
  };

  tx.data = ABI.approve(config.hydroProxyAddress, fm.toHex(amount));

  const response = await $account.sendRawTransaction(tx);

  return response;
}

export async function diposit({
  contract,
  amount,
}) {
  const tx = {
    to: contract,
    value: fm.toHex(amount),
  };
  tx.data = ABI.deposit();

  const response = await $account.sendRawTransaction(tx);

  return response;
}

export async function withdraw({
  contract,
  amount,
}) {
  const tx = {
    to: contract,
    value: '0x0',
  };

  tx.data = ABI.withdraw(fm.toHex(amount));

  const response = await $account.sendRawTransaction(tx);

  return response;
}

export async function transfer({ token, amount, receiver, gasPrice }) {
  const tx = {
    gasPrice,
  };

  if (token.symbol === 'ETH') {
    tx.to = receiver;
    tx.value = fm.toHex(amount);
  } else {
    tx.to = token.coin_address;
    tx.value = '0x0';
    tx.data = ABI.transfer(
      receiver,
      fm.toHex(amount),
    );
  }
  const response = await $account.sendRawTransaction(tx);
  return response;
};


export async function cancelOrder({
  orderHash,
}) {
  const tx = {
    // gasPrice: fm.toHex(fm.toBig(config.defaultGasPrice).times(1e9)),
    // gasLimit: fm.toHex(config.defaultGasLimit),
    to: config.hydroProxyAddress,
    value: '0x0',
  };

  tx.data = ABI.cancelOrder(fm.toHex(orderHash));

  const response = await $account.sendRawTransaction(tx);

  return response;
}

// balanceOf(CONTRACT_ADDR, MY_ADDRESS);
