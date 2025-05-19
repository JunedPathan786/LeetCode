/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function getMiddle(head) {
    if(head === null){
        return null;
    }

    let fast = head;
    let slow = head;
    let pre = null;

    while(fast !== null && fast.next !== null){
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if(pre !== null){
        pre.next = null;
    }
    return slow;
}

var sortedListToBST = function(head) {
    if(head == null){
        return null;
    }else if(head.next === null){
        return new TreeNode(head.val);
    }

    const mid = getMiddle(head);
    
    const root = new TreeNode(mid.val);

    root.left = sortedListToBST(head);
    root.right = sortedListToBST(mid.next);

    return root;
};