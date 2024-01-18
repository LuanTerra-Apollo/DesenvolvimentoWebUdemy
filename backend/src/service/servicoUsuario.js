const Usuario = require('../model/Usuario');
const bcrypt = require('bcrypt');
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

async function login(obj){
    var usuario = listaDeUsuarios.find(u => u.email === obj.email);
    if(!usuario) {
        throw new Error("Email ou Senha inválido");
    }

    const isPasswordValid = await bcrypt.compare(obj.senha, usuario.senha);
    if (!isPasswordValid) {
        throw new Error("Email ou Senha inválido");
    }

    return usuario;
}

module.exports = {
    obterTodos,
    cadastrar,
    atualizar,
    deletar,
    login
}