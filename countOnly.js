const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function (allItems, itemsToCount) {
  let results = {}

  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue
    }

    if (!results[item]) {
      results[item] = 0
    }

    results[item]++
  }
  return result
}




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);