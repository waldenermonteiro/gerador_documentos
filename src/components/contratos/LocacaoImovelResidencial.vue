<template>
  <b-form v-if="show">
    <div class="text-center">
      <b-form-radio-group button-variant="outline-secondary" id="btnradios1" buttons v-model="selected" :options="options" name="radiosBtnDefault" />
    </div>
    <b-row v-show="selected == 'locador'" style="margin-top:2.6%">
      <b-col xl="6" lg="6">
        <b-form-group id="nome" label="<b>Nome</b>:" label-for="nomeinput">
          <b-form-input size="sm" id="nomeinput" :state=" errors.first('nome') ? false : null" v-model="locacaoImovelResidencial.nomeLocador" type="text" required placeholder="" name="nome" v-validate data-vv-as="Nome" data-vv-rules="required|min:10|max:400">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('nome') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="nacionalidadeLocador" label="<b>Nacionalidade</b>:" label-for="nacionalidadelocadorinput">
          <b-form-select size="sm" :state=" errors.first('nacionalidadeLocador') ? false : null" v-model="locacaoImovelResidencial.nacionalidadeLocador" name="nacionalidadeLocador" v-validate data-vv-as="Nacionalidade" data-vv-rules="required">
            <option :value="''" disabled selected>NACIONALIDADE</option>
            <option value="brasileiro(a)">Brasileiro(a)</option>
            <option value="estrangeiro(a)">Estrangeiro(a)</option>
          </b-form-select>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('nacionalidadeLocador') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="estadoCivilLocador" label="<b>Estado Civil</b>:" label-for="estadocivillocadorinput">
          <b-form-select size="sm" :state=" errors.first('estadoCivilLocador') ? false : null" v-model="locacaoImovelResidencial.estadoCivilLocador" name="estadoCivilLocador" v-validate data-vv-as="Estado Civil" data-vv-rules="required">
            <option :value="''" disabled selected>ESTADO CIVIL</option>
            <option value="solteiro(a)">Solteiro(a)</option>
            <option value="casado(a)">Casado(a)</option>
            <option value="divorciado(a)">Divorciado(a)</option>
            <option value="viúvo(a)">Viúvo(a)</option>
          </b-form-select>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('estadoCivilLocador') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="2" lg="2">
        <b-form-group id="rgLocador" label="<b>RG</b>:" label-for="rglocadorinput">
          <b-form-input size="sm" v-mask="['#############']" id="rglocadorinput" :state=" errors.first('rgLocador') ? false : null" maxlength="50" v-model="locacaoImovelResidencial.rgLocador" type="text" required placeholder="" name="rgLocador" v-validate data-vv-as="RG" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('rgLocador') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="2" lg="2">
        <b-form-group id="cpfLocador" label="<b>CPF</b>:" label-for="cpfLocadorinput">
          <b-form-input size="sm" v-mask="['###.###.###-##']" id="cpfLocadorinput" :state=" errors.first('cpfLocador') ? false : null" maxlength="50" v-model="locacaoImovelResidencial.cpfLocador" type="text" required placeholder="" name="cpfLocador" v-validate data-vv-as="CPF" data-vv-rules="required|cpf">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cpfLocador') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <!-- <b-col xl="3" lg="3">
        <b-form-group id="cnpj" label="<b>CNPJ</b>:" label-for="cnpjinput">
          <b-form-input size="sm" v-mask="['##.###.###/####-##']" id="cnpjinput" :state=" errors.first('cnpj') ? false : null" maxlength="50" v-model="locacaoImovelResidencial.cnpjLocador" type="text" required placeholder="" name="cnpj" v-validate data-vv-as="CNPJ" data-vv-rules="required|cnpj">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cnpj') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col> -->
      <b-col xl="2" lg="2">
        <b-form-group id="telefone" label="<b>Telefone</b>:" label-for="telefone">
          <b-form-input size="sm" v-mask="['(##) ####-####', '(##) #####-####']" id="telefone" :state=" errors.first('telefone') ? false : null" v-model="locacaoImovelResidencial.telefoneLocador" type="text" required placeholder="" name="telefone" v-validate data-vv-as="Telefone" data-vv-rules="required|phone">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('telefone') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="email" label="<b>Email</b>:" label-for="emailinput">
          <b-form-input size="sm" id="emailinput" :state=" errors.first('email') ? false : null" maxlength="50" v-model="locacaoImovelResidencial.emailLocador" type="email" required placeholder="" name="email" v-validate data-vv-as="Email" data-vv-rules="required|email|max:50">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('email') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="profissaoLocador" label="<b>Profissão</b>:" label-for="profissaoLocador">
          <b-form-input size="sm" id="profissaolocadorinput" :state=" errors.first('profissaoLocador') ? false : null" maxlength="50" v-model="locacaoImovelResidencial.profissaoLocador" type="text" required placeholder="" name="profissaoLocador" v-validate data-vv-as="Profissão" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('profissaoLocador') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="6" lg="6">
        <b-form-group id="endereco" label="<b>Endereço</b>:" label-for="enderecoinput">
          <b-form-input size="sm" id="enderecoinput" :state=" errors.first('endereco') ? false : null" v-model="locacaoImovelResidencial.enderecoLocador" type="text" name="endereco" v-validate data-vv-as="Endereço" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('endereco') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="complemento" label="<b>Complemento</b>:" label-for="complementoinput">
          <b-form-input size="sm" :state=" errors.first('complemento') ? false : null" v-model="locacaoImovelResidencial.complementoLocador" id="complementoinputLocador" type="text" name="complemento" v-validate data-vv-as="Complemento" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('complemento') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="bairro" label="<b>Bairro</b>:" label-for="bairroinput">
          <b-form-input size="sm" id="bairroinput" :state=" errors.first('bairro') ? false : null" v-model="locacaoImovelResidencial.bairroLocador" type="text" name="bairro" v-validate data-vv-as="Bairro" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('bairro') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="cidade" label="<b>Cidade</b>:" label-for="cidadeinput">
          <b-form-input size="sm" id="cidadeinput" :state=" errors.first('cidade') ? false : null" v-model="locacaoImovelResidencial.cidadeLocador" type="text" name="cidade" v-validate data-vv-as="Cidade" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cidade') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="4" lg="4">
        <b-form-group id="estado" label="<b>Estado</b>:" label-for="estadoinput">
          <b-form-select size="sm" :state=" errors.first('estado') ? false : null" v-model="locacaoImovelResidencial.estadoLocador" name="estado" v-validate data-vv-as="Estado" data-vv-rules="required">
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
      <b-col xl="2" lg="2">
        <b-form-group id="cep" label="<b>CEP</b>:" label-for="cepinput">
          <b-form-input size="sm" id="cepinput" :state=" errors.first('cep') ? false : null" v-model="locacaoImovelResidencial.cepLocador" type="text" name="cep" v-mask="'#####-###'" v-validate data-vv-as="CEP" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cep') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row v-show="selected == 'locatario'" style="margin-top:2.6%">
        <b-col xl="6" lg="6">
        <b-form-group id="nome" label="<b>Nome</b>:" label-for="nomeinput">
          <b-form-input size="sm" id="nomeinput" :state=" errors.first('nome') ? false : null" v-model="locacaoImovelResidencial.nomeLocatario" type="text" required placeholder="" name="nome" v-validate data-vv-as="Nome" data-vv-rules="required|min:10|max:400">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('nome') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="nacionalidadeLocatario" label="<b>Nacionalidade</b>:" label-for="nacionalidadelocadorinput">
          <b-form-select size="sm" :state=" errors.first('nacionalidadeLocatario') ? false : null" v-model="locacaoImovelResidencial.nacionalidadeLocatario" name="nacionalidadeLocatario" v-validate data-vv-as="Nacionalidade" data-vv-rules="required">
            <option :value="''" disabled selected>NACIONALIDADE</option>
            <option value="brasileiro(a)">Brasileiro(a)</option>
            <option value="estrangeiro(a)">Estrangeiro(a)</option>
          </b-form-select>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('nacionalidadeLocatario') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="estadoCivilLocatario" label="<b>Estado Civil</b>:" label-for="estadocivillocadorinput">
          <b-form-select size="sm" :state=" errors.first('estadoCivilLocatario') ? false : null" v-model="locacaoImovelResidencial.estadoCivilLocatario" name="estadoCivilLocatario" v-validate data-vv-as="Estado Civil" data-vv-rules="required">
            <option :value="''" disabled selected>ESTADO CIVIL</option>
            <option value="solteiro(a)">Solteiro(a)</option>
            <option value="casado(a)">Casado(a)</option>
            <option value="divorciado(a)">Divorciado(a)</option>
            <option value="viúvo(a)">Viúvo(a)</option>
          </b-form-select>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('estadoCivilLocatario') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="2" lg="2">
        <b-form-group id="rgLocatario" label="<b>RG</b>:" label-for="rglocadorinput">
          <b-form-input size="sm" v-mask="['#############']" id="rglocadorinput" :state=" errors.first('rgLocatario') ? false : null" maxlength="50" v-model="locacaoImovelResidencial.rgLocatario" type="text" required placeholder="" name="rgLocatario" v-validate data-vv-as="RG" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('rgLocatario') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="2" lg="2">
        <b-form-group id="cpfLocatario" label="<b>CPF</b>:" label-for="cpfLocatarioinput">
          <b-form-input size="sm" v-mask="['###.###.###-##']" id="cpfLocatarioinput" :state=" errors.first('cpfLocatario') ? false : null" maxlength="50" v-model="locacaoImovelResidencial.cpfLocatario" type="text" required placeholder="" name="cpfLocatario" v-validate data-vv-as="CPF" data-vv-rules="required|cpf">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cpfLocatario') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <!-- <b-col xl="3" lg="3">
        <b-form-group id="cnpj" label="<b>CNPJ</b>:" label-for="cnpjinput">
          <b-form-input size="sm" v-mask="['##.###.###/####-##']" id="cnpjinput" :state=" errors.first('cnpj') ? false : null" maxlength="50" v-model="locacaoImovelResidencial.cnpjLocatario" type="text" required placeholder="" name="cnpj" v-validate data-vv-as="CNPJ" data-vv-rules="required|cnpj">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cnpj') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col> -->
      <b-col xl="2" lg="2">
        <b-form-group id="telefone" label="<b>Telefone</b>:" label-for="telefone">
          <b-form-input size="sm" v-mask="['(##) ####-####', '(##) #####-####']" id="telefone" :state=" errors.first('telefone') ? false : null" v-model="locacaoImovelResidencial.telefoneLocatario" type="text" required placeholder="" name="telefone" v-validate data-vv-as="Telefone" data-vv-rules="required|phone">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('telefone') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="email" label="<b>Email</b>:" label-for="emailinput">
          <b-form-input size="sm" id="emailinput" :state=" errors.first('email') ? false : null" maxlength="50" v-model="locacaoImovelResidencial.emailLocatario" type="email" required placeholder="" name="email" v-validate data-vv-as="Email" data-vv-rules="required|email|max:50">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('email') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="profissaoLocatario" label="<b>Profissão</b>:" label-for="profissaoLocatario">
          <b-form-input size="sm" id="profissaolocadorinput" :state=" errors.first('profissaoLocatario') ? false : null" maxlength="50" v-model="locacaoImovelResidencial.profissaoLocatario" type="text" required placeholder="" name="profissaoLocatario" v-validate data-vv-as="Profissão" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('profissaoLocatario') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="6" lg="6">
        <b-form-group id="endereco" label="<b>Endereço</b>:" label-for="enderecoinput">
          <b-form-input size="sm" id="enderecoinput" :state=" errors.first('endereco') ? false : null" v-model="locacaoImovelResidencial.enderecoLocatario" type="text" name="endereco" v-validate data-vv-as="Endereço" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('endereco') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="complemento" label="<b>Complemento</b>:" label-for="complementoinput">
          <b-form-input size="sm" :state=" errors.first('complemento') ? false : null" v-model="locacaoImovelResidencial.complementoLocatario" id="complementoinputLocatario" type="text" name="complemento" v-validate data-vv-as="Complemento" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('complemento') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="bairro" label="<b>Bairro</b>:" label-for="bairroinput">
          <b-form-input size="sm" id="bairroinput" :state=" errors.first('bairro') ? false : null" v-model="locacaoImovelResidencial.bairroLocatario" type="text" name="bairro" v-validate data-vv-as="Bairro" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('bairro') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="3" lg="3">
        <b-form-group id="cidade" label="<b>Cidade</b>:" label-for="cidadeinput">
          <b-form-input size="sm" id="cidadeinput" :state=" errors.first('cidade') ? false : null" v-model="locacaoImovelResidencial.cidadeLocatario" type="text" name="cidade" v-validate data-vv-as="Cidade" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cidade') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col xl="4" lg="4">
        <b-form-group id="estado" label="<b>Estado</b>:" label-for="estadoinput">
          <b-form-select size="sm" :state=" errors.first('estado') ? false : null" v-model="locacaoImovelResidencial.estadoLocatario" name="estado" v-validate data-vv-as="Estado" data-vv-rules="required">
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
      <b-col xl="2" lg="2">
        <b-form-group id="cep" label="<b>CEP</b>:" label-for="cepinput">
          <b-form-input size="sm" id="cepinput" :state=" errors.first('cep') ? false : null" v-model="locacaoImovelResidencial.cepLocatario" type="text" name="cep" v-mask="'#####-###'" v-validate data-vv-as="CEP" data-vv-rules="required">
          </b-form-input>
          <b-form-invalid-feedback :force-show='true'>
            <p class="float-left">{{ errors.first('cep') }}</p>
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>

    </b-row>
  </b-form>

</template>
<script>
import { Validator } from "vee-validate";
import { mask } from "vue-the-mask";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("Contratos", ["locacaoImovelResidencial"])
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
    console.log(this.$store);
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
