import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatTime', (time, formatter) => {
  if (!time) {
    return '';
  }
  return moment(time).format(formatter);
})
