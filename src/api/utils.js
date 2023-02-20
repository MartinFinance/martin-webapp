import axios from '@/common/axios';

/**
 * 登录
 */
export function getCsrf() {
  return axios({
    url: '/utils/csrf',
    method: 'GET',
  });
}
