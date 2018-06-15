<template>
  <div id="documentoVisualizacao">
    <b-modal id="modalDocumentoVisualizacao" ref="modalDocumentoVisualizacao" size="lg" title="Visualização do Documento" ok-title="Fechar" :ok-only="true">
      <div>
        <div id="content" class="content ql-editor" v-html="modelo" style=""></div>
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
</style>
