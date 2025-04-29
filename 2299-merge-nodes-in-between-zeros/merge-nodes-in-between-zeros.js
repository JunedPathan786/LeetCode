var mergeNodes = function(head) {
    let dummy = new ListNode(-1);
    let ans = dummy;
    let curr = head.next;
    let sum = 0;
    
    while (curr != null) {
        if (curr.val != 0) {
            sum += curr.val;
        } else {
            let temp = new ListNode(sum);
            dummy.next = temp;
            dummy = dummy.next;
            sum = 0;
        }
        curr = curr.next; 
    }

    return ans.next;
};
