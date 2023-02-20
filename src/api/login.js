import axios from '@/common/axios';

/**
 * 登录
 */
export function login(params) {
  return axios({
    url: '/account/login',
    method: 'POST',
    data: params,
  });
}

/**
 * 获取登录用户信息
 * @param {*}
 */
export function getUser() {
  return axios({
    url: '/account/userinfo',
    method: 'GET',
  });
}

/**
 * 获取登录用户信息
 * @param {*}
 */
export function logout() {
  return axios({
    url: '/account/logout',
    method: 'GET',
  });
}
