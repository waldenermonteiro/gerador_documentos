<template>
  <div>
    <b-nav-item @click="irParaRota()" class="menu-navitem" >
      <icon :name="icone" scale="1.3" class="menu-nav-icon-left"></icon>
      <b class="menu-nav-text-icons">{{nome}}</b>
    </b-nav-item>
  </div>
</template>
<script>
export default {
  props: {
    rota: {
      type: Object,
      required: false
    },
    nome: {
      type: String,
      required: false
    },
    icone: {
      type: String,
      required: false
    },
    },
  methods: {
    irParaRota() {
      if (this.rota) {
        this.$store.state.filter = null;
        this.$router.push(this.rota);
      }
    }
  }
};
</script>
<style scoped>
.menu-nav-collapse-ul-item {
    position: relative;
    display: block;
    padding-left: 36px;
    opacity: 1;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}

.menu-nav-collapse-ul {
    border-right: 2px solid #ffbc49;
}

.menu-navitem-titulo {
    margin-bottom: 30px;
    font-size: 23px;
    margin: auto -5px;
}



#menu-nav-link {
    padding: 0;
}

@media (min-width: 320px) and (max-width: 767px) {
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
        display: none
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
    font-size: 11px;
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

.menu-nav-collapse-ul-item:hover, .menu-nav-collapse-ul-item:active {
    background-color: rgba(223, 232, 222, .1);
    opacity: .8;
}

.menu-nav-collapse-ul > div > .menu-navitem{
    margin-left: 10px;
    font-size: 11px;
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
@media (min-width: 992px) and (max-width: 767px) {
  .menu-nav-text-icons {
    font-size: 12px !important;
  }
    .menu-nav-icon-left{
    width: 16px !important;
  }
  .menu-nav-icon-right{
      width: 10px !important;
  }
}
</style>

