
export default {
    'CLEAR_DOCUMENT'(state) {
        state.documento = {
            descricao: "teste",
            nome: "",
            email: "",
            modelo: ""
        }
    },
    'CLONE_DOCUMENTO_MODELO'(state) {
        state.documento.modelo = state.modeloDocumento;
    },
    'ALTER_DOCUMENTO_MODELO'(state, { modelo }) {
        state.documento.modelo = modelo;
    },
    'ALTER_MODELO_VISUALIZACAO'(state, { modelo }) {
        state.modeloVisualizacao = "";
        state.modeloVisualizacao = modelo;
    },
}