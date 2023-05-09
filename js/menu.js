const menuHamburger = document.querySelector('#itens > img');
const menu = document.querySelector('#menu');

menuHamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-show");
    menu.classList.toggle("menu-hide");
});