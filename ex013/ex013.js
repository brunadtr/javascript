function sortear(){
    var mes = parseInt(Math.random() * 20)
    var nome = document.getElementById("nome").value
    switch (mes) {
        case 1:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Janeiro <br> <img src="/img/aliança.jpg">`
            break
        case 2:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Fevereiro <br> <img src="img013/aliança.jpg">`
            break
        case 3:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Maço <br> <img src="img013/aliança.jpg">`
            break
        case 4:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Abril <br> <img src="img013/aliança.jpg">`
            break
        case 5:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Maio <br> <img src="img013/aliança.jpg">`
            break
        case 6:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Junho <br> <img src="img013/aliança.jpg">`
            break
        case 7:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Julho <br> <img src="img013/aliança.jpg">`
            break
        case 8:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Agosto <br> <img src="img013/aliança.jpg">`
            break
        case 9:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Setembro <br> <img src="img013/aliança.jpg">`
            break
        case 10:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Outubro <br> <img src="img013/aliança.jpg">`
            break
        case 11:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Novembro <br> <img src="img013/aliança.jpg">`
            break
        case 12:
            document.getElementById("resultado").innerHTML += `${nome}, você vai se casar no mês de Dezembro <br> <img src="img013/aliança.jpg">`
            break
        default:
            document.getElementById("resultado").innerHTML += `${nome}, você não vai se casar <br> <img src="img013/festa.jpg">`
    }
}