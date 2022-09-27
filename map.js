const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
  }
};


const eqArrays = function (array1, array2) {
  let firstArray = JSON.stringify(array1)
  let secondArray = JSON.stringify(array2)
  if (firstArray === secondArray) {
    return (true)
  } else if (firstArray !== secondArray) {
    return (false)
  }
}



const words = ["ground", "control", "to", "major", "tom"];
const foods = ["kimchi", "stinkytofu", "bleh"];
const cats = ["fat", "skinny", "buff"];






const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  console.log("results: ", results)
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(foods, word => word[0])
const results3 = map(cats, word => word[0])





assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results2, ['k', 's', 'b'])
assertArraysEqual(results3, ['f', 's', 'b'])


module.exports = map