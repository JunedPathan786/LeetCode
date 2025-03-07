/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let right = new Array(n).fill(1);

    let prod = 1;

    for(let i=n-1; i>=0; i--){
        prod = prod * nums[i];
        right[i] = prod;
    }

    let ans = new Array(n).fill(1);

    let left = 1;

    for(let i=0; i<n-1; i++){
        let val = left *  right[i+1];
        ans[i] = val;
        left =  left * nums[i];
    }

    ans[n-1] = left;

    return ans;
};