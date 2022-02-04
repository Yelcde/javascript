function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

}
