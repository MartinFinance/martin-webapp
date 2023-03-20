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
          desc: 'The referee links the wallet for the first time through the link of the inviter, and successfully subscribe a transaction, it will be determined that the referral is successful',
        },
        {
          title: 'How to earn income through Regular Interest？',
          desc: 'The subscription period for Regular Interest products is 30 days, Pay interest only when due, No interest for redemption before maturity. It should be noted that no matter whether it is due or not, a 0.5% handling fee will be charged for redemption',
        },
        {
          title: 'How to earn income through Daily Interest？',
          desc: 'The subscription cycle of Daily Interest products is 365 days. After the subscription is successful, Receive interest the next day, and the interest will stop immediately after redemption. It should be noted that no matter whether it expires or not, a 0.5% handling fee will be charged for redemption, and 10% of the redemption funds will be automatically reinvested',
        },
        {
          title: 'What is the burn rule？',
          desc: 'The rebate of the inviter depends on the minimum subscribe quantity of the inviter and the invitee. For example, if Bob invites Alice, Alice subscribe 20,000 DOGE, and Bob subscribe 10,000 DOGE, then the rebate for Bob as the inviter will be calculated according to 10,000 DOGE, because Bob and Among Alice, Bob has the least number of subscriptions',
        },
        {
          title: 'What is a global dividend and how do I qualify for a dividend?',
          desc: 'Global dividend:After the inviter reaches level 5, he can get 5% of the income of all referees. Here, the referee\'s income refers to the part of the referee\'s own income from the invitation. <br> Qualification for dividends: upgrade to level 5 inviter',
        },
        {
          title: 'How to upgrade to the next level referral?',
          desc: 'Upgrade to the next level by inviting at least 2 direct referees',
        },
        {
          title: 'What is subscription limit?',
          desc: 'The minimum subscription limit is $600 worth of DOGE <br> The maximum amount of DOGE that can be subscribed is $1000',
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
      padding-bottom: 40px;
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
