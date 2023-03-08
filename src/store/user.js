/* eslint-disable no-param-reassign */
import moment from 'moment';
import {
  dogeTokenContract, USDTContract, martinDepositContract, provider,
} from '@/eth/ethereum';
import { getTree } from '@/api/common';

const isMetamask = !!window.ethereum;

const user = {
  // namespaced: true,
  state: {
    address: '',
    chainId: '',
    ethBalance: 0,
    // usdtBalance: 0,
    dogeBalance: 0,
    dogePrice: 0,

    depositAmount: 0,
    period: 0,
    reinvestAmount: 0,
    withdrawAmount: 0,
    events: [],
    withdrawable: 0,
    jsonAmount: 0,
    proofTarget: [],
    amount365: 0,

    usdDecimals: 8,
    dogeDecimals: 18,

    min: 0,
    max: 0,

    positionOpened: false,
    isMetamask,
    loaded: !isMetamask,

    invitees: [],
  },

  mutations: {
    UPDATE_STATE: (state, payload) => {
      Object.assign(state, payload);
    },
    RESET_STATE: (state) => {
      Object.assign(state, {
        address: '',
        chainId: '',
      });
    },
  },

  actions: {
    async handleAccountsChanged({ commit, dispatch, state }, accounts) {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });

      if (accounts.length === 0) {
        commit('UPDATE_STATE', {
          address: '',
          chainId,
          loaded: true,
        });
      } else if (accounts[0] !== state.address) {
        commit('UPDATE_STATE', {
          address: accounts[0],
          chainId,
          loaded: true,
        });
        dispatch('getPosition');
        dispatch('getWithdrawable');
        dispatch('getBalances');
        dispatch('getDecimals');
      }
    },

    unlockByMetaMask({ dispatch }) {
      if (typeof window.ethereum === 'undefined') {
        throw Error('MetaMask is not installed!');
      }

      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          dispatch('handleAccountsChanged', accounts);
        })
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log('Please connect to MetaMask.');
          } else {
            console.error(err);
          }
        });
    },

    async getBalances({ commit, state }) {
      const [ethBalance, dogeBalance] = await Promise.all([
        provider.getBalance(state.address),
        // USDTContract.balanceOf(state.address),
        dogeTokenContract.balanceOf(state.address),
      ]);

      commit('UPDATE_STATE', {
        ethBalance,
        dogeBalance,
      });
    },

    async getDogePrice({ commit }) {
      const [price, decimal] = await martinDepositContract.getLatestPrice();
      commit('UPDATE_STATE', {
        // dogePrice: price / 10 ** decimal,
        dogePrice: price,
      });
    },

    async getPosition({ commit, state }) {
      const opened = await martinDepositContract.checkPositionOpened(state.address);
      commit('UPDATE_STATE', {
        positionOpened: opened,
      });

      if (opened) {
        const position = await martinDepositContract.getPosition(state.address);
        commit('UPDATE_STATE', {
          // positionOpened: true,
          depositAmount: position.depositAmount,
          period: position.period,
          events: position.events,
          reinvestAmount: position.reinvestAmount,
          withdrawAmount: position.withdrawAmount,
        });

        if (position.period === 1) {
          commit('UPDATE_STATE', {
            amount365: position.events.reduce((prev, item) => {
              if (moment(item.time * 1000).isAfter(moment().subtract(365, 'days'))) {
                return item.changedAmount.add(prev);
              }
            }, 0),
          });
        }
      }
    },

    async getDecimals({ commit }) {
      const [usdDecimals, dogeDecimals] = await Promise.all([
        martinDepositContract.usdDecimals(),
        martinDepositContract.dogeTokenDecimals(),
      ]);

      commit('UPDATE_STATE', {
        usdDecimals,
        dogeDecimals,
      });
    },

    async getRange({ commit }) {
      const [min, max] = await Promise.all([
        martinDepositContract.min(),
        martinDepositContract.max(),
      ]);

      commit('UPDATE_STATE', {
        min,
        max,
      });
    },

    async getWithdrawable({ state, commit }) {
      const tree = await getTree();

      if (tree) {
        const target = tree.values.find((item) => item.value[0].toLowerCase() === state.address.toLowerCase());
        if (target) {
          const jsonAmount = target.value[1];
          const withdrawable = await martinDepositContract.withdrawableAmount(state.address, jsonAmount);

          commit('UPDATE_STATE', {
            withdrawable,
            jsonAmount,
            proofTarget: target,
          });
        }
      }
    },

    async getInvitees({ state, commit }) {
      if (state.address) {
        const invitees = await martinDepositContract.getMyInvitees(state.address);

        commit('UPDATE_STATE', {
          invitees,
        });
      }
    },
  },
};

export default user;
