/*
 * pairs.js
 * Copyright (C) 2017-09-25 14:47 charlesoconor <coconor@umich.edu>
 *
 */

import _ from 'lodash'

export function findAmicablePairs(N: number): Array<Array<number>> {
  const sumOfFactors = new Array(N).fill(1)

  for (let num = 2; num <= N / 2; ++num)
    for (let cur = num * 2; cur < N; cur += num)
      sumOfFactors[cur] += num

  return _(sumOfFactors
    .reduce((acc, cur, idx, arr) => {
      if (arr[cur] === idx && idx !== cur)
        acc[Math.min(cur, idx)] = Math.max(cur, idx)
      return acc
    }, {}))
    .toPairs()
    .map(p => p.map(v => typeof v === 'number' ? v : parseInt(v)))
    .value()
}
