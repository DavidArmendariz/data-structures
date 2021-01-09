function deleteNodeAtPosition(head, position) {
  if (head === null) {
    return head;
  }
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

module.exports = {
  deleteNodeAtPosition,
};
