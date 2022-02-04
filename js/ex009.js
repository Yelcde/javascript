function verificar() {
    var pais = document.getElementById('txt').value
    var res = document.getElementsByTagName('div')[0]
    if (pais == 'Brasil') {
        res.innerHTML = `Se você mora em <strong>${pais}</strong> você é brasileiro`
    } else {
        res.innerHTML = `<p>Se você mora em <strong>${pais}</strong> você é estrangeiro</p>`
    }
}