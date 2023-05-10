const searchInput = document.querySelector("#searchbox");
let lastInput = "";


function updateSearch(event) {
    if (searchInput.value.trim() === "") {
        delete filtersApplied["dropdown-buttons-4"];
        lastInput = "";
        createProducts();
        return;
    }
    
    let currentInput = searchInput.value.toLowerCase();
    
    if (lastInput === searchInput.value.toLowerCase()) return;
    
    lastInput = currentInput;

    filtersApplied["dropdown-buttons-4"] = {
        check: (product) => product.nome.toLowerCase().includes(currentInput)
    };

    createProducts();
}


searchInput.addEventListener("keyup", (event) => updateSearch(event));