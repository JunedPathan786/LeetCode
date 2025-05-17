/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null){
        return null;
    }

    let temp = root;

    while(temp != null){

        if(temp.val > p.val && temp.val > q.val){
            temp = temp.left;
        }else if(temp.val < p.val && temp.val < q.val){
            temp = temp.right;
        }else{
            break;
        }
    } 
    return temp;
};