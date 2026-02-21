/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let right = height.length - 1

    let total = 0
    let leftMax = height[0]
    let rightMax = height[right]

    while(left < right){
        if(height[left] < height[right]){
            leftMax = Math.max(leftMax, height[left])
            if(leftMax - height[left] > 0){
                total += leftMax - height[left]
            }
            left++
        }else{
            rightMax = Math.max(rightMax, height[right])
            if(rightMax - height[right] > 0){
                total += rightMax - height[right]
            }
            right--
        }
    }
    return total
};