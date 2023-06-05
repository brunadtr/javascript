var filme =[]
var imagem =[]
function cadastrar(){
    filme.push ( document.getElementById("filme").value)
    imagem.push ( document.getElementById("imagem").value)
    document.getElementById("resultado").innerHTML =""
    for (var i=0; i < filme.length; i++){
        document.getElementById("resultado").innerHTML += `<div class="filmes"><img src="${imagem [i]}" > <br> ${filme [i]}<br></div>`
    }
}
function indicar(){
    var filmeSorteado = parseInt(Math.random() * filme.length )
    document.getElementById("sorteado").innerHTML = `<img src="${imagem [filmeSorteado]}" > <br> ${filme [filmeSorteado]}<br>`
}