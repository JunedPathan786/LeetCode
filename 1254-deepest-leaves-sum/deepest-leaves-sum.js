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

let ans = 0;

function height(root){
    if(root == null){
        return 0;
    }

    let lh = height(root.left);
    let rh = height(root.right);

    return Math.max(lh,rh) + 1;
}

var deepestLeavesSum = function(root) {
    ans = 0;
    let h = height(root);
    helper(root, h);
    return ans;
};

function helper(root, height){
    if(root == null){
        return;
    }

    if(height === 1){
        ans += root.val;
    }

    helper(root.left, height-1);
    helper(root.right, height-1);
}