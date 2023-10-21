document.addEventListener("DOMContentLoaded", function () {
    var valueEmailSpan = document.getElementById("emailValue");

    var storedEmail = localStorage.getItem("valueEmail");
    if (storedEmail) {
        valueEmailSpan.textContent = storedEmail;
    }
})