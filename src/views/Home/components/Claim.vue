<template>
  <div class="subscribe">
<!--
    狗狗币价格实时从chainlink获取，或者用户打开、刷新页面&提交理财购买请求时
minimum——价值1000 刀的doge数量
maxmum——价值20000 刀的doge数量
（Estimated interes）预估收入=本金*10%，，另一个=本金*200%
Subscripton date：UTC时间，申购当日8点开始计息
Value date：Subscripton date+1日，8点开始发放利息
interest payment time：
-30天的那就是：Subscripton date+30日，8点
-365天的就是：Subscripton date+365日，8点 -->
    <b-row align-v="start">
      <b-col  class="left-section" lg="6">
        <div class="content-row row-product">
          <div class="label label-short">Product：</div>
          <div class="content">
            <span>{{ user.period === 0 ? 'Regular Interest' : 'Daily Interest' }}</span>

          </div>
        </div>

        <div class="content-row row-product">
          <div class="label label-short">APR: </div>
          <div class="content">
            <span><em>{{ user.period === 0 ? '120.00%+' : '200.00%+'}}</em></span>
          </div>
        </div>

        <div class="content-row row-amount">
          <div class="label label-short">Amount：</div>
          <div class="content">
            <div class="content-left">
              <input :placeholder="`Available:${claimable}`" type="number"  v-model.number="amount" @input="onInput">
              <!-- <span>DOGE</span> -->
            </div>

            <div class="content-right">
            <span class="max-btn" @click="amount = max">MAX</span>
             <img src="@/assets/img/small-logo@2x.png" alt="">
              <span class="unit">DOGE</span>
            </div>
          </div>
        </div>

        <div class="content-row row-tip">
          <div class="content">
            = $ {{ (amount * user.dogePrice / 10 ** user.dogePriceDecimals) | toFixed(2) }}
          </div>
        </div>
      </b-col>

      <b-col class="right-section"  lg="6">
        <div class="content-row row-operating">
          <div class="label">Interest payment：</div>
          <div class="content">
            <div>
              <span>{{ user.period === 0 ? 'Pay interest only when due' : 'Receive interest the next day' }}</span>
              <br>
              No interest for redemption before maturity
            </div>
          </div>
        </div>

        <div class="content-row">
          <div class="label"></div>
          <div class="content">
            <div class="timeline">
              <div class="timeline-item">
                <div class="discribe">Subscription date</div>
                <div class="time"> {{subscriptionDate }}  08:00:00</div>
              </div>
              <span class="line"></span>
              <div class="timeline-item">
                <div class="discribe">Accrual Start Date</div>
                <div class="time">{{valueDate}} 08:00:00</div>
              </div>
              <span class="line"></span>
              <div class="timeline-item">
                <div class="discribe">First Distribution Date</div>
                <div class="time">{{interestDate}} 08:00:00</div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <!-- {{ user }} -->
  <b-row align-h="center">
    <div class="btn-wrapper">
      <div class="tip" v-if="user.period === 0">Tips:0.5% handling fee will be deducted for redemption.</div>
      <div class="tip" v-if="user.period === 1">Tips:0.5% handling fee will be deducted for redemption, and 10% of the funds will be automatically reinvested.</div>
      <b-button
        class="subscribe-btn"
        variant="primary"
        @click="onClaim"
        :disabled="submitting || user.withdrawable === 0 || !amount"
      >
        Redeem
        <b-icon
          v-if="submitting"
          icon="arrow-repeat"
          rotate="45"
          animation="spin"
        ></b-icon>
      </b-button>
      <b-button
            class="cancel-btn"
            @click="onCancel"
        >Cancel</b-button>
    </div>
  </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';
import { BigNumber } from 'ethers';
import { defineComponent } from '@vue/composition-api';
import sendTransaction from '@/common/sendTransaction';
import config from '@/config';
import { getTree } from '@/api/common';

import { StandardMerkleTree } from '@openzeppelin/merkle-tree';

import {
  dogeTokenContract, dogeTokenInterface, martinDepositInterface, provider,
} from '@/eth/ethereum';

