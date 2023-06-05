var filme =[]
function cadastrar(){
    filme.push ( document.getElementById("filme").value)
    document.getElementById("resultado").innerHTML =""
    for (var i=0; i < filme.length; i++){
        document.getElementById("resultado").innerHTML += `${filme [i]}<br>`
    }
}