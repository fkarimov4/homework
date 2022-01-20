// 1. Write a loop that outputs
// 10
// 9
// 8
// ...
// 2
// 1
// BLAST OFF!
let count = 10;
let timer = count;

for (let i = 0; i < timer; i++) {
  console.log(count);
  count--;
  if (i === timer - 1) {
    console.log("BLAST OFF!");
  }
}

// 2. create a function that takes an array of numbers & return both min and max in that order. (use a loop)
const arrOfNumbers = [5, 3, 1, 8, 12, 43, -12, 91, 83, 75, 8];

function returnMinAndMax(arr) {
  let minValue = Infinity;
  let maxValue = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  console.log(minValue);
  console.log(maxValue);
}

returnMinAndMax(arrOfNumbers);

// 3. Converts a string to uppercase letters:
let str = "WHAT a TIME to BE ALIVE!";

const upperCaseString = str.toUpperCase();
console.log(upperCaseString);
