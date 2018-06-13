<template>
  <div id="documentoVisualizacao">
    <b-modal id="modalDocumentoVisualizacao" ref="modalDocumentoVisualizacao" size="lg" title="Visualização do Documento" ok-title="Fechar" :ok-only="true">
      <div class="scroll-paper2">
        <div id="content2" class="content ql-editor" v-html="modelo" style=""></div>
      </div>
    </b-modal>
  </div>
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
  background-size: 100% auto;
  width: 100%;
  margin-top:1%
}
#content2 {
  padding-top: 13%;
  padding-left: 10%;
  padding-right: 10%;
}
</style>
