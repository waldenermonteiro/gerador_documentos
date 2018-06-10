<template>
  <container-panel>
    <panel titulo="Documentos" idpainel="tabela-documentos" icone="table">
      <table-custom :items="itens" :fields="fields">
        <div class="table-overflow">
          <b-table :items="itens" :fields="fields" small striped hover show-empty :current-page="currentPage" :per-page="perPage" :filter="filter" :sort-by="sortBy" :sort-desc.sync="sortDesc" :empty-text="emptyText" :empty-filtered-text="emptyFilteredText" @filtered="onFiltered">
            <template slot="acoes" slot-scope="linha">
              <b-button size="sm" variant="danger" class="float-right" title="Excluir Documento" @click="deleteDocument(linha.item)">
                <icon name="trash" scale="1.0"></icon>
              </b-button>
              <b-button size="sm" variant="default" title="Imprimir Documento" class="float-right" @click="print(linha.item.modelo)">
                <icon name="print" flip="horizontal" scale="1.0"></icon>
              </b-button>
              <b-button size="sm" variant="success" title="Visualizar Documento" class="float-right" v-b-modal.modalDocumentoVisualizacao>
                <icon name="eye" flip="horizontal" scale="1.0"></icon>
              </b-button>
              <documentos-visualizacao :modelo="linha.item.modelo"></documentos-visualizacao>
            </template>
          </b-table>
        </div>
      </table-custom>
    </panel>
  </container-panel>
</template>

<script>
import Table from "../shared/table/Table.vue";
import DocumentosVisualizacao from "./DocumentosVisualizacao.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    "table-custom": Table,
    "documentos-visualizacao": DocumentosVisualizacao
  },
  data() {
    return {
      sortDesc: null,
      emptyText: "Não foi possivel consultar os registros",
      emptyFilteredText: "Não há registros que correspondam ao seu pedido"
    };
  },
  computed: {
    ...mapState([
      "tarifas",
      "filter",
      "totalRows",
      "currentPage",
      // "sortDesc",
      "sortByCustom",
      "perPageCustom",
      "sortBy",
      "perPage",
      "fields",
      "itens"
    ]),
    ...mapState("Documentos", ["modelos"]),
    sortOptions() {
      return this.fields.filter(f => f.sortable).map(f => {
        return { text: f.label, value: f.key };
      });
    }
  },
  created() {
    this.$store.state.totalRows = this.itens.length;
  },
  methods: {
    onFiltered(filteredItems) {
      this.$store.state.totalRows = filteredItems.length;
      this.$store.state.currentPage = 1;
    },
    print(item) {
      this.$printContent(item);
    },
    deleteDocument(documento) {
      this.$showConfirmationMessage(
        "Documentos",
        documento.titulo,
        document,
        "Documentos/deleteDocument"
      );
    }
  }
};
</script>

<style scoped>
</style>
