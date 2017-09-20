/*
 * isTreeSearchTree.js
 * Copyright (C) 2017-09-20 14:05 charlesoconor <coconor@umich.edu>
 *
 */

type Node = {
  data: number
  left: Node,
  right: Node
}
function isBinarySearch(node: Node): bool {
  return !node ||
    !(node.left && node.left.data >= node.data && !isBinarySearch(node.left)) &&
    !(node.right && node.right.data <= node.data && !isBinarySearch(node.right))
}
