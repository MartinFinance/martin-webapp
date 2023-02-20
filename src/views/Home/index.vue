<template>
  <div class="home">
    <Banner />
    <Marshmallow />
    <Invitation />
    <Recommend />
    <CommonProblem />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from './components/Banner.vue';
import Marshmallow from './components/Marshmallow.vue';
import CommonProblem from './components/CommonProblem.vue';
import Recommend from './components/Recommend.vue';
import Invitation from './components/Invitation.vue';
// import Artists from './components/Artists.vue';
// import Auction from './components/Auction.vue';
// import ArtWorks from './components/ArtWorks.vue';
// import MyWorks from './components/MyWorks.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Marshmallow,
    CommonProblem,
    Recommend,
    Invitation,
  },
};
</script>

<style lang="scss" scoped>
.home {
  // background: url(~@/assets/img/bottom-bg@2x.png) 100% 100% / 400px auto no-repeat;
}
</style>
