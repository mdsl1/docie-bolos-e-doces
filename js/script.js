// Array com os dados dos produtos para o modal
let itemArray = [
    {
        id: 1,
        title: "Bolo Recheado de Dois Amores",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Bolo/Bolo 2 amores.png",
        amount: "Serve até 6 Pessoas",
        price: 25.90,
        qtde: 0,
    },
    {
        id: 2,
        title: "Bolo Recheado de Doce de Leite",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Bolo/Bolo doce de leite com abacaxi.png",
        amount: "Serve até 6 Pessoas",
        price: 35.90,
        qtde: 0,
    },
    {
        id: 3,
        title: "Bolo de Pote de Brigadeiro",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Bolo de pote/Bolo de pote de brigadeiro.png",
        amount: "Serve 1 Pessoa",
        price: 10.90,
        qtde: 0,
    },
    {
        id: 4,
        title: "Bolo de Pote de Prestígio",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Bolo de pote/Bolo de pote de prestigio.png",
        amount: "Serve 1 Pessoa",
        price: 5.90,
        qtde: 0,
    },
    {
        id: 5,
        title: "Torta de Mousse de Chocolate",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Torta/Torta de chocolate.png",
        amount: "Serve até 4 Pessoas",
        price: 15.90,
        qtde: 0,
    },
    {
        id: 6,
        title: "Torta de Mousse de Maracujá",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Torta/Torta de maracuja.png",
        amount: "Serve até 4 Pessoas",
        price: 25.90,
        qtde: 0,
    },
    {
        id: 7,
        title: "10 Docinhos Beijinho",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho beijinho.png",
        amount: "Serve 1 Pessoa",
        price: 15.90,
        qtde: 0,
    },
    {
        id: 8,
        title: "20 Docinhos Beijinho",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho beijinho.png",
        amount: "Serve até 2 Pessoas",
        price: 25.90,
        qtde: 0,
    },
    {
        id: 9,
        title: "30 Docinhos Beijinho",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho beijinho.png",
        amount: "Serve até 3 Pessoas",
        price: 35.90,
        qtde: 0,
    },
    {
        id: 10,
        title: "10 Docinhos Brigadeiro",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho brigadeiro.png",
        amount: "Serve 1 Pessoa",
        price: 15.90,
        qtde: 0,
    },
    {
        id: 11,
        title: "20 Docinhos Brigadeiro",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho brigadeiro.png",
        amount: "Serve até 2 Pessoas",
        price: 25.90,
        qtde: 0,
    },
    {
        id: 12,
        title: "30 Docinhos Brigadeiro",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Docinhos/Docinho brigadeiro.png",
        amount: "Serve até 3 Pessoas",
        price: 35.90,
        qtde: 0,
    },
    {
        id: 13,
        title: "Kit para Festas",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Kits/Kit Festa.png",
        amount: "Serve até 6 Pessoas",
        price: 35.90,
        qtde: 0,
    },
    {
        id: 14,
        title: "Kit Solteirão",
        description: "Texto descritivo detalhado sobre o produto",
        image: "Midias/Produtos/Kits/Kit Solteiro.png",
        amount: "Serve 1 Pessoa",
        price: 15.90,
        qtde: 0,
    },
]


// Elementos do modal
let modalTitle = document.getElementById("modalContainerLabel");
let modalImage = document.getElementById("modalImg");
let modalDescription = document.getElementById("modalDescription");
let modalAmount = document.getElementById("modalAmount");
let modalPrice = document.getElementById("modalPrice");

// Botões e div para quantidade de itens
let modalQtdeBuy = document.getElementById("qtdeItem");
let qtdeBuy = 0;
let addBtn = document.getElementById("addItem");
let rmvBtn = document.getElementById("rmvItem");

// Divs e variáveis para o cálculo e exibição de valores
let inputPrice = document.getElementById("priceInput");
let itemValue = 0;

//Variáveis para a finalização da compra
let purchasedIds;
let purchasedPrices;
let purchasedQtde;
let qtdeItensInCart =  sessionStorage.getItem("qtdeItensInCart") ? parseInt(sessionStorage.getItem("qtdeItensInCart")) : 0;
let itensInCart = document.getElementById("itensInCart");

