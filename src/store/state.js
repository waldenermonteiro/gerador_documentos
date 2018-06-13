export default {

  //Tabela
  filter: null,
  totalRows: 0,
  currentPage: 1,
  sortDesc: false,
  emptyText: "Não há registros que correspondam ao seu pedido",
  emptyFilteredText: "Não há registros que correspondam ao seu pedido",
  sortBy: "Nenhum",
  perPage: 1,
  itens: new Array(),
  fields: [

    {
      key: "descricao",
      label: "Descrição",
      sortable: true
    },
    {
      key: "acoes",
      label: "Ações"
    }
  ],
}
