/*
 * max_number.js
 * Copyright (C) 2017-10-11 18:00 charlesoconor <coconor@umich.edu>
 *
 */
function maxNumber(num1, num2, k) {
  for (let i = 0; i < k; ++i) {
    output.push((() => {
      if (num1.length) return num2.pop()
      if (num2.length) return num1.pop()

      if (num1[0] === num2[0]) {
        let j = 0
        while (j < num1.length && j < num2.length) {
          if (num1[j] > num2[j])
            return num1.pop()
          else if (num1[j] < num2[j])
            return num2.pop()

          ++j
        }

        return  num1.length > j ?
          num2.pop() :
          num1.pop()
      }

      if (num1[0] > num2[0])
        return num1.pop()

      return num2.pop()
    })())
  }

  return output
}


