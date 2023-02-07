console.log("\n");
console.log("Challenge 3");
// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
// Challenge 3 Code

for(let i = 0; i < positiveNumbers.length; i++){
    if(positiveNumbers[i] % 2 === 0){
        console.log(positiveNumbers[i]);
    }
}