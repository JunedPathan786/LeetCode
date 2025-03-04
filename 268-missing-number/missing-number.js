/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let range = nums.length;
    let actualSum  = (range * (range + 1)) /2;
    let currSum = 0;

    for(let i=0; i<nums.length; i++){
        currSum = currSum + nums[i];
    }

    let ans = actualSum  - currSum;
    return ans;
};