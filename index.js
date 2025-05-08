console.log('Happy developing ✨')
const menuBtn = document.getElementById("menuBtn");
const userIcon = document.getElementById("userIcon");
const leftMenu = document.getElementById("leftMenu");
const rightMenu = document.getElementById("rightMenu");
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const header = document.getElementById("mainHeader");
const secondRow = document.querySelector(".second-row");
const thirdRow = document.querySelector(".third-row");
const mobileTitle = document.querySelector(".boston-herald-mobile");
const desktopTitle = document.querySelector(".boston-herald-desktop");
const trending = document.querySelector('.trending-links');


// Toggle left slide menu
menuBtn.addEventListener("click", () => {
    leftMenu.classList.toggle("open");
});
// Close left menu when clicking outside
document.addEventListener("click", (event) => {
    if (!leftMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        leftMenu.classList.remove("open");
    }
});

// Toggle right slide menu
userIcon.addEventListener("click", () => {
    rightMenu.classList.toggle("open");
});
// Close right menu when clicking outside
document.addEventListener("click", (event) => {
    if (!rightMenu.contains(event.target) && !userIcon.contains(event.target)) {
        rightMenu.classList.remove("open");
    }
});


// Toggle search bar
searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle("hidden");
});

//scroll
window.addEventListener("scroll", () => {
    const isScolled = window.scrollY>90;
    header.classList.toggle("scrolled", isScolled);
});

document.querySelectorAll('.footer-block.collapsible .block-title').forEach(title => {
    title.addEventListener('click', function(){
        const footerBlock = this.closest('.footer-block');
        const arrow = this.querySelector('.toggle-arrow');

        footerBlock.classList.toggle('open');

        if (footerBlock.classList.contains('open')) {
            arrow.textContent = "▲";
        } else {
            arrow.textContent = "▼";
        }
    });
});

//upcoming events
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".events-wrapper");
    const card = wrapper.querySelector(".event-card");
    const btnNext = document.querySelector(".carousel-next");
    const btnPrev = document.querySelector(".carousel-prev");

    const scrollByVisibleCards = (direction = "next") => {
        const wrapperWidth = wrapper.clientWidth;
        const cardStyle = getComputedStyle(card);
        const cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight || 0);
        const visibleCards = Math.floor(wrapperWidth / cardWidth);
        const scrollAmount = cardWidth * visibleCards;

        wrapper.scrollBy({
            left: direction === "next" ? scrollAmount : -scrollAmount,
            behavior: "smooth"
        });
    };

    btnNext.addEventListener("click", () => scrollByVisibleCards("next"));
    btnPrev.addEventListener("click", () => scrollByVisibleCards("prev"));
});

//breaking news
document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.getElementById("X-icon");
    const breakingNews = document.querySelector(".breaking-news");

    closeButton.addEventListener("click", function () {
        breakingNews.remove();
    });
});
