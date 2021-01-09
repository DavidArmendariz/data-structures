import { Node } from "../node.mjs";

/**
 *  Inorder traversal (Left, Root, Right)
 */

function inOrder(root) {
  if (root.left === null && root.right === null) {
    console.log(root.value);
    return;
  }
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}

function main() {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  inOrder(root);
}

main();
