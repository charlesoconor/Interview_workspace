/*
 * max_number.js
 * Copyright (C) 2017-10-11 18:00 charlesoconor <coconor@umich.edu>
 *
 */
function numCandies(rating) {
  function recuse(num1, num2, k) {
    if (k === 0) return []

    const getCutOff = (arr1, arr2) => Math.max(1, arr1.length - (k - arr2.length) + 1)

    const max1 = getMaxAndIndex(num1.slice(0, getCutOff(num1, num2)))
    const max2 = getMaxAndIndex(num2.slice(0, getCutOff(num2, num1)))

    if (max1.max > max2.max)
      return [max1.max]
        .concat(recuse(num1.slice(max1.idx), num2, k - 1))

    return [max2.max]
      .concat(recuse(num1, num2.slice(max2.idx), k - 1))
  }

  return recuse(num1, num2, k)
}


function test(input, expected) {
  console.log(output)
  console.assert(output === expected, `${output} expected to equal ${expected}`)
}

let max = maxNumber([1,2,5,6], [2,8,9,1,1], 6)
console.log(max)

max = maxNumber([6,7], [6,0,4], 5)
console.log(max)

