/*
 * currancyGraph.js
 * Copyright (C) 2017-09-26 14:28 charlesoconor <coconor@umich.edu>
 *
 */
 'use strict'

import _ from 'lodash'

const defaultCurrencies = {
  USD: 'USD',
  GBP: 'GBP',
  EUR: 'EUR',
  AUD: 'AUD',
  ALL: 'ALL'
}

type Currency = $Key<defaultCurrencies> | string

const TRANSACTION_FEE = 10

function getQuote(fromCurrancy: Currency, howMuch: number, youWant: Currency): number {
  const getFactor = (cur: Currency): number => cur.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0)
  return howMuch * getFactor(fromCurrancy) / getFactor(youWant) - TRANSACTION_FEE
}

type PathAndValue = {
  path: Array<string>,
  cost: number
}
// we will treat all the currencies as a complete graph
export function getCurrancyPath(start: Currency, value: number, youWant: Currency, currancies?: { [name: string]: string } = defaultCurrencies): PathAndValue {
  const distanceToNodes = _.mapValues(currancies, () => ({ value: -Infinity, fromNode: null }))
  const nodesToVisit = _.clone(currancies)

  delete nodesToVisit[start]
  distanceToNodes[start].value = value

  let curCurrency = start

  while (_.some(nodesToVisit)) {
    let maxValue = -Infinity
    let nextCur
    const myValue = distanceToNodes[curCurrency].value

    _.keys(nodesToVisit).forEach(toCurrency => {
      const value = getQuote(curCurrency, myValue, toCurrency)

      if (value > distanceToNodes[toCurrency].value)
        distanceToNodes[toCurrency] = { value, fromNode: curCurrency }

      if (value > maxValue) {
        maxValue = value
        nextCur = toCurrency
      }
    })

    curCurrency = nextCur
    delete nodesToVisit[nextCur]
  }

  const path: Array<string> = []
  for (let end = youWant; end;) {
    path.push(end)
    end = distanceToNodes[end].fromNode
  }

  return {
    path: path.reverse(),
    value: distanceToNodes[youWant].value
  }
}
