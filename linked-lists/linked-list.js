class SinglyLinkedListNode {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
}

module.exports = {
  SinglyLinkedListNode,
  SinglyLinkedList,
};
