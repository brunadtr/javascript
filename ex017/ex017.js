function gerar(){
    document.getElementById("resultado").innerHTML = ""
    for(var i = 1; i <= 20; i++){
        if(i % 2 == 1){
            document.getElementById("resultado").innerHTML += `${i}<br>`
        }
    }
    document.getElementById("relacao").innerHTML = ""
    document.getElementById("relacao").innerHTML += `Relação de Nº ímpares até 20`
}