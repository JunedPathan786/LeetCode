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
 * @return {boolean}
 */


var isBalanced = function(root) {
    return checkBalance(root) !== -1;
};

function checkBalance(node) {
    if (node == null) return 0;

    let leftHeight = checkBalance(node.left);
    if (leftHeight === -1) return -1;

    let rightHeight = checkBalance(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return 1 + Math.max(leftHeight, rightHeight);
}

