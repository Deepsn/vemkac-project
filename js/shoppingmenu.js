const shoppingCartButton = document.querySelector("#shoppingcart");
const shoppingCartMenu = document.querySelector("#cart");
const addToCartButtons = document.querySelectorAll(".add-button");
let shoppingCart = localStorage.getItem("shoppingCart");

if (!shoppingCart) {
    shoppingCart = [];

} else {
    try {
        // filter null items
        shoppingCart = JSON.parse(shoppingCart).filter(item => item);
    } catch(error) {
        shoppingCart = [];
        console.error("Erro ao ler o carrinho de compras", error);
    }
}

function updateCart() {
    const cartItems = document.querySelectorAll("#cart-products");
    cartItems.forEach(item => item.remove());

    const cartTemplate = document.querySelector("#cart-products-template");

    for (const item of shoppingCart) {
        if (!item) continue;

        const cartCard = cartTemplate.cloneNode(true);
        const cartCardImg = cartCard.querySelector("img");
        const cartItemName = cartCard.querySelector("p");
        const cartItemPrice = cartCard.querySelector("span");
        const cartItemAmount = cartCard.querySelector("span:nth-child(4)");

        cartItemName.innerText = item.nome;
        cartItemPrice.innerText = item.preco;
        cartItemAmount.innerText = item.quantidade + "x";
        cartCardImg.src = item.imagem;

        cartCard.id = "cart-products";
        shoppingCartMenu.appendChild(cartCard);
    }

    // update total price
    const totalPrice = shoppingCartButton.querySelector("p");
    let total = shoppingCart.reduce((total, item) => total + (Number(item.preco.slice(2).replaceAll(",", ".")) * item.quantidade), 0);

    if (isNaN(total)) {
        total = 0;
    }

    totalPrice.innerText = "R$ " + total.toFixed(2).replaceAll(".", ",");

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

function addToCart(nome, preco, imagem) {
    const oldItem = shoppingCart.find(item => item.nome === nome);
    const item = {
        nome,
        preco,
        imagem,
        quantidade: (oldItem?.quantidade ?? 0) + 1
    };
    
    if (oldItem) {
        shoppingCart[shoppingCart.indexOf(oldItem)] = item;
        
    } else {
        shoppingCart.push(item);
    }
    
    shoppingCart = shoppingCart.filter(item => item.quantidade > 0).filter(item => item);
    updateCart();
}


function onAddToCartClick(event) {
    const itemCart = event.target.parentElement.parentElement;
    const description = itemCart.querySelector(".description");
    const imgCard = itemCart.querySelector("img");

    if (!description) {
        console.error("Não foi possível encontrar a descrição do produto");
        return;
    }

    if (!imgCard) {
        console.error("Não foi possível encontrar a imagem do produto");
        return;
    }

    const name = description.querySelector("h3");
    const price = description.querySelector("h4");

    if (!name || !price) {
        console.error("Não foi possível encontrar o nome e o preço do produto");
        return;
    }

    addToCart(name.innerText, price.innerText, imgCard.src);
}


shoppingCartButton.addEventListener("click", () => {
    const isVisible = shoppingCartMenu.style.display === "block";
    shoppingCartMenu.style.display = isVisible ? "none" : "block";
});

addToCartButtons.forEach(button => {
    button.addEventListener("click", onAddToCartClick);
});

updateCart();