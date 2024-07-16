const allProductsNav = document.querySelector(".all-products");
const searchNav = document.getElementById("head-search");
const cartNav = document.getElementById("head-cart");
const signInNav = document.getElementById("head-sign-in");
const hideNavElements = document.getElementsByClassName("hide-nav");

searchNav.addEventListener("click", function () {
    for (let i = 0; i < hideNavElements.length; i++) {
        hideNavElements[i].style.display = "none";
    }
    document.getElementById("search-microsoft").style.display = "flex";
    document.getElementById("search-cancel").style.display = "block";
    document.getElementById("nav-action").style.flex = 5;
    document.getElementById("search-input").focus();
    document.getElementsByClassName("search-box")[0].style.border =
        "2px solid #005ca5";
});

const seachCancelButton = document.getElementById("search-cancel");
seachCancelButton.addEventListener("click", function () {
    for (let i = 0; i < hideNavElements.length; i++) {
        hideNavElements[i].style.display = "flex";
    }
    document.getElementById("search-microsoft").style.display = "none";
    document.getElementById("search-cancel").style.display = "none";
    document.getElementById("nav-action").style.flex = 2;
    document.getElementsByClassName("search-box")[0].style.border =
        "1px solid #262626";
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
        signInNav.firstChild.textContent = "";
    } else {
        // Change the text for other viewport widths
        searchNav.firstChild.textContent = "Search";
        cartNav.firstChild.textContent = "Cart";
        signInNav.firstChild.textContent = "Sign in";
    }
}

function handleViewportChange2(event) {
    if (window.matchMedia("(max-width: 860px)").matches) {
        allProductsNav.innerHTML = "";
    } else {
        // Change the text for other viewport widths
        allProductsNav.innerHTML =
            'All Microsoft <img src="icons/user_icon.svg" alt="Register">';
    }
}

// Call the function initially
handleViewportChange1();
handleViewportChange2();

// Add event listener to trigger the function whenever the viewport width changes
window.addEventListener("resize", handleViewportChange1);
window.addEventListener("resize", handleViewportChange2);
