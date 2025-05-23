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

function helper(root, sumObj){
    if(root == null) {
        return;
    }

    helper(root.right, sumObj);

    sumObj.sum += root.val;
    root.val = sumObj.sum;
    
    helper(root.left, sumObj);
}

var bstToGst = function(root) {
    helper(root, { sum: 0 });
    return root;
};


