console.log("\n");
console.log("Challenge 4");
// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

// Challenge 4 Code

for(let i = 0; i < mixedSignNumbers.length; i++){
    if(mixedSignNumbers[i] % 2 === 0){
        console.log(mixedSignNumbers[i]);
    }
}