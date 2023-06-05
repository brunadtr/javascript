var nota1 = document.getElementById("nota1").value
var nota2 = document.getElementById("nota2").value
function Media() {
    var nome = document.getElementById("nome").value
    if (nota1 > 10) {
        alert("Insira um valor igual ou menor que 10")
        exit
    }

    if (nota2 > 10) {
       alert("Insira um valor igual ou menor que 10")
       exit
    }

    if (media >= 7) {
        document.getElementById("passou-rep").innerHTML += `Passou de ano`
    }
    else {
        document.getElementById("passou-rep").innerHTML += `Reprovou de ano`
    }
    document.getElementById("resultado").innerHTML += `<br> O aluno ${nome} tirou nota ${nota1} e ${nota2} sua média foi ${media} `
}

function calcularMedia(nota1, nota2){

}