import axios from 'axios';
import Cookies from 'js-cookie';
import Qs from 'qs';

// import { Message, Loading } from 'element-ui';
// import { getCsrf } from '@/api/utils';

const BIZ_ERROR = 'BizError';

const instance = axios.create({
  baseURL: '/service',
  timeout: 30000,
});

let loadingInstance;

instance.interceptors.request.use(async (options) => {
  const { __interceptorOptions__ } = options;
  if (__interceptorOptions__ && __interceptorOptions__.loading) {
    // loadingInstance = Loading.service({
    //   fullscreen: true,
    // });
  }

  if (__interceptorOptions__?.encode && options.data) {
    // eslint-disable-next-line no-param-reassign
    options.data = Qs.stringify(options.data);
  }

  // eslint-disable-next-line no-param-reassign
  // options.headers['X-CSRFToken'] = Cookies.get('csrftoken');

  return options;
});

function outputError(error) {
  const { response = {} } = error;
  // eslint-disable-next-line no-console
  console.error(
    '%s\n url: %s\n method: %s\n params: %s\n response: %s',
    error.message,
    response.config.url,
    response.config.method,
    JSON.stringify(response.config.data || response.config.params || null),
    JSON.stringify(response.data),
  );
}
instance.interceptors.response.use((response) => {
  if (loadingInstance) {
    loadingInstance.close();
  }
  const result = response.data;
  const { __interceptorOptions__ } = response.config;

  // 符合约定接口格式
  if (result.Code != null && result.Message != null) {
    if (result.Code === 0) {
      return result.data;
    }

    const error = new Error(`Request failed with biz status code ${result.Code}${result.Message ? `, ${result.Message}` : ''}`);

    error.name = BIZ_ERROR;
    error.response = response;
    // 104 105为后端限制聊天条数特殊定制
    if (__interceptorOptions__?.hideMsg !== true) {
      // Message.error({
      //   message: result.Message || ' 未知错误',
      //   customClass: 'messager',
      // });
    }

    if (process.env.NODE_ENV === 'development') {
      outputError(error);
    }

    return Promise.reject(error);
  }
  return result;
}, (error) => {
  // console.dir(error);
  if (process.env.NODE_ENV === 'development') {
    outputError(error);
  }

  if (loadingInstance) {
    loadingInstance.close();
  }
  const { config, response } = error;

  if (response.status === 401 && response?.data?.Code === 2) {
    window.location.href = '/login';
  }

  // eslint-disable-next-line no-underscore-dangle
  if (config?.__interceptorOptions__?.hideMsg !== true) {
    // Message.error({
    //   message: response?.data?.Message || response.statusText || ' 未知错误',
    //   customClass: 'messager',
    // });
  }

  return Promise.reject(error);
});

export default instance;
