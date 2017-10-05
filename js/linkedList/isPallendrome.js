/*
 * reverse.js
 * Copyright (C) 2017-10-04 10:44 charlesoconor <coconor@umich.edu>
 *
 */
'use strict'

type Node = {
  data: any,
  next: Node
}
export function checkIfPallendrome(head: Node): bool {
  if (!head) return true

  function checkBackUp(node: Node): ?Node {
    if (!node) return head

    const otherSide = checkBackUp(node.next)

    return otherSide && otherSide.data === node.data ?
      otherSide.next :
      null
  }

  return !!checkBackUp(head)
}
