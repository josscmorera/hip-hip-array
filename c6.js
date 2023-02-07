console.log("Challenge 6");
// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) using push and unshift. Then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
// Challenge 6 Code

fibonacciNumbers.unshift(0);
fibonacciNumbers.push(21, 42);
for(let i = 0; i < fibonacciNumbers.length; i++){
    console.log(fibonacciNumbers[i]);
    }

    