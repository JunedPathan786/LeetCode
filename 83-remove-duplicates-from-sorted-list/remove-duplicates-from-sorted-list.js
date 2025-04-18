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
var deleteDuplicates = function(head) {
    if(head == null || head.next == null){
        return head;
    }

    let dummy = new ListNode(head.val);
    let ans = dummy;

    let ptr = head.next;

    while(ptr != null){
        if(ptr.val != dummy.val){
            // let temp = new ListNode(ptr.val);
            dummy.next = ptr;
            dummy = dummy.next;
        }
        ptr = ptr.next;
    }

    dummy.next = null;
    return ans;
};