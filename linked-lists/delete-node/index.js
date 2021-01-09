const { SinglyLinkedList } = require("../linked-list");
const { insertNodeAtTail } = require("../insert-node-at-tail");
const { printLinkedList } = require("../print-linked-list");

function deleteNodeAtPosition(head, position) {
  let currentPosition = 0;
  let previousNode = head;
  let currentNode = head;
  while (currentPosition <= position && currentNode !== null) {
    if (currentPosition === position) {
      while (previousNode.next !== currentNode) {
        previousNode = previousNode.next;
      }
      previousNode.next = currentNode.next;
    }
    currentPosition++;
    currentNode = currentNode.next;
  }
  return head;
}

function main() {
  const linkedList = new SinglyLinkedList();
  linkedList.head = insertNodeAtTail(linkedList.head, 20);
  insertNodeAtTail(linkedList.head, 6);
  insertNodeAtTail(linkedList.head, 2);
  insertNodeAtTail(linkedList.head, 19);
  insertNodeAtTail(linkedList.head, 7);
  insertNodeAtTail(linkedList.head, 4);
  insertNodeAtTail(linkedList.head, 15);
  insertNodeAtTail(linkedList.head, 9);
  console.log("Before:");
  printLinkedList(linkedList.head);
  deleteNodeAtPosition(linkedList.head, 3);
  console.log("\n");
  console.log("After:");
  printLinkedList(linkedList.head);
}

if (require.main === module) {
  main();
}

module.exports = {
  deleteNodeAtPosition,
};
