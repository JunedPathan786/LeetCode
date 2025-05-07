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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) return [];

    const result = [];
    let currentLevel = [root];
    let leftToRight = true;

    while (currentLevel.length > 0) {
        const levelValues = [];
        const nextLevel = [];

        for (let node of currentLevel) {
            if (leftToRight) {
                levelValues.push(node.val);
            } else {
                levelValues.unshift(node.val);
            }

            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }

        result.push(levelValues);
        currentLevel = nextLevel;
        leftToRight = !leftToRight;
    }

    return result;
};
