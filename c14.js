console.log("Challenge 14");
console.log();
// Challenge 15
// Create two new arrays.
// Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
// Challenge 15 Code

const x = ["dark", "light", "medium"];
const y = ["car", "plane", "train"];

const z = x.concat(y);

for (const value of z) {
  console.log(value);
}

console.log();
console.log('Primary: ', x);
console.log('Secondary: ', y);
console.log('Combined: ', z);
