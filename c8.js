console.log("Challenge 8");
// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const emptyArray = [];
// Challenge 8 Code

emptyArray.push(23, 48, 57, 71, 110);
emptyArray.unshift(0);

for(let i = 0; i < emptyArray.length; i++){
console.log(emptyArray[i]);
}