let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const container = document.getElementById('carrinho');
const totalEl = document.getElementById('total');

function atualizarCarrinho() {
  container.innerHTML = '';
  let total = 0;

  if (carrinho.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>Seu carrinho está vazio.</p>";
    totalEl.textContent = "";
    return;
  }

  carrinho.forEach((p, index) => {
    total += Number(p.preco);
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
    container.appendChild(el);
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}


function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
}

atualizarCarrinho();