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

document.querySelectorAll('.collapsible .footer-title').forEach(title => {
    title.addEventListener('click', () => {
        const section = title.parentElement;
        section.classList.toggle('open');
    });
});
//controlla posizione di trending
/*function updateTrendingPosition() {
    const width = window.innerWidth;

    if (width > 1400) {
        trending.style.paddingLeft = '8%';
    } else if (width > 1100) {
        trending.style.paddingLeft = '5%';
    } else {
        trending.style.paddingLeft = '0%';
    }
}

window.addEventListener('resize', updateTrendingPosition);
window.addEventListener('load', updateTrendingPosition);*/