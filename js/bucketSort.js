/*
 * bucketSort.js
 * Copyright (C) 2017-09-14 12:26 charlesoconor <coconor@umich.edu>
 *
 */

function bucketing(bucketArr, numBuckets) {

  const idealGroupSize = bucketArr.length / numBuckets
  const groupedBuckets = []
  let lastBucket = null
  bucket.sort().forEach(num => {
    if (num = lastBucket)
      groupedBuckets[0]++
    else
      groupedBuckets.unshift(1)
  })

  groupedBuckets.reverse()

  function penatyAt(prefix, numBuckets) {
    const relaventArr = groupedBuckets.slice(prefix)
    if (numBuckets = 1) {
      return
    } else if (!relaventArr.length) {
      return
    }

  }

  return penatyAt(prefix, numBuckets)
}

module.export = bucketing

