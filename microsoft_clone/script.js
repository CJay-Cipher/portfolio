const moreNav = document.querySelector(".more-dropdown");
const hiddenNav = document.querySelector(".hidden-dropdown");
const menuHamburger = document.getElementById("menu-hamburger");
const mainLogo = document.getElementById("main-logo");
const searchNav = document.getElementById("head-search");
const searchBoxNav = document.getElementById("search-box");
const navBar = document.getElementById("nav-bar");
const allProducts = document.getElementById("all-products");
const cartNav = document.getElementById("head-cart");
const signInNav = document.getElementById("login");
const hideNavElements = document.getElementsByClassName("hide-nav");
// const searchCancelArrowButton = document.querySelector(".search-cancel-arrow");
const searchCancelButton = document.getElementById("search-cancel");
let displayedNavElement;

moreNav.addEventListener("click", function () {
    hiddenNav.classList.toggle("show-hidden");
    moreNav.classList.toggle("bg-active-color");
});

searchNav.addEventListener("click", function () {
    displayedNavElement = [];
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
    if (window.matchMedia("(max-width: 860px)").matches) {
        menuHamburger.style.display = "none";
    }
    searchBoxNav.style.display = "flex";
    searchCancelButton.style.display = "flex";
    document.getElementById("search-input").focus();
    // document.getElementById("search-box").style.border = "2px solid #005ca5";
});

searchCancelButton.addEventListener("click", function () {
    for (let i = 0; i < displayedNavElement.length; i++) {
        displayedNavElement[i].style.display = "flex";
    }
    searchCancelButton.style.display = "none";
    searchBoxNav.style.display = "none";
    mainLogo.style.display = "flex";
    if (window.matchMedia("(min-width: 861px)").matches) {
        menuHamburger.style.display = "none";
    }
    if (window.matchMedia("(max-width: 860px)").matches) {
        menuHamburger.style.display = "flex";
    }
    // document.getElementById("search-box").style.border = "1px solid #262626";
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
    if (window.matchMedia("(max-width: 1400px)").matches) {
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

function handleViewportChange2(event) {
    if (window.matchMedia("(max-width: 860px)").matches) {
        navBar.style.display = "none";
        allProducts.style.display = "none";
        searchCancelButton.style.border = "none";
        searchCancelButton.style.order = "-3";
        searchCancelButton.innerHTML =
            '<img src="icons/arrowhead_left.svg" alt="Search cancel icon">';
        searchCancelButton.style.padding = "0";
        menuHamburger.style.display = "flex";
    } else {
        // Change the text for other viewport widths
        navBar.style.display = "flex";
        allProducts.style.display = "flex";
        searchCancelButton.style.border = "1px solid #000";
        searchCancelButton.style.order = "0";
        searchCancelButton.innerHTML = "Cancel";
        searchCancelButton.style.padding = "0 15px";
        menuHamburger.style.display = "none";
    }
}

// Call the function initially
handleViewportChange1();
handleViewportChange2();

// Add event listener to trigger the function whenever the viewport width changes
window.addEventListener("resize", handleViewportChange1);
window.addEventListener("resize", handleViewportChange2);
