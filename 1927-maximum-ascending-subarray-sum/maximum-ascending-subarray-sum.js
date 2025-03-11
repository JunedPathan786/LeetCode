/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max = nums[0];
    let currmax = nums[0];

    for(let i=1; i<nums.length; i++){

        if(nums[i-1]<nums[i]){
            currmax = currmax + nums[i];
        }else{
            max = Math.max(currmax, max);
            currmax = nums[i];
        }
    }
    
    max = Math.max(currmax, max);

    return max;
};