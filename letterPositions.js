
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};





const eqArrays = function(array1, array2) {
  let firstArray = JSON.stringify(array1)
  let secondArray = JSON.stringify(array2)
  if (firstArray === secondArray) {
    return (true)
  } else if (firstArray !== secondArray) {
    return (false)
  }
}




const letterPositions = function(sentence) {

  let result = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    if (result[sentence[i]]) {
      result[sentence[i]].push(i)
    } else {
      result[sentence[i]] = [];
      result[sentence[i]].push(i)
    }
  }
  return result    
} 

console.log(letterPositions("hello my friend"));

assertArraysEqual(letterPositions("hello").e, [1]);