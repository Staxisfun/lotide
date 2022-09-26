


const assert = require('chai').assert;
const middle = require('../middle');



describe("#middle", () => {

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });


  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [3] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3]);
  });

  it("returns [3,4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [3, 4]);
  });


});









// const middle = require('../middle')

// const assertArraysEqual = require('../assertArraysEqual');

// // console.log(middle([1, 2]))
// // console.log(middle([1, 2, 3, 4, 5]))
// // console.log(middle([1, 2, 3, 4, 5, 6]))
// // console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// // console.log(middle([1, 2, 3, 4, 5, 6, 7]))

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);