function adicionarAoCarrinho(id, nome, imagem ,preco) {
  const produto = { id, nome, imagem ,preco };
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${nome} adicionado ao carrinho!`);
}
