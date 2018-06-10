<template>
    <b-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl" class=" panel-col">
        <div class="icons">
            <div class="panel-content">
                <h5 v-if="icone">
                    <icon class="panel-icon-titulo" :color="corIcone" :name="icone" scale="1.4"></icon> {{titulo}}
                </h5>
                <h5 v-else>
                    <img src="./parchment-512.png" width="27" class="panel-icon-titulo" /> {{titulo}}
                </h5>
                <div class="panel-border"></div>
                <b-collapse visible :id="idpainel">
                    <slot></slot>
                </b-collapse>
            </div>
        </div>
    </b-col>
</template>
<script>
export default {
  props: {
    idpainel: {
      type: String,
      required: false
    },
    titulo: {
      type: String,
      required: false
    },
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
    },
    icone: {
      type: String,
      required: false
    },
    corIcone: {
      type: String,
      required: false,
      default: "black"
    }
  },
  methods: {
    disparaAcao() {
      this.$emit("fecharPainel");
    }
  }
};
</script>
<style scoped>
.panel-col {
  margin-bottom: 14px;
}

.panel-content {
  border: 1px solid #e6e9ed;
  padding: 15px 15px;
}

.panel-border {
  border-top: 1.5px solid #e6e9ed;
  padding-top: 20px;
}

.icons {
  background-color: #fff;
}

.icons > a {
  float: right;
  padding: 5px;
  cursor: pointer;
}

.icons > a:hover {
  background-color: #f3f3f3;
  opacity: 1;
}

.panel-icon {
  color: #c5c7cb;
}
/* .panel-icon-titulo {
  color: #445d77;
} */
svg.fa-icon {
  vertical-align: middle;
}
</style>
