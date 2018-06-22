/*
 * @Author: wdy
 * @Date:   2018-06-13 11:30:10
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-21 18:37:23
 */

// 配置基础请求ajax路径
const baseUrl = 'http://localhost:8080/api';

// 配置ajax
const requestConfig = {
  method: 'post'
}

const remoteSelectConfig = {
  pageSize: 20,
  pageNo: 2
};

export {
  baseUrl,
  requestConfig,
  remoteSelectConfig
}
