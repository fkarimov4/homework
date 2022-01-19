//1. Create a function that returns the number of true values there are in an array.

const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];
/*

function returnTrueValues(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      counter++;
    }
  }
  return counter;
}
const count = returnTrueValues(testArray);

console.log(count);

*/

function returnTrueValues(array) {
  let counter = 0;
  for (const trueValue of array) {
    if (trueValue) {
      counter++;
    }
  }
  return counter;
}

const count = returnTrueValues(testArray);

console.log(count);

//2. Write a function that receives a car object as an argument and outputs the car's make and model.

let car = {
  make: "Mercedes-Benz",
  model: "E450",
};

function outputMakeAndModel(car) {
  console.log(car.make, car.model);
}

outputMakeAndModel(car);

//3. Write a function to get the first element in an array
let fruits = ["apple", "banana", "guava", "starfruit"];

function getFirstElement() {
  console.log(fruits[0]);
}

getFirstElement();
