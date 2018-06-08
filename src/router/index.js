import Vue from 'vue'
import Router from 'vue-router'
import DocumentosCadastro from '../components/documentos/DocumentosCadastro'
import TabelaVuex from '../components/TabelaVuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      mode: 'history',
      path: '/documento-formulario',
      name: 'DocumentosCadastro',
      component: DocumentosCadastro
    },
    {
      mode: 'history',
      path: '/tabela-vuex',
      name: 'TabelaVuex',
      component: TabelaVuex
    }
  ]
})
