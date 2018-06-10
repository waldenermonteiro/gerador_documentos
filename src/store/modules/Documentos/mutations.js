
export default {
    'CLONE_DOCUMENTO_MODELO'(state) {
        state.modeloDocumentoCopia = state.modeloDocumento;
    },
    'ALTER_DOCUMENTO_COPIA'(state, { modeloCopia }) {
        state.modeloDocumentoCopia = modeloCopia;
    },
}