/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function helper(arr, start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);

    let root = new TreeNode(arr[mid]);

    root.left = helper(arr, start, mid - 1);
    root.right = helper(arr, mid + 1, end);

    return root;
}

var sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length - 1);
};
