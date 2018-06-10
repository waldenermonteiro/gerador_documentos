
export default {
    'GET_ALL_ERRO'(state, { erroGettAll }) {
        state.erroGetAll = erroGettAll;
    },
    'SAVE_DOCUMENT'(state) {
        state.Documentos.modelo.modelo = state.Documentos.modeloDocumentoCopia;
        state.Documentos.modelos.push(
            state.Documentos.modelo
        );
        state.itens = state.Documentos.modelos;
    },
    'DELETE_DOCUMENT'(state, { documento }) {
        let indice = state.itens.indexOf(documento);
        state.itens.splice(indice, 1);
    },
}