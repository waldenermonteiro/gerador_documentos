<template>
  <container-panel>
    <panel titulo="Formulário de documento" idpainel="documento-cadastro" icone="warning">
      <form-wizard :startIndex="tabInicio" :title="title" stepSize="xs" :subtitle="subtitle" :nextButtonText="nextButtonText" :backButtonText="backButtonText" :finishButtonText="finishButton" shape="circle" color="#0e0e29">
        <tab-content title="Escolha o tipo de documento" icon="fa fa-user" :before-change="validateFirstStep" style="margin-top:-20px">
          <b-row>
            <b-col v-for="(item) in items" :key="item.id">
              <h5>{{item.titulo}}</h5>
              <br>
              <b-img :ref="'item' + item.id" @click="mudarCss(item,$event)" class="zoom" width="250" height="250" :src="item.url" alt="Thumbnail" />
            </b-col>
          </b-row>
        </tab-content>
        <tab-content title="Controle de Atividades" icon="fa fa-cog" :before-change="validateSecondStep">
          Testando a Capacidade dois
        </tab-content>
        <tab-content title="Controle de Perfil" icon="fa fa-check" :before-change="validateThirdStep">
          Testando a Capacidade tres
        </tab-content>
        <button class="btn" style="background-color:grey;color:white" slot="prev">Voltar</button>
        <button class="btn btn-primary" slot="next">Avançar</button>
        <button class="btn btn-success" slot="finish"></button>
      </form-wizard>
    </panel>
  </container-panel>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
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
      items: [
        {
          id: 1,
          titulo: "Contrato",
          url:
            "https://thumbs.jusbr.com/filters:format(webp)/imgs.jusbr.com/publications/artigos/images/6330-5-contrato-de-locacao-frente1451868296.jpg"
        },
        {
          id: 2,
          titulo: "Curriculo",
          url:
            "https://omextemplates.content.office.net/support/templates/pt-br/lw00002101.png"
        },
        {
          id: 3,
          titulo: "Prestação de Serviços",
          url:
            "https://imgv2-1-f.scribdassets.com/img/document/24908462/original/415ef6b7cd/1528210403?v=1"
        }
      ],
      parceiro: {},
      tabInicio: 0,
      finishButton: this.finishButtonText,
      element: ""
    };
  },
  methods: {
    validateFirstStep() {
      return new Promise((resolve, reject) => {
        if (this.element == "") {
          this.showMessage(
            "Documentos",
            "error",
            "Escolha o tipo de documento"
          );
          reject(true);
        } else {
          resolve(true);
        }
      });
    },
    validateSecondStep() {
      return new Promise((resolve, reject) => {
        resolve(success);
      });
    },
    validateThirdStep() {
      return new Promise((resolve, reject) => {
        resolve(success);
      });
    },
    mudarCss(item, e) {
      let img = this.$refs["item" + item.id][0];
      if (this.element != "") {
        this.element.style = "";
      }
      img.style.opacity = 0.4;
      img.style.transform = "scale(1.1)";
      img.style.border = "2px solid green";
      img.style.borderRadius = "10px";
      this.element = this.$refs["item" + item.id][0];
    }
  }
};
</script>
<style scoped >
.erro {
  color: red;
}

.btn .fa-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}
.btn .fa-icon:last-child {
  margin-right: 0;
}
input[type="checkbox"] {
  /* Double-sized Checkboxes */
  transform: scale(1.5);
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  padding: 10px;
}
.form-group {
  margin-bottom: 0px !important;
}
.vue-form-wizard {
  padding-bottom: 0px !important;
}
.zoom:hover {
  opacity: 0.4;
  transform: scale(1.1);
  /* border: 1px solid black;
  border-radius: 10px; */
}
.zoom {
  cursor: pointer;
  transition: transform 0.2s; /* Animation */
}
</style>
