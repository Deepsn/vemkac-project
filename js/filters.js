const dropdowns = document.querySelectorAll(".dropdown");

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