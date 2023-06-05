function Media() {
    var nome = document.getElementById("nome").value
    var nota1 = document.getElementById("nota1").value
    if (nota1 > 10) {
        alert("Insira um valor igual ou menor que 10")
        exit
    }

    var nota2 = document.getElementById("nota2").value
    if (nota2 > 10) {
       alert("Insira um valor igual ou menor que 10")
       exit
    }

    var media = (Number(nota1) + Number(nota2)) / 2
    if (media >= 7) {
        document.getElementById("passou-rep").innerHTML += `Passou de ano`
    }
    else {
        document.getElementById("passou-rep").innerHTML += `Reprovou de ano`
    }
    document.getElementById("resultado").innerHTML += `<br> O aluno ${nome} tirou nota ${nota1} e ${nota2} sua média foi ${media} `
}