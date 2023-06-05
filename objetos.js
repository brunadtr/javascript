var listaCarros = []

//Declarando um objeto e informando os atributos
//Todo objeto declaro com { }
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'VW'
}
//Para exibir o atributo do objeto faço da seguinte forma objeto.abtributo
console.log (carro.ano + ' - ' + carro.modelo)
console.log (`${carro.ano} - ${carro.modelo}`)

//Adicionando o objeto carro ao vetor listaCarros
listaCarros.push('carro')
console.log (listaCarros) // 1 - Só existe 1 item

//Novo objeto - novo carro
carro = {
    ano: '2021',
    modelo:'Onix',
    marca: 'GM'
}

//Adicionado novo objeto carro ao vetor listaCarros
listaCarros.push(carro)
console.log (listaCarros)

for (var andar in listaCarros){
    console.log ( carro.modelo )
}