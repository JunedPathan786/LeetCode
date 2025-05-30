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
 * @return {number[]}
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var postorderTraversal = function(root) {
  const result = [];

  function traverse(node) {
    if (!node) return;
    traverse(node.left);    // Left
    traverse(node.right);   // Right
    result.push(node.val);  // Root
  }

  traverse(root);
  return result;
};
