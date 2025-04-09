const container = document.getElementById("produtos");
        
const produtosLimitados = produtos.slice(0, 20);

function verSimilares(categoria) {
  window.location.href = `produtos.html?categoria=${categoria}`;
}



produtosLimitados.forEach(produto => {
  const card = document.createElement("div");
  card.className = "produto-card";

  card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" />
      <div class="produto-info">
        <h2>${produto.nome}</h2>
        <h3>${produto.colecao}</h3>
        <p>Preço: <span>R$ ${produto.preco.toFixed(2)}</span></p>
        <button class="btn-similares" onclick="verSimilares('${produto.categoria}')">Ver Similares</button>
        <button onclick="adicionarAoCarrinho(${produto.id}, '${produto.nome}', '${produto.imagem}' ,${produto.preco})">Adicionar ao carrinho</button>
      </div>
    `;


  container.appendChild(card);
});