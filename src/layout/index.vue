<template>
  <div
    class="app-wrapper">
      <div class="fixed-header">
        <navbar
          @history="openHistory"
        />
      </div>

      <b-modal size="lg" ref="my-modal" modal-class="history-modal" hide-footer title="History">
        <div class="invite-card">
            <div class="invite-head">
              <span :class="{ active: active === 1}" @click="changeInviteCard(1)">Subscription</span>
              <span :class="{ active: active === 2}" @click="changeInviteCard(2)">Redemption</span>
              <span :class="{ active: active === 3}" @click="changeInviteCard(3)">Reward</span>
            </div>

            <template v-if="active === 1">
              <div class="table-wrapper">
                <table class="reward-table">
                  <thead class="table-head">
                    <tr>
                      <th>Date</th>
                      <th>Product</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="subscriptionList.length">
                      <tr class="table-row" v-for="item in subscriptionList" :key="item.time + 0">
                        <td>{{ item.time * 1000 | formatTime('yyyy-MM-DD HH:mm:ss') }}</td>
                        <td>{{ user.period === 0 ? 'Regular Interest' : 'Daily Interest' }}</td>
                        <td>$ {{ item.changedAmount / 10 ** user.usdDecimals | toFixed }}</td>
                      </tr>
                    </template>
                    <tr v-else class="table-row empty-row" >
                      <td colspan="3">No Data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>

            <template v-if="active === 2">
              <div class="table-wrapper">

              <table class="reward-table">
                <thead class="table-head">
                  <tr>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="redemptionList.length">
                    <tr class="table-row" v-for="item in redemptionList" :key="item.time + 0">
                      <td>{{ item.time * 1000 | formatTime('yyyy-MM-DD HH:mm:ss') }}</td>
                      <td>{{ user.period === 0 ? 'Regular Interest' : 'Daily Interest' }}</td>
                      <td>$ {{ item.changedAmount / 10 ** user.usdDecimals | toFixed }}</td>
                    </tr>
                  </template>
                  <tr v-else class="table-row empty-row" >
                    <td colspan="3">No Data</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </template>

            <template v-if="active === 3">
              <div class="table-wrapper">

              <table class="reward-table">
                <thead class="table-head">
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Address</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="rebateList.length">
                    <tr class="table-row" v-for="item in rebateList" >
                      <td> {{ item.time * 1000 | formatTime('yyyy-MM-DD HH:mm:ss') }}</td>
                      <td v-if="item.type === 'interest'">{{ item.period === 0 ? 'Regular Interest' : 'Daily Interest' }}</td>
                      <td v-if="item.type === 'invition'">Invition</td>
                      <td v-if="item.type === 'globalShare'">Global Share</td>
                      <td>{{ item.invitee || '-' | trimAddress }}</td>
                      <td>$ {{ item.amount.hex / 10 ** user.usdDecimals | toFixed }}</td>
                    </tr>
                  </template>
                  <tr v-else class="table-row empty-row" >
                    <td colspan="4">No Data</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </template>
        </div>
      </b-modal>

      <router-view v-if="user.loaded"/>
      <footerbar />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { BigNumber } from 'ethers';
import config from '@/config';
import Navbar from './components/Navbar.vue';
import Footerbar from './components/Footerbar.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footerbar,
  },
  data() {
    return {
      active: 1,
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
    ...mapState({
      user: (state) => state.user,

      subscriptionList: (state) => {
        if (state.user.events) {
          return state.user.events.filter((item) => item.eveType === 0 || item.eveType === 1).sort((a, b) => b.time - a.time);
        }
        return [];
      },
      redemptionList: (state) => {
        if (state.user.events) {
          return state.user.events.filter((item) => item.eveType === 2).sort((a, b) => b.time - a.time);
        }
        return [];
      },
      rebateList: (state) => state.user.rewards.sort((a, b) => b.time - a.time),
    }),
  },
  async created() {
    if (window.ethereum) {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });

      if (!BigNumber.from(chainId).eq(0x38) && !BigNumber.from(chainId).eq(0x61)) {
        try {
          window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
              chainId: config.chainId,
            }],
          });
        } catch (switchError) {
          this.showError(this.$t('selectNet'), {
            noCloseButton: true,
            autoHideDelay: 5000,
          });
        }
      }
    }
  },
  methods: {
    openHistory() {
      this.$refs['my-modal'].show();
    },

    changeInviteCard(id) {
      this.active = id;
    },
  },
};
</script>

