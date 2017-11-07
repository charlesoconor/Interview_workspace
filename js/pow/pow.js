/*
 * pow.js
 * Copyright (C) 2017-10-30 10:23 charlesoconor <coconor@umich.edu>
 *
 */
'use strict'

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function pow(x, n) {
  let output = 1
  for (let i = 0; i < n; ++i)
    output *= x
  return output
}

console.log(pow(1, 1))
console.assert(pow(1, 1) === 1)
console.log(pow(2, 2))
console.assert(pow(2, 1) === 2)
console.log(pow(3, 4))
