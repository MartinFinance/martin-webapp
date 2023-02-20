<template>
  <div>
    <b-row class="marshmallow-container" align-h="between">
      <b-col class="left" lg="6" order="1" order-md="1">
        <div class="select-section" :class="{active: active === 0}" @click="changeInviteCard(0)">
          <div class="select-top">
            <span>Earning No. 1</span>
            <span>30 days</span>
          </div>
          <div class="select-middle">
            APR：<em>10.00%+</em>
          </div>
          <div class="select-bottom">
            Pay interest only when due
          </div>
        </div>
      </b-col>
      <b-col class="right" lg="6" order="2" order-md="2">
        <div class="select-section" :class="{active: active === 1}" @click="changeInviteCard(1)">
          <div class="select-top">
            <span>Earning No. 2</span>
            <span>365 days</span>
          </div>
          <div class="select-middle">
            APR：<em>200.00%+</em>
          </div>
          <div class="select-bottom">
            Pay interest only when due
          </div>
        </div>
      </b-col>
  </b-row>
  <b-row align-h="center">
    <b-button
        v-if="user.address"
        class="subscribe-btn"
        variant="primary"
        @click="subscribe"
    >Subscribe</b-button>
      <b-button
        v-else
        class="connect-btn"
        variant="primary"
        @click="unlock"
    >Connect Wallet</b-button>
  </b-row>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import toastMixin from '@/mixin/toastMixin';

export default {
  components: {
  },
  mixins: [toastMixin],

  data() {
    return {
      active: 0,
    };
  },

  computed: {
    ...mapState(['user']),
  },

  created() {
    // this.getMines();

  },

  methods: {

    ...mapActions(['showComingSoon']),

    unlock() {
      this.$store.dispatch('unlockByMetaMask');
    },

    changeInviteCard(id) {
      this.active = id;
    },

    subscribe() {
      // console.log('xxxx');
      this.$emit('next', this.active);
      // this.showError('123123', {
      //   tx: '123'
      // });
    }
  },
};
</script>

<style lang="scss" scoped>
.marshmallow-container {
  margin-bottom: 54px;
  margin-top: 50px;
}

.select-section {
  width: 100%;
  // height: 322px;
  background: #FFFFFF;
  // box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.08);
  border-radius: 36px;
  padding: 56px;
  font-family: ArialRoundedMTBold;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;

  & .select-top {
    display: flex;
    justify-content: space-between;
    font-size: 24px;

    &span:nth-child(1) {
      color: #000000;
    }

    &span:nth-child(2) {
      color: #666666;
    }
  }

  & .select-middle {
    margin-top: 30px;
    height: 80px;
    background: #F8F8F8;
    border-radius: 15px;
    color: #666666;
    font-size: 24px;
    display: flex;
    align-items: baseline;
    line-height: 80px;
    padding: 0 16px;
    & em {
      color: #FFB600;
      font-size: 45px;
      font-weight: bold;
      font-style: normal;
    }
  }

  & .select-bottom {
    margin-top: 30px;
    font-size: 18px;
    color: #666666;
  }
  &.active {
    border: 5px solid #FFB600;
    &::after {
      content: '';
      position: absolute;
      top: -5px;
      right: -5px;
      height: 94px;
      width: 100px;
      background: red;
        background: url(~@/assets/img/check@2x.png) center top / cover no-repeat;

    }
  }
}

.connect-btn,
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
  font-family: ArialRoundedMTBold;
}

@media (max-width: 992px) {
  .select-section {
    &:first-child {
      margin-bottom: 24px;
    }

    .select-top {
      font-size: 20px;
    }
    .select-middle {
      font-size: 22px;
      height: 64px;
      line-height: 64px;
      & em {
        font-size: 32px;
      }
    }
  }
}
</style>
