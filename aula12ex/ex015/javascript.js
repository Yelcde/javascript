function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // pega os quatro digitos do ano
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Number(fano.value.length == 0 || Number(fano.value > ano))){
        alert('[ERRO] Verifique os dados e corrija o erros')
    }
}
