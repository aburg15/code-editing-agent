/**
 * FizzBuzz implementation in JavaScript
 * This program prints numbers from 1 to 15
 * For multiples of 3, it prints "Fizz" instead of the number
 * For multiples of 5, it prints "Buzz" instead of the number
 * For multiples of both 3 and 5, it prints "FizzBuzz"
 */

function fizzBuzz(upTo = 15) {
  for (let i = 1; i <= upTo; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Execute the FizzBuzz function
console.log('Running FizzBuzz from 1 to 15:');
fizzBuzz();