/*
 * findlinebreaks.js
 * Copyright (C) 2017-09-14 14:01 charlesoconor <coconor@umich.edu>
 *
 */
import _ from 'lodash'

export function findCostOfLineBreaks(wordLengths: Array<number>, maxSum: number) {
  if (_.isNil(maxSum)) throw 'maxSum cannot be null/undefined'

  const cachedCostOfRest = []
  function costOfRest(startIdx: number) {
    if (cachedCostOfRest[startIdx]) return cachedCostOfRest[startIdx]

    const returnValue = (() => {
      let curSum = 0
      let breakIdx = startIdx
      const values = []

      for (;;) {
        if (breakIdx >= wordLengths.length) return 0

        const curValue = wordLengths[breakIdx]
        curSum += curValue

        if (curSum > maxSum) break

        values.push(Math.pow(maxSum - curSum, 2) + costOfRest(++breakIdx))
      }

      return Math.min(... values)
    })()
    cachedCostOfRest[startIdx] = returnValue
    return returnValue
  }

  return costOfRest(0)
}


