/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseLL(head) {
    let curr = head;
    let prev = null;

    while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}

var doubleIt = function(head) {
    let nhead = reverseLL(head);
    let dummy = new ListNode(-1);
    let curr = dummy;

    let carry = 0;

    while (nhead != null) {
        let sum = nhead.val * 2 + carry;
        let d = sum % 10;
        carry = Math.floor(sum / 10);

        curr.next = new ListNode(d);
        curr = curr.next;
        nhead = nhead.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return reverseLL(dummy.next);
};
