const servicoUsuario = require('../service/servicoUsuario');

exports.obterTodos = (req, res) => {
    var  listaDeUsuarios = servicoUsuario.obterTodos();
    res.json(listaDeUsuarios);
};

exports.cadastrar = (req, res) => {
    var usuario = servicoUsuario.cadastrar(req.body)
    res.json(usuario);
};

exports.atualizar = (req, res) => {
    // Aqui vamos cadastrar o usuario
    var id = req.params.id;
    var usuario = req.body;

    usuario.id = parseInt(id);
    
    servicoUsuario.atualizar(usuario);

    res.json(usuario);
};

exports.deletar = (req, res) => {
    // Aqui vamos cadastrar o usuario
    var id = req.params.id;
    servicoUsuario.deletar(id);
    res.json({mensagem:`Produto com id ${id} foi deletado com sucesso!`});
};