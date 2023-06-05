function Calcular(){
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var soma = Number(valor1) + Number(valor2)
    document.getElementById("resultados").innerHTML += `<br> ${valor1} + ${valor2} = ${soma}`
    var subtracao = valor1 - valor2
    document.getElementById("resultados").innerHTML += `<br> ${valor1} - ${valor2} = ${subtracao}`
    var multiplicacao = valor1 * valor2
    document.getElementById("resultados").innerHTML += `<br> ${valor1} * ${valor2} = ${multiplicacao}`
    var divisao = valor1 / valor2
    document.getElementById("resultados").innerHTML += `<br> ${valor1} / ${valor2} = ${divisao}`
    var resto = valor1 % valor2
    document.getElementById("resultados").innerHTML += `<br> ${valor1} % ${valor2} = ${resto}`
    var exponencia = valor1 ** valor2
    document.getElementById("resultados").innerHTML += `<br> ${valor1} ** ${valor2} = ${exponencia}`
}