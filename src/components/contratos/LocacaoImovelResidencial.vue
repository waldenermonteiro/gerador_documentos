<template>

  <b-form v-if="show">
    <div class="text-center">
      <b-form-radio-group button-variant="outline-secondary" id="btnradios1" buttons v-model="selected" :options="options" name="radiosBtnDefault" />
    </div>
    <b-row v-show="selected == 'locador'">
      <b-col xl="6" lg="6">
        <b-form-group id="nome" label="<b>Nome</b>:" label-for="nomeinput">
          <b-form-input id="nomeinput" :state=" errors.first('nome') ? false : null" v-model="locacaoImovelResidencialLocador.nomeLocador" type="text" required placeholder="" name="nome" v-validate data-vv-as="Nome" data-vv-rules="required|min:10|max:400">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('nome') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="cnpj" label="<b>CNPJ</b>:" label-for="cnpjinput">
          <b-form-input v-mask="['##.###.###/####-##']" id="cnpjinput" :state=" errors.first('cnpj') ? false : null" maxlength="50" v-model="locacaoImovelResidencialLocador.cnpjLocador" type="text" required placeholder="" name="cnpj" v-validate data-vv-as="CNPJ" data-vv-rules="required|cnpj">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cnpj') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="email" label="<b>Email</b>:" label-for="emailinput">
          <b-form-input id="emailinput" :state=" errors.first('email') ? false : null" maxlength="50" v-model="locacaoImovelResidencialLocador.emailLocador" type="email" required placeholder="" name="email" v-validate data-vv-as="Email" data-vv-rules="required|email|max:50">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('email') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="6" lg="6">
        <b-form-group id="endereco" label="<b>Endereço</b>:" label-for="enderecoinput">
          <b-form-input id="enderecoinput" :state=" errors.first('endereco') ? false : null" v-model="locacaoImovelResidencialLocador.enderecoLocador" type="text" name="endereco" v-validate data-vv-as="Endereço" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('endereco') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="complemento" label="<b>Complemento</b>:" label-for="complementoinput">
          <b-form-input :state=" errors.first('complemento') ? false : null" v-model="locacaoImovelResidencialLocador.complemento" id="complementoinputLocador" type="text" name="complemento" v-validate data-vv-as="Complemento" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('complemento') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="bairro" label="<b>Bairro</b>:" label-for="bairroinput">
          <b-form-input id="bairroinput" :state=" errors.first('bairro') ? false : null" v-model="locacaoImovelResidencialLocador.bairroLocador" type="text" name="bairro" v-validate data-vv-as="Bairro" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('bairro') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="cidade" label="<b>Cidade</b>:" label-for="cidadeinput">
          <b-form-input id="cidadeinput" :state=" errors.first('cidade') ? false : null" v-model="locacaoImovelResidencialLocador.cidadeLocador" type="text" name="cidade" v-validate data-vv-as="Cidade" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cidade') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="2" lg="2">
        <b-form-group id="cep" label="<b>CEP</b>:" label-for="cepinput">
          <b-form-input id="cepinput" :state=" errors.first('cep') ? false : null" v-model="locacaoImovelResidencialLocador.cepLocador" type="text" name="cep" v-mask="'#####-###'" v-validate data-vv-as="CEP" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cep') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="4" lg="4">
        <b-form-group id="estado" label="<b>Estado</b>:" label-for="estadoinput">
          <b-form-select :state=" errors.first('estado') ? false : null" v-model="locacaoImovelResidencialLocador.estado" name="estado" v-validate data-vv-as="Estado" data-vv-rules="required">
            <option :value="''" disabled selected>ESTADO</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </b-form-select>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('estado') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="telefone" label="<b>Telefone</b>:" label-for="telefone">
          <b-form-input v-mask="['(##) ####-####', '(##) #####-####']" id="telefone" :state=" errors.first('telefone') ? false : null" v-model="locacaoImovelResidencialLocador.telefoneLocador" type="text" required placeholder="" name="telefone" v-validate data-vv-as="Telefone" data-vv-rules="required|phone">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('telefone') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row v-show="selected == 'locatario'">

    </b-row>
  </b-form>

</template>
<script>
import { Validator } from "vee-validate";
import { mask } from "vue-the-mask";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("Contratos", ["locacaoImovelResidencialLocador"])
  },
  directives: { mask },
  data() {
    return {
      show: true,
      showForm: true,
      selected: "locador",
      options: [
        { text: "Locador", value: "locador" },
        { text: "Locatario", value: "locatario" }
      ]
    };
  },
  mounted() {
    console.log(this.$store)
    this.$store.state.Documentos.validatorCadastro = this.$validator;
  },
  methods: {
    alterValueShowForm(val) {
      this.showForm = val;
    }
  }
};
</script>
<style>
.locador-locatario {
  display: inline;
  margin: 20px;
}
.locador-locatario a {
  font-size: 20px;
  color: blue !important;
  font-weight: 600;
  cursor: pointer;
}
.locador-locatario a:hover {
  opacity: 0.6;
}
</style>
