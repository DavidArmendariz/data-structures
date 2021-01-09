const { Node } = require("../node");

/**
 * In this version the time complexity si O(n^2)
 */

function printLevel(root, level) {
  if (root === null) {
    return false;
  }
  if (level === 1) {
    console.log(root.value);
    return true;
  }
  const left = printLevel(root.left, level - 1);
  const right = printLevel(root.right, level - 1);
  return left || right;
}

function levelOrderTraversal(root) {
  let level = 1;
  while (printLevel(root, level)) {
    level += 1;
  }
}

function main() {
  const root = new Node(15);
  root.left = new Node(10);
  root.right = new Node(20);
  root.left.left = new Node(8);
  root.left.right = new Node(12);
  root.right.left = new Node(15);
  root.right.right = new Node(25);
  levelOrderTraversal(root);
}

if (require.main === module) {
  main();
}

module.exports = { levelOrderTraversal };
