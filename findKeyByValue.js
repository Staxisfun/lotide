const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (objects, value) {
  const objectArray = Object.keys(objects)
 
  for (const item of objectArray) {
    if (objects[item] === value) {
      
      return item
    }
  
  }
      return undefined
    
}



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


 assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
 assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);






