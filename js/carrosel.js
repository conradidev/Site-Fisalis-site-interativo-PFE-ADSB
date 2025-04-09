
  const slides = document.querySelectorAll(".slide");
  const btnEsquerda = document.querySelector(".seta.esquerda");
  const btnDireita = document.querySelector(".seta.direita");

  let slideAtual = 0;

  function atualizarCarrossel() {
    const offset = -slideAtual * 100;
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
  }

  btnEsquerda.addEventListener("click", () => {
    slideAtual = (slideAtual - 1 + slides.length) % slides.length;
    atualizarCarrossel();
  });

  btnDireita.addEventListener("click", () => {
    slideAtual = (slideAtual + 1) % slides.length;
    atualizarCarrossel();
  });

