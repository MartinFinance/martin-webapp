import request from '@/common/ethRequest';

/**
 * 获取余额
 * @param {*} address 用户钱包地址
 */
export function getBalance(address) {
  const params = [address, 'latest'];
  const body = {};
  body.method = 'eth_getBalance';
  body.params = params;

  return request({
    method: 'post',
    body,
  });
}

/**
 * tx数量
 * @param {*} address
 * @param {*} tag
 */
export async function getTransactionCount(address, tag = 'pending') {
  const params = [address, tag];
  const body = {};
  body.method = 'eth_getTransactionCount';
  body.params = params;
  return request({
    method: 'post',
    body,
  });
}

/**
 * 获取gas价格
 */
export async function getGasPrice() {
  const params = [];
  const body = {};
  body.method = 'eth_gasPrice';
  body.params = params;
  return request({
    method: 'post',
    body,
  });
}


/**
 * 估算gas
 * @param {*} tx
 */
export async function estimateGas(tx) {
  const body = {};
  body.method = 'eth_estimateGas';
  body.params = [tx];
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
