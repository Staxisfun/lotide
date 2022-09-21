const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(sentence) {
  let result = {}
  //loop over each character in the given sentence skipping spaces 
  for (let character of sentence) {
    if (character !== " ") {
      if (result[character]) {
        result[character] += 1
      } else {
        result[character] = 1
      }
    }
  }
  
  //return a count of how many times each letter appears
return result
}

console.log(countLetters("this is a sentence"))