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

let msgPopUpArray = [
    {   
        // 0 - Sucesso na compra
        title: "Compra finalizada",
        text: "Sua compra foi concluida com sucesso!.",
        theme: 0,
    },
    {   
        // 1 - Carrinho vazio
        title: "Carrinho vazio",
        text: "Insira algum item no carrinho para efetuar a compra.",
        theme: 1,
    },
    {   
        // 2 - Item já inserido no carrinho
        title: "Item já inserido",
        text: "O item que você está tentando inserir já está no carrinho.",
        theme: 1,
    },
    {   
        // 3 - Nenhum valor selecionado
        title: "Nenhuma quantidade selecionada",
        text: "Selecione uma quantidade para inserir o item.",
        theme: 1,
    },
]

// MODAL PRINCIPAL
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
// Ele armazena o valor, caso tenha algum valor armazenado ele rearmazena como inteiro, caso seja null ele troca pelo 0
let qtdeItensInCart =  sessionStorage.getItem("qtdeItensInCart");
let itensInCart = document.getElementById("itensInCart");


// Função responsável por pegar o id do produto clicado e passar para a função de preencher o modal
function getID(button){
    let id;

    // Caso 1: o botão está dentro de um ".item"
    if (button.closest(".item")) {
        id = button.closest(".item").getAttribute("data-id");
    }
    // Caso 2: O botão está dentro do carrossel de itens
    else if (button.closest(".carousel-item")) {
        id = button.closest(".carousel-item").getAttribute("data-id");
    }

    // Chama a função que preenche o modal com as informações e passa o Id
    fillModal(id);
}

// Função responsável por criar o modal, que recebe o ID como parâmetro
function fillModal(id){
    // Cria o indice para obter os itens do array
    let i = id - 1;
    
    //Preenche com base nos valores cadastrados pro id do item
    modalTitle.textContent= itemArray[i].title;
    modalImage.src = itemArray[i].image;
    modalDescription.textContent = itemArray[i].description;
    modalAmount.textContent = itemArray[i].amount;
    modalPrice.textContent = itemArray[i].price.toFixed(2).replace('.', ',');
    inputPrice.textContent = 0;
    qtdeBuy = itemArray[i].qtde;
    modalQtdeBuy.textContent = qtdeBuy;

     // Redefine os eventos dos botões do modal, passando o índice de onde deverá ser adicionado
    addBtn.onclick = function () {
        addItem(i);
    };
    rmvBtn.onclick = function () {
        rmvItem(i);
    };
}

// Função responsável por adicionar quantidade ao item selecionado
function addItem(i){
    // Adiciona 1 ao array respectivo do item, depois atualiza no modal
    itemArray[i].qtde++;
    qtdeBuy = itemArray[i].qtde; // Atualiza o valor local
    modalQtdeBuy.textContent = qtdeBuy;

    // Chama a função de calcular o preço, passando como parâmetro o Id (i+1)
    calculatePrice(i+1);
}
// Função responsável por remover quantidade ao item selecionado
function rmvItem(i){
    // Se a quantidade do item for maior que 1, ele remove 1 item e atualiza o modal, caso contrário não faz nada
    if (itemArray[i].qtde > 1) {
        itemArray[i].qtde--;
        qtdeBuy = itemArray[i].qtde; // Atualiza o valor local
        modalQtdeBuy.textContent = qtdeBuy;
    }
    else{
        return;
    }

    // Chama a função de calcular o preço, passando como parâmetro o Id (i+1)
    calculatePrice(i+1);
}
// Função responsável por calcular o preço do item e preparar as informações para adicionar ao carrinho
function calculatePrice(id){
    i = id - 1;

    // Pega a quantidade do item e multiplica pelo preço do produto
    let qtdeCalc = itemArray[i].qtde;
    itemValue = itemArray[i].price * qtdeCalc;

    // Atualiza o modal
    inputPrice.textContent = itemValue.toFixed(2).replace('.', ',');

    // Adiciona as informações que posteriormente serão usadas no input do carrinho
    purchasedIds= id;
    purchasedPrices= itemArray[i].price;
    purchasedQtde= qtdeCalc;
    
    console.log(qtdeItensInCart,purchasedIds,purchasedPrices,purchasedQtde);
}

