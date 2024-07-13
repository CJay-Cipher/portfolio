const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
const pauseButton = document.getElementById("pause");
const icon = pauseButton.querySelector("i");
const pauseSlideAnimation = document.getElementById("pause");
const pausePlaySwitch = document.getElementsByClassName("pause-switch")[0];
const leftIndicator = document.getElementById("s1-indicate");
const rightIndicator = document.getElementById("s2-indicate");

let slide1Interval; // Variable to store the interval ID
let slide2Interval;
let pauseSlide1Interval;
let pauseSlide2Interval;
const valueCheckTime = 1;

// pause slider animation when button pressed ------------------
pauseSlideAnimation.addEventListener("click", function () {
    // console.log(slide1.style.animationPlayState);
    // console.log(slide2.style.animationPlayState);

    if (
        slide1.style.animationPlayState === "running" &&
        slide2.style.animationPlayState === "running"
    ) {
        pauseSlide1Interval = setInterval(
            () => checkSlideLeftValue(slide1),
            valueCheckTime
        );
        pauseSlide2Interval = setInterval(
            () => checkSlideLeftValue(slide2),
            valueCheckTime
        );
    } else {
        clearInterval(pauseSlide1Interval); // Stop the 1 interval
        clearInterval(pauseSlide2Interval); // Stop the 2 interval
        slide1.style.animationPlayState = "running";
        slide2.style.animationPlayState = "running";
    }
});

//
slide1.addEventListener("mouseenter", function () {
    // console.log("slide 1 hover");
    slide1Interval = setInterval(
        () => checkSlideLeftValue(slide1),
        valueCheckTime
    );
});

slide1.addEventListener("mouseleave", function () {
    // console.log("slide 1 leave");
    clearInterval(slide1Interval); // Stop the interval
    slide1.style.animationPlayState = "running";
    slide2.style.animationPlayState = "running";
});

slide2.addEventListener("mouseenter", function () {
    // console.log("slide 2 hover");
    slide2Interval = setInterval(
        () => checkSlideLeftValue(slide2),
        valueCheckTime
    );
});

slide2.addEventListener("mouseleave", function () {
    // console.log("slide 2 leave");
    clearInterval(slide2Interval); // Stop the interval
    // slide2.style.backgroundColor = "cyan";
    slide1.style.animationPlayState = "running";
    slide2.style.animationPlayState = "running";
});

function checkSlideLeftValue(currentSlide) {
    let slideLeftValue = window
        .getComputedStyle(currentSlide)
        .getPropertyValue("left");
    if (slideLeftValue === "0px") {
        // console.log(
        //     "slideLeftValue of " + currentSlide.id + " is " + slideLeftValue
        // );
        // currentSlide.style.backgroundColor = "red";
        slide1.style.animationPlayState = "paused";
        slide2.style.animationPlayState = "paused";
    }
}

// Toggle between the Pause and Play button

pauseButton.addEventListener("click", function () {
    icon.classList.toggle("bx-pause");
    icon.classList.toggle("bx-play");
});
