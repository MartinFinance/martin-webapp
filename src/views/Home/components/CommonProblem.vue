<template>
<div class="problems" id="FAQ">
   <b-container fluid="lg" >
    <h2>Common problem</h2>

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

        <div v-if="idx === active" class="item-content">
          {{ item.desc }}
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
          title: 'How to make money',
          desc: 'Available at any time, at any time and qualify for global dividends.',
        },
        {
          title: 'When can I get my income',
          desc: 'Available at any time, at any time and qualify for global dividends.',
        },
        // {
        //   title: 'How to make money',
        //   desc: 'Available at any time, at any time and qualify for global dividends.',
        // },
        {
          title: 'Management income directly under Level',
          desc: 'Available at any time, at any time and qualify for global dividends.',
        },
        {
          title: 'Qualify for global to make money',
          desc: 'Available at any time, at any time and qualify for global dividends.',
        },
        // {
        //   title: 'Management income directly under Level',
        //   desc: 'Available at any time, at any time and qualify for global dividends.',
        // },
        {
          title: 'Income directly under Level',
          desc: 'Available at any time, at any time and qualify for global dividends.',
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
