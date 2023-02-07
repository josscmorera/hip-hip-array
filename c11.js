console.log("Challenge 11");
// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
// Challenge 12 Code

dinosaurs.splice(4, 3);
for(let i = 0; i < dinosaurs.length; i++){
    console.log(dinosaurs[i]);
}