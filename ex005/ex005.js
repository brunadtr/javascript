
        function botaoValor(){
            var numero = document.getElementById("resultados").value
            var dobro = numero*2
            var metade = numero/2
            document.getElementById("resultadoValor").innerHTML += ` <br> O dobro de ${numero} é igual a ${dobro} e a metade é ${metade}`
        }
        function botaoLimpar(){
            document.getElementById("resultadoValor").innerHTML = ""
        }