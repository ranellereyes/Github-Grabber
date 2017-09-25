const fs = require('fs');

// READ FILE

// // For seeing what the error looks like
// // fs.readFile('./nope.txt', 'utf-8', (err, data) => {
//
// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   console.log(data);
// })

// WRITE FILE

// fs.writeFile('./example.txt', 'Data that is gonna be written', err => {
//   if (err) { console.log(err); }
//
//   console.log("Process done!");
// });

// ARGUMENTS

// Additional arguments start at process.argv[2]
// First arg is Node, second is filepath

// console.log(process.argv);

// QUICK PROJECT:
// Pass a single letter to script, filter out all animals that start with
// that same letter

fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('animals.txt does not exist');
    return;
  }

  if (!process.argv[2]) {
    console.log('Please pass a string as an argument!')
    return;
  }

  const arg_length = process.argv[2].length;

  let filtered_animals = data
    .split('\n')
    .filter(animal => animal.length > 0 && animal.slice(0, arg_length).toLowerCase() === process.argv[2].toLowerCase())
    .join('\n');

  fs.writeFile('./filtered_animals.txt', filtered_animals, err => {
    if (err) { console.log(err); }

    console.log(`Animals beginning with the letter ${process.argv[2].toUpperCase()} are now located in './filtered_animals.txt'!`)
  })
})
