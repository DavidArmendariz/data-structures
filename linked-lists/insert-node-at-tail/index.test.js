const { insertNodeAtTail } = require(".");
const { printLinkedList } = require("../print-linked-list");
const { SinglyLinkedList } = require("../linked-list");

it("should insert a node at the tail", () => {
  const linkedList = new SinglyLinkedList();
  let head = linkedList.head;
  const data = [15, 20, 30];
  data.forEach((point) => {
    head = insertNodeAtTail(head, point);
  });
  expect(printLinkedList(head)).toEqual(data);
});
