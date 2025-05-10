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


function helper(root, ans ,level)
{
    if(root == null){
        return;
    }

    if(ans.length == level){
        ans.push(root.val)
    }

    helper(root.right, ans, level+1);
    helper(root.left, ans, level+1);
}
var rightSideView = function(root) {
    let ans = [];
    helper(root, ans, 0);
    return ans;
};