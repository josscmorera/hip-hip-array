// Challenge 14

const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
// Challenge 14 Code

const dino2 = [];

for (let i = dinosaurs.length - 1; i >= 0; i--) {
  dino2.push(dinosaurs[i]);
}
console.log('Reversed: ', dino2);
console.log();
console.log('Original: ', dinosaurs);
