const productTemplate = document.querySelector(".buy-box-template");
const buySection = document.querySelector("#buy-section");

const showProduct = document.querySelector("#show-product");
const showProductPrice = showProduct.querySelector("#show-product-price > h3");
const showProductImage = showProduct.querySelector("#show-image > img");
const showProductDescription = showProduct.querySelector("#show-description > h3");
const showAddProduct = showProduct.querySelector("#show-button");

let selectedProduct = null;
let disconnectFunctions = [];

let compressedSelectedProduct = localStorage.getItem("selectedProduct");

if (compressedSelectedProduct) {
    try {
        selectedProduct = JSON.parse(compressedSelectedProduct);
    } catch(error) {
        console.error("Erro ao ler o produto selecionado", error);
    }
}

function createProduct(product) {
    const productElement = productTemplate.cloneNode(true);
    const descriptionElement = productElement.querySelector(".description");
    const addButton = productElement.querySelector(".add-button");

    productElement.classList.remove("buy-box-template");
    productElement.classList.add("buy-box");

    productElement.querySelector(".img-buybox > img").src = product.img;
    descriptionElement.querySelector("h3").innerHTML = product.nome;
    descriptionElement.querySelector("h4").innerHTML = "R$" + product.preco;
    descriptionElement.querySelector("p").innerHTML = product.descricao;

    buySection.appendChild(productElement);

    function onClickAdd() {
        addToCart(product.nome, product.preco, product.img);
    }

    function onClick() {
        if (!product) return;

        selectedProduct = product;
        localStorage.setItem("selectedProduct", JSON.stringify(product));

        let description = product.descricao_longa

        if (!description || description === "") {
            description = product.descricao;
        }
        
        showProductPrice.innerHTML = "R$" + product.preco;
        showProductImage.src = product.img;
        showProductDescription.innerHTML = description;
    }

    if (selectedProduct && selectedProduct.nome === product.nome) {
        onClick();
    }

    addButton.addEventListener("click", onClickAdd);
    productElement.addEventListener("click", onClick);

    return function() {
        addButton.removeEventListener("click", onClickAdd);
        productElement.removeEventListener("click", onClick);
    }
}

function createProducts() {
    cleanup();

    let filteredItens = itens.filter((product) => {
        let filters = Object.keys(filtersApplied).length;
        let pass = filters === 0;

        if (filters === 1 && (filtersApplied["dropdown-buttons-3"] || filtersApplied["dropdown-buttons-2"])) {
            pass = true;
        } else if (filters === 2 && filtersApplied["dropdown-buttons-3"] && filtersApplied["dropdown-buttons-2"]) {
            pass = true;
        }

        for (let sectionName in filtersApplied) {
            let filter = filtersApplied[sectionName];
            
            if (filter.multiple && filter.check(product)) {
                pass = true;
                break;
            }
        }

        if (filtersApplied["dropdown-buttons-2"]) {
            let filter = filtersApplied["dropdown-buttons-2"];

            if (!filter.check(product)) {
                pass = false;
            }
        }

        return pass;
    });

    console.log(filteredItens, filtersApplied);
    if (filtersApplied["dropdown-buttons-3"]) {
        let filter = filtersApplied["dropdown-buttons-3"];

        filteredItens.sort((a, b) => filter.check(a, b));
    }

    console.log(filteredItens, filtersApplied);

    disconnectFunctions = filteredItens.map((product) => createProduct(product));
}

function cleanup() {
    for (let disconnect of disconnectFunctions) {
        if (!disconnect) continue;
        disconnect();
    }
    disconnectFunctions = [];

    let buyBoxes = buySection.querySelectorAll(".buy-box");
    for (let buyBox of buyBoxes) {
        buyBox.remove();
    }
}

createProducts();

showAddProduct.addEventListener("click", () => {
    if (!selectedProduct) return;

    addToCart(selectedProduct.nome, selectedProduct.preco, selectedProduct.img);
});