<style lang="scss">
  .history-modal {
    font-family: ArialRoundedMTBold;

    & .modal-dialog {
      margin-top: 240px;
    }
    & .modal-header {
      padding: 1rem 30px;
      border-bottom: none;
      // color: red;
    }
    & .modal-title {
      font-size: 36px;

    }

    & .modal-body {
      padding: 1rem 30px;
    }
  }

  @media (max-width: 992px) {

    .history-modal {
      & .modal-dialog {
        margin-top: 120px;
      }
      & .modal-header {
        padding: 1rem 16px;
        border-bottom: none;
      }
      & .modal-title {
        font-size: 36px;
      }
      & .modal-body {
        padding: 1rem 16px;
      }
    }
  }
</style>
<style lang="scss" scoped>
  // @import "~@/styles/mixin.scss";
  // @import "~@/styles/variable.scss";

  .invite-card {
      // padding: 0 30px;
      padding-bottom: 36px;
    }

    .invite-head {
      font-size: 24px;
      font-family: ArialRoundedMTBold;
      color: #666666;
      line-height: 24px;
      & span {
        display: inline-block;
        height: 24px;
        color: #666666;
        line-height: 24px;
        margin-right: 30px;
        cursor: pointer;
        &.active {
          color: #000000 ;
          border-bottom: 4px solid #FFB600;
        }
      }
    }

    // .invite-body {
    //   margin-top: 60px;
    //   height: 60px;
    //   border: 1px solid #999999;
    //   font-size: 18px;
    //   font-family: ArialRoundedMTBold;
    //   color: #333333;
    //   line-height: 18px;
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   padding:0 20px;
    //   & img {
    //     width: 18px;
    //   }
    // }

  .reward-table {
    width: 100%;
    margin-top: 20px;
  }

  .table-wrapper {
    width: 100%;
    overflow-x: auto;
  }

  .table-head {
    background: #FFDF90;
    height: 58px;
    font-size: 16px;
    text-align: left;
    th {
      padding: 0 30px;
      width: 30%;
    }
  }

  .table-row {
    font-size: 14px;
    color: #333333;
    white-space: nowrap;
    border-bottom: 1px solid #FFDF90;;
    td {
      padding: 18px 30px;
      font-weight: bold;
      width: 30%;
      // white-space: break-spaces;
      // word-break: break-all;
    }
  }

  .empty-row {
    text-align: center;
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 50px;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    height: 74px;
  }

  .hideSidebar {
    .fixed-header {
      width: 100%;
    }
    .main-container {
      width: 100%;
      margin-left: 0 !important;
    }
  }

  @media (max-width: 992px) {

    .table-row {
      // font-size: 14px;
      // color: #333333;
      // white-space: nowrap;
      // border-bottom: 1px solid #FFDF90;;
      td {
        // white-space: break-spaces;
        // word-break: break-all;
      }
    }

    .invite-head {
      font-size: 14px;
      line-height: 14px;
      white-space: nowrap;
      & span {
        // display: inline-block;
        height: 24px;
        // color: #666666;
        // line-height: 24px;
        // margin-right: 30px;
        cursor: pointer;
        // &.active {
        //   color: #000000 ;
        //   border-bottom: 4px solid #FFB600;
        // }
      }
    }

    .table-head {
      font-size: 16px;
      text-align: left;
      th {
        padding: 8px 10px;
      }
    }

    .table-row {
      font-size: 14px;
      td {
        padding: 8px 10px;
      }
    }
  }

  // & .modal-body {
  //     padding: 1rem 30px;
  //   }
</style>
