const eqArrays = function(array1, array2) {
  let firstArray = JSON.stringify(array1)
  let secondArray = JSON.stringify(array2)
  if (firstArray === secondArray) {
    return (true)
  } else if (firstArray !== secondArray) {
    return (false)
  }
}

const eqObjects = function(object1, object2) {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);
  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  for (const item of objectKeys1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
      continue;
    }
  
    if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else if (eqObjects(object1, object2) === false) {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(ab, ba)
assertObjectsEqual(cd, ba)
assertObjectsEqual(dc, ba)
assertObjectsEqual(cd, dc)