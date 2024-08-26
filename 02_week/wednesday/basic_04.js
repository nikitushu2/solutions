// Create a function named isEven that takes a number as a parameter and returns true if the number is even, and false if the number is odd.
/* function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {return false};
} */

const isEven = (num) => num % 2 == 0;

// sample usage - do not modify
console.log(isEven(4)); // Returns true
console.log(isEven(7)); // Returns false
