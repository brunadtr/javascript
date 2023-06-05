var listaUsuarios = []
listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null){
    listaUsuarios = []
}
exibirUsuarios()

function cadastrar(){
    if(document.getElementById("nome").value == '' || document.getElementById("usuario").value == '' || document.getElementById("senha").value == '' || document.getElementById("confirme").value ==''){
        alert("Preencha todos os campos")
        return
    }

    var cadastro = {
        nome: document.getElementById("nome").value,
        usuario: document.getElementById("usuario").value,
        senha: document.getElementById("senha").value,
        confirme: document.getElementById("confirme").value
    }
    listaUsuarios.push (cadastro)
    localStorage.setItem( 'bdUsuarios', JSON.stringify(listaUsuarios))
    exibirUsuarios()
}
 function exibirUsuarios(){
    document.getElementById('lista').innerHTML = ''
    listaUsuarios.forEach ( (item, pos) => {
        document.getElementById('lista').innerHTML += 
        `<div>
        <b>Nome:</b> ${item.nome} - <b>Login:</b> ${item.usuario}
        <img src="/ex025/img/excluir.svg" onclick='excluirUsuario(${pos})'>
        </div>`
    } )
 }

 function excluirUsuario(pos) {
    if(confirm('Deseja realmente excluir este usuário?')) {
    listaUsuarios.splice(pos, 1)
    localStorage.setItem( 'bdUsuarios', JSON.stringify(listaUsuarios))
    exibirUsuarios()
    }
 }
