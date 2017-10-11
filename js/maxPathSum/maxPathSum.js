/*
 * maxPathSum.js
 * Copyright (C) 2017-10-10 20:10 charlesoconor <coconor@umich.edu>
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
  function findMax(node) {
    if (!node)
      return { maxParent: -Infinity, maxNoParent: -Infinity }

    const left = findMax(node.left)
    const right = findMax(node.right)
    const sumNoParent = left.maxParent + right.maxParent + node.val
    const sumParent = Math.max(left.maxParent, right.maxParent) + node.val

    return {
      maxParent: sumParent > 0 ?
        Math.max(left.maxParent, right.maxParent) + node.val :
        Math.max(left.maxParent, right.maxParent, node.val),
      maxNoParent: Math.max(
        sumNoParent <= 0 ?
          Math.max(left.maxParent, right.maxParent, node.val) :
          sumNoParent,
        left.maxNoParent,
        right.maxNoParent
      )
    }
  }

  const { maxNoParent, maxParent } = findMax(root)
  return Math.max(maxNoParent, maxParent)
}

let root = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
}

function assert(actual, expected) {
  console.assert(expected === actual,
    'expected: ' + expected + ' to equal ' + actual)
}

assert(maxPathSum(root), 6)

root = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 100
    },
    left: {
      val: 100
    }
  },
  right: {
    val: 3
  }
}

assert(maxPathSum(root), 202)

root = {
  val: 1,
  left: {
    val: 2,
  }
}
assert(maxPathSum(root), 3)
