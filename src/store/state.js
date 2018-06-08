export default {
  tarifas: [
    {
      "tinGrupo": 1,
      "bitProducao": true,
      "chrDescricao": "AGENCIAS DA CAPITAL",
      "QtdAgencias": 15,
    },
    {
      "tinGrupo": 2,
      "bitProducao": true,
      "chrDescricao": "AGENCIAS DO INTERIOR",
      "QtdAgencias": 16,
    },
    {
      "tinGrupo": 3,
      "bitProducao": true,
      "chrDescricao": "AGENCIAS DA CAPITAL2",
      "QtdAgencias": 17,
    },
    {
      "tinGrupo": 4,
      "bitProducao": true,
      "chrDescricao": "AGENCIAS DA CAPITAL3",
      "QtdAgencias": 18,
    }
  ],
  //Tabela
  filter: null,
  totalRows: 0,
  currentPage: 1,
  sortDesc: false,
  emptyText: "Não há registros que correspondam ao seu pedido",
  emptyFilteredText: "Não há registros que correspondam ao seu pedido",
  sortBy: "Nenhum",
  perPage: 1,
  fields: [

    {
      key: "tinGrupo",
      label: "Código",
      sortable: true
    },
    {
      key: "chrDescricao",
      label: "Descrição",
      sortable: true
    },
    {
      key: "QtdAgencias",
      label: "Quantidade de Agências",
      sortable: true
    }
  ],
}
