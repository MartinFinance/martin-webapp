<template>
<div class="problems" id="FAQ">
   <b-container fluid="lg" >
    <h2>FAQ</h2>

    <b-row class="list">
      <div
        v-for="(item, idx) in list"
        :key="item.title"
        class="list-item"
        :class="{ active: idx === active }"
        @click="onClick(idx)">

        <div>
          <span class="num-wrapper">
            {{ idx + 1 }}
          </span>
          <span class="item-title">
            {{ item.title }}
          </span>
        </div>

        <div v-if="idx === active" class="item-content" v-html="item.desc">
        </div>

        <span class="arrow">
          <img class="arrow-img" src="@/assets/img/downarrow@2x.png" alt="">
        </span>
      </div>

      <!-- <b-col
        v-for="(item, idx) in myproblems"
        :key="idx"
        span="12"
        lg="4"
      >
        <WorkCard class="card"  :item="item"/>
      </b-col> -->
    </b-row>
  </b-container>
</div>

</template>
<script>
import { mapState } from 'vuex';

export default {
  components: {
  },

  data() {
    return {
      active: '',
      list: [
        {
          title: 'How to be considered a successful referral?',
          desc: "To be considered a successful referral, the referee must link their wallet for the first time through the referrer's link and successfully subscribe to a transaction.",
        },
        {
          title: 'How to earn income through Regular Interest？',
          desc: `To earn income through Regular Interest, one can subscribe to Regular Interest products for a 30-day period and receive interest only when it is due. No interest will be given for redemption before maturity. It's important to note that a 0.5% handling fee will be charged for redemption, regardless of whether it's due or not.`,
        },
        {
          title: 'How to earn income through Daily Interest? ',
          desc: `To earn income through Daily Interest, one can subscribe to Daily Interest products for a cycle of 365 days. After successful subscription, interest will be received the next day, and it will stop immediately after redemption. It's important to note that a 0.5% handling fee will be charged for redemption, regardless of whether it's expired or not. Additionally, 10% of the redemption funds will be automatically reinvested.`,
        },
        {
          title: 'What is the burn rule?',
          desc: `The referrer's rebate depends on the minimum number of subscriptions between the referrer and the referee. For example, if Bob recommends Alice, and Alice subscribes for 20,000 USDT while Bob subscribes for 10,000 USDT, then the rebate for Bob as the referrer will be calculated at 10,000 USDT because Bob has the least number of subscriptions among Bob and Alice.`,
        },
        {
          title: 'What is a global dividend and how do I qualify for a dividend?',
          desc: `A global dividend is a 0.5% income earned by level 5 referrers from all of their referees' income. Here, the referee's income refers to the portion of the referee's own income from referrals. To qualify for a dividend, one must upgrade to level 5 referrer and maintain a current subscription amount of no less than $20,000.`,
        },
        {
          title: 'How to upgrade to the next level referees？',
          desc: `Advance to the next level by referring at least 2 direct referees.`,
        },
        {
          title: 'What is the subscription limit? ',
          desc: 'The minimum subscription limit is $1000 worth of USDT, while the maximum amount of USDT that can be subscribed is $20000.',
        },
      ],
    };
  },

  computed: {

  },

  created() {
    // this.getMines();
  },

  methods: {
    onClick(val) {
      if (this.active === val) {
        this.active = '';
      } else {
        this.active = val;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.problems {
  padding-top: 150px;
  padding-bottom: 198px;
  background: url(~@/assets/img/bg-4@2x.png) center top / cover no-repeat;
}

h2 {
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  margin-bottom: 60px;
  font-family: ArialRoundedMTBold;

}

.list {
  margin-bottom: 54px;
  background: url(~@/assets/img/question-dog@2x.png) right top / auto 512px no-repeat;
}

.list-item {
  width: 100%;
  padding-top: 21px;
  padding-bottom: 21px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
  border-radius: 2px;
  padding-left: 30px;
  font-size: 18px;

  color: #333;
  margin-bottom: 10px;
  position: relative;
}
.arrow {
  position: absolute;
  right: 24px;
  top: 20px;
  display: inline-block;
  & .arrow-img {
    width: 16px;
    height: 16px;
  }
}

.list-item.active {
  background: rgba(255, 250, 235, 0.5);

  & .arrow {
    transform: rotate(180deg);
  }
}

.num-wrapper {
  width: 20px;
  height: 20px;
  border: 1px solid #333333;
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
}

.item-title {
  margin-left: 8px;
  font-weight: bold;
  font-family: ArialRoundedMTBold;
}

.item-content {
  margin-top: 20px;
  color: #666666;
  font-size: 14px;
  font-family: ArialRoundedMTBold;
  padding-left: 30px;
}

@media (max-width: 992px) {

  .problems {
      padding-top: 40px;
      padding-bottom: 1px;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 30px;
    }

  .list {
    padding-left: 16px;
    padding-right: 16px;
    .card {
      margin-bottom: 24px;
    }
  }
}
</style>
