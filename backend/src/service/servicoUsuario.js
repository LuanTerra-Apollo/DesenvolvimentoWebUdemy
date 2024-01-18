const Usuario = require('../model/Usuario');
var idAtual = 1;

var listaDeUsuarios = [
    new Usuario({
        id:1,
        nome:"Administrador",
        email: "admin@gmail.com",
        senha: "123456"
    })
];

function obterTodos(){
    return listaDeUsuarios;
}

function cadastrar(obj){
    var usuario = new Usuario(obj);
    idAtual++;
    usuario.id = idAtual;
    listaDeUsuarios.push(usuario);

    return usuario;
}

function atualizar(usuario){
    var indice = listaDeUsuarios.findIndex(u => u.id == usuario.id);
    
    if(indice < 0){
        return;
    }

    listaDeUsuarios.splice(indice, 1, usuario);
}

function deletar(id){
    var indice = listaDeUsuarios.findIndex(u => u.id == id);
    if(indice < 0){
        return;
    }

    // Deleta de dentro do array a posicição especifica
    listaDeUsuarios.splice(indice, 1);
}

module.exports = {
    obterTodos,
    cadastrar,
    atualizar,
    deletar
}