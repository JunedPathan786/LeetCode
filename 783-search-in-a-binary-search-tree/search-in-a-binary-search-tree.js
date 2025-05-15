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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let temp = root;

  while(temp != null){
    if(temp.val == val){
        break;
    }else if(temp.val > val){
        temp = temp.left;
    }else{
        temp = temp.right;
    }
  }
  return temp;
};