var listaFilmes =[]
//Buscando as inrformações do localStorage gravadas no Navegador
//Utilizo o método getItem com o nome exatamente que utilizamos
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null){
    listaFilmes = []
}
console.log(listaFilmes)
exibirFilmesVetor()

function cadastrar(){
    var filme = {
        nome: document.getElementById("nome").value,
        link: document.getElementById("imagem").value
    }
    listaFilmes.push (filme)
    /* Utilizando o localStorage que irá gravar o nosso vetor de filmes no método setItem, preciso passar como parâmetro o nome do espaço 
    que o navegador irá reservar e passo também o vetor de filmes convertido em formato de JSON */
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes))
    exibirFilmesVetor()
    
}

function indicar(){
    var filmeSorteado = parseInt(Math.random() * listaFilmes.length )
    document.getElementById("sorteado").innerHTML = `<img src="${listaFilmes[filmeSorteado].link}" > <br> ${listaFilmes[filmeSorteado].nome}<br>`
}

function exibirFilmesVetor(){
    document.getElementById('resultado').innerHTML = ''
    for (var i=0; i < listaFilmes.length; i++){
        document.getElementById("resultado").innerHTML += `<div class="filmes"><img src="${listaFilmes [i].link}" > <br> ${listaFilmes [i].nome}<br></div>`
    }
}

function limpar(){
    
}