// Adiciona os itens à memória local do site, que será usada posteriormente para preencher o carrinho
function addToCart(){
    console.log(qtdeItensInCart,purchasedIds,purchasedPrices,purchasedQtde);

    // Seleciona o modal corretamente
    let modalItem = bootstrap.Modal.getInstance(document.getElementById("modalWindow"));
    let modalPopUp = new  bootstrap.Modal(document.getElementById("popUpWindow"));

    // Se nenhum valor for adicionado, encerrar a função sem nada
    if(purchasedIds == undefined){
        modalPopUp.show();
        showPopUp(3);
        return;
    }

    // Verifica por meio de um for se o item já existe no carrinho, caso exista passa para a próxima verificação
    for (let i = 0; i < qtdeItensInCart; i++) {
        if (purchasedIds == sessionStorage.getItem(`id${i}`)) {
            console.log("Item já está no carrinho, verificando se a quantidade mudou.");
            // Verifica se a quantidade do item mudou, caso não tenha mudado encerra tudo
            for (let j = 0; j < qtdeItensInCart; j++){
                if (purchasedQtde == sessionStorage.getItem(`qtde${j}`)) {
                    console.log("Item já está no carrinho e quantidade não mudou.");
                    modalPopUp.show();
                    showPopUp(2);
                    return;
                // Caso não tenha mudado, ele adiciona apenas a nova quantia à memória local
                }
                else{
                    sessionStorage.setItem(`qtde${i}`, purchasedQtde);
                    // Fecha o modal se existir
                    if (modalItem) { modalItem.hide();}
                }
            }
            // Caso o item já exista e não tenha sido alterada a quantia, encerra a função
            return; 
        }
    }
    
    // Adiciona 1 ao contador de itens
    qtdeItensInCart++;
    // Atualiza o contador salvo no sessionStorage
    sessionStorage.setItem("qtdeItensInCart", qtdeItensInCart);

    // Adiciona o novo item ao sessionStorage
    sessionStorage.setItem(`id${qtdeItensInCart - 1}`, purchasedIds);
    sessionStorage.setItem(`price${qtdeItensInCart - 1}`, purchasedPrices);
    sessionStorage.setItem(`qtde${qtdeItensInCart - 1}`, purchasedQtde);
    // Limpa as variáveis usadas pra armazenar os valores
    purchasedIds = null;
    purchasedPrices = null;
    purchasedQtde = null;

    // Chama a função de checar se existem itens no carrinho
    console.log(qtdeItensInCart);
    checkItensInCart();
    // Chama a função de preencher o carrinho com os itens
    createCart();

    // Fecha o modal se existir
    if (modalItem) {
        modalItem.hide();
    }
    console.log("Item adicionado ao carrinho.");
}
// Função responsável por checar se existem itens no carrinho (memória local)
function checkItensInCart(){
    console.log(qtdeItensInCart);
    if(qtdeItensInCart <= 0){
        sessionStorage.removeItem("qtdeItensInCart");
        itensInCart.textContent = qtdeItensInCart;
        itensInCart.classList.add("hide");
    }
    // Se existirem itens no carrinho, mostra a numeração
    else if(qtdeItensInCart != null){
        itensInCart.textContent = qtdeItensInCart;
        itensInCart.classList.remove("hide");
    }
}
// Função ativada pelo botão do carrinho, que exibe o carrinho de compras
function showCart(){
    // Exibe o tab com os itens
    let cartContainer = document.getElementById("tabCart");
    cartContainer.classList.toggle("showCart");
    // Chama a função de preencher o carrinho com os itens
    createCart();
}

// Função responsável por preencher o carrinho com os itens
function createCart() {
    // Define algumas variáveis locais usadas para inserir valores no carrinho
    let totalPurchased = 0;
    let finalPrice = document.getElementById("finalPrice");
    let cartItens = document.getElementById("tabItensContainer");

    // Se a memória local não estiver vazia, preenche o tab com os itens comprados
    if (qtdeItensInCart != null) {
        // Se não tiver itens no carrinho, aplicar o texto padrão, caso contrário limpar a div
        if(qtdeItensInCart == 0){
            cartItens.innerHTML = "<p id='emptyCart'>O carrinho está vazio.</p>";
        }
        else{
            cartItens.innerHTML = "";
        }

        // Preenche o carrinho com os itens por meio de um for
        for (let i = 0; i < qtdeItensInCart; i++) {
            // Define variáveis com as informações do item que será adicionado ao carrinho
            let id = sessionStorage.getItem(`id${i}`);
            let qtde = parseInt(sessionStorage.getItem(`qtde${i}`));
            let price = parseFloat(sessionStorage.getItem(`price${i}`));
            let itemprice = qtde * price;

            //  Cria o elemento, adiciona a classe e a posição dele para uso posterior
            let produtoDiv = document.createElement("div");
            produtoDiv.classList.add("tabItem");
            produtoDiv.dataset.index = i; // Define o índice do item

            // Preenche o elemento com as informações do produto e compra
            produtoDiv.innerHTML = `
                <img src="${itemArray[id - 1].image}">
                <h2>${itemArray[id - 1].title}</h2>
                <div class="tabItensControl">
                    <button class="tabRmv" data-index="${i}">-</button>
                    <span class="tabQtde">${qtde}</span>
                    <button class="tabAdd" data-index="${i}">+</button>
                </div>
                <div class="priceLineTab">
                    <span>R$ </span>
                    <div class="tabPrice">${itemprice.toFixed(2).replace('.', ',')}</div>
                </div>
            `;
            // Adiciona o total da compra ao item e finaliza a adição do item ao carrinho
            totalPurchased += itemprice;
            cartItens.appendChild(produtoDiv);
        }
        //Insere o valor da compra
        finalPrice.textContent = totalPurchased.toFixed(2).replace('.', ',');

        // Adiciona os eventos de clique nos botões + e -
        document.querySelectorAll(".tabRmv").forEach(button => {
            button.addEventListener("click", function () {
                updateItemQuantity(this.dataset.index, -1);
            });
        });

        document.querySelectorAll(".tabAdd").forEach(button => {
            button.addEventListener("click", function () {
                updateItemQuantity(this.dataset.index, 1);
            });
        });
    } 
}

