'use strict'


import chai from 'chai'
import { findCostOfLineBreaks } from './findlinebreaks'

describe('Testing Line breaks', function () {
  it('Simple should be 0', function (done) {
    const cost = findCostOfLineBreaks([1, 1, 2, 1, 1], 2)
    chai.assert.equal(cost, 0)

    done()
  })

  it('Simple should be 3 - test make sure last is counted as 0', function (done) {
    const cost = findCostOfLineBreaks([3, 3, 3, 3], 4)
    chai.assert.equal(cost, 3)

    done()
  })

  it('Simple should be 1', function (done) {
    const cost = findCostOfLineBreaks([1, 2, 1, 1], 2)
    chai.assert.equal(cost, 1)

    done()
  })

  // it('Simple should be 5', function (done) {
  //   const cost = findCostOfLineBreaks([1, 3, 3, 1, 5, 6], 6)
  //   chai.assert.equal(cost, 5)

  //   done()
  // })
})
