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
    let stack = [];

    let ptr1 = head;

    while(ptr1 != null){
        stack.push(ptr1.val);
        ptr1 = ptr1.next;
    }

    let ptr2 = head;

    while(ptr2 != null){
        let val1 = ptr2.val;
        let val2 =stack.pop()

        if(val1 !== val2){
            return false;
        }

        ptr2 = ptr2.next;
    }
     
     return true;
};