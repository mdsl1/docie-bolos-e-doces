// Variáveis usadas no carrossel de itens
const productContainers = [...document.querySelectorAll('.itensContainer')];
const nxtBtn = [...document.querySelectorAll('.btnNextCarousel')];
const preBtn = [...document.querySelectorAll('.btnPrevCarousel')];

// "Função" que movimenta o carrossel de itens
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})