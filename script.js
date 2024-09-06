const navbarLinks = document.querySelectorAll(".navbar a");
const header = document.querySelector("header");
let timer;
headerHover = false;

header.addEventListener("mouseenter", function () {
    headerHover = true;
});
header.addEventListener("mouseleave", function () {
    headerHover = false;
    timer = setTimeout(resetHeaderPosition, 2000);
});
function resetHeaderPosition() {
    if (window.scrollY === 0) {
        header.style.top = "0";
    } else if (headerHover == true) {
        header.style.top = "0";
        // headerHover = false;
    } else {
        header.style.top = "-100px";
    }
}

function showHeaderOnScroll() {
    header.style.top = "0";
    clearTimeout(timer); // Clear the timer if scrolling occurs
    timer = setTimeout(resetHeaderPosition, 2000); // Reset after few seconds of no scrolling
}

// Set an initial timer when the page loads
timer = setTimeout(resetHeaderPosition, 2000);

// Add event listener for scroll event
window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
        header.classList.add("header-bg");
    } else {
        header.classList.remove("header-bg");
        // header.style.backgroundColor = "red";
    }
    showHeaderOnScroll(); // show navbar on scroll

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

// page section scroll transition
document.querySelectorAll(".navbar a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        const startPosition = window.scrollY;
        const targetPosition =
            targetElement.getBoundingClientRect().top + startPosition;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Duration in ms
        let startTime = null;

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Progress between 0 and 1

            const ease = easeInOutQuad(progress); // Apply the ease in-out function

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    });
});

const moreAboutMe = document.querySelector(".more-about-me");
const moreText = document.querySelector(".more-text");
const aboutContentP = document.querySelector(".about-content > p");
const readMoreText = moreAboutMe.querySelector("a");

moreAboutMe.addEventListener("click", function () {
    aboutContentP.classList.toggle("expanded");
    moreText.classList.toggle("hide");
    // Toggle button text
    moreAboutMe.textContent = moreText.classList.contains("hide")
        ? "Read More"
        : "Read Less";
});

// ------------- for string typing animation --------------------
const typed1 = new Typed("#string-typing", {
    strings: ["Web Developer", "Software Engineer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 3000,
    loop: true,
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var cursor = document.querySelector(".typed-cursor");
        cursor.style.display = "inline"; // Display the cursor after 3 seconds
    }, 3000); // 3 seconds delay
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

document.addEventListener("DOMContentLoaded", function () {
    const iconElement = document.querySelector(".night-mode .switch-mode i");

    // Check localStorage for the mode state
    if (localStorage.getItem("isLightMode") === "true") {
        document.body.classList.add("light-mode-colors");
        iconElement.className = "bx bx-sun";
        iconElement.style.transform = "translateX(95%)";
    }

    window.toggleIcon = function () {
        document.body.classList.toggle("light-mode-colors");

        if (iconElement.classList.contains("bx-sun")) {
            iconElement.className = "bx bxs-moon";
            iconElement.style.transform = "translateX(-5px)";
            localStorage.setItem("isLightMode", "false"); // Save dark mode
        } else {
            iconElement.className = "bx bx-sun";
            iconElement.style.transform = "translateX(95%)";
            localStorage.setItem("isLightMode", "true"); // Save light mode
        }
    };
});
