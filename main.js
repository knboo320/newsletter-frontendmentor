var inputEmail = document.getElementById("email");
var inputLabels = document.getElementById("labels");

let erroShown = false;

function success() {
    if(inputEmail.value != '') {
        window.open("./success.html", "_self");
    } else if(!erroShown) {
        inputEmail.classList.add("error");

        var tag = document.createElement("p");
        tag.style.color = "#f8685a"
        var text = document.createTextNode("Valid e-mail required.");
        tag.appendChild(text);
        inputLabels.appendChild(tag);

        erroShown = true;
    }
    
    var valueEmail = inputEmail.value
    localStorage.setItem("valueEmail", valueEmail)
}