const container = document.getElementById("container");
const loader = document.getElementById("loader");
const messageSuccess = document.getElementById("message-success");

var requestResponse = 0;
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailAddress = document.getElementById("email-address");
const contactMessage = document.getElementById("contact-message");

function sendEmail(e) {
    loader.style.display = "flex";
    let messageBody =
        "NAME: " +
        firstName.value +
        " " +
        lastName.value +
        "\nEMAIL: " +
        emailAddress.value +
        "\nMESSAGE: " +
        contactMessage.value;

    // console.log(messageBody);
    e.preventDefault();
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "nnabuezecjay@gmail.com",
        Password: "B922A4451634D0C88CEEF2109AF450765FE0",
        To: "nnabuezecjay@gmail.com",
        From: "nnabuezecjay@gmail.com",
        Subject: "Message From Your Portfolio Website",
        Body: messageBody,
    }).then(() => {
        // console.log("Success");
        requestResponse = 200;
        container.style.filter = "blur(10px";
        container.style.pointerEvents = "none";
        loader.style.display = "none";
        messageSuccess.style.display = "flex";
        // console.log("Response code1: " + requestResponse);
    });
}

document.addEventListener("click", function () {
    if (requestResponse == 200) {
        // Clear the form fields
        firstName.value = "";
        lastName.value = "";
        emailAddress.value = "";
        contactMessage.value = "";

        container.style.filter = "none";
        container.style.pointerEvents = "auto";
        messageSuccess.style.display = "none";

        // Reset the requestResponse to 0
        requestResponse = 0;
    }
});

// // Add a click event listener to the clear form button
// const clearFormButton = document.getElementById("main-logo");
// clearFormButton.addEventListener("click", () => {
//     // Clear the form fields
//     firstName.value = "";
//     lastName.value = "";
//     emailAddress.value = "";
//     contactMessage.value = "";
// });
