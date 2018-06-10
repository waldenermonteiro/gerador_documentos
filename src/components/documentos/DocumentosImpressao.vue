<template>
  <div class="scroll-paper">
    <div id="content" class="content ql-editor" v-html="modeloDocumentoCopia" style=""></div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("Documentos", ["modeloDocumentoCopia"])
  },
  data() {
    return {};
  }
};
</script>
<style>
.scroll-paper {
  background-image: url("/static/Scrolled_Ancient_Paper_PNG_Image.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
}
#content {
  padding-top: 20%;
  padding-left: 10%;
  padding-right: 10%;
}
</style>
