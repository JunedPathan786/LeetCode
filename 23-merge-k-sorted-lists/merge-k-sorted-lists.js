/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.size() === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = end;
      this._bubbleDown(0);
    }
    return min;
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent].val <= this.heap[index].val) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  _bubbleDown(index) {
    let length = this.heap.length;
    let element = this.heap[index];

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left].val < this.heap[smallest].val) {
        smallest = left;
      }
      if (right < length && this.heap[right].val < this.heap[smallest].val) {
        smallest = right;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

var mergeKLists = function (lists) {
  const heap = new MinHeap();
  

  for (let node of lists) {
    if (node) heap.push(node);
  }

  let dummy = new ListNode();
  let current = dummy;

  while (heap.size() > 0) {
    let node = heap.pop();
    current.next = node;
    current = current.next;
    if (node.next) heap.push(node.next);
  }

  return dummy.next;
};
