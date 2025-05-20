/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function inorder(root, list){
    if(root == null){
        return;
    }

    inorder(root.left, list);
    list.push(root.val);
    inorder(root.right, list);
}

function BSTMaker(list, start, end){
    if(start > end){
        return null;
    }
    
    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(list[mid]);

    root.left = BSTMaker(list, start , mid - 1);
    root.right = BSTMaker(list , mid+1, end);

    return root;
}

var balanceBST = function(root) {
    let list = [];
    inorder(root, list);

    return BSTMaker(list, 0, list.length-1);
};

