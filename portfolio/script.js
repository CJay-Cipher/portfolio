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
    let button = document.querySelector(".head-to-top");
    let threshold = 0.31; // % of the page height
    let pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY > threshold * pageHeight) {
        button.style.visibility = "visible";
    } else {
        button.style.visibility = "hidden";
    }
});

const moreAboutMe = document.querySelector(".more-about-me");
const moreText = document.querySelector(".more-text");
const aboutContentP = document.querySelector(".about-content > p");
const readMoreText = moreAboutMe.querySelector("a");

moreAboutMe.addEventListener("click", function () {
    moreText.classList.toggle("hide");

    if (aboutContentP.style.height === "8rem") {
        aboutContentP.style.height = "3rem";
        readMoreText.textContent = "Read More";
    } else {
        aboutContentP.style.height = "8rem";
        readMoreText.textContent = "Read Less";
    }
});
