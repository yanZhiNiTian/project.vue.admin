import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import { getStorage, setStorage } from '../util/storage.js';

import login from './login/login.js';

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  restoreState: (key, storage) => getStorage(key),
  saveState: (key, state, storage) => setStorage(key, state),
  modules: ['login']
});

const mutations = {
  RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION // this mutation **MUST** be named "RESTORE_MUTATION"
}

export default new Vuex.Store({
  mutations,
  modules: {
    login
  },
  plugins: [vuexLocal.plugin]
})
