/*
 * amicablePairsTest.js
 * Copyright (C) 2017-09-25 15:33 charlesoconor <coconor@umich.edu>
 *
 */
'use strict'


import chai from 'chai'
import { findAmicablePairs } from './amicablePairs'

describe('Amicable Paris', function () {
  it('too small should return empty', function(done) {
    const output = findAmicablePairs(10)
    chai.assert.deepEqual(output, [])
    done()
  })

  it('Get smallest pair', function(done) {
    const output = findAmicablePairs(300)
    chai.assert.deepEqual(output, [[220, 284]])
    done()
  })

  // it('Get smallest pair', function(done) {
  //   const output = findAmicablePairs(100300)
  //   chai.assert.deepEqual(output, [[220, 284]])
  //   done()
  // })
})
