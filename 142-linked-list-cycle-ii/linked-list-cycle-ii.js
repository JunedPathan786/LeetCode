/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head == null){
        return null;
    }

    let fast = head;
    let slow = head;
    let ptr = head;

    while(fast != null && fast.next != null ){
        fast = fast.next.next;
        slow = slow.next;

        if(fast == slow){ //there is a cycle in LL

            while(ptr!=slow){
                 ptr = ptr.next;
                 slow = slow.next
            }
            return ptr;
        }
    }
    return null;
};