<i18n>
{
  "en": {
    "signup": "Sign Up For The Latest News From Coin Bid",
    "subscribe": "Subscribe"
  },
  "zh": {
    "signup": "注册订阅Cion Bid的最新消息",
    "subscribe": "订阅"
  }
}
</i18n>
<template>
  <b-container class="latest-news" fluid="lg">
    <b-row >
      <b-col class="col">
        <div class="sign-up-card">
          <h2>{{$t('signup')}}</h2>
          <div class="input-wrapper">
            <input type="text">
            <b-button class="sub-btn" variant="primary">
            <img src="@/assets/img/icon-send@2x.png" alt="">
            <span>{{$t('subscribe')}}</span>
            </b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.latest-news {
  margin-bottom: 138px;
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-up-card {
  max-width: 1056px;
  width: 100%;
  // height: 300px;
  background: #00D750;
  box-shadow: 0px 13px 20px 0px rgba(0, 215, 80, 0.41);
  border-radius: 5px;
  overflow: hidden;

  text-align: center;
  color: #fff;

  // display: flex;
  // flex-direction: column;
  // align-items: center;

  h2 {
    margin-top: 82px;
    margin-bottom: 0;
    font-size: 36px;
  }
}

.input-wrapper {
    max-width: 660px;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 4px 18px 0px rgba(205, 204, 211, 0.5);
    border-radius: 40px;
    margin-top: 38px;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-bottom: 56px;
    margin-left: auto;
    margin-right: auto;

    & input {
      height: 70px;
      width: 70%;
      flex-grow: 1;
      flex-shrink: 1;
      border: 0;
      padding-left: 24px;
      background: transparent;
      outline: 0;
      font-size:22px;
    }
    & .sub-btn {
      //  flex-shrink: 0;
      width: 269px;
      height: 70px;
      background: #00D750;
      border-radius: 35px;
      font-size: 24px;
      border: 0;
      & img {
        width: 34px;
        margin-right: 10px;
      }
    }
  }

@media (max-width: 992px) {
  .input-wrapper {

  }
}

@media (max-width: 576px) {
   .input-wrapper {
      margin-left: 12px;
      margin-right: 12px;
       & .sub-btn {
        width: 120px;
        & span {
          display:none;
        }
      }
    }
}


</style>
