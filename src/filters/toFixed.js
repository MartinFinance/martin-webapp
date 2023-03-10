import Vue from 'vue';

Vue.filter('toFixed', (num, decimal = 2) => {
  if (!Number.isNaN(num) && typeof num === 'number') {
    return Math.floor(num * 10 ** decimal) / 10 ** decimal;
  }
  return 0;
});
