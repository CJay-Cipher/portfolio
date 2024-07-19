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
        // moreNav.classList.toggle("bg-active-color");
    }
});
// function toggleDropdown2() {
//     displayedNavElement = [];
//     for (let i = 0; i < hideNavElements.length; i++) {
//         if (hideNavElements[i].style.display != "none") {
//             displayedNavElement.push(hideNavElements[i]);
//             hideNavElements[i].style.display = "none";
//         }
//     }
//     if (window.matchMedia("(min-width: 861px)").matches) {
//         mainLogo.style.display = "flex";
//     } else {
//         mainLogo.style.display = "none";
//     }
//     searchBoxNav.style.display = "flex";
//     searchCancelButton.style.display = "flex";
//     document.getElementById("search-input").focus();
// }

document.addEventListener("click", function (event) {
    if (!searchNav.contains(event.target)) {
        searchCheck = true;
        for (let i = 0; i < displayedNavElement.length; i++) {
            displayedNavElement[i].style.display = "flex";
        }
        searchCancelButton.style.display = "none";
        searchBoxNav.style.display = "none";
        mainLogo.style.display = "flex";
    }
});
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
    document.getElementById("search-input").focus();
});

searchCancelButton.addEventListener("click", function () {
    searchCheck = true;
    for (let i = 0; i < displayedNavElement.length; i++) {
        displayedNavElement[i].style.display = "flex";
    }
    searchCancelButton.style.display = "none";
    searchBoxNav.style.display = "none";
    mainLogo.style.display = "flex";
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
if (window.matchMedia("(max-width: 860px)").matches) {
    menuHamburger.style.display = "flex";
}
function handleViewportChange2(event) {
    if (window.matchMedia("(max-width: 860px)").matches) {
        navBar.style.display = "none";
        allProducts.style.display = "none";
        searchCancelButton.style.order = "-3";
        searchCancelButton.innerHTML =
            '<img src="icons/arrowhead_left.svg" alt="Search cancel icon">';
        if (
            window.matchMedia("(max-width: 860px)").matches &&
            searchCheck === true
        ) {
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

// Add event listener to trigger the function whenever the viewport width changes
window.addEventListener("resize", handleViewportChange1);
window.addEventListener("resize", handleViewportChange2);
