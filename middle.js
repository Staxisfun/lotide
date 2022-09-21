const eqArrays = function(array1, array2) {
  let firstArray = JSON.stringify(array1)
  let secondArray = JSON.stringify(array2)
  if (firstArray === secondArray) {
    return (true)
  } else if (firstArray !== secondArray) {
    return (false)
  }
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};

// recieves an array input{
const middle = function(array) {
  // create final array that will be returned
  let finalArray = []

  // if the array is one or two elements return an empty array
  if (array.length <= 2) {
    return finalArray
} 
  // if the array is an even number of elements the two middle elements
  // should be returned
  if (array.length % 2 === 0) {
    finalArray = array.slice(((array.length - 1) / 2), (array.length / 2)+ 1)
   
    // if the array is an odd number of elements a single middle element 
    // should be returned
  } else {
    const index = array[(array.length - 1) / 2]
    finalArray.push(index)
  }
// return the middle element(s) of the inputed array
  return finalArray
}

// console.log(middle([1, 2]))
// console.log(middle([1, 2, 3, 4, 5]))
// console.log(middle([1, 2, 3, 4, 5, 6]))
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(middle([1, 2, 3, 4, 5, 6, 7]))

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);