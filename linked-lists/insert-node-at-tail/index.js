const { SinglyLinkedListNode, SinglyLinkedList } = require("../linked-list");
const { printLinkedList } = require("../print-linked-list");

function insertNodeAtTail(head, data) {
  if (head === null) {
    return new SinglyLinkedListNode(data);
  }
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.next === null) {
      currentNode.next = new SinglyLinkedListNode(data);
      break;
    }
    currentNode = currentNode.next;
  }
  return head;
}

function main() {
  const linkedList = new SinglyLinkedList();
  linkedList.head = insertNodeAtTail(linkedList.head, 15);
  insertNodeAtTail(linkedList.head, 20);
  insertNodeAtTail(linkedList.head, 30);
  printLinkedList(linkedList.head);
}

if (require.main === module) {
  main();
}

module.exports = {
  insertNodeAtTail,
};
