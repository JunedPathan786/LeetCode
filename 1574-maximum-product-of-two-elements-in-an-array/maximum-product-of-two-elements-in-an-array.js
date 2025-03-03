/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -1;
    let smax = -1;

    for(let i=0; i<nums.length; i++){
       if(max < nums[i]){
        smax = max;
        max = nums[i];
       }else if(smax < nums[i]){
        smax = nums[i];
    }
} 

    let ans = (max-1) * (smax-1);

    return ans;
};