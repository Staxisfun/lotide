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


const without = function (array1, array2) {
  let finalArray = []
  finalArray = finalArray.concat(array1);
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
       if (finalArray[i] === array2[j]) {
        finalArray.splice(i, 1);
       }
      }
    }
    return finalArray
  }

assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1]), [2, 3, 2, 3]);
assertArraysEqual(without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3]);

module.exports = without