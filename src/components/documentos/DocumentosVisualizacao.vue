<template>
  <b-modal id="modalDocumentoVisualizacao" ref="modalDocumentoVisualizacao" size="lg" title="Visualização do Documento" ok-title="Fechar" :ok-only="true">
    <div class="scroll-paper2">
      <div id="content2" class="content ql-editor" v-html="modelo" style=""></div>
    </div>
  </b-modal>
</template>
<script>
export default {
  props: {
    modelo: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.scroll-paper2 {
  background-image: url("/static/Scrolled_Ancient_Paper_PNG_Image.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
}
#content2 {
  padding-top: 20%;
  padding-left: 10%;
  padding-right: 10%;
}
.modal-lg {
  min-width: 1200px !important;
}
.modal-body {
  padding: 0px;
}

.modal-content {
  min-height: 1000px !important;
}
</style>
