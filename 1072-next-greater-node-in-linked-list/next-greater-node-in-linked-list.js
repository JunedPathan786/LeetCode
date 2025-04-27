/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */

function sizeLL(head){
    let curr = head;
    let count = 0;

    while(curr != null){
        count++;
        curr = curr.next;
    }
    return count;
}

function reverseLL(head){
    let curr = head;
    let pre = null;

    while(curr != null){
        let temp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = temp;
    }
    return pre;
}

function nextLargerNodes(head) {
    let size = sizeLL(head);
    let arr = new Array(size).fill(0);

    let nHead = reverseLL(head);

    let stack = [];
    stack.push(nHead.val);

    let curr = nHead.next;
    let ptr = size - 2;

    while (ptr >= 0 && curr !== null) {
        let ele = curr.val;
        curr = curr.next;

        while (stack.length > 0 && stack[stack.length - 1] <= ele) {
            stack.pop();
        }

        if (stack.length === 0) {
            arr[ptr] = 0;
        } else {
            arr[ptr] = stack[stack.length - 1];
        }

        stack.push(ele);
        ptr--;
    }

    arr[size - 1] = 0; // Last node will always have 0 as there is no next node

    return arr;
}
