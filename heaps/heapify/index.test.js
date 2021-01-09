const { Heap } = require(".");

let heap;
beforeAll(() => {
  heap = new Heap();
});
it("should heapify the array to form a max heap", () => {
  const arr = [3, 9, 2, 1, 4, 5];
  heap.heapify(arr, "max");
  expect(arr).toEqual([9, 4, 5, 1, 3, 2]);
});

it("should heapify the array to form a min heap", () => {
  const arr = [3, 9, 2, 1, 4, 5];
  heap.heapify(arr, "min");
  expect(arr).toEqual([1, 3, 2, 9, 4, 5]);
});
