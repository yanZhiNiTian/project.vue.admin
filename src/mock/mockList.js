/*
 * @Author: wdy
 * @Date:   2018-06-13 10:22:38
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-21 18:24:04
 */
import Mock from 'mockjs';
import getApiKey from '@/api/api.js';

import { login, userPower } from './login/login.js';

import { remoteSelect } from './common/select.js';// 加载远程数据

function creatJson(url, data) {
  let _data = {
    code: 0,
    data: data,
    msg: 'succeed'
  }
  Mock.mock(url, _data).setup({
    timeout: 1000
  });
}

creatJson(getApiKey('login'), login);
creatJson(getApiKey('userPower'), userPower);
creatJson(getApiKey('remoteSelect'), remoteSelect);
