/*
 * @Author: wdy
 * @Date:   2018-06-13 11:42:40
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-25 14:52:24
 */
// import { baseUrl } from '@/assets/js/config.js';
import { request } from '@/util/request.js';
import getApiKey from '@/api/api.js';

function normalPaperList(params) {
  return request({
    url: getApiKey('normalPaperList')
  }, params)
}

export {
  normalPaperList
}
