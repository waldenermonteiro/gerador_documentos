import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

import Documentos from './modules/Documentos/store';

Vue.use(Vuex);
const modules = {
  Documentos
}
export default new Vuex.Store({
  state,
  mutations,
  modules,
  actions
})
