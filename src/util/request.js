/*
 * @Author: wdy
 * @Date:   2018-06-13 09:31:31
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-13 14:42:14
 */
import axios from 'axios';
import { Loading } from 'element-ui';

import { requestConfig } from '@/assets/js/config.js';
let loadingInstance;
axios.interceptors.request.use((config) => {
  console.log('url:', config['url']);
  loadingInstance = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  return config
}, (error) => {
  return Promise.reject(error)
})
// 请求完成后的拦截器
axios.interceptors.response.use((response) => {
  console.log('data', response['data']);
  setTimeout(() => {
    loadingInstance.close();
  }, 2000);
  return response['data']
}, (error) => {
  return Promise.resolve(error.response)
});

function errorState(response) {
  // ...隐藏loading
  // console.log(response)
}

function successState(res) {
  // ...隐藏loading
  // console.log(res)
}
const request = (opts, params) => {
  // http默认配置
  let httpDefaultOpts = {
    method: requestConfig.method,
    url: opts.url
  };
  let promise = new Promise(function(resolve, reject) {
    axios(httpDefaultOpts).then((res) => {
      successState(res);
      resolve(res);
    }).catch((response) => {
      errorState(response);
      reject(response)
    })
  });
  return promise
};
export default request
