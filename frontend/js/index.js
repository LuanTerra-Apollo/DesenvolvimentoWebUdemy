var tbody = document.querySelector("table>tbody");
var form = {
    nome: document.querySelector('#nome'),
    quantidade: document.querySelector('#quantidade'),
    valor: document.querySelector('#valor'),
    btnSalvar: document.querySelector('#btn-salvar'),
    btnCancelar: document.querySelector('#btn-cancelar'),
}

var listaProdutos = [];

form.btnSalvar.addEventListener('click', () => {
    var produto = {
        nome: form.nome.value,
        quantidadeEstoque: form.quantidade.value,
        valor: form.valor.value
    };
    
    // Aqui preciso verificar se os campos foram preenchidos
    if(!produto.nome || !produto.quantidadeEstoque || !produto.valor) {
        // Se não foram, mandar mensagem para o usuário preencher.
        alert("Os campos nome, quantidade e valor são obrigatórios!");
        return;
    }
    // Caso contrário enviar os dados para salvar no backend.
    cadastrarProdutoNaAPI(produto)
})

function cadastrarProdutoNaAPI(produto){
    fetch('http://localhost:3000/produtos',{
        headers: {
            "Content-Type": "application/json",
        },
        method:"POST",
        body: JSON.stringify(produto),
    }) //endereço da
    .then(response => response.json())
    .then( response => {
        obterProdutosDaAPI();
        limparCampos();
    } )
    .catch(erro => {
        console.log(erro)
        alert("Deu ruim")
    })
}

function obterProdutosDaAPI() {
    fetch('http://localhost:3000/produtos') //endereço da
    .then(response => response.json())
    .then( response => {
        listaProdutos = response.map(p => new Produto(p));
        console.log(listaProdutos)
        preencherTabela(listaProdutos);
    } )
    .catch(erro => console.log(erro))
}

function preencherTabela(produtos) {

    //Limpando a tabela para receber os produtos.
    tbody.textContent = "";

    produtos.map(produto => {
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        var tdNome = document.createElement("td");
        var tdQuantidade = document.createElement("td");
        var tdValor = document.createElement("td");
        var tdAcoes = document.createElement("td")

        tdId.textContent = produto.id;
        tdNome.textContent = produto.nome;
        tdQuantidade.textContent = produto.quantidadeEstoque;
        tdValor.textContent = aplicarMascaraParaRealComPrefixo(produto.valor);

        tdAcoes.innerHTML = `
        <button onclick="editarProduto(${produto.id})" class="btn btn-link">Editar</button> /
        <button onclick="excluirProduto(${produto.id})" class="btn btn-link">Excluir</button>`;

        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdQuantidade);
        tr.appendChild(tdValor);
        tr.appendChild(tdAcoes);

        tbody.appendChild(tr);
    })

}

function limparCampos(){
    form.nome.value = "";
    form.quantidade.value = "";
    form.valor.value = "";
}

obterProdutosDaAPI();


function editarProduto(id){
    alert(id)
}

function excluirProduto(id){
    alert(id)
}