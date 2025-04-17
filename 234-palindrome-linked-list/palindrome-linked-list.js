/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // Step 1: Find the middle using two pointers
    let ptr1 = head;
    let ptr2 = head;

    while (ptr2 && ptr2.next) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
    }

    // Step 2: Reverse second half starting from ptr1
    let prev = null;
    let curr = ptr1;

    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    // Step 3: Compare both halves
    let left = head;
    let right = prev;

    while (right) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
};
