var user = {
    name: "Prince",
    age: 24,
    city: "Bengaluru"
};

var showBtn = document.getElementById("showBtn");

function displayUserInfo(userObj) {
    document.getElementById("name").innerText = "Name: " + userObj.name;
    document.getElementById("age").innerText = "Age: " + userObj.age;
    document.getElementById("city").innerText = "City: " + userObj.city;
}

showBtn.addEventListener("click", function () {
    displayUserInfo(user);
});