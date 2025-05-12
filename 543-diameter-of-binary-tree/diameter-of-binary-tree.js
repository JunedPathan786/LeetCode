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
 * @return {number}
 */

let dia = 0;

function height(root) {
    if (root == null) {
        return 0;
    }

    let lh = height(root.left);
    let rh = height(root.right);

    dia = Math.max(lh + rh, dia);

    return Math.max(lh, rh) + 1;
}

var diameterOfBinaryTree = function(root) {
    dia = 0;  
    height(root);
    return dia;
};
