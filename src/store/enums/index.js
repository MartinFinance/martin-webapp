import axios from '@/common/axios';
import staticEnums from './staticEnums';
import asyncEnums, { enumsConfig } from './asyncEnums';

const enums = {
  namespaced: 'enums',
  state: {
    ...staticEnums,
    ...asyncEnums,
  },
  mutations: {
    SET_ENUM_STATE: (state, resEnums) => {
      Object.assign(state, resEnums);
    },
  },
  actions: {
    /**
     * 获取选项数据
     */
    async FetchEnum({ commit }, {
      name,
      params,
    }) {
      const config = enumsConfig[name];
      if (config) {
        try {
          const data = await axios({
            url: config.url,
            method: config.method || 'GET',
            data: { ...config.params, ...params },
            hideMessage: true,
          });
          commit('SET_ENUM_STATE', {
            [name]: config.responseIntercepter(data),
          });
        } catch (error) {
          console.error(`
            获取枚举数据${name}失败。
          `);
        }
      } else if (process.env.BUILD_ENV === 'development') {
        // eslint-disable-next-line
        console.error(`
          找不到名称为${name}的枚举配置项，无法通过name获取枚举数据。
        `);
      }
    },
  },
};

export default enums;
