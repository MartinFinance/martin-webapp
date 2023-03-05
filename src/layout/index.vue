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
              <span :class="{ active: active === 3}" @click="changeInviteCard(3)">Commission return</span>
            </div>

            <template v-if="active === 1">
              <table class="reward-table">
                <thead class="table-head">
                  <tr>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="subscriptionList.length">
                    <tr class="table-row" v-for="item in subscriptionList" :key="item.time + 0">
                      <td>{{ item.time * 1000 | formatTime('yyyy-MM-DD HH:mm:ss') }}</td>
                      <td>Earning No. {{ user.period === 0 ? 1 : 2 }}</td>
                      <td>{{ Math.round(item.changedAmount  / user.dogePrice) }}</td>
                    </tr>
                  </template>
                  <tr v-else class="table-row empty-row" >
                    <td colspan="3">No Data</td>
                  </tr>
                </tbody>
              </table>
            </template>

            <template v-if="active === 2">
              <table class="reward-table">
                <thead class="table-head">
                  <tr>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="redemptionList.length">
                    <tr class="table-row" v-for="item in redemptionList" :key="item.time + 0">
                      <td>{{ item.time * 1000 | formatTime('yyyy-MM-DD HH:mm:ss') }}</td>
                      <td>Earning No. {{ user.period === 0 ? 1 : 2 }}</td>
                      <td>{{ Math.round(item.changedAmount / user.dogePrice) }}</td>
                    </tr>
                  </template>
                  <tr v-else class="table-row empty-row" >
                    <td colspan="3">No Data</td>
                  </tr>
                </tbody>
              </table>
            </template>

            <template v-if="active === 3">
              <table class="reward-table">
                <thead class="table-head">
                  <tr>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="commissionList.length">
                    <tr class="table-row" v-for="item in commissionList" :key="item.time + 0">
                      <td>{{ item.time * 1000 | formatTime('yyyy-MM-DD HH:mm:ss') }}</td>
                      <td>Earning No. {{ user.period === 0 ? 1 : 2 }}</td>
                      <td>{{ Math.round(item.changedAmount / user.dogePrice) }}</td>
                    </tr>
                  </template>
                  <tr v-else class="table-row empty-row" >
                    <td colspan="3">No Data</td>
                  </tr>
                </tbody>
              </table>
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
          return state.user.events.filter((item) => item.eveType === 0 || item.eveType === 1);
        }
        return [];
      },
      redemptionList: (state) => {
        if (state.user.events) {
          console.log(state.user.events.filter((item) => item.eveType === 2))
          return state.user.events.filter((item) => item.eveType === 2);
        }
        return [];
      },
      commissionList: () => {
        return [];
      }
    }),
  },
  async created() {
    if (window.ethereum) {
      // const { chainId } = window.ethereum;

      // if (!(chainId === '0x38' || chainId === '0x61')) {
      //   this.showError(this.$t('selectNet'), {
      //     noCloseButton: true,
      //     autoHideDelay: 5000,
      //   });
      // }

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
    td {
      padding: 18px 30px;
      font-weight: bold;
      width: 30%;
    }
    border-bottom: 1px solid #FFDF90;;
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
</style>
