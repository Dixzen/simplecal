import add from './add';
import subtract from './subtract';
import multiply from './multiply';
import divide from './divide';

function calculate(a, b, operation) {
    switch(operation) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        throw new Error('Invalid operation');
    }
  }

const result = calculate(5, 3, '+');
console.log(result); // Output: 8

const result2 = calculate(5, 3, '-');
console.log(result2); // Output: 2

const result3 = calculate(5, 3, '*');
console.log(result3); // Output: 15

const result4 = calculate(6, 3, '/');
console.log(result4); // Output: 2
