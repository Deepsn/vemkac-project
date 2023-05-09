const dropdowns = document.querySelectorAll(".dropdown");
const dropdownButtons = document.querySelectorAll(".dropdown-button");

const filters = {
    "carnes": (product) => product.tipo === "carnes" || product.tipo === "carne",
    "bebidas": (product) => product.tipo === "bebidas",
    "vegetais": (product) => product.tipo === "vegetais",
    "margarinas": (product) => product.tipo === "margarinas",
    "graos": (product) => product.tipo === "graos",
    "temperos": (product) => product.tipo === "temperos",
    "doces": (product) => product.tipo === "doces",
    "higiene": (product) => product.tipo === "higiene",
    "frutas": (product) => product.tipo === "frutas",
    "peixes": (product) => product.tipo === "peixes" || product.tipo === "peixe",

    "price1": (product) => product.price <= 10,
    "price2": (product) => product.price > 10 && product.price <= 50,
    "price3": (product) => product.price > 50 && product.price <= 100,

    "sort1": (productA, productB) => {
        if (!productA || !productB) return 0;
        return productA.nome.localeCompare(productB.nome);
    },
    "sort2": (productA, productB) => {
        if (!productA || !productB) return 0;
        return productB.price - productA.price;
    },
    "sort3": (productA, productB) => {
        if (!productA || !productB) return 0;
        return productA.price - productB.price;
    }
}

let filtersApplied = {};


function onDropdownButtonClick(event) {
    event.preventDefault();

    let dropdownInput = this.querySelector("input");
    let multiple = dropdownInput.type === "checkbox";
    let name = dropdownInput.id.replace("btn_", "");
    let section = dropdownInput.name + (multiple ? name : "");
    let lastFilter = filtersApplied[section];

    dropdownInput.checked = !dropdownInput.checked;

    if (dropdownInput.checked) {
        this.classList.add("dropdown-input-checked");

    } else {
        this.classList.remove("dropdown-input-checked");
    }

    if (lastFilter && (multiple && lastFilter.input === dropdownInput || !multiple)) {
        lastFilter.input.parentElement.classList.remove("dropdown-input-checked");
        lastFilter.input.checked = false;
    }

    if (!dropdownInput.checked) {
        delete filtersApplied[section];
        createProducts();
        return;
    }

    filtersApplied[section] = {
        check: filters[name],
        input: dropdownInput,
        multiple
    }

    createProducts();
}

function onDropdownClick(event) {
    let dropdownTitle = this.querySelector(".dropdown-title");

    if (event.target !== dropdownTitle && !dropdownTitle.contains(event.target)) {
        return;
    }

    let dropdownImage = dropdownTitle.querySelector("img");
    let dropdownContent = this.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("dropdown-show");
    dropdownImage.classList.toggle("rotate-180");

    dropdowns.forEach(dropdown => {
        if (dropdown !== this) {
            let dropdownTitle = dropdown.querySelector(".dropdown-title");
            let dropdownImage = dropdownTitle.querySelector("img");
            let dropdownContent = dropdown.querySelector(".dropdown-content");
            dropdownContent.classList.remove("dropdown-show");
            dropdownImage.classList.remove("rotate-180");
        }
    });
}

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", onDropdownClick);
});

dropdownButtons.forEach(button => {
    button.addEventListener("click", onDropdownButtonClick);
});