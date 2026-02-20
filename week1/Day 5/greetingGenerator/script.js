var greetBtn = document.getElementById("greetBtn");

function generateGreeting(name) {
    var message = "Hello, " + name + "! Welcome to our learning website.";
    document.getElementById("greeting").innerText = message;
}

greetBtn.addEventListener("click", function () {
    var userName = document.getElementById("username").value;
    generateGreeting(userName);
});