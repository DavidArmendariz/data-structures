function printLinkedList(head) {
  let currentNode = head;
  while (currentNode !== null) {
    process.stdout.write(`${currentNode.data} `);
    currentNode = currentNode.next;
  }
}

module.exports = { printLinkedList };
