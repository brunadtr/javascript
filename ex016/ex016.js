function gerar(){
    document.getElementById("resultado").innerHTML = ""
    var numero = document.getElementById("numero").value
    for(var cont = 1; cont <= 10; cont++){
    
        var produto = numero * cont
        document.getElementById("resultado").innerHTML += `<br> ${numero} x ${cont} = ${produto} `
    }
    document.getElementById("tabuada").innerHTML = ""
    document.getElementById("tabuada").innerHTML += `Tabuada do ${numero}`
}