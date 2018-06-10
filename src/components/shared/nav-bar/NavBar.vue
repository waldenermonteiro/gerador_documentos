<template>
  <b-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl" id="nav-bar">
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand @click="irParaRota('documento-formulario')">Inicio</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item @click="irParaRota('documentos')">Seus Documentos</b-nav-item>
          <b-nav-item @click="irParaRota('documento-formulario')">Cadastrar Documento</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <template slot="button-content">
              <icon name="user" scale="2"> </icon>
            </template>
            <b-dropdown-item v-b-modal.modalsm class="nav-dropdown-item">Informações do sistema
              <div class="nav-icon-right">
                <icon style="" name="info-circle" class="nav-icon-right" scale="1.2"></icon>
              </div>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

  </b-col>
</template>

<script>
export default {
  props: {
    cols: {
      type: String,
      required: false
    },
    sm: {
      type: String,
      required: false
    },
    md: {
      type: String,
      required: false
    },
    lg: {
      type: String,
      required: false
    },
    xl: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      titleHiddenMenu: "Clique para ativar o modo tela cheia",
      titleHidden: true,
      dropdownShow: false,
      icone: "arrow-down"
    };
  },
  methods: {
    irParaRota(rota) {
      this.$router.push(rota);
    }
  }
};
</script>

<style scoped>
* {
  font-size: 14px;
  font-family: "Muli", "Helvetica", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* color: #777; */
}
#modalsm___BV_modal_body_ .modal-body {
  height: 1000px !important;
}
h1 {
  font-size: 18px;
  font-weight: bold;
}
h3 {
  font-size: 14px;
  font-weight: bold;
}

.info-w3 {
  font-size: 10px;
}

.nav-titulo {
  font-size: 20px;
  margin-left: 15px;
  color: gray;
}

.nav-navbar {
  /* margin-top: 4px; */
  border-bottom: 1px solid #dddddd;
  background-color: #ededed;
}

.nav-navbrand {
  cursor: pointer;
}

.nav-navbrand > svg.fa-icon {
  vertical-align: middle;
}

.nav-icon-right {
  float: right;
  vertical-align: "middle";
}

.nav-dropdown-item:hover {
  /* opacity: 0.6; */
  background: #0e0e29;
  color: white;
}
.nav-dropdown-item:active {
  background-color: #0e0e29;
}

nav {
  padding-top: 0px !important;
}
.navbar-light .navbar-brand {
  color: rgb(19, 19, 93) !important;
}
svg {
  vertical-align: middle;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>