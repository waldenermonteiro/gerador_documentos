import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

import Documentos from './modules/Documentos/store';
import Contratos from './modules/Contratos/store';

Vue.use(Vuex);
const modules = {
  Documentos,
  Contratos
}
export default new Vuex.Store({
  state,
  mutations,
  modules,
  actions
})
