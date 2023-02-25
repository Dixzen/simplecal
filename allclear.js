let display = document.getElementById("calculator-display"); // Get the calculator display element

// Ask the user if they want to clear the display
let clearDisplay = confirm("Are you sure you want to clear the calculator display?");

if (clearDisplay) {
  display.innerHTML = ""; // Clear the calculator display
}
