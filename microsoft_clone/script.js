const moreNav = document.querySelector(".more-dropdown");
const hiddenNav = document.querySelector(".hidden-dropdown");
const menuHamburger = document.getElementById("menu-hamburger");
const mainLogo = document.getElementById("main-logo");
const searchNav = document.getElementById("head-search");
const searchBoxNav = document.getElementById("search-box");
const searchInput = document.getElementById("search-input");
const navBar = document.getElementById("nav-bar");
const allProducts = document.getElementById("all-products");
const cartNav = document.getElementById("head-cart");
const signInNav = document.getElementById("login");
const hideNavElements = document.getElementsByClassName("hide-nav");
// const searchCancelArrowButton = document.querySelector(".search-cancel-arrow");
const searchCancelButton = document.getElementById("search-cancel");
let displayedNavElement;
let searchCheck = true;

// moreNav.addEventListener("click", function () {
//     hiddenNav.classList.toggle("show-hidden");
//     moreNav.classList.toggle("bg-active-color");
// });

function toggleDropdown() {
    hiddenNav.style.display =
        hiddenNav.style.display === "block" ? "none" : "block";
    // moreNav.classList.toggle("bg-active-color");
}

document.addEventListener("click", function (event) {
    if (!moreNav.contains(event.target)) {
        hiddenNav.style.display = "none";
    }
});
function handleResize() {
    let windowWidth = window.innerWidth;
    if (windowWidth > 950 || windowWidth < 860) {
        hiddenNav.style.display = "none";
    }
}

searchNav.addEventListener("click", function () {
    displayedNavElement = [];
    searchCheck = false;
    for (let i = 0; i < hideNavElements.length; i++) {
        if (hideNavElements[i].style.display != "none") {
            displayedNavElement.push(hideNavElements[i]);
            hideNavElements[i].style.display = "none";
        }
    }
    if (window.matchMedia("(min-width: 861px)").matches) {
        mainLogo.style.display = "flex";
    } else {
        mainLogo.style.display = "none";
    }
    searchBoxNav.style.display = "flex";
    searchCancelButton.style.display = "flex";
    searchInput.focus();
});

searchCancelButton.addEventListener("click", function () {
    searchCheck = true;
    for (let i = 0; i < displayedNavElement.length; i++) {
        displayedNavElement[i].style.display = "flex";
    }
    searchCancelButton.style.display = "none";
    searchBoxNav.style.display = "none";
    mainLogo.style.display = "flex";
    searchInput.value = "";
});

window.addEventListener("scroll", function () {
    var button = document.querySelector(".head-to-top");
    var threshold = 0.31; // % of the page height
    var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY > threshold * pageHeight) {
        button.style.visibility = "visible";
    } else {
        button.style.visibility = "hidden";
    }
});

function handleViewportChange1(event) {
    if (window.innerWidth <= 1400) {
        // Change the text when the viewport width is less than or equal to 1400px
        searchNav.firstChild.textContent = "";
        cartNav.firstChild.textContent = "";
        signInNav.style.display = "none";
    } else {
        // Change the text for other viewport widths
        searchNav.firstChild.textContent = "Search";
        cartNav.firstChild.textContent = "Cart";
        signInNav.style.display = "flex";
    }
}
// if (window.innerWidth <= 860) {
//     menuHamburger.style.display = "flex";
// }
function handleViewportChange2(event) {
    if (window.innerWidth <= 860) {
        navBar.style.display = "none";
        allProducts.style.display = "none";
        searchCancelButton.style.order = "-3";
        searchCancelButton.innerHTML =
            '<img src="icons/arrowhead_left.svg" alt="Search cancel icon">';
        if (window.innerWidth <= 860 && searchCheck === true) {
            menuHamburger.style.display = "flex";
        }
    } else {
        // Change the text for other viewport widths
        navBar.style.display = "flex";
        allProducts.style.display = "flex";
        searchCancelButton.style.order = "0";
        searchCancelButton.innerHTML = "Cancel";
        menuHamburger.style.display = "none";
    }
}

// Call the function initially
handleViewportChange1();
handleViewportChange2();

window.addEventListener("resize", handleResize);

// Add event listener to trigger the function whenever the viewport width changes
window.addEventListener("resize", handleViewportChange1);
window.addEventListener("resize", handleViewportChange2);
