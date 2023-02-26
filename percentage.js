// Prompt the user to enter the numerator and denominator values
const numerator = prompt("Enter the numerator:");
const denominator = prompt("Enter the denominator:");

const numer = Number(numerator);
const denom = Number(denominator);

// Calculate the percentage
const percentage = (numer/ denom) * 100;

// Output the result
console.log(`The percentage is ${percentage}%`);
