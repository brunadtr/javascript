
var nrSorteado = parseInt(Math.random() * 100)
var tentativa = 0
function chutar(){
    var chute = prompt ('Chute um número de 0 a 100')
    tentativa++

    if(chute < nrSorteado) {
        document.getElementById("resultado").innerHTML += `<br>Você chutou ${chute} pensei em um número MAIOR`
    }
    else if (chute > nrSorteado) {
        document.getElementById("resultado").innerHTML += `<br>Você chutou ${chute} pensei em um número MENOR`
    }
    else if (chute == nrSorteado) {
        document.getElementById("resultado").innerHTML += `<br>Parabéns você acertou o número ${chute} em ${tentativa} tentativas`
    }
}
function novo(){
    document.getElementById("resultado").innerHTML = ""
    nrSorteado = parseInt(Math.random() * 100)
    tentativa = 0
}