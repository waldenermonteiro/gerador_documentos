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
    alterModeloVisualizacao({ commit }, obj) {
        commit('ALTER_MODELO_VISUALIZACAO', { modelo: obj })

    },
    alterDocumentoModelo({ commit }, obj) {
        commit('ALTER_DOCUMENTO_MODELO', { modelo: obj })

    },
    saveDocument({ commit }) {
        commit('SAVE_DOCUMENT', {}, { root: true })
        commit('CLEAR_DOCUMENT', {})

    },
    deleteDocument({ commit }, obj) {
        commit('DELETE_DOCUMENT', { documento: obj }, { root: true })

    },
}

export default actions
