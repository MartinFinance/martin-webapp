import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import moment from 'moment';
import toastMixin from '@/mixin/toastMixin';
import i18n from '@/i18n';
import { getLang } from '@/common/lang';

import App from './App.vue';
import router from './router';
import store from './store';
import './filters/toFixed';
import './filters/formatTime';
import './filters/trimAddress';

import '@/styles/theme-overrides/index.scss';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueCompositionAPI);
Vue.mixin(toastMixin);

Vue.config.productionTip = false;

window.__g_store__ = store;
window.__g_router__ = router;
window.__g_i18n__ = i18n;

store.dispatch('getDogePrice');
store.dispatch('getRange');

if (window.ethereum) {
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });

  // For now, 'eth_accounts' will continue to always return an array
  window.ethereum
    .request({ method: 'eth_accounts' })
    .then((accounts) => {
      store.dispatch('handleAccountsChanged', accounts);
    })
    .catch((err) => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });

  // Note that this event is emitted on page load.
  // If the array of accounts is non-empty, you're already
  // connected.
  window.ethereum.on('accountsChanged', (accounts) => {
    store.dispatch('handleAccountsChanged', accounts);
  });
}

const lang = getLang();
if (['zh', 'en'].includes(lang)) {
  i18n.locale = lang;
}

if (lang === 'zh') {
  moment.locale('zh-cn');
}

// eslint-disable-next-line no-underscore-dangle
window.__g_root__ = new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
