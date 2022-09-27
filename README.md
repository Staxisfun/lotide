# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

 `head(...)` Returns the first element of an array
 
 `tail(...)`: Returns an array excluding the first element
 
 `middle(...)`: Returns the one or two middle elements of an array depending on if array is odd or even length

 `countLetters(...)`: Returns a count of how many times each letter appears in a string.
 
 `countOnly(...)`: Counts things based on given parameters
 
 `findKey(...)`: specifies a key based on that key's value
 
 `findKeyByValue(...)`: finds a key based on it's value
 
 `letterPositions(...)`: Alters the positions of letters in a given string
 
 `map(...)`: returns a new array populated with the results of calling a provided function on every element in the calling array
 
 `takeUntil(...)`: takes things from a given array until a specified point
 
 `without(...)`: takes in two arrays and alters them based on their contents
 
 `EqArrays(...)`: compares two arrays and returns a boolean value
 
 `eqObjects(...)`: compares two objects and returns a boolean value 

 `assertEqual(...)`: asserts whether a returned value is correct

 `assertArraysEqual(...)`: assertEqual for arrays
