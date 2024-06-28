function diceRoll() {
    var roll = Math.floor(Math.random() * 6);
    roll += 1
    return roll;
}


var button = document.getElementById("my-button");

button.addEventListener("click", function () {
    // Actions to perform when the button is clicked
    document.getElementById("start-game").style.display = "none"
    document.getElementById("result").style.display = "none"
    document.getElementById("lds-dual-ring").style.display = "inline-block"
    var diceNum1 = undefined;
    var diceNum2 = undefined;

    var counter = 0;
    var intervalId = setInterval(function () {
        diceNum1 = diceRoll();
        diceNum2 = diceRoll();
        document.getElementById("dice-1").src = "dice_images/black_" + diceNum1 + ".svg";
        document.getElementById("dice-2").src = "dice_images/red_" + diceNum2 + ".svg";

        counter++;

        if (counter === 20) {
            clearInterval(intervalId);
            diceNum1 = diceRoll();
            diceNum2 = diceRoll();

            document.getElementById("dice-1").src = "dice_images/black_" + diceNum1 + ".svg";
            document.getElementById("dice-2").src = "dice_images/red_" + diceNum2 + ".svg";

            var result = undefined;
            if (diceNum1 > diceNum2) {
                result = "👈 BLACK Wins";
            } else if (diceNum2 > diceNum1) {
                result = "RED Wins 👉";
            } else {
                result = "👉 DRAW 👈";
            }
            document.getElementById("result").innerHTML = result
            document.getElementById("lds-dual-ring").style.display = "none"
            document.getElementById("result").style.display = "block"
        }

    }, 50);


    // console.log("Button clicked!");
});