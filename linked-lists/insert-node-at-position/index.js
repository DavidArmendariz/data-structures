const { SinglyLinkedListNode } = require("../linked-list");

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

module.exports = {
  insertNodeAtPosition,
};
