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
          <div class="label">Product：</div>
          <div class="content">
            <span>Earning No. {{ type + 1 }}</span>
            <span>APR: <em>{{ type === 0 ? '10.00%+' : '200.00%+'}}</em></span>
          </div>
        </div>

        <div class="content-row row-amount">
          <div class="label">Amount：</div>
          <div class="content">
            <div class="content-left">
              <label for="">Balance: </label>
              <input type="number" v-model.number="amount" @input="onInput">
              <!-- <span>DOGE</span> -->
            </div>

            <div class="content-right">
              <span class="max-btn" @click="amount = max">MAX</span>
              <span><img src="@/assets/img/small-logo@2x.png" alt=""></span>
              <span class="unit">DOGE</span>
            </div>
          </div>
        </div>
        <!--
        <div class="content-row row-amount">
          <div class="label">Inviter：</div>
          <div class="content">
            <div class="content-left">
              <input type="text" v-model="amount" @input="onInput">
            </div>
          </div>
        </div> -->

        <div class="content-row row-range" >
          <div class="label">Operating range：</div>
          <div class="content">
            <span>Min：{{min}} DOGE</span>
            <span>Max: {{max}} DOGE</span>
          </div>
        </div>

        <div class="content-row row-interest">
          <div class="label">Estimated interest：</div>
          <div class="content">
            <em>{{interest}} DOGE</em>
          </div>
        </div>
      </b-col>

      <b-col class="right-section"  lg="6">
        <div class="content-row row-operating">
          <div class="label">Operating range：</div>
          <div class="content">
            <div>Pay interest only due</div>
          </div>
        </div>

        <div class="content-row">
          <div class="label"></div>
          <div class="content">
            <div class="timeline">
              <div class="timeline-item">
                <div class="discribe">Subscription date</div>
                <div class="time">{{subscriptionDate}} 08:00:00</div>
              </div>
              <span class="line"></span>
              <div class="timeline-item">
                <div class="discribe">Value date</div>
                <div class="time">{{valueDate}} 08:00:00</div>
              </div>
              <span class="line"></span>
              <div class="timeline-item">
                <div class="discribe">Interest payment time</div>
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
      <b-button
            class="subscribe-btn"
            variant="primary"
            @click="onBuy"
            :disabled="submitting"
        >Subscribe</b-button>
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
    const { refer } = this.$route.query;
    return {
      invitee: refer || config.defaultInviter,
      submitting: false,
      amount: 0,
    };
  },
  computed: {
    ...mapState(['user']),
    min() {
      if (this.user.positionOpened) {
        const min = Math.ceil((this.user.min - this.user.depositAmount) / this.user.dogePrice);
        return min < 0 ? 0 : min;
      }

      return Math.ceil(this.user.min / this.user.dogePrice);
    },

    max() {
      if (this.user.positionOpened) {
        return Math.floor((this.user.max - this.user.depositAmount) / this.user.dogePrice);
      }

      return Math.floor(this.user.max / this.user.dogePrice);
    },

    interest() {
      if (!this.amount) {
        return 0;
      }

      if (this.type === 0) {
        return Math.floor(this.amount * 0.1);
      }

      if (this.type === 1) {
        return Math.floor(this.amount * 2);
      }
    },

    subscriptionDate() {
      return moment().format('yyyy-MM-DD');
    },

    valueDate() {
      return moment().add(1, 'day').format('yyyy-MM-DD');
    },

    interestDate() {
      if (this.type === 0) {
        return moment().add(30, 'day').format('yyyy-MM-DD');
      }

      if (this.type === 1) {
        return moment().add(365, 'day').format('yyyy-MM-DD');
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

    async onBuy() {
      // const { tokenId } = this.$route.query;
      const { amount } = this;

      console.log(this.refer)
      if (amount < this.min) {
        this.showError(`The minimum subscribe is ${this.min} DOGE`);
        return;
      }

      if (!this.user.address) {
        this.showError('Please connect metamask');
        return false;
      }

      this.submitting = true;

      const dogeBalance = await dogeTokenContract.balanceOf(this.user.address);

      if (dogeBalance.lt(amount)) {
        this.showError('You balance is not enough');
        this.submitting = false;
        return false;
      }

      try {
        const allowance = await dogeTokenContract.allowance(
          this.user.address,
          config.MartinDepositAddress,
        );

        if (allowance.lt(amount)) {
          const approveTxHash = await sendTransaction({
            to: config.DogeTokenAddress,
            data: dogeTokenInterface.encodeFunctionData('approve', [
              config.MartinDepositAddress,
              BigNumber.from('9'.repeat(32)).toHexString(),
            ]),
          });

          const approveTx = await provider.waitForTransaction(approveTxHash);

          if (approveTx.status !== 1) {
            this.showError('Approve fail，please retry');
            this.submitting = false;
            return;
          }
          console.log(approveTx);
        }

        let usdtAmount = this.amount * this.user.dogePrice;

        const min = this.user.min - this.user.depositAmount;
        const max = this.user.max - this.user.depositAmount;

        if (min > 0 && usdtAmount < min) {
          usdtAmount = min;
        }

        if (usdtAmount > max) {
          usdtAmount = max;
        }
        let buyTxHash;

        if (!this.user.positionOpened) {
          buyTxHash = await sendTransaction({
            to: config.MartinDepositAddress,
            gas: 960000,
            data: martinDepositInterface.encodeFunctionData('open', [
              BigNumber.from((Math.round(usdtAmount)).toString()).toHexString(),
              this.type,
              this.invitee,
            ]),
          });
        } else {
          buyTxHash = await sendTransaction({
            to: config.MartinDepositAddress,
            gas: 960000,
            data: martinDepositInterface.encodeFunctionData('deposit', [
              BigNumber.from((Math.round(usdtAmount)).toString()).toHexString(),
            ]),
          });
        }
        this.showPending('Pending', {
          tx: buyTxHash,
        });

        const buyTx = await provider.waitForTransaction(buyTxHash);

        if (buyTx.status === 1) {
          this.showSuccess('Success', {
            tx: buyTxHash,
          });
          this.$emit('change-step', 3);
          this.$store.dispatch('getPosition');
          this.$store.dispatch('getBalances');
        } else {
          this.showError('Faild', {
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
      padding-left: 20px;
      padding-right: 20px;
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

 .row-range {
    .content {
      // font-size: 18px;
      font-size: 16px;
      display: inline-flex;
      justify-content: space-between;
    }
  }

 .row-interest {
  .content {
    display: inline-flex;
      justify-content: space-between;
  }
    & em {
      font-size: 24px;
    }
  }
  .row-operating {
    .content {
      color: #000
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
