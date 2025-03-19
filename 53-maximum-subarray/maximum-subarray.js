/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currsum = nums[0];
    let max = nums[0];

    for(let i=1; i<nums.length; i++){

        if(currsum + nums[i] > nums[i]){
            currsum += nums[i];
        }else{
            currsum = nums[i];
        }

        max = Math.max(currsum, max);
    }

    return max;
};