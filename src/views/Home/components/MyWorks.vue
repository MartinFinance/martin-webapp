<i18n>
{
  "en": {
    "myCreations": "My owned creations",
    "viewMore": "View More"
  },
  "zh": {
   "myCreations": "我拥有的作品",
    "viewMore": "查看更多"
  }
}
</i18n>
<template>
<div class="works" v-if="this.myWorks.length">
   <b-container fluid="lg" >
    <h2>{{$t('myCreations')}}</h2>

    <b-row class="list">
      <b-col
        v-for="(item, idx) in myWorks"
        :key="idx"
        span="12"
        lg="4"
      >
        <WorkCard class="card"  :item="item"/>
      </b-col>
    </b-row>
    <div class="more-wrapper">
      <b-button variant="primary" @click="$router.push('/mine')">{{$t('viewMore')}}</b-button>
    </div>
  </b-container>
</div>

</template>
<script>
import { mapState } from 'vuex';
import queryQl from '@/common/queryQl';
import WorkCard from './WorkCard.vue';

export default {
  components: {
    WorkCard,
  },

  data() {
    return {
      myWorks: [],
    };
  },

  computed: {
    ...mapState({
      user: state => state.user
    })
  },

  created() {
    this.getMines();
  },

  methods: {
    async getMines() {
      const { data } = await queryQl(`{
          auctionEntities(first: 100, where:{creator: "${this.user.address}"}) {
            id
            nftId
            creator
            seller
            lastPrice
            endAt
            startedAt
            lastBidder
            tokenURI
            ended
          }
        }`);

      const { auctionEntities } = data.data;
      console.log('getMines', data.data);
      this.myWorks = auctionEntities;
    },

  },
};
</script>

<style lang="scss" scoped>
.works {
  padding-top: 150px;
  padding-bottom: 198px;
  // background: url(~@/assets/img/works-bg@2x.png) center top / auto 867px no-repeat;
}

h2 {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-bottom: 60px;
}

.list {
  margin-bottom: 54px
}

.more-wrapper {
  text-align: center;
}

@media (max-width: 992px) {
  .list {
    .card {
      margin-bottom: 24px;
    }
  }
}
</style>
