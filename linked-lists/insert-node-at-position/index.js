const { SinglyLinkedList, SinglyLinkedListNode } = require("../linked-list");
const { insertNodeAtTail } = require("../insert-node-at-tail");
const { printLinkedList } = require("../print-linked-list");

function insertNodeAtPosition(head, data, position) {
  if (head === null) {
    return new SinglyLinkedListNode(data);
  }
  let currentPosition = 0;
  let currentNode = head;
  let previousNode = head;
  while (currentPosition <= position && currentNode !== null) {
    if (currentPosition === position) {
      while (previousNode.next !== currentNode) {
        previousNode = previousNode.next;
      }
      const newNode = new SinglyLinkedListNode(data);
      previousNode.next = newNode;
      newNode.next = currentNode;
    }
    currentPosition++;
    currentNode = currentNode.next;
  }
  return head;
}

function main() {
  const linkedList = new SinglyLinkedList();
  linkedList.head = insertNodeAtTail(linkedList.head, 16);
  insertNodeAtTail(linkedList.head, 13);
  insertNodeAtTail(linkedList.head, 7);
  console.log("Before:");
  printLinkedList(linkedList.head);
  insertNodeAtPosition(linkedList.head, 1, 2);
  console.log("After:");
  printLinkedList(linkedList.head);
}

if (require.main === module) {
  main();
}

module.exports = {
  insertNodeAtPosition,
};
