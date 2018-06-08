
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './plugins/CustomValidations.js'
import Icon from 'vue-awesome';
import ContainerPanel from '../src/components/shared/container-panel/ContainerPanel.vue';
import Panel from '../src/components/shared/panel/Panel.vue';
import swal from 'sweetalert';
import router from './router'
import store from './store/store'
import Validations from './plugins/CustomFunctions.js'
import ShowMessages from './plugins/CustomMessages.js'
import VueDatePicker from 'vue-bootstrap-datetimepicker'
Vue.component('vue-date-picker', VueDatePicker)
const moment = require('moment')

Vue.use(require('vue-moment'), {
  moment
})
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(Validations)
Vue.use(ShowMessages)
Vue.use(VueFormWizard)

Vue.component("panel", Panel);
Vue.component("container-panel", ContainerPanel);
Vue.component('icon', Icon);
Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
