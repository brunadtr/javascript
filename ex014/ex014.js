function sortear(){
    document.getElementById("resultado").innerHTML = ""
    var contador = 1
    while (contador <= 6){
        var numeros = parseInt(Math.random() * 60) + 1
        document.getElementById("resultado").innerHTML += `${numeros}, `
        contador++
    }
    
}