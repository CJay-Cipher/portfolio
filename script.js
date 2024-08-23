const navbarLinks = document.querySelectorAll(".navbar a");
let lastScrollTop = 0;
const header = document.querySelector("header");

// Add event listener for scroll event
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = "-100px"; // Adjust the height as needed
    } else {
        // Scrolling up
        header.style.top = "0"; // Adjust the height as needed
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    const scrollPosition = window.scrollY; // Get the current scroll position
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

// const nameText = document.getElementById("name-text");
// let shadow = "";
// for (let i = 0; i < 8; i++) {
//     shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #eee8fd";
// }
// nameText.style.textShadow = shadow;

const menuHamburger = document.querySelector(".menu-icon");
const menuHamburgerIcon = document.querySelector(".menu-icon i");
const navbar = document.querySelector(".navbar");

menuHamburgerIcon.addEventListener("click", function (event) {
    navbar.classList.toggle("show-side-navbar");
    // Close navbar when clicking outside
    document.addEventListener("click", function (event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnMenuIcon = menuHamburgerIcon.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnMenuIcon) {
            navbar.classList.remove("show-side-navbar");
            menuHamburgerIcon.className = "bx bx-menu"; // Reset menu icon if needed
        }
    });
    menuHamburger.classList.toggle("cancel-side-menu");
    if (menuHamburgerIcon.classList.contains("bx-x")) {
        menuHamburgerIcon.className = "bx bx-menu";
    } else {
        menuHamburgerIcon.className = "bx bx-x";
    }
});

function toggleIcon() {
    document.body.classList.toggle("night-mode-colors");
    const iconElement = document.querySelector(".night-mode .switch-mode i");
    if (iconElement.classList.contains("bx-sun")) {
        iconElement.style.transform = "translateX(-5px)";
        iconElement.className = "bx bxs-moon";
    } else {
        iconElement.className = "bx bx-sun";
        iconElement.style.transform = "translateX(95%)";
    }
}
