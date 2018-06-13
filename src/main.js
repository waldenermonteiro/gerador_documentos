
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
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';
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
console.log(jQuery)

import datePicker from 'vue-bootstrap-datetimepicker';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
Vue.use(datePicker)
Vue.component("datepicker", datePicker);
jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
  icons: {
    time: 'fa fa-clock',
    date: 'fa fa-calendar',
    up: 'fa fa-arrow-up',
    down: 'fas fa-arrow-down',
    previous: 'fa fa-chevron-left',
    next: 'fa fa-chevron-right',
    today: 'fa fa-calendar-check',
    clear: 'fa fa-trash-alt',
    close: 'fa fa-times-circle'
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
export const barramento = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
