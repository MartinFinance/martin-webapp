<template>
  <div class="invitation" id="InvitationRebate">
     <b-container fluid="lg" >
      <h2>Invitation & Reward</h2>
      <div class="sub-title">Invite friends, earn more income, and qualify for global dividends</div>

      <div class="rules-container">
        <div class="rules-title">
          Income distribution rules:
          <em>(can be collected regularly in each cycle)</em>
        </div>

        <div class="rules-list">
          <div class="rules-item">
            Level 5 agents receive
            <em>100%</em>
            of the wealth management income directly under Level 5
          </div>
          <div class="rules-item">
            Level 5 agents receive
            <em>25%</em>
            of the wealth management income directly under Level 4
          </div>

          <div class="rules-item">
            Level 5 agents receive
            <em>15%</em>
            of the wealth management income directly under Level 3
          </div>

          <div class="rules-item">
            Level 5 agents receive
            <em>5%</em>
            of the wealth management income directly under Level 2
          </div>

          <div class="rules-item">
            Level 5 agents receive
            <em>15%</em>
            of the wealth management income directly under Level 1
          </div>
        </div>
      </div>

      <b-row class="invitation-container" align-h="between">
        <b-col class="left" lg="6" order="1" order-md="1">
          <div class="invite-card">
            <div class="invite-head">
              <span :class="{ active: active === 1}" @click="changeInviteCard(1)">Invite</span>
              <!-- <span :class="{ active: active === 2}" @click="changeInviteCard(2)">Reward</span> -->
            </div>

            <div v-show="active === 1">
              <template v-if="user.positionOpened">
                <div class="invite-body">
                  <span>Recommended link</span>
                  <span>
                    {{(link) | ellipsis}}
                    <img src="@/assets/img/copy@2x.png" class="copy-btn" alt="">
                  </span>
                </div>
                <b-button
                  class="invite-btn copy-btn"
                  variant="primary">
                  Invite friends
                </b-button>
              </template>

              <template v-else>
                <div class="not-invited">
                  You have not been invited
                  <img id="tooltip-target" class="question" src="@/assets/img/question@2x.png" alt="">
                  <b-tooltip target="tooltip-target" triggers="hover">
                    Hold DOGE financial management
                  </b-tooltip>
                </div>
                <b-button
                  class="invite-btn"
                  variant="primary"
                  @click="onScrollTo"
                >
                  Qualified for Invitation
                </b-button>
              </template>
            </div>

            <div v-show="active === 2">
              <table class="reward-table">
                <thead class="table-head">
                  <tr>
                    <th>Type</th>
                    <th>Claimable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-row" v-for="item in list">
                    <td>{{ item.type }}</td>
                    <td>{{ item.claimable }}</td>
                  </tr>
                </tbody>
              </table>

              <b-button
                class="claim-btn"
                variant="primary">
                Claim
              </b-button>
            </div>
          </div>
        </b-col>
        <b-col class="right" lg="6" order="2" order-md="2">
          <div class="invite-pic">
            <img src="@/assets/img/invite-pic@2x.png" alt="">
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </template>

<script>
import { mapState } from 'vuex';
import ClipboardJS from 'clipboard';
import config from '@/config';

