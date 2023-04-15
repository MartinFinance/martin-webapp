/* eslint-disable no-param-reassign */
import moment from 'moment';
import config from '@/config';
import { utils } from 'ethers';
import {
  dogeTokenContract, USDTContract, martinDepositContract, provider,
} from '@/eth/ethereum';
import { getTree, getHistory } from '@/api/common';

const isMetamask = !!window.ethereum;

const user = {
  // namespaced: true,
  state: {
    address: '',
    addressLoading: false,
    chainId: '',
    ethBalance: 0,
    // usdtBalance: 0,
    dogeBalance: 0,
    dogePrice: 0,
    dogePriceDecimals: 0,

    depositAmount: 0,
    period: 0,
    reinvestAmount: 0,
    withdrawAmount: 0,
    events: [],
    withdrawable: 0,
    jsonAmount: 0,
    // proofTarget: [],
    amount365: 0,

    inviterGrade: 0,

    usdDecimals: 8,
    dogeDecimals: 18,

    min: 0,
    max: 0,

    positionOpened: false,
    isMetamask,
    loaded: !isMetamask,

    invitees: [],
    rewards: [],

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
        if (state.address) {
          window.location.reload();
        }
        commit('UPDATE_STATE', {
          address: accounts[0],
          chainId,
          loaded: true,
        });

        dispatch('getBalances');
        dispatch('getDecimals');
        dispatch('getHistory');
        dispatch('getInviterGrade');

        await dispatch('getPosition');
        dispatch('getWithdrawable');
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
        dogePriceDecimals: decimal,
        dogePrice: price,
      });
    },

    async getPosition({ commit, state }) {
      const opened = await martinDepositContract.checkPositionOpened(state.address);

      console.log(opened);
      commit('UPDATE_STATE', {
        positionOpened: opened,
      });

      if (opened) {
        const position = await martinDepositContract.getPosition(state.address);
        commit('UPDATE_STATE', {
          depositAmount: position.depositAmount,
          period: position.period,
          events: position.events,
          subPositions: position.subPositions,
          reinvestAmount: position.reinvestAmount,
          withdrawAmount: position.withdrawAmount,
        });

        if (position.period === 1) {
          commit('UPDATE_STATE', {
            amount365: position.subPositions.reduce((prev, item) => {
              if (moment(item.time * 1000).isAfter(moment().subtract(config.debug ? 9 : 365, config.debug ? 'hours' : 'days'))) {
                return item.amount.add(prev);
              }
              return prev;
            }, 0),
          });
        }
      }
    },

    async getHistory({ commit, state }) {
      const res = await getHistory(utils.getAddress(state.address));
      commit('UPDATE_STATE', {
        rewards: res.rewards.map((item) => ({
          ...item,
          time: +item.time.hex,
        })),
      });
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

    async getInviterGrade({ state, commit }) {
      const result = await martinDepositContract.getInviterGrade(state.address);

      commit('UPDATE_STATE', {
        inviterGrade: result.toNumber(),
      });
    },

    async getWithdrawable({ state, commit }) {
      let tree;

      try {
        tree = await getTree();
      } catch (error) {
        console.log(error);
      }

      if (tree) {
        const target = tree.values.find((item) => item.value[0].toLowerCase() === state.address.toLowerCase());
        if (target) {
          const jsonAmount = target.value[1];
          const withdrawable = await martinDepositContract.withdrawableAmount(state.address, jsonAmount);

          commit('UPDATE_STATE', {
            withdrawable,
            jsonAmount,
          });
        } else {
          // const withdrawable = await martinDepositContract.withdrawableAmount(state.address, 0);
          commit('UPDATE_STATE', {
            withdrawable: state.period === 1 ? 0 : state.depositAmount - state.withdrawAmount,
            jsonAmount: 0,
          });
        }
      } else {
        const withdrawable = await martinDepositContract.withdrawableAmount(state.address, 0);
        commit('UPDATE_STATE', {
          withdrawable: state.period === 1 ? 0 : withdrawable,
          jsonAmount: 0,
        });
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
