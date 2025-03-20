/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    
    if (n === 0) return 0;

    let leftmax = new Array(n).fill(0);
    let rightmax = new Array(n).fill(0);
    
    leftmax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftmax[i] = Math.max(leftmax[i - 1], height[i]);
    }

    rightmax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightmax[i] = Math.max(rightmax[i + 1], height[i]);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.min(leftmax[i], rightmax[i]) - height[i];
    }

    return ans;
};
