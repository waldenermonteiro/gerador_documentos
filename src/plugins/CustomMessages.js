const ShowMessages = {
    install(Vue, options) {

        Vue.prototype.showMessage = (title, type, message) => {
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

        Vue.prototype.showMessageRulesEmpty = (title) => {
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

        }
    }
}
export default ShowMessages