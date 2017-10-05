/*
 * compressStringTest.js
 * Copyright (C) 2017-10-03 12:38 charlesoconor <coconor@umich.edu>
 *
 */
'use strict'


import chai from 'chai'
import { compressString } from './compressString'

describe('Amicable Paris', function () {
  it('too small should return empty', function(done) {
    const output = compressString('aabcccccaaa')
    chai.assert.strictEqual(output, 'a2b1c5a3')
    done()
  })
})
