<template>
<div class="recommend">
   <b-container fluid="lg" >
    <h2>My Referrals</h2>

    <b-row class="recommend-container" align-h="between">
      <b-col class="left" md="4" order="2" order-md="1">
        <img class="dog-bg" src="@/assets/img/gradient@2x.png" alt="">
        <img class="dog-img" src="@/assets/img/recommend-dog@2x.png" alt="">
      </b-col>
      <b-col class="right" md="7" order="1" order-md="2">
        <div class="tip">
          Whether to qualify for global dividends
          <img id="tooltip-target-007" class="question" src="@/assets/img/question@2x.png" alt="">
          <em> {{ user.inviterGrade >= 4 ? 'Yes' : 'No'}}</em>

          <b-tooltip target="tooltip-target-007" triggers="hover">
            Become a level 5 recommender to get global dividends
          </b-tooltip>
        </div>
        <div class="table-wrapper">
          <table>
            <thead class="table-head">
              <tr>
                <th>Referee's address</th>
                <th>Level</th>
                <th>Referrer's address</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="currentList.length">
                <tr class="table-row" v-for="item in currentList">
                  <td>{{ item.addr | ellipsis }}</td>
                  <td>{{ item.level + 1 }}</td>
                  <td>{{ item.inviter | ellipsis }}</td>
                  <td>{{ item.time * 1000 | formatTime('yyyy-MM-DD HH:mm:ss') }}</td>
                </tr>
              </template>
              <tr v-else class="table-row empty-row" >
                  <td colspan="4">No Data</td>
                </tr>
            </tbody>
          </table>
        </div>
        <!-- v-if="user.invitees.length > pageSize" -->
<!--  -->
        <Pagination
          :page-size="pageSize"
          :page="page"
          :total="user.invitees.length"
          @change="onPageChange"
        />
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
import { mapState } from 'vuex';
import Pagination from '@/components/Pagination';

// import {
//   martinDepositInterface, provider,
// } from '@/eth/ethereum';

export default {
  components: {
    Pagination,
  },

  filters: {
    ellipsis(address) {
      return address.replace(/^(.{6}).*(.{4})$/, '$1...$2');
    },
  },
  data() {
    return {
      page: 1,
      total: 10,
      pageSize: 10,
      active: '',
    };
  },

  computed: {
    ...mapState(['user']),
    list() {
      return this.user.invitees;
    },
    currentList() {
      return this.user.invitees.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
    },
  },

  created() {
    this.$store.dispatch('getInvitees');
  },

  methods: {
    onClick(val) {
      if (this.active === val) {
        this.active = '';
      } else {
        this.active = val;
      }
    },

    onPageChange(val) {
      this.page = val;
    }
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  padding-top: 150px;
  padding-bottom: 150px;
  background: #fff;
  overflow: hidden;
}

h2 {
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  margin-bottom: 60px;
  font-family: ArialRoundedMTBold;

}

.recommend-container {
  margin-bottom: 54px;

  & .left {
    position: relative;
    & .dog-bg {
      position: absolute;
      width: 900px;
      left: -200px;
      top: -150px;
    }
    & .dog-img {
      width: 430px;
    }
  }

  & .right {

  }
}

.right {
  margin-left: 50px;
  .tip {
    height: 16px;
    font-size: 16px;
    font-family: ArialRoundedMTBold;
    color: #000000;
    line-height: 16px;
    text-align: right;
    margin-bottom: 20px;
    & img {
      width: 20px;
    }
    & em {
      color: #FFB600;
      font-style: normal;
    }
  }
  table {
    width: 100%;
  }
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

table {
  font-family: ArialRoundedMTBold;
  white-space: nowrap;
}

.table-head {
  background: #FFDF90;
  height: 60px;
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
    padding: 20px 30px;
    // text-align: center;
  }
  border-bottom: 1px solid #FFDF90;;
}

.empty-row {
    text-align: center;
  }

@media (max-width: 992px) {
  .recommend {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 30px;
    }

  .recommend-container {
      padding-left: 16px;
      padding-right: 16px;
      // overflow-x: hidden;
      .card {
        margin-bottom: 24px;
      }
    .left {
      .dog-bg {
          width: 700px;
          // left: -200px;
          // top: -150px;
        }
        & .dog-img {
          width: 330px;
        }
    }

    .tip{
      font-size: 14px;
    }

    .right {
      margin-left: 0;
      margin-bottom: 48px;
      padding: 0;
    }
  }

  .table-head {
    th {
      padding: 0 8px;
      // font-size: 12px;
      // &:nth-child(3) {
      //   width: 100px;
      // }
    }
  }

  .table-row {
      td {
        padding: 10px 8px;
        // font-size: 12px;
        // &:nth-child(3) {
        //   width: 100px;
        // }
      }
  }
}

</style>
