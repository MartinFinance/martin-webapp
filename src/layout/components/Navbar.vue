<template>
  <b-navbar
    class="navbar"
    toggleable="lg"
    :variant="(atTop && isHome) ? '' : 'light'"
    type="light"
    fixed="top"
  >

    <b-container fluid="lg">
      <b-navbar-brand href="/">
        <img class="logo" src="@/assets/img/logo@2x.png" alt="">
      </b-navbar-brand>

      <b-navbar-toggle
        @click="onToggleClick"
        target="nav-collapse"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :active="active === 'Home'" href="#" @click.prevent="toAnchor">Home</b-nav-item>
          <b-nav-item :active="active === 'Earn'"  href="#Earn" @click.prevent="toAnchor">Earn</b-nav-item>
          <b-nav-item :active="active === 'InvitationRebate'"  href="#InvitationRebate" @click.prevent="toAnchor">Invitation rebate</b-nav-item>
          <b-nav-item :active="active === 'FAQ'"  href="#FAQ" @click.prevent="toAnchor">FAQ</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="link"  class="history-btn"  @click.stop.prevent="$emit('history')">History</b-button>
          <!-- <b-button class="lang-switch" variant="link">English</b-button> -->
            <span
              v-if="user.address"
              class="address-btn"
            >
              {{user.address | ellipsis}}
              <b-icon
                v-if="user.addressLoading"
                icon="arrow-repeat"
                rotate="45"
                animation="spin"
              ></b-icon>
            </span>
           <b-button
              v-else
              size="sm"
              class="sign-btn"
              variant="outline-primary"
              @click="unlock"
            >
              <!-- <img src="@/assets/img/icon-user@2x.png" alt=""> -->
            Connect Wallet</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { setLang, getLang } from '@/common/lang';

export default {
  filters: {
    ellipsis(address) {
      return address.replace(/^(.{6}).*(.{8})$/, '$1...$2');
    },
  },
  data() {
    return {
      lang: getLang(),
      atTop: true,
      expand: false,

      active: 'Home',

    };
  },
  computed: {
    ...mapState(['user']),
    isHome() {
      return this.$route.path === '/';
    },
    langText() {
      const langMap = {
        zh: '简体中文',
        en: 'English',
      };
      return langMap[this.lang];
    },
  },
  mounted() {
    const sectionList = ['Earn', 'InvitationRebate', 'FAQ'];

    document.addEventListener('scroll', (e) => {

      if (window.scrollY === 0) {
        this.atTop = true;
      } else {
        this.atTop = false;
      }
      if (window.scrollY < 400) {
        this.active = 'Home';
        return;
      }

      sectionList.forEach((eleId) => {
        const target = document.getElementById(eleId);
        const elementRect = target.getBoundingClientRect();
        const elementTop = elementRect.top;
        const elementBottom = elementRect.bottom;
        // 判断元素是否在窗口内
        if (elementTop < 0 && elementBottom > 0) {
          this.active = eleId;
        }
        // }
      });
    });

    // 获取所有锚点元素
    const anchors = document.querySelectorAll('a[href*="#"]');
    // 对每个锚点添加点击事件
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // 获取目标元素的 ID
        const targetId = this.getAttribute('href').slice(1);

        const targetElement = document.getElementById(targetId);
        let targetPosition = 0;
        if (targetElement) {
          targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        }

        // 使用 window.scrollTo 滚动到目标位置
        window.scrollTo({
          top: targetPosition + 50,
          behavior: 'smooth',
        });

        if (targetElement) {
          this.active = targetId;
        } else {
          this.active = 'Home';
        }
      });
    });
  },

  methods: {
    onToggleClick() {
      this.expand = !this.expand;
    },
    changeLang(lang) {
      setLang(lang);
      window.location.reload();
    },

    toAnchor(e) {
      // 获取目标元素的 ID
      const targetId = e.target.getAttribute('href').slice(1);

      if (targetId === 'History') {
        return;
      }
      const targetElement = document.getElementById(targetId);
      let targetPosition = 0;
      if (targetElement) {
        targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      }

      // 使用 window.scrollTo 滚动到目标位置
      window.scrollTo({
        top: targetPosition + 100,
        behavior: 'smooth',
      });

      setTimeout(() => {
        // 滚动完成后执行的操作
        if (targetElement) {
          this.active = targetId;
        } else {
          this.active = 'Home';
        }
      }, 500);
    },

    ...mapActions(['showComingSoon']),

    unlock() {
      this.$store.dispatch('unlockByMetaMask');
    },

  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 36px;
  margin-right: 36px;
}

.navbar-nav {
  align-items: center;
  & .nav-item {
    margin-right: 24px;
    font-size: 16px;
    font-family: ArialRoundedMTBold;
    line-height: 14px;

    .nav-link {
      color: #000000;
      text-align: center;
      font-size: 16px;
      padding: 0 0;
      display: inline-block;
      height: 26px;
      line-height: 32px;
      font-weight: bold;
      border-radius: 0;
      &.active {
        border-bottom: 4px solid #FFB600;
      }
    }
  }
  .address-btn {
    margin-right: 12px;
    border: 2px solid #FFB600;
    border-radius: 16px;
    color: #FFB600;
    height: 32px;
    padding: 0 12px;
    line-height: 32px;
    background: rgba(255, 255, 255, 0.3);
    font-family: ArialRoundedMTBold;

  }

  .history-btn {
    outline: none !important;
    box-shadow: none !important;
    text-decoration: none !important;
    color: #333;
    font-weight: bold;
    font-family: ArialRoundedMTBold;
    font-size: 16px;
    margin-right: 16px;
    line-height: 14px;
    padding: 0;
    &:hover {
      border-bottom: 4px solid #FFB600;
    }
  }
}

.lang-switch {
  color: #000000;
  margin-right: 12px;
}

.sign-btn {
  height: 40px;
  padding: 0.25rem 1rem;
  font-weight: bold;
  background: #FFB600 !important;
  color: #292929 !important;
  line-height: 30px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  font-family: ArialRoundedMTBold;

}

.navbar {
  padding: 14px 1rem;
  // background-color: transparent !important;

  &.bg-light {
    background-color: rgba(255, 255, 255, 0.6) !important;
    backdrop-filter: blur(8px);
    // box-shadow: 0px 8px 20px 0px rgba(153, 153, 153, 0.12);
  }
}

@media (max-width: 1200px) {
  .navbar {
    background-color: #fff !important;
  }

  .navbar-nav {
    .nav-item {
      margin-right: 8px;
    }
  }
}

@media (max-width: 992px) {
  .logo {
    height: 32px;
    margin-right: 0;

  }
  .navbar-nav {
    .nav-item {
      padding: 8px 0;
    }

    .btn {
      margin-top: 12px;
    }
  }
}
</style>
