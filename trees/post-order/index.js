const { Node } = require("../node");

/**
 *  Inorder traversal (Left, Right, Root)
 */

function postOrder(root) {
  if (root.left === null && root.right === null) {
    console.log(root.value);
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
}

function main() {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  postOrder(root);
}

if (require.main === module) {
  main();
}

module.exports = { postOrder };
