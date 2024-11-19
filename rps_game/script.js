const pageMain = document.querySelector("main");
const mainBody = document.querySelector(".main-body");
const playOutput = document.querySelector(".main-body .output");
// const loader = document.querySelector(".loader");
const scoreBoard = document.getElementById("score-board");
const roundSelect = document.getElementById("rounds-select");
const gameType = document.querySelectorAll(".game-type");
const startText = document.querySelector(".start-text");
const userImage = document.getElementById("user-pick-image");
const computerImage = document.getElementById("computer-pick-image");
const userBg = document.getElementById("user-bg");
const computerBg = document.getElementById("computer-bg");
let playButton = document.getElementById("play-btn");
let resultMessage = document.getElementById("result-message");
var userScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let finalResult = document.getElementById("final-result");
let finalResultH3 = document.querySelector("#final-result h3");
let finalResultH1 = document.querySelector("#final-result h1");
let rules = document.getElementById("rules");
let rulesButton = document.querySelector(".bottom .rules");
let closeBtn = document.querySelectorAll(".close-btn");
let playAgainBtn = document.getElementById("play-again-btn");
let resetScoreBtn = document.querySelector(".reset-score");
var userScoreCount = 0;
var computerScoreCount = 0;
let allImages = ["src/rock_img.jpeg", "src/paper_img.jpeg", "src/scissors_img.jpeg"];
let bgColors = ["#6BB85D", "#EE7527", "#00A4E3"];

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let selections = [rock, paper, scissors];
var userIndex = 0;
var userSelection = rock;
var comSelection = rock;
var maxRounds = 0;

for (let x = 0; x < gameType.length; x++) {
    gameType[x].addEventListener("click", function () {
        roundSelect.style.display = "none";
        scoreBoard.style.display = "block";
        playOutput.style.display = "flex";
        startText.style.display = "flex";
        if (x == 0) {
            maxRounds = 3;
        } else if (x == 1) {
            maxRounds = 5;
        } else if (x == 2) {
            maxRounds = 7;
        }
    });
}
// startText.addEventListener("click", function () {
//     startText.style.display = "block";
// });
// Assuming userImage, userBgColor, bgColors, and allImages are defined elsewhere in your code
userImage.addEventListener("click", function () {
    userIndex = (userIndex + 1) % allImages.length;
    userBg.style.backgroundColor = bgColors[userIndex];
    userImage.src = allImages[userIndex];
    userSelection = selections[userIndex];
    startText.style.display = "none";
    // console.log(userIndex);
});

// Call the function to see the updated userIndex value
// console.log(userIndex);

// game section =============================

// console.log(selections);
let comIndex = 0;
// console.log(comSelection);

playButton.addEventListener("click", function () {
    // computerBg.style.display = "none";
    userImage.style.animation = "shakeRight 2s linear infinite";
    userImage.style.animationPlayState = "running";
    computerImage.style.animation = "shakeLeft 2s linear infinite";
    computerImage.style.animationPlayState = "running";
    // loader.style.display = "grid";
    resultMessage.style.visibility = "hidden";
    // Function to run after a 1-second delay
    function delayedFunction() {
        // console.log("This message will be displayed after a 2-second delay.");

        // console.log(userIndex);
        comIndex = Math.floor(Math.random() * 3);
        comSelection = selections[comIndex];
        userImage.style.animation = "none";
        // userImage.style.animationPlayState = "paused";
        computerImage.style.animation = "none";
        computerBg.style.backgroundColor = bgColors[comIndex];
        computerImage.src = allImages[comIndex];
        computerBg.style.display = "flex";
        // loader.style.display = "none";
        resultMessage.style.visibility = "visible";

        if (userSelection == paper && comSelection == rock) {
            resultMessage.textContent = "😎 YOU WIN 😎";
            userScoreCount += 1;
            console.log(userScoreCount);
            userScore.textContent = userScoreCount;
        } else if (userSelection == rock && comSelection == scissors) {
            resultMessage.textContent = "😎 YOU WIN 😎";
            userScoreCount += 1;
            console.log(userScoreCount);
            userScore.textContent = userScoreCount;
        } else if (userSelection == scissors && comSelection == paper) {
            resultMessage.textContent = "😎 YOU WIN 😎";
            userScoreCount += 1;
            console.log(userScoreCount);
            userScore.textContent = userScoreCount;
        } else if (userSelection == scissors && comSelection == rock) {
            resultMessage.textContent = "😔 YOU LOSE 😔";
            computerScoreCount += 1;
            computerScore.textContent = computerScoreCount;
        } else if (userSelection == paper && comSelection == scissors) {
            resultMessage.textContent = "😔 YOU LOSE 😔";
            computerScoreCount += 1;
            computerScore.textContent = computerScoreCount;
        } else if (userSelection == rock && comSelection == paper) {
            resultMessage.textContent = "😔 YOU LOSE 😔";
            computerScoreCount += 1;
            computerScore.textContent = computerScoreCount;
        } else if (userSelection == comSelection) {
            resultMessage.textContent = "It's a TIE";
        }

        if (userScoreCount >= maxRounds) {
            pageMain.style.filter = "blur(10px)";
            pageMain.style.pointerEvents = "none";
            finalResult.style.display = "flex";
        } else if (computerScoreCount >= maxRounds) {
            finalResultH3.textContent = "Oops YOU";
            finalResultH1.style.color = "red";
            finalResultH1.textContent = "LOST";
            pageMain.style.filter = "blur(10px)";
            pageMain.style.pointerEvents = "none";
            finalResult.style.display = "flex";
        }
    }

    // Set a 2-second delay using setTimeout
    setTimeout(delayedFunction, 1000);
});

//  ============= CLOSE RESULT =================
for (const pageClose of closeBtn) {
    pageClose.addEventListener("click", function () {
        pageMain.style.filter = "none";
        pageMain.style.pointerEvents = "auto";
        finalResult.style.display = "none";
        rules.style.display = "none";
    });
}

playAgainBtn.addEventListener("click", function () {
    location.reload();
});
resetScoreBtn.addEventListener("click", function () {
    location.reload();
});
rulesButton.addEventListener("click", function () {
    pageMain.style.filter = "blur(10px)";
    pageMain.style.pointerEvents = "none";
    rules.style.display = "block";
});
