import { Validator } from "vee-validate";
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import config from '../assets/js/configVeeValidate'
import FunctionsValidations from './CustomFunctionsValidations.js'
Vue.use(FunctionsValidations);
Vue.use(VeeValidate, config)

//Validaçãop que verifica se o cnpj é válido
Validator.extend("cnpj", {
    getMessage: field => `Digite um CNPJ válido`,
    validate: value => Vue.prototype.validateCnpj(value) === true
});
Validator.extend("cpf", {
    getMessage: field => `Digite um CPF válido`,
    validate: value => Vue.prototype.validateCpf(value) === true
});
Validator.extend("phone", {
    getMessage: field => `Telefone precisa ter no mínimo 10 dígitos`,
    validate: value => Vue.prototype.validatePhone(value) === true
});