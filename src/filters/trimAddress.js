import Vue from 'vue';

const trimAddress = (address) => {
  if (address) {
    return address.replace(/^(.{6}).*(.{6})$/g, (str, $1, $2) => `${$1}...${$2}`);
  }
  return '';
};

Vue.filter('trimAddress', trimAddress);
