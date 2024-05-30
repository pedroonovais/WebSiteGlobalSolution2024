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