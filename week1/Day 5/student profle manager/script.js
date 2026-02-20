// Global student object
var student = {
    name: "Prince",
    rollNo: 101,
    marks: 85
};

// DOM references
var profileDiv = document.getElementById("studentProfile");
var showProfileBtn = document.getElementById("showProfileBtn");
var updateMarksBtn = document.getElementById("updateMarksBtn");
var marksInput = document.getElementById("marksInput");

// Function to display profile
function updateStudentProfile(studentObj) {
    profileDiv.innerHTML =
        "<p><strong>Name:</strong> " + studentObj.name + "</p>" +
        "<p><strong>Roll No:</strong> " + studentObj.rollNo + "</p>" +
        "<p><strong>Marks:</strong> " + studentObj.marks + "</p>";
}

// Function to update marks
function updateMarks(newMarks) {
    student.marks = newMarks;
    updateStudentProfile(student);
}

// Event Listeners
showProfileBtn.addEventListener("click", function () {
    updateStudentProfile(student);
});

updateMarksBtn.addEventListener("click", function () {
    var newMarksValue = marksInput.value;

    if (newMarksValue !== "") {
        updateMarks(newMarksValue);
        marksInput.value = "";
    } else {
        alert("Please enter marks first!");
    }
});