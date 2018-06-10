const actions = {
    validateFirstStep({ state }) {
        return new Promise((resolve, reject) => {
            return state.modeloImagem != "" ? resolve(true) : reject(true);
        })

    },
    validateSecondStep({ state }) {
        return new Promise((resolve, reject) => {
            state.validatorCadastro.validateAll().then(success => {
                return success == true ? resolve(true) : reject(false);
            });
        })

    },
    cloneDocumentoModelo({ commit }) {
        commit('CLONE_DOCUMENTO_MODELO', {})

    },
    alterDocumentoModeloCopia({ commit }, obj) {
        commit('ALTER_DOCUMENTO_COPIA', { modeloCopia: obj })

    },
    saveDocument({ commit }) {
        commit('SAVE_DOCUMENT', {}, { root: true })

    },
    deleteDocument({ commit }, obj) {
        commit('DELETE_DOCUMENT', { documento: obj }, { root: true })

    },
}

export default actions
