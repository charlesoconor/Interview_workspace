/*
 * currancyGraphTest.js
 * Copyright (C) 2017-09-26 15:16 charlesoconor <coconor@umich.edu>
 *
 */
'use strict'

import chai from 'chai'
import _ from 'lodash'
import { getCurrancyPath } from './currancyGraph'

describe('Currency path to another', function () {
  it('simple only 2 currencies', function(done) {
    const curs = ['USD', 'EUR']
    const output = getCurrancyPath(curs[0], 100, curs[1], _.keyBy(curs))
    chai.assert.deepEqual(output.path, curs)
    chai.assert.deepEqual(output.value, 90)
    done()
  })

  it('should ignore the third', function(done) {
    const curs = ['USD', 'EUR', 'GBP']
    const output = getCurrancyPath(curs[0], 100, curs[1], _.keyBy(curs))
    chai.assert.deepEqual(output.path, ['USD', 'EUR'])
    chai.assert.deepEqual(output.value, 90)
    done()
  })
})
