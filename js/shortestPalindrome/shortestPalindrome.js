/*
 * shortestPalindrome.js
 * Copyright (C) 2017-10-11 10:47 charlesoconor <coconor@umich.edu>
 *
 */
function shortestPalindrome(str) {
  function isPallendrom(start, end) {
    const length = Math.floor((end - start)/ 2)
    for (let i = 0; i <= length; ++i) {
      if (str[start + i] !== str[end - i])
        return false
    }

    return true
  }

  let lengthLeftPalindrome = 0;
  for (let i = str.length - 1; i >= 1; --i) {
    if (isPallendrom(0, i)) {
      lengthLeftPalindrome = i
      break
    }
  }


  let lengthRightPalindrome = 0
  // for (let i = 0; i < str.length - 1; ++i) {
  //   if (isPallendrom(i, str.length - 1)) {
  //     lengthRightPalindrome = str.length - i
  //     break
  //   }
  // }

  function padd(start, end) {
    if (start == end)
      return str

    const toAdd = str
      .slice(start, end)
      .split('')
      .reverse()
      .join('')

    return start ?
      toAdd + str :
      str + toAdd
  }

  // if (Math.max(lengthRightPalindrome, lengthLeftPalindrome) > 0) {
   if (lengthLeftPalindrome > 0) {
    // if (lengthRightPalindrome > lengthLeftPalindrome)
      // return padd(0, str.length - lengthRightPalindrome)

    return padd(lengthLeftPalindrome + 1, str.length)
  }

  return padd(1, str.length)
}

function test(input, expected) {
  const output = shortestPalindrome(input)
  // console.log(output)
  console.assert(output === expected, `${output} expected to equal ${expected}`)
}

var input = new Array(40004).fill('a').join('')
test(input, input)
test('abb', 'bbabb')
test('aba', 'aba')
test('abcd', 'dcbabcd')
test('aacecaaa', 'aaacecaaa')
