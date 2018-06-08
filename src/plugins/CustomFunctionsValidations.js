const Validations = {
    install(Vue, options) {
        Vue.prototype.validatePhone = (value) => {
            return value.length >= 14
        },
            Vue.prototype.validateCnpj = (str) => {
                str = str.replace('.', '')
                str = str.replace('.', '')
                str = str.replace('.', '')
                str = str.replace('-', '')
                str = str.replace('/', '')
                var cnpj = str
                var numeros, digitos, soma, i, resultado, pos, tamanho, digitosIguais
                digitosIguais = 1
                if (cnpj.length < 14 && cnpj.length < 15) return false
                for (i = 0; i < cnpj.length - 1; i++) {
                    if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
                        digitosIguais = 0
                        break
                    }
                }
                if (!digitosIguais) {
                    tamanho = cnpj.length - 2
                    numeros = cnpj.substring(0, tamanho)
                    digitos = cnpj.substring(tamanho)
                    soma = 0
                    pos = tamanho - 7
                    for (i = tamanho; i >= 1; i--) {
                        soma += numeros.charAt(tamanho - i) * pos--
                        if (pos < 2) pos = 9
                    }
                    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
                    if (resultado != digitos.charAt(0)) return false
                    tamanho = tamanho + 1
                    numeros = cnpj.substring(0, tamanho)
                    soma = 0
                    pos = tamanho - 7
                    for (i = tamanho; i >= 1; i--) {
                        soma += numeros.charAt(tamanho - i) * pos--
                        if (pos < 2) pos = 9
                    }
                    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
                    if (resultado != digitos.charAt(1)) return false
                    return true
                } else return false
            }
    }

}
export default Validations
