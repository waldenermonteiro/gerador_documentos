<template>
  <container-panel>
    <panel titulo="Tabela com Vuex" idpainel="tabela-vuex" icone="table">
      <table-custom :items="tarifas" :fields="fields">
        <template slot="search"> </template>
        <template slot="newElement">
          <!-- <b-col xl="1" lg="1" sm="4" md="2">
                    <b-button class="botao float-right" size="sm" variant="primary" v-b-modal.modalCadastroTarifa title="Nova Tarifa">
                        <icon name="plus" flip="horizontal" scale="1.0"></icon>
                    </b-button>
                </b-col> -->
        </template>
        <div class="table-overflow">
          <b-table :items="tarifas" :fields="fields" small striped hover show-empty :current-page="currentPage" :per-page="perPage" :filter="filter" :sort-by="sortBy" :sort-desc.sync="sortDesc" :empty-text="emptyText" :empty-filtered-text="emptyFilteredText" @filtered="onFiltered">

          </b-table>
        </div>
      </table-custom>
    </panel>
  </container-panel>
</template>

<script>
import Table from "./shared/table/Table.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    "table-custom": Table
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
      "fields"
    ]),
    sortOptions() {
      return this.fields.filter(f => f.sortable).map(f => {
        return { text: f.label, value: f.key };
      });
    }
  },
  created() {
    this.$store.state.totalRows = this.$store.state.tarifas.length;
  },
  methods: {
    onFiltered(filteredItems) {
      this.$store.state.totalRows = filteredItems.length;
      this.$store.state.currentPage = 1;
    }
  }
};
</script>

<style scoped>
</style>
