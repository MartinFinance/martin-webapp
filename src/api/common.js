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

/**
 * 获取持仓
 * @param {*}
 */
export async function getTree() {
  // export async function getgit (owner, repo, path) {
  // A function to fetch files from github using the api

  //   return axios({
  //     // url: 'https://github.com/MartinFinance/martin-merkletreedata/blob/main/amount.json',
  //     url: '/tree.json',
  //     baseURL: '/',
  //     method: 'GET',
  //   });

  const data = await fetch(
    'https://api.github.com/repos/MartinFinance/martin-merkletreedata/contents/amount.json',
    {
      headers: {
        Authorization: 'token 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',
      },
    },
  )
    .then((d) => d.json())
    .then((d) => fetch(
      `https://api.github.com/repos/MartinFinance/martin-merkletreedata/git/blobs/${d.sha}`,
      {
        headers: {
          Authorization: 'token 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',
        },
      },
    ))
    .then((d) => d.json())
    .then((d) => JSON.parse(atob(d.content)));

  return data;
}

// }

/**
 * 获取持仓
 * @param {*}
 */
// export async function getHistory() {
//   // export async function getgit (owner, repo, path) {
//   // A function to fetch files from github using the api

//   //   return axios({
//   //     // url: 'https://github.com/MartinFinance/martin-merkletreedata/blob/main/amount.json',
//   //     url: '/tree.json',
//   //     baseURL: '/',
//   //     method: 'GET',
//   //   });

//   const data = await fetch(
//     'https://api.github.com/repos/MartinFinance/martin-merkletreedata/contents/0x74cfa61e62232a4691c7cb2F108f2EFE54117fD5.json',
//     {
//       headers: {
//         Authorization: 'token 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',
//       },
//     },
//   )
//     .then((d) => d.json())
//     .then((d) => fetch(
//       `https://api.github.com/repos/MartinFinance/martin-merkletreedata/git/blobs/${d.sha}`,
//     ))
//     .then((d) => d.json())
//     .then((d) => JSON.parse(atob(d.content)));

//   return data;
// }

export async function getHistory(address) {
  try {
    const data = await fetch(
      `https://api.github.com/repos/MartinFinance/martin-merkletreedata/contents/${address}.json`,
      {
        headers: {
          Authorization: 'token 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',
        },
      },
    )
      .then((d) => d.json())
      .then((d) => {
        if (d.sha) {
          return fetch(
            `https://api.github.com/repos/MartinFinance/martin-merkletreedata/git/blobs/${d.sha}`,
            {
              headers: {
                Authorization: 'token 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',
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
