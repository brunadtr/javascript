function verificar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    if (idade >= 18 && idade <= 65) {
        document.getElementById("resultado").innerHTML += `<br> <p class="green"> ${nome} tem ${idade} anos, você é obrigado a votar</p>`
    }
    else if(idade <16) {
        document.getElementById("resultado").innerHTML += `<br> <p class="red"> ${nome} tem ${idade} anos, não pode votar</p>`
    }
    else if (idade >= 16 && idade <= 18 || idade >65) {
        document.getElementById("resultado").innerHTML += `<br> <p class="blue"> ${nome} tem ${idade} anos, não é obrigatório votar</p>`
    }
}