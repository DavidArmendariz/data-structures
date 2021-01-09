function printLinkedList(head) {
  let currentNode = head;
  const data = [];
  while (currentNode !== null) {
    process.stdout.write(`${currentNode.data} `);
    data.push(currentNode.data);
    currentNode = currentNode.next;
  }
  return data;
}

module.exports = { printLinkedList };
