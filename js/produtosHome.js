// Seleciona o container onde os produtos serão exibidos
const container = document.getElementById("produtos");

// Limita os produtos aos 20 primeiros
const produtosLimitados = produtos.slice(0, 20);

// Função que redireciona para a página de produtos filtrando por categoria
function verSimilares(categoria) {
  window.location.href = `produtos.html?categoria=${categoria}`;
}

// Percorre os produtos limitados e cria os cards
produtosLimitados.forEach(produto => {
  const card = document.createElement("div");
  card.className = "produto-card";

  // Define o conteúdo HTML do card
  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" />
    <div class="produto-info">
      <h2>${produto.nome}</h2>
      <h3>${produto.colecao}</h3>
      <p>Preço: <span>R$ ${produto.preco.toFixed(2)}</span></p>
      <button class="btn-similares" onclick="verSimilares('${produto.categoria}')">Ver Similares</button>
      <button onclick="adicionarAoCarrinho(${produto.id}, '${produto.nome}', '${produto.imagem}', ${produto.preco})">Adicionar ao carrinho</button>
    </div>
  `;

  // Adiciona o card ao container
  container.appendChild(card);
});
