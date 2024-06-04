const btnToggleNavigation = document.querySelector('#btn-toggle-navigation')
const navegation = document.querySelector('#navegacao')

// Função para mostrar a navegação mobile na tela
btnToggleNavigation.addEventListener('click', () => {
    if (navegation.style.left !== "0px"){
        navegation.style.left = "0px"
    }else{
        navegation.style.left = "-100vw"
    }
})

let contador = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', function () {
    contador = (contador + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', function () {
    contador = (contador - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    const offset = -contador * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
    setInterval(function () {
        contador = (contador + 1) % totalSlides;
        updateCarousel();
    }, 6000);
}

startAutoSlide();