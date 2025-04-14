// Seleciona todos os slides
const slides = document.querySelectorAll(".slide");

// Seleciona os botões de navegação
const btnEsquerda = document.querySelector(".seta.esquerda");
const btnDireita = document.querySelector(".seta.direita");

// Índice do slide atual
let slideAtual = 0;

// Atualiza a posição do carrossel com base no slide atual
function atualizarCarrossel() {
  const offset = -slideAtual * 100; // Calcula deslocamento
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

// Evento ao clicar na seta esquerda: volta um slide (com loop)
btnEsquerda.addEventListener("click", () => {
  slideAtual = (slideAtual - 1 + slides.length) % slides.length;
  atualizarCarrossel();
});

// Evento ao clicar na seta direita: avança um slide (com loop)
btnDireita.addEventListener("click", () => {
  slideAtual = (slideAtual + 1) % slides.length;
  atualizarCarrossel();
});
