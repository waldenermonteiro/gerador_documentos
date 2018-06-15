<template>
  <container-panel>
    <panel titulo="Formulário de documento" icone="file" idpainel="documento-cadastro">
      <form-wizard :startIndex="tabInicio" :title="title" stepSize="xs" :subtitle="subtitle" :nextButtonText="nextButtonText" :backButtonText="backButtonText" :finishButtonText="finishButton" @on-complete="saveDocument()" color="#0e0e29">
        <tab-content title="Escolha o tipo de documento" icon="fa fa-file-text" :before-change="validateFirstStep" style="margin-top:-20px">
          <documentos-modelo></documentos-modelo>
        </tab-content>
        <tab-content title="Preencha o formulário" icon="fa fa-keyboard-o" :before-change="validateSecondStep">
          <locacao-imovel-residencial></locacao-imovel-residencial>
        </tab-content>
        <tab-content title="Visualização do documento" icon="fa fa-check" :before-change="validateThirdStep">
          <documentos-finalizacao></documentos-finalizacao>
        </tab-content>
        <button class="btn" style="background-color:grey;color:white" slot="prev">Voltar</button>
        <button class="btn btn-primary" slot="next">Avançar</button>
        <button class="btn btn-success" slot="finish">Finalizar</button>
      </form-wizard>
    </panel>
  </container-panel>
</template>

<script>
import { mask } from "vue-the-mask";
import LocacaoImovelFormulario from "../contratos/LocacaoImovelResidencial.vue";
import DocumentosModelo from "./DocumentosModelo.vue";
import documentosFinalizacao from "./documentosFinalizacao.vue";
import { barramento } from "../../main";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("Documentos", ["variables", "documento"]),
    ...mapState("Contratos", ["locacaoImovelResidencialLocador","locacaoImovelResidencialLocadorTags"])
  },
  components: {
    "locacao-imovel-residencial": LocacaoImovelFormulario,
    "documentos-modelo": DocumentosModelo,
    "documentos-finalizacao": documentosFinalizacao
  },
  directives: { mask },
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    nextButtonText: {
      type: String,
      default: "Próximo"
    },
    backButtonText: {
      type: String,
      default: "Voltar"
    },
    finishButtonText: {
      type: String,
      default: "Cadastrar"
    },
    startIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      parceiro: {},
      tabInicio: 0,
      finishButton: this.finishButtonText
    };
  },
  methods: {
    validateFirstStep() {
      return this.$store
        .dispatch("Documentos/validateFirstStep")
        .then(result => {
          return result;
        })
        .catch(err => {
          this.$showMessage(
            "Documentos",
            "error",
            "Escolha o tipo de documento"
          );
        });
    },
    validateSecondStep() {
      this.$store.dispatch("Documentos/cloneDocumentoModelo");
      this.$store.dispatch(
        "Documentos/alterDocumentoModelo",
        this.$replaceDocumento(
          this.locacaoImovelResidencialLocadorTags,
          this.locacaoImovelResidencialLocador,
          this.documento.modelo
        )
      );
      return this.$store
        .dispatch("Documentos/validateSecondStep")
        .then(result => {
          return result;
        })
        .catch(err => {
          // this.$showMessageRulesEmpty("Documentos");
          return true;
        });
    },
    validateThirdStep() {
      return new Promise((resolve, reject) => {
        resolve(true);
      });
    },
    saveDocument() {
      this.$store.dispatch("Documentos/saveDocument");
      this.$router.push("documentos");
      this.$showMessage(
        "Documentos",
        "success",
        "Documento cadastrado com sucesso, verifique em sua lista de documentos"
      );
    }
  }
};
</script>
<style scoped >
.form-group {
  margin-bottom: 0px !important;
}
.zoom:hover {
  opacity: 0.4;
  transform: scale(1.1);
}
.zoom {
  cursor: pointer;
  transition: transform 0.2s; /* Animation */
}
</style>
