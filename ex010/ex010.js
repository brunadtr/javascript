function Login(){
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
    
    if (usuario == "adm" && senha == "123"){
        document.getElementById("resultado").innerHTML = `<p class="green">${usuario}, você entrou no site</p>`
    }
    else {
        document.getElementById("resultado").innerHTML = `<p class="red">${usuario} não entrou no site, tente novamente</p>`
    }
}