
import ABI from '@/common/abi.js';
import config from '@/config';
import request from '@/common/ethRequest';
import * as fm from '@/common/formatter';
import EthTransaction from 'ethereumjs-tx';
// import { ethers } from 'ethers';
// const provider = new ethers.getDefaultProvider();

/**
 * 获取余额
 * @param {*} contract 合约地址
 * @param {*} address 用户钱包地址
 */
export function balanceOf({contract, address}) {
  const tx = {
    to: contract,
  };
  tx.data = ABI.balanceOf(address);
  const body = {};
  body.method = 'eth_call';
  body.params = [tx, 'latest'];
  return request({
    method: 'post',
    body,
  });
}

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
  address,
  privateKey,
}) {
  const tx = {
    gasPrice: fm.toHex(fm.toBig(config.defaultGasPrice).times(1e9)),
    gasLimit: fm.toHex(config.defaultGasLimit),
    to: contract,
    value: '0x0',
    chainId: config.chainId,
  };

  tx.data = ABI.approve(config.hydroProxyAddress, amount);

  const countRes = await getTransactionCount(address);
  tx.nonce = fm.toHex(countRes.result);

  const ethTx = new EthTransaction(tx);

  ethTx.sign(fm.toBuffer(fm.addHexPrefix(privateKey)));
  const signed = fm.toHex(ethTx.serialize());

  const body = {};
  body.method = 'eth_sendRawTransaction';
  body.params = [signed];

  return request({
    method: 'post',
    body,
  });
}

/**
 * 查询授权额度
 * @param {*} contract 合约地址
 * @param {*} address 用户钱包地址
 */
export function allowance({ contract, address }) {
  const tx = {
    to: contract,
  };
  tx.data = ABI.allowance(address, config.hydroProxyAddress);
  const body = {};
  body.method = 'eth_call';
  body.params = [tx, 'latest'];
  return request({
    method: 'post',
    body,
  });
}


export async function diposit({
  contract,
  amount,
}) {
  const tx = {
    gasPrice: fm.toHex(fm.toBig(config.defaultGasPrice).times(1e9)),
    gasLimit: fm.toHex(config.defaultGasLimit),
    to: contract,
    value: fm.toHex(amount),
    chainId: config.chainId,
  };

  tx.data = ABI.deposit();

  const response = await $account.sendTransaction(tx);

  return response;
  // const body = {};
  // body.method = 'eth_sendRawTransaction';
  // body.params = [signed];

  // return request({
  //   method: 'post',
  //   body,
  // });
}

export async function withdraw({
  contract,
  amount,
  address,
  privateKey,
}) {
  const tx = {
    gasPrice: fm.toHex(fm.toBig(config.defaultGasPrice).times(1e9)),
    gasLimit: fm.toHex(config.defaultGasLimit),
    to: contract,
    value: '0x0',
    chainId: config.chainId,
  };

  tx.data = ABI.withdraw(fm.toHex(amount));

  const countRes = await getTransactionCount(address);
  tx.nonce = fm.toHex(countRes.result);

  const ethTx = new EthTransaction(tx);

  ethTx.sign(fm.toBuffer(fm.addHexPrefix(privateKey)));
  const signed = fm.toHex(ethTx.serialize());

  const body = {};
  body.method = 'eth_sendRawTransaction';
  body.params = [signed];

  return request({
    method: 'post',
    body,
  });
}

// export async function transfer() {
//   // const tx = {
//   //   gasPrice: 20000,
//   //   gasLimit: '0x186a0',
//   //   to: contactAddr,
//   //   value: '0x0'
//   // };
//   // tx.data = generateAbiData({
//   //   method: 'transfer',
//   //   address: receiverAddr,
//   //   amount: _amount
//   // });
//   const params = [tx, 'latest'];
//   const body = {};
//   body.method = 'eth_sendRawTransaction';
//   body.params = params;
//   const response = await request({
//     method: 'post',
//     body,
//   });
//   return response;
// }

// export function transfer() {
//   let tx = {
//     gasPrice: fm.toHex(fm.toBig(gasPrice).times(1e9)),
//     gasLimit: fm.toHex(gasLimit),
//     to: contactAddr,
//     value: "0x0"
//   };

//   let _amount = fm.toHex(fm.toBig(amount).times("1e"+tokenConfig.digits));
//   // ETH转账
//   if(token.symbol === 'ETH') {
//     amount = fm.toBig(amount).times(1e18).toNumber();
//     tx.to = receiverAddr;
//     tx.value = fm.toHex(amount);
//     tx.data = fm.toHex('0x');
//   } else {
//     amount = _amount;
//   // 非ETH的token转账
//     tx.data = generateAbiData({method: "transfer", address: receiverAddr, amount: _amount});
//   }

//   let {response,rawTx} = await Wallet.sendTransaction({tx, symbol: token.symbol, amount: amount.toString(), receiverAddr});

// };



// balanceOf(CONTRACT_ADDR, MY_ADDRESS);
