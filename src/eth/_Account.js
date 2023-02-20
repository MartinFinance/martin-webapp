import EthTransaction from 'ethereumjs-tx';
import * as fm from '@/common/formatter';
import * as accountUtils from '@/common/accountUtils';
import * as ethBaseApi from '@/api/eth/base';
import config from '@/config';
import request from '@/common/ethRequest';
import store from '@/store';
import {
  hashPersonalMessage,
  ecsign,
  toRpcSig,
  toBuffer,
  bufferToHex,
  privateToAddress,
} from 'ethereumjs-util';

const { getters } = store;

class Account {
  constructor() {
    // this.unlock = false;
    // this.accountType = '';
    // this.privateKey = '';
    this.address = '';
    // this.auth = '';
    this.chainId = '';

    // console.log(ethereum.isConnected())

    // window.ethereum.on('connect', ({ chainId }) => {
    //   this.unlockByMetaMask();
    // });

    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });

    // For now, 'eth_accounts' will continue to always return an array
    window.ethereum
      .request({ method: 'eth_accounts' })
      .then(this.handleAccountsChanged.bind(this))
      .catch((err) => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
      });

    // Note that this event is emitted on page load.
    // If the array of accounts is non-empty, you're already
    // connected.
    window.ethereum.on('accountsChanged', this.handleAccountsChanged.bind(this));
  }

  unlockByPrivateKey(privateKey) {
    this.privateKey = privateKey;
    this.address = fm.formatAddress(privateToAddress(this.privateKey));
    this.accountType = 'privateKey';
    // return this.getAuth();
  }

  unlockByMnemonic(mnemonic, password) {
    const { privateKey, address } = accountUtils.fromMnemonic(mnemonic, password);
    this.privateKey = `0x${privateKey}`;
    this.address = fm.formatAddress(address);
    this.accountType = 'mnemonic';
    // return this.getAuth();
  }

  unlockByKeystore(keystoreJsonV3, password) {
    const { privateKey, address } = accountUtils.decrypt(keystoreJsonV3, password);
    this.privateKey = `0x${privateKey}`;
    this.address = fm.formatAddress(address);
    this.accountType = 'keystore';
    // return this.getAuth();
  }

  async handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== this.address) {
      this.address = accounts[0];
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      this.chainId = chainId;
      // Do any other work!
    }
    console.log(this)
  }

  async unlockByMetaMask() {

    if (typeof window.ethereum === 'undefined') {
      throw Error('MetaMask is not installed!');
    }

    // While you are awaiting the call to eth_requestAccounts, you should disable
    // any buttons the user can click to initiate the request.
    // MetaMask will reject any additional requests while the first is still
    // pending.
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(this.handleAccountsChanged.bind(this))
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });

    // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    // // eslint-disable-next-line prefer-destructuring
    // this.address = accounts[0];
    // const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    // this.chainId = chainId;

    // console.log(accounts)
    // console.log(window.ethereum.selectedAddress);
    // this.accountType = 'metaMask';

    // return new Promise((resolve, reject) => {
    //   window.ethereum.getAccounts(async (error, result) => {
    //     if (result.length) {

    //       await this.getAuth();
    //       resolve();
    //     } else {
    //       reject();
    //     }
    //   });
    // })
  }

  restore(account) {
    this.address = account.address;
    this.accountType = account.accountType;
    this.privateKey = account.privateKey;
    this.auth = account.auth;
    this.chainId = account.chainId;
  }

  getAddress() {
    return this.address;
  }

  // eslint-disable-next-line
  async askForPermission() {
    if (window.ethereum) {
      return window.ethereum.enable()
        .catch(() => {
          throw new Error('拒绝链接请求');
        });
    }
    return Promise.resolve();
  }

  async sendRawTransaction(tx) {
    const tcRes = await ethBaseApi.getTransactionCount(this.address);
    tx.nonce = tx.nonce || fm.toHex(tcRes.result);
    tx.gasPrice = getters.fastGasPrice;
    tx.gasLimit = tx.gasLimit || fm.toHex(config.defaultGasLimit);
    // metamask gaslimit
    tx.gas = tx.gasLimit;
    tx.chainId = tx.chainId || config.chainId;
    tx.from = this.getAddress();
    // if (this.accountType === 'metaMask') {
    return this.sendWeb3Transaction(tx);
    // }

    // const ethTx = new EthTransaction(tx);
    // ethTx.sign(fm.toBuffer(fm.addHexPrefix(this.privateKey)));
    // const signed = bufferToHex(ethTx.serialize());
    // const body = {};
    // body.method = 'eth_sendRawTransaction';
    // body.params = [signed];

    // const response = await request({
    //   method: 'post',
    //   body,
    // });
    // return {
    //   response,
    //   rawTx: tx,
    // };
  }

  // eslint-disable-next-line
  async sendWeb3Transaction(tx) {
    await this.askForPermission();

    const transactionHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx],
    });

    return {
      transactionHash,
      rawTx: tx,
    };

    // return new Promise((resolve) => {
    //   const { web3 } = window;
    //   web3.eth.sendTransaction(tx, (err, txHash) => {
    //     if (!err) {
    //       resolve({
    //         response: {
    //           result: txHash,
    //         },
    //         rawTx: tx,
    //       });
    //     } else {
    //       resolve({
    //         response: {
    //           error:{
    //             message: err.message,
    //           },
    //         },
    //         rawTx: tx,
    //       });
    //     }
    //   });
    // });
  }

  getSignature(message) {
    // 获取要签名信息的hash
    return new Promise((resolve, reject) => {
      if (this.accountType === 'metaMask') {
        this.askForPermission()
          .then(() => {
            const { web3 } = window;
            web3.personal.sign(web3.toHex(message), this.address, (err, signature) => {
              if (err) {
                reject(err);
                return;
              }
              resolve(signature);
            });
          })
          .catch(e => reject);
      } else {
        try {
          const sha = hashPersonalMessage(fm.toBuffer(message));
          const ecdsaSignature = ecsign(sha, toBuffer(this.privateKey));

          // 生成rpc签名
          const signature = toRpcSig(
            ecdsaSignature.v,
            ecdsaSignature.r,
            ecdsaSignature.s,
          );
          resolve(signature);
        } catch (e) {
          reject(e);
        }
      }
    });
  }

  async getOrderSignature(orderId) {
    return this.getSignature(orderId);
  }

  async getAuth() {
    const message = `HYDRO-AUTHENTICATION@${Date.now()}`;
    const signature = await this.getSignature(message);

    this.auth = `${this.address}#${message}#${signature}`;

    return `${this.address}#${message}#${signature}`;
  }
}

export default Account;
