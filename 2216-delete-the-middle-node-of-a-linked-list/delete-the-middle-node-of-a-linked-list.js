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
        return null; // Agar sirf ek node hai, to use hata dena hai
    }

    let fast = head;
    let slow = head;
    let pre = null; // Pre ko null se shuru karo

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        pre = slow;         // slow ke pehle waale node ko yaad rakho
        slow = slow.next;
    }

    // Middle node ko hata do
    pre.next = slow.next;

    return head;
};
