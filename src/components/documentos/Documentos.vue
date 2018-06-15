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
              <b-button size="sm" variant="success" title="Visualizar Documento" class="float-right" v-b-modal.modalDocumentoVisualizacao @click="alterModeloVisualizacao(linha.item.modelo)">
                <icon name="eye" flip="horizontal" scale="1.0"></icon>
              </b-button>

            </template>
          </b-table>
        </div>
      </table-custom>
      <documentos-visualizacao :modelo="modeloVisualizacao"></documentos-visualizacao>
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
      date: new Date(),
      options: {
        format: "DD/MM/YYYY",
        useCurrent: false,
        locale: "pt"
      },
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
    ...mapState("Documentos", ["modeloVisualizacao"]),
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
    alterModeloVisualizacao(modelo) {
      this.$store.dispatch("Documentos/alterModeloVisualizacao", modelo);
    },
    deleteDocument(documento) {
      this.$showConfirmationMessage(
        "Documentos",
        documento.descricao,
        document,
        "Documentos/deleteDocument"
      );
    }
  }
};
</script>

<style>
#content {
  /* padding-top: 13%; */
  padding-top: 8%;
  padding-left: 10%;
  padding-right: 10%;
}
</style>
