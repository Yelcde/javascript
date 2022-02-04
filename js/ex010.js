function verificar() {
    var txvel = document.getElementById('vel')
    var res = document.getElementsByTagName('div')[0]
    var vel = Number(txvel.value)
    if (vel > 60) {
        res.innerHTML = `<p>Sua velocidade foi de <strong>${vel} km/h.</strong> MULTADO!!</p> `
    } else {
        res.innerHTML = `<p>Sua velocidade foi de <strong>${vel} km/h.</strong> PARABÉNS!!</p> `
    }
}