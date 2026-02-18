/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;

    let result = new Array(n).fill(1);

    let pre = 1 , post = 1;

    for(let i = 0; i < n ; i++){
        result[i] = pre;
        pre = nums[i] * pre;
    }

    for(let i = n - 1; i >= 0 ; i--){
        result[i] = result[i] * post;
        post = nums[i] * post
    }

    return result
};