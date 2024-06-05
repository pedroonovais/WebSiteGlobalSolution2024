document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    function showSlide(index) {
        const slideWidth = slides.querySelector('.participantes').clientWidth;
        slides.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : slides.children.length - 1;
        showSlide(index);
    });

    nextButton.addEventListener('click', () => {
        index = (index < slides.children.length - 1) ? index + 1 : 0;
        showSlide(index);
    });

    showSlide(index); // Initialize the first slide
});
