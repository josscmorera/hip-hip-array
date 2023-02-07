console.log("\n");
console.log("Challenge 10");
// Challenge 10

console.log();  

const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
// Challenge 10 Code
const student2 = students.slice(3, 11);
for(let i = 0; i < student2.length; i++){
    console.log(student2[i]);
}

console.log();
console.log("original array:");
console.log();

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

