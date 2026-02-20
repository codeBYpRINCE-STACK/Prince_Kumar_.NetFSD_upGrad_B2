
var counter = 0;


var counterDisplay = document.getElementById("counterValue");
var incrementBtn = document.getElementById("incrementBtn");
var resetBtn = document.getElementById("resetBtn");


function incrementCounter(step) {
    counter = counter + step;
    counterDisplay.innerText = counter;
}


function resetCounter() {
    counter = 0;
    counterDisplay.innerText = counter;
}

incrementBtn.addEventListener("click", function () {
    incrementCounter(1);
});

resetBtn.addEventListener("click", function () {
    resetCounter();
});