export default {
  components: {
  },

  filters: {
    ellipsis(address) {
      return address.replace(/^(.{14}).*(.{4})$/, '$1...$2');
    },
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
    ...mapState(['user']),
    link() {
      return `${config.webUrl}/#/?refer=${this.user.address}`;
    },
  },

  created() {
    const clipboard = new ClipboardJS('.copy-btn', {
      text: () => this.link,
    });

    clipboard.on('success', (e) => {
      this.showSuccess('Copy Successfully', {
        title: 'Notice',
        autoHideDelay: 5000,
      });

      e.clearSelection();
    });
  },

  methods: {
    onClick(val) {
      if (this.active === val) {
        this.active = '';
      } else {
        this.active = val;
      }
    },

    changeInviteCard(id) {
      this.active = id;
    },
    onScrollTo() {
      const targetElement = document.getElementById('Investment');
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    },
  },
};
</script>

  <style lang="scss" scoped>
  .invitation {
    padding-top: 150px;
    padding-bottom: 150px;
    background: #fff;
    // overflow: hidden;
    background: url(~@/assets/img/bg-2@2x.png) center top / cover no-repeat;
  }

  h2 {
    font-weight: bold;
    font-size: 60px;
    text-align: center;
    margin-bottom: 60px;
    font-family: ArialRoundedMTBold;

  }

  .sub-title {
    font-size: 36px;
    line-height: 38px;
    font-family: ArialRoundedMTBold;
    color: #333333;
    text-align: center;
  }

  .invitation-container {
    margin-bottom: 54px;
    margin-top: 50px;

    & .left {

    }

    & .right {

    }

    // & .invite-card {
    //   margin-top: 20px;
    // }

    & .invite-pic {
      // margin-left: -20px;
      & img {
        width: 100%;
      }
    }
  }

  .rules-container {
    max-width: 1200px;
    background: #FFFFFF;
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.08);
    border-radius: 36px;
    margin-top: 90px;
    padding: 50px;
    overflow: hidden;
  }

  .rules-title {
    font-size: 30px;
    font-family: ArialRoundedMTBold;
    color: #000000;
    line-height: 30px;
    border-bottom: 1px solid #DFDFDF;
    padding-bottom: 40px;

    &::before {
      display: inline-block;
      content: '';
      width: 6px;
      height: 24px;
      background: #FFB600;
      border-radius: 3px;
      margin-right: 16px;
    }
    em {
      color: #FFB600;
      font-style: normal;
    }
  }

  .rules-list {
    font-size: 24px;
    font-family: ArialRoundedMTBold;
    color: #666666;
    line-height: 24px;
    em {
      color: #FFB600;
      font-style: normal;
    }

  }

  .rules-item {
    padding: 20px 0;
    border-bottom: 1px solid #DFDFDF;

      &::before {
        display: inline-block;
        content: '';
        width: 6px;
        height: 6px;
        background: #999999;
        border-radius: 3px;
        margin-right: 16px;
        vertical-align: middle;
        margin-top: -2px;
      }
    }

    .invite-card {
      padding: 40px 30px;
      font-family: ArialRoundedMTBold;
    }

    .invite-head {
      font-size: 24px;
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

    .invite-body {
      margin-top: 60px;
      height: 60px;
      border: 1px solid #999999;
      font-size: 18px;
      color: #333333;
      line-height: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 20px;
      & img {
        width: 18px;
      }
    }

    .not-invited {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-top: 64px;
    }

    .question {
      width: 20px;
    }

    .claim-btn,
    .invite-btn {
      width: 100%;
      margin-top: 50px;
      height: 56px;
      padding: 0.25rem 1rem;
      font-weight: bold;
      background: #FFB600 !important;
      color: #292929 !important;
      line-height: 30px;
      border-radius: 28px;
      font-size: 18px;
      font-weight: bold;
      font-family: ArialRoundedMTBold;

    }
    .claim-btn {
      margin-top: 30px;
    }

    .copy-btn {
      cursor: pointer;
    }

  .invite-card {
    // max-width: 584px;
    height: 370px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
    border-radius: 36px;
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
    .invitation-container {
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

    .invitation {
      padding-top: 50px;
      padding-bottom: 50px;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .sub-title {
      font-size: 20px;
    }

    .rules-container {
      margin-top: 30px;
      padding: 20px;
    }

    .rules-title {
      font-size: 18px;
      padding-bottom: 24px;
    }
    .rules-item {
      padding: 12px 0;
    }
    .rules-list {
      font-size: 14px;
    }
    .invitation-container {
        margin-top: 30px;
        padding-left: 16px;
        padding-right: 16px;
        // overflow-x: hidden;
      // width: 100%;
      .left {
        padding: 0;
      }

      .right {
        margin-left: 0;
        margin-bottom: 30px;
        padding: 0;
      }

      .invite-card {
        width: 100%;
        margin-bottom: 30px;
        padding: 20px;
        height: auto;
      }

      .invite-body {
        font-size: 14px;
      }

      .invite-pic {
        margin-bottom: 30px;
        margin: 0;

      }
    }

  }
  </style>
