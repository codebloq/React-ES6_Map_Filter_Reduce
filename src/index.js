// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//   return x * 2;
// }

// const newNumber = numbers.map(double);
// console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// const newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

import emojipedia from "./emojipedia";

const emojiMeaning = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(emojiMeaning);
