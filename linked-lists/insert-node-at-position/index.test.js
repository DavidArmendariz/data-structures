const { SinglyLinkedList } = require("../linked-list");
const { insertNodeAtTail } = require("../insert-node-at-tail");
const { printLinkedList } = require("../print-linked-list");
const { insertNodeAtPosition } = require(".");

it("should insert a node at position 2", () => {
  const linkedList = new SinglyLinkedList();
  const data = [16, 13, 7];
  let head = linkedList.head;
  data.forEach((point) => {
    head = insertNodeAtTail(head, point);
  });
  expect(printLinkedList(head)).toEqual(data);
  head = insertNodeAtPosition(head, 1, 2);
  expect(printLinkedList(head)).toEqual([16, 13, 1, 7]);
});
