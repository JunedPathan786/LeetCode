/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 
function sizeLL(head){
    let count = 0;

    let ptr = head;

    while(ptr != null){
        count++;

        ptr = ptr.next;
    }
    return count;
}

var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null){
        return null;
    }

    let size1 = sizeLL(headA);
    let size2 = sizeLL(headB);

    let diff = size1 - size2;

    let ptr1 = headA;
    let ptr2 = headB;

    if(diff>0){
        while(diff>0){
            ptr1 = ptr1.next;
            diff--;
        }
    }else{
        while(diff<0){
            ptr2 = ptr2.next;
            diff++;
        }
    }

    while(ptr1 != ptr2){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return ptr1;
};

