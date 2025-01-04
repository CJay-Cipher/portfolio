const hamburger = document.querySelector(".menu-hamburger");
const menu = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
navLinks.style.top = "-460px";

hamburger.addEventListener("click", () => {
    // menu.src = "icon/cancel_btn.svg";
    navLinks.style.top = navLinks.style.top == "-460px" ? "0" : "-460px"; // Change the image source
    if (menu.src.includes("menu_hamburger_nav.svg")) {
        menu.src = "icon/cancel_btn.svg"; // Change to cancel icon
    } else {
        menu.src = "icon/menu_hamburger_nav.svg"; // Change back to hamburger icon
    }
});
