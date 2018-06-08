<template>
    <div>
        <b-nav-item @click="showCollapse = !showCollapse" class="menu-navitem" :class="showCollapse ? 'collapsed' : null" :aria-controls="collapsed" :aria-expanded="showCollapse ? 'true' : 'false'">
            <icon :name="icone" scale="1.3" class="menu-nav-icon-left"></icon>
            <icon name="chevron-down" scale="0.7" class="menu-nav-icon-right"></icon>
            <b class="menu-nav-text-icons">{{nome}}</b>
        </b-nav-item>

        <b-collapse :id="collapsed" v-model="showCollapse">
            <ul class="menu-nav-collapse-ul">
                <slot></slot>
            </ul>
        </b-collapse>
    </div>
</template>

<script>
export default {
  props: {
    collapsed: {
      required: false
    },
    nome: {
      required: false
    },
    icone: {
      required: false
    }
  },
  data() {
    return {
      showCollapse: false
    };
  }
};
</script>
<style scoped>
.menu-nav-collapse-ul-item {
  position: relative;
  display: block;
  padding-left: 36px;
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
/* #demo {
    -webkit-transition: width 2s ease;
    -moz-transition: width 2s ease;
    -o-transition: width 2s ease;
    transition: width 0.8s ease;
    
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    background: #0e0e29 ;
    vertical-align:middle ;
    line-height: 30px;
    height: auto;
    position: absolute;
    width: 0px;
     z-index: 400;
}
#demo.in {
    width: 200px;
    position: absolute;

} */

.menu-nav-collapse-ul {
  border-right: 2px solid #ffbc49;
  /* left: 50%;
  position: relative;
  top: 0;
  width: 210px;
  z-index: 4000;
  background: #3e5367; */
  /* display: none; */
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

.menu-nav-collapse-ul-item:hover,
.menu-nav-collapse-ul-item:active {
  background-color: rgba(223, 232, 222, 0.1);
  opacity: 0.8;
}

.menu-nav-collapse-ul > div > .menu-navitem {
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
  .menu-nav-icon-left {
    width: 16px !important;
  }
  .menu-nav-icon-right {
    width: 10px !important;
  }
}
</style>
