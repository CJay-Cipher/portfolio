const navbarLinks = document.querySelectorAll(".navbar a");

// Add event listener for scroll event
window.addEventListener("scroll", () => {
    // Get the current scroll position
    const scrollPosition = window.pageYOffset;

    // Loop through the navbar links
    let prevActiveLink = null;
    navbarLinks.forEach((link) => {
        const targetSection = document.querySelector(link.getAttribute("href"));

        // Check if the target section is in view
        if (
            targetSection.offsetTop <= scrollPosition + 250 &&
            targetSection.offsetTop + targetSection.offsetHeight >
                scrollPosition
        ) {
            // Add the 'active' class to the corresponding link
            link.classList.add("active");

            // Remove 'active' class from the previous active link
            if (prevActiveLink && prevActiveLink !== link) {
                prevActiveLink.classList.remove("active");
            }
            prevActiveLink = link;
        } else {
            // Remove the 'active' class from the link
            link.classList.remove("active");
        }
    });
});

window.addEventListener("scroll", function () {
    let moveToTop = document.getElementById("move-to-top");
    let threshold = 0.31; // % of the page height
    let pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY > threshold * pageHeight) {
        moveToTop.style.display = "inline";
    } else {
        moveToTop.style.display = "none";
    }
});

const moreAboutMe = document.querySelector(".more-about-me");
const moreText = document.querySelector(".more-text");
const aboutContentP = document.querySelector(".about-content > p");
const readMoreText = moreAboutMe.querySelector("a");

moreAboutMe.addEventListener("click", function () {
    aboutContentP.classList.toggle("expanded");
    moreText.classList.toggle("hide");
});

// ------------- for string typing animation --------------------
const typed1 = new Typed("#string-typing", {
    strings: ["Web Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// window.onload = function () {
//     window.scrollTo(0, 0);
// };
const nameText = document.getElementById("name-text");
let shadow = "";
for (let i = 0; i < 8; i++) {
    shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #eee8fd";
}
nameText.style.textShadow = shadow;

const menuHamburger = document.querySelector(".menu-icon i");
const hiddenMenu = document.querySelector(".hidden-menu");
const menuCancel = document.querySelector(".menu-cancel i");

menuHamburger.addEventListener("click", function (event) {
    hiddenMenu.style.right = "0";
    hiddenMenu.style.display = "flex";
    event.stopPropagation(); // Prevent the click event from propagating to the document
});

menuCancel.addEventListener("click", function () {
    hiddenMenu.style.right = "-500px";
});

document.addEventListener("click", function (event) {
    if (
        !event.target.closest(".hidden-menu") ||
        event.target.closest(".hidden-menu a")
    ) {
        hiddenMenu.style.right = "-500px";
    }
});
