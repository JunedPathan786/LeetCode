/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0
    let stack = []
    let n = heights.length

    for(let i=0; i<=n; i++){
        let currentHeight = (i==n) ? 0 : heights[i]
        while(stack.length && currentHeight < heights[stack[stack.length - 1]]){
            let height = heights[stack.pop()]
            let width = stack.length === 0 ? i  : i - stack[stack.length - 1] - 1
            maxArea = Math.max(maxArea, height * width)
        }
        stack.push(i)
    }
    return maxArea
};