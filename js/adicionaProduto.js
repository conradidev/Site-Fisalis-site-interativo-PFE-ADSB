// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(id, nome, imagem, preco) {
  // Cria um objeto representando o produto
  const produto = { id, nome, imagem, preco };

  // Recupera o carrinho do localStorage (ou inicia um array vazio se não existir)
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Adiciona o novo produto ao carrinho
  carrinho.push(produto);

  // Atualiza o carrinho no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Exibe uma mensagem de confirmação
  alert(`${nome} adicionado ao carrinho!`);
}
