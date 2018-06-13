
export default {
    'GET_ALL_ERRO'(state, { erroGettAll }) {
        state.erroGetAll = erroGettAll;
    },
    'SAVE_DOCUMENT'(state) {
        state.Documentos.documentos.push(
            state.Documentos.documento
        );
        state.itens = state.Documentos.documentos;
    },
    'DELETE_DOCUMENT'(state, { documento }) {
        let indice = state.itens.indexOf(documento);
        state.itens.splice(indice, 1);
    },
}