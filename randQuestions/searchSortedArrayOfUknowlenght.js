/*
 * searchSortedArrayOfUknowlength.js
 * Copyright (C) 2017-09-20 14:34 charlesoconor <coconor@umich.edu>
 *
 */

// ref: http://www.ardendertat.com/2011/11/21/programming-interview-questions-17-search-unknown-length-array/
// Given a sorted array of unknown length and a number to search for,
// return the index of the number in the array. Accessing an element
// out of bounds throws exception. If the number occurs multiple times,
// return the index of any occurrence. If it isn’t present, return -1.

function searchSortedArrayOfUknowlength(arr, searchFor) {
  var upperLimit = 2
  try {
    for (; searchFor < arr[upperLimit]; upperLimit *= 2)
      if (arr[upperLimit] == searchFor)
        return upperLimit
  } catch (e) { }

  /// inbinary search
}
