import store from '../store/store'
const ShowMessages = {
    install(Vue, options) {

        Vue.prototype.$showMessage = (title, type, message) => {
            if (message != "") {
                swal({
                    title: title,
                    icon: type,
                    text: message

                }).then((result) => {
                    // store.dispatch("cleanMessages");
                }).catch((erro) => {
                    // store.dispatch("cleanMessages");
                }

                )
            }

        }

        Vue.prototype.$showMessageRulesEmpty = (title) => {
            swal({
                title: title,
                icon: 'error',
                text: 'PREENCHA OS CAMPOS CORRETAMENTE'

            }).then((result) => {
                // store.dispatch("cleanMessages");
            }).catch((erro) => {
                // store.dispatch("cleanMessages");
            }

            )

        },
            Vue.prototype.$showConfirmationMessage = (title, element, object, url) => {
                swal({
                    title: title,
                    text: "TEM CERTEZA QUE DESEJA EXCLUIR " + element + " ?",
                    icon: "warning",
                    buttons: {
                        danger: {
                            label: "Não",
                            text: "Não",
                            value: false,
                            className: "btn-danger"
                        },
                        success: {
                            label: "Sim",
                            text: "Sim",
                            value: true,
                            className: "btn-default",
                        },

                    }
                }).then(result => {
                    if (result) {
                        store.dispatch(url, object);
                    }
                });

            }
    }
}
export default ShowMessages