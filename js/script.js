const productContainers = [...document.querySelectorAll('.itensContainer')];
const nxtBtn = [...document.querySelectorAll('.btnNextCarousel')];
const preBtn = [...document.querySelectorAll('.btnPrevCarousel')];

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

let itemArray = [
    {
        id: 1,
        title: "Bolo Recheado de Dois Amores",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Bolo/Bolo 2 amores.png",
        price: "R$ 25,90",
        qtde: 0,
    },
    {
        id: 2,
        title: "Bolo Recheado de Doce de Leite",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Bolo/Bolo doce de leite com abacaxi.png",
        price: "R$ 35,90",
        qtde: 0,
    },
    {
        id: 3,
        title: "Bolo de Pote de Brigadeiro",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Bolo de pote/Bolo de pote de brigadeiro.png",
        price: "R$ 10,90",
        qtde: 0,
    },
    {
        id: 4,
        title: "Bolo de Pote de Prestígio",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Bolo de pote/Bolo de pote de prestigio.png",
        price: "R$ 5,90",
        qtde: 0,
    },
    {
        id: 5,
        title: "Torta de Mousse de Chocolate",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Torta/Torta de chocolate.png",
        price: "R$ 15,90",
        qtde: 0,
    },
    {
        id: 6,
        title: "Torta de Mousse de Maracujá",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Torta/Torta de maracuja.png",
        price: "R$ 25,90",
        qtde: 0,
    },
    {
        id: 7,
        title: "10 Docinhos Beijinho",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho beijinho.png",
        price: "R$ 15,90",
        qtde: 0,
    },
    {
        id: 8,
        title: "20 Docinhos Beijinho",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho beijinho.png",
        price: "R$ 25,90",
        qtde: 0,
    },
    {
        id: 9,
        title: "30 Docinhos Beijinho",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho beijinho.png",
        price: "R$ 35,90",
        qtde: 0,
    },
    {
        id: 10,
        title: "10 Docinhos Brigadeiro",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho brigadeiro.png",
        price: "R$ 15,90",
        qtde: 0,
    },
    {
        id: 11,
        title: "20 Docinhos Brigadeiro",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho brigadeiro.png",
        price: "R$ 25,90",
        qtde: 0,
    },
    {
        id: 12,
        title: "30 Docinhos Brigadeiro",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho brigadeiro.png",
        price: "R$ 35,90",
        qtde: 0,
    },
    {
        id: 13,
        title: "Kit para Festas",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Kits/Kit Festa.png",
        price: "R$ 35,90",
        qtde: 0,
    },
    {
        id: 14,
        title: "Kit Solteirão",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Kits/Kit Solteiro.png",
        price: "R$ 15,90",
        qtde: 0,
    },

]
