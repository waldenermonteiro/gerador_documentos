<template>
  <li class="menu-nav-collapse-ul-item">

    <a @click="irParaRotaCollapsed()" class="nav-link active">
      <div>
        <div style="float:left; ">
          <icon :name="icone" scale="1.1" class="menu-nav-icon-left"></icon>
        </div>
        <div style="">
          <b>{{nome}}</b>
        </div>
      </div>
    </a>
  </li>
</template>
<script>
import { barramento } from "../../../main";
export default {
  props: {
    rota: {
      required: false
    },
    nome: {
      type: String,
      required: false
    },
    icone: {
      required: false
    }
  },
  methods: {
    irParaRotaCollapsed() {
      this.$store.state.filter = null;
      this.$router.push(this.rota);
    }
  }
};
</script>
<style scoped>
.menu-nav-collapse-ul-item {
  position: relative;
  display: block;
  padding-left: 15px;
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  font-size: 13px;
  margin-bottom: 10px;
}

.menu-nav-collapse-ul {
  border-right: 5px solid red;
}

.menu-navitem-titulo {
  margin-bottom: 30px;
  font-size: 23px;
  margin: auto -5px;
}

#menu-nav-link {
  padding: 0;
}

@media (min-width: 320px) and (max-width: 575px) {
  .menu-col {
    width: 92px;
  }
  .menu-nav-text-icons {
    font-size: 10px;
    display: block;
    text-align: center;
  }
  .menu-navitem {
    text-align: center !important;
  }

  .menu-nav-icon-right {
    display: none !important;
    margin: 0;
    padding: 0;
  }
  .menu-nav-collapse-ul {
    /* left: 100%;
        position: absolute;
        z-index: 4000;
        top: 0;
        border-right: none; */
    /* background-color: #212120; */
  }
  #menu-navitem-titulo {
    display: none;
  }
  .menu-nav-item-titulo {
    margin-bottom: 30px;
    font-size: 10px;
    margin: 0;
  }
  .menu-nav-collapse-ul-item {
    padding-left: 0px;
    font-size: 11px;
  }
}

@media (min-width: 576px) and (max-width: 805px) {
  #menu-navitem-titulo {
    font-size: 20px;
  }
}

ul {
  list-style-type: none;
  display: block;
  padding-left: 0;
  margin-bottom: 0;
  cursor: pointer;
  font-size: 10px;
}

a:link,
a:visited {
  color: white;
}

.menu-col {
  background-color: #0e0e29;
  position: absolute;
  color: white !important;
  height: 100%;
}

.menu-nav-collapse-ul-item:hover {
  background-color: rgba(223, 232, 222, 0.1);
  opacity: 0.8;
}

.menu-navitem {
  /* background-color: #212120; */
  border: none;
  color: white;
  margin-top: 12px;
}

.menu-nav-icon-left {
  color: white;
  vertical-align: middle;
}

.menu-nav-icon-right {
  color: white;
  float: right;
}

#menu-navitem-titulo {
  text-align: center;
}

svg.fa-icon {
  vertical-align: middle;
}
@media (min-width: 992px) and (max-width: 1200px) {
  .menu-nav-text-icons {
    font-size: 11px !important;
  }
  .menu-nav-icon-left {
    margin-right: 2px;
    width: 16px !important;
  }
}
</style>
