// Recupera o carrinho do localStorage ou inicia com array vazio
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Seleciona o container onde os produtos serão exibidos
const container = document.getElementById('carrinho');

// Seleciona o elemento onde será exibido o total
const totalEl = document.getElementById('total');

// Atualiza a exibição do carrinho na página
function atualizarCarrinho() {
  container.innerHTML = ''; // Limpa o conteúdo atual
  let total = 0;

  // Caso o carrinho esteja vazio, exibe mensagem
  if (carrinho.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>Seu carrinho está vazio.</p>";
    totalEl.textContent = "";
    return;
  }

  // Para cada produto no carrinho, cria o card e soma ao total
  carrinho.forEach((p, index) => {
    total += Number(p.preco); // Soma o preço ao total

    // Cria elemento do produto
    const el = document.createElement('div');
    el.className = 'produto-card';
    el.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}" />
      <div class="produto-info">
        <h2>${p.nome}</h2>
        <p>Preço: <span>R$ ${Number(p.preco).toFixed(2)}</span></p>
        <button onclick="removerDoCarrinho(${index})">Remover</button>
      </div>
    `;

    // Adiciona o produto ao container
    container.appendChild(el);
  });

  // Atualiza o valor total exibido
  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Remove um item do carrinho pelo índice
function removerDoCarrinho(index) {
  carrinho.splice(index, 1); // Remove o produto
  localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
  atualizarCarrinho(); // Atualiza a exibição
}

// Inicializa a exibição do carrinho ao carregar a página
atualizarCarrinho();
