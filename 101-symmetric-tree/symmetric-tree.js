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

function helper(root1, root2) {
    if (root1 == null || root2 == null) {
        return root1 === root2;
    }
    if (root1.val === root2.val) {
        let ans1 = helper(root1.left, root2.right);
        let ans2 = helper(root1.right, root2.left);
        return ans1 && ans2;
    } else {
        return false;
    }
}

var isSymmetric = function(root) {
    if (root == null) {
        return true;
    }
    return helper(root.left, root.right);
};
