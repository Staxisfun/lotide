


const assert = require('chai').assert;
const tail   = require('../tail');



describe("#tail", () => {
  
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [3, 2, 1] for [4, 3, 2, 1]", () => {
    assert.deepEqual(tail([4, 3, 2, 1]), [3, 2, 1]);
  });

  it("returns [5, 6, 7] for [3, 4, 5, 6, 7]", () => {
    assert.deepEqual(tail([3, 4, 5, 6, 7]), [5, 6, 7]);
  });
    
    


});













//Previous Test Code

// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// //Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!