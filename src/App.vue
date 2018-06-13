<template>
  <b-container fluid class="app-container">
    <b-row no-gutters id="app-row">
      <nav-bar cols="12" sm="12" md="12" lg="12" xl="12"></nav-bar>
      <transition name="pagina-fade">
        <b-col cols="12" sm="12" md="12" lg="12" xl="12" class="ml-auto ml-sm-auto ml-md-auto ml-lg-auto m1-xl-auto" id="container-master">
          <router-view></router-view>
        </b-col>
      </transition>
    </b-row>
  </b-container>
</template>

<script>
import MenuItem from "./components/shared/menu-item/MenuItem.vue";
import MenuCollapsed from "./components/shared/menu-item/MenuCollapsed.vue";
import MenuItemCollapsed from "./components/shared/menu-item/MenuItemCollapsed.vue";
import NavBar from "./components/shared/nav-bar/NavBar.vue";

export default {
  components: {
    "nav-bar": NavBar,
    "menu-item": MenuItem,
    "menu-collapsed": MenuCollapsed,
    "menu-item-collapsed": MenuItemCollapsed
  },
  name: "App",
  methods: {
    irParaRota(rota) {
      this.$router.push(rota);
    }
  }
};
</script>

<style >
.centralizado {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}

@page {
  size: auto;
  margin: 0mm;
}
.swal-text {
  text-transform: uppercase !important;
}
/* input[type="text"] {
  text-transform: uppercase;
}
.login input[type="text"] {
  text-transform: none;
} */
.table-overflow {
  overflow-x: scroll;
}
select {
  text-transform: uppercase;
}
select {
  color: black !important;
}
.displayNone {
  display: none;
}
.app-container {
  padding: 0px;
}

/* #side-menu {
  transition: margin 0.3s ease;
} */

.collapsed-custom {
  display: none;
}

@media (min-width: 368px) {
  .collapsed-custom {
    display: block;
    /* same width as sidebar */
    margin-left: -25%;
  }
}

#app-row {
  /* necessary to hide collapsed sidebar */
  /* overflow-x: hidden; */
}

#nav-bar {
  transition: width 0.7s ease;
}

#container-panel {
  transition: width 0.7s ease;
}

#side-menu-master svg {
  width: 28px;
}
.radioTeste svg {
  width: 100%;
}

.pagina-fade-enter,
.pagina-fade-leave-active {
  overflow-y: hidden;
  opacity: 0;
  margin: 100%;
}

.pagina-fade-enter-active,
.pagina-fade-leave-active {
  overflow-y: hidden;
  transition: opacity 0.1s;
}

body {
  background-color: #f7f7f7 !important;
}
.erroValidate {
  color: red;
}
/* Alterando o Bootstrap */
.row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  padding-right: 10px;
  padding-left: 10px;
}

.navbar {
  padding: 0.2rem 0.6rem;
}

.form-check-inline + .form-check-inline {
  margin-left: 0;
  cursor: pointer;
}
.nav-link {
  padding: 3px 2px 2px 1px;
}
@media (min-width: 768px) {
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
    width: 240px;
  }
}
#documentoVisualizacao .modal-lg {
  min-width: 1200px !important;
}
#documentoVisualizacao .modal-body {
  padding: 0px;
}

#documentoVisualizacao .modal-content {
  min-height: 1000px !important;
}
</style>
