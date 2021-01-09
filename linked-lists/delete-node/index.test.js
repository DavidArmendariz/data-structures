const { SinglyLinkedList } = require("../linked-list");
const { insertNodeAtTail } = require("../insert-node-at-tail");
const { printLinkedList } = require("../print-linked-list");
const { deleteNodeAtPosition } = require(".");

it("should delete the node at position 3", () => {
  const linkedList = new SinglyLinkedList();
  const data = [20, 6, 2, 19, 7, 4, 15, 9];
  let head = linkedList.head;
  data.forEach((point) => {
    head = insertNodeAtTail(head, point);
  });
  expect(printLinkedList(head)).toEqual(data);
  deleteNodeAtPosition(head, 3);
  expect(printLinkedList(head)).toEqual([20, 6, 2, 7, 4, 15, 9]);
});

it("should delete the node at position 0", () => {
  const linkedList = new SinglyLinkedList();
  const data = [11, 12, 8, 18, 16, 5, 18];
  let head = linkedList.head;
  data.forEach((point) => {
    head = insertNodeAtTail(head, point);
  });
  expect(printLinkedList(head)).toEqual(data);
  head = deleteNodeAtPosition(head, 0);
  expect(printLinkedList(head)).toEqual([12, 8, 18, 16, 5, 18]);
});
