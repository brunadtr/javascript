var listaUsuarios = []
listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null){
    listaUsuarios = []
}
console.log(listaUsuarios);

function entrar(){
    var usuario = document.getElementById("nome").value
    var senha = document.getElementById("senha").value

    var encontrado = false
    //for(var i in listaUsuarios){
        
    listaUsuarios.forEach( item => {
        if(item.usuario == usuario && senha == item.senha)
        {
                alert('Você conseguiu entrar')
                encontrado = true
            }
        } )
        if(encontrado == false){
        alert('Usuário e senha não encontrados')
        return false
    }
    }
