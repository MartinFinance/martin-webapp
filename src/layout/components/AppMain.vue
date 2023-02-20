<template>
  <section class="app-main">
    <!-- <transition name="fade-transform" mode="out-in"> -->
      <!-- <keep-alive :include="cachedViews"> -->
      <!-- </keep-alive> -->
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews;
    // },
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  // padding: 0 12px;
}

.fixed-header+.app-main {
  padding: 88px 24px 0;
}

</style>
