const { Node } = require("../node");

/**
 *  Inorder traversal (Root, Left, Right)
 */

function preOrder(root) {
  if (root.left === null && root.right === null) {
    console.log(root.value);
    return;
  }
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
}

function main() {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  preOrder(root);
}

if (require.main === module) {
  main();
}

module.exports = { preOrder };
