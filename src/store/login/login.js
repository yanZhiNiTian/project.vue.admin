/*
 * @Author: wdy
 * @Date:   2018-06-13 17:27:15
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-13 17:31:27
 */

import * as types from '@/store/mutation-types';

const state = {
  sessionId: '', // 用户id
  menu: [], // 左侧菜单
  asynRouter: [] // 异步路由
}

const getters = {
  sessionId: state => state.sessionId, // 用户id
  menu: state => state.menu, // 左侧菜单
  asynRouter: state => state.asynRouter // 异步路由
};

const mutations = {
  // 用户id
  [types.SET_SESSION_ID](state, sessionId) {
    state.sessionId = sessionId;
  },
  // 左侧菜单
  [types.SET_MENU](state, menu) {
    state.menu = menu;
  },
  // 异步路由
  [types.SET_ASYN_ROUTER](state, asynRouter) {
    state.asynRouter = asynRouter;
  }
}

const actions = {
  // 用户id
  setSessionId({ commit, state }, sessionId) {
    commit(types.SET_SESSION_ID, sessionId);
  },
  // 左侧菜单
  setMenu({ commit, state }, menu) {
    commit(types.SET_MENU, menu);
  },
  // 异步路由
  setAsynRouter({ commit, state }, asynRouter) {
    commit(types.SET_ASYN_ROUTER, asynRouter);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