export default defineComponent({
  props: {
    type: {
      type: Number,
    },
  },
  data() {
    return {
      invitee: config.addressZero,
      submitting: false,
      amount: '',
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
    claimable() {
      return Math.floor(this.user.withdrawable / this.user.dogePrice);
    },
    min() {
      return 1;
    },

    max() {
      return this.claimable;
    },

    subscriptionDate() {
      return moment(this.time).format('yyyy-MM-DD');
    },

    valueDate() {
      return moment(this.time).add(1, 'day').format('yyyy-MM-DD');
    },

    interestDate() {
      if (this.user.period === 0) {
        return moment(this.time).add(30, 'day').format('yyyy-MM-DD');
      }

      if (this.user.period === 1) {
        return moment(this.time).add(365, 'day').format('yyyy-MM-DD');
      }
    },
  },

  methods: {
    onInput(event) {
      let { value } = event.target;
      value = value.replace(/[^\d]/g, ''); // 只保留数字
      this.amount = parseInt(value, 10); // 转成数字类型
      if (this.amount > this.max) {
        this.amount = this.max;
      }
    },

    async onClaim() {
      // const { tokenId } = this.$route.query;
      const { amount } = this;
      if (amount < this.min) {
        this.showError(`The minimum claim is ${this.min} DOGE`);
        return;
      }

      if (amount > this.max) {
        this.showError(`The maximum claim is ${this.min} DOGE`);
        return;
      }

      if (!this.user.address) {
        this.showError('Please connect metamask');
        return false;
      }

      if (!this.user.jsonAmount) {
        this.showError('Withdrawal is only possible after 24 hours');
        return false;
      }

      this.submitting = true;

      try {
        const usdtAmount = this.amount * this.user.dogePrice;

        const content = await getTree();

        const tree = StandardMerkleTree.load(content);
        let proof = '';
        // eslint-disable-next-line no-restricted-syntax
        for (const [i, v] of tree.entries()) {
          if (v[0].toLowerCase() === this.user.address.toLowerCase()) {
            proof = tree.getProof(i);
          }
        }

        const buyTxHash = await sendTransaction({
          to: config.MartinDepositAddress,
          gas: 640000,
          data: martinDepositInterface.encodeFunctionData('withdraw', [
            proof,
            this.user.jsonAmount,
            BigNumber.from((Math.round(usdtAmount)).toString()).toHexString(),
          ]),
        });

        this.showPending('Pending', {
          tx: buyTxHash,
        });

        const buyTx = await provider.waitForTransaction(buyTxHash);

        if (buyTx.status === 1) {
          this.showSuccess('Succeeded', {
            tx: buyTxHash,
          });
          this.amount = '';

          this.$store.dispatch('getPosition');
          this.$store.dispatch('getWithdrawable');
          this.$store.dispatch('getBalances');
        } else {
          this.showError('Failed', {
            tx: buyTxHash,
          });
        }
      } catch (error) {
        console.error(error);
      }
      this.submitting = false;
    },

    onCancel() {
      if (this.user.positionOpened) {
        this.$emit('change-step', 3);
      } else {
        this.$emit('change-step', 1);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
 .subscribe {
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

 .left-section {
  // margin-right: 32px;
 }

 .right-section {
  // padding-left: 36px;
  flex-shrink: 1;
 }

 .content-row {
  margin-bottom: 24px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  .label {
    flex-shrink: 0;
    width: 160px;
    height: 16px;
    font-size: 16px;
    color: #666666;
    line-height: 16px;
  }

  .label-short {
    width: 120px;
  }

  .content {
    width: 100%;
    align-items: center;
  }

  em {
    color: #FFB600;
    font-style: normal;
    font-weight: bold;
  }
 }

 .row-product {
    .content {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color: #000000;
      align-items: center;
    }

    em {
      font-size: 24px;
    }
  }

 .row-amount {
    .content {
      height: 40px;
      border: 1px solid #999999;
      display: flex;
      justify-content: space-between;
      color: #666666 ;
      font-size: 18px;
      align-items: center;
      padding-left: 12px;
      padding-right: 12px;
    }

    & .content-left {
      display: inline-flex;
      flex-shrink: 1;
      flex-grow: 1;
    }

    & .content-right {
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }
    & label {
      margin: 0;
      margin-right: 12px;
    }

    & input {
      border: 0;
      outline: none;
      flex-shrink: 1;
      width: 100%;
      flex-grow: 1;
    }

    & .max-btn {
      background: #EAECEF;
      color: #666;
      border-radius: 2px;
      width: 38px;
      height: 21px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      font-size: 14px;
      cursor: pointer;
    }

    & img {
      width: 24px;
      margin-right: 10px;
    }

    & .unit {
      color: #333;
      font-size: 18px;
    }
  }

  .row-tip {
    margin-top: -12px;
    color: #666666;
    font-size: 14px;
    .content {
      margin-left: 120px;
    }
  }


 .cancel-btn,
.subscribe-btn {
  // margin-top: 50px;
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

.cancel-btn {
  margin-left: 24px;
  background: #EAECEF !important;
  border-color: #EAECEF;
}

.btn-wrapper {
  margin-top: 46px;
  text-align: center;

  .tip {
    font-size: 12px;
    color: #666666;
    margin-bottom: 12px;
  }
}

.timeline {
  background: #FBFAFA;
  border-radius: 2px;
  padding: 20px;
  font-size: 14px;
  color: #666;
  font-weight: bold;

  & .timeline-item {
    display: flex;
    justify-content: space-between;
    text-align: left;

    & .discribe::before{
      content: '';
      display: inline-block;
      width: 9px;
      height: 9px;
      background: #FFB600;
      border-radius: 5px;
      margin-right: 8px;
      margin-left: -3px;
    }
  }

  & .line {
    display: block;
    width: 1px;
    height: 31px;
    border: 1px solid #CCCCCC;
  }
}

@media (max-width: 992px) {

  .subscribe {
    padding: 18px;
  }

  .content-row {
    flex-wrap: wrap;
    .label {
      margin-bottom: 8px;
    }
  }

  .right-section {
    // padding-left: 32px;
  }

  .row-tip {
    .content {
      margin-left: 0;
    }
  }

  .btn-wrapper {
      margin-top: 24px;
    }

    .redeem-btn,
 .subscribe-btn {
    // margin-top: 50px;
    padding: 0.25rem 2rem;
  }

}

</style>
