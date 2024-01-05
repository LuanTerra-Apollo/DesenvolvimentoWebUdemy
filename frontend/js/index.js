var tbody = document.querySelector("table>tbody");

function obterProdutosDaAPI() {
    fetch('http://localhost:3000/produtos') //endereço da
    .then(response => response.json())
    .then( response => {
        // para cada produto que vier, adicionar na tabela
        preencherTabela(response);
    } )
    .catch(erro => console.log(erro))
}

function preencherTabela(produtos) {

    produtos.map(produto => {
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        var tdNome = document.createElement("td");
        var tdQuantidade = document.createElement("td");
        var tdValor = document.createElement("td");

        tdId.textContent = produto.id;
        tdNome.textContent = produto.nome;
        tdQuantidade.textContent = produto.quantidadeEstoque;
        tdValor.textContent = produto.valor;

        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdQuantidade);
        tr.appendChild(tdValor);

        tbody.appendChild(tr);
    })

}

obterProdutosDaAPI();