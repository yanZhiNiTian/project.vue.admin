/*
 * @Author: wdy
 * @Date:   2018-06-13 10:58:29
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-13 11:58:15
 */
import { baseUrl } from '../assets/js/config.js';
const apiKeyList = [{
  key: 'login', // 登陆
  value: 'login'
}, {
  key: 'userPower', // 登陆
  value: 'userPower'
}];
const getApiKey = (keyName) => {
  let _apiKeyValue = '';
  apiKeyList.forEach((element, index) => {
    if (element['key'] === keyName) {
      _apiKeyValue = `${baseUrl}/${element['value']}.do`
    }
  });
  if (!_apiKeyValue) {
    console.error(`${keyName}不存在`)
  }
  return _apiKeyValue
}
export default getApiKey
