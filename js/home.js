document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cardsContainer = document.querySelector('.cards-container');
    const cardWidth = document.querySelector('.card').offsetWidth;
    
    let currentIndex = 0;

    // Função para mover o carrossel para a esquerda
    function moveLeft() {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateCarouselPosition();
    }

    // Função para mover o carrossel para a direita
    function moveRight() {
        if (currentIndex < cardsContainer.children.length - 1) {
            currentIndex++;
        }
        updateCarouselPosition();
    }

    // Função para atualizar a posição do carrossel
    function updateCarouselPosition() {
        cardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Adiciona os event listeners nas setas
    prevButton.addEventListener('click', moveLeft);
    nextButton.addEventListener('click', moveRight);
});
