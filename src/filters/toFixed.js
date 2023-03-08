import Vue from 'vue';

Vue.filter('toFixed', (num, decimal = 2) => {
  if (typeof num === 'number') {
    return num.toFixed(decimal);
  }
  return 0;
});
