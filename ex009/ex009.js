function validar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    if (idade >= 18) {
        document.getElementById("resultado").innerHTML += `Parabés, ${nome} possui idade suficiente 
        <br> <img src="/img/cnh.jpg">`
    }
    else {
        document.getElementById("resultado").innerHTML += `:( ${nome} não possui idade suficiente
            <br> <img src="/img/cnh proibida.png">`
    }
}