const express = require('express');
const cors = require('cors');
const Produto = require('./src/model/Produto');
const Usuario = require('./src/model/Usuario')

const app = express();
app.use(cors());
app.use(express.json());

const produtoController = require('./src/controller/controllerProduto');
const usuarioController = require('./src/controller/controllerUsuario')

// Rota Geral
app.get('/', (req, res) => {
    // throw new Error("Deu ruim no servidor");
    res.send("Api em funcionamento !");
});

// Rotas do produto
app.get('/produtos', produtoController.obterTodos);
app.post('/produtos', produtoController.cadastrar);
app.put('/produtos/:id', produtoController.atualizar);
app.delete('/produtos/:id', produtoController.deletar);

// Rotas do usuário
app.get('/usuarios', usuarioController.obterTodos);
app.post('/usuarios', usuarioController.cadastrar);
app.put('/usuarios/:id', usuarioController.atualizar);
app.delete('/usuarios/:id', usuarioController.deletar);

app.listen(3000, () => console.log("Api rodando na porta 3000"));