function getID(button){
    let id;

    // Caso 1: o botão está dentro de um ".item"
    if (button.closest(".item")) {
        id = button.closest(".item").getAttribute("data-id");
    }
    // Caso 2: outra origem (exemplo: um modal já aberto ou outro contexto)
    else if (button.closest(".carousel-item")) {
        id = button.closest(".carousel-item").getAttribute("data-id");
    }

    fillModal(id);
}

function fillModal(id){
    let i = id - 1;
    
    modalTitle.textContent= itemArray[i].title;
    modalImage.src = itemArray[i].image;
    modalDescription.textContent = itemArray[i].description;
    modalAmount.textContent = itemArray[i].amount;
    modalPrice.textContent = itemArray[i].price.toFixed(2).replace('.', ',');
    inputPrice.textContent = 0;
    qtdeBuy = itemArray[i].qtde;
    modalQtdeBuy.textContent = qtdeBuy;

     // Redefine os eventos dos botões, passando o índice
    addBtn.onclick = function () {
        addItem(i);
    };
    rmvBtn.onclick = function () {
        rmvItem(i);
    };

    // sessionStorage.clear();
}

function addItem(i){
    itemArray[i].qtde++;
    qtdeBuy = itemArray[i].qtde; // Atualiza o valor local
    modalQtdeBuy.textContent = qtdeBuy;

    calculatePrice(i+1);
}

function rmvItem(i){
    if (itemArray[i].qtde > 1) {
        itemArray[i].qtde--;
        qtdeBuy = itemArray[i].qtde; // Atualiza o valor local
        modalQtdeBuy.textContent = qtdeBuy;
    }
    calculatePrice(i+1);
}

function calculatePrice(id){
    i = id - 1;

    let qtdeCalc = itemArray[i].qtde;
    itemValue = itemArray[i].price * qtdeCalc;

    inputPrice.textContent = itemValue.toFixed(2).replace('.', ',');

    // Adiciona um novo item ao carrinho
    purchasedIds= id;
    purchasedPrices= itemValue; // Mantém como número para cálculos futuros
    purchasedQtde= qtdeCalc;
    
    console.log(qtdeItensInCart,purchasedIds,purchasedPrices,purchasedQtde);
}

function addToCart(){
    console.log(qtdeItensInCart,purchasedIds,purchasedPrices,purchasedQtde);

    // Se nenhum valor for adicionado, encerrar a função sem nada
    if(purchasedIds == undefined){
        return;
    }

    // Verifica se o item já existe no carrinho
    for (let i = 0; i < qtdeItensInCart; i++) {
        if (purchasedIds == sessionStorage.getItem(`id${i}`)) {
            console.log("Item já está no carrinho, verificando se a quantidade mudou.");
            for (let j = 0; j < qtdeItensInCart; j++){
                if (purchasedQtde == sessionStorage.getItem(`qtde${j}`)) {
                    console.log("Item já está no carrinho e quantidade não mudou.");
                    return;
                }else{
                    sessionStorage.setItem(`price${i}`, purchasedPrices);
                    sessionStorage.setItem(`qtde${i}`, purchasedQtde);
                }
            }
            return; // Sai da função para evitar inserção duplicada
        }
    }

    // Adiciona o novo item ao sessionStorage
    sessionStorage.setItem(`id${qtdeItensInCart}`, purchasedIds);
    sessionStorage.setItem(`price${qtdeItensInCart}`, purchasedPrices);
    sessionStorage.setItem(`qtde${qtdeItensInCart}`, purchasedQtde);

    qtdeItensInCart++;
    sessionStorage.setItem("qtdeItensInCart", qtdeItensInCart); // Atualiza o contador salvo no sessionStorage
    checkItensInCart();

    console.log("Item adicionado ao carrinho.");
}

function checkItensInCart(){
    let currentItensQtde = sessionStorage.getItem("qtdeItensInCart");
    console.log(currentItensQtde);
    if(currentItensQtde != 0 && currentItensQtde != null){
        itensInCart.textContent = sessionStorage.getItem("qtdeItensInCart");
        itensInCart.classList.remove("hide");
    } else{
        itensInCart.classList.add("hide");
    }
}

document.querySelectorAll(".viewItem").forEach(button => {
    button.addEventListener("click", () => getID(button));
});
document.querySelectorAll(".btnShowItemDisplay").forEach(button => {
    button.addEventListener("click", () => getID(button));
});

window.onload = () => {
    checkItensInCart();
}
