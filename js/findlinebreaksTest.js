'use strict'


import chai from 'chai'
import { findCostOfLineBreaks } from './findlinebreaks'

describe('Testing Line breaks', function () {
  it('Simple should be 0', function (done) {
    const cost = findCostOfLineBreaks([1, 1, 2, 1, 1], 2)
    chai.assert.equal(0, cost)

    done()
  })

  it('Simple should be 3 - test make sure last is counted as 0', function (done) {
    const cost = findCostOfLineBreaks([3, 3, 3, 3], 4)
    chai.assert.equal(3, cost)

    done()
  })

  it('Simple should be 1', function (done) {
    const cost = findCostOfLineBreaks([1, 2, 1, 1], 2)
    chai.assert.equal(1, cost)

    done()
  })

  it('Simple should be 3', function (done) {
    const cost = findCostOfLineBreaks([1, 3, 3, 1, 5, 6], 6)
    chai.assert.equal(5, cost)

    done()
  })
})
