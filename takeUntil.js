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



// Takes in two parameters
// An array of elements
// A callback function

const takeUntil = function(array, callback) {
  const result = []
for (let i = 0; i < array.length; i++) {
  if (callback(array[i])) {
    return result
  }
  result.push(array[i])
}
return result
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood' ])


module.exports = takeUntil