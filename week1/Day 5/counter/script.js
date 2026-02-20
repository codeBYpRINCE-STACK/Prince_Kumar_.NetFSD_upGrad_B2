// Global variable
var counter = 0;

// DOM references
var counterDisplay = document.getElementById("counterValue");
var incrementBtn = document.getElementById("incrementBtn");
var resetBtn = document.getElementById("resetBtn");

// Function to increment counter
function incrementCounter(step) {
    counter = counter + step;
    counterDisplay.innerText = counter;
}

// Function to reset counter
function resetCounter() {
    counter = 0;
    counterDisplay.innerText = counter;
}

// Event Listeners
incrementBtn.addEventListener("click", function () {
    incrementCounter(1);
});

resetBtn.addEventListener("click", function () {
    resetCounter();
});