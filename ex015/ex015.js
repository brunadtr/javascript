function gerar(){
    document.getElementById("resultado").innerHTML = ""
    var cont = 1
    while (cont <= 10){
        var numero = document.getElementById("numero").value
        var produto = Number(numero) * Number(cont)
        document.getElementById("resultado").innerHTML += `<br> ${numero} x ${cont} = ${produto} `
        cont++
    }
    document.getElementById("tabuada").innerHTML = ""
    document.getElementById("tabuada").innerHTML += `Tabuada do ${numero}`
}