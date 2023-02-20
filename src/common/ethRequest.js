import { fetch } from 'whatwg-fetch';
import crypto from 'crypto';
import config from '@/config';


function id() {
  return crypto.randomBytes(8).toString('hex');
}

function parseJSON(res) {
  return res.json();
}

const headers = {
  'Content-Type': 'application/json',
};

function request(options) {
  let method;
  if (options.body) {
    method = options.body.method;
    options.headers = options.headers || headers;
    options.body.id = id();
    options.body.jsonrpc = '2.0';
    options.body = JSON.stringify(options.body);
  }

  return fetch(config.gethServer, options)
    .then(parseJSON)
    .then(res => {
      // console.log(`${method} response:`, res);
      return res
    })
}

export default request;
