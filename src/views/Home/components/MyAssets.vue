<template>
  <div class="my-assets">
    <h3>My Assets</h3>

    <div class="assets-wrapper">
      <div class="total">
        <!-- {{ user }} -->
        USDT: {{ Math.round(user.dogeBalance / (10 ** user.dogeDecimals)) }}
      </div>

      <div class="card">
        <div class="card-top">
          <span>{{ user.period === 0 ? 'Regular Interest' : 'Daily Interest' }}</span>
          <span> {{ user.period === 0 ? 30 : 365 }} days</span>
        </div>
        <div  class="card-middle">
          <span>APR: </span>
          <span> {{ user.period === 0 ? '72.00%+' : '120.00%+' }}</span>
        </div>
        <div  class="card-bottom">
          <span>{{ user.period === 0 ? 'Pay interest only when due' : 'Receive interest the next day' }}</span>

        </div>

      </div>
    </div>
    <h3>My Subscription</h3>
    <table class="reward-table">
      <thead class="table-head">
        <tr>
          <th>Product</th>
          <th>Value</th>
          <th v-if="user.period === 1">Available</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-row">
          <td>{{ user.period === 0 ? 'Regular Interest' : 'Daily Interest' }}</td>
          <td  v-if="user.period === 0">
           $ {{ user.withdrawable  / 10 ** user.usdDecimals | toFixed }}
          </td>
          <td  v-if="user.period === 1">
           $ {{ user.amount365  / 10 ** user.usdDecimals | toFixed}}
          </td>
          <td v-if="user.period === 1">
           $ {{ user.withdrawable  / 10 ** user.usdDecimals | toFixed }}
          </td>
          <td>{{ time | formatTime('yyyy-MM-DD HH:mm:ss') }}</td>
        </tr>
      </tbody>
    </table>
    <b-row align-h="center">
      <div class="btn-wrapper">
        <b-button
          class="subscribe-btn"
          variant="primary"
          @click="onSubscribe"
        >Subscribe</b-button>
        <b-button
          variant="primary"
          class="redeem-btn"
          @click="onRedeem"
        >Redeem</b-button>
        <b-button
          v-if="user.period === 1"
          variant="primary"
          class="redelivery-btn"
          :disabled="user.withdrawable === 0"
          @click="onReinvest"
        >Reinvest</b-button>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getTree } from '@/api/common';
import sendTransaction from '@/common/sendTransaction';
import config from '@/config';

import { StandardMerkleTree } from '@openzeppelin/merkle-tree';
import { BigNumber } from 'ethers';

import {
  dogeTokenContract, dogeTokenInterface, martinDepositInterface, provider,
} from '@/eth/ethereum';

export default {
  data() {
    return {
      list: [
        {
          type: '222',
          claimable: '1',
        },
        {
          type: '222',
          claimable: '1',
        },
      ],
    };
  },
  computed: {
    ...mapState(['user']),
    time() {
      if (this.user.events.length > 0) {
        return this.user.events[0].time * 1000;
      }
      return '';
    },
  },
  // async mounted() {
  //   const tree = await getTree();
  //   console.log(tree)
  // },
  methods: {
    onSubscribe() {
      this.$emit('change-step', 2);
    },

    onRedeem() {
      this.$emit('change-step', 4);
    },

    async onReinvest() {
      this.$emit('change-step', 4, 'reinvest');
      // const { tokenId } = this.$route.query;
      // if (!this.user.address) {
      //   this.showError('Please connect metamask');
      //   return false;
      // }

      // if (amount < this.min) {
      //   this.showError(`The minimum claim is ${this.min} DOGE`);
      //   return;
      // }

      // if (amount > this.max) {
      //   this.showError(`The maximum claim is ${this.min} DOGE`);
      //   return;
      // }
    },
  },
};
</script>
<style lang="scss" scoped>
 .my-assets {
    width: 100%;
    // height: 322px;
    background: #FFFFFF;
    // box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.08);
    border-radius: 36px;
    padding: 56px;
    font-family: ArialRoundedMTBold;
    position: relative;
    box-sizing: border-box;
 }

 h3 {
  font-size: 24px;
 }

 .assets-wrapper {
  text-align: center;
  position: relative;
  padding: 24px 0;

 }
 .total {
    color: #FFB600 ;
    font-size: 36px;
    text-align: center;
 }
 .card {
    width: 265px;
    height: 154px;
    background: #FFFAEB;
    border-radius: 6px;
    transform: rotate3d(1, 1, 1, -8deg);
    padding: 26px 30px;
    position: absolute;
    top: -32px;
    right: 20px;
    .card-top {
      font-size: 18px;
      display: flex;
      justify-content: space-between;

      & span:nth-child(2) {
        font-size: 14px;
        color: 666;
      }
    }
    .card-middle {
      font-size: 24px;
      display: flex;
      justify-content: space-between;
      margin-top: 6px;

      & span:nth-child(2) {
        color: #FFB600;
      }
    }

    .card-bottom {
      font-size: 14px;
      color: 666;
      text-align: left;
      margin-top: 6px;
    }

 }
 .btn-wrapper {
  margin-top: 40px;
  text-align: center;
 }

 .redeem-btn,
 .subscribe-btn,
 .redelivery-btn {
  height: 56px;
  padding: 0.25rem 3rem;
  font-weight: bold;
  background: #FFB600 !important;
  color: #292929 !important;
  line-height: 30px;
  border-radius: 28px;
  font-size: 18px;
  font-weight: bold;
}

.subscribe-btn,
.redeem-btn {
  margin-right: 24px;
}

.reward-table {
    width: 100%;
    margin-top: 20px;
  }

  .table-head {
    background: #FFDF90;
    height: 58px;
    font-size: 16px;
    text-align: left;
    th {
      padding: 0 30px;
    }
  }
  .table-row {
    font-size: 14px;
    color: #333333;
    td {
      padding: 18px 30px;
      font-weight: bold;
      &:nth-child(2) {
        word-break: break-all;
      }
    }
    border-bottom: 1px solid #FFDF90;;
  }

@media (max-width: 992px) {
  .my-assets {
    padding: 15px;
  }

  .card  {
    display: none;
  }

  .table-head {
    th {
      padding: 0 8px;
    }
  }
  .table-row {
    font-size: 14px;
    td {
      padding: 4px 8px;
    }
  }

 .btn-wrapper {
    margin-top: 24px;
    .redeem-btn {
      margin-right: 0;
    }

    .redelivery-btn {
      margin-top: 12px;
    }
  }

  .redeem-btn,
 .subscribe-btn {
    // margin-top: 50px;
    padding: 0.25rem 2rem;
  }
}



</style>
