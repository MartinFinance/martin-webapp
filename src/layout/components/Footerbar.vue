<template>
  <div class="footer">
    <b-container fluid="lg">
      <!-- <b-row class="contact-bar" >
      </b-row> -->
      <b-row class="footer-bar" align-h="between" align-v="center">
        <b-col cols="12" lg="6">
          <img class="logo" src="@/assets/img/logo@2x.png" alt="">
        </b-col>

        <b-col cols="12" lg="6" class="social-wrapper">
          <!-- <img class="logo" src="@/assets/img/logo@2x.png" alt=""> -->
          <img class="social-icon" src="@/assets/img/icon-twitter@2x.png" alt="">
          <img class="social-icon" src="@/assets/img/icon-discord@2x.png" alt="">
          <img class="social-icon" src="@/assets/img/icon-tele@2x.png" alt="">
        </b-col>
      </b-row>
    </b-container>

      <div class="divider"></div>
    <b-container fluid="lg">

      <b-row class="copyright-bar" align-h="center" align-v="center">
        <b-col cols="12"  lg="6">
          <div class="copyright">Copyright © 2023 Martin Quantization Foundation. All rights reserved</div>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['showComingSoon']),
  },
};
</script>

<style lang="scss" scoped>

.footer {
  // background: url(~@/assets/img/footer-bg@2x.png) 115% 100% / auto 75px no-repeat;
}

.contact-bar {
  padding-bottom: 118px;
  // width: 100%;
  h5 {
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }

  a {
    color: #607D8B;
    font-size:16px;
    margin-top: 12px;
    display: inline-block;
  }

  .blog-card-container {
    display: flex;
    justify-content: flex-end;
  }

}

.footer-bar {
  padding: 72px 0;
  .logo {
    height: 36px;
  }

  .social-wrapper {
    text-align: right;
  }

  .social-icon {
    width: 48px;
    & + .social-icon {
      margin-left: 60px;
    }
  }

}

.divider {
  border-top: 1px solid #EEEEEE;

}
.copyright-bar  {
  height: 110px;
  .copyright {
    color: #6B717B;
    font-size: 14px;
    text-align: center;
    // text-align: right;
  }
}
@media (max-width: 992px) {

  .footer {
    // background: url(~@/assets/img/footer-bg@2x.png) 20% 100% / auto 75px no-repeat;
    // background-position: ;
  }

  .footer-bar {
    // flex-direction: column;
    padding: 24px 0 0;

    .social-wrapper {
      margin-top: 24px;
      margin-bottom: 24px;
      text-align: center;
    }

  }

}

</style>
