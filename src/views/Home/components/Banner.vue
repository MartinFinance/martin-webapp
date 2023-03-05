
<template>
  <div class="banner">
    <div class="bg">
      <!-- <img src="~@/assets/img/big-banner@2x.png" alt=""> -->
    </div>
    <b-container fluid="lg">
      <div class="left-content">
        <h3 >
          GM! Musk,
        </h3>
        <p>take your DOGE to the Moon with</p>
        <p><em>Martin Quantization.</em></p>
        <p>so fucking exciting…</p>

        <!-- <div class="content">{{$t('content')}}</div>
        <b-button variant="primary" size="lg" @click="$router.push('/auction')">{{$t('explore')}}</b-button> -->
      </div>
    </b-container>
  </div>

</template>

<style lang="scss" scoped>

.banner {
  height: 920px;
  padding-top: 240px;
  box-sizing: border-box;
  position: relative;
  margin-top: -74px;
  background: url(~@/assets/img/big-banner@2x.png) center center / auto 100% no-repeat;
  z-index: -1;
}

.left-content {
  max-width: 640px;
  font-size: 40px;
  font-family: ArialRoundedMTBold;

  & h3 {
    font-size: 100px;
    font-weight: bold;
    // margin-bottom: px;
  }
  & p {
    line-height: 42px;
  }

  & em {
    color: #FFB600;
    font-style: normal;
  }
}

.content {
  font-size: 18px;
  color: #333;
  margin-bottom: 64px;
}

.bg {
  z-index: -1;
  position: absolute;
  top: 0;
  height: 920px;
  width: 100%;
  overflow: hidden;
  // background: red;
  // & img {
  //   height: 920px;
  //   width: 1326px;
  //   position: absolute;
  // }

}

@media (max-width: 992px) {
  .banner {
    background: url(~@/assets/img/small-banner@2x.png) center center / auto 100% no-repeat;
  }
  // .bg {
  //   & img {
  //     right: -800px
  //   }
  // }

  .left-content {
    & h3 {
      font-size: 64px;
      font-weight: bold;
    }
    & p {
      font-size: 24px;
      line-height: 24px;
    }

    & em {
      color: #FFB600;
      font-style: normal;
    }
  }

}

@media (max-width: 540px) {
  .bg {
    & img {
      right: -1100px
    }
  }
}
</style>
