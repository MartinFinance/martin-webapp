import ABI from '@/common/abi.js';
import config from '@/config';
import request from '@/common/ethRequest';

/**
 * 获取余额
 * @param {*} contract 合约地址
 * @param {*} address 用户钱包地址
 */
export function balanceOf({ contract, address }) {
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
