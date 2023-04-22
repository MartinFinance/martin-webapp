import axios from '@/common/axios';
import config from '@/config';

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

/**
 * 获取持仓
 * @param {*}
 */
export async function getTree() {
  const data = await fetch(
    `${config.gitTreeDataUrl}/contents/amount.json`,
    {
      headers: {
        Authorization: `token ${config.githubToken}`,
      },
    },
  )
    .then((d) => d.json())
    .then((d) => fetch(
      `${config.gitTreeDataUrl}/git/blobs/${d.sha}`,
      {
        headers: {
          Authorization: `token ${config.githubToken}`,
        },
      },
    ))
    .then((d) => d.json())
    .then((d) => JSON.parse(atob(d.content)));

  return data;
}

export async function getHistory(address) {
  try {
    const data = await fetch(
      `${config.gitTreeDataUrl}/contents/${address}.json`,
      {
        headers: {
          Authorization: `token ${config.githubToken}`,
        },
      },
    )
      .then((d) => d.json())
      .then((d) => {
        if (d.sha) {
          return fetch(
            `${config.gitTreeDataUrl}/git/blobs/${d.sha}`,
            {
              headers: {
                Authorization: `token ${config.githubToken}`,
              },
            },
          );
        }

        return {
          rewards: [],
        };
      })
      .then((d) => d.json())
      .then((d) => JSON.parse(atob(d.content)));

    return data;
  } catch (error) {
    return {
      rewards: [],
    };
  }
}
