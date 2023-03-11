<template>
  <div class="earn" id="Earn">
      <div class="logo-wrapper">
        <img src="@/assets/img/top-dog@2x.png" alt="">
      </div>
     <b-container fluid="lg" >
      <h2>Earn</h2>
      <div class="earn-wrapper">
        <div
          class="slider-view"
          :class="{
            'step-2': step === 2,
            'step-3': step === 3,
            'step-4': step === 4,
          }"
          >
          <div class="slider">
            <SubscribeSelect
              :type="type"
              @next="onNextOne"
            />
          </div>
          <div class="slider">
            <Subscribe
              :type="type"
              @change-step="onChangeStep"
            />
          </div>
          <div class="slider">
            <MyAssets
              @change-step="onChangeStep"
            />
          </div>
          <div class="slider">
            <Claim
              :type="type"
              @change-step="onChangeStep"
            />
          </div>
        </div>
      </div>
    </b-container>
  </div>
  </template>
<script>
import { mapState, mapActions } from 'vuex';
import toastMixin from '@/mixin/toastMixin';
import SubscribeSelect from './SubscribeSelect.vue';
import Subscribe from './Subscribe.vue';
import MyAssets from './MyAssets.vue';
import Claim from './Claim.vue';


export default {
  components: {
    SubscribeSelect,
    Subscribe,
    MyAssets,
    Claim,
  },
  mixins: [toastMixin],

  data() {
    return {
      step: 1,
      type: 0,
    };
  },

  computed: {
    ...mapState(['user']),
  },

  watch: {
    'user.positionOpened': function (val) {
      if (val) {
        this.step = 3;
      }
    },

    'user.period': function (val) {
      if (val) {
        this.type = val;
      }
    },
  },

  created() {
    // this.getMines();

  },

  methods: {

    ...mapActions(['showComingSoon']),

    unlock() {
      this.$store.dispatch('unlockByMetaMask');
    },

    onNextOne(type) {
      this.type = type;
      this.step = 2;
    },

    onNextTwo() {
      // this.step = 3;
    },

    onPrevTwo() {
      this.step = 1;
    },
    onChangeStep(val) {
      this.step = val;
    },
    changeInviteCard(id) {
      this.active = id;
    },

    subscribe() {
      // console.log('xxxx');
      this.showError('123123', {
        tx: '123',
      });
    },
  },
};
</script>

  <style lang="scss" scoped>
  .earn {
    margin-top: -40px;
    padding-top: 150px;
    padding-bottom: 150px;
    background: #FFFAEB;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    // overflow: hidden;
    // background: url(~@/assets/img/bg-2@2x.png) center top / cover no-repeat;
  }

  .logo-wrapper {
    text-align: center;
    margin-top: -220px;
    margin-bottom: 60px;;
    & img {
      width: 160px;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 60px;
    text-align: center;
    margin-bottom: 60px;
    font-family: ArialRoundedMTBold;

  }

  .earn-wrapper {
    width: 100%;
    overflow: hidden;
    overflow: hidden;
  }

  .slider-view {
    display: flex;
    flex-wrap: nowrap;
    // transform: translate(-100%, 0);
    transition: all 0.5s ease;
    &.step-2 {
      transform: translate(-100%, 0);
    }
    &.step-3 {
      transform: translate(-200%, 0);
    }
    &.step-4 {
      transform: translate(-300%, 0);
    }
  }

  .slider {
    width: 100%;
    flex-shrink: 0;
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
    }
    .claim-btn {
      margin-top: 30px;
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
    }
    border-bottom: 1px solid #FFDF90;;
  }

  @media (max-width: 1200px) {
    .earn-container {
      .invite-pic {
          margin: 0;
          img {
            width: 100%;
            height: auto;
          }
        }
    }
  }

  @media (max-width: 992px) {
    .earn {
      padding-top: 60px;
      padding-bottom: 50px;
    }

    .logo-wrapper {
      margin-top: -100px;
      margin-bottom: 40px;;
      & img {
        width: 80px;
      }
    }

    h2 {
      font-size: 24px;
      margin-bottom: 30px;
    }

    .select-section {
      margin-bottom: 24px;
      padding: 40px 24px;
      height: auto;

      & .select-top {
        font-size: 20px;
      }

      & .select-middle {
        font-size: 20px;

        & em {
          font-size: 38px;
        }
      }

      & .select-bottom {
        font-size: 16px;
      }

      &.active {
        &::after {
          height: 47px;
          width: 50px;
        }
      }
    }

    .earn-container {
        padding-left: 16px;
        padding-right: 16px;
      .left {
        padding: 0;
      }
      .right {
        margin-left: 0;
        padding: 0;
      }
    }
  }

  </style>
