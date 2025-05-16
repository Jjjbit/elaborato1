console.log('Happy developing ✨')
const menuBtn = document.getElementById("menuBtn");
const userIcon = document.getElementById("userIcon");
const leftMenu = document.getElementById("leftMenu");
const rightMenu = document.getElementById("rightMenu");
const header = document.getElementById("mainHeader");
const overlay = document.getElementById("overlay");
const boston= document.querySelector(".boston-herald-mobile")
const topRow = document.querySelector(".top-row");

// open and close left slide menu
document.addEventListener("DOMContentLoaded", function () {
    function openLeftMenu() {
        leftMenu.classList.add("open");
        overlay.classList.add("active");
        document.body.classList.add("no-scroll");
        boston.classList.add("show");
    }

    function closeLeftMenu() {
        leftMenu.classList.remove("open");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
        boston.classList.remove("show");
    }

    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (leftMenu.classList.contains("open")) {
            closeLeftMenu();
        } else {
            openLeftMenu();
        }
    });

    overlay.addEventListener("click", closeLeftMenu);

    leftMenu.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    document.addEventListener("click", (event) => {
        if (
            leftMenu.classList.contains("open") &&
            !leftMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            closeLeftMenu();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const blockTitles = document.querySelectorAll(".block-title-side span");

    blockTitles.forEach(title => {
        title.addEventListener("click", function () {

            const hiddenContent = this.parentElement.nextElementSibling;

            if (hiddenContent && hiddenContent.classList.contains("hidden-content")) {
                hiddenContent.classList.toggle("show");

                if (hiddenContent.classList.contains("show")) {
                    this.innerHTML = "<i class=\"bi bi-chevron-down\"></i>";
                } else {
                    this.innerHTML = ">";
                }
            }
        });
    });
});
// open and close right slide menu
document.addEventListener("DOMContentLoaded", function () {
    function openRightMenu() {
        rightMenu.classList.add("open");
        overlay.classList.add("active");
        document.body.classList.add("no-scroll");
        topRow.classList.add("modify");
    }

    function closeRightMenu() {
        rightMenu.classList.remove("open");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
        topRow.classList.remove("modify");
    }

    userIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        if (rightMenu.classList.contains("open")) {
            closeRightMenu();
        } else {
            openRightMenu();
        }
    });

    overlay.addEventListener("click", closeRightMenu);

    rightMenu.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    document.addEventListener("click", (event) => {
        if (
            rightMenu.classList.contains("open") &&
            !rightMenu.contains(event.target) &&
            !userIcon.contains(event.target)
        ) {
            closeRightMenu();
        }
    });
});

// open and close search bar
document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchBtn");
    const searchBar = document.getElementById("searchBar");


    if (searchBtn && searchBar && overlay) {
        searchBtn.addEventListener("click", (event) => {
            event.stopPropagation();

            if (searchBar.classList.contains("show")) {
                searchBar.classList.remove("show");
                overlay.classList.remove("active");
                document.body.classList.remove("no-scroll");
                boston.classList.remove("show")
            } else {
                searchBar.classList.add("show");
                overlay.classList.add("active");
                document.body.classList.add("no-scroll");
                boston.classList.add("show");
            }
        });


        overlay.addEventListener("click", () => {
            searchBar.classList.remove("show");
            overlay.classList.remove("active");
            document.body.classList.remove("no-scroll");
            boston.classList.remove("show");
        });

        document.addEventListener("click", () => {
            searchBar.classList.remove("show");
            overlay.classList.remove("active");
            document.body.classList.remove("no-scroll");
            boston.classList.remove("show");
        });
        searchBar.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                searchBar.classList.remove("show");
                overlay.classList.remove("active");
                document.body.classList.remove("no-scroll");
                boston.classList.remove("show");
            }
        });
    }
});

//scroll
window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY>90;
    header.classList.toggle("scrolled", isScrolled);
});

//footer
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

function handleClick() {
    alert("You clicked Upcoming Events!");
}

//breaking news
document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.getElementById("X-icon");
    const breakingNews = document.querySelector(".breaking-news");

    closeButton.addEventListener("click", function () {
        breakingNews.remove();
    });
});
