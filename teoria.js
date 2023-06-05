
        /*
         Comentários em
         multiplas linhas
        */
       //Comentário em uma linha única

       //O alert é utilizado para exibir uma mensagem em popup
        //alert("olá mundo!!!")

        //No Console conseguimos visualizar informacoes sem exibir na página
        console.log ("Olá mundo!!! Utilizando Console!")

        //Criando uma função chamada quando clicamos no botão
        function BotaoTeste() {
            alert("Você clicou no botão")
        }

        //Tipo de exibição de mensagens no console
        console.error("Esta é uma mensagem de erro")
        console.warn("Esa é uma mensagem de alerta")
        console.info("Esta é uma mensagem de informação")

        //Declarando variáveis
        //String - Conjunto de caracteres - Declarar com "" ou ''
        var nome = "Bruna"
        var sobrenome = "Dutra"
        //Number - Todo número em JS é do tipo Number - Declarar sem ""
        var idade = 16
        //Boolean - Somente recebe true ou false
        var aprovado = true

        console.log(typeof nome) //Comando typeof para saber o tipo do dado

        console.log(nome + ' ' + sobrenome) //Concatenando strings com o +
        //Se utilizarmos o + com strings ele concatena, se utilizarmos com number soma
        var n1 = 10
        var n2 = 25
        console.log(n1 + n2) //Irá somar as 2 variáveis number (35)
        var n3 = "10"
        var n4 = "25"
        console.log(n3 + n4) //Irá concatenar 'juntar' as 2 variáveis (1025)

        n1 = n2 //uma variável pode receber o valor de outra variável
        console.log("n1 = " + 'e o n2 = ' + n2)

        var salario = 1200.85 //Para atribuir um valor decimal, utilizar . não ,
        salario = salario + 200 //Posso também somar a variável com ela mesmo
        console.log(salario)
        salario += 200 //Representação mais simplificada da expressão acima
        console.log(salario)

        //Antigamente para juntar texto e variáveis faziamos assim
        console.log('Olá, ' + nome + ' você tem ' + idade + 'anos e recebe R$ ' + salario)
        //Hoje utilizamos o TemplateString forma mais simples
        console.log(`Olá, ${nome} você tem ${idade} anos e recebe R$ ${salario}`)

        function BotaoNome(){
            //No prompt abre opção para digitar algo
            var nome2 = prompt('Qual o seu nome?')
            //No confirm abre texto com opção ok e cancel
            confirm(`Olá ${nome2}, entendeu JS?`)
        }

        function BotaoSomar() {
            //Receber valor1 de um prompt
            var valor1 = prompt('Qual o valor 1?')
            //Receber valor2 de um prompt
            var valor2 = prompt('Qual o valor 2?')
            //Variável soma recebendo valor1 + valor2
            //Convertendo a variável valor1 e valor2 de string para number
            //Posso utilizar parseInt() parseFloat() ou Number()
            var soma = Number (valor1) + Number (valor2)
            //Exibir um alert o valor da soma
            //alert(soma)

            /*Alterando um elemento buscando ele pelo ID e alterando o conteúdo do HTML, Podemos ler
             da seguinte forma, no documento pegar o elemento pelo ID resultadoSoma e alterar
             o conteúdo do HTML pela string */
            document.getElementById("resultadoSoma").innerHTML += `<br> A soma dos números ${valor1} e ${valor2} é = ${soma}`
        }

        function botaoCidade(){
            var nomeCidade = document.getElementById("cidade").value
            document.getElementById("resultadoCidade").innerHTML = nomeCidade
        }

        //Operadores Aritméticos e Ordem de precedência
         var opSoma = 5 + 2 //Operador de soma
         console.log(opSoma) //7
         var opSubtracao = 5 - 2 //Operador de subtração -
         console.log(opSubtracao) //3
         var opMultiplicacao = 5 * 2 //Operador de multiplicação *
         console.log(opMultiplicacao) //10
         var opDivisao = 5 / 2 //Operador de divisão
         console.log(opDivisao) //2.5

         var opExponenciacao = 5 ** 2 //Operador de exponenciacao
         console.log(opExponenciacao) //25
         var opResto = 5 % 2 //Operador de resto da divisão %
         console.log(opResto) //1

         //Ordem de Precedencia
         var ordemPrecedencia1 = 5 + 3 / 2
         console.log(ordemPrecedencia1) //6.5
         var ordemPrecedencia2 = (5 + 3) / 2
         console.log(ordemPrecedencia2) //4
         /* 1º ()
            2º **
            3º * /
            4º %
            5º + -
        */

        //Constantes
        const pi = 3.14
        //pi = 3 - Se o valor for alterado dará erro no javascript

        //Auto atribuição
        var n = 3
        n = n + 3 // a variável recebe ela mesmo + 3
        n += 3 //quer dizer o mesmo que a expressão acima

        n++ //quando precisamos somar + 1 ao valor da variável
        n-- //quando precisamos subtrair -1 ao valor da variável

        //Operadores Relacionais
        var n1 = 5
        var n2 = 6
        console.log (n1 > n2) // > Maior que
        console.log (n1 < n2) // < Menor que
        console.log (n1 >= n2) // >= Maior ou igual que
        console.log (n1 <= n2) // <= Menor ou igual que
        console.log (n1 == n2) // == Igual
        console.log (n1 != n2) // != Não igual - Diferente

        //Estruturas condicionais
        if (n1 > n2){         //Verificando a condição entre parenteses
            //Se a condição for verdadeira "entra" nesse bloco
            console.log ("O n1 é maior que o n2")
        }
        else {
            //Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
            console.log ("O n1 não é maior que o n2")
        }
        //Exemplo de condição
        var minhaIdade = 15
        if (minhaIdade >= 16){
            console.log ("Você pode votar")
        }
        else {
            console.log ("Você NÃO pode votar")
        }

        //Operadores Lógicos
        //&& representa o E
        var login = "adm"
        var senha = "123"
        //Para entrar na condição TRUE aas 2 condições precisar ser verdadeira 
        if (login == "adm" && senha == "123") {
            //Executa esse bloco se pelo menos 1 condição for FALSE
        }

        var media = 6
        //Operador OU -> || (pipe)
        //Para entrar na condição TRUE pelo menos 1 condição precisa ser verdadeira
        if (media == 6 || media == 5){
            //Executa esse bloco quando 1 condição é TRUE pelo menos
        }
        else{
            //Aqui entra se todas as condições forem falsas
        }

        //Estruturas condicionais encadeadas
        if (media >= 7){
            console.log("APROVADO")
        }
        else if(media < 5) { //Podemos fazer um novo if junto com o else
            console.log("RECUPERAÇÃO")
        }
        else if (media < 5) {
            console.log ("REPROVADO")
        }

        //debugger
        //Podemos utilizar o debugger para analisar o código linha a linha

        //exit
        //quando queremos parar de executar uma função no JS utilizamos o exit

        //Para sortearmos um valor aleátorio utilizamos o Math.random()
        //o Math.random retorna um número decimal e precisamos multiplicar pelo nr máximo que desejamos e soma 1 quando necessário
        //o parseInt utilizamos para obter apenas a parte inteira do número
        var nrSorteado = parseInt(Math.random() * 100) + 1
        console.log(nrSorteado)

        //Switch Case
        //É como se fosse vários if else de forma mais simples
        var diaSemana = 3
        switch (diaSemana) {
            case 1:
                console.log("Hoje é: Domingo")
                break //para o switch case e não verifica as outras opções
            case 2:
                console.log("Hoje é: Segunda")
                break
            case 3:
                console.log("Hoje é: Terça")
                break
            case 4:
                console.log("Hoje é: Quarta")
                break
            case 5:
                console.log("Hoje é: Quinta")
                break
            case 6:
                console.log("Hoje é: Sexta")
                break
            case 7:
                console.log("Hoje é: Sabado")
                break
            default:
                console.log("Dia Invalido")
        }

        //Laços de repetição WHILE (que quer dizer enquanto)
        //while (condição)
        //enquanto a condição do parenteses for verdadeira continua repetindo o código do bloco
        var nrVidas = 5
        while (nrVidas > 0){
            console.log (`Você ainda tem ${nrVidas}`)
            nrVidas--
        }

        //Verificando se o número é par com while
        var contador = 1 //Iniciando o contador de vezes que irá executar
        while (contadoe <= 10) {
            if (contador % 2 == 0) { //Condição par quando o contador for par
                console.log (`${contador} é par`)
            }
            else {
                console.log (`${contador} é impar`)
            }
            contador++ //Adicionamos +1 ao contador para não ficar em loop
        }

        var cont = 1
        while (cont <= 5){
            console.log (cont)
            cont++
        }

        for(var cont = 1; cont <= 5; cont++){
            console.log(cont)
        }

    //For - Laço de repetição
    //1ª Expressão var i = 1
    //(Aqui eu inicio o controle de vezes)
    //2ª Expressão i <= 10
    //(Aqui nós verificamos a condição para se manter no loop)
    //3ª expressão i++
    //(Aqui acrescentamos na variável +1 vez)
    //Exibindo
    for(let i = 1; i <= 10; i++){
        console.log(i)
    }