/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = [1]
    let merge = dummy

    while(list1 != null & list2 != null){
        if(list1.val < list2.val){
            merge.next = list1
            list1 = list1.next
        }else{
            merge.next = list2
            list2 = list2.next
        }
        merge = merge.next
    }

    if(merge.next == list1 && list1 == null){
        merge.next = list2 
    }else{
        merge.next = list1
    }

    return dummy.next
};