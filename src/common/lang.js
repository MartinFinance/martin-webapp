import Cookies from 'js-cookie';

export const setLang = (lang) => {
  Cookies.set('lang', lang, { expires: 365 });
};

export const getLang = () => {
  const lang = Cookies.get('lang');

  return lang || 'en';
};
