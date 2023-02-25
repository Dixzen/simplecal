// Prompt the user to enter the numerator and denominator values
const numerator = prompt("Enter the numerator:");
const denominator = prompt("Enter the denominator:");

// Convert the input values to numbers
const numeratorNum = Number(numerator);
const denominatorNum = Number(denominator);

// Calculate the percentage
const percentage = (numeratorNum / denominatorNum) * 100;

// Output the result
console.log(`The percentage is ${percentage}%`);