// Função para atualizar a quantidade do item no carrinho, que recebe o index e a mudança (+ ou -)
function updateItemQuantity(index, change) {
    // Cria uma variável com a quantidade do item
    let qtde = parseInt(sessionStorage.getItem(`qtde${index}`)) + change;

    // Se a quantidade for igual a 0, remove o item do carrinho
    if (qtde == 0) {
        sessionStorage.removeItem(`id${index}`);
        sessionStorage.removeItem(`price${index}`);
        sessionStorage.removeItem(`qtde${index}`);

        console.log("Qtde no carrinho antes de atualizar",qtdeItensInCart);
        sessionStorage.setItem("qtdeItensInCart", parseInt(qtdeItensInCart) - 1);
        qtdeItensInCart = sessionStorage.getItem("qtdeItensInCart");

        console.log("Qtde no carrinho durante a remoção",qtdeItensInCart);
        checkItensInCart();
        reorderItens();
    }
    else {
        console.log("Qtde no carrinho durante a atualização",qtdeItensInCart);
        sessionStorage.setItem(`qtde${index}`, qtde);
        createCart(); // Recarrega o carrinho com os valores atualizados
    }
}
// Função responsável por reorganizar os itens
function reorderItens(){
    // Variaveis usadas para reorganizar os itens
    let arrayIds = [];
    let arrayPrices = [];
    let arrayQtdes = [];
    let j = 0;

    // Primeiramente, salva todos os itens na memória no array, ignorando os nulos
    for(let i = 0; i< 30; i++){
        if(sessionStorage.getItem(`id${i}`) != null){
            arrayIds[j] = sessionStorage.getItem(`id${i}`);
            arrayQtdes[j] = sessionStorage.getItem(`qtde${i}`);
            arrayPrices[j] = sessionStorage.getItem(`price${i}`);
            j++;
        }
    }
    // Após isso, remove todos os itens da memória
    for(let i = 0; i< 30; i++){
        sessionStorage.removeItem(`id${i}`);
        sessionStorage.removeItem(`qtde${i}`);
        sessionStorage.removeItem(`price${i}`);
    }
    console.log("array de ids reordenados:",arrayIds);

    // Por fim, retorna os itens para a memória com a posição ajustada
    for(let i = 0; i< qtdeItensInCart; i++){
        sessionStorage.setItem(`id${i}`, arrayIds[i]);
        sessionStorage.setItem(`price${i}`, arrayPrices[i]);
        sessionStorage.setItem(`qtde${i}`, arrayQtdes[i]);
    }
    // Chama a função de preencher o carrinho para aplicar as alterações
    createCart();
}

function finishPurchase(){
    
    if(qtdeItensInCart != null && qtdeItensInCart != 0){
        // Limpa o carrinho
        sessionStorage.clear();
        // Zera o carrinho
        sessionStorage.setItem("qtdeItensInCart",0);
        qtdeItensInCart = sessionStorage.getItem("qtdeItensInCart");

        // Zera todas as quantidades dos itens novamente
        for(let i = 0; i < itemArray.length; i++){
            itemArray[i].qtde = 0;
        }

        // Chama as funções necessárias para limpar tudo
        showPopUp(0)
        checkItensInCart();
        createCart();
    }
    else{
        showPopUp(1)
    }
}

// Função responsável por exibir os popups de conclusão ou falha no site
function showPopUp(value){
    let popUpText = document.getElementById("popUpText");
    let popUpTitle = document.getElementById("popUpContainerLabel");
    let popUpHeader = document.getElementById("popUpHeader");
    let popUpBody = document.getElementById("popUpBody");
    let popUpFooter = document.getElementById("popUpFooter");


    popUpTitle.textContent = msgPopUpArray[value].title;
    popUpText.textContent = msgPopUpArray[value].text;

    if(msgPopUpArray[value].theme == 0){
        // Remove a classe antiga
        popUpHeader.classList.remove("failure");
        popUpBody.classList.remove("failure");
        popUpFooter.classList.remove("failure");

        // Adiciona a classe nova
        popUpHeader.classList.add("sucess");
        popUpBody.classList.add("sucess");
        popUpFooter.classList.add("sucess");
    }
    else{
        // Remove a classe antiga
        popUpHeader.classList.remove("sucess");
        popUpBody.classList.remove("sucess");
        popUpFooter.classList.remove("sucess");

        // Adiciona a classe nova
        popUpHeader.classList.add("failure");
        popUpBody.classList.add("failure");
        popUpFooter.classList.add("failure");
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