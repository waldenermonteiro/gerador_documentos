const Validations = {
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

      },
      Vue.prototype.numeroLinhasPagina = (pagina, linhas, totalRows) => {
        let linhasPaginaAtual = linhas * pagina - (linhas - 1);
        let linhasTotaisAteAPaginaAtual = linhasPaginaAtual + linhas - 1;
        if (pagina == 1) {
          if (totalRows < linhas) {
            if (totalRows > linhas) {
              return pagina + "-" + linhas;
            } else {
              return pagina + "-" + totalRows;
            }
          }
          return pagina + "-" + linhas;
        } else {
          if (linhasTotaisAteAPaginaAtual < totalRows) {
            return linhasPaginaAtual + "-" + (linhasPaginaAtual + linhas - 1);
          } else if (linhasTotaisAteAPaginaAtual >= totalRows) {
            return linhasPaginaAtual + "-" + totalRows;
          }
        }
      }
  }
}
export default Validations
