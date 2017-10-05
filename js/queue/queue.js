/*
 * queue.js
 * Copyright (C) 2017-10-04 13:53 charlesoconor <coconor@umich.edu>
 *
 */

function isIterable(it): bool {
  return typeof it[Symbol.iterator] === 'function'
}

class Stack {
  arr: Array<any>

  constructor() {
    this.arr = []
  }

  push() {
    return this.arr.push.apply(this.arr, arguments)
  }

  pop() {
    return this.arr.pop()
  }

  size(): number {
    return this.arr.length
  }

  isEmpty(): bool {
    return !this.size()
  }
}

class QueueS {
  up: Stack
  down: Stack

  constructor() {
    this.up = new Stack()
    this.down = new Stack()
    return Object.seal(this)
  }

  push() {
    this.down.push.apply(this.down, arguments)
  }

  pop() {
    if (this.up.isEmpty())
      while (!this.down.isEmpty())
        this.up.push(this.down.pop())

    return this.up.pop()
  }

  isEmpty(): bool {
    return this.up.isEmpty() && this.down.isEmpty()
  }

  size(): number {
    return this.up.size() + this.down.size()
  }
}

const INIT_QUEUE_SIZE = 10
class QueueA {
  arr: Array<any>
  start: number
  end: number

  constructor() {
    this.arr = new Array(INIT_QUEUE_SIZE)
    return Object.seal(this)
  }

  resize() {
    const orgSize = this.arr.length
    const nextArr = new Array(orgSize * 2)

    const rotatedChunk = this.arr.splice(0, this.end)
    const arrayInOrder = this.arr + chunck

    arrayInOrder.forEach((elm, idx) => nextArr[i] = elm)
    this.arr = nextArr
    this.start = 0
    this.end = orgSize - 1
  }

  push() {
    this.down.push.apply(this.down, arguments)
  }

  pop() {
    if (this.up.isEmpty())
      while (!this.down.isEmpty())
        this.up.push(this.down.pop())

    return this.up.pop()
  }

  isEmpty(): bool {
    return this.up.isEmpty() && this.down.isEmpty()
  }

  size(): number {
    return this.up.size() + this.down.size()
  }
}
