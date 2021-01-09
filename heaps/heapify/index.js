const { swap } = require("../../utils/swap");

class Heap {
  heapifyMax(arr, i) {
    const size = arr.length;
    let largestIndex = i;
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;
    if (leftChild < size && arr[leftChild] > arr[largestIndex]) {
      largestIndex = leftChild;
    }
    if (rightChild < size && arr[rightChild] > arr[largestIndex]) {
      largestIndex = rightChild;
    }
    if (largestIndex !== i) {
      swap(arr, i, largestIndex);
      this.heapifyMax(arr, largestIndex);
    }
  }
  heapifyMin(arr, i) {
    const size = arr.length;
    let smallestIndex = i;
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;
    if (leftChild < size && arr[leftChild] < arr[smallestIndex]) {
      smallestIndex = leftChild;
    }
    if (rightChild < size && arr[rightChild] < arr[smallestIndex]) {
      smallestIndex = rightChild;
    }
    if (smallestIndex !== i) {
      swap(arr, i, smallestIndex);
      this.heapifyMin(arr, smallestIndex);
    }
  }
  heapify(arr, type = "min") {
    const firstIndex = Math.floor(arr.length / 2) - 1;
    for (let i = firstIndex; i >= 0; i--) {
      if (type === "min") {
        this.heapifyMin(arr, i);
      } else {
        this.heapifyMax(arr, i);
      }
    }
  }
}

module.exports = { Heap };
