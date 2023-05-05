const banner = document.querySelector("#initial-banner");
const leftArrow = document.querySelector("#left-button");
const rightArrow = document.querySelector("#right-button");
let bannerIndex = 1;

function nextBanner() {
    setBanner(bannerIndex += 1);
}

function previousBanner() {
    setBanner(bannerIndex -= 1);
}

function setBanner(index) {
    let banners = document.getElementsByClassName("banner-img");
    let currentBannerIndex = index;

    if (index > banners.length) {
        bannerIndex = 1; // Vai para o primeiro banner
    } else if (index < 1) {
        bannerIndex = banners.length; // Vai para o último banner
    }

    for (let i = 0; i < banners.length; i++) {
        let banner = banners[i];
        banner.style.display = "none";
    }

    banners[bannerIndex - 1].style.display = "block";

    setTimeout(() => {
        if (currentBannerIndex === bannerIndex) {
            nextBanner();
        }
    }, 10 * 1000); // 10 segundos
}

setBanner(bannerIndex);
leftArrow.addEventListener("click", previousBanner);
rightArrow.addEventListener("click", nextBanner);