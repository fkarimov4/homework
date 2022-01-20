// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

const symbol = "#";

let line = symbol;

for (let i = 0; i < 5; i++) {
  console.log(line);
  line += symbol;
}

// Extra for experts:
// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either  "A," "B," "C," "D," or "F." Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
  switch (true) {
    case score < 65:
      console.log("F");
      break;
    case score >= 65 && score <= 69:
      console.log("D");
      break;
    case score >= 70 && score <= 79:
      console.log("C");
      break;
    case score >= 80 && score <= 89:
      console.log("B");
      break;
    case score > 90:
      console.log("A");
      break;
    default:
      console.log("Something is not right...");
  }
}

assignGrade(70);
