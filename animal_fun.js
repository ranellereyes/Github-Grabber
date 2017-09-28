const fs = require('fs');
const http = require('http');
const querystring = require('querystring');

// TO RUN:
// node animal_fun.js match_str

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

// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('animals.txt does not exist');
//     return;
//   }
//
//   if (!process.argv[2]) {
//     console.log('Please pass a string as an argument!')
//     return;
//   }
//
//   const arg_length = process.argv[2].length;
//
//   let filtered_animals = data
//     .split('\n')
//     .filter(animal => animal.length > 0 &&
//         animal.slice(0, arg_length).toLowerCase() === process.argv[2].toLowerCase())
//     .join('\n');
//
//   fs.writeFile('./filterequire red_animals.txt', filtered_animals, err => {
//     if (err) { console.log(err); }
//
//     console.log(`Animals beginning with the letter ${process.argv[2].toUpperCase()} are now located in './filtered_animals.txt'!`)
//   })
// })

// SERVER

const server = http.createServer((req, res) => {
  res.write('Hello World! \n');

  const query = req.url.split('?letter=')[1];

  if (query) {
    res.write(`Here is a list of animals beginning with the letter(s) ${query.toUpperCase()}\n\n`)
    fs.readFile('./animals.txt', 'utf-8', (err, data) => {
      if (err) { return; }

      const filteredAnimals = data.split('\n')
        .filter(animal => animal.length > 0 &&
          animal.slice(0, query.length).toLowerCase() === query.toLowerCase())
        .join('\n')

      res.end(filteredAnimals)
    })
  } else {
    res.end('Please input a query in the format of \'?letter={your string}\'');
  }
})

server.listen(8000, () => { console.log(`I'm listening on port 8000!`);})
