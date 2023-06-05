//Declarando um array vazio
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 18, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'SESI', true]

//Acessando os dados de um vetor
console.log( nomes[1] )
console.log( novoVetor[0] )

//Verificando o tamanho de um vetor
console.log (numeros.length)

//Indice        0         1        2         3        4
var frutas = ['Maçã', 'Laranja', 'Pera', 'Morango', 'Uva']
//faço um for para percorrer todo o tamanho do vetor
for (var i=0; i < frutas.length; i++) {
    //coloco o i no indice da frutas para pegar o valor de cada indice do vetor
    console.log ( frutas[i] )
}

//Adicionando novo valor no FINAL do vetor
frutas.push ('Abacaxi')
console.log (frutas.length)
console.log (frutas)

var novaListaFrutas = []
novaListaFrutas.push ('Limão')
console.log (novaListaFrutas)
novaListaFrutas.push ('Melancia')
console.log (novaListaFrutas)

for (var i=0; i < frutas.length; i++){
    console.log( frutas[i] )
}

//for in -> não preciso inicializar uma variável de contador do loop
for (var indice in novaListaFrutas){
    console.log (indice + ' - ' + novaListaFrutas[indice])
}

//Método forEach de um vetor percorre e retorna todos os elementos do vetor
novaListaFrutas.forEach( fruta => {
    console.log (fruta)
} )

//O método forEach - significa para cada item do vetor
/* dentro do parenteses colocamos a variável que irá receber o conteúdo de cada linha do vetor e com o => {} informamos o bloco que irá executar 
para cada linha */
frutas.forEach( item => {
    console.log ('Item pelo forEach', item)
} )

//Quando precisamos do indice também o colocamos (). Assim como no exemplo abaixo
frutas.forEach( (item, pos) => {
    console.log ('Item pelo forEach com posição', pos, item)
} )