const servicoProduto = require('../service/servicoProduto');

exports.obterTodos = (req, res) => {
    var  listaDeProdutos = servicoProduto.obterTodos();
    res.json(listaDeProdutos);
};

exports.cadastrar = (req, res) => {
    var produto = servicoProduto.cadastrar(req.body)
    res.json(produto);
};

exports.atualizar = (req, res) => {
    var id = req.params.id;
    var produto = req.body;

    produto.id = parseInt(id);
    
    servicoProduto.atualizar(produto);

    res.json(produto);
};

exports.deletar = (req, res) => {
    var id = req.params.id;
    servicoProduto.deletar(id);
    res.json({mensagem:`Produto com id ${id} foi deletado com sucesso!`});
};