<template>
    <div>
        <b-row>
            <slot name="search"></slot>
            <b-col xl="3" lg="2" sm="5" md="5">
                <b-row>
                    <b-col xl="12">
                        <b-form-input size="sm" v-model="filterCustom" placeholder="Pesquise" />
                    </b-col>
                </b-row>
            </b-col>

            <b-col xl="3" lg="3" sm="3" md="6" class="equipamentos-botao-padding">
                <b-row>
                    <b-col xl="4" lg="4">
                        <label for="input-none" class="col-form-label">Ordenar:</label>
                    </b-col>
                    <b-col xl="8" lg="8 " md="6">
                        <b-form-select size="sm" style="padding-bottom:1px !important" v-model="sortByCustom" :options="sortOptions">
                            <option slot="first">Nenhum</option>
                        </b-form-select>
                    </b-col>
                </b-row>
            </b-col>

            <b-col xl="2" lg="2" sm="3" md="3">
                <b-row>
                    <b-col xl="5" lg="4">
                        <label for="input-none" class="col-form-label">Linhas:</label>
                    </b-col>
                    <b-col xl="7" lg="8">
                        <b-form-select size="sm" :options="pageOptions" v-model="perPageCustom" title="Linhas" />
                    </b-col>
                </b-row>
            </b-col>

            <b-col xl="3" lg="3" sm="2" md="2" class="table-paginacao-equipamentos">
                <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPageCustom" :limit="3" />
            </b-col>

            <slot name="newElement"></slot>

        </b-row>
        <slot></slot>
        <p style="color:black">({{numeroLinhasPagina(currentPage,perPage,totalRows)}}/{{totalRows}})</p>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      sortByCustom: "Nenhum",
      perPageCustom: 15,
      filterCustom: null,
      currentPageCustom: 1
    };
  },
  props: {
    pageOptions: {
      type: [Array, Object],
      required: false,
      default: function() {
        return [
          { text: 15, value: 15 },
          { text: 35, value: 35 },
          { text: 45, value: 45 }
        ];
      }
    },
    items: {
      type: [Array, Object],
      required: true
    },
    fields: {
      type: [Array, Object],
      required: true
    }
  },
  computed: {
    ...mapState([
      "totalRows",
      "currentPage",
      "sortDesc",
      "emptyText",
      "emptyFilterCustomedText",
      "sortBy",
      "perPage"
    ]),
    sortOptions() {
      return this.fields.filter(f => f.sortable).map(f => {
        return { text: f.label, value: f.key };
      });
    }
  },
  mounted() {
    this.$store.state.sortBy = this.sortByCustom;
    this.$store.state.perPage = this.perPageCustom;
  },
  watch: {
    sortByCustom: function(val) {
      this.$store.state.sortBy = val;
    },
    perPageCustom: function(val) {
      this.$store.state.perPage = val;
    },
    filterCustom: function(val) {
      this.$store.state.filter = val;
    },
    currentPageCustom: function(val) {
      this.$store.state.currentPage = val;
    }
  }
};
</script>

<style scoped>
.btn .fa-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}
.btn .fa-icon:last-child {
  margin-right: 0;
}
.form-inline * {
  font-weight: bold;
  font-size: 12px;
}

.tag-filtro {
  margin-left: 8px;
  line-height: 0.95;
}

.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #777;
  border-radius: 10px;
}

.botao {
  position: relative;
}

.botao > .badge {
  position: absolute;
  top: -3px;
  right: -10px;
  font-size: 10px;
  font-weight: 400;
}

.bg-red {
  background: #e74c3c !important;
  border: 1px solid #e74c3c !important;
  color: #fff;
}

.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}

table {
  font-size: 12px;
}

.flag {
  color: red;
}
.table-paginacao-equipamentos {
  float: right;
  font-size: 10px;
}
@media (min-width: 992px) and (max-width: 1200px) {
  .equipamentos-botao-ordenacoes {
    width: 44px;
    padding-left: 3px;
  }
}
@media (min-width: 992px) and (max-width: 1035px) {
  .table-paginacao-equipamentos {
    float: right;
    font-size: 8px;
  }
  .col-form-label {
    font-size: 11px;
  }
}
.equipamentos-badge-color {
  background-color: #e74c3c;
}
.equipamentos-botao-padding {
  padding-left: 0px;
}
.equipamentos-botao-filtro {
  margin-left: 10px;
}
</style>
