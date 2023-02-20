/* eslint-disable */
/**
 * 不同环境载入不同配置文件
 * @todo 按需加载配置文件
 */
import devConfig from './config.dev';
import testConfig from './config.test';
import prodConfig from './config.prod';

let config = {};

if (process.env.NODE_ENV === 'development') {
  config = devConfig;
} else if (process.env.NODE_ENV === 'test') {
  config = testConfig;
} else {
  config = prodConfig;
}

export default config;
