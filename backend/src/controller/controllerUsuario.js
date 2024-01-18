const servicoUsuario = require('../service/servicoUsuario');

exports.obterTodos = (req, res) => {
    var listaDeUsuarios = servicoUsuario.obterTodos();
    res.json(listaDeUsuarios);
};

exports.cadastrar = (req, res) => {
    var usuario = servicoUsuario.cadastrar(req.body)
    res.json(usuario);
};

exports.atualizar = (req, res) => {
    var id = req.params.id;
    var usuario = req.body;

    usuario.id = parseInt(id);

    servicoUsuario.atualizar(usuario);

    res.json(usuario);
};

exports.deletar = (req, res) => {
    var id = req.params.id;
    servicoUsuario.deletar(id);
    res.json({ mensagem: `Produto com id ${id} foi deletado com sucesso!` });
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await servicoUsuario.login({ email, password });
        res.json(usuario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};