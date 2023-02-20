import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/locales/en';
import zh from '@/locales/zh';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // 默认语言
  fallbackLocale: 'en',
  silentTranslationWarn: true,
  messages: {
    en,
    zh,
  },
});

export default i18n;
