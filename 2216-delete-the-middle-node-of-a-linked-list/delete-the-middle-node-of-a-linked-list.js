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
var deleteMiddle = function(head) {
    if (head == null || head.next == null) {
        return null; 
    }

    let fast = head;
    let slow = head;
    let pre = null; 

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        pre = slow; 
        slow = slow.next;
    }

    pre.next = slow.next;

    return head;
};
