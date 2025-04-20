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
var oddEvenList = function(head) {
    if(head == null || head.next == null || head.next.next == null){
        return head;
    }

    let oddhead = head;
    let evenhead = oddhead.next;
    let evenstart = evenhead;

    while(evenhead!=null && evenhead.next!=null){
        oddhead.next = oddhead.next.next;
        evenhead.next = evenhead.next.next;

        oddhead = oddhead.next;
        evenhead = evenhead.next;
    }

    oddhead.next = evenstart;

    return head;
};