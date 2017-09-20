/*
 * findClosetPointsTest.js
 * Copyright (C) 2017-09-19 10:55 charlesoconor <coconor@umich.edu>
 *
 */

'use strict'


import chai from 'chai'
import { findClosetDistanceBetween } from './findClosetPoints'

describe('Find closet Points test', function () {
  it('simple test only 2 points', function(done) {
    const input =  [
      [0, 0],
      [0, 1]
    ].map(([x, y]) => ({ x, y }))

    const closetDistance = findClosetDistanceBetween(input)
    chai.assert.equal(1, closetDistance)
    done()
  })

  it('empty test cases', function(done) {
    const input =  [
      [0, 1]
    ].map(([x, y]) => ({ x, y }))

    const closetDistance = findClosetDistanceBetween(input)
    chai.assert.equal(Infinity, closetDistance)

    chai.assert.equal(Infinity, findClosetDistanceBetween([]))
    done()
  })

  it('should zip correctly', function(done) {
    const input =  [
      [-1, 0],
      [2, 0],
      [3, 0]
    ].map(([x, y]) => ({ x, y }))

    const closetDistance = findClosetDistanceBetween(input)
    chai.assert.equal(1, closetDistance)
    done()
  })

  it('large test case', function(done) {
    const input =  [
      [-1, 0],
      [0, 0],
      [3, 300]
      [4, 555],
      [8, 9]
      // [11, 9],
      // [-11, 1000]
    ].map(([x, y]) => ({ x, y }))

    const closetDistance = findClosetDistanceBetween(input)
    chai.assert.equal(1, closetDistance)
    done()
  })
})
