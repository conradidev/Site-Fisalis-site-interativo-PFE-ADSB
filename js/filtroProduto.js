function getParametro(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
  }

  function filtrarProdutos(colecao) {
const url = new URL(window.location.href);
url.searchParams.set("colecao", colecao);
window.location.href = url.toString(); // Redireciona com o parâmetro
}

  const categoriaFiltro = getParametro('categoria');
  const colecaoFiltro = getParametro('colecao');

  let produtosFiltrados = produtos;

  if (categoriaFiltro) {
    produtosFiltrados = produtosFiltrados.filter(p => p.categoria === categoriaFiltro);
  }

  if (colecaoFiltro) {
    produtosFiltrados = produtosFiltrados.filter(p => p.colecao === colecaoFiltro);
  }

  const container = document.getElementById("produtos");

  if (produtosFiltrados.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>Nenhum produto encontrado.</p>";
  } else {
    produtosFiltrados.forEach(produto => {
      const card = document.createElement("div");
      card.className = "produto-card";
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" />
        <div class="produto-info">
          <h2>${produto.nome}</h2>
          <h3>${produto.colecao}</h3>
          <p>Preço: <span>R$ ${produto.preco.toFixed(2)}</span></p>
          <button onclick="adicionarAoCarrinho(${produto.id}, '${produto.nome}', '${produto.imagem}' ,${produto.preco})">Adicionar ao carrinho</button>
        </div>
      `;
      container.appendChild(card);
    });
  }