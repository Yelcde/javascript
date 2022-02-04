//var h = 13.45
//var hora = parseInt(h)
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora <= 5 && hora > 0) {
    console.log('Boa madrugada!!')
} else if (hora <= 12 && hora > 0) {
    console.log('Bom dia!!')
} else if (hora <= 18 && hora > 0) {
    console.log('Boa tarde!!')
} else if (hora <= 24 && hora > 0) {
    console.log('Boa noite!!')
} else {
    console.log('O dia é composto por horas em números positivos indo de 0 a 24. Porfavor, inserir um horário plausivel')
}