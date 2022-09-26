
const eqArrays = require('./eqArrays');



const assertArraysEqual = require('./assertArraysEqual');



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



module.exports = middle;