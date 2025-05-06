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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let ans = [];

    if (root == null) return ans;

    if (root.left == null && root.right == null) {
        ans.push("" + root.val);
        return ans;
    }

    let leftPaths = binaryTreePaths(root.left);
    let rightPaths = binaryTreePaths(root.right);

    for (let path of leftPaths) {
        ans.push(root.val + "->" + path);
    }

    for (let path of rightPaths) {
        ans.push(root.val + "->" + path);
    }

    return ans;
};