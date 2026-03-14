/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = [1]
    dummy.next = head

    let front = dummy
    let back = dummy

    for(let i=0; i<=n; i++){
        front = front.next
    }

    while(front != null){
        front = front.next
        back = back.next
    }
    back.next = back.next.next
    return dummy.next
};