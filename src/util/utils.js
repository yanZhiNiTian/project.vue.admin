/*
 * @Author: wdy
 * @Date:   2018-06-21 13:33:23
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-21 15:21:31
 */
import { deepClone } from 'outils';
/**
 * [mixinsConfig description]
 * @param  {Object} defaultConfig [description]
 * @param  {Object} propsConfig   [description]
 * @return {[type]}               [description]
 */
export function mixinsObject(defaultObject = {}, propsObject = {}) {
  for (let key in defaultObject) {
    if (propsObject.hasOwnProperty(key)) {
      defaultObject[key] = propsObject[key]
    }
  }
}

export function mixinsArray(defaultArray = [], propsArray = []) {
  defaultArray = deepClone(propsArray)
}
