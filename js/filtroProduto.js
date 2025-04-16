// Função para obter um parâmetro da URL
function getParametro(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

// Função para aplicar o filtro de coleção e redirecionar com o parâmetro
function filtrarProdutos(colecao) {
  const url = new URL(window.location.href);
  url.searchParams.set("colecao", colecao); // Define o parâmetro "colecao"
  window.location.href = url.toString(); // Redireciona com os parâmetros atualizados
}

// Obtém os filtros de categoria e coleção da URL
const categoriaFiltro = getParametro('categoria');
const colecaoFiltro = getParametro('colecao');

// Começa com todos os produtos disponíveis
let produtosFiltrados = produtos;

// Aplica filtro por categoria, se existir
if (categoriaFiltro) {
  produtosFiltrados = produtosFiltrados.filter(p => p.categoria === categoriaFiltro);
}

// Aplica filtro por coleção, se existir
if (colecaoFiltro) {
  produtosFiltrados = produtosFiltrados.filter(p => p.colecao === colecaoFiltro);
}

// Seleciona o container onde os produtos serão exibidos
const container = document.getElementById("produtos");

// Se não houver produtos após os filtros, exibe mensagem
if (produtosFiltrados.length === 0) {
  container.innerHTML = "<p style='text-align:center;'>Nenhum produto encontrado.</p>";
} else {
  // Cria os cards dos produtos filtrados e adiciona ao container
  produtosFiltrados.forEach(produto => {
    const card = document.createElement("div");
    card.className = "produto-card";

    card.innerHTML = `
  <!-- Imagem do produto com descrição acessível -->
  <img src="${produto.imagem}" alt="Imagem do produto ${produto.nome} da coleção ${produto.colecao}" />

  <!-- Container com informações do produto -->
  <div class="produto-info">

    <!-- Nome do produto como título -->
    <h2>${produto.nome}</h2>

    <!-- Nome da coleção (casual, corporativo, etc.) -->
    <h3>${produto.colecao}</h3>

    <!-- Preço do produto, formatado com duas casas decimais -->
    <p>Preço: <span>R$ ${produto.preco.toFixed(2)}</span></p>
    
    <!-- Botão que chama a função para adicionar o produto ao carrinho -->
    <button 
      onclick="adicionarAoCarrinho(${produto.id}, '${produto.nome}', '${produto.imagem}', ${produto.preco})">
      Adicionar ao carrinho
    </button>

  </div>
`;

    container.appendChild(card);
  });
}
