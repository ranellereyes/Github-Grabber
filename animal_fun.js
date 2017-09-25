const fs = require('fs');

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

fs.writeFile('./example.txt', 'Data that is gonna be written', err => {
  if (err) { console.log(err); }

  console.log("Process done!");
});
