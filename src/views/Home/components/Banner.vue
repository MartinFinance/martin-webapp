<i18n>
{
  "en": {
    "discover": "Discover, collect,and sell extraordinary NFTs",
    "content": "Coin Bid The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.",
    "explore": "Explore"
  },
  "zh": {
    "discover": "发现、收集和销售非凡的 NFT",
    "content": "Coin Bid 世界上第一个也是最大的加密收藏品和不可替代代币 (NFT) 的数字市场。购买、出售和发现独家数字资产。",
    "explore": "探索"
  }
}
</i18n>

<template>
  <div class="banner">
    <div class="bg">
      <img src="~@/assets/img/banner@2x.png" alt="">
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
  height: 720px;
  padding-top: 180px;
  box-sizing: border-box;
  position: relative;
  margin-top: -74px;
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
  height: 720px;
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
  .bg {
    & img {
      right: -800px
    }
  }

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
