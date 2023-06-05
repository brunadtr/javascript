var vidas = 4
function vida(){
    vidas++
    document.getElementById("resultado").innerHTML = ""
    for (var contador = 1; contador <= vidas; contador++){
    document.getElementById("resultado").innerHTML += `<img src="img019/coracao.jpg" id="coracao">`
    }
}

function menosVida(){
    vidas--
    document.getElementById("resultado").innerHTML = ""
    for (var contador = 1; contador <= vidas; contador++){
        document.getElementById("resultado").innerHTML += `<img src="img019/coracao.jpg" id="coracao">`
    }
}