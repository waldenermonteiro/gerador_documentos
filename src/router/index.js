import Vue from 'vue'
import Router from 'vue-router'
import DocumentosCadastro from '../components/documentos/DocumentosCadastro'
import Documentos from '../components/documentos/Documentos'

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
      path: '/documentos',
      name: 'Documentos',
      component: Documentos
    }
  ]
})
