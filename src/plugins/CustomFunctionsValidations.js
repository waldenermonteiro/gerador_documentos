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
            },
            Vue.prototype.validateCpf = (strCPF) => {
                strCPF = strCPF.replace('.', '')
                strCPF = strCPF.replace('.', '')
                strCPF = strCPF.replace('.', '')
                strCPF = strCPF.replace('-', '')
                let Soma;
                let Resto;
                Soma = 0;
                if (strCPF == "00000000000") return false;

                for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
                Resto = (Soma * 10) % 11;

                if ((Resto == 10) || (Resto == 11)) Resto = 0;
                if (Resto != parseInt(strCPF.substring(9, 10))) return false;

                Soma = 0;
                for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
                Resto = (Soma * 10) % 11;

                if ((Resto == 10) || (Resto == 11)) Resto = 0;
                if (Resto != parseInt(strCPF.substring(10, 11))) return false;
                return true;
            }
    }

}
export default Validations
