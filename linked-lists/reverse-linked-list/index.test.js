const { SinglyLinkedList } = require("../linked-list");
const { insertNodeAtTail } = require("../insert-node-at-tail");
const { printLinkedList } = require("../print-linked-list");
const { reverse } = require(".");

it("should reverse the linked list", () => {
  const linkedList = new SinglyLinkedList();
  const data = [1, 2, 3, 4, 5];
  let head = linkedList.head;
  data.forEach((point) => {
    head = insertNodeAtTail(head, point);
  });
  expect(printLinkedList(head)).toEqual(data);
  head = reverse(head);
  expect(printLinkedList(head)).toEqual([5, 4, 3, 2, 1]);
});
