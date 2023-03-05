/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import mapValues from 'lodash.mapvalues';

// 异步枚举获取配置
const enumsConfig = {
  // deviceCollectors: {
  //   url: '/device/adaptor/list',
  //   init: true,
  //   method: 'GET',

  //   responseIntercepter: data => data.map(item => ({
  //     label: item.name,
  //     value: item.id,
  //     original: item,
  //   })),
  // },

  deviceTemplates: {
    url: '/device/template/list',
    init: true,
    method: 'GET',

    responseIntercepter: (data) => data.map((item) => {
      for (const key in item.data_points) {
        const point = item.data_points[key];

        if (point.type === 'ENUM' && point.enum) {
          const enumList = point.enum.split('\n');
          const enumData = {};
          enumList.forEach((enumItem) => {
            const [label, value] = enumItem.split(':');
            enumData[value] = label;
          });
          point.enum = enumData;
        }
      }

      return {
        label: item.name,
        value: item.id,
        original: item,
      };
    }),
  },

  stations: {
    url: '/station/list',
    init: true,
    method: 'GET',

    responseIntercepter: (data) => data.map((item) => ({
      label: item.name,
      value: item.id,
      original: item,
    })),
  },
};

const asyncEnums = mapValues(enumsConfig, () => []);

export {
  asyncEnums as default,
  enumsConfig,